import { parseItemProgramName } from "@/helpers/parser";
import type { ProgramData } from "@/types";
import type { FC } from "react";

type Props = {
  programData: ProgramData;
  i: number;
  picked: boolean;
  handlePick: (i: number) => void;
};

const ProgramList: FC<Props> = ({ programData, picked, i, handlePick }) => {
  return (
    <div
      className={`outline-2 p-2 rounded ${picked ? "outline-white" : "outline-black"}`}
      onClick={() => handlePick(i)}
    >
      {parseItemProgramName(programData.items[0].descp)}
    </div>
  );
};

export default ProgramList;
