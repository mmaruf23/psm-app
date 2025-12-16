import { useSyncExternalStore } from "react";

const subscribe = (callback: () => void) => {
  window.addEventListener("kode_toko", callback);
  return () => window.removeEventListener("kode_toko", callback);
};

const getSnapshoot = () => {
  return localStorage.getItem("kode_toko");
};

const useStoreCode = () => {
  return useSyncExternalStore(subscribe, getSnapshoot);
};

export default useStoreCode;
