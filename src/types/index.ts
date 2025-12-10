export type SuccessResponse<T> = {
  success: true;
  code: number;
  data?: T;
};

type ErrorResponse = {
  success: false;
  code: number;
  message: string;
};

export type ApiResponse<T = unknown> = SuccessResponse<T> | ErrorResponse;

export type StoreData = {
  kd_store: string;
  nama_store: string;
  cabang: string;
};

export type ProgramData = {
  kode_program: string;
  nama_program: string;
  items: {
    plu: string;
    descp: string;
  }[];
};

export type CashierArchive = {
  nik: string;
  nama: string;
  jabatan: string;
  qty_act: string;
  pct: string;
  pos_umum: string;
  pos_branch: string;
  pos_region: string;
  pos_nas: string;
};

export type ArchiveData = {
  kd_cabang: string;
  asq: string;
  target_min: string;
  status: string;
  kd_store: string;
  cashier: CashierArchive[];
};

export type WeekType = "now" | "before" | "next";
