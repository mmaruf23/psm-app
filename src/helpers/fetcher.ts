import type { ApiResponse, ArchiveData, ProgramData } from "@/types";
import { parsePeriodeType } from "./parser";
import { dummyArchiveDataResponse, dummyProgramDataResponse } from "@/samples/dummy";
import { isValidProgramCode, isValidStoreCode } from "./validator";

export const fetchProgramData = async (p: string = "now"): Promise<ApiResponse<ProgramData[]>> => {
  const periodeType = parsePeriodeType(p);
  const cache = sessionStorage.getItem(periodeType);

  if (cache) return JSON.parse(cache) as ApiResponse<ProgramData[]>;
  console.log("karena di local tidak ada maka ambil ke server atau dummy");

  if (import.meta.env.DEV) {
    sessionStorage.setItem(periodeType, JSON.stringify(dummyProgramDataResponse));
    console.log("tidak lupa di set dulu");
    return dummyProgramDataResponse;
  }

  try {
    const result = await fetch(`https://psm.maruuf82.workers.dev/psm?periode=${periodeType}`);
    const resultJson = (await result.json()) as ApiResponse<ProgramData[]>;
    console.log("tidak lupa di set dulu");
    sessionStorage.setItem(periodeType, JSON.stringify(resultJson));
    return resultJson;
  } catch (error) {
    console.error(error);
    return { success: false, code: 400, message: "fail sending request to server api" };
  }
};

export const fetchArchiveData = async (
  kode_toko: string,
  kode_program: string,
  type: string,
  real_fetch: boolean = false
): Promise<ApiResponse<ArchiveData>> => {
  if (!isValidStoreCode(kode_toko)) return { success: false, code: 400, message: "FORMAT KODE TOKO SALAH" };
  if (!isValidProgramCode(kode_program)) return { success: false, code: 400, message: "INVALID KODE PROGRAM FORMAT" };
  const periodeType = parsePeriodeType(type);

  if (!real_fetch) {
    const cache = sessionStorage.getItem(kode_program);
    if (cache) return JSON.parse(cache) as ApiResponse<ArchiveData>;
  }

  if (import.meta.env.DEV) {
    console.log("tidak lupa di set dulu");
    sessionStorage.setItem(kode_program, JSON.stringify(dummyArchiveDataResponse));
    return dummyArchiveDataResponse;
  }

  try {
    const result = await fetch(
      `https://psm.maruuf82.workers.dev/psm/${kode_toko}/${kode_program}?periode=${periodeType}`
    );
    const resultJson = (await result.json()) as ApiResponse<ArchiveData>;
    sessionStorage.setItem(kode_program, JSON.stringify(resultJson));
    return resultJson;
  } catch (error) {
    console.error(error);
    return { success: false, code: 400, message: "fail sending request to server api" };
  }
};
