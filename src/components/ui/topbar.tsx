import { SettingsIcon, MSquare } from 'lucide-react';

const Topbar = () => {
  return (
    <>
      <div className="flex justify-between items-center h-16 md:h-20 px-5 md:px-10 bg-chart-1">
        <div className="w-20">
          <MSquare />
        </div>
        <div className="text-white font-serif text-2xl font-semibold px-2 border-x-2 rounded-tl-2xl rounded-br-2xl">
          Nama Toko
        </div>
        <div className="w-20 flex justify-end">
          <SettingsIcon />
        </div>
      </div>
    </>
  );
};

export default Topbar;
