import type { ApiResponse, ArchiveData, ProgramData, StoreData } from "@/types";

export const dummyProgramDataResponse: ApiResponse<ProgramData[]> = {
  success: true,
  code: 200,
  data: [
    {
      kode_program: "25121001",
      nama_program: "PDM SAYAP MAS UTAMA PT",
      items: [
        {
          plu: "415665",
          descp: "SEDAAP MIE GRG 5X91G",
        },
        {
          plu: "415666",
          descp: "SEDAAP MIE SOTO 5X76G",
        },
        {
          plu: "451434",
          descp: "SEDAAP MIE AYAM BAWANG 5X71G",
        },
      ],
    },
    {
      kode_program: "25121002",
      nama_program: "PDM ARNOTT'S INDONESIA, PT",
      items: [
        {
          plu: "115704",
          descp: "GOOD TIME COFFEE CHO 72G",
        },
        {
          plu: "190988",
          descp: "GOOD TIME DBL CHOCO 72G",
        },
        {
          plu: "190990",
          descp: "GOOD TIME CLASSIC CHO 72G",
        },
        {
          plu: "433447",
          descp: "GOOD TIME CHOCO DIP 71G",
        },
      ],
    },
    {
      kode_program: "25121003",
      nama_program: "PDM ACE DISTRINDO SEJAHTERA PT",
      items: [
        {
          plu: "406546",
          descp: "CHUBA CASSAVA CHILI BLD 125G",
        },
        {
          plu: "451111",
          descp: "MR HOTTEST MAITOS MIGORENG 125G",
        },
        {
          plu: "401681",
          descp: "MR HOTTEST MAITOS TRL BBQ 140G",
        },
        {
          plu: "401609",
          descp: "MR HOTTEST MAITOS TRL BLD 140G",
        },
        {
          plu: "406547",
          descp: "CHUBA CASSAVA BBQ 125G",
        },
      ],
    },
    {
      kode_program: "25121004",
      nama_program: "PDM UNILEVER INDONESIA TBK PT",
      items: [
        {
          plu: "466105",
          descp: "WALL'S FEAST POP STR YOG 4X16ML",
        },
        {
          plu: "109202",
          descp: "WALL'S FEAST COKLAT 65ML",
        },
        {
          plu: "434171",
          descp: "WALL'S FEAST POP VNL CRML4X16ML",
        },
        {
          plu: "459321",
          descp: "WALL'S FEAST XTRAMAX CHOCO 73ML",
        },
        {
          plu: "109203",
          descp: "WALL'S FEAST VANILA 65ML",
        },
      ],
    },
    {
      kode_program: "25121005",
      nama_program: "PDM UNILEVER INDONESIA TBK PT",
      items: [
        {
          plu: "434243",
          descp: "SUNLIGHT MNDR LOVE REF600ML",
        },
        {
          plu: "433323",
          descp: "SUNLIGHT JERUK NPS REF660G",
        },
        {
          plu: "432389",
          descp: "SUNLIGHT KRN STRWB REF600ML",
        },
        {
          plu: "437941",
          descp: "SUNLIGHT EXT LEMBUT REF 600ML",
        },
        {
          plu: "444497",
          descp: "SUNLIGHT BIO NATURE REF 600ML",
        },
        {
          plu: "434244",
          descp: "SUNLIGHT DAUN MINT REF600ML",
        },
      ],
    },
    {
      kode_program: "25121006",
      nama_program: "PDM MAYORA INDAH TBK PT",
      items: [
        {
          plu: "404759",
          descp: "LE MINERALE AIR MNRL PET 1500ML",
        },
        {
          plu: "990055",
          descp: "LE MINERALE AIR MNRL PET 600ML",
        },
      ],
    },
    {
      kode_program: "25121007",
      nama_program: "PDM UNILEVER INDONESIA TBK PT",
      items: [
        {
          plu: "122454",
          descp: "LIFEBUOY BW TOTAL10 REF 400G/ML",
        },
        {
          plu: "122455",
          descp: "LIFEBUOY BW MILD CR REF 400G/ML",
        },
        {
          plu: "320858",
          descp: "LIFEBUOY BW COOL FR REF 400G/ML",
        },
        {
          plu: "407294",
          descp: "LIFEBUOY BW LEMON F REF 800G/ML",
        },
        {
          plu: "426821",
          descp: "LIFEBUOY BW SHISO MC 380G/ML",
        },
        {
          plu: "126395",
          descp: "LIFEBUOY BW LEMON F REF 400G/ML",
        },
        {
          plu: "432534",
          descp: "LIFEBUOY BW 3IN1 380G/ML",
        },
        {
          plu: "407295",
          descp: "LIFEBUOY BW TOTAL10 REF 800G/ML",
        },
        {
          plu: "413318",
          descp: "LIFEBUOY BW GREEN TEA&A.V 380ML",
        },
        {
          plu: "442365",
          descp: "LIFEBUOY BW TIN & ZTN 380G/ML",
        },
        {
          plu: "407293",
          descp: "LIFEBUOY BW MILD CR REF 800G/ML",
        },
      ],
    },
    {
      kode_program: "25121008",
      nama_program: "PDM FRISIAN FLAG INDONESIA PT",
      items: [
        {
          plu: "115957",
          descp: "FF UHT PF COKELAT TP 225ML",
        },
        {
          plu: "402199",
          descp: "FF UHT PF COCONUT TP 225ML",
        },
        {
          plu: "437246",
          descp: "FF UHT SEREAL TP 225ML",
        },
        {
          plu: "114655",
          descp: "FF UHT PF LF VANILA TP 225ML",
        },
        {
          plu: "115958",
          descp: "FF UHT PF STROBERI TP 225ML",
        },
        {
          plu: "125699",
          descp: "FF UHT PF LF STROBERI TP 225ML",
        },
        {
          plu: "440502",
          descp: "FF UHT SEREAL KOPI TP 225ML",
        },
        {
          plu: "120076",
          descp: "FF UHTOMEGA COKELAT 6X110ML",
        },
        {
          plu: "466031",
          descp: "FF UHTOMEGA PLAIN 6X110ML",
        },
        {
          plu: "115959",
          descp: "FF UHT PF F.CREAM TP 225ML",
        },
        {
          plu: "120077",
          descp: "FF UHTOMEGA STROBERI6X110ML",
        },
        {
          plu: "447726",
          descp: "FF UHT ENERGO MATCHA 225ML",
        },
        {
          plu: "447727",
          descp: "FF UHT ENERGO BERRIES 225ML",
        },
        {
          plu: "114656",
          descp: "FF UHT PF LF HC COKELAT TP225ML",
        },
      ],
    },
    {
      kode_program: "25121009",
      nama_program: "PDM UNILEVER INDONESIA TBK PT",
      items: [
        {
          plu: "126475",
          descp: "PEPSODENT PG ECONOMY JUMBO 225G",
        },
      ],
    },
    {
      kode_program: "25121010",
      nama_program: "PDM BARCLAY PRODUCTS PT",
      items: [
        {
          plu: "310148",
          descp: "MY BABY M.TELON PLUS 150ML",
        },
        {
          plu: "125000",
          descp: "MY BABY M.TELON PLUS 90ML",
        },
        {
          plu: "431419",
          descp: "MY BABY TELON LAVENDER 90ML",
        },
        {
          plu: "238285",
          descp: "MY BABY M.TELON PLUS 60ML",
        },
        {
          plu: "434248",
          descp: "MY BABY M.TELON PLUS LAV 150ML",
        },
        {
          plu: "434247",
          descp: "MY BABY M.TELON PLUS LAV 60ML",
        },
      ],
    },
  ],
};

