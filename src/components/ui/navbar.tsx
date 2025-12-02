import { isValidStoreCode } from '@/helpers/validator';
import { useEffect, useState, type ChangeEvent } from 'react';

const Navbar = () => {
  const [openForm, setOpenForm] = useState<boolean>(false);
  const [kodeToko, setKodeToko] = useState<string | null>(
    localStorage.getItem('kode_toko')
  );

  const handleSubmit = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length < 4) return;
    if (!isValidStoreCode(e.target.value)) {
      alert('Kode toko tidak valid!');
      return;
    }

    setKodeToko(e.target.value);
    localStorage.setItem('kode_toko', e.target.value);
  };

  useEffect(() => {
    console.log('render navbar');
  }, []);
  return (
    <div className="w-full bg-red-500">
      <div className="flex justify-between items-center px-20 h-20 gap-2">
        <div className="w-[20%] bg-red-600 text-left">LOGO</div>
        <div className="grow bg-red-600 text-center">{kodeToko}</div>
        <div className="w-[20%] bg-red-600 text-right">
          <button onClick={() => setOpenForm((prev) => !prev)}>BUTTON</button>
        </div>
      </div>
      {openForm && (
        <div className="fixed z-20 top-[50%] left-[50%] -translate-1/2 bg-red-500 p-4">
          <p>Error misalnya</p>
          <input
            onChange={handleSubmit}
            type="text"
            className="px-2 bg-white rounded"
          />
        </div>
      )}
    </div>
  );
};

export default Navbar;
