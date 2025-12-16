import useStoreCode from "@/hooks/store_code";
import { SettingsIcon, MSquare, X } from "lucide-react";
import { useState, type ChangeEvent } from "react";

const Topbar = () => {
  const kodeToko = useStoreCode();
  const [showDialog, setShowDialog] = useState<boolean>(!kodeToko);

  const handleSet = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value.length !== 4) return;

    localStorage.setItem("kode_toko", value);
    window.dispatchEvent(new Event("kode_toko"));
  };

  return (
    <>
      <div className="flex justify-between items-center min-h-16 md:min-h-20 px-6 md:px-10 bg-chart-1">
        <div className="w-20">
          <MSquare />
        </div>
        <div className="text-white font-serif text-2xl font-semibold px-2 border-x-2 rounded-tl-2xl rounded-br-2xl">
          {kodeToko}
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
              <input
                className="bg-white px-2 py-1 rounded"
                type="text"
                onChange={handleSet}
                placeholder="Kode Toko.."
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Topbar;
