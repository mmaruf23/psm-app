import { fetchArchiveData, fetchProgramData } from "@/helpers/fetcher";
import { parseItemProgramName } from "@/helpers/parser";
import type { ArchiveData, ProgramData } from "@/types";
import { useState } from "react";
import { toast } from "sonner";

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
    return <div>silahkan set kode toko terlebih dahulu</div>;
  }

  if (programData.length === 0) {
    handleFetchProgramData();
  }

  return (
    <div className="flex flex-col h-full gap-4">
      <div className="min-h-20 flex flex-wrap gap-4 items-center">
        {programData.map((p, i) => (
          <div
            key={i}
            className={`outline-2 p-2 ${i === pickedProgram ? "outline-white" : "outline-black"}`}
            onClick={() => handlePick(i)}
          >
            {parseItemProgramName(p.items[0].descp)}
          </div>
        ))}
      </div>
      <div className="grow outline outline-black flex gap-4">
        <div className="hidden md:block md:w-[25%] outline-1 outline-white">
          <span>List Item :</span>
          <ul>
            {programData[pickedProgram]?.items.map((item) => (
              <li key={item.plu}>
                <span>
                  {item.plu} {item.descp}
                </span>
              </li>
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
          {archiveData &&
            archiveData.cashier.map((acv, i) => (
              <div key={i} className="flex">
                <span className="w-1/12">{acv.nik}</span>
                <span className="w-3/12">{acv.nama}</span>
                <span className="w-2/12">{acv.jabatan}</span>
                <span className="w-1/12">{acv.qty_act}</span>
                <span className="w-1/12">{acv.pct}</span>
                <span className="w-1/12">{acv.pos_umum}</span>
                <span className="w-1/12">{acv.pos_branch}</span>
                <span className="w-1/12">{acv.pos_region}</span>
                <span className="w-1/12">{acv.pos_nas}</span>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ArchiveContent;
