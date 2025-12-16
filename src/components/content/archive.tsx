import { fetchArchiveData, fetchProgramData, fetchStoreData } from "@/helpers/fetcher";
import type { ApiResponse, ArchiveData, ProgramData, SuccessResponse } from "@/types";
import { useCallback, useEffect, useState } from "react";
import { toast } from "sonner";
import CashierList from "@/components/ui/cashier_list";
import ItemList from "@/components/ui/item_list";
import ProgramList from "@/components/ui/program_list";
import Loader from "@/components/ui/loader";
import { useLocation } from "react-router";
import { setStoreData, useStoreData } from "@/hooks/store_data";

const ArchiveContent = () => {
  const [programData, setProgramData] = useState<ProgramData[]>([]);
  const [archiveData, setArchiveData] = useState<ArchiveData | null>(null);
  const [pickedProgram, setPickedProgram] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [periodeType, setPeriodeType] = useState<"now" | "before">("now");
  const location = useLocation();

  const storeData = useStoreData();

  const handleFetchStoreData = useCallback(async (kode_toko: string, kode_program: string) => {
    console.log("handleFetchStoreData dijalankan.");

    const result = await fetchStoreData(kode_toko, kode_program);
    if (result.success && result.data) setStoreData(result.data);
  }, []);

  const handleFetchArchiveData = useCallback(
    async (kodeProgram: string) => {
      console.log("handleFetchArchiveData dijalankan.");

      const plainCache = sessionStorage.getItem(kodeProgram);
      if (plainCache) {
        const cache = JSON.parse(plainCache) as SuccessResponse<ArchiveData>;
        setArchiveData(cache.data!);
        return;
      }

      setIsLoading(true);

      const result = await fetchArchiveData(storeData.kd_store, kodeProgram, periodeType);
      if (!result.success) {
        toast.error(result.message, { position: "top-center" });
        setIsLoading(false);
        return;
      }

      setIsLoading(false);
      setArchiveData(result.data!);
    },
    [periodeType, storeData.kd_store]
  );

  const handleFetchProgramData = useCallback(async () => {
    console.log("handleFetchProgramData dijalankan. yang ini");
    const plainCache = sessionStorage.getItem(periodeType);
    if (plainCache) {
      const cache = JSON.parse(plainCache) as ApiResponse<ProgramData[]>;
      if (!cache.success) {
        toast.error(cache.message, { position: "top-center" });
        return;
      }
      setProgramData(cache.data!);
      handleFetchArchiveData(cache.data![0].kode_program);
      return;
    }

    const result = await fetchProgramData(periodeType);
    if (!result.success) {
      toast.error(result.message, { position: "top-center" });
      return;
    }

    setProgramData(result.data!);
    handleFetchArchiveData(result.data![0].kode_program);
  }, [handleFetchArchiveData, periodeType]);

  const handlePick = (i: number) => {
    if (i === pickedProgram) return;
    if (isLoading) {
      toast.info("Wait...", { position: "top-center" });
      return;
    }
    setPickedProgram(i);
  };

  useEffect(() => {
    (async () => {
      if (!storeData.kd_store) return;
      await handleFetchProgramData();
    })();
  }, [handleFetchProgramData, storeData.kd_store]);

  useEffect(() => {
    (async () => {
      const program = programData[pickedProgram];
      if (program) await handleFetchArchiveData(program.kode_program);
    })();
  }, [handleFetchArchiveData, pickedProgram, programData]);

  useEffect(() => {
    (async () => {
      setPeriodeType(location.pathname === "/before" ? "before" : "now");
    })();
  }, [location.pathname]);

  useEffect(() => {
    if (!storeData.nama_store && programData.length > 0 && programData[0].kode_program) {
      handleFetchStoreData(storeData.kd_store, programData[0].kode_program);
    }
  }, [handleFetchStoreData, programData, storeData.kd_store, storeData.nama_store]);

  if (!storeData.kd_store) {
    return (
      <div className="grow flex justify-center items-center font-bold text-4xl font-serif uppercase">
        silahkan set kode toko terlebih dahulu
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full gap-4">
      <div className="min-h-20 flex flex-wrap gap-4 items-center">
        {programData.map((p, i) => (
          <ProgramList
            key={p.kode_program}
            i={i}
            handlePick={handlePick}
            picked={i === pickedProgram}
            programData={p}
          />
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
          {archiveData && archiveData.cashier.map((acv) => <CashierList key={acv.nik} acv={acv} />)}
          {isLoading && <Loader />}
        </div>
      </div>
    </div>
  );
};

export default ArchiveContent;
