import { fetchArchiveData, fetchProgramData } from "@/helpers/fetcher";
import type { ArchiveData, ProgramData, SuccessResponse } from "@/types";
import { useCallback, useEffect, useState } from "react";
import { toast } from "sonner";
import CashierList from "../ui/cashier_list";
import ItemList from "../ui/item_list";
import ProgramList from "../ui/program_list";
import Loader from "../ui/loader";
import { useLocation } from "react-router";

const ArchiveContent = () => {
  const [programData, setProgramData] = useState<ProgramData[]>([]);
  const [archiveData, setArchiveData] = useState<ArchiveData | null>(null);
  const [pickedProgram, setPickedProgram] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [periodeType, setPeriodeType] = useState<"now" | "before">("now");
  const location = useLocation();

  const handleFetchArchiveData = useCallback(
    async (kodeProgram: string) => {
      console.log("mulai update archive data");
      const plainCache = sessionStorage.getItem(kodeProgram);
      if (plainCache) {
        const cache = JSON.parse(plainCache) as SuccessResponse<ArchiveData>;
        setArchiveData(cache.data!);
        console.log("done dari cache!");
        return;
      }

      setIsLoading(true);
      const kodeToko = localStorage.getItem("kode_toko")!;

      const result = await fetchArchiveData(kodeToko, kodeProgram, periodeType);
      if (!result.success) {
        toast.error(result.message, { position: "top-center" });
        return;
      }

      setArchiveData(result.data!);
      console.log("done dari fetching");
      setIsLoading(false);
    },
    [periodeType]
  );

  const handlePick = (i: number) => {
    if (i === pickedProgram) return;
    setPickedProgram(i);
    const kode_program = programData[i].kode_program;
    handleFetchArchiveData(kode_program);
  };

  const handleFetchProgramData = useCallback(async () => {
    console.log("memulai fetching program data!");
    const kodeToko = localStorage.getItem("kode_toko");
    if (!kodeToko) {
      toast.warning("Silakan set kode toko terlebih dahulu", {
        position: "top-center",
      });
      return;
    }

    // yang dari local pindahin ke sini aja ?
    const result = await fetchProgramData();
    if (!result.success) {
      toast.error(result.message, { position: "top-center" });
      return;
    }

    setProgramData(result.data!);
    handleFetchArchiveData(result.data![0].kode_program);
  }, [handleFetchArchiveData]);

  useEffect(() => {
    console.log("terdeteksi location berubah!", location.pathname);
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setPeriodeType(location.pathname === "/before" ? "before" : "now");
    handleFetchProgramData();
  }, [location.pathname, handleFetchProgramData]);

  if (!localStorage.getItem("kode_toko")) {
    return <div className="flex justify-center mt-20">silahkan set kode toko terlebih dahulu</div>;
  }

  return (
    <div className="flex flex-col h-full gap-4">
      <div className="min-h-20 flex flex-wrap gap-4 items-center">
        {programData.map((p, i) => (
          <ProgramList key={i} i={i} handlePick={handlePick} picked={i === pickedProgram} programData={p} />
        ))}
      </div>
      <div className="grow outline flex gap-4">
        <div className="hidden md:block md:w-[25%] bg-chart-3 rounded-md p-3">
          <span className="mt-2 text-xl font-serif font-semibold">LIST ITEM :</span>
          <ul className="mt-4">
            {programData[pickedProgram]?.items.map((item, i) => (
              <ItemList key={i} item={item} />
            ))}
          </ul>
        </div>
        <div className="w-full flex flex-col gap-2 bg-chart-3 rounded-md p-3 relative">
          <div className="hidden md:flex py-1 text-xl border-b font-bold font-serif">
            <span className="w-1/12">NIK</span>
            <span className="w-3/12">NAMA</span>
            <span className="w-2/12">JABATAN</span>
            <span className="w-1/12">ACT</span>
            <span className="w-1/12">PCT</span>
            <span className="w-1/12">UMUM</span>
            <span className="w-1/12">CABANG</span>
            <span className="w-1/12">REG</span>
            <span className="w-1/12">NAS</span>
          </div>
          {archiveData && archiveData.cashier.map((acv, i) => <CashierList key={i} acv={acv} />)}
          {isLoading && <Loader />}
        </div>
      </div>
    </div>
  );
};

export default ArchiveContent;
