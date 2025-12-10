import type { CashierArchive } from "@/types";
import type { FC } from "react";

type Props = {
  acv: CashierArchive;
};

const CashierList: FC<Props> = ({ acv }) => {
  return (
    <div className="flex bg-chart-5 font-semibold py-2 rounded">
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
  );
};

export default CashierList;
