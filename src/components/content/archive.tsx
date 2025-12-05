import { fetchProgramData } from "@/helpers/fetcher";
import { parseItemProgramName } from "@/helpers/parser";
import type { ProgramData } from "@/types";
import { useEffect, useState } from "react";

const ArchiveContent = () => {
  const [data, setData] = useState<ProgramData[]>([]);
  const [pickedProgram, setPickedProgram] = useState<number>(0);

  const handleFetchData = async () => {
    if (data.length === 0) {
      const result = await fetchProgramData();
      if (!result.success || !result.data) return;
      setData(result.data);
    }
  };

  handleFetchData();

  const handlePick = (i: number) => {
    if (pickedProgram !== i) setPickedProgram(i);
  };

  useEffect(() => {}, [pickedProgram]);

  return (
    <div className="flex flex-col h-full gap-4">
      <div className="h-20 flex gap-4 items-center">
        {data.map((p, i) => (
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
        <div className="w-[25%] outline-1 outline-white">
          <span>List Item :</span>
          <ul>
            {data[pickedProgram]?.items.map((item) => (
              <li key={item.plu}>
                <span>
                  {item.plu} {item.descp}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div>Pencapaian</div>
      </div>
    </div>
  );
};

export default ArchiveContent;