export const dummyArchiveDataResponse: ApiResponse<ArchiveData> = {
  success: true,
  code: 200,
  data: {
    kd_cabang: "JZ01",
    kd_store: "J599",
    asq: "3",
    target_min: "20",
    status: "On Progress",
    cashier: [
      {
        nik: "25052591",
        nama: "RICO_ARDIANSAH",
        jabatan: "Crew",
        qty_act: "0",
        pct: "0",
        pos_umum: "0",
        pos_branch: "0",
        pos_region: "0",
        pos_nas: "0",
      },
      {
        nik: "24043951",
        nama: "HANIPAH",
        jabatan: "Crew",
        qty_act: "4",
        pct: "20",
        pos_umum: "1320",
        pos_branch: "623",
        pos_region: "4370",
        pos_nas: "19194",
      },
      {
        nik: "12124101",
        nama: "DEWI PERMATA SARI",
        jabatan: "Assistant Chief of Store",
        qty_act: "0",
        pct: "0",
        pos_umum: "0",
        pos_branch: "0",
        pos_region: "0",
        pos_nas: "0",
      },
      {
        nik: "14085769",
        nama: "DONI SAPUTRA",
        jabatan: "Chief Of Store",
        qty_act: "0",
        pct: "0",
        pos_umum: "0",
        pos_branch: "0",
        pos_region: "0",
        pos_nas: "0",
      },
      {
        nik: "23022530",
        nama: "WAFIQ HIFZHANUL ZHARFAN",
        jabatan: "Crew",
        qty_act: "1",
        pct: "5",
        pos_umum: "2402",
        pos_branch: "2402",
        pos_region: "16453",
        pos_nas: "64274",
      },
      {
        nik: "25051144",
        nama: "EGA WITAYA",
        jabatan: "Crew",
        qty_act: "3",
        pct: "15",
        pos_umum: "1669",
        pos_branch: "897",
        pos_region: "6383",
        pos_nas: "27255",
      },
      {
        nik: "24112702",
        nama: "ALDI MUHAMAD ANDESTA",
        jabatan: "Assistant Chief of Store",
        qty_act: "0",
        pct: "0",
        pos_umum: "0",
        pos_branch: "0",
        pos_region: "0",
        pos_nas: "0",
      },
      {
        nik: "25064810",
        nama: "FARHAN FADILAH",
        jabatan: "Crew",
        qty_act: "2",
        pct: "10",
        pos_umum: "2042",
        pos_branch: "1462",
        pos_region: "9995",
        pos_nas: "40518",
      },
      {
        nik: "22045190",
        nama: "RUDI HIDAYAT",
        jabatan: "Assistant Chief of Store",
        qty_act: "0",
        pct: "0",
        pos_umum: "0",
        pos_branch: "0",
        pos_region: "0",
        pos_nas: "0",
      },
    ],
  },
};

export const dummyStoreData: ApiResponse<StoreData> = {
  success: true,
  code: 200,
  data: {
    cabang: "CILEUNGSI_2",
    kd_store: "J599",
    nama_store: "SAT KOMARUDIN 2 [KMR2]",
  },
};
