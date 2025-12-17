import type { StoreData } from "@/types";
import { SettingsIcon, MSquare, X } from "lucide-react";
import { useRef, useState } from "react";
import { Button } from "./button";
import { setStoreData, useStoreData } from "@/hooks/store_data";

const Topbar = () => {
  const storeData = useStoreData();

  const [showDialog, setShowDialog] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSet = async () => {
    const value = inputRef.current?.value;
    if (!value || value.length !== 4) return;
    if (value === storeData.kd_store) return;

    const newStoreData: StoreData = { cabang: "", kd_store: value, nama_store: "" };

    setStoreData(newStoreData);
  };

  return (
    <>
      <div className="flex justify-between items-center min-h-16 md:min-h-20 px-6 md:px-10 bg-chart-1">
        <div className="w-20">
          <MSquare />
        </div>

        <div className="text-white font-serif text-sm text-center lg:text-2xl font-semibold px-2 border-x-2 rounded-tl-2xl rounded-br-2xl">
          {storeData.nama_store || storeData.kd_store}
        </div>
        <div className="w-20 flex justify-end">
          <SettingsIcon onClick={() => setShowDialog((p) => !p)} />
        </div>
      </div>

      {showDialog && (
        <div className="fixed z-10 top-1/2 left-1/2 -translate-1/2 w-full h-full rounded-xl flex justify-center items-center">
          <div onClick={() => setShowDialog(false)} className="absolute inset-0 bg-black/50"></div>
          <div className="z-20 bg-white/20 rounded-md h-70 w-100 flex flex-col relative">
            <div className="grow flex justify-center items-center">
              <div onClick={() => setShowDialog(false)} className="absolute right-0 top-0">
                <X className="p-1.5 text-white bg-black rounded-tr-md" size={40} />
              </div>
              <input ref={inputRef} className="bg-white px-2 py-1 rounded" type="text" placeholder="Kode Toko.." />
              <Button onClick={() => handleSet()}>Set</Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Topbar;
