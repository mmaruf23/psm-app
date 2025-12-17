import type { CashierArchive } from "@/types";
import type { FC } from "react";

type Props = {
  acv: CashierArchive;
  target_min: string;
};

const CashierList: FC<Props> = ({ acv, target_min }) => {
  const { nik, nama, jabatan, qty_act, pct, pos_umum, pos_branch, pos_region, pos_nas } = acv;
  return (
    <>
      <div className="hidden lg:flex bg-chart-5 font-semibold py-2 rounded overflow-auto">
        <span className="w-1/12">{nik}</span>
        <span className="w-2/12 line-clamp-1">{nama}</span>
        <span className="w-2/12 line-clamp-1">{jabatan}</span>
        <span className="w-1/12">{qty_act}</span>
        <span className="w-1/12">{target_min}</span>
        <span className="w-1/12">{pct}</span>
        <span className="w-1/12">{pos_umum}</span>
        <span className="w-1/12">{pos_branch}</span>
        <span className="w-1/12">{pos_region}</span>
        <span className="w-1/12">{pos_nas}</span>
      </div>
      <div className="lg:hidden bg-chart-4 rounded p-2 font-serif">
        <div className="flex justify-between">
          <span className="text-2xl line-clamp-1">{nama}</span>
          <span>
            {qty_act}/{target_min}/{pct}%
          </span>
        </div>
        <div className="flex justify-between">
          <span>{nik}</span>
          <span className="flex gap-2 text-sm">
            <span>{pos_umum}</span>
            <span className="text-red-700">{pos_branch}</span>
            <span className="text-green-700">{pos_region}</span>
            <span className="text-blue-700">{pos_nas}</span>
          </span>
        </div>
      </div>
    </>
  );
};

export default CashierList;
