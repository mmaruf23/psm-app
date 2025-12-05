import { fetchArchiveData, fetchProgramData } from "@/helpers/fetcher";
import type { ArchiveData, ProgramData } from "@/types";
import { useState } from "react";
import { toast } from "sonner";
import CashierList from "../ui/cashier_list";
import ItemList from "../ui/item_list";
import ProgramList from "../ui/program_list";

const ArchiveContent = () => {
  const [programData, setProgramData] = useState<ProgramData[]>([]);
  const [archiveData, setArchiveData] = useState<ArchiveData | null>(null);
  const [pickedProgram, setPickedProgram] = useState<number>(0);

  const handleFetchProgramData = async () => {
    const kodeToko = localStorage.getItem("kode_toko");
    if (!kodeToko) {
      toast.warning("Silakan set kode toko terlebih dahulu");
      return;
    }
    const result = await fetchProgramData();
    if (!result.success) {
      toast.error(result.message);
      return;
    }

    setProgramData(result.data!);
    handleFetchArchiveData(result.data![0].kode_program);
  };

  const handleFetchArchiveData = async (kode_program: string) => {
    const type = "now"; // nanti jadiin dinamis pake useLocation.pake function bisa.
    const kodeToko = localStorage.getItem("kode_toko")!;

    const result = await fetchArchiveData(kodeToko, kode_program, type);
    if (!result.success) {
      toast.error(result.message);
      return;
    }

    setArchiveData(result.data!);
  };

  const handlePick = (i: number) => {
    if (i === pickedProgram) return;
    setPickedProgram(i);
    const kode_program = programData[i].kode_program;
    handleFetchArchiveData(kode_program);
  };

  if (!localStorage.getItem("kode_toko")) {
    return <div className="flex justify-center mt-20">silahkan set kode toko terlebih dahulu</div>;
  }

  if (programData.length === 0) {
    handleFetchProgramData();
  }

  return (
    <div className="flex flex-col h-full gap-4">
      <div className="min-h-20 flex flex-wrap gap-4 items-center">
        {programData.map((p, i) => (
          <ProgramList key={i} i={i} handlePick={handlePick} picked={i === pickedProgram} programData={p} />
        ))}
      </div>
      <div className="grow outline outline-black flex gap-4">
        <div className="hidden md:block md:w-[25%] outline-1 outline-white">
          <span>List Item :</span>
          <ul>
            {programData[pickedProgram]?.items.map((item, i) => (
              <ItemList key={i} item={item} />
            ))}
          </ul>
        </div>
        <div className="w-full flex flex-col gap-2">
          <div className="outline outline-black hidden md:flex py-1 text-xl font-bold font-serif">
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
        </div>
      </div>
    </div>
  );
};

export default ArchiveContent;
