import type { StoreData } from "@/types";
import { useSyncExternalStore } from "react";

const EMPTY_STORE = { kd_store: "", cabang: "", nama_store: "" } as StoreData;

let cachedStore: StoreData | null = null;

const subscribe = (callback: () => void) => {
  window.addEventListener("store_data", callback);
  return () => window.removeEventListener("store_data", callback);
};

const getSnapshot = () => {
  const raw = localStorage.getItem("store_data");
  if (!raw) {
    cachedStore = EMPTY_STORE;
    return cachedStore;
  }

  if (cachedStore && raw === JSON.stringify(cachedStore)) {
    return cachedStore; // 👈 referensi sama
  }

  cachedStore = JSON.parse(raw) as StoreData;
  return cachedStore;
};

export const useStoreData = () => {
  return useSyncExternalStore(subscribe, getSnapshot);
};

export const setStoreData = (s: StoreData) => {
  localStorage.setItem("store_data", JSON.stringify(s));
  window.dispatchEvent(new Event("store_data"));
};
