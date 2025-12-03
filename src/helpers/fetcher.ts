import type { ApiResponse, ProgramData } from "@/types";
import { parsePeriodeType } from "./parser";
import { dummyProgramDataResponse } from "@/samples/dummy";

export const fetchProgramData = async (p: string = "now"): Promise<ApiResponse<ProgramData[]>> => {
  if (import.meta.env.DEV) return dummyProgramDataResponse;

  const periodeType = parsePeriodeType(p);

  try {
    const result = await fetch(`https://psm.maruuf82.workers.dev/psm?periode=${periodeType}`);
    return (await result.json()) as ApiResponse<ProgramData[]>;
  } catch (error) {
    console.error(error);
    return { success: false, code: 400, message: "fail sending request to server api" };
  }
};
