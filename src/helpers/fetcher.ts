import type { ApiResponse, ArchiveData, ProgramData, SuccessResponse } from "@/types";
import { parsePeriodeType } from "./parser";
import { isValidProgramCode, isValidStoreCode } from "./validator";
import { dummyArchiveDataResponse, dummyProgramDataResponse } from "@/samples/dummy";

export const fetchProgramData = async (periodeType: "now" | "before" = "now"): Promise<ApiResponse<ProgramData[]>> => {
  if (import.meta.env.DEV) {
    console.log("karena mode dev maka pake dummy");
    console.log("simulasi waiting 2 detik");
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log("oke dummy done, tidak lupa simpan ke session storage buat dipake lagi");
    sessionStorage.setItem(periodeType, JSON.stringify(dummyProgramDataResponse));

    return dummyProgramDataResponse;
  }

  try {
    const result = await fetch(`${import.meta.env.VITE_PSM_API}/psm?periode=${periodeType}`);
    const resultJson = (await result.json()) as ApiResponse<ProgramData[]>;
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
  periode_type: string
): Promise<ApiResponse<ArchiveData>> => {
  if (!isValidStoreCode(kode_toko)) return { success: false, code: 400, message: "FORMAT KODE TOKO SALAH" };
  if (!isValidProgramCode(kode_program)) return { success: false, code: 400, message: "INVALID KODE PROGRAM FORMAT" };
  const periodeType = parsePeriodeType(periode_type);

  if (import.meta.env.DEV) {
    sessionStorage.setItem(kode_program, JSON.stringify(dummyArchiveDataResponse));
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return dummyArchiveDataResponse;
  }

  try {
    const result = await fetch(
      `${import.meta.env.VITE_PSM_API}/psm/${kode_toko}/${kode_program}?periode=${periodeType}`
    );
    const resultJson = (await result.json()) as SuccessResponse<ArchiveData>;
    sessionStorage.setItem(kode_program, JSON.stringify(resultJson));
    return resultJson;
  } catch (error) {
    console.error(error);
    return { success: false, code: 400, message: "fail sending request to server api" };
  }
};

export const fetchStoreInfo = async (kode_toko: string, kode_program: string) => {
  if (!isValidStoreCode(kode_toko)) return { success: false, code: 400, message: "FORMAT KODE TOKO SALAH" };
  if (!isValidProgramCode(kode_program)) return { success: false, code: 400, message: "INVALID KODE PROGRAM FORMAT" };
};
