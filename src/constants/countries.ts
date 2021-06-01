import { CURRENCIES, ICurrency } from "./currencies";

export interface ICountry {
  readonly nameWithArticle: string;
  readonly code: string;
  readonly name: string;
  readonly currency: ICurrency;
  readonly provinces?: Array<IProvince>;
  readonly isDeprecated?: boolean;
  readonly deprecationReason?: string;
}

export interface IProvince {
  readonly code: string;
  readonly name: string;
  readonly slug: string;
}

export const COUNTRIES = Object.freeze<{ [key: string]: ICountry }>({
  AF: Object.freeze<ICountry>({
    code: "AF",
    currency: CURRENCIES.AFN,
    name: "Afghanistan",
    nameWithArticle: "Afghanistan",
    provinces: [
      Object.freeze<IProvince>({
        code: "AF-BAL",
        name: "Balkh",
        slug: "balkh",
      }),
      Object.freeze<IProvince>({
        code: "AF-BAM",
        name: "B\u0101my\u0101n",
        slug: "bamyan",
      }),
      Object.freeze<IProvince>({
        code: "AF-BDG",
        name: "B\u0101dgh\u012bs",
        slug: "badghis",
      }),
      Object.freeze<IProvince>({
        code: "AF-BDS",
        name: "Badakhsh\u0101n",
        slug: "badakhshan",
      }),
      Object.freeze<IProvince>({
        code: "AF-BGL",
        name: "Baghl\u0101n",
        slug: "baghlan",
      }),
      Object.freeze<IProvince>({
        code: "AF-DAY",
        name: "D\u0101ykund\u012b",
        slug: "daykundi",
      }),
      Object.freeze<IProvince>({
        code: "AF-FRA",
        name: "Far\u0101h",
        slug: "farah",
      }),
      Object.freeze<IProvince>({
        code: "AF-FYB",
        name: "F\u0101ry\u0101b",
        slug: "faryab",
      }),
      Object.freeze<IProvince>({
        code: "AF-GHA",
        name: "Ghazn\u012b",
        slug: "ghazni",
      }),
      Object.freeze<IProvince>({
        code: "AF-GHO",
        name: "Gh\u014dr",
        slug: "ghor",
      }),
      Object.freeze<IProvince>({
        code: "AF-HEL",
        name: "Helmand",
        slug: "helmand",
      }),
      Object.freeze<IProvince>({
        code: "AF-HER",
        name: "Her\u0101t",
        slug: "herat",
      }),
      Object.freeze<IProvince>({
        code: "AF-JOW",
        name: "Jowzj\u0101n",
        slug: "jowzjan",
      }),
      Object.freeze<IProvince>({
        code: "AF-KAB",
        name: "K\u0101bul",
        slug: "kabul",
      }),
      Object.freeze<IProvince>({
        code: "AF-KAN",
        name: "Kandah\u0101r",
        slug: "kandahar",
      }),
      Object.freeze<IProvince>({
        code: "AF-KAP",
        name: "K\u0101p\u012bs\u0101",
        slug: "kapisa",
      }),
      Object.freeze<IProvince>({
        code: "AF-KDZ",
        name: "Kunduz",
        slug: "kunduz",
      }),
      Object.freeze<IProvince>({
        code: "AF-KHO",
        name: "Kh\u014dst",
        slug: "khost",
      }),
      Object.freeze<IProvince>({
        code: "AF-KNR",
        name: "Kunar",
        slug: "kunar",
      }),
      Object.freeze<IProvince>({
        code: "AF-LAG",
        name: "Laghm\u0101n",
        slug: "laghman",
      }),
      Object.freeze<IProvince>({
        code: "AF-LOG",
        name: "L\u014dgar",
        slug: "logar",
      }),
      Object.freeze<IProvince>({
        code: "AF-NAN",
        name: "Nangarh\u0101r",
        slug: "nangarhar",
      }),
      Object.freeze<IProvince>({
        code: "AF-NIM",
        name: "N\u012bmr\u014dz",
        slug: "nimroz",
      }),
      Object.freeze<IProvince>({
        code: "AF-NUR",
        name: "N\u016brist\u0101n",
        slug: "nuristan",
      }),
      Object.freeze<IProvince>({
        code: "AF-PAN",
        name: "Panjshayr",
        slug: "panjshayr",
      }),
      Object.freeze<IProvince>({
        code: "AF-PAR",
        name: "Parw\u0101n",
        slug: "parwan",
      }),
      Object.freeze<IProvince>({
        code: "AF-PIA",
        name: "Paktiy\u0101",
        slug: "paktiya",
      }),
      Object.freeze<IProvince>({
        code: "AF-PKA",
        name: "Pakt\u012bk\u0101",
        slug: "paktika",
      }),
      Object.freeze<IProvince>({
        code: "AF-SAM",
        name: "Samang\u0101n",
        slug: "samangan",
      }),
      Object.freeze<IProvince>({
        code: "AF-SAR",
        name: "Sar-e Pul",
        slug: "sar-e-pul",
      }),
      Object.freeze<IProvince>({
        code: "AF-TAK",
        name: "Takh\u0101r",
        slug: "takhar",
      }),
      Object.freeze<IProvince>({
        code: "AF-URU",
        name: "Uruzg\u0101n",
        slug: "uruzgan",
      }),
      Object.freeze<IProvince>({
        code: "AF-WAR",
        name: "Wardak",
        slug: "wardak",
      }),
      Object.freeze<IProvince>({
        code: "AF-ZAB",
        name: "Z\u0101bul",
        slug: "zabul",
      }),
    ],
  }),
  AX: Object.freeze<ICountry>({
    code: "AX",
    currency: CURRENCIES.EUR,
    name: "\u00c5land Islands",
    nameWithArticle: "\u00c5land Islands",
    provinces: [],
  }),
  AL: Object.freeze<ICountry>({
    code: "AL",
    currency: CURRENCIES.ALL,
    name: "Albania",
    nameWithArticle: "Albania",
    provinces: [
      Object.freeze<IProvince>({
        code: "AL-01",
        name: "Berat",
        slug: "berat",
      }),
      Object.freeze<IProvince>({
        code: "AL-02",
        name: "Durr\u00ebs",
        slug: "durres",
      }),
      Object.freeze<IProvince>({
        code: "AL-03",
        name: "Elbasan",
        slug: "elbasan",
      }),
      Object.freeze<IProvince>({
        code: "AL-04",
        name: "Fier",
        slug: "fier",
      }),
      Object.freeze<IProvince>({
        code: "AL-05",
        name: "Gjirokast\u00ebr",
        slug: "gjirokaster",
      }),
      Object.freeze<IProvince>({
        code: "AL-06",
        name: "Kor\u00e7\u00eb",
        slug: "korce",
      }),
      Object.freeze<IProvince>({
        code: "AL-07",
        name: "Kuk\u00ebs",
        slug: "kukes",
      }),
      Object.freeze<IProvince>({
        code: "AL-08",
        name: "Lezh\u00eb",
        slug: "lezhe",
      }),
      Object.freeze<IProvince>({
        code: "AL-09",
        name: "Dib\u00ebr",
        slug: "diber",
      }),
      Object.freeze<IProvince>({
        code: "AL-10",
        name: "Shkod\u00ebr",
        slug: "shkoder",
      }),
      Object.freeze<IProvince>({
        code: "AL-11",
        name: "Tiran\u00eb",
        slug: "tirane",
      }),
      Object.freeze<IProvince>({
        code: "AL-12",
        name: "Vlor\u00eb",
        slug: "vlore",
      }),
    ],
  }),
  DZ: Object.freeze<ICountry>({
    code: "DZ",
    currency: CURRENCIES.DZD,
    name: "Algeria",
    nameWithArticle: "Algeria",
    provinces: [
      Object.freeze<IProvince>({
        code: "DZ-01",
        name: "Adrar",
        slug: "adrar",
      }),
      Object.freeze<IProvince>({
        code: "DZ-02",
        name: "Chlef",
        slug: "chlef",
      }),
      Object.freeze<IProvince>({
        code: "DZ-03",
        name: "Laghouat",
        slug: "laghouat",
      }),
      Object.freeze<IProvince>({
        code: "DZ-04",
        name: "Oum el Bouaghi",
        slug: "oum-el-bouaghi",
      }),
      Object.freeze<IProvince>({
        code: "DZ-05",
        name: "Batna",
        slug: "batna",
      }),
      Object.freeze<IProvince>({
        code: "DZ-06",
        name: "B\u00e9ja\u00efa",
        slug: "bejaia",
      }),
      Object.freeze<IProvince>({
        code: "DZ-07",
        name: "Biskra",
        slug: "biskra",
      }),
      Object.freeze<IProvince>({
        code: "DZ-08",
        name: "B\u00e9char",
        slug: "bechar",
      }),
      Object.freeze<IProvince>({
        code: "DZ-09",
        name: "Blida",
        slug: "blida",
      }),
      Object.freeze<IProvince>({
        code: "DZ-10",
        name: "Bouira",
        slug: "bouira",
      }),
      Object.freeze<IProvince>({
        code: "DZ-11",
        name: "Tamanrasset",
        slug: "tamanrasset",
      }),
      Object.freeze<IProvince>({
        code: "DZ-12",
        name: "T\u00e9bessa",
        slug: "tebessa",
      }),
      Object.freeze<IProvince>({
        code: "DZ-13",
        name: "Tlemcen",
        slug: "tlemcen",
      }),
      Object.freeze<IProvince>({
        code: "DZ-14",
        name: "Tiaret",
        slug: "tiaret",
      }),
      Object.freeze<IProvince>({
        code: "DZ-15",
        name: "Tizi Ouzou",
        slug: "tizi-ouzou",
      }),
      Object.freeze<IProvince>({
        code: "DZ-16",
        name: "Alger",
        slug: "alger",
      }),
      Object.freeze<IProvince>({
        code: "DZ-17",
        name: "Djelfa",
        slug: "djelfa",
      }),
      Object.freeze<IProvince>({
        code: "DZ-18",
        name: "Jijel",
        slug: "jijel",
      }),
      Object.freeze<IProvince>({
        code: "DZ-19",
        name: "S\u00e9tif",
        slug: "setif",
      }),
      Object.freeze<IProvince>({
        code: "DZ-20",
        name: "Sa\u00efda",
        slug: "saida",
      }),
      Object.freeze<IProvince>({
        code: "DZ-21",
        name: "Skikda",
        slug: "skikda",
      }),
      Object.freeze<IProvince>({
        code: "DZ-22",
        name: "Sidi Bel Abb\u00e8s",
        slug: "sidi-bel-abbes",
      }),
      Object.freeze<IProvince>({
        code: "DZ-23",
        name: "Annaba",
        slug: "annaba",
      }),
      Object.freeze<IProvince>({
        code: "DZ-24",
        name: "Guelma",
        slug: "guelma",
      }),
      Object.freeze<IProvince>({
        code: "DZ-25",
        name: "Constantine",
        slug: "constantine",
      }),
      Object.freeze<IProvince>({
        code: "DZ-26",
        name: "M\u00e9d\u00e9a",
        slug: "medea",
      }),
      Object.freeze<IProvince>({
        code: "DZ-27",
        name: "Mostaganem",
        slug: "mostaganem",
      }),
      Object.freeze<IProvince>({
        code: "DZ-28",
        name: "Msila",
        slug: "msila",
      }),
      Object.freeze<IProvince>({
        code: "DZ-29",
        name: "Mascara",
        slug: "mascara",
      }),
      Object.freeze<IProvince>({
        code: "DZ-30",
        name: "Ouargla",
        slug: "ouargla",
      }),
      Object.freeze<IProvince>({
        code: "DZ-31",
        name: "Oran",
        slug: "oran",
      }),
      Object.freeze<IProvince>({
        code: "DZ-32",
        name: "El Bayadh",
        slug: "el-bayadh",
      }),
      Object.freeze<IProvince>({
        code: "DZ-33",
        name: "Illizi",
        slug: "illizi",
      }),
      Object.freeze<IProvince>({
        code: "DZ-34",
        name: "Bordj Bou Arr\u00e9ridj",
        slug: "bordj-bou-arreridj",
      }),
      Object.freeze<IProvince>({
        code: "DZ-35",
        name: "Boumerd\u00e8s",
        slug: "boumerdes",
      }),
      Object.freeze<IProvince>({
        code: "DZ-36",
        name: "El Tarf",
        slug: "el-tarf",
      }),
      Object.freeze<IProvince>({
        code: "DZ-37",
        name: "Tindouf",
        slug: "tindouf",
      }),
      Object.freeze<IProvince>({
        code: "DZ-38",
        name: "Tissemsilt",
        slug: "tissemsilt",
      }),
      Object.freeze<IProvince>({
        code: "DZ-39",
        name: "El Oued",
        slug: "el-oued",
      }),
      Object.freeze<IProvince>({
        code: "DZ-40",
        name: "Khenchela",
        slug: "khenchela",
      }),
      Object.freeze<IProvince>({
        code: "DZ-41",
        name: "Souk Ahras",
        slug: "souk-ahras",
      }),
      Object.freeze<IProvince>({
        code: "DZ-42",
        name: "Tipaza",
        slug: "tipaza",
      }),
      Object.freeze<IProvince>({
        code: "DZ-43",
        name: "Mila",
        slug: "mila",
      }),
      Object.freeze<IProvince>({
        code: "DZ-44",
        name: "A\u00efn Defla",
        slug: "ain-defla",
      }),
      Object.freeze<IProvince>({
        code: "DZ-45",
        name: "Naama",
        slug: "naama",
      }),
      Object.freeze<IProvince>({
        code: "DZ-46",
        name: "A\u00efn T\u00e9mouchent",
        slug: "ain-temouchent",
      }),
      Object.freeze<IProvince>({
        code: "DZ-47",
        name: "Gharda\u00efa",
        slug: "ghardaia",
      }),
      Object.freeze<IProvince>({
        code: "DZ-48",
        name: "Relizane",
        slug: "relizane",
      }),
    ],
  }),
  AS: Object.freeze<ICountry>({
    code: "AS",
    currency: CURRENCIES.USD,
    name: "American Samoa",
    nameWithArticle: "American Samoa",
    provinces: [],
  }),
  AD: Object.freeze<ICountry>({
    code: "AD",
    currency: CURRENCIES.EUR,
    name: "Andorra",
    nameWithArticle: "Andorra",
    provinces: [
      Object.freeze<IProvince>({
        code: "AD-02",
        name: "Canillo",
        slug: "canillo",
      }),
      Object.freeze<IProvince>({
        code: "AD-03",
        name: "Encamp",
        slug: "encamp",
      }),
      Object.freeze<IProvince>({
        code: "AD-04",
        name: "La Massana",
        slug: "la-massana",
      }),
      Object.freeze<IProvince>({
        code: "AD-05",
        name: "Ordino",
        slug: "ordino",
      }),
      Object.freeze<IProvince>({
        code: "AD-06",
        name: "Sant Juli\u00e0 de L\u00f2ria",
        slug: "sant-julia-de-loria",
      }),
      Object.freeze<IProvince>({
        code: "AD-07",
        name: "Andorra la Vella",
        slug: "andorra-la-vella",
      }),
      Object.freeze<IProvince>({
        code: "AD-08",
        name: "Escaldes-Engordany",
        slug: "escaldes-engordany",
      }),
    ],
  }),
  AO: Object.freeze<ICountry>({
    code: "AO",
    currency: CURRENCIES.AOA,
    name: "Angola",
    nameWithArticle: "Angola",
    provinces: [
      Object.freeze<IProvince>({
        code: "AO-BGO",
        name: "Bengo",
        slug: "bengo",
      }),
      Object.freeze<IProvince>({
        code: "AO-BGU",
        name: "Benguela",
        slug: "benguela",
      }),
      Object.freeze<IProvince>({
        code: "AO-BIE",
        name: "Bi\u00e9",
        slug: "bie",
      }),
      Object.freeze<IProvince>({
        code: "AO-CAB",
        name: "Cabinda",
        slug: "cabinda",
      }),
      Object.freeze<IProvince>({
        code: "AO-CCU",
        name: "Kuando Kubango",
        slug: "kuando-kubango",
      }),
      Object.freeze<IProvince>({
        code: "AO-CNN",
        name: "Cunene",
        slug: "cunene",
      }),
      Object.freeze<IProvince>({
        code: "AO-CNO",
        name: "Kwanza Norte",
        slug: "kwanza-norte",
      }),
      Object.freeze<IProvince>({
        code: "AO-CUS",
        name: "Kwanza Sul",
        slug: "kwanza-sul",
      }),
      Object.freeze<IProvince>({
        code: "AO-HUA",
        name: "Huambo",
        slug: "huambo",
      }),
      Object.freeze<IProvince>({
        code: "AO-HUI",
        name: "Hu\u00edla",
        slug: "huila",
      }),
      Object.freeze<IProvince>({
        code: "AO-LNO",
        name: "Lunda Norte",
        slug: "lunda-norte",
      }),
      Object.freeze<IProvince>({
        code: "AO-LSU",
        name: "Lunda Sul",
        slug: "lunda-sul",
      }),
      Object.freeze<IProvince>({
        code: "AO-LUA",
        name: "Luanda",
        slug: "luanda",
      }),
      Object.freeze<IProvince>({
        code: "AO-MAL",
        name: "Malange",
        slug: "malange",
      }),
      Object.freeze<IProvince>({
        code: "AO-MOX",
        name: "Moxico",
        slug: "moxico",
      }),
      Object.freeze<IProvince>({
        code: "AO-NAM",
        name: "Namibe",
        slug: "namibe",
      }),
      Object.freeze<IProvince>({
        code: "AO-UIG",
        name: "U\u00edge",
        slug: "uige",
      }),
      Object.freeze<IProvince>({
        code: "AO-ZAI",
        name: "Zaire",
        slug: "zaire",
      }),
    ],
  }),
  AI: Object.freeze<ICountry>({
    code: "AI",
    currency: CURRENCIES.XCD,
    name: "Anguilla",
    nameWithArticle: "Anguilla",
    provinces: [],
  }),
  AQ: Object.freeze<ICountry>({
    code: "AQ",
    currency: CURRENCIES.USD,
    name: "Antarctica",
    nameWithArticle: "Antarctica",
    provinces: [],
  }),
  AG: Object.freeze<ICountry>({
    code: "AG",
    currency: CURRENCIES.XCD,
    name: "Antigua and Barbuda",
    nameWithArticle: "Antigua and Barbuda",
    provinces: [
      Object.freeze<IProvince>({
        code: "AG-03",
        name: "Saint George",
        slug: "saint-george",
      }),
      Object.freeze<IProvince>({
        code: "AG-04",
        name: "Saint John",
        slug: "saint-john",
      }),
      Object.freeze<IProvince>({
        code: "AG-05",
        name: "Saint Mary",
        slug: "saint-mary",
      }),
      Object.freeze<IProvince>({
        code: "AG-06",
        name: "Saint Paul",
        slug: "saint-paul",
      }),
      Object.freeze<IProvince>({
        code: "AG-07",
        name: "Saint Peter",
        slug: "saint-peter",
      }),
      Object.freeze<IProvince>({
        code: "AG-08",
        name: "Saint Philip",
        slug: "saint-philip",
      }),
      Object.freeze<IProvince>({
        code: "AG-10",
        name: "Barbuda",
        slug: "barbuda",
      }),
      Object.freeze<IProvince>({
        code: "AG-11",
        name: "Redonda",
        slug: "redonda",
      }),
    ],
  }),
  AR: Object.freeze<ICountry>({
    code: "AR",
    currency: CURRENCIES.ARS,
    name: "Argentina",
    nameWithArticle: "Argentina",
    provinces: [
      Object.freeze<IProvince>({
        code: "AR-A",
        name: "Salta",
        slug: "salta",
      }),
      Object.freeze<IProvince>({
        code: "AR-B",
        name: "Buenos Aires",
        slug: "buenos-aires",
      }),
      Object.freeze<IProvince>({
        code: "AR-C",
        name: "Ciudad Aut\u00f3noma de Buenos Aires",
        slug: "ciudad-autonoma-de-buenos-aires",
      }),
      Object.freeze<IProvince>({
        code: "AR-D",
        name: "San Luis",
        slug: "san-luis",
      }),
      Object.freeze<IProvince>({
        code: "AR-E",
        name: "Entre R\u00edos",
        slug: "entre-rios",
      }),
      Object.freeze<IProvince>({
        code: "AR-F",
        name: "La Rioja",
        slug: "la-rioja",
      }),
      Object.freeze<IProvince>({
        code: "AR-G",
        name: "Santiago del Estero",
        slug: "santiago-del-estero",
      }),
      Object.freeze<IProvince>({
        code: "AR-H",
        name: "Chaco",
        slug: "chaco",
      }),
      Object.freeze<IProvince>({
        code: "AR-J",
        name: "San Juan",
        slug: "san-juan",
      }),
      Object.freeze<IProvince>({
        code: "AR-K",
        name: "Catamarca",
        slug: "catamarca",
      }),
      Object.freeze<IProvince>({
        code: "AR-L",
        name: "La Pampa",
        slug: "la-pampa",
      }),
      Object.freeze<IProvince>({
        code: "AR-M",
        name: "Mendoza",
        slug: "mendoza",
      }),
      Object.freeze<IProvince>({
        code: "AR-N",
        name: "Misiones",
        slug: "misiones",
      }),
      Object.freeze<IProvince>({
        code: "AR-P",
        name: "Formosa",
        slug: "formosa",
      }),
      Object.freeze<IProvince>({
        code: "AR-Q",
        name: "Neuqu\u00e9n",
        slug: "neuquen",
      }),
      Object.freeze<IProvince>({
        code: "AR-R",
        name: "R\u00edo Negro",
        slug: "rio-negro",
      }),
      Object.freeze<IProvince>({
        code: "AR-S",
        name: "Santa Fe",
        slug: "santa-fe",
      }),
      Object.freeze<IProvince>({
        code: "AR-T",
        name: "Tucum\u00e1n",
        slug: "tucuman",
      }),
      Object.freeze<IProvince>({
        code: "AR-U",
        name: "Chubut",
        slug: "chubut",
      }),
      Object.freeze<IProvince>({
        code: "AR-V",
        name: "Tierra del Fuego",
        slug: "tierra-del-fuego",
      }),
      Object.freeze<IProvince>({
        code: "AR-W",
        name: "Corrientes",
        slug: "corrientes",
      }),
      Object.freeze<IProvince>({
        code: "AR-X",
        name: "C\u00f3rdoba",
        slug: "cordoba",
      }),
      Object.freeze<IProvince>({
        code: "AR-Y",
        name: "Jujuy",
        slug: "jujuy",
      }),
      Object.freeze<IProvince>({
        code: "AR-Z",
        name: "Santa Cruz",
        slug: "santa-cruz",
      }),
    ],
  }),
  AM: Object.freeze<ICountry>({
    code: "AM",
    currency: CURRENCIES.AMD,
    name: "Armenia",
    nameWithArticle: "Armenia",
    provinces: [
      Object.freeze<IProvince>({
        code: "AM-AG",
        name: "Aragac\u0323otn",
        slug: "aragacotn",
      }),
      Object.freeze<IProvince>({
        code: "AM-AR",
        name: "Ararat",
        slug: "ararat",
      }),
      Object.freeze<IProvince>({
        code: "AM-AV",
        name: "Armavir",
        slug: "armavir",
      }),
      Object.freeze<IProvince>({
        code: "AM-GR",
        name: "Ge\u0121ark'unik'",
        slug: "gegarkunik",
      }),
      Object.freeze<IProvince>({
        code: "AM-KT",
        name: "Kotayk'",
        slug: "kotayk",
      }),
      Object.freeze<IProvince>({
        code: "AM-LO",
        name: "Lo\u1e59i",
        slug: "lori",
      }),
      Object.freeze<IProvince>({
        code: "AM-SH",
        name: "\u0160irak",
        slug: "sirak",
      }),
      Object.freeze<IProvince>({
        code: "AM-SU",
        name: "Syunik'",
        slug: "syunik",
      }),
      Object.freeze<IProvince>({
        code: "AM-TV",
        name: "Tavu\u0161",
        slug: "tavus",
      }),
      Object.freeze<IProvince>({
        code: "AM-VD",
        name: "Vayo\u0107 Jor",
        slug: "vayoc-jor",
      }),
    ],
  }),
  AW: Object.freeze<ICountry>({
    code: "AW",
    currency: CURRENCIES.AWG,
    name: "Aruba",
    nameWithArticle: "Aruba",
    provinces: [],
  }),
  AU: Object.freeze<ICountry>({
    code: "AU",
    currency: CURRENCIES.AUD,
    name: "Australia",
    nameWithArticle: "Australia",
    provinces: [
      Object.freeze<IProvince>({
        code: "AU-ACT",
        name: "Australian Capital Territory",
        slug: "australian-capital-territory",
      }),
      Object.freeze<IProvince>({
        code: "AU-NSW",
        name: "New South Wales",
        slug: "new-south-wales",
      }),
      Object.freeze<IProvince>({
        code: "AU-NT",
        name: "Northern Territory",
        slug: "northern-territory",
      }),
      Object.freeze<IProvince>({
        code: "AU-QLD",
        name: "Queensland",
        slug: "queensland",
      }),
      Object.freeze<IProvince>({
        code: "AU-SA",
        name: "South Australia",
        slug: "south-australia",
      }),
      Object.freeze<IProvince>({
        code: "AU-TAS",
        name: "Tasmania",
        slug: "tasmania",
      }),
      Object.freeze<IProvince>({
        code: "AU-VIC",
        name: "Victoria",
        slug: "victoria",
      }),
      Object.freeze<IProvince>({
        code: "AU-WA",
        name: "Western Australia",
        slug: "western-australia",
      }),
    ],
  }),
  AT: Object.freeze<ICountry>({
    code: "AT",
    currency: CURRENCIES.EUR,
    name: "Austria",
    nameWithArticle: "Austria",
    provinces: [
      Object.freeze<IProvince>({
        code: "AT-1",
        name: "Burgenland",
        slug: "burgenland",
      }),
      Object.freeze<IProvince>({
        code: "AT-2",
        name: "K\u00e4rnten",
        slug: "karnten",
      }),
      Object.freeze<IProvince>({
        code: "AT-3",
        name: "Nieder\u00f6sterreich",
        slug: "niederosterreich",
      }),
      Object.freeze<IProvince>({
        code: "AT-4",
        name: "Ober\u00f6sterreich",
        slug: "oberosterreich",
      }),
      Object.freeze<IProvince>({
        code: "AT-5",
        name: "Salzburg",
        slug: "salzburg",
      }),
      Object.freeze<IProvince>({
        code: "AT-6",
        name: "Steiermark",
        slug: "steiermark",
      }),
      Object.freeze<IProvince>({
        code: "AT-7",
        name: "Tirol",
        slug: "tirol",
      }),
      Object.freeze<IProvince>({
        code: "AT-8",
        name: "Vorarlberg",
        slug: "vorarlberg",
      }),
      Object.freeze<IProvince>({
        code: "AT-9",
        name: "Wien",
        slug: "wien",
      }),
    ],
  }),
  AZ: Object.freeze<ICountry>({
    code: "AZ",
    currency: CURRENCIES.AZN,
    name: "Azerbaijan",
    nameWithArticle: "Azerbaijan",
    provinces: [
      Object.freeze<IProvince>({
        code: "AZ-ABS",
        name: "Ab\u015feron",
        slug: "abseron",
      }),
      Object.freeze<IProvince>({
        code: "AZ-AGA",
        name: "A\u011fstafa",
        slug: "agstafa",
      }),
      Object.freeze<IProvince>({
        code: "AZ-AGC",
        name: "A\u011fcab\u04d9di",
        slug: "agcabdi",
      }),
      Object.freeze<IProvince>({
        code: "AZ-AGM",
        name: "A\u011fdam",
        slug: "agdam",
      }),
      Object.freeze<IProvince>({
        code: "AZ-AGS",
        name: "A\u011fda\u015f",
        slug: "agdas",
      }),
      Object.freeze<IProvince>({
        code: "AZ-AGU",
        name: "A\u011fsu",
        slug: "agsu",
      }),
      Object.freeze<IProvince>({
        code: "AZ-AST",
        name: "Astara",
        slug: "astara",
      }),
      Object.freeze<IProvince>({
        code: "AZ-BA",
        name: "Bak\u0131",
        slug: "bak",
      }),
      Object.freeze<IProvince>({
        code: "AZ-BAB",
        name: "Bab\u0259k",
        slug: "babk",
      }),
      Object.freeze<IProvince>({
        code: "AZ-BAL",
        name: "Balak\u0259n",
        slug: "balakn",
      }),
      Object.freeze<IProvince>({
        code: "AZ-BAR",
        name: "B\u0259rd\u0259",
        slug: "brd",
      }),
      Object.freeze<IProvince>({
        code: "AZ-BEY",
        name: "Beyl\u0259qan",
        slug: "beylqan",
      }),
      Object.freeze<IProvince>({
        code: "AZ-BIL",
        name: "Bil\u0259suvar",
        slug: "bilsuvar",
      }),
      Object.freeze<IProvince>({
        code: "AZ-CAB",
        name: "C\u0259bray\u0131l",
        slug: "cbrayl",
      }),
      Object.freeze<IProvince>({
        code: "AZ-CAL",
        name: "C\u0259lilabad",
        slug: "clilabad",
      }),
      Object.freeze<IProvince>({
        code: "AZ-CUL",
        name: "Culfa",
        slug: "culfa",
      }),
      Object.freeze<IProvince>({
        code: "AZ-DAS",
        name: "Da\u015fk\u0259s\u0259n",
        slug: "dasksn",
      }),
      Object.freeze<IProvince>({
        code: "AZ-FUZ",
        name: "F\u00fczuli",
        slug: "fuzuli",
      }),
      Object.freeze<IProvince>({
        code: "AZ-GAD",
        name: "G\u0259d\u0259b\u0259y",
        slug: "gdby",
      }),
      Object.freeze<IProvince>({
        code: "AZ-GA",
        name: "G\u04d9nc\u04d9",
        slug: "gnc",
      }),
      Object.freeze<IProvince>({
        code: "AZ-GOR",
        name: "Goranboy",
        slug: "goranboy",
      }),
      Object.freeze<IProvince>({
        code: "AZ-GOY",
        name: "G\u00f6y\u00e7ay",
        slug: "goycay",
      }),
      Object.freeze<IProvince>({
        code: "AZ-GYG",
        name: "G\u00f6yg\u00f6l",
        slug: "goygol",
      }),
      Object.freeze<IProvince>({
        code: "AZ-HAC",
        name: "Hac\u0131qabul",
        slug: "hacqabul",
      }),
      Object.freeze<IProvince>({
        code: "AZ-IMI",
        name: "\u0130mi\u015fli",
        slug: "imisli",
      }),
      Object.freeze<IProvince>({
        code: "AZ-ISM",
        name: "\u0130smay\u0131ll\u0131",
        slug: "ismayll",
      }),
      Object.freeze<IProvince>({
        code: "AZ-KAL",
        name: "K\u0259lb\u0259c\u0259r",
        slug: "klbcr",
      }),
      Object.freeze<IProvince>({
        code: "AZ-KAN",
        name: "K\u01ddng\u01ddrli",
        slug: "kngrli",
      }),
      Object.freeze<IProvince>({
        code: "AZ-KUR",
        name: "K\u00fcrd\u0259mir",
        slug: "kurdmir",
      }),
      Object.freeze<IProvince>({
        code: "AZ-LAC",
        name: "La\u00e7\u0131n",
        slug: "lacn",
      }),
      Object.freeze<IProvince>({
        code: "AZ-LA",
        name: "L\u04d9nk\u04d9ran, Municipality",
        slug: "lnkran-municipality",
      }),
      Object.freeze<IProvince>({
        code: "AZ-LAN",
        name: "L\u0259nk\u0259ran",
        slug: "lnkran",
      }),
      Object.freeze<IProvince>({
        code: "AZ-LER",
        name: "Lerik",
        slug: "lerik",
      }),
      Object.freeze<IProvince>({
        code: "AZ-MAS",
        name: "Masall\u0131",
        slug: "masall",
      }),
      Object.freeze<IProvince>({
        code: "AZ-MI",
        name: "Ming\u04d9\u00e7evir",
        slug: "mingcevir",
      }),
      Object.freeze<IProvince>({
        code: "AZ-NA",
        name: "Naftalan",
        slug: "naftalan",
      }),
      Object.freeze<IProvince>({
        code: "AZ-NEF",
        name: "Neft\u00e7ala",
        slug: "neftcala",
      }),
      Object.freeze<IProvince>({
        code: "AZ-NV",
        name: "Nax\u00e7\u0131van",
        slug: "naxcvan",
      }),
      Object.freeze<IProvince>({
        code: "AZ-NX",
        name: "Nax\u00e7\u0131van, Autonomous republic",
        slug: "naxcvan-autonomous-republic",
      }),
      Object.freeze<IProvince>({
        code: "AZ-OGU",
        name: "O\u011fuz",
        slug: "oguz",
      }),
      Object.freeze<IProvince>({
        code: "AZ-ORD",
        name: "Ordubad",
        slug: "ordubad",
      }),
      Object.freeze<IProvince>({
        code: "AZ-QAB",
        name: "Q\u04d9b\u04d9l\u04d9",
        slug: "qbl",
      }),
      Object.freeze<IProvince>({
        code: "AZ-QAX",
        name: "Qax",
        slug: "qax",
      }),
      Object.freeze<IProvince>({
        code: "AZ-QAZ",
        name: "Qazax",
        slug: "qazax",
      }),
      Object.freeze<IProvince>({
        code: "AZ-QBA",
        name: "Quba",
        slug: "quba",
      }),
      Object.freeze<IProvince>({
        code: "AZ-QBI",
        name: "Qubadl\u0131",
        slug: "qubadl",
      }),
      Object.freeze<IProvince>({
        code: "AZ-QOB",
        name: "Qobustan",
        slug: "qobustan",
      }),
      Object.freeze<IProvince>({
        code: "AZ-QUS",
        name: "Qusar",
        slug: "qusar",
      }),
      Object.freeze<IProvince>({
        code: "AZ-SAB",
        name: "Sabirabad",
        slug: "sabirabad",
      }),
      Object.freeze<IProvince>({
        code: "AZ-SAD",
        name: "S\u04d9d\u04d9r\u04d9k",
        slug: "sdrk",
      }),
      Object.freeze<IProvince>({
        code: "AZ-SAH",
        name: "\u015eahbuz",
        slug: "sahbuz",
      }),
      Object.freeze<IProvince>({
        code: "AZ-SAK",
        name: "\u015e\u04d9ki",
        slug: "ski",
      }),
      Object.freeze<IProvince>({
        code: "AZ-SAL",
        name: "Salyan",
        slug: "salyan",
      }),
      Object.freeze<IProvince>({
        code: "AZ-SAR",
        name: "\u015e\u04d9rur",
        slug: "srur",
      }),
      Object.freeze<IProvince>({
        code: "AZ-SA",
        name: "\u015e\u04d9ki",
        slug: "ski",
      }),
      Object.freeze<IProvince>({
        code: "AZ-SAT",
        name: "Saatl\u0131",
        slug: "saatl",
      }),
      Object.freeze<IProvince>({
        code: "AZ-SBN",
        name: "\u015eabran",
        slug: "sabran",
      }),
      Object.freeze<IProvince>({
        code: "AZ-SIY",
        name: "Siy\u04d9z\u04d9n",
        slug: "siyzn",
      }),
      Object.freeze<IProvince>({
        code: "AZ-SKR",
        name: "\u015e\u04d9mkir",
        slug: "smkir",
      }),
      Object.freeze<IProvince>({
        code: "AZ-SMI",
        name: "\u015eamax\u0131",
        slug: "samax",
      }),
      Object.freeze<IProvince>({
        code: "AZ-SM",
        name: "Sumqay\u0131t",
        slug: "sumqayt",
      }),
      Object.freeze<IProvince>({
        code: "AZ-SMX",
        name: "Samux",
        slug: "samux",
      }),
      Object.freeze<IProvince>({
        code: "AZ-SR",
        name: "\u015eirvan",
        slug: "sirvan",
      }),
      Object.freeze<IProvince>({
        code: "AZ-SUS",
        name: "\u015eu\u015fa",
        slug: "susa",
      }),
      Object.freeze<IProvince>({
        code: "AZ-TAR",
        name: "T\u04d9rt\u04d9r",
        slug: "trtr",
      }),
      Object.freeze<IProvince>({
        code: "AZ-TOV",
        name: "Tovuz",
        slug: "tovuz",
      }),
      Object.freeze<IProvince>({
        code: "AZ-UCA",
        name: "Ucar",
        slug: "ucar",
      }),
      Object.freeze<IProvince>({
        code: "AZ-XAC",
        name: "Xa\u00e7maz",
        slug: "xacmaz",
      }),
      Object.freeze<IProvince>({
        code: "AZ-XA",
        name: "Xank\u04d9ndi",
        slug: "xankndi",
      }),
      Object.freeze<IProvince>({
        code: "AZ-XCI",
        name: "Xocal\u0131",
        slug: "xocal",
      }),
      Object.freeze<IProvince>({
        code: "AZ-XIZ",
        name: "X\u0131z\u0131",
        slug: "xz",
      }),
      Object.freeze<IProvince>({
        code: "AZ-XVD",
        name: "Xocav\u04d9nd",
        slug: "xocavnd",
      }),
      Object.freeze<IProvince>({
        code: "AZ-YAR",
        name: "Yard\u0131ml\u0131",
        slug: "yardml",
      }),
      Object.freeze<IProvince>({
        code: "AZ-YEV",
        name: "Yevlax",
        slug: "yevlax",
      }),
      Object.freeze<IProvince>({
        code: "AZ-YE",
        name: "Yevlax, Municipality",
        slug: "yevlax-municipality",
      }),
      Object.freeze<IProvince>({
        code: "AZ-ZAN",
        name: "Z\u04d9ngilan",
        slug: "zngilan",
      }),
      Object.freeze<IProvince>({
        code: "AZ-ZAQ",
        name: "Zaqatala",
        slug: "zaqatala",
      }),
      Object.freeze<IProvince>({
        code: "AZ-ZAR",
        name: "Z\u04d9rdab",
        slug: "zrdab",
      }),
    ],
  }),
  BS: Object.freeze<ICountry>({
    code: "BS",
    currency: CURRENCIES.BSD,
    name: "Bahamas",
    nameWithArticle: "Bahamas",
    provinces: [
      Object.freeze<IProvince>({
        code: "BS-AK",
        name: "Acklins",
        slug: "acklins",
      }),
      Object.freeze<IProvince>({
        code: "BS-BI",
        name: "Bimini",
        slug: "bimini",
      }),
      Object.freeze<IProvince>({
        code: "BS-BP",
        name: "Black Point",
        slug: "black-point",
      }),
      Object.freeze<IProvince>({
        code: "BS-BY",
        name: "Berry Islands",
        slug: "berry-islands",
      }),
      Object.freeze<IProvince>({
        code: "BS-CE",
        name: "Central Eleuthera",
        slug: "central-eleuthera",
      }),
      Object.freeze<IProvince>({
        code: "BS-CI",
        name: "Cat Island",
        slug: "cat-island",
      }),
      Object.freeze<IProvince>({
        code: "BS-CK",
        name: "Crooked Island and Long Cay",
        slug: "crooked-island-and-long-cay",
      }),
      Object.freeze<IProvince>({
        code: "BS-CO",
        name: "Central Abaco",
        slug: "central-abaco",
      }),
      Object.freeze<IProvince>({
        code: "BS-CS",
        name: "Central Andros",
        slug: "central-andros",
      }),
      Object.freeze<IProvince>({
        code: "BS-EG",
        name: "East Grand Bahama",
        slug: "east-grand-bahama",
      }),
      Object.freeze<IProvince>({
        code: "BS-EX",
        name: "Exuma",
        slug: "exuma",
      }),
      Object.freeze<IProvince>({
        code: "BS-FP",
        name: "City of Freeport",
        slug: "city-of-freeport",
      }),
      Object.freeze<IProvince>({
        code: "BS-GC",
        name: "Grand Cay",
        slug: "grand-cay",
      }),
      Object.freeze<IProvince>({
        code: "BS-HI",
        name: "Harbour Island",
        slug: "harbour-island",
      }),
      Object.freeze<IProvince>({
        code: "BS-HT",
        name: "Hope Town",
        slug: "hope-town",
      }),
      Object.freeze<IProvince>({
        code: "BS-IN",
        name: "Inagua",
        slug: "inagua",
      }),
      Object.freeze<IProvince>({
        code: "BS-LI",
        name: "Long Island",
        slug: "long-island",
      }),
      Object.freeze<IProvince>({
        code: "BS-MC",
        name: "Mangrove Cay",
        slug: "mangrove-cay",
      }),
      Object.freeze<IProvince>({
        code: "BS-MG",
        name: "Mayaguana",
        slug: "mayaguana",
      }),
      Object.freeze<IProvince>({
        code: "BS-MI",
        name: "Moore's Island",
        slug: "moores-island",
      }),
      Object.freeze<IProvince>({
        code: "BS-NE",
        name: "North Eleuthera",
        slug: "north-eleuthera",
      }),
      Object.freeze<IProvince>({
        code: "BS-NO",
        name: "North Abaco",
        slug: "north-abaco",
      }),
      Object.freeze<IProvince>({
        code: "BS-NS",
        name: "North Andros",
        slug: "north-andros",
      }),
      Object.freeze<IProvince>({
        code: "BS-RC",
        name: "Rum Cay",
        slug: "rum-cay",
      }),
      Object.freeze<IProvince>({
        code: "BS-RI",
        name: "Ragged Island",
        slug: "ragged-island",
      }),
      Object.freeze<IProvince>({
        code: "BS-SA",
        name: "South Andros",
        slug: "south-andros",
      }),
      Object.freeze<IProvince>({
        code: "BS-SE",
        name: "South Eleuthera",
        slug: "south-eleuthera",
      }),
      Object.freeze<IProvince>({
        code: "BS-SO",
        name: "South Abaco",
        slug: "south-abaco",
      }),
      Object.freeze<IProvince>({
        code: "BS-SS",
        name: "San Salvador",
        slug: "san-salvador",
      }),
      Object.freeze<IProvince>({
        code: "BS-SW",
        name: "Spanish Wells",
        slug: "spanish-wells",
      }),
      Object.freeze<IProvince>({
        code: "BS-WG",
        name: "West Grand Bahama",
        slug: "west-grand-bahama",
      }),
    ],
  }),
  BH: Object.freeze<ICountry>({
    code: "BH",
    currency: CURRENCIES.BHD,
    name: "Bahrain",
    nameWithArticle: "Bahrain",
    provinces: [
      Object.freeze<IProvince>({
        code: "BH-13",
        name: "Al Man\u0101mah",
        slug: "al-manamah",
      }),
      Object.freeze<IProvince>({
        code: "BH-14",
        name: "Al Jan\u016bb\u012byah",
        slug: "al-janubiyah",
      }),
      Object.freeze<IProvince>({
        code: "BH-15",
        name: "Al Mu\u1e29arraq",
        slug: "al-muharraq",
      }),
      Object.freeze<IProvince>({
        code: "BH-16",
        name: "Al Wus\u0163\u00e1",
        slug: "al-wusta",
      }),
      Object.freeze<IProvince>({
        code: "BH-17",
        name: "Ash Sham\u0101l\u012byah",
        slug: "ash-shamaliyah",
      }),
    ],
  }),
  BD: Object.freeze<ICountry>({
    code: "BD",
    currency: CURRENCIES.BDT,
    name: "Bangladesh",
    nameWithArticle: "Bangladesh",
    provinces: [
      Object.freeze<IProvince>({
        code: "BD-A",
        name: "Barisal",
        slug: "barisal",
      }),
      Object.freeze<IProvince>({
        code: "BD-B",
        name: "Chittagong",
        slug: "chittagong",
      }),
      Object.freeze<IProvince>({
        code: "BD-C",
        name: "Dhaka",
        slug: "dhaka",
      }),
      Object.freeze<IProvince>({
        code: "BD-D",
        name: "Khulna",
        slug: "khulna",
      }),
      Object.freeze<IProvince>({
        code: "BD-E",
        name: "Rajshahi",
        slug: "rajshahi",
      }),
      Object.freeze<IProvince>({
        code: "BD-F",
        name: "Rangpur",
        slug: "rangpur",
      }),
      Object.freeze<IProvince>({
        code: "BD-G",
        name: "Sylhet",
        slug: "sylhet",
      }),
    ],
  }),
  BB: Object.freeze<ICountry>({
    code: "BB",
    currency: CURRENCIES.BBD,
    name: "Barbados",
    nameWithArticle: "Barbados",
    provinces: [
      Object.freeze<IProvince>({
        code: "BB-01",
        name: "Christ Church",
        slug: "christ-church",
      }),
      Object.freeze<IProvince>({
        code: "BB-02",
        name: "Saint Andrew",
        slug: "saint-andrew",
      }),
      Object.freeze<IProvince>({
        code: "BB-03",
        name: "Saint George",
        slug: "saint-george",
      }),
      Object.freeze<IProvince>({
        code: "BB-04",
        name: "Saint James",
        slug: "saint-james",
      }),
      Object.freeze<IProvince>({
        code: "BB-05",
        name: "Saint John",
        slug: "saint-john",
      }),
      Object.freeze<IProvince>({
        code: "BB-06",
        name: "Saint Joseph",
        slug: "saint-joseph",
      }),
      Object.freeze<IProvince>({
        code: "BB-07",
        name: "Saint Lucy",
        slug: "saint-lucy",
      }),
      Object.freeze<IProvince>({
        code: "BB-08",
        name: "Saint Michael",
        slug: "saint-michael",
      }),
      Object.freeze<IProvince>({
        code: "BB-09",
        name: "Saint Peter",
        slug: "saint-peter",
      }),
      Object.freeze<IProvince>({
        code: "BB-10",
        name: "Saint Philip",
        slug: "saint-philip",
      }),
      Object.freeze<IProvince>({
        code: "BB-11",
        name: "Saint Thomas",
        slug: "saint-thomas",
      }),
    ],
  }),
  BY: Object.freeze<ICountry>({
    code: "BY",
    currency: CURRENCIES.BYR,
    name: "Belarus",
    nameWithArticle: "Belarus",
    provinces: [
      Object.freeze<IProvince>({
        code: "BY-BR",
        name: "Bresckaja voblas\u0107",
        slug: "bresckaja-voblasc",
      }),
      Object.freeze<IProvince>({
        code: "BY-HM",
        name: "Gorod Minsk",
        slug: "gorod-minsk",
      }),
      Object.freeze<IProvince>({
        code: "BY-HO",
        name: "Gomel'skaja oblast'",
        slug: "gomelskaja-oblast",
      }),
      Object.freeze<IProvince>({
        code: "BY-HR",
        name: "Grodnenskaja oblast'",
        slug: "grodnenskaja-oblast",
      }),
      Object.freeze<IProvince>({
        code: "BY-MA",
        name: "Mahilio\u016dskaja voblas\u0107",
        slug: "mahiliouskaja-voblasc",
      }),
      Object.freeze<IProvince>({
        code: "BY-MI",
        name: "Minskaja oblast'",
        slug: "minskaja-oblast",
      }),
      Object.freeze<IProvince>({
        code: "BY-VI",
        name: "Viciebskaja voblas\u0107",
        slug: "viciebskaja-voblasc",
      }),
    ],
  }),
  BE: Object.freeze<ICountry>({
    code: "BE",
    currency: CURRENCIES.EUR,
    name: "Belgium",
    nameWithArticle: "Belgium",
    provinces: [
      Object.freeze<IProvince>({
        code: "BE-BRU",
        name: "Brussels Hoofdstedelijk Gewest",
        slug: "brussels-hoofdstedelijk-gewest",
      }),
      Object.freeze<IProvince>({
        code: "BE-VLG",
        name: "Vlaams Gewest",
        slug: "vlaams-gewest",
      }),
      Object.freeze<IProvince>({
        code: "BE-WAL",
        name: "wallonne, R\u00e9gion",
        slug: "wallonne-region",
      }),
    ],
  }),
  BZ: Object.freeze<ICountry>({
    code: "BZ",
    currency: CURRENCIES.BZD,
    name: "Belize",
    nameWithArticle: "Belize",
    provinces: [
      Object.freeze<IProvince>({
        code: "BZ-BZ",
        name: "Belize",
        slug: "belize",
      }),
      Object.freeze<IProvince>({
        code: "BZ-CY",
        name: "Cayo",
        slug: "cayo",
      }),
      Object.freeze<IProvince>({
        code: "BZ-CZL",
        name: "Corozal",
        slug: "corozal",
      }),
      Object.freeze<IProvince>({
        code: "BZ-OW",
        name: "Orange Walk",
        slug: "orange-walk",
      }),
      Object.freeze<IProvince>({
        code: "BZ-SC",
        name: "Stann Creek",
        slug: "stann-creek",
      }),
      Object.freeze<IProvince>({
        code: "BZ-TOL",
        name: "Toledo",
        slug: "toledo",
      }),
    ],
  }),
  BJ: Object.freeze<ICountry>({
    code: "BJ",
    currency: CURRENCIES.XAF,
    name: "Benin",
    nameWithArticle: "Benin",
    provinces: [
      Object.freeze<IProvince>({
        code: "BJ-AK",
        name: "Atakora",
        slug: "atakora",
      }),
      Object.freeze<IProvince>({
        code: "BJ-AL",
        name: "Alibori",
        slug: "alibori",
      }),
      Object.freeze<IProvince>({
        code: "BJ-AQ",
        name: "Atlantique",
        slug: "atlantique",
      }),
      Object.freeze<IProvince>({
        code: "BJ-BO",
        name: "Borgou",
        slug: "borgou",
      }),
      Object.freeze<IProvince>({
        code: "BJ-CO",
        name: "Collines",
        slug: "collines",
      }),
      Object.freeze<IProvince>({
        code: "BJ-DO",
        name: "Donga",
        slug: "donga",
      }),
      Object.freeze<IProvince>({
        code: "BJ-KO",
        name: "Kouffo",
        slug: "kouffo",
      }),
      Object.freeze<IProvince>({
        code: "BJ-LI",
        name: "Littoral",
        slug: "littoral",
      }),
      Object.freeze<IProvince>({
        code: "BJ-MO",
        name: "Mono",
        slug: "mono",
      }),
      Object.freeze<IProvince>({
        code: "BJ-OU",
        name: "Ou\u00e9m\u00e9",
        slug: "oueme",
      }),
      Object.freeze<IProvince>({
        code: "BJ-PL",
        name: "Plateau",
        slug: "plateau",
      }),
      Object.freeze<IProvince>({
        code: "BJ-ZO",
        name: "Zou",
        slug: "zou",
      }),
    ],
  }),
  BM: Object.freeze<ICountry>({
    code: "BM",
    currency: CURRENCIES.BMD,
    name: "Bermuda",
    nameWithArticle: "Bermuda",
    provinces: [],
  }),
  BT: Object.freeze<ICountry>({
    code: "BT",
    currency: CURRENCIES.BTN,
    name: "Bhutan",
    nameWithArticle: "Bhutan",
    provinces: [
      Object.freeze<IProvince>({
        code: "BT-11",
        name: "Paro",
        slug: "paro",
      }),
      Object.freeze<IProvince>({
        code: "BT-12",
        name: "Chhukha",
        slug: "chhukha",
      }),
      Object.freeze<IProvince>({
        code: "BT-13",
        name: "Ha",
        slug: "ha",
      }),
      Object.freeze<IProvince>({
        code: "BT-14",
        name: "Samtse",
        slug: "samtse",
      }),
      Object.freeze<IProvince>({
        code: "BT-15",
        name: "Thimphu",
        slug: "thimphu",
      }),
      Object.freeze<IProvince>({
        code: "BT-21",
        name: "Tsirang",
        slug: "tsirang",
      }),
      Object.freeze<IProvince>({
        code: "BT-22",
        name: "Dagana",
        slug: "dagana",
      }),
      Object.freeze<IProvince>({
        code: "BT-23",
        name: "Punakha",
        slug: "punakha",
      }),
      Object.freeze<IProvince>({
        code: "BT-24",
        name: "Wangdue Phodrang",
        slug: "wangdue-phodrang",
      }),
      Object.freeze<IProvince>({
        code: "BT-31",
        name: "Sarpang",
        slug: "sarpang",
      }),
      Object.freeze<IProvince>({
        code: "BT-32",
        name: "Trongsa",
        slug: "trongsa",
      }),
      Object.freeze<IProvince>({
        code: "BT-33",
        name: "Bumthang",
        slug: "bumthang",
      }),
      Object.freeze<IProvince>({
        code: "BT-34",
        name: "Zhemgang",
        slug: "zhemgang",
      }),
      Object.freeze<IProvince>({
        code: "BT-41",
        name: "Trashigang",
        slug: "trashigang",
      }),
      Object.freeze<IProvince>({
        code: "BT-42",
        name: "Monggar",
        slug: "monggar",
      }),
      Object.freeze<IProvince>({
        code: "BT-43",
        name: "Pemagatshel",
        slug: "pemagatshel",
      }),
      Object.freeze<IProvince>({
        code: "BT-44",
        name: "Lhuentse",
        slug: "lhuentse",
      }),
      Object.freeze<IProvince>({
        code: "BT-45",
        name: "Samdrup Jongkha",
        slug: "samdrup-jongkha",
      }),
      Object.freeze<IProvince>({
        code: "BT-GA",
        name: "Gasa",
        slug: "gasa",
      }),
      Object.freeze<IProvince>({
        code: "BT-TY",
        name: "Trashi Yangtse",
        slug: "trashi-yangtse",
      }),
    ],
  }),
  BO: Object.freeze<ICountry>({
    code: "BO",
    currency: CURRENCIES.BOB,
    name: "Bolivia, Plurinational State of",
    nameWithArticle: "Bolivia, The Plurinational State of",
    provinces: [
      Object.freeze<IProvince>({
        code: "BO-B",
        name: "El Beni",
        slug: "el-beni",
      }),
      Object.freeze<IProvince>({
        code: "BO-C",
        name: "Cochabamba",
        slug: "cochabamba",
      }),
      Object.freeze<IProvince>({
        code: "BO-H",
        name: "Chuquisaca",
        slug: "chuquisaca",
      }),
      Object.freeze<IProvince>({
        code: "BO-L",
        name: "La Paz",
        slug: "la-paz",
      }),
      Object.freeze<IProvince>({
        code: "BO-N",
        name: "Pando",
        slug: "pando",
      }),
      Object.freeze<IProvince>({
        code: "BO-O",
        name: "Oruro",
        slug: "oruro",
      }),
      Object.freeze<IProvince>({
        code: "BO-P",
        name: "Potos\u00ed",
        slug: "potosi",
      }),
      Object.freeze<IProvince>({
        code: "BO-S",
        name: "Santa Cruz",
        slug: "santa-cruz",
      }),
      Object.freeze<IProvince>({
        code: "BO-T",
        name: "Tarija",
        slug: "tarija",
      }),
    ],
  }),
  BQ: Object.freeze<ICountry>({
    code: "BQ",
    currency: CURRENCIES.USD,
    name: "Bonaire, Sint Eustatius and Saba",
    nameWithArticle: "Bonaire, Sint Eustatius and Saba",
    provinces: [
      Object.freeze<IProvince>({
        code: "BQ-BO",
        name: "Bonaire",
        slug: "bonaire",
      }),
      Object.freeze<IProvince>({
        code: "BQ-SA",
        name: "Saba",
        slug: "saba",
      }),
      Object.freeze<IProvince>({
        code: "BQ-SE",
        name: "Sint Eustatius",
        slug: "sint-eustatius",
      }),
    ],
  }),
  BA: Object.freeze<ICountry>({
    code: "BA",
    currency: CURRENCIES.BAM,
    name: "Bosnia and Herzegovina",
    nameWithArticle: "Bosnia and Herzegovina",
    provinces: [
      Object.freeze<IProvince>({
        code: "BA-BIH",
        name: "Federacija Bosne i Hercegovine",
        slug: "federacija-bosne-i-hercegovine",
      }),
      Object.freeze<IProvince>({
        code: "BA-BRC",
        name: "Br\u010dko distrikt",
        slug: "brcko-distrikt",
      }),
      Object.freeze<IProvince>({
        code: "BA-SRP",
        name: "Republika Srpska",
        slug: "republika-srpska",
      }),
    ],
  }),
  BW: Object.freeze<ICountry>({
    code: "BW",
    currency: CURRENCIES.BWP,
    name: "Botswana",
    nameWithArticle: "Botswana",
    provinces: [
      Object.freeze<IProvince>({
        code: "BW-CE",
        name: "Central",
        slug: "central",
      }),
      Object.freeze<IProvince>({
        code: "BW-CH",
        name: "Chobe",
        slug: "chobe",
      }),
      Object.freeze<IProvince>({
        code: "BW-GH",
        name: "Ghanzi",
        slug: "ghanzi",
      }),
      Object.freeze<IProvince>({
        code: "BW-KG",
        name: "Kgalagadi",
        slug: "kgalagadi",
      }),
      Object.freeze<IProvince>({
        code: "BW-KL",
        name: "Kgatleng",
        slug: "kgatleng",
      }),
      Object.freeze<IProvince>({
        code: "BW-KW",
        name: "Kweneng",
        slug: "kweneng",
      }),
      Object.freeze<IProvince>({
        code: "BW-NE",
        name: "North East",
        slug: "north-east",
      }),
      Object.freeze<IProvince>({
        code: "BW-NW",
        name: "North West",
        slug: "north-west",
      }),
      Object.freeze<IProvince>({
        code: "BW-SE",
        name: "South East",
        slug: "south-east",
      }),
      Object.freeze<IProvince>({
        code: "BW-SO",
        name: "Southern",
        slug: "southern",
      }),
    ],
  }),
  BV: Object.freeze<ICountry>({
    code: "BV",
    currency: CURRENCIES.NOK,
    name: "Bouvet Island",
    nameWithArticle: "Bouvet Island",
    provinces: [],
  }),
  BR: Object.freeze<ICountry>({
    code: "BR",
    currency: CURRENCIES.BRL,
    name: "Brazil",
    nameWithArticle: "Brazil",
    provinces: [
      Object.freeze<IProvince>({
        code: "BR-AC",
        name: "Acre",
        slug: "acre",
      }),
      Object.freeze<IProvince>({
        code: "BR-AL",
        name: "Alagoas",
        slug: "alagoas",
      }),
      Object.freeze<IProvince>({
        code: "BR-AM",
        name: "Amazonas",
        slug: "amazonas",
      }),
      Object.freeze<IProvince>({
        code: "BR-AP",
        name: "Amap\u00e1",
        slug: "amapa",
      }),
      Object.freeze<IProvince>({
        code: "BR-BA",
        name: "Bahia",
        slug: "bahia",
      }),
      Object.freeze<IProvince>({
        code: "BR-CE",
        name: "Cear\u00e1",
        slug: "ceara",
      }),
      Object.freeze<IProvince>({
        code: "BR-DF",
        name: "Distrito Federal",
        slug: "distrito-federal",
      }),
      Object.freeze<IProvince>({
        code: "BR-ES",
        name: "Esp\u00edrito Santo",
        slug: "espirito-santo",
      }),
      Object.freeze<IProvince>({
        code: "BR-GO",
        name: "Goi\u00e1s",
        slug: "goias",
      }),
      Object.freeze<IProvince>({
        code: "BR-MA",
        name: "Maranh\u00e3o",
        slug: "maranhao",
      }),
      Object.freeze<IProvince>({
        code: "BR-MG",
        name: "Minas Gerais",
        slug: "minas-gerais",
      }),
      Object.freeze<IProvince>({
        code: "BR-MS",
        name: "Mato Grosso do Sul",
        slug: "mato-grosso-do-sul",
      }),
      Object.freeze<IProvince>({
        code: "BR-MT",
        name: "Mato Grosso",
        slug: "mato-grosso",
      }),
      Object.freeze<IProvince>({
        code: "BR-PA",
        name: "Par\u00e1",
        slug: "para",
      }),
      Object.freeze<IProvince>({
        code: "BR-PB",
        name: "Para\u00edba",
        slug: "paraiba",
      }),
      Object.freeze<IProvince>({
        code: "BR-PE",
        name: "Pernambuco",
        slug: "pernambuco",
      }),
      Object.freeze<IProvince>({
        code: "BR-PI",
        name: "Piau\u00ed",
        slug: "piaui",
      }),
      Object.freeze<IProvince>({
        code: "BR-PR",
        name: "Paran\u00e1",
        slug: "parana",
      }),
      Object.freeze<IProvince>({
        code: "BR-RJ",
        name: "Rio de Janeiro",
        slug: "rio-de-janeiro",
      }),
      Object.freeze<IProvince>({
        code: "BR-RN",
        name: "Rio Grande do Norte",
        slug: "rio-grande-do-norte",
      }),
      Object.freeze<IProvince>({
        code: "BR-RO",
        name: "Rond\u00f4nia",
        slug: "rondonia",
      }),
      Object.freeze<IProvince>({
        code: "BR-RR",
        name: "Roraima",
        slug: "roraima",
      }),
      Object.freeze<IProvince>({
        code: "BR-RS",
        name: "Rio Grande do Sul",
        slug: "rio-grande-do-sul",
      }),
      Object.freeze<IProvince>({
        code: "BR-SC",
        name: "Santa Catarina",
        slug: "santa-catarina",
      }),
      Object.freeze<IProvince>({
        code: "BR-SE",
        name: "Sergipe",
        slug: "sergipe",
      }),
      Object.freeze<IProvince>({
        code: "BR-SP",
        name: "S\u00e3o Paulo",
        slug: "sao-paulo",
      }),
      Object.freeze<IProvince>({
        code: "BR-TO",
        name: "Tocantins",
        slug: "tocantins",
      }),
    ],
  }),
  IO: Object.freeze<ICountry>({
    code: "IO",
    currency: CURRENCIES.USD,
    name: "British Indian Ocean Territory",
    nameWithArticle: "British Indian Ocean Territory",
    provinces: [],
  }),
  BN: Object.freeze<ICountry>({
    code: "BN",
    currency: CURRENCIES.BND,
    name: "Brunei Darussalam",
    nameWithArticle: "Brunei Darussalam",
    provinces: [
      Object.freeze<IProvince>({
        code: "BN-BE",
        name: "Belait",
        slug: "belait",
      }),
      Object.freeze<IProvince>({
        code: "BN-BM",
        name: "Brunei-Muara",
        slug: "brunei-muara",
      }),
      Object.freeze<IProvince>({
        code: "BN-TE",
        name: "Temburong",
        slug: "temburong",
      }),
      Object.freeze<IProvince>({
        code: "BN-TU",
        name: "Tutong",
        slug: "tutong",
      }),
    ],
  }),
  BG: Object.freeze<ICountry>({
    code: "BG",
    currency: CURRENCIES.BGN,
    name: "Bulgaria",
    nameWithArticle: "Bulgaria",
    provinces: [
      Object.freeze<IProvince>({
        code: "BG-01",
        name: "Blagoevgrad",
        slug: "blagoevgrad",
      }),
      Object.freeze<IProvince>({
        code: "BG-02",
        name: "Burgas",
        slug: "burgas",
      }),
      Object.freeze<IProvince>({
        code: "BG-03",
        name: "Varna",
        slug: "varna",
      }),
      Object.freeze<IProvince>({
        code: "BG-04",
        name: "Veliko Tarnovo",
        slug: "veliko-tarnovo",
      }),
      Object.freeze<IProvince>({
        code: "BG-05",
        name: "Vidin",
        slug: "vidin",
      }),
      Object.freeze<IProvince>({
        code: "BG-06",
        name: "Vratsa",
        slug: "vratsa",
      }),
      Object.freeze<IProvince>({
        code: "BG-07",
        name: "Gabrovo",
        slug: "gabrovo",
      }),
      Object.freeze<IProvince>({
        code: "BG-08",
        name: "Dobrich",
        slug: "dobrich",
      }),
      Object.freeze<IProvince>({
        code: "BG-09",
        name: "Kardzhali",
        slug: "kardzhali",
      }),
      Object.freeze<IProvince>({
        code: "BG-10",
        name: "Kyustendil",
        slug: "kyustendil",
      }),
      Object.freeze<IProvince>({
        code: "BG-11",
        name: "Lovech",
        slug: "lovech",
      }),
      Object.freeze<IProvince>({
        code: "BG-12",
        name: "Montana",
        slug: "montana",
      }),
      Object.freeze<IProvince>({
        code: "BG-13",
        name: "Pazardzhik",
        slug: "pazardzhik",
      }),
      Object.freeze<IProvince>({
        code: "BG-14",
        name: "Pernik",
        slug: "pernik",
      }),
      Object.freeze<IProvince>({
        code: "BG-15",
        name: "Pleven",
        slug: "pleven",
      }),
      Object.freeze<IProvince>({
        code: "BG-16",
        name: "Plovdiv",
        slug: "plovdiv",
      }),
      Object.freeze<IProvince>({
        code: "BG-17",
        name: "Razgrad",
        slug: "razgrad",
      }),
      Object.freeze<IProvince>({
        code: "BG-18",
        name: "Ruse",
        slug: "ruse",
      }),
      Object.freeze<IProvince>({
        code: "BG-19",
        name: "Silistra",
        slug: "silistra",
      }),
      Object.freeze<IProvince>({
        code: "BG-20",
        name: "Sliven",
        slug: "sliven",
      }),
      Object.freeze<IProvince>({
        code: "BG-21",
        name: "Smolyan",
        slug: "smolyan",
      }),
      Object.freeze<IProvince>({
        code: "BG-22",
        name: "Sofia City",
        slug: "sofia-city",
      }),
      Object.freeze<IProvince>({
        code: "BG-23",
        name: "Sofia",
        slug: "sofia",
      }),
      Object.freeze<IProvince>({
        code: "BG-24",
        name: "Stara Zagora",
        slug: "stara-zagora",
      }),
      Object.freeze<IProvince>({
        code: "BG-25",
        name: "Targovishte",
        slug: "targovishte",
      }),
      Object.freeze<IProvince>({
        code: "BG-26",
        name: "Haskovo",
        slug: "haskovo",
      }),
      Object.freeze<IProvince>({
        code: "BG-27",
        name: "Shumen",
        slug: "shumen",
      }),
      Object.freeze<IProvince>({
        code: "BG-28",
        name: "Yambol",
        slug: "yambol",
      }),
    ],
  }),
  BF: Object.freeze<ICountry>({
    code: "BF",
    currency: CURRENCIES.XAF,
    name: "Burkina Faso",
    nameWithArticle: "Burkina Faso",
    provinces: [
      Object.freeze<IProvince>({
        code: "BF-01",
        name: "Boucle du Mouhoun",
        slug: "boucle-du-mouhoun",
      }),
      Object.freeze<IProvince>({
        code: "BF-02",
        name: "Cascades",
        slug: "cascades",
      }),
      Object.freeze<IProvince>({
        code: "BF-03",
        name: "Centre",
        slug: "centre",
      }),
      Object.freeze<IProvince>({
        code: "BF-04",
        name: "Centre-Est",
        slug: "centre-est",
      }),
      Object.freeze<IProvince>({
        code: "BF-05",
        name: "Centre-Nord",
        slug: "centre-nord",
      }),
      Object.freeze<IProvince>({
        code: "BF-06",
        name: "Centre-Ouest",
        slug: "centre-ouest",
      }),
      Object.freeze<IProvince>({
        code: "BF-07",
        name: "Centre-Sud",
        slug: "centre-sud",
      }),
      Object.freeze<IProvince>({
        code: "BF-08",
        name: "Est",
        slug: "est",
      }),
      Object.freeze<IProvince>({
        code: "BF-09",
        name: "Hauts-Bassins",
        slug: "hauts-bassins",
      }),
      Object.freeze<IProvince>({
        code: "BF-10",
        name: "Nord",
        slug: "nord",
      }),
      Object.freeze<IProvince>({
        code: "BF-11",
        name: "Plateau-Central",
        slug: "plateau-central",
      }),
      Object.freeze<IProvince>({
        code: "BF-12",
        name: "Sahel",
        slug: "sahel",
      }),
      Object.freeze<IProvince>({
        code: "BF-13",
        name: "Sud-Ouest",
        slug: "sud-ouest",
      }),
    ],
  }),
  BI: Object.freeze<ICountry>({
    code: "BI",
    currency: CURRENCIES.BIF,
    name: "Burundi",
    nameWithArticle: "Burundi",
    provinces: [
      Object.freeze<IProvince>({
        code: "BI-BB",
        name: "Bubanza",
        slug: "bubanza",
      }),
      Object.freeze<IProvince>({
        code: "BI-BL",
        name: "Bujumbura Rural",
        slug: "bujumbura-rural",
      }),
      Object.freeze<IProvince>({
        code: "BI-BM",
        name: "Bujumbura Mairie",
        slug: "bujumbura-mairie",
      }),
      Object.freeze<IProvince>({
        code: "BI-BR",
        name: "Bururi",
        slug: "bururi",
      }),
      Object.freeze<IProvince>({
        code: "BI-CA",
        name: "Cankuzo",
        slug: "cankuzo",
      }),
      Object.freeze<IProvince>({
        code: "BI-CI",
        name: "Cibitoke",
        slug: "cibitoke",
      }),
      Object.freeze<IProvince>({
        code: "BI-GI",
        name: "Gitega",
        slug: "gitega",
      }),
      Object.freeze<IProvince>({
        code: "BI-KI",
        name: "Kirundo",
        slug: "kirundo",
      }),
      Object.freeze<IProvince>({
        code: "BI-KR",
        name: "Karuzi",
        slug: "karuzi",
      }),
      Object.freeze<IProvince>({
        code: "BI-KY",
        name: "Kayanza",
        slug: "kayanza",
      }),
      Object.freeze<IProvince>({
        code: "BI-MA",
        name: "Makamba",
        slug: "makamba",
      }),
      Object.freeze<IProvince>({
        code: "BI-MU",
        name: "Muramvya",
        slug: "muramvya",
      }),
      Object.freeze<IProvince>({
        code: "BI-MW",
        name: "Mwaro",
        slug: "mwaro",
      }),
      Object.freeze<IProvince>({
        code: "BI-MY",
        name: "Muyinga",
        slug: "muyinga",
      }),
      Object.freeze<IProvince>({
        code: "BI-NG",
        name: "Ngozi",
        slug: "ngozi",
      }),
      Object.freeze<IProvince>({
        code: "BI-RT",
        name: "Rutana",
        slug: "rutana",
      }),
      Object.freeze<IProvince>({
        code: "BI-RY",
        name: "Ruyigi",
        slug: "ruyigi",
      }),
    ],
  }),
  KH: Object.freeze<ICountry>({
    code: "KH",
    currency: CURRENCIES.KHR,
    name: "Cambodia",
    nameWithArticle: "Cambodia",
    provinces: [
      Object.freeze<IProvince>({
        code: "KH-10",
        name: "Kr\u00e2ch\u00e9h",
        slug: "kracheh",
      }),
      Object.freeze<IProvince>({
        code: "KH-11",
        name: "M\u00f4nd\u00f3l Kiri",
        slug: "mondol-kiri",
      }),
      Object.freeze<IProvince>({
        code: "KH-12",
        name: "Phnom Penh",
        slug: "phnom-penh",
      }),
      Object.freeze<IProvince>({
        code: "KH-13",
        name: "Pre\u0103h Vih\u00e9ar",
        slug: "preah-vihear",
      }),
      Object.freeze<IProvince>({
        code: "KH-14",
        name: "Prey Veaeng",
        slug: "prey-veaeng",
      }),
      Object.freeze<IProvince>({
        code: "KH-15",
        name: "Pousaat",
        slug: "pousaat",
      }),
      Object.freeze<IProvince>({
        code: "KH-16",
        name: "Rotanak Kiri",
        slug: "rotanak-kiri",
      }),
      Object.freeze<IProvince>({
        code: "KH-17",
        name: "Siem Reab",
        slug: "siem-reab",
      }),
      Object.freeze<IProvince>({
        code: "KH-18",
        name: "Kr\u014fng Pre\u0103h Sihanouk",
        slug: "krong-preah-sihanouk",
      }),
      Object.freeze<IProvince>({
        code: "KH-19",
        name: "Sto\u0115ng Tr\u00eang",
        slug: "stoeng-treng",
      }),
      Object.freeze<IProvince>({
        code: "KH-1",
        name: "B\u00e2nt\u00e9ay M\u00e9anchey",
        slug: "banteay-meanchey",
      }),
      Object.freeze<IProvince>({
        code: "KH-20",
        name: "Svaay Rieng",
        slug: "svaay-rieng",
      }),
      Object.freeze<IProvince>({
        code: "KH-21",
        name: "Taakaev",
        slug: "taakaev",
      }),
      Object.freeze<IProvince>({
        code: "KH-22",
        name: "\u014etd\u00e2r M\u00e9anchey",
        slug: "otdar-meanchey",
      }),
      Object.freeze<IProvince>({
        code: "KH-23",
        name: "Krong Kaeb",
        slug: "krong-kaeb",
      }),
      Object.freeze<IProvince>({
        code: "KH-24",
        name: "Kr\u014fng Pail\u012dn",
        slug: "krong-pailin",
      }),
      Object.freeze<IProvince>({
        code: "KH-2",
        name: "Baat Dambang",
        slug: "baat-dambang",
      }),
      Object.freeze<IProvince>({
        code: "KH-3",
        name: "Kampong Chaam",
        slug: "kampong-chaam",
      }),
      Object.freeze<IProvince>({
        code: "KH-4",
        name: "Kampong Chhnang",
        slug: "kampong-chhnang",
      }),
      Object.freeze<IProvince>({
        code: "KH-5",
        name: "K\u00e2mp\u00f3ng Sp\u0153",
        slug: "kampong-sp",
      }),
      Object.freeze<IProvince>({
        code: "KH-6",
        name: "K\u00e2mp\u00f3ng Thum",
        slug: "kampong-thum",
      }),
      Object.freeze<IProvince>({
        code: "KH-7",
        name: "Kampot",
        slug: "kampot",
      }),
      Object.freeze<IProvince>({
        code: "KH-8",
        name: "Kandaal",
        slug: "kandaal",
      }),
      Object.freeze<IProvince>({
        code: "KH-9",
        name: "Kaoh Kong",
        slug: "kaoh-kong",
      }),
    ],
  }),
  CM: Object.freeze<ICountry>({
    code: "CM",
    currency: CURRENCIES.XOF,
    name: "Cameroon",
    nameWithArticle: "Cameroon",
    provinces: [
      Object.freeze<IProvince>({
        code: "CM-AD",
        name: "Adamaoua",
        slug: "adamaoua",
      }),
      Object.freeze<IProvince>({
        code: "CM-CE",
        name: "Centre",
        slug: "centre",
      }),
      Object.freeze<IProvince>({
        code: "CM-EN",
        name: "Extr\u00eame-Nord",
        slug: "extreme-nord",
      }),
      Object.freeze<IProvince>({
        code: "CM-ES",
        name: "East",
        slug: "east",
      }),
      Object.freeze<IProvince>({
        code: "CM-LT",
        name: "Littoral",
        slug: "littoral",
      }),
      Object.freeze<IProvince>({
        code: "CM-NO",
        name: "Nord",
        slug: "nord",
      }),
      Object.freeze<IProvince>({
        code: "CM-NW",
        name: "Nord-Ouest",
        slug: "nord-ouest",
      }),
      Object.freeze<IProvince>({
        code: "CM-OU",
        name: "Ouest",
        slug: "ouest",
      }),
      Object.freeze<IProvince>({
        code: "CM-SU",
        name: "South",
        slug: "south",
      }),
      Object.freeze<IProvince>({
        code: "CM-SW",
        name: "South-West",
        slug: "south-west",
      }),
    ],
  }),
  CA: Object.freeze<ICountry>({
    code: "CA",
    currency: CURRENCIES.CAD,
    name: "Canada",
    nameWithArticle: "Canada",
    provinces: [
      Object.freeze<IProvince>({
        code: "CA-AB",
        name: "Alberta",
        slug: "alberta",
      }),
      Object.freeze<IProvince>({
        code: "CA-BC",
        name: "British Columbia",
        slug: "british-columbia",
      }),
      Object.freeze<IProvince>({
        code: "CA-MB",
        name: "Manitoba",
        slug: "manitoba",
      }),
      Object.freeze<IProvince>({
        code: "CA-NB",
        name: "New Brunswick",
        slug: "new-brunswick",
      }),
      Object.freeze<IProvince>({
        code: "CA-NL",
        name: "Newfoundland and Labrador",
        slug: "newfoundland-and-labrador",
      }),
      Object.freeze<IProvince>({
        code: "CA-NS",
        name: "Nova Scotia",
        slug: "nova-scotia",
      }),
      Object.freeze<IProvince>({
        code: "CA-NT",
        name: "Northwest Territories",
        slug: "northwest-territories",
      }),
      Object.freeze<IProvince>({
        code: "CA-NU",
        name: "Nunavut",
        slug: "nunavut",
      }),
      Object.freeze<IProvince>({
        code: "CA-ON",
        name: "Ontario",
        slug: "ontario",
      }),
      Object.freeze<IProvince>({
        code: "CA-PE",
        name: "Prince Edward Island",
        slug: "prince-edward-island",
      }),
      Object.freeze<IProvince>({
        code: "CA-QC",
        name: "Quebec",
        slug: "quebec",
      }),
      Object.freeze<IProvince>({
        code: "CA-SK",
        name: "Saskatchewan",
        slug: "saskatchewan",
      }),
      Object.freeze<IProvince>({
        code: "CA-YT",
        name: "Yukon",
        slug: "yukon-territory",
      }),
    ],
  }),
  CV: Object.freeze<ICountry>({
    code: "CV",
    currency: CURRENCIES.CVE,
    name: "Cape Verde",
    nameWithArticle: "Cape Verde",
    provinces: [
      Object.freeze<IProvince>({
        code: "CV-B",
        name: "Ilhas de Barlavento",
        slug: "ilhas-de-barlavento",
      }),
      Object.freeze<IProvince>({
        code: "CV-BR",
        name: "Brava",
        slug: "brava",
      }),
      Object.freeze<IProvince>({
        code: "CV-BV",
        name: "Boa Vista",
        slug: "boa-vista",
      }),
      Object.freeze<IProvince>({
        code: "CV-CA",
        name: "Santa Catarina",
        slug: "santa-catarina",
      }),
      Object.freeze<IProvince>({
        code: "CV-CF",
        name: "Santa Catarina do Fogo",
        slug: "santa-catarina-do-fogo",
      }),
      Object.freeze<IProvince>({
        code: "CV-CR",
        name: "Santa Cruz",
        slug: "santa-cruz",
      }),
      Object.freeze<IProvince>({
        code: "CV-MA",
        name: "Maio",
        slug: "maio",
      }),
      Object.freeze<IProvince>({
        code: "CV-MO",
        name: "Mosteiros",
        slug: "mosteiros",
      }),
      Object.freeze<IProvince>({
        code: "CV-PA",
        name: "Paul",
        slug: "paul",
      }),
      Object.freeze<IProvince>({
        code: "CV-PN",
        name: "Porto Novo",
        slug: "porto-novo",
      }),
      Object.freeze<IProvince>({
        code: "CV-PR",
        name: "Praia",
        slug: "praia",
      }),
      Object.freeze<IProvince>({
        code: "CV-RB",
        name: "Ribeira Brava",
        slug: "ribeira-brava",
      }),
      Object.freeze<IProvince>({
        code: "CV-RG",
        name: "Ribeira Grande",
        slug: "ribeira-grande",
      }),
      Object.freeze<IProvince>({
        code: "CV-RS",
        name: "Ribeira Grande de Santiago",
        slug: "ribeira-grande-de-santiago",
      }),
      Object.freeze<IProvince>({
        code: "CV-SD",
        name: "S\u00e3o Domingos",
        slug: "sao-domingos",
      }),
      Object.freeze<IProvince>({
        code: "CV-SF",
        name: "S\u00e3o Filipe",
        slug: "sao-filipe",
      }),
      Object.freeze<IProvince>({
        code: "CV-S",
        name: "Ilhas de Sotavento",
        slug: "ilhas-de-sotavento",
      }),
      Object.freeze<IProvince>({
        code: "CV-SL",
        name: "Sal",
        slug: "sal",
      }),
      Object.freeze<IProvince>({
        code: "CV-SM",
        name: "S\u00e3o Miguel",
        slug: "sao-miguel",
      }),
      Object.freeze<IProvince>({
        code: "CV-SO",
        name: "S\u00e3o Louren\u00e7o dos \u00d3rg\u00e3os",
        slug: "sao-lourenco-dos-orgaos",
      }),
      Object.freeze<IProvince>({
        code: "CV-SS",
        name: "S\u00e3o Salvador do Mundo",
        slug: "sao-salvador-do-mundo",
      }),
      Object.freeze<IProvince>({
        code: "CV-SV",
        name: "S\u00e3o Vicente",
        slug: "sao-vicente",
      }),
      Object.freeze<IProvince>({
        code: "CV-TA",
        name: "Tarrafal",
        slug: "tarrafal",
      }),
      Object.freeze<IProvince>({
        code: "CV-TS",
        name: "Tarrafal de S\u00e3o Nicolau",
        slug: "tarrafal-de-sao-nicolau",
      }),
    ],
  }),
  KY: Object.freeze<ICountry>({
    code: "KY",
    currency: CURRENCIES.KYD,
    name: "Cayman Islands",
    nameWithArticle: "Cayman Islands",
    provinces: [],
  }),
  CF: Object.freeze<ICountry>({
    code: "CF",
    currency: CURRENCIES.XOF,
    name: "Central African Republic",
    nameWithArticle: "Central African Republic",
    provinces: [
      Object.freeze<IProvince>({
        code: "CF-AC",
        name: "Ouham",
        slug: "ouham",
      }),
      Object.freeze<IProvince>({
        code: "CF-BB",
        name: "Bam\u00efng\u00ef-Bangoran",
        slug: "bamingi-bangoran",
      }),
      Object.freeze<IProvince>({
        code: "CF-BK",
        name: "Basse-Kotto",
        slug: "basse-kotto",
      }),
      Object.freeze<IProvince>({
        code: "CF-HK",
        name: "Haute-Kotto",
        slug: "haute-kotto",
      }),
      Object.freeze<IProvince>({
        code: "CF-HM",
        name: "Haut-Mbomou",
        slug: "haut-mbomou",
      }),
      Object.freeze<IProvince>({
        code: "CF-HS",
        name: "Haute-Sangha / Mamb\u00e9r\u00e9-Kad\u00e9\u00ef",
        slug: "haute-sangha-mambere-kadei",
      }),
      Object.freeze<IProvince>({
        code: "CF-KG",
        name: "Kem\u00f6-G\u00efr\u00efb\u00efng\u00ef",
        slug: "kemo-giribingi",
      }),
      Object.freeze<IProvince>({
        code: "CF-LB",
        name: "Lobaye",
        slug: "lobaye",
      }),
      Object.freeze<IProvince>({
        code: "CF-MB",
        name: "Mbomou",
        slug: "mbomou",
      }),
      Object.freeze<IProvince>({
        code: "CF-MP",
        name: "\u00d6mb\u00ebl\u00e4-P\u00f6k\u00f6",
        slug: "ombela-poko",
      }),
      Object.freeze<IProvince>({
        code: "CF-NM",
        name: "Nana-Mamb\u00e9r\u00e9",
        slug: "nana-mambere",
      }),
      Object.freeze<IProvince>({
        code: "CF-OP",
        name: "Ouham-Pend\u00e9",
        slug: "ouham-pende",
      }),
      Object.freeze<IProvince>({
        code: "CF-UK",
        name: "Ouaka",
        slug: "ouaka",
      }),
      Object.freeze<IProvince>({
        code: "CF-VK",
        name: "Vakaga",
        slug: "vakaga",
      }),
    ],
  }),
  TD: Object.freeze<ICountry>({
    code: "TD",
    currency: CURRENCIES.XOF,
    name: "Chad",
    nameWithArticle: "Chad",
    provinces: [
      Object.freeze<IProvince>({
        code: "TD-BA",
        name: "Al Ba\u0163\u1e29ah",
        slug: "al-bathah",
      }),
      Object.freeze<IProvince>({
        code: "TD-BG",
        name: "Ba\u1e29r al Ghaz\u0101l",
        slug: "bahr-al-ghazal",
      }),
      Object.freeze<IProvince>({
        code: "TD-BO",
        name: "Borkou",
        slug: "borkou",
      }),
      Object.freeze<IProvince>({
        code: "TD-CB",
        name: "Chari-Baguirmi",
        slug: "chari-baguirmi",
      }),
      Object.freeze<IProvince>({
        code: "TD-EE",
        name: "Ennedi-Est",
        slug: "ennedi-est",
      }),
      Object.freeze<IProvince>({
        code: "TD-EO",
        name: "Ennedi-Ouest",
        slug: "ennedi-ouest",
      }),
      Object.freeze<IProvince>({
        code: "TD-GR",
        name: "Gu\u00e9ra",
        slug: "guera",
      }),
      Object.freeze<IProvince>({
        code: "TD-HL",
        name: "Hadjer Lamis",
        slug: "hadjer-lamis",
      }),
      Object.freeze<IProvince>({
        code: "TD-KA",
        name: "Kanem",
        slug: "kanem",
      }),
      Object.freeze<IProvince>({
        code: "TD-LC",
        name: "Al Bu\u1e29ayrah",
        slug: "al-buhayrah",
      }),
      Object.freeze<IProvince>({
        code: "TD-LO",
        name: "Logone-Occidental",
        slug: "logone-occidental",
      }),
      Object.freeze<IProvince>({
        code: "TD-LR",
        name: "Logone-Oriental",
        slug: "logone-oriental",
      }),
      Object.freeze<IProvince>({
        code: "TD-MA",
        name: "Mandoul",
        slug: "mandoul",
      }),
      Object.freeze<IProvince>({
        code: "TD-MC",
        name: "Moyen-Chari",
        slug: "moyen-chari",
      }),
      Object.freeze<IProvince>({
        code: "TD-ME",
        name: "Mayo-Kebbi-Est",
        slug: "mayo-kebbi-est",
      }),
      Object.freeze<IProvince>({
        code: "TD-MO",
        name: "Mayo-Kebbi-Ouest",
        slug: "mayo-kebbi-ouest",
      }),
      Object.freeze<IProvince>({
        code: "TD-ND",
        name: "Mad\u012bnat Injam\u012bn\u0101",
        slug: "madinat-injamina",
      }),
      Object.freeze<IProvince>({
        code: "TD-OD",
        name: "Ouadda\u00ef",
        slug: "ouaddai",
      }),
      Object.freeze<IProvince>({
        code: "TD-SA",
        name: "Salamat",
        slug: "salamat",
      }),
      Object.freeze<IProvince>({
        code: "TD-SI",
        name: "Sila",
        slug: "sila",
      }),
      Object.freeze<IProvince>({
        code: "TD-TA",
        name: "Tandjil\u00e9",
        slug: "tandjile",
      }),
      Object.freeze<IProvince>({
        code: "TD-TI",
        name: "Tibast\u012b",
        slug: "tibasti",
      }),
      Object.freeze<IProvince>({
        code: "TD-WF",
        name: "Wadi Fira",
        slug: "wadi-fira",
      }),
    ],
  }),
  CL: Object.freeze<ICountry>({
    code: "CL",
    currency: CURRENCIES.CLP,
    name: "Chile",
    nameWithArticle: "Chile",
    provinces: [
      Object.freeze<IProvince>({
        code: "CL-AI",
        name: "Ays\u00e9n",
        slug: "aysen",
      }),
      Object.freeze<IProvince>({
        code: "CL-AN",
        name: "Antofagasta",
        slug: "antofagasta",
      }),
      Object.freeze<IProvince>({
        code: "CL-AP",
        name: "Arica y Parinacota",
        slug: "arica-y-parinacota",
      }),
      Object.freeze<IProvince>({
        code: "CL-AR",
        name: "Araucan\u00eda",
        slug: "araucania",
      }),
      Object.freeze<IProvince>({
        code: "CL-AT",
        name: "Atacama",
        slug: "atacama",
      }),
      Object.freeze<IProvince>({
        code: "CL-BI",
        name: "Biob\u00edo",
        slug: "biobio",
      }),
      Object.freeze<IProvince>({
        code: "CL-CO",
        name: "Coquimbo",
        slug: "coquimbo",
      }),
      Object.freeze<IProvince>({
        code: "CL-LI",
        name: "Libertador General Bernardo O'Higgins",
        slug: "libertador-general-bernardo-ohiggins",
      }),
      Object.freeze<IProvince>({
        code: "CL-LL",
        name: "Los Lagos",
        slug: "los-lagos",
      }),
      Object.freeze<IProvince>({
        code: "CL-LR",
        name: "Los R\u00edos",
        slug: "los-rios",
      }),
      Object.freeze<IProvince>({
        code: "CL-MA",
        name: "Magallanes",
        slug: "magallanes",
      }),
      Object.freeze<IProvince>({
        code: "CL-ML",
        name: "Maule",
        slug: "maule",
      }),
      Object.freeze<IProvince>({
        code: "CL-RM",
        name: "Regi\u00f3n Metropolitana de Santiago",
        slug: "region-metropolitana-de-santiago",
      }),
      Object.freeze<IProvince>({
        code: "CL-TA",
        name: "Tarapac\u00e1",
        slug: "tarapaca",
      }),
      Object.freeze<IProvince>({
        code: "CL-VS",
        name: "Valpara\u00edso",
        slug: "valparaiso",
      }),
    ],
  }),
  CN: Object.freeze<ICountry>({
    code: "CN",
    currency: CURRENCIES.CNY,
    name: "China",
    nameWithArticle: "China",
    provinces: [
      Object.freeze<IProvince>({
        code: "CN-11",
        name: "Beijing",
        slug: "beijing",
      }),
      Object.freeze<IProvince>({
        code: "CN-12",
        name: "Tianjin",
        slug: "tianjin",
      }),
      Object.freeze<IProvince>({
        code: "CN-13",
        name: "Hebei",
        slug: "hebei",
      }),
      Object.freeze<IProvince>({
        code: "CN-14",
        name: "Shanxi",
        slug: "shanxi",
      }),
      Object.freeze<IProvince>({
        code: "CN-15",
        name: "Nei Mongol",
        slug: "nei-mongol",
      }),
      Object.freeze<IProvince>({
        code: "CN-21",
        name: "Liaoning",
        slug: "liaoning",
      }),
      Object.freeze<IProvince>({
        code: "CN-22",
        name: "Jilin",
        slug: "jilin",
      }),
      Object.freeze<IProvince>({
        code: "CN-23",
        name: "Heilongjiang",
        slug: "heilongjiang",
      }),
      Object.freeze<IProvince>({
        code: "CN-31",
        name: "Shanghai",
        slug: "shanghai",
      }),
      Object.freeze<IProvince>({
        code: "CN-32",
        name: "Jiangsu",
        slug: "jiangsu",
      }),
      Object.freeze<IProvince>({
        code: "CN-33",
        name: "Zhejiang",
        slug: "zhejiang",
      }),
      Object.freeze<IProvince>({
        code: "CN-34",
        name: "Anhui",
        slug: "anhui",
      }),
      Object.freeze<IProvince>({
        code: "CN-35",
        name: "Fujian",
        slug: "fujian",
      }),
      Object.freeze<IProvince>({
        code: "CN-36",
        name: "Jiangxi",
        slug: "jiangxi",
      }),
      Object.freeze<IProvince>({
        code: "CN-37",
        name: "Shandong",
        slug: "shandong",
      }),
      Object.freeze<IProvince>({
        code: "CN-41",
        name: "Henan",
        slug: "henan",
      }),
      Object.freeze<IProvince>({
        code: "CN-42",
        name: "Hubei",
        slug: "hubei",
      }),
      Object.freeze<IProvince>({
        code: "CN-43",
        name: "Hunan",
        slug: "hunan",
      }),
      Object.freeze<IProvince>({
        code: "CN-44",
        name: "Guangdong",
        slug: "guangdong",
      }),
      Object.freeze<IProvince>({
        code: "CN-45",
        name: "Guangxi",
        slug: "guangxi",
      }),
      Object.freeze<IProvince>({
        code: "CN-46",
        name: "Hainan",
        slug: "hainan",
      }),
      Object.freeze<IProvince>({
        code: "CN-50",
        name: "Chongqing",
        slug: "chongqing",
      }),
      Object.freeze<IProvince>({
        code: "CN-51",
        name: "Sichuan",
        slug: "sichuan",
      }),
      Object.freeze<IProvince>({
        code: "CN-52",
        name: "Guizhou",
        slug: "guizhou",
      }),
      Object.freeze<IProvince>({
        code: "CN-53",
        name: "Yunnan",
        slug: "yunnan",
      }),
      Object.freeze<IProvince>({
        code: "CN-54",
        name: "Xizang",
        slug: "xizang",
      }),
      Object.freeze<IProvince>({
        code: "CN-61",
        name: "Shaanxi",
        slug: "shaanxi",
      }),
      Object.freeze<IProvince>({
        code: "CN-62",
        name: "Gansu",
        slug: "gansu",
      }),
      Object.freeze<IProvince>({
        code: "CN-63",
        name: "Qinghai",
        slug: "qinghai",
      }),
      Object.freeze<IProvince>({
        code: "CN-64",
        name: "Ningxia",
        slug: "ningxia",
      }),
      Object.freeze<IProvince>({
        code: "CN-65",
        name: "Xinjiang",
        slug: "xinjiang",
      }),
      Object.freeze<IProvince>({
        code: "CN-71",
        name: "Taiwan",
        slug: "taiwan",
      }),
      Object.freeze<IProvince>({
        code: "CN-91",
        name: "Hong Kong",
        slug: "hong-kong",
      }),
      Object.freeze<IProvince>({
        code: "CN-92",
        name: "Aomen",
        slug: "aomen",
      }),
    ],
  }),
  CX: Object.freeze<ICountry>({
    code: "CX",
    currency: CURRENCIES.AUD,
    name: "Christmas Island",
    nameWithArticle: "Christmas Island",
    provinces: [],
  }),
  CC: Object.freeze<ICountry>({
    code: "CC",
    currency: CURRENCIES.AUD,
    name: "Cocos (Keeling) Islands",
    nameWithArticle: "Cocos (Keeling) Islands",
    provinces: [],
  }),
  CO: Object.freeze<ICountry>({
    code: "CO",
    currency: CURRENCIES.COP,
    name: "Colombia",
    nameWithArticle: "Colombia",
    provinces: [
      Object.freeze<IProvince>({
        code: "CO-AMA",
        name: "Amazonas",
        slug: "amazonas",
      }),
      Object.freeze<IProvince>({
        code: "CO-ANT",
        name: "Antioquia",
        slug: "antioquia",
      }),
      Object.freeze<IProvince>({
        code: "CO-ARA",
        name: "Arauca",
        slug: "arauca",
      }),
      Object.freeze<IProvince>({
        code: "CO-ATL",
        name: "Atl\u00e1ntico",
        slug: "atlantico",
      }),
      Object.freeze<IProvince>({
        code: "CO-BOL",
        name: "Bol\u00edvar",
        slug: "bolivar",
      }),
      Object.freeze<IProvince>({
        code: "CO-BOY",
        name: "Boyac\u00e1",
        slug: "boyaca",
      }),
      Object.freeze<IProvince>({
        code: "CO-CAL",
        name: "Caldas",
        slug: "caldas",
      }),
      Object.freeze<IProvince>({
        code: "CO-CAQ",
        name: "Caquet\u00e1",
        slug: "caqueta",
      }),
      Object.freeze<IProvince>({
        code: "CO-CAS",
        name: "Casanare",
        slug: "casanare",
      }),
      Object.freeze<IProvince>({
        code: "CO-CAU",
        name: "Cauca",
        slug: "cauca",
      }),
      Object.freeze<IProvince>({
        code: "CO-CES",
        name: "Cesar",
        slug: "cesar",
      }),
      Object.freeze<IProvince>({
        code: "CO-CHO",
        name: "Choc\u00f3",
        slug: "choco",
      }),
      Object.freeze<IProvince>({
        code: "CO-COR",
        name: "C\u00f3rdoba",
        slug: "cordoba",
      }),
      Object.freeze<IProvince>({
        code: "CO-CUN",
        name: "Cundinamarca",
        slug: "cundinamarca",
      }),
      Object.freeze<IProvince>({
        code: "CO-GUA",
        name: "Guain\u00eda",
        slug: "guainia",
      }),
      Object.freeze<IProvince>({
        code: "CO-GUV",
        name: "Guaviare",
        slug: "guaviare",
      }),
      Object.freeze<IProvince>({
        code: "CO-HUI",
        name: "Huila",
        slug: "huila",
      }),
      Object.freeze<IProvince>({
        code: "CO-LAG",
        name: "La Guajira",
        slug: "la-guajira",
      }),
      Object.freeze<IProvince>({
        code: "CO-MAG",
        name: "Magdalena",
        slug: "magdalena",
      }),
      Object.freeze<IProvince>({
        code: "CO-MET",
        name: "Meta",
        slug: "meta",
      }),
      Object.freeze<IProvince>({
        code: "CO-NAR",
        name: "Nari\u00f1o",
        slug: "narino",
      }),
      Object.freeze<IProvince>({
        code: "CO-NSA",
        name: "Norte de Santander",
        slug: "norte-de-santander",
      }),
      Object.freeze<IProvince>({
        code: "CO-PUT",
        name: "Putumayo",
        slug: "putumayo",
      }),
      Object.freeze<IProvince>({
        code: "CO-QUI",
        name: "Quind\u00edo",
        slug: "quindio",
      }),
      Object.freeze<IProvince>({
        code: "CO-RIS",
        name: "Risaralda",
        slug: "risaralda",
      }),
      Object.freeze<IProvince>({
        code: "CO-SAN",
        name: "Santander",
        slug: "santander",
      }),
      Object.freeze<IProvince>({
        code: "CO-SAP",
        name: "San Andr\u00e9s, Providencia y Santa Catalina",
        slug: "san-andres-providencia-y-santa-catalina",
      }),
      Object.freeze<IProvince>({
        code: "CO-SUC",
        name: "Sucre",
        slug: "sucre",
      }),
      Object.freeze<IProvince>({
        code: "CO-TOL",
        name: "Tolima",
        slug: "tolima",
      }),
      Object.freeze<IProvince>({
        code: "CO-VAC",
        name: "Valle del Cauca",
        slug: "valle-del-cauca",
      }),
      Object.freeze<IProvince>({
        code: "CO-VAU",
        name: "Vaup\u00e9s",
        slug: "vaupes",
      }),
      Object.freeze<IProvince>({
        code: "CO-VID",
        name: "Vichada",
        slug: "vichada",
      }),
    ],
  }),
  KM: Object.freeze<ICountry>({
    code: "KM",
    currency: CURRENCIES.KMF,
    name: "Comoros",
    nameWithArticle: "Comoros",
    provinces: [
      Object.freeze<IProvince>({
        code: "KM-A",
        name: "Andjou\u00e2n",
        slug: "andjouan",
      }),
      Object.freeze<IProvince>({
        code: "KM-G",
        name: "Andjaz\u00eedja",
        slug: "andjazidja",
      }),
      Object.freeze<IProvince>({
        code: "KM-M",
        name: "Moh\u00e9li",
        slug: "moheli",
      }),
    ],
  }),
  CG: Object.freeze<ICountry>({
    code: "CG",
    currency: CURRENCIES.XOF,
    name: "Congo",
    nameWithArticle: "Congo",
    provinces: [
      Object.freeze<IProvince>({
        code: "CG-11",
        name: "Bouenza",
        slug: "bouenza",
      }),
      Object.freeze<IProvince>({
        code: "CG-12",
        name: "Pool",
        slug: "pool",
      }),
      Object.freeze<IProvince>({
        code: "CG-13",
        name: "Sangha",
        slug: "sangha",
      }),
      Object.freeze<IProvince>({
        code: "CG-14",
        name: "Plateaux",
        slug: "plateaux",
      }),
      Object.freeze<IProvince>({
        code: "CG-15",
        name: "Cuvette-Ouest",
        slug: "cuvette-ouest",
      }),
      Object.freeze<IProvince>({
        code: "CG-16",
        name: "Pointe-Noire",
        slug: "pointe-noire",
      }),
      Object.freeze<IProvince>({
        code: "CG-2",
        name: "L\u00e9koumou",
        slug: "lekoumou",
      }),
      Object.freeze<IProvince>({
        code: "CG-5",
        name: "Kouilou",
        slug: "kouilou",
      }),
      Object.freeze<IProvince>({
        code: "CG-7",
        name: "Likouala",
        slug: "likouala",
      }),
      Object.freeze<IProvince>({
        code: "CG-8",
        name: "Cuvette",
        slug: "cuvette",
      }),
      Object.freeze<IProvince>({
        code: "CG-9",
        name: "Niari",
        slug: "niari",
      }),
      Object.freeze<IProvince>({
        code: "CG-BZV",
        name: "Brazzaville",
        slug: "brazzaville",
      }),
    ],
  }),
  CD: Object.freeze<ICountry>({
    code: "CD",
    currency: CURRENCIES.CDF,
    name: "Congo, The Democratic Republic of the",
    nameWithArticle: "Congo, The Democratic Republic of the",
    provinces: [
      Object.freeze<IProvince>({
        code: "CD-BC",
        name: "Bas-Congo",
        slug: "bas-congo",
      }),
      Object.freeze<IProvince>({
        code: "CD-BN",
        name: "Bandundu",
        slug: "bandundu",
      }),
      Object.freeze<IProvince>({
        code: "CD-EQ",
        name: "\u00c9quateur",
        slug: "equateur",
      }),
      Object.freeze<IProvince>({
        code: "CD-KA",
        name: "Katanga",
        slug: "katanga",
      }),
      Object.freeze<IProvince>({
        code: "CD-KE",
        name: "Kasai-Oriental",
        slug: "kasai-oriental",
      }),
      Object.freeze<IProvince>({
        code: "CD-KN",
        name: "Kinshasa",
        slug: "kinshasa",
      }),
      Object.freeze<IProvince>({
        code: "CD-KW",
        name: "Kasai-Occidental",
        slug: "kasai-occidental",
      }),
      Object.freeze<IProvince>({
        code: "CD-MA",
        name: "Maniema",
        slug: "maniema",
      }),
      Object.freeze<IProvince>({
        code: "CD-NK",
        name: "Nord-Kivu",
        slug: "nord-kivu",
      }),
      Object.freeze<IProvince>({
        code: "CD-OR",
        name: "Orientale",
        slug: "orientale",
      }),
      Object.freeze<IProvince>({
        code: "CD-SK",
        name: "Sud-Kivu",
        slug: "sud-kivu",
      }),
    ],
  }),
  CK: Object.freeze<ICountry>({
    code: "CK",
    currency: CURRENCIES.NZD,
    name: "Cook Islands",
    nameWithArticle: "Cook Islands",
    provinces: [],
  }),
  CR: Object.freeze<ICountry>({
    code: "CR",
    currency: CURRENCIES.CRC,
    name: "Costa Rica",
    nameWithArticle: "Costa Rica",
    provinces: [
      Object.freeze<IProvince>({
        code: "CR-A",
        name: "Alajuela",
        slug: "alajuela",
      }),
      Object.freeze<IProvince>({
        code: "CR-C",
        name: "Cartago",
        slug: "cartago",
      }),
      Object.freeze<IProvince>({
        code: "CR-G",
        name: "Guanacaste",
        slug: "guanacaste",
      }),
      Object.freeze<IProvince>({
        code: "CR-H",
        name: "Heredia",
        slug: "heredia",
      }),
      Object.freeze<IProvince>({
        code: "CR-L",
        name: "Lim\u00f3n",
        slug: "limon",
      }),
      Object.freeze<IProvince>({
        code: "CR-P",
        name: "Puntarenas",
        slug: "puntarenas",
      }),
      Object.freeze<IProvince>({
        code: "CR-SJ",
        name: "San Jos\u00e9",
        slug: "san-jose",
      }),
    ],
  }),
  CI: Object.freeze<ICountry>({
    code: "CI",
    currency: CURRENCIES.XAF,
    name: "C\u00f4te d'Ivoire",
    nameWithArticle: "C\u00f4te d'Ivoire",
    provinces: [
      Object.freeze<IProvince>({
        code: "CI-AB",
        name: "Abidjan",
        slug: "abidjan",
      }),
      Object.freeze<IProvince>({
        code: "CI-BS",
        name: "Bas-Sassandra",
        slug: "bas-sassandra",
      }),
      Object.freeze<IProvince>({
        code: "CI-CM",
        name: "Como\u00e9",
        slug: "comoe",
      }),
      Object.freeze<IProvince>({
        code: "CI-DN",
        name: "Dengu\u00e9l\u00e9",
        slug: "denguele",
      }),
      Object.freeze<IProvince>({
        code: "CI-GD",
        name: "G\u00f4h-Djiboua",
        slug: "goh-djiboua",
      }),
      Object.freeze<IProvince>({
        code: "CI-LC",
        name: "Lacs",
        slug: "lacs",
      }),
      Object.freeze<IProvince>({
        code: "CI-LG",
        name: "Lagunes",
        slug: "lagunes",
      }),
      Object.freeze<IProvince>({
        code: "CI-MG",
        name: "Montagnes",
        slug: "montagnes",
      }),
      Object.freeze<IProvince>({
        code: "CI-SM",
        name: "Sassandra-Marahou\u00e9",
        slug: "sassandra-marahoue",
      }),
      Object.freeze<IProvince>({
        code: "CI-SV",
        name: "Savanes",
        slug: "savanes",
      }),
      Object.freeze<IProvince>({
        code: "CI-VB",
        name: "Vall\u00e9e du Bandama",
        slug: "vallee-du-bandama",
      }),
      Object.freeze<IProvince>({
        code: "CI-WR",
        name: "Woroba",
        slug: "woroba",
      }),
      Object.freeze<IProvince>({
        code: "CI-YM",
        name: "Yamoussoukro",
        slug: "yamoussoukro",
      }),
      Object.freeze<IProvince>({
        code: "CI-ZZ",
        name: "Zanzan",
        slug: "zanzan",
      }),
    ],
  }),
  HR: Object.freeze<ICountry>({
    code: "HR",
    currency: CURRENCIES.HRK,
    name: "Croatia",
    nameWithArticle: "Croatia",
    provinces: [
      Object.freeze<IProvince>({
        code: "HR-01",
        name: "Zagreba\u010dka \u017eupanija",
        slug: "zagrebacka-zupanija",
      }),
      Object.freeze<IProvince>({
        code: "HR-02",
        name: "Krapinsko-zagorska \u017eupanija",
        slug: "krapinsko-zagorska-zupanija",
      }),
      Object.freeze<IProvince>({
        code: "HR-03",
        name: "Sisa\u010dko-moslava\u010dka \u017eupanija",
        slug: "sisacko-moslavacka-zupanija",
      }),
      Object.freeze<IProvince>({
        code: "HR-04",
        name: "Karlova\u010dka \u017eupanija",
        slug: "karlovacka-zupanija",
      }),
      Object.freeze<IProvince>({
        code: "HR-05",
        name: "Vara\u017edinska \u017eupanija",
        slug: "varazdinska-zupanija",
      }),
      Object.freeze<IProvince>({
        code: "HR-06",
        name: "Koprivni\u010dko-kri\u017eeva\u010dka \u017eupanija",
        slug: "koprivnicko-krizevacka-zupanija",
      }),
      Object.freeze<IProvince>({
        code: "HR-07",
        name: "Bjelovarsko-bilogorska \u017eupanija",
        slug: "bjelovarsko-bilogorska-zupanija",
      }),
      Object.freeze<IProvince>({
        code: "HR-08",
        name: "Primorsko-goranska \u017eupanija",
        slug: "primorsko-goranska-zupanija",
      }),
      Object.freeze<IProvince>({
        code: "HR-09",
        name: "Li\u010dko-senjska \u017eupanija",
        slug: "licko-senjska-zupanija",
      }),
      Object.freeze<IProvince>({
        code: "HR-10",
        name: "Viroviti\u010dko-podravska \u017eupanija",
        slug: "viroviticko-podravska-zupanija",
      }),
      Object.freeze<IProvince>({
        code: "HR-11",
        name: "Po\u017ee\u0161ko-slavonska \u017eupanija",
        slug: "pozesko-slavonska-zupanija",
      }),
      Object.freeze<IProvince>({
        code: "HR-12",
        name: "Brodsko-posavska \u017eupanija",
        slug: "brodsko-posavska-zupanija",
      }),
      Object.freeze<IProvince>({
        code: "HR-13",
        name: "Zadarska \u017eupanija",
        slug: "zadarska-zupanija",
      }),
      Object.freeze<IProvince>({
        code: "HR-14",
        name: "Osje\u010dko-baranjska \u017eupanija",
        slug: "osjecko-baranjska-zupanija",
      }),
      Object.freeze<IProvince>({
        code: "HR-15",
        name: "\u0160ibensko-kninska \u017eupanija",
        slug: "sibensko-kninska-zupanija",
      }),
      Object.freeze<IProvince>({
        code: "HR-16",
        name: "Vukovarsko-srijemska \u017eupanija",
        slug: "vukovarsko-srijemska-zupanija",
      }),
      Object.freeze<IProvince>({
        code: "HR-17",
        name: "Splitsko-dalmatinska \u017eupanija",
        slug: "splitsko-dalmatinska-zupanija",
      }),
      Object.freeze<IProvince>({
        code: "HR-18",
        name: "Istarska \u017eupanija",
        slug: "istarska-zupanija",
      }),
      Object.freeze<IProvince>({
        code: "HR-19",
        name: "Dubrova\u010dko-neretvanska \u017eupanija",
        slug: "dubrovacko-neretvanska-zupanija",
      }),
      Object.freeze<IProvince>({
        code: "HR-20",
        name: "Me\u0111imurska \u017eupanija",
        slug: "meimurska-zupanija",
      }),
      Object.freeze<IProvince>({
        code: "HR-21",
        name: "Grad Zagreb",
        slug: "grad-zagreb",
      }),
    ],
  }),
  CU: Object.freeze<ICountry>({
    code: "CU",
    currency: CURRENCIES.CUP,
    name: "Cuba",
    nameWithArticle: "Cuba",
    provinces: [
      Object.freeze<IProvince>({
        code: "CU-01",
        name: "Pinar del R\u00edo",
        slug: "pinar-del-rio",
      }),
      Object.freeze<IProvince>({
        code: "CU-03",
        name: "La Habana",
        slug: "la-habana",
      }),
      Object.freeze<IProvince>({
        code: "CU-04",
        name: "Matanzas",
        slug: "matanzas",
      }),
      Object.freeze<IProvince>({
        code: "CU-05",
        name: "Villa Clara",
        slug: "villa-clara",
      }),
      Object.freeze<IProvince>({
        code: "CU-06",
        name: "Cienfuegos",
        slug: "cienfuegos",
      }),
      Object.freeze<IProvince>({
        code: "CU-07",
        name: "Sancti Sp\u00edritus",
        slug: "sancti-spiritus",
      }),
      Object.freeze<IProvince>({
        code: "CU-08",
        name: "Ciego de \u00c1vila",
        slug: "ciego-de-avila",
      }),
      Object.freeze<IProvince>({
        code: "CU-09",
        name: "Camag\u00fcey",
        slug: "camaguey",
      }),
      Object.freeze<IProvince>({
        code: "CU-10",
        name: "Las Tunas",
        slug: "las-tunas",
      }),
      Object.freeze<IProvince>({
        code: "CU-11",
        name: "Holgu\u00edn",
        slug: "holguin",
      }),
      Object.freeze<IProvince>({
        code: "CU-12",
        name: "Granma",
        slug: "granma",
      }),
      Object.freeze<IProvince>({
        code: "CU-13",
        name: "Santiago de Cuba",
        slug: "santiago-de-cuba",
      }),
      Object.freeze<IProvince>({
        code: "CU-14",
        name: "Guant\u00e1namo",
        slug: "guantanamo",
      }),
      Object.freeze<IProvince>({
        code: "CU-15",
        name: "Artemisa",
        slug: "artemisa",
      }),
      Object.freeze<IProvince>({
        code: "CU-16",
        name: "Mayabeque",
        slug: "mayabeque",
      }),
    ],
  }),
  CW: Object.freeze<ICountry>({
    code: "CW",
    currency: CURRENCIES.ANG,
    name: "Cura\u00e7ao",
    nameWithArticle: "Cura\u00e7ao",
    provinces: [],
  }),
  CY: Object.freeze<ICountry>({
    code: "CY",
    currency: CURRENCIES.EUR,
    name: "Cyprus",
    nameWithArticle: "Cyprus",
    provinces: [
      Object.freeze<IProvince>({
        code: "CY-01",
        name: "Lefko\u015fa",
        slug: "lefkosa",
      }),
      Object.freeze<IProvince>({
        code: "CY-02",
        name: "Lemesos",
        slug: "lemesos",
      }),
      Object.freeze<IProvince>({
        code: "CY-03",
        name: "Larnaka",
        slug: "larnaka",
      }),
      Object.freeze<IProvince>({
        code: "CY-04",
        name: "Ammochostos",
        slug: "ammochostos",
      }),
      Object.freeze<IProvince>({
        code: "CY-05",
        name: "Baf",
        slug: "baf",
      }),
      Object.freeze<IProvince>({
        code: "CY-06",
        name: "Girne",
        slug: "girne",
      }),
    ],
  }),
  CZ: Object.freeze<ICountry>({
    code: "CZ",
    currency: CURRENCIES.CZK,
    name: "Czech Republic",
    nameWithArticle: "Czech Republic",
    provinces: [
      Object.freeze<IProvince>({
        code: "CZ-JC",
        name: "Jiho\u010desk\u00fd kraj",
        slug: "jihocesky-kraj",
      }),
      Object.freeze<IProvince>({
        code: "CZ-JM",
        name: "Jihomoravsk\u00fd kraj",
        slug: "jihomoravsky-kraj",
      }),
      Object.freeze<IProvince>({
        code: "CZ-KA",
        name: "Karlovarsk\u00fd kraj",
        slug: "karlovarsky-kraj",
      }),
      Object.freeze<IProvince>({
        code: "CZ-KR",
        name: "Kr\u00e1lov\u00e9hradeck\u00fd kraj",
        slug: "kralovehradecky-kraj",
      }),
      Object.freeze<IProvince>({
        code: "CZ-LI",
        name: "Libereck\u00fd kraj",
        slug: "liberecky-kraj",
      }),
      Object.freeze<IProvince>({
        code: "CZ-MO",
        name: "Moravskoslezsk\u00fd kraj",
        slug: "moravskoslezsky-kraj",
      }),
      Object.freeze<IProvince>({
        code: "CZ-OL",
        name: "Olomouck\u00fd kraj",
        slug: "olomoucky-kraj",
      }),
      Object.freeze<IProvince>({
        code: "CZ-PA",
        name: "Pardubick\u00fd kraj",
        slug: "pardubicky-kraj",
      }),
      Object.freeze<IProvince>({
        code: "CZ-PL",
        name: "Plze\u0148sk\u00fd kraj",
        slug: "plzensky-kraj",
      }),
      Object.freeze<IProvince>({
        code: "CZ-PR",
        name: "Praha, hlavn\u00ed me\u0161to",
        slug: "praha-hlavni-mesto",
      }),
      Object.freeze<IProvince>({
        code: "CZ-ST",
        name: "St\u0159edo\u010desk\u00fd kraj",
        slug: "stredocesky-kraj",
      }),
      Object.freeze<IProvince>({
        code: "CZ-US",
        name: "\u00dasteck\u00fd kraj",
        slug: "ustecky-kraj",
      }),
      Object.freeze<IProvince>({
        code: "CZ-VY",
        name: "Vyso\u010dina",
        slug: "vysocina",
      }),
      Object.freeze<IProvince>({
        code: "CZ-ZL",
        name: "Zl\u00ednsk\u00fd kraj",
        slug: "zlinsky-kraj",
      }),
    ],
  }),
  DK: Object.freeze<ICountry>({
    code: "DK",
    currency: CURRENCIES.DKK,
    name: "Denmark",
    nameWithArticle: "Denmark",
    provinces: [
      Object.freeze<IProvince>({
        code: "DK-81",
        name: "Nordjylland",
        slug: "nordjylland",
      }),
      Object.freeze<IProvince>({
        code: "DK-82",
        name: "Midtjylland",
        slug: "midtjylland",
      }),
      Object.freeze<IProvince>({
        code: "DK-83",
        name: "Syddanmark",
        slug: "syddanmark",
      }),
      Object.freeze<IProvince>({
        code: "DK-84",
        name: "Hovedstaden",
        slug: "hovedstaden",
      }),
      Object.freeze<IProvince>({
        code: "DK-85",
        name: "Sj\u00e6lland",
        slug: "sjlland",
      }),
    ],
  }),
  DJ: Object.freeze<ICountry>({
    code: "DJ",
    currency: CURRENCIES.DJF,
    name: "Djibouti",
    nameWithArticle: "Djibouti",
    provinces: [
      Object.freeze<IProvince>({
        code: "DJ-AR",
        name: "Arta",
        slug: "arta",
      }),
      Object.freeze<IProvince>({
        code: "DJ-AS",
        name: "Ali Sabieh",
        slug: "ali-sabieh",
      }),
      Object.freeze<IProvince>({
        code: "DJ-DI",
        name: "Dikh\u012bl",
        slug: "dikhil",
      }),
      Object.freeze<IProvince>({
        code: "DJ-DJ",
        name: "Djibouti",
        slug: "djibouti",
      }),
      Object.freeze<IProvince>({
        code: "DJ-OB",
        name: "Obock",
        slug: "obock",
      }),
      Object.freeze<IProvince>({
        code: "DJ-TA",
        name: "Tadjourah",
        slug: "tadjourah",
      }),
    ],
  }),
  DM: Object.freeze<ICountry>({
    code: "DM",
    currency: CURRENCIES.XCD,
    name: "Dominica",
    nameWithArticle: "Dominica",
    provinces: [
      Object.freeze<IProvince>({
        code: "DM-02",
        name: "Saint Andrew",
        slug: "saint-andrew",
      }),
      Object.freeze<IProvince>({
        code: "DM-03",
        name: "Saint David",
        slug: "saint-david",
      }),
      Object.freeze<IProvince>({
        code: "DM-04",
        name: "Saint George",
        slug: "saint-george",
      }),
      Object.freeze<IProvince>({
        code: "DM-05",
        name: "Saint John",
        slug: "saint-john",
      }),
      Object.freeze<IProvince>({
        code: "DM-06",
        name: "Saint Joseph",
        slug: "saint-joseph",
      }),
      Object.freeze<IProvince>({
        code: "DM-07",
        name: "Saint Luke",
        slug: "saint-luke",
      }),
      Object.freeze<IProvince>({
        code: "DM-08",
        name: "Saint Mark",
        slug: "saint-mark",
      }),
      Object.freeze<IProvince>({
        code: "DM-09",
        name: "Saint Patrick",
        slug: "saint-patrick",
      }),
      Object.freeze<IProvince>({
        code: "DM-10",
        name: "Saint Paul",
        slug: "saint-paul",
      }),
      Object.freeze<IProvince>({
        code: "DM-11",
        name: "Saint Peter",
        slug: "saint-peter",
      }),
    ],
  }),
  DO: Object.freeze<ICountry>({
    code: "DO",
    currency: CURRENCIES.DOP,
    name: "Dominican Republic",
    nameWithArticle: "Dominican Republic",
    provinces: [
      Object.freeze<IProvince>({
        code: "DO-01",
        name: "Distrito Nacional",
        slug: "distrito-nacional",
      }),
      Object.freeze<IProvince>({
        code: "DO-02",
        name: "Azua",
        slug: "azua",
      }),
      Object.freeze<IProvince>({
        code: "DO-03",
        name: "Baoruco",
        slug: "baoruco",
      }),
      Object.freeze<IProvince>({
        code: "DO-04",
        name: "Barahona",
        slug: "barahona",
      }),
      Object.freeze<IProvince>({
        code: "DO-05",
        name: "Dajab\u00f3n",
        slug: "dajabon",
      }),
      Object.freeze<IProvince>({
        code: "DO-06",
        name: "Duarte",
        slug: "duarte",
      }),
      Object.freeze<IProvince>({
        code: "DO-07",
        name: "La Estrelleta",
        slug: "la-estrelleta",
      }),
      Object.freeze<IProvince>({
        code: "DO-08",
        name: "El Seibo",
        slug: "el-seibo",
      }),
      Object.freeze<IProvince>({
        code: "DO-09",
        name: "Espaillat",
        slug: "espaillat",
      }),
      Object.freeze<IProvince>({
        code: "DO-10",
        name: "Independencia",
        slug: "independencia",
      }),
      Object.freeze<IProvince>({
        code: "DO-11",
        name: "La Altagracia",
        slug: "la-altagracia",
      }),
      Object.freeze<IProvince>({
        code: "DO-12",
        name: "La Romana",
        slug: "la-romana",
      }),
      Object.freeze<IProvince>({
        code: "DO-13",
        name: "La Vega",
        slug: "la-vega",
      }),
      Object.freeze<IProvince>({
        code: "DO-14",
        name: "Mar\u00eda Trinidad S\u00e1nchez",
        slug: "maria-trinidad-sanchez",
      }),
      Object.freeze<IProvince>({
        code: "DO-15",
        name: "Monte Cristi",
        slug: "monte-cristi",
      }),
      Object.freeze<IProvince>({
        code: "DO-16",
        name: "Pedernales",
        slug: "pedernales",
      }),
      Object.freeze<IProvince>({
        code: "DO-17",
        name: "Peravia",
        slug: "peravia",
      }),
      Object.freeze<IProvince>({
        code: "DO-18",
        name: "Puerto Plata",
        slug: "puerto-plata",
      }),
      Object.freeze<IProvince>({
        code: "DO-19",
        name: "Hermanas Mirabal",
        slug: "hermanas-mirabal",
      }),
      Object.freeze<IProvince>({
        code: "DO-20",
        name: "Saman\u00e1",
        slug: "samana",
      }),
      Object.freeze<IProvince>({
        code: "DO-21",
        name: "San Crist\u00f3bal",
        slug: "san-cristobal",
      }),
      Object.freeze<IProvince>({
        code: "DO-22",
        name: "San Juan",
        slug: "san-juan",
      }),
      Object.freeze<IProvince>({
        code: "DO-23",
        name: "San Pedro de Macor\u00eds",
        slug: "san-pedro-de-macoris",
      }),
      Object.freeze<IProvince>({
        code: "DO-24",
        name: "S\u00e1nchez Ram\u00edrez",
        slug: "sanchez-ramirez",
      }),
      Object.freeze<IProvince>({
        code: "DO-25",
        name: "Santiago",
        slug: "santiago",
      }),
      Object.freeze<IProvince>({
        code: "DO-26",
        name: "Santiago Rodr\u00edguez",
        slug: "santiago-rodriguez",
      }),
      Object.freeze<IProvince>({
        code: "DO-27",
        name: "Valverde",
        slug: "valverde",
      }),
      Object.freeze<IProvince>({
        code: "DO-28",
        name: "Monse\u00f1or Nouel",
        slug: "monsenor-nouel",
      }),
      Object.freeze<IProvince>({
        code: "DO-29",
        name: "Monte Plata",
        slug: "monte-plata",
      }),
      Object.freeze<IProvince>({
        code: "DO-30",
        name: "Hato Mayor",
        slug: "hato-mayor",
      }),
      Object.freeze<IProvince>({
        code: "DO-31",
        name: "San Jos\u00e9 de Ocoa",
        slug: "san-jose-de-ocoa",
      }),
      Object.freeze<IProvince>({
        code: "DO-32",
        name: "Santo Domingo",
        slug: "santo-domingo",
      }),
    ],
  }),
  EC: Object.freeze<ICountry>({
    code: "EC",
    currency: CURRENCIES.USD,
    name: "Ecuador",
    nameWithArticle: "Ecuador",
    provinces: [
      Object.freeze<IProvince>({
        code: "EC-A",
        name: "Azuay",
        slug: "azuay",
      }),
      Object.freeze<IProvince>({
        code: "EC-B",
        name: "Bol\u00edvar",
        slug: "bolivar",
      }),
      Object.freeze<IProvince>({
        code: "EC-C",
        name: "Carchi",
        slug: "carchi",
      }),
      Object.freeze<IProvince>({
        code: "EC-D",
        name: "Orellana",
        slug: "orellana",
      }),
      Object.freeze<IProvince>({
        code: "EC-E",
        name: "Esmeraldas",
        slug: "esmeraldas",
      }),
      Object.freeze<IProvince>({
        code: "EC-F",
        name: "Ca\u00f1ar",
        slug: "canar",
      }),
      Object.freeze<IProvince>({
        code: "EC-G",
        name: "Guayas",
        slug: "guayas",
      }),
      Object.freeze<IProvince>({
        code: "EC-H",
        name: "Chimborazo",
        slug: "chimborazo",
      }),
      Object.freeze<IProvince>({
        code: "EC-I",
        name: "Imbabura",
        slug: "imbabura",
      }),
      Object.freeze<IProvince>({
        code: "EC-L",
        name: "Loja",
        slug: "loja",
      }),
      Object.freeze<IProvince>({
        code: "EC-M",
        name: "Manab\u00ed",
        slug: "manabi",
      }),
      Object.freeze<IProvince>({
        code: "EC-N",
        name: "Napo",
        slug: "napo",
      }),
      Object.freeze<IProvince>({
        code: "EC-O",
        name: "El Oro",
        slug: "el-oro",
      }),
      Object.freeze<IProvince>({
        code: "EC-P",
        name: "Pichincha",
        slug: "pichincha",
      }),
      Object.freeze<IProvince>({
        code: "EC-R",
        name: "Los R\u00edos",
        slug: "los-rios",
      }),
      Object.freeze<IProvince>({
        code: "EC-SD",
        name: "Santo Domingo de los Ts\u00e1chilas",
        slug: "santo-domingo-de-los-tsachilas",
      }),
      Object.freeze<IProvince>({
        code: "EC-SE",
        name: "Santa Elena",
        slug: "santa-elena",
      }),
      Object.freeze<IProvince>({
        code: "EC-S",
        name: "Morona-Santiago",
        slug: "morona-santiago",
      }),
      Object.freeze<IProvince>({
        code: "EC-T",
        name: "Tungurahua",
        slug: "tungurahua",
      }),
      Object.freeze<IProvince>({
        code: "EC-U",
        name: "Sucumb\u00edos",
        slug: "sucumbios",
      }),
      Object.freeze<IProvince>({
        code: "EC-W",
        name: "Gal\u00e1pagos",
        slug: "galapagos",
      }),
      Object.freeze<IProvince>({
        code: "EC-X",
        name: "Cotopaxi",
        slug: "cotopaxi",
      }),
      Object.freeze<IProvince>({
        code: "EC-Y",
        name: "Pastaza",
        slug: "pastaza",
      }),
      Object.freeze<IProvince>({
        code: "EC-Z",
        name: "Zamora-Chinchipe",
        slug: "zamora-chinchipe",
      }),
    ],
  }),
  EG: Object.freeze<ICountry>({
    code: "EG",
    currency: CURRENCIES.EGP,
    name: "Egypt",
    nameWithArticle: "Egypt",
    provinces: [
      Object.freeze<IProvince>({
        code: "EG-ALX",
        name: "Al Iskandar\u012byah",
        slug: "al-iskandariyah",
      }),
      Object.freeze<IProvince>({
        code: "EG-ASN",
        name: "Asw\u0101n",
        slug: "aswan",
      }),
      Object.freeze<IProvince>({
        code: "EG-AST",
        name: "Asy\u016b\u0163",
        slug: "asyut",
      }),
      Object.freeze<IProvince>({
        code: "EG-BA",
        name: "Al Ba\u1e29r al A\u1e29mar",
        slug: "al-bahr-al-ahmar",
      }),
      Object.freeze<IProvince>({
        code: "EG-BH",
        name: "Al Bu\u1e29ayrah",
        slug: "al-buhayrah",
      }),
      Object.freeze<IProvince>({
        code: "EG-BNS",
        name: "Ban\u012b Suwayf",
        slug: "bani-suwayf",
      }),
      Object.freeze<IProvince>({
        code: "EG-C",
        name: "Al Q\u0101hirah",
        slug: "al-qahirah",
      }),
      Object.freeze<IProvince>({
        code: "EG-DK",
        name: "Ad Daqahl\u012byah",
        slug: "ad-daqahliyah",
      }),
      Object.freeze<IProvince>({
        code: "EG-DT",
        name: "Dumy\u0101\u0163",
        slug: "dumyat",
      }),
      Object.freeze<IProvince>({
        code: "EG-FYM",
        name: "Al Fayy\u016bm",
        slug: "al-fayyum",
      }),
      Object.freeze<IProvince>({
        code: "EG-GH",
        name: "Al Gharb\u012byah",
        slug: "al-gharbiyah",
      }),
      Object.freeze<IProvince>({
        code: "EG-GZ",
        name: "Al J\u012bzah",
        slug: "al-jizah",
      }),
      Object.freeze<IProvince>({
        code: "EG-IS",
        name: "Al Ism\u0101'\u012bl\u012byah",
        slug: "al-ismailiyah",
      }),
      Object.freeze<IProvince>({
        code: "EG-JS",
        name: "Jan\u016bb S\u012bn\u0101'",
        slug: "janub-sina",
      }),
      Object.freeze<IProvince>({
        code: "EG-KB",
        name: "Al Qaly\u016bb\u012byah",
        slug: "al-qalyubiyah",
      }),
      Object.freeze<IProvince>({
        code: "EG-KFS",
        name: "Kafr ash Shaykh",
        slug: "kafr-ash-shaykh",
      }),
      Object.freeze<IProvince>({
        code: "EG-KN",
        name: "Qin\u0101",
        slug: "qina",
      }),
      Object.freeze<IProvince>({
        code: "EG-LX",
        name: "Al Uq\u015fur",
        slug: "al-uqsur",
      }),
      Object.freeze<IProvince>({
        code: "EG-MN",
        name: "Al Miny\u0101",
        slug: "al-minya",
      }),
      Object.freeze<IProvince>({
        code: "EG-MNF",
        name: "Al Min\u016bf\u012byah",
        slug: "al-minufiyah",
      }),
      Object.freeze<IProvince>({
        code: "EG-MT",
        name: "Ma\u0163r\u016b\u1e29",
        slug: "matruh",
      }),
      Object.freeze<IProvince>({
        code: "EG-PTS",
        name: "B\u016br Sa\u2018\u012bd",
        slug: "bur-said",
      }),
      Object.freeze<IProvince>({
        code: "EG-SHG",
        name: "S\u016bh\u0101j",
        slug: "suhaj",
      }),
      Object.freeze<IProvince>({
        code: "EG-SHR",
        name: "Ash Sharq\u012byah",
        slug: "ash-sharqiyah",
      }),
      Object.freeze<IProvince>({
        code: "EG-SIN",
        name: "Sham\u0101l S\u012bn\u0101'",
        slug: "shamal-sina",
      }),
      Object.freeze<IProvince>({
        code: "EG-SUZ",
        name: "As Suways",
        slug: "as-suways",
      }),
      Object.freeze<IProvince>({
        code: "EG-WAD",
        name: "Al W\u0101d\u012b al Jad\u012bd",
        slug: "al-wadi-al-jadid",
      }),
    ],
  }),
  SV: Object.freeze<ICountry>({
    code: "SV",
    currency: CURRENCIES.USD,
    name: "El Salvador",
    nameWithArticle: "El Salvador",
    provinces: [
      Object.freeze<IProvince>({
        code: "SV-AH",
        name: "Ahuachap\u00e1n",
        slug: "ahuachapan",
      }),
      Object.freeze<IProvince>({
        code: "SV-CA",
        name: "Caba\u00f1as",
        slug: "cabanas",
      }),
      Object.freeze<IProvince>({
        code: "SV-CH",
        name: "Chalatenango",
        slug: "chalatenango",
      }),
      Object.freeze<IProvince>({
        code: "SV-CU",
        name: "Cuscatl\u00e1n",
        slug: "cuscatlan",
      }),
      Object.freeze<IProvince>({
        code: "SV-LI",
        name: "La Libertad",
        slug: "la-libertad",
      }),
      Object.freeze<IProvince>({
        code: "SV-MO",
        name: "Moraz\u00e1n",
        slug: "morazan",
      }),
      Object.freeze<IProvince>({
        code: "SV-PA",
        name: "La Paz",
        slug: "la-paz",
      }),
      Object.freeze<IProvince>({
        code: "SV-SA",
        name: "Santa Ana",
        slug: "santa-ana",
      }),
      Object.freeze<IProvince>({
        code: "SV-SM",
        name: "San Miguel",
        slug: "san-miguel",
      }),
      Object.freeze<IProvince>({
        code: "SV-SO",
        name: "Sonsonate",
        slug: "sonsonate",
      }),
      Object.freeze<IProvince>({
        code: "SV-SS",
        name: "San Salvador",
        slug: "san-salvador",
      }),
      Object.freeze<IProvince>({
        code: "SV-SV",
        name: "San Vicente",
        slug: "san-vicente",
      }),
      Object.freeze<IProvince>({
        code: "SV-UN",
        name: "La Uni\u00f3n",
        slug: "la-union",
      }),
      Object.freeze<IProvince>({
        code: "SV-US",
        name: "Usulut\u00e1n",
        slug: "usulutan",
      }),
    ],
  }),
  GQ: Object.freeze<ICountry>({
    code: "GQ",
    currency: CURRENCIES.XOF,
    name: "Equatorial Guinea",
    nameWithArticle: "Equatorial Guinea",
    provinces: [
      Object.freeze<IProvince>({
        code: "GQ-AN",
        name: "Annob\u00f3n",
        slug: "annobon",
      }),
      Object.freeze<IProvince>({
        code: "GQ-BN",
        name: "Bioko Nord",
        slug: "bioko-nord",
      }),
      Object.freeze<IProvince>({
        code: "GQ-BS",
        name: "Bioko Sud",
        slug: "bioko-sud",
      }),
      Object.freeze<IProvince>({
        code: "GQ-C",
        name: "Regi\u00e3o Continental",
        slug: "regiao-continental",
      }),
      Object.freeze<IProvince>({
        code: "GQ-CS",
        name: "Centro Sud",
        slug: "centro-sud",
      }),
      Object.freeze<IProvince>({
        code: "GQ-I",
        name: "Regi\u00e3o Insular",
        slug: "regiao-insular",
      }),
      Object.freeze<IProvince>({
        code: "GQ-KN",
        name: "Ki\u00e9-Ntem",
        slug: "kie-ntem",
      }),
      Object.freeze<IProvince>({
        code: "GQ-LI",
        name: "Litoral",
        slug: "litoral",
      }),
      Object.freeze<IProvince>({
        code: "GQ-WN",
        name: "Wele-Nzas",
        slug: "wele-nzas",
      }),
    ],
  }),
  ER: Object.freeze<ICountry>({
    code: "ER",
    currency: CURRENCIES.ERN,
    name: "Eritrea",
    nameWithArticle: "Eritrea",
    provinces: [
      Object.freeze<IProvince>({
        code: "ER-AN",
        name: "Ansab\u0101",
        slug: "ansaba",
      }),
      Object.freeze<IProvince>({
        code: "ER-DK",
        name: "Debubawi K\u2019eyy\u012d\u1e25 Ba\u1e25ri",
        slug: "debubawi-keyyih-bahri",
      }),
      Object.freeze<IProvince>({
        code: "ER-DU",
        name: "Al Jan\u016bb\u012b",
        slug: "al-janubi",
      }),
      Object.freeze<IProvince>({
        code: "ER-GB",
        name: "Gash-Barka",
        slug: "gash-barka",
      }),
      Object.freeze<IProvince>({
        code: "ER-MA",
        name: "Al Awsa\u0163",
        slug: "al-awsat",
      }),
      Object.freeze<IProvince>({
        code: "ER-SK",
        name: "Semienawi K\u2019eyy\u012d\u1e25 Ba\u1e25ri",
        slug: "semienawi-keyyih-bahri",
      }),
    ],
  }),
  EE: Object.freeze<ICountry>({
    code: "EE",
    currency: CURRENCIES.EUR,
    name: "Estonia",
    nameWithArticle: "Estonia",
    provinces: [
      Object.freeze<IProvince>({
        code: "EE-37",
        name: "Harjumaa",
        slug: "harjumaa",
      }),
      Object.freeze<IProvince>({
        code: "EE-39",
        name: "Hiiumaa",
        slug: "hiiumaa",
      }),
      Object.freeze<IProvince>({
        code: "EE-44",
        name: "Ida-Virumaa",
        slug: "ida-virumaa",
      }),
      Object.freeze<IProvince>({
        code: "EE-49",
        name: "J\u00f5gevamaa",
        slug: "jogevamaa",
      }),
      Object.freeze<IProvince>({
        code: "EE-51",
        name: "J\u00e4rvamaa",
        slug: "jarvamaa",
      }),
      Object.freeze<IProvince>({
        code: "EE-57",
        name: "L\u00e4\u00e4nemaa",
        slug: "laanemaa",
      }),
      Object.freeze<IProvince>({
        code: "EE-59",
        name: "L\u00e4\u00e4ne-Virumaa",
        slug: "laane-virumaa",
      }),
      Object.freeze<IProvince>({
        code: "EE-65",
        name: "P\u00f5lvamaa",
        slug: "polvamaa",
      }),
      Object.freeze<IProvince>({
        code: "EE-67",
        name: "P\u00e4rnumaa",
        slug: "parnumaa",
      }),
      Object.freeze<IProvince>({
        code: "EE-70",
        name: "Raplamaa",
        slug: "raplamaa",
      }),
      Object.freeze<IProvince>({
        code: "EE-74",
        name: "Saaremaa",
        slug: "saaremaa",
      }),
      Object.freeze<IProvince>({
        code: "EE-78",
        name: "Tartumaa",
        slug: "tartumaa",
      }),
      Object.freeze<IProvince>({
        code: "EE-82",
        name: "Valgamaa",
        slug: "valgamaa",
      }),
      Object.freeze<IProvince>({
        code: "EE-84",
        name: "Viljandimaa",
        slug: "viljandimaa",
      }),
      Object.freeze<IProvince>({
        code: "EE-86",
        name: "V\u00f5rumaa",
        slug: "vorumaa",
      }),
    ],
  }),
  ET: Object.freeze<ICountry>({
    code: "ET",
    currency: CURRENCIES.ETB,
    name: "Ethiopia",
    nameWithArticle: "Ethiopia",
    provinces: [
      Object.freeze<IProvince>({
        code: "ET-AA",
        name: "Addis Ababa",
        slug: "addis-ababa",
      }),
      Object.freeze<IProvince>({
        code: "ET-AF",
        name: "Afar",
        slug: "afar",
      }),
      Object.freeze<IProvince>({
        code: "ET-AM",
        name: "Amara",
        slug: "amara",
      }),
      Object.freeze<IProvince>({
        code: "ET-BE",
        name: "Benshangul-Gumaz",
        slug: "benshangul-gumaz",
      }),
      Object.freeze<IProvince>({
        code: "ET-DD",
        name: "Dire Dawa",
        slug: "dire-dawa",
      }),
      Object.freeze<IProvince>({
        code: "ET-GA",
        name: "Gamb\u0113la Hizboch",
        slug: "gambela-hizboch",
      }),
      Object.freeze<IProvince>({
        code: "ET-HA",
        name: "Harari People",
        slug: "harari-people",
      }),
      Object.freeze<IProvince>({
        code: "ET-OR",
        name: "Oromia",
        slug: "oromia",
      }),
      Object.freeze<IProvince>({
        code: "ET-SN",
        name: "Southern Nations, Nationalities and Peoples",
        slug: "southern-nations-nationalities-and-peoples",
      }),
      Object.freeze<IProvince>({
        code: "ET-SO",
        name: "Somali",
        slug: "somali",
      }),
      Object.freeze<IProvince>({
        code: "ET-TI",
        name: "Tigrai",
        slug: "tigrai",
      }),
    ],
  }),
  FK: Object.freeze<ICountry>({
    code: "FK",
    currency: CURRENCIES.FKP,
    name: "Falkland Islands",
    nameWithArticle: "Falkland Islands",
    provinces: [],
  }),
  FO: Object.freeze<ICountry>({
    code: "FO",
    currency: CURRENCIES.DKK,
    name: "Faroe Islands",
    nameWithArticle: "Faroe Islands",
    provinces: [],
  }),
  FJ: Object.freeze<ICountry>({
    code: "FJ",
    currency: CURRENCIES.FJD,
    name: "Fiji",
    nameWithArticle: "Fiji",
    provinces: [
      Object.freeze<IProvince>({
        code: "FJ-01",
        name: "Ba",
        slug: "ba",
      }),
      Object.freeze<IProvince>({
        code: "FJ-02",
        name: "Bua",
        slug: "bua",
      }),
      Object.freeze<IProvince>({
        code: "FJ-03",
        name: "Cakaudrove",
        slug: "cakaudrove",
      }),
      Object.freeze<IProvince>({
        code: "FJ-04",
        name: "Kadavu",
        slug: "kadavu",
      }),
      Object.freeze<IProvince>({
        code: "FJ-05",
        name: "Lau",
        slug: "lau",
      }),
      Object.freeze<IProvince>({
        code: "FJ-06",
        name: "Lomaiviti",
        slug: "lomaiviti",
      }),
      Object.freeze<IProvince>({
        code: "FJ-07",
        name: "Macuata",
        slug: "macuata",
      }),
      Object.freeze<IProvince>({
        code: "FJ-08",
        name: "Nadroga and Navosa",
        slug: "nadroga-and-navosa",
      }),
      Object.freeze<IProvince>({
        code: "FJ-09",
        name: "Naitasiri",
        slug: "naitasiri",
      }),
      Object.freeze<IProvince>({
        code: "FJ-10",
        name: "Namosi",
        slug: "namosi",
      }),
      Object.freeze<IProvince>({
        code: "FJ-11",
        name: "Ra",
        slug: "ra",
      }),
      Object.freeze<IProvince>({
        code: "FJ-12",
        name: "Rewa",
        slug: "rewa",
      }),
      Object.freeze<IProvince>({
        code: "FJ-13",
        name: "Serua",
        slug: "serua",
      }),
      Object.freeze<IProvince>({
        code: "FJ-14",
        name: "Tailevu",
        slug: "tailevu",
      }),
      Object.freeze<IProvince>({
        code: "FJ-R",
        name: "Rotuma",
        slug: "rotuma",
      }),
    ],
  }),
  FI: Object.freeze<ICountry>({
    code: "FI",
    currency: CURRENCIES.EUR,
    name: "Finland",
    nameWithArticle: "Finland",
    provinces: [
      Object.freeze<IProvince>({
        code: "FI-01",
        name: "Ahvenanmaan maakunta",
        slug: "ahvenanmaan-maakunta",
      }),
      Object.freeze<IProvince>({
        code: "FI-02",
        name: "Etel\u00e4-Karjala",
        slug: "etela-karjala",
      }),
      Object.freeze<IProvince>({
        code: "FI-03",
        name: "Etel\u00e4-Pohjanmaa",
        slug: "etela-pohjanmaa",
      }),
      Object.freeze<IProvince>({
        code: "FI-04",
        name: "Etel\u00e4-Savo",
        slug: "etela-savo",
      }),
      Object.freeze<IProvince>({
        code: "FI-05",
        name: "Kainuu",
        slug: "kainuu",
      }),
      Object.freeze<IProvince>({
        code: "FI-06",
        name: "Egentliga Tavastland",
        slug: "egentliga-tavastland",
      }),
      Object.freeze<IProvince>({
        code: "FI-07",
        name: "Keski-Pohjanmaa",
        slug: "keski-pohjanmaa",
      }),
      Object.freeze<IProvince>({
        code: "FI-08",
        name: "Keski-Suomi",
        slug: "keski-suomi",
      }),
      Object.freeze<IProvince>({
        code: "FI-09",
        name: "Kymenlaakso",
        slug: "kymenlaakso",
      }),
      Object.freeze<IProvince>({
        code: "FI-10",
        name: "Lappi",
        slug: "lappi",
      }),
      Object.freeze<IProvince>({
        code: "FI-11",
        name: "Birkaland",
        slug: "birkaland",
      }),
      Object.freeze<IProvince>({
        code: "FI-12",
        name: "\u00d6sterbotten",
        slug: "osterbotten",
      }),
      Object.freeze<IProvince>({
        code: "FI-13",
        name: "Norra Karelen",
        slug: "norra-karelen",
      }),
      Object.freeze<IProvince>({
        code: "FI-14",
        name: "Norra \u00d6sterbotten",
        slug: "norra-osterbotten",
      }),
      Object.freeze<IProvince>({
        code: "FI-15",
        name: "Norra Savolax",
        slug: "norra-savolax",
      }),
      Object.freeze<IProvince>({
        code: "FI-16",
        name: "P\u00e4ij\u00e4nne-Tavastland",
        slug: "paijanne-tavastland",
      }),
      Object.freeze<IProvince>({
        code: "FI-17",
        name: "Satakunda",
        slug: "satakunda",
      }),
      Object.freeze<IProvince>({
        code: "FI-18",
        name: "Nyland",
        slug: "nyland",
      }),
      Object.freeze<IProvince>({
        code: "FI-19",
        name: "Egentliga Finland",
        slug: "egentliga-finland",
      }),
    ],
  }),
  FR: Object.freeze<ICountry>({
    code: "FR",
    currency: CURRENCIES.EUR,
    name: "France",
    nameWithArticle: "France",
    provinces: [
      Object.freeze<IProvince>({
        code: "FR-A",
        name: "Alsace",
        slug: "alsace",
      }),
      Object.freeze<IProvince>({
        code: "FR-B",
        name: "Aquitaine",
        slug: "aquitaine",
      }),
      Object.freeze<IProvince>({
        code: "FR-BL",
        name: "Saint-Barth\u00e9lemy",
        slug: "saint-barthelemy",
      }),
      Object.freeze<IProvince>({
        code: "FR-C",
        name: "Auvergne",
        slug: "auvergne",
      }),
      Object.freeze<IProvince>({
        code: "FR-CP",
        name: "Clipperton",
        slug: "clipperton",
      }),
      Object.freeze<IProvince>({
        code: "FR-D",
        name: "Bourgogne",
        slug: "bourgogne",
      }),
      Object.freeze<IProvince>({
        code: "FR-E",
        name: "Bretagne",
        slug: "bretagne",
      }),
      Object.freeze<IProvince>({
        code: "FR-F",
        name: "Centre",
        slug: "centre",
      }),
      Object.freeze<IProvince>({
        code: "FR-G",
        name: "Champagne-Ardenne",
        slug: "champagne-ardenne",
      }),
      Object.freeze<IProvince>({
        code: "FR-GF",
        name: "Guyane",
        slug: "guyane",
      }),
      Object.freeze<IProvince>({
        code: "FR-GP",
        name: "Guadeloupe",
        slug: "guadeloupe",
      }),
      Object.freeze<IProvince>({
        code: "FR-H",
        name: "Corse",
        slug: "corse",
      }),
      Object.freeze<IProvince>({
        code: "FR-I",
        name: "Franche-Comt\u00e9",
        slug: "franche-comte",
      }),
      Object.freeze<IProvince>({
        code: "FR-J",
        name: "\u00cele-de-France",
        slug: "ile-de-france",
      }),
      Object.freeze<IProvince>({
        code: "FR-K",
        name: "Languedoc-Roussillon",
        slug: "languedoc-roussillon",
      }),
      Object.freeze<IProvince>({
        code: "FR-L",
        name: "Limousin",
        slug: "limousin",
      }),
      Object.freeze<IProvince>({
        code: "FR-MF",
        name: "Saint-Martin",
        slug: "saint-martin",
      }),
      Object.freeze<IProvince>({
        code: "FR-M",
        name: "Lorraine",
        slug: "lorraine",
      }),
      Object.freeze<IProvince>({
        code: "FR-MQ",
        name: "Martinique",
        slug: "martinique",
      }),
      Object.freeze<IProvince>({
        code: "FR-NC",
        name: "Nouvelle-Cal\u00e9donie",
        slug: "nouvelle-caledonie",
      }),
      Object.freeze<IProvince>({
        code: "FR-N",
        name: "Midi-Pyr\u00e9n\u00e9es",
        slug: "midi-pyrenees",
      }),
      Object.freeze<IProvince>({
        code: "FR-O",
        name: "Nord-Pas-de-Calais",
        slug: "nord-pas-de-calais",
      }),
      Object.freeze<IProvince>({
        code: "FR-P",
        name: "Basse-Normandie",
        slug: "basse-normandie",
      }),
      Object.freeze<IProvince>({
        code: "FR-PF",
        name: "Polyn\u00e9sie fran\u00e7aise",
        slug: "polynesie-francaise",
      }),
      Object.freeze<IProvince>({
        code: "FR-PM",
        name: "Saint-Pierre-et-Miquelon",
        slug: "saint-pierre-et-miquelon",
      }),
      Object.freeze<IProvince>({
        code: "FR-Q",
        name: "Haute-Normandie",
        slug: "haute-normandie",
      }),
      Object.freeze<IProvince>({
        code: "FR-RE",
        name: "La R\u00e9union",
        slug: "la-reunion",
      }),
      Object.freeze<IProvince>({
        code: "FR-R",
        name: "Pays-de-la-Loire",
        slug: "pays-de-la-loire",
      }),
      Object.freeze<IProvince>({
        code: "FR-S",
        name: "Picardie",
        slug: "picardie",
      }),
      Object.freeze<IProvince>({
        code: "FR-TF",
        name: "Terres australes fran\u00e7aises",
        slug: "terres-australes-francaises",
      }),
      Object.freeze<IProvince>({
        code: "FR-T",
        name: "Poitou-Charentes",
        slug: "poitou-charentes",
      }),
      Object.freeze<IProvince>({
        code: "FR-U",
        name: "Provence-Alpes-C\u00f4te-d'Azur",
        slug: "provence-alpes-cote-dazur",
      }),
      Object.freeze<IProvince>({
        code: "FR-V",
        name: "Rh\u00f4ne-Alpes",
        slug: "rhone-alpes",
      }),
      Object.freeze<IProvince>({
        code: "FR-WF",
        name: "Wallis-et-Futuna",
        slug: "wallis-et-futuna",
      }),
      Object.freeze<IProvince>({
        code: "FR-YT",
        name: "Mayotte",
        slug: "mayotte",
      }),
    ],
  }),
  GF: Object.freeze<ICountry>({
    code: "GF",
    currency: CURRENCIES.EUR,
    name: "French Guiana",
    nameWithArticle: "French Guiana",
    provinces: [],
  }),
  PF: Object.freeze<ICountry>({
    code: "PF",
    currency: CURRENCIES.XPF,
    name: "French Polynesia",
    nameWithArticle: "French Polynesia",
    provinces: [],
  }),
  TF: Object.freeze<ICountry>({
    code: "TF",
    currency: CURRENCIES.EUR,
    name: "French Southern Territories",
    nameWithArticle: "French Southern Territories",
    provinces: [],
  }),
  GA: Object.freeze<ICountry>({
    code: "GA",
    currency: CURRENCIES.XAF,
    name: "Gabon",
    nameWithArticle: "Gabon",
    provinces: [
      Object.freeze<IProvince>({
        code: "GA-1",
        name: "Estuaire",
        slug: "estuaire",
      }),
      Object.freeze<IProvince>({
        code: "GA-2",
        name: "Haut-Ogoou\u00e9",
        slug: "haut-ogooue",
      }),
      Object.freeze<IProvince>({
        code: "GA-3",
        name: "Moyen-Ogoou\u00e9",
        slug: "moyen-ogooue",
      }),
      Object.freeze<IProvince>({
        code: "GA-4",
        name: "Ngouni\u00e9",
        slug: "ngounie",
      }),
      Object.freeze<IProvince>({
        code: "GA-5",
        name: "Nyanga",
        slug: "nyanga",
      }),
      Object.freeze<IProvince>({
        code: "GA-6",
        name: "Ogoou\u00e9-Ivindo",
        slug: "ogooue-ivindo",
      }),
      Object.freeze<IProvince>({
        code: "GA-7",
        name: "Ogoou\u00e9-Lolo",
        slug: "ogooue-lolo",
      }),
      Object.freeze<IProvince>({
        code: "GA-8",
        name: "Ogoou\u00e9-Maritime",
        slug: "ogooue-maritime",
      }),
      Object.freeze<IProvince>({
        code: "GA-9",
        name: "Woleu-Ntem",
        slug: "woleu-ntem",
      }),
    ],
  }),
  GM: Object.freeze<ICountry>({
    code: "GM",
    currency: CURRENCIES.GMD,
    name: "Gambia",
    nameWithArticle: "Gambia",
    provinces: [
      Object.freeze<IProvince>({
        code: "GM-B",
        name: "Banjul",
        slug: "banjul",
      }),
      Object.freeze<IProvince>({
        code: "GM-L",
        name: "Lower River",
        slug: "lower-river",
      }),
      Object.freeze<IProvince>({
        code: "GM-M",
        name: "Central River",
        slug: "central-river",
      }),
      Object.freeze<IProvince>({
        code: "GM-N",
        name: "North Bank",
        slug: "north-bank",
      }),
      Object.freeze<IProvince>({
        code: "GM-U",
        name: "Upper River",
        slug: "upper-river",
      }),
      Object.freeze<IProvince>({
        code: "GM-W",
        name: "Western",
        slug: "western",
      }),
    ],
  }),
  GE: Object.freeze<ICountry>({
    code: "GE",
    currency: CURRENCIES.GEL,
    name: "Georgia",
    nameWithArticle: "Georgia",
    provinces: [
      Object.freeze<IProvince>({
        code: "GE-AB",
        name: "Abkhazia",
        slug: "abkhazia",
      }),
      Object.freeze<IProvince>({
        code: "GE-AJ",
        name: "Ajaria",
        slug: "ajaria",
      }),
      Object.freeze<IProvince>({
        code: "GE-GU",
        name: "Guria",
        slug: "guria",
      }),
      Object.freeze<IProvince>({
        code: "GE-IM",
        name: "Imereti",
        slug: "imereti",
      }),
      Object.freeze<IProvince>({
        code: "GE-KA",
        name: "K'akheti",
        slug: "kakheti",
      }),
      Object.freeze<IProvince>({
        code: "GE-KK",
        name: "Kvemo Kartli",
        slug: "kvemo-kartli",
      }),
      Object.freeze<IProvince>({
        code: "GE-MM",
        name: "Mtskheta-Mtianeti",
        slug: "mtskheta-mtianeti",
      }),
      Object.freeze<IProvince>({
        code: "GE-RL",
        name: "Rach'a-Lechkhumi-Kvemo Svaneti",
        slug: "racha-lechkhumi-kvemo-svaneti",
      }),
      Object.freeze<IProvince>({
        code: "GE-SJ",
        name: "Samtskhe-Javakheti",
        slug: "samtskhe-javakheti",
      }),
      Object.freeze<IProvince>({
        code: "GE-SK",
        name: "Shida Kartli",
        slug: "shida-kartli",
      }),
      Object.freeze<IProvince>({
        code: "GE-SZ",
        name: "Samegrelo-Zemo Svaneti",
        slug: "samegrelo-zemo-svaneti",
      }),
    ],
  }),
  DE: Object.freeze<ICountry>({
    code: "DE",
    currency: CURRENCIES.EUR,
    name: "Germany",
    nameWithArticle: "Germany",
    provinces: [
      Object.freeze<IProvince>({
        code: "DE-BB",
        name: "Brandenburg",
        slug: "brandenburg",
      }),
      Object.freeze<IProvince>({
        code: "DE-BE",
        name: "Berlin",
        slug: "berlin",
      }),
      Object.freeze<IProvince>({
        code: "DE-BW",
        name: "Baden-W\u00fcrttemberg",
        slug: "baden-wurttemberg",
      }),
      Object.freeze<IProvince>({
        code: "DE-BY",
        name: "Bayern",
        slug: "bayern",
      }),
      Object.freeze<IProvince>({
        code: "DE-HB",
        name: "Bremen",
        slug: "bremen",
      }),
      Object.freeze<IProvince>({
        code: "DE-HE",
        name: "Hessen",
        slug: "hessen",
      }),
      Object.freeze<IProvince>({
        code: "DE-HH",
        name: "Hamburg",
        slug: "hamburg",
      }),
      Object.freeze<IProvince>({
        code: "DE-MV",
        name: "Mecklenburg-Vorpommern",
        slug: "mecklenburg-vorpommern",
      }),
      Object.freeze<IProvince>({
        code: "DE-NI",
        name: "Niedersachsen",
        slug: "niedersachsen",
      }),
      Object.freeze<IProvince>({
        code: "DE-NW",
        name: "Nordrhein-Westfalen",
        slug: "nordrhein-westfalen",
      }),
      Object.freeze<IProvince>({
        code: "DE-RP",
        name: "Rheinland-Pfalz",
        slug: "rheinland-pfalz",
      }),
      Object.freeze<IProvince>({
        code: "DE-SH",
        name: "Schleswig-Holstein",
        slug: "schleswig-holstein",
      }),
      Object.freeze<IProvince>({
        code: "DE-SL",
        name: "Saarland",
        slug: "saarland",
      }),
      Object.freeze<IProvince>({
        code: "DE-SN",
        name: "Sachsen",
        slug: "sachsen",
      }),
      Object.freeze<IProvince>({
        code: "DE-ST",
        name: "Sachsen-Anhalt",
        slug: "sachsen-anhalt",
      }),
      Object.freeze<IProvince>({
        code: "DE-TH",
        name: "Th\u00fcringen",
        slug: "thuringen",
      }),
    ],
  }),
  GH: Object.freeze<ICountry>({
    code: "GH",
    currency: CURRENCIES.GHS,
    name: "Ghana",
    nameWithArticle: "Ghana",
    provinces: [
      Object.freeze<IProvince>({
        code: "GH-AA",
        name: "Greater Accra",
        slug: "greater-accra",
      }),
      Object.freeze<IProvince>({
        code: "GH-AH",
        name: "Ashanti",
        slug: "ashanti",
      }),
      Object.freeze<IProvince>({
        code: "GH-BA",
        name: "Brong-Ahafo",
        slug: "brong-ahafo",
      }),
      Object.freeze<IProvince>({
        code: "GH-CP",
        name: "Central",
        slug: "central",
      }),
      Object.freeze<IProvince>({
        code: "GH-EP",
        name: "Eastern",
        slug: "eastern",
      }),
      Object.freeze<IProvince>({
        code: "GH-NP",
        name: "Northern",
        slug: "northern",
      }),
      Object.freeze<IProvince>({
        code: "GH-TV",
        name: "Volta",
        slug: "volta",
      }),
      Object.freeze<IProvince>({
        code: "GH-UE",
        name: "Upper East",
        slug: "upper-east",
      }),
      Object.freeze<IProvince>({
        code: "GH-UW",
        name: "Upper West",
        slug: "upper-west",
      }),
      Object.freeze<IProvince>({
        code: "GH-WP",
        name: "Western",
        slug: "western",
      }),
    ],
  }),
  GI: Object.freeze<ICountry>({
    code: "GI",
    currency: CURRENCIES.GIP,
    name: "Gibraltar",
    nameWithArticle: "Gibraltar",
    provinces: [],
  }),
  GR: Object.freeze<ICountry>({
    code: "GR",
    currency: CURRENCIES.EUR,
    name: "Greece",
    nameWithArticle: "Greece",
    provinces: [
      Object.freeze<IProvince>({
        code: "GR-69",
        name: "\u00c1gion \u00d3ros",
        slug: "agion-oros",
      }),
      Object.freeze<IProvince>({
        code: "GR-A",
        name: "Anatolik\u00ed Makedon\u00eda kai Thr\u00e1ki",
        slug: "anatoliki-makedonia-kai-thraki",
      }),
      Object.freeze<IProvince>({
        code: "GR-B",
        name: "Kentrik\u00ed Makedon\u00eda",
        slug: "kentriki-makedonia",
      }),
      Object.freeze<IProvince>({
        code: "GR-C",
        name: "Dytik\u00ed Makedon\u00eda",
        slug: "dytiki-makedonia",
      }),
      Object.freeze<IProvince>({
        code: "GR-D",
        name: "\u00cdpeiros",
        slug: "ipeiros",
      }),
      Object.freeze<IProvince>({
        code: "GR-E",
        name: "Thessal\u00eda",
        slug: "thessalia",
      }),
      Object.freeze<IProvince>({
        code: "GR-F",
        name: "Ion\u00eda N\u00edsia",
        slug: "ionia-nisia",
      }),
      Object.freeze<IProvince>({
        code: "GR-G",
        name: "Dytik\u00ed Ell\u00e1da",
        slug: "dytiki-ellada",
      }),
      Object.freeze<IProvince>({
        code: "GR-H",
        name: "Stere\u00e1 Ell\u00e1da",
        slug: "sterea-ellada",
      }),
      Object.freeze<IProvince>({
        code: "GR-I",
        name: "Attik\u00ed",
        slug: "attiki",
      }),
      Object.freeze<IProvince>({
        code: "GR-J",
        name: "Peloponn\u00edsos",
        slug: "peloponnisos",
      }),
      Object.freeze<IProvince>({
        code: "GR-K",
        name: "Vore\u00edo Aiga\u00edo",
        slug: "voreio-aigaio",
      }),
      Object.freeze<IProvince>({
        code: "GR-L",
        name: "Not\u00edo Aiga\u00edo",
        slug: "notio-aigaio",
      }),
      Object.freeze<IProvince>({
        code: "GR-M",
        name: "Kr\u00edt\u00ed",
        slug: "kriti",
      }),
    ],
  }),
  GL: Object.freeze<ICountry>({
    code: "GL",
    currency: CURRENCIES.DKK,
    name: "Greenland",
    nameWithArticle: "Greenland",
    provinces: [
      Object.freeze<IProvince>({
        code: "GL-KU",
        name: "Kommune Kujalleq",
        slug: "kommune-kujalleq",
      }),
      Object.freeze<IProvince>({
        code: "GL-QA",
        name: "Qaasuitsup Kommunia",
        slug: "qaasuitsup-kommunia",
      }),
      Object.freeze<IProvince>({
        code: "GL-QE",
        name: "Qeqqata Kommunia",
        slug: "qeqqata-kommunia",
      }),
      Object.freeze<IProvince>({
        code: "GL-SM",
        name: "Kommuneqarfik Sermersooq",
        slug: "kommuneqarfik-sermersooq",
      }),
    ],
  }),
  GD: Object.freeze<ICountry>({
    code: "GD",
    currency: CURRENCIES.XCD,
    name: "Grenada",
    nameWithArticle: "Grenada",
    provinces: [
      Object.freeze<IProvince>({
        code: "GD-01",
        name: "Saint Andrew",
        slug: "saint-andrew",
      }),
      Object.freeze<IProvince>({
        code: "GD-02",
        name: "Saint David",
        slug: "saint-david",
      }),
      Object.freeze<IProvince>({
        code: "GD-03",
        name: "Saint George",
        slug: "saint-george",
      }),
      Object.freeze<IProvince>({
        code: "GD-04",
        name: "Saint John",
        slug: "saint-john",
      }),
      Object.freeze<IProvince>({
        code: "GD-05",
        name: "Saint Mark",
        slug: "saint-mark",
      }),
      Object.freeze<IProvince>({
        code: "GD-06",
        name: "Saint Patrick",
        slug: "saint-patrick",
      }),
      Object.freeze<IProvince>({
        code: "GD-10",
        name: "Southern Grenadine Islands",
        slug: "southern-grenadine-islands",
      }),
    ],
  }),
  GP: Object.freeze<ICountry>({
    code: "GP",
    currency: CURRENCIES.EUR,
    name: "Guadeloupe",
    nameWithArticle: "Guadeloupe",
    provinces: [],
  }),
  GU: Object.freeze<ICountry>({
    code: "GU",
    currency: CURRENCIES.USD,
    name: "Guam",
    nameWithArticle: "Guam",
    provinces: [],
  }),
  GT: Object.freeze<ICountry>({
    code: "GT",
    currency: CURRENCIES.GTQ,
    name: "Guatemala",
    nameWithArticle: "Guatemala",
    provinces: [
      Object.freeze<IProvince>({
        code: "GT-AV",
        name: "Alta Verapaz",
        slug: "alta-verapaz",
      }),
      Object.freeze<IProvince>({
        code: "GT-BV",
        name: "Baja Verapaz",
        slug: "baja-verapaz",
      }),
      Object.freeze<IProvince>({
        code: "GT-CM",
        name: "Chimaltenango",
        slug: "chimaltenango",
      }),
      Object.freeze<IProvince>({
        code: "GT-CQ",
        name: "Chiquimula",
        slug: "chiquimula",
      }),
      Object.freeze<IProvince>({
        code: "GT-ES",
        name: "Escuintla",
        slug: "escuintla",
      }),
      Object.freeze<IProvince>({
        code: "GT-GU",
        name: "Guatemala",
        slug: "guatemala",
      }),
      Object.freeze<IProvince>({
        code: "GT-HU",
        name: "Huehuetenango",
        slug: "huehuetenango",
      }),
      Object.freeze<IProvince>({
        code: "GT-IZ",
        name: "Izabal",
        slug: "izabal",
      }),
      Object.freeze<IProvince>({
        code: "GT-JA",
        name: "Jalapa",
        slug: "jalapa",
      }),
      Object.freeze<IProvince>({
        code: "GT-JU",
        name: "Jutiapa",
        slug: "jutiapa",
      }),
      Object.freeze<IProvince>({
        code: "GT-PE",
        name: "Pet\u00e9n",
        slug: "peten",
      }),
      Object.freeze<IProvince>({
        code: "GT-PR",
        name: "El Progreso",
        slug: "el-progreso",
      }),
      Object.freeze<IProvince>({
        code: "GT-QC",
        name: "Quich\u00e9",
        slug: "quiche",
      }),
      Object.freeze<IProvince>({
        code: "GT-QZ",
        name: "Quetzaltenango",
        slug: "quetzaltenango",
      }),
      Object.freeze<IProvince>({
        code: "GT-RE",
        name: "Retalhuleu",
        slug: "retalhuleu",
      }),
      Object.freeze<IProvince>({
        code: "GT-SA",
        name: "Sacatep\u00e9quez",
        slug: "sacatepequez",
      }),
      Object.freeze<IProvince>({
        code: "GT-SM",
        name: "San Marcos",
        slug: "san-marcos",
      }),
      Object.freeze<IProvince>({
        code: "GT-SO",
        name: "Solol\u00e1",
        slug: "solola",
      }),
      Object.freeze<IProvince>({
        code: "GT-SR",
        name: "Santa Rosa",
        slug: "santa-rosa",
      }),
      Object.freeze<IProvince>({
        code: "GT-SU",
        name: "Suchitep\u00e9quez",
        slug: "suchitepequez",
      }),
      Object.freeze<IProvince>({
        code: "GT-TO",
        name: "Totonicap\u00e1n",
        slug: "totonicapan",
      }),
      Object.freeze<IProvince>({
        code: "GT-ZA",
        name: "Zacapa",
        slug: "zacapa",
      }),
    ],
  }),
  GG: Object.freeze<ICountry>({
    code: "GG",
    currency: CURRENCIES.GBP,
    name: "Guernsey",
    nameWithArticle: "Guernsey",
    provinces: [],
  }),
  GW: Object.freeze<ICountry>({
    code: "GW",
    currency: CURRENCIES.XAF,
    name: "Guinea-Bissau",
    nameWithArticle: "Guinea-Bissau",
    provinces: [
      Object.freeze<IProvince>({
        code: "GW-BA",
        name: "Bafat\u00e1",
        slug: "bafata",
      }),
      Object.freeze<IProvince>({
        code: "GW-BL",
        name: "Bolama",
        slug: "bolama",
      }),
      Object.freeze<IProvince>({
        code: "GW-BM",
        name: "Biombo",
        slug: "biombo",
      }),
      Object.freeze<IProvince>({
        code: "GW-BS",
        name: "Bissau",
        slug: "bissau",
      }),
      Object.freeze<IProvince>({
        code: "GW-CA",
        name: "Cacheu",
        slug: "cacheu",
      }),
      Object.freeze<IProvince>({
        code: "GW-GA",
        name: "Gab\u00fa",
        slug: "gabu",
      }),
      Object.freeze<IProvince>({
        code: "GW-OI",
        name: "Oio",
        slug: "oio",
      }),
      Object.freeze<IProvince>({
        code: "GW-QU",
        name: "Quinara",
        slug: "quinara",
      }),
      Object.freeze<IProvince>({
        code: "GW-TO",
        name: "Tombali",
        slug: "tombali",
      }),
    ],
  }),
  GN: Object.freeze<ICountry>({
    code: "GN",
    currency: CURRENCIES.GNF,
    name: "Guinea",
    nameWithArticle: "Guinea",
    provinces: [
      Object.freeze<IProvince>({
        code: "GN-B",
        name: "Bok\u00e9",
        slug: "boke",
      }),
      Object.freeze<IProvince>({
        code: "GN-D",
        name: "Kindia",
        slug: "kindia",
      }),
      Object.freeze<IProvince>({
        code: "GN-F",
        name: "Faranah",
        slug: "faranah",
      }),
      Object.freeze<IProvince>({
        code: "GN-K",
        name: "Kankan",
        slug: "kankan",
      }),
      Object.freeze<IProvince>({
        code: "GN-L",
        name: "Lab\u00e9",
        slug: "labe",
      }),
      Object.freeze<IProvince>({
        code: "GN-M",
        name: "Mamou",
        slug: "mamou",
      }),
      Object.freeze<IProvince>({
        code: "GN-N",
        name: "Nz\u00e9r\u00e9kor\u00e9",
        slug: "nzerekore",
      }),
    ],
  }),
  GY: Object.freeze<ICountry>({
    code: "GY",
    currency: CURRENCIES.GYD,
    name: "Guyana",
    nameWithArticle: "Guyana",
    provinces: [
      Object.freeze<IProvince>({
        code: "GY-BA",
        name: "Barima-Waini",
        slug: "barima-waini",
      }),
      Object.freeze<IProvince>({
        code: "GY-CU",
        name: "Cuyuni-Mazaruni",
        slug: "cuyuni-mazaruni",
      }),
      Object.freeze<IProvince>({
        code: "GY-DE",
        name: "Demerara-Mahaica",
        slug: "demerara-mahaica",
      }),
      Object.freeze<IProvince>({
        code: "GY-EB",
        name: "East Berbice-Corentyne",
        slug: "east-berbice-corentyne",
      }),
      Object.freeze<IProvince>({
        code: "GY-ES",
        name: "Essequibo Islands-West Demerara",
        slug: "essequibo-islands-west-demerara",
      }),
      Object.freeze<IProvince>({
        code: "GY-MA",
        name: "Mahaica-Berbice",
        slug: "mahaica-berbice",
      }),
      Object.freeze<IProvince>({
        code: "GY-PM",
        name: "Pomeroon-Supenaam",
        slug: "pomeroon-supenaam",
      }),
      Object.freeze<IProvince>({
        code: "GY-PT",
        name: "Potaro-Siparuni",
        slug: "potaro-siparuni",
      }),
      Object.freeze<IProvince>({
        code: "GY-UD",
        name: "Upper Demerara-Berbice",
        slug: "upper-demerara-berbice",
      }),
      Object.freeze<IProvince>({
        code: "GY-UT",
        name: "Upper Takutu-Upper Essequibo",
        slug: "upper-takutu-upper-essequibo",
      }),
    ],
  }),
  HT: Object.freeze<ICountry>({
    code: "HT",
    currency: CURRENCIES.HTG,
    name: "Haiti",
    nameWithArticle: "Haiti",
    provinces: [
      Object.freeze<IProvince>({
        code: "HT-AR",
        name: "Artibonite",
        slug: "artibonite",
      }),
      Object.freeze<IProvince>({
        code: "HT-CE",
        name: "Centre",
        slug: "centre",
      }),
      Object.freeze<IProvince>({
        code: "HT-GA",
        name: "Grandans",
        slug: "grandans",
      }),
      Object.freeze<IProvince>({
        code: "HT-ND",
        name: "N\u00f2",
        slug: "no",
      }),
      Object.freeze<IProvince>({
        code: "HT-NE",
        name: "N\u00f2d\u00e8s",
        slug: "nodes",
      }),
      Object.freeze<IProvince>({
        code: "HT-NI",
        name: "Nip",
        slug: "nip",
      }),
      Object.freeze<IProvince>({
        code: "HT-NO",
        name: "N\u00f2dw\u00e8s",
        slug: "nodwes",
      }),
      Object.freeze<IProvince>({
        code: "HT-OU",
        name: "Lw\u00e8s",
        slug: "lwes",
      }),
      Object.freeze<IProvince>({
        code: "HT-SD",
        name: "Sid",
        slug: "sid",
      }),
      Object.freeze<IProvince>({
        code: "HT-SE",
        name: "Sid\u00e8s",
        slug: "sides",
      }),
    ],
  }),
  HM: Object.freeze<ICountry>({
    code: "HM",
    currency: CURRENCIES.AUD,
    name: "Heard Island and McDonald Islands",
    nameWithArticle: "Heard Island and McDonald Islands",
    provinces: [],
  }),
  HN: Object.freeze<ICountry>({
    code: "HN",
    currency: CURRENCIES.HNL,
    name: "Honduras",
    nameWithArticle: "Honduras",
    provinces: [
      Object.freeze<IProvince>({
        code: "HN-AT",
        name: "Atl\u00e1ntida",
        slug: "atlantida",
      }),
      Object.freeze<IProvince>({
        code: "HN-CH",
        name: "Choluteca",
        slug: "choluteca",
      }),
      Object.freeze<IProvince>({
        code: "HN-CL",
        name: "Col\u00f3n",
        slug: "colon",
      }),
      Object.freeze<IProvince>({
        code: "HN-CM",
        name: "Comayagua",
        slug: "comayagua",
      }),
      Object.freeze<IProvince>({
        code: "HN-CP",
        name: "Cop\u00e1n",
        slug: "copan",
      }),
      Object.freeze<IProvince>({
        code: "HN-CR",
        name: "Cort\u00e9s",
        slug: "cortes",
      }),
      Object.freeze<IProvince>({
        code: "HN-EP",
        name: "El Para\u00edso",
        slug: "el-paraiso",
      }),
      Object.freeze<IProvince>({
        code: "HN-FM",
        name: "Francisco Moraz\u00e1n",
        slug: "francisco-morazan",
      }),
      Object.freeze<IProvince>({
        code: "HN-GD",
        name: "Gracias a Dios",
        slug: "gracias-a-dios",
      }),
      Object.freeze<IProvince>({
        code: "HN-IB",
        name: "Islas de la Bah\u00eda",
        slug: "islas-de-la-bahia",
      }),
      Object.freeze<IProvince>({
        code: "HN-IN",
        name: "Intibuc\u00e1",
        slug: "intibuca",
      }),
      Object.freeze<IProvince>({
        code: "HN-LE",
        name: "Lempira",
        slug: "lempira",
      }),
      Object.freeze<IProvince>({
        code: "HN-LP",
        name: "La Paz",
        slug: "la-paz",
      }),
      Object.freeze<IProvince>({
        code: "HN-OC",
        name: "Ocotepeque",
        slug: "ocotepeque",
      }),
      Object.freeze<IProvince>({
        code: "HN-OL",
        name: "Olancho",
        slug: "olancho",
      }),
      Object.freeze<IProvince>({
        code: "HN-SB",
        name: "Santa B\u00e1rbara",
        slug: "santa-barbara",
      }),
      Object.freeze<IProvince>({
        code: "HN-VA",
        name: "Valle",
        slug: "valle",
      }),
      Object.freeze<IProvince>({
        code: "HN-YO",
        name: "Yoro",
        slug: "yoro",
      }),
    ],
  }),
  HK: Object.freeze<ICountry>({
    code: "HK",
    currency: CURRENCIES.HKD,
    name: "Hong Kong",
    nameWithArticle: "Hong Kong",
    provinces: [],
  }),
  HU: Object.freeze<ICountry>({
    code: "HU",
    currency: CURRENCIES.HUF,
    name: "Hungary",
    nameWithArticle: "Hungary",
    provinces: [
      Object.freeze<IProvince>({
        code: "HU-BA",
        name: "Baranya",
        slug: "baranya",
      }),
      Object.freeze<IProvince>({
        code: "HU-BE",
        name: "B\u00e9k\u00e9s",
        slug: "bekes",
      }),
      Object.freeze<IProvince>({
        code: "HU-BK",
        name: "B\u00e1cs-Kiskun",
        slug: "bacs-kiskun",
      }),
      Object.freeze<IProvince>({
        code: "HU-BU",
        name: "Budapest",
        slug: "budapest",
      }),
      Object.freeze<IProvince>({
        code: "HU-BZ",
        name: "Borsod-Aba\u00faj-Zempl\u00e9n",
        slug: "borsod-abauj-zemplen",
      }),
      Object.freeze<IProvince>({
        code: "HU-CS",
        name: "Csongr\u00e1d",
        slug: "csongrad",
      }),
      Object.freeze<IProvince>({
        code: "HU-FE",
        name: "Fej\u00e9r",
        slug: "fejer",
      }),
      Object.freeze<IProvince>({
        code: "HU-GS",
        name: "Gy\u0151r-Moson-Sopron",
        slug: "gyor-moson-sopron",
      }),
      Object.freeze<IProvince>({
        code: "HU-HB",
        name: "Hajd\u00fa-Bihar",
        slug: "hajdu-bihar",
      }),
      Object.freeze<IProvince>({
        code: "HU-HE",
        name: "Heves",
        slug: "heves",
      }),
      Object.freeze<IProvince>({
        code: "HU-JN",
        name: "J\u00e1sz-Nagykun-Szolnok",
        slug: "jasz-nagykun-szolnok",
      }),
      Object.freeze<IProvince>({
        code: "HU-KE",
        name: "Kom\u00e1rom-Esztergom",
        slug: "komarom-esztergom",
      }),
      Object.freeze<IProvince>({
        code: "HU-NO",
        name: "N\u00f3gr\u00e1d",
        slug: "nograd",
      }),
      Object.freeze<IProvince>({
        code: "HU-PE",
        name: "Pest",
        slug: "pest",
      }),
      Object.freeze<IProvince>({
        code: "HU-SO",
        name: "Somogy",
        slug: "somogy",
      }),
      Object.freeze<IProvince>({
        code: "HU-SZ",
        name: "Szabolcs-Szatm\u00e1r-Bereg",
        slug: "szabolcs-szatmar-bereg",
      }),
      Object.freeze<IProvince>({
        code: "HU-TO",
        name: "Tolna",
        slug: "tolna",
      }),
      Object.freeze<IProvince>({
        code: "HU-VA",
        name: "Vas",
        slug: "vas",
      }),
      Object.freeze<IProvince>({
        code: "HU-VE",
        name: "Veszpr\u00e9m",
        slug: "veszprem",
      }),
      Object.freeze<IProvince>({
        code: "HU-ZA",
        name: "Zala",
        slug: "zala",
      }),
    ],
  }),
  IS: Object.freeze<ICountry>({
    code: "IS",
    currency: CURRENCIES.ISK,
    name: "Iceland",
    nameWithArticle: "Iceland",
    provinces: [
      Object.freeze<IProvince>({
        code: "IS-0",
        name: "Reykjav\u00edk",
        slug: "reykjavik",
      }),
      Object.freeze<IProvince>({
        code: "IS-1",
        name: "H\u00f6fu\u00f0borgarsv\u00e6\u00f0i utan Reykjav\u00edkur",
        slug: "hofuborgarsvi-utan-reykjavikur",
      }),
      Object.freeze<IProvince>({
        code: "IS-2",
        name: "Su\u00f0urnes",
        slug: "suurnes",
      }),
      Object.freeze<IProvince>({
        code: "IS-3",
        name: "Vesturland",
        slug: "vesturland",
      }),
      Object.freeze<IProvince>({
        code: "IS-4",
        name: "Vestfir\u00f0ir",
        slug: "vestfirir",
      }),
      Object.freeze<IProvince>({
        code: "IS-5",
        name: "Nor\u00f0urland vestra",
        slug: "norurland-vestra",
      }),
      Object.freeze<IProvince>({
        code: "IS-6",
        name: "Nor\u00f0urland eystra",
        slug: "norurland-eystra",
      }),
      Object.freeze<IProvince>({
        code: "IS-7",
        name: "Austurland",
        slug: "austurland",
      }),
      Object.freeze<IProvince>({
        code: "IS-8",
        name: "Su\u00f0urland",
        slug: "suurland",
      }),
    ],
  }),
  IN: Object.freeze<ICountry>({
    code: "IN",
    currency: CURRENCIES.INR,
    name: "India",
    nameWithArticle: "India",
    provinces: [
      Object.freeze<IProvince>({
        code: "IN-AN",
        name: "Andaman and Nicobar Islands",
        slug: "andaman-and-nicobar-islands",
      }),
      Object.freeze<IProvince>({
        code: "IN-AP",
        name: "Andhra Pradesh",
        slug: "andhra-pradesh",
      }),
      Object.freeze<IProvince>({
        code: "IN-AR",
        name: "Arunachal Pradesh",
        slug: "arunachal-pradesh",
      }),
      Object.freeze<IProvince>({
        code: "IN-AS",
        name: "Assam",
        slug: "assam",
      }),
      Object.freeze<IProvince>({
        code: "IN-BR",
        name: "Bihar",
        slug: "bihar",
      }),
      Object.freeze<IProvince>({
        code: "IN-CH",
        name: "Chandigarh",
        slug: "chandigarh",
      }),
      Object.freeze<IProvince>({
        code: "IN-CT",
        name: "Chhattisgarh",
        slug: "chhattisgarh",
      }),
      Object.freeze<IProvince>({
        code: "IN-DD",
        name: "Daman and Diu",
        slug: "daman-and-diu",
      }),
      Object.freeze<IProvince>({
        code: "IN-DL",
        name: "Delhi",
        slug: "delhi",
      }),
      Object.freeze<IProvince>({
        code: "IN-DN",
        name: "Dadra and Nagar Haveli",
        slug: "dadra-and-nagar-haveli",
      }),
      Object.freeze<IProvince>({
        code: "IN-GA",
        name: "Goa",
        slug: "goa",
      }),
      Object.freeze<IProvince>({
        code: "IN-GJ",
        name: "Gujarat",
        slug: "gujarat",
      }),
      Object.freeze<IProvince>({
        code: "IN-HP",
        name: "Himachal Pradesh",
        slug: "himachal-pradesh",
      }),
      Object.freeze<IProvince>({
        code: "IN-HR",
        name: "Haryana",
        slug: "haryana",
      }),
      Object.freeze<IProvince>({
        code: "IN-JH",
        name: "Jharkhand",
        slug: "jharkhand",
      }),
      Object.freeze<IProvince>({
        code: "IN-JK",
        name: "Jammu and Kashmir",
        slug: "jammu-and-kashmir",
      }),
      Object.freeze<IProvince>({
        code: "IN-KA",
        name: "Karnataka",
        slug: "karnataka",
      }),
      Object.freeze<IProvince>({
        code: "IN-KL",
        name: "Kerala",
        slug: "kerala",
      }),
      Object.freeze<IProvince>({
        code: "IN-LD",
        name: "Lakshadweep",
        slug: "lakshadweep",
      }),
      Object.freeze<IProvince>({
        code: "IN-MH",
        name: "Maharashtra",
        slug: "maharashtra",
      }),
      Object.freeze<IProvince>({
        code: "IN-ML",
        name: "Meghalaya",
        slug: "meghalaya",
      }),
      Object.freeze<IProvince>({
        code: "IN-MN",
        name: "Manipur",
        slug: "manipur",
      }),
      Object.freeze<IProvince>({
        code: "IN-MP",
        name: "Madhya Pradesh",
        slug: "madhya-pradesh",
      }),
      Object.freeze<IProvince>({
        code: "IN-MZ",
        name: "Mizoram",
        slug: "mizoram",
      }),
      Object.freeze<IProvince>({
        code: "IN-NL",
        name: "Nagaland",
        slug: "nagaland",
      }),
      Object.freeze<IProvince>({
        code: "IN-OR",
        name: "Odisha",
        slug: "odisha",
      }),
      Object.freeze<IProvince>({
        code: "IN-PB",
        name: "Punjab",
        slug: "punjab",
      }),
      Object.freeze<IProvince>({
        code: "IN-PY",
        name: "Puducherry",
        slug: "puducherry",
      }),
      Object.freeze<IProvince>({
        code: "IN-RJ",
        name: "Rajasthan",
        slug: "rajasthan",
      }),
      Object.freeze<IProvince>({
        code: "IN-SK",
        name: "Sikkim",
        slug: "sikkim",
      }),
      Object.freeze<IProvince>({
        code: "IN-TG",
        name: "Telangana",
        slug: "telangana",
      }),
      Object.freeze<IProvince>({
        code: "IN-TN",
        name: "Tamil Nadu",
        slug: "tamil-nadu",
      }),
      Object.freeze<IProvince>({
        code: "IN-TR",
        name: "Tripura",
        slug: "tripura",
      }),
      Object.freeze<IProvince>({
        code: "IN-UP",
        name: "Uttar Pradesh",
        slug: "uttar-pradesh",
      }),
      Object.freeze<IProvince>({
        code: "IN-UT",
        name: "Uttarakhand",
        slug: "uttarakhand",
      }),
      Object.freeze<IProvince>({
        code: "IN-WB",
        name: "West Bengal",
        slug: "west-bengal",
      }),
    ],
  }),
  ID: Object.freeze<ICountry>({
    code: "ID",
    currency: CURRENCIES.IDR,
    name: "Indonesia",
    nameWithArticle: "Indonesia",
    provinces: [
      Object.freeze<IProvince>({
        code: "ID-AC",
        name: "Aceh",
        slug: "aceh",
      }),
      Object.freeze<IProvince>({
        code: "ID-BA",
        name: "Bali",
        slug: "bali",
      }),
      Object.freeze<IProvince>({
        code: "ID-BB",
        name: "Bangka Belitung",
        slug: "bangka-belitung",
      }),
      Object.freeze<IProvince>({
        code: "ID-BE",
        name: "Bengkulu",
        slug: "bengkulu",
      }),
      Object.freeze<IProvince>({
        code: "ID-BT",
        name: "Banten",
        slug: "banten",
      }),
      Object.freeze<IProvince>({
        code: "ID-GO",
        name: "Gorontalo",
        slug: "gorontalo",
      }),
      Object.freeze<IProvince>({
        code: "ID-JA",
        name: "Jambi",
        slug: "jambi",
      }),
      Object.freeze<IProvince>({
        code: "ID-JB",
        name: "Jawa Barat",
        slug: "jawa-barat",
      }),
      Object.freeze<IProvince>({
        code: "ID-JI",
        name: "Jawa Timur",
        slug: "jawa-timur",
      }),
      Object.freeze<IProvince>({
        code: "ID-JK",
        name: "Jakarta Raya",
        slug: "jakarta-raya",
      }),
      Object.freeze<IProvince>({
        code: "ID-JT",
        name: "Jawa Tengah",
        slug: "jawa-tengah",
      }),
      Object.freeze<IProvince>({
        code: "ID-KB",
        name: "Kalimantan Barat",
        slug: "kalimantan-barat",
      }),
      Object.freeze<IProvince>({
        code: "ID-KI",
        name: "Kalimantan Timur",
        slug: "kalimantan-timur",
      }),
      Object.freeze<IProvince>({
        code: "ID-KR",
        name: "Kepulauan Riau",
        slug: "kepulauan-riau",
      }),
      Object.freeze<IProvince>({
        code: "ID-KS",
        name: "Kalimantan Selatan",
        slug: "kalimantan-selatan",
      }),
      Object.freeze<IProvince>({
        code: "ID-KT",
        name: "Kalimantan Tengah",
        slug: "kalimantan-tengah",
      }),
      Object.freeze<IProvince>({
        code: "ID-KU",
        name: "Kalimantan Utara",
        slug: "kalimantan-utara",
      }),
      Object.freeze<IProvince>({
        code: "ID-LA",
        name: "Lampung",
        slug: "lampung",
      }),
      Object.freeze<IProvince>({
        code: "ID-MA",
        name: "Maluku",
        slug: "maluku",
      }),
      Object.freeze<IProvince>({
        code: "ID-MU",
        name: "Maluku Utara",
        slug: "maluku-utara",
      }),
      Object.freeze<IProvince>({
        code: "ID-NB",
        name: "Nusa Tenggara Barat",
        slug: "nusa-tenggara-barat",
      }),
      Object.freeze<IProvince>({
        code: "ID-NT",
        name: "Nusa Tenggara Timur",
        slug: "nusa-tenggara-timur",
      }),
      Object.freeze<IProvince>({
        code: "ID-PA",
        name: "Papua",
        slug: "papua",
      }),
      Object.freeze<IProvince>({
        code: "ID-PB",
        name: "Papua Barat",
        slug: "papua-barat",
      }),
      Object.freeze<IProvince>({
        code: "ID-RI",
        name: "Riau",
        slug: "riau",
      }),
      Object.freeze<IProvince>({
        code: "ID-SA",
        name: "Sulawesi Utara",
        slug: "sulawesi-utara",
      }),
      Object.freeze<IProvince>({
        code: "ID-SB",
        name: "Sumatera Barat",
        slug: "sumatera-barat",
      }),
      Object.freeze<IProvince>({
        code: "ID-SG",
        name: "Sulawesi Tenggara",
        slug: "sulawesi-tenggara",
      }),
      Object.freeze<IProvince>({
        code: "ID-SN",
        name: "Sulawesi Selatan",
        slug: "sulawesi-selatan",
      }),
      Object.freeze<IProvince>({
        code: "ID-SR",
        name: "Sulawesi Barat",
        slug: "sulawesi-barat",
      }),
      Object.freeze<IProvince>({
        code: "ID-SS",
        name: "Sumatera Selatan",
        slug: "sumatera-selatan",
      }),
      Object.freeze<IProvince>({
        code: "ID-ST",
        name: "Sulawesi Tengah",
        slug: "sulawesi-tengah",
      }),
      Object.freeze<IProvince>({
        code: "ID-SU",
        name: "Sumatera Utara",
        slug: "sumatera-utara",
      }),
    ],
  }),
  IR: Object.freeze<ICountry>({
    code: "IR",
    currency: CURRENCIES.IRR,
    name: "Iran",
    nameWithArticle: "Iran",
    provinces: [
      Object.freeze<IProvince>({
        code: "IR-01",
        name: "\u0100z\u0304arb\u0101yj\u0101n-e Sharq\u012b",
        slug: "azarbayjan-e-sharqi",
      }),
      Object.freeze<IProvince>({
        code: "IR-02",
        name: "\u0100z\u0304arb\u0101yj\u0101n-e Gharb\u012b",
        slug: "azarbayjan-e-gharbi",
      }),
      Object.freeze<IProvince>({
        code: "IR-03",
        name: "Ardab\u012bl",
        slug: "ardabil",
      }),
      Object.freeze<IProvince>({
        code: "IR-04",
        name: "E\u015ffah\u0101n",
        slug: "esfahan",
      }),
      Object.freeze<IProvince>({
        code: "IR-05",
        name: "\u012al\u0101m",
        slug: "ilam",
      }),
      Object.freeze<IProvince>({
        code: "IR-06",
        name: "B\u016bshehr",
        slug: "bushehr",
      }),
      Object.freeze<IProvince>({
        code: "IR-07",
        name: "Tehr\u0101n",
        slug: "tehran",
      }),
      Object.freeze<IProvince>({
        code: "IR-08",
        name: "Chah\u0101r Ma\u1e29\u0101ll va Bakht\u012b\u0101r\u012b",
        slug: "chahar-mahall-va-bakhtiari",
      }),
      Object.freeze<IProvince>({
        code: "IR-10",
        name: "Kh\u016bzest\u0101n",
        slug: "khuzestan",
      }),
      Object.freeze<IProvince>({
        code: "IR-11",
        name: "Zanj\u0101n",
        slug: "zanjan",
      }),
      Object.freeze<IProvince>({
        code: "IR-12",
        name: "Semn\u0101n",
        slug: "semnan",
      }),
      Object.freeze<IProvince>({
        code: "IR-13",
        name: "S\u012bst\u0101n va Bal\u016bchest\u0101n",
        slug: "sistan-va-baluchestan",
      }),
      Object.freeze<IProvince>({
        code: "IR-14",
        name: "F\u0101rs",
        slug: "fars",
      }),
      Object.freeze<IProvince>({
        code: "IR-15",
        name: "Kerm\u0101n",
        slug: "kerman",
      }),
      Object.freeze<IProvince>({
        code: "IR-16",
        name: "Kordest\u0101n",
        slug: "kordestan",
      }),
      Object.freeze<IProvince>({
        code: "IR-17",
        name: "Kerm\u0101nsh\u0101h",
        slug: "kermanshah",
      }),
      Object.freeze<IProvince>({
        code: "IR-18",
        name: "Kohg\u012bl\u016byeh va B\u016byer A\u1e29mad",
        slug: "kohgiluyeh-va-buyer-ahmad",
      }),
      Object.freeze<IProvince>({
        code: "IR-19",
        name: "G\u012bl\u0101n",
        slug: "gilan",
      }),
      Object.freeze<IProvince>({
        code: "IR-20",
        name: "Lorest\u0101n",
        slug: "lorestan",
      }),
      Object.freeze<IProvince>({
        code: "IR-21",
        name: "M\u0101zandar\u0101n",
        slug: "mazandaran",
      }),
      Object.freeze<IProvince>({
        code: "IR-22",
        name: "Markaz\u012b",
        slug: "markazi",
      }),
      Object.freeze<IProvince>({
        code: "IR-23",
        name: "Hormozg\u0101n",
        slug: "hormozgan",
      }),
      Object.freeze<IProvince>({
        code: "IR-24",
        name: "Hamad\u0101n",
        slug: "hamadan",
      }),
      Object.freeze<IProvince>({
        code: "IR-25",
        name: "Yazd",
        slug: "yazd",
      }),
      Object.freeze<IProvince>({
        code: "IR-26",
        name: "Qom",
        slug: "qom",
      }),
      Object.freeze<IProvince>({
        code: "IR-27",
        name: "Golest\u0101n",
        slug: "golestan",
      }),
      Object.freeze<IProvince>({
        code: "IR-28",
        name: "Qazv\u012bn",
        slug: "qazvin",
      }),
      Object.freeze<IProvince>({
        code: "IR-29",
        name: "Khor\u0101s\u0101n-e Jan\u016bb\u012b",
        slug: "khorasan-e-janubi",
      }),
      Object.freeze<IProvince>({
        code: "IR-30",
        name: "Khor\u0101s\u0101n-e Razav\u012b",
        slug: "khorasan-e-razavi",
      }),
      Object.freeze<IProvince>({
        code: "IR-31",
        name: "Khor\u0101s\u0101n-e Shem\u0101l\u012b",
        slug: "khorasan-e-shemali",
      }),
      Object.freeze<IProvince>({
        code: "IR-32",
        name: "Alborz",
        slug: "alborz",
      }),
    ],
  }),
  IQ: Object.freeze<ICountry>({
    code: "IQ",
    currency: CURRENCIES.IQD,
    name: "Iraq",
    nameWithArticle: "Iraq",
    provinces: [
      Object.freeze<IProvince>({
        code: "IQ-AN",
        name: "Al Anb\u0101r",
        slug: "al-anbar",
      }),
      Object.freeze<IProvince>({
        code: "IQ-AR",
        name: "Arb\u012bl",
        slug: "arbil",
      }),
      Object.freeze<IProvince>({
        code: "IQ-BA",
        name: "Al Ba\u015frah",
        slug: "al-basrah",
      }),
      Object.freeze<IProvince>({
        code: "IQ-BB",
        name: "B\u0101bil",
        slug: "babil",
      }),
      Object.freeze<IProvince>({
        code: "IQ-BG",
        name: "Baghd\u0101d",
        slug: "baghdad",
      }),
      Object.freeze<IProvince>({
        code: "IQ-DA",
        name: "Dah\u016bk",
        slug: "dahuk",
      }),
      Object.freeze<IProvince>({
        code: "IQ-DI",
        name: "Diy\u0101l\u00e1",
        slug: "diyala",
      }),
      Object.freeze<IProvince>({
        code: "IQ-DQ",
        name: "Dh\u012b Q\u0101r",
        slug: "dhi-qar",
      }),
      Object.freeze<IProvince>({
        code: "IQ-KA",
        name: "Karbal\u0101'",
        slug: "karbala",
      }),
      Object.freeze<IProvince>({
        code: "IQ-KI",
        name: "Kirk\u016bk",
        slug: "kirkuk",
      }),
      Object.freeze<IProvince>({
        code: "IQ-MA",
        name: "Mays\u0101n",
        slug: "maysan",
      }),
      Object.freeze<IProvince>({
        code: "IQ-MU",
        name: "Al Muthann\u00e1",
        slug: "al-muthanna",
      }),
      Object.freeze<IProvince>({
        code: "IQ-NA",
        name: "An Najaf",
        slug: "an-najaf",
      }),
      Object.freeze<IProvince>({
        code: "IQ-NI",
        name: "N\u012bnaw\u00e1",
        slug: "ninawa",
      }),
      Object.freeze<IProvince>({
        code: "IQ-QA",
        name: "Al Q\u0101dis\u012byah",
        slug: "al-qadisiyah",
      }),
      Object.freeze<IProvince>({
        code: "IQ-SD",
        name: "\u015eal\u0101\u1e29 ad D\u012bn",
        slug: "salah-ad-din",
      }),
      Object.freeze<IProvince>({
        code: "IQ-SU",
        name: "As Sulaym\u0101n\u012byah",
        slug: "as-sulaymaniyah",
      }),
      Object.freeze<IProvince>({
        code: "IQ-WA",
        name: "W\u0101si\u0163",
        slug: "wasit",
      }),
    ],
  }),
  IE: Object.freeze<ICountry>({
    code: "IE",
    currency: CURRENCIES.EUR,
    name: "Ireland",
    nameWithArticle: "Ireland",
    provinces: [
      Object.freeze<IProvince>({
        code: "IE-CE",
        name: "Clare",
        slug: "clare",
      }),
      Object.freeze<IProvince>({
        code: "IE-CN",
        name: "Cavan",
        slug: "cavan",
      }),
      Object.freeze<IProvince>({
        code: "IE-CO",
        name: "Cork",
        slug: "cork",
      }),
      Object.freeze<IProvince>({
        code: "IE-CW",
        name: "Carlow",
        slug: "carlow",
      }),
      Object.freeze<IProvince>({
        code: "IE-D",
        name: "Dublin",
        slug: "dublin",
      }),
      Object.freeze<IProvince>({
        code: "IE-DL",
        name: "Donegal",
        slug: "donegal",
      }),
      Object.freeze<IProvince>({
        code: "IE-G",
        name: "galway",
        slug: "Galway",
      }),
      Object.freeze<IProvince>({
        code: "IE-KE",
        name: "Kildare",
        slug: "kildare",
      }),
      Object.freeze<IProvince>({
        code: "IE-KK",
        name: "Kilkenny",
        slug: "kilkenny",
      }),
      Object.freeze<IProvince>({
        code: "IE-KY",
        name: "Kerry",
        slug: "kerry",
      }),
      Object.freeze<IProvince>({
        code: "IE-LD",
        name: "Longford",
        slug: "longford",
      }),
      Object.freeze<IProvince>({
        code: "IE-LH",
        name: "Louth",
        slug: "louth",
      }),
      Object.freeze<IProvince>({
        code: "IE-LK",
        name: "Limerick",
        slug: "limerick",
      }),
      Object.freeze<IProvince>({
        code: "IE-LM",
        name: "Leitrim",
        slug: "leitrim",
      }),
      Object.freeze<IProvince>({
        code: "IE-LS",
        name: "Laois",
        slug: "laois",
      }),
      Object.freeze<IProvince>({
        code: "IE-MH",
        name: "Meath",
        slug: "meath",
      }),
      Object.freeze<IProvince>({
        code: "IE-MN",
        name: "Monaghan",
        slug: "monaghan",
      }),
      Object.freeze<IProvince>({
        code: "IE-MO",
        name: "Mayo",
        slug: "mayo",
      }),
      Object.freeze<IProvince>({
        code: "IE-OY",
        name: "Offaly",
        slug: "offaly",
      }),
      Object.freeze<IProvince>({
        code: "IE-RN",
        name: "Roscommon",
        slug: "roscommon",
      }),
      Object.freeze<IProvince>({
        code: "IE-SO",
        name: "Sligo",
        slug: "sligo",
      }),
      Object.freeze<IProvince>({
        code: "IE-TA",
        name: "Tipperary",
        slug: "tipperary",
      }),
      Object.freeze<IProvince>({
        code: "IE-WD",
        name: "Waterford",
        slug: "waterford",
      }),
      Object.freeze<IProvince>({
        code: "IE-WH",
        name: "Westmeath",
        slug: "westmeath",
      }),
      Object.freeze<IProvince>({
        code: "IE-WW",
        name: "Wicklow",
        slug: "wicklow",
      }),
      Object.freeze<IProvince>({
        code: "IE-WX",
        name: "Wexford",
        slug: "wexford",
      }),
    ],
  }),
  IM: Object.freeze<ICountry>({
    code: "IM",
    currency: CURRENCIES.GBP,
    name: "Isle of Man",
    nameWithArticle: "Isle of Man",
    provinces: [],
  }),
  IL: Object.freeze<ICountry>({
    code: "IL",
    currency: CURRENCIES.ILS,
    name: "Israel",
    nameWithArticle: "Israel",
    provinces: [
      Object.freeze<IProvince>({
        code: "IL-D",
        name: "Southern District",
        slug: "southern-district",
      }),
      Object.freeze<IProvince>({
        code: "IL-HA",
        name: "Haifa",
        slug: "haifa",
      }),
      Object.freeze<IProvince>({
        code: "IL-JM",
        name: "Jerusalem",
        slug: "jerusalem",
      }),
      Object.freeze<IProvince>({
        code: "IL-M",
        name: "Central District",
        slug: "central-district",
      }),
      Object.freeze<IProvince>({
        code: "IL-TA",
        name: "Tel Aviv",
        slug: "tel-aviv",
      }),
      Object.freeze<IProvince>({
        code: "IL-Z",
        name: "Northern District",
        slug: "northern-district",
      }),
    ],
  }),
  IT: Object.freeze<ICountry>({
    code: "IT",
    currency: CURRENCIES.EUR,
    name: "Italy",
    nameWithArticle: "Italy",
    provinces: [
      Object.freeze<IProvince>({
        code: "IT-21",
        name: "Piemonte",
        slug: "piemonte",
      }),
      Object.freeze<IProvince>({
        code: "IT-23",
        name: "Val d'Aoste",
        slug: "val-daoste",
      }),
      Object.freeze<IProvince>({
        code: "IT-25",
        name: "Lombardia",
        slug: "lombardia",
      }),
      Object.freeze<IProvince>({
        code: "IT-32",
        name: "Trentino-Alto Adige",
        slug: "trentino-alto-adige",
      }),
      Object.freeze<IProvince>({
        code: "IT-34",
        name: "Veneto",
        slug: "veneto",
      }),
      Object.freeze<IProvince>({
        code: "IT-36",
        name: "Friuli-Venezia Giulia",
        slug: "friuli-venezia-giulia",
      }),
      Object.freeze<IProvince>({
        code: "IT-42",
        name: "Liguria",
        slug: "liguria",
      }),
      Object.freeze<IProvince>({
        code: "IT-45",
        name: "Emilia-Romagna",
        slug: "emilia-romagna",
      }),
      Object.freeze<IProvince>({
        code: "IT-52",
        name: "Toscana",
        slug: "toscana",
      }),
      Object.freeze<IProvince>({
        code: "IT-55",
        name: "Umbria",
        slug: "umbria",
      }),
      Object.freeze<IProvince>({
        code: "IT-57",
        name: "Marche",
        slug: "marche",
      }),
      Object.freeze<IProvince>({
        code: "IT-62",
        name: "Lazio",
        slug: "lazio",
      }),
      Object.freeze<IProvince>({
        code: "IT-65",
        name: "Abruzzo",
        slug: "abruzzo",
      }),
      Object.freeze<IProvince>({
        code: "IT-67",
        name: "Molise",
        slug: "molise",
      }),
      Object.freeze<IProvince>({
        code: "IT-72",
        name: "Campania",
        slug: "campania",
      }),
      Object.freeze<IProvince>({
        code: "IT-75",
        name: "Puglia",
        slug: "puglia",
      }),
      Object.freeze<IProvince>({
        code: "IT-77",
        name: "Basilicata",
        slug: "basilicata",
      }),
      Object.freeze<IProvince>({
        code: "IT-78",
        name: "Calabria",
        slug: "calabria",
      }),
      Object.freeze<IProvince>({
        code: "IT-82",
        name: "Sicilia",
        slug: "sicilia",
      }),
      Object.freeze<IProvince>({
        code: "IT-88",
        name: "Sardegna",
        slug: "sardegna",
      }),
    ],
  }),
  JM: Object.freeze<ICountry>({
    code: "JM",
    currency: CURRENCIES.JMD,
    name: "Jamaica",
    nameWithArticle: "Jamaica",
    provinces: [
      Object.freeze<IProvince>({
        code: "JM-01",
        name: "Kingston",
        slug: "kingston",
      }),
      Object.freeze<IProvince>({
        code: "JM-02",
        name: "Saint Andrew",
        slug: "saint-andrew",
      }),
      Object.freeze<IProvince>({
        code: "JM-03",
        name: "Saint Thomas",
        slug: "saint-thomas",
      }),
      Object.freeze<IProvince>({
        code: "JM-04",
        name: "Portland",
        slug: "portland",
      }),
      Object.freeze<IProvince>({
        code: "JM-05",
        name: "Saint Mary",
        slug: "saint-mary",
      }),
      Object.freeze<IProvince>({
        code: "JM-06",
        name: "Saint Ann",
        slug: "saint-ann",
      }),
      Object.freeze<IProvince>({
        code: "JM-07",
        name: "Trelawny",
        slug: "trelawny",
      }),
      Object.freeze<IProvince>({
        code: "JM-08",
        name: "Saint James",
        slug: "saint-james",
      }),
      Object.freeze<IProvince>({
        code: "JM-09",
        name: "Hanover",
        slug: "hanover",
      }),
      Object.freeze<IProvince>({
        code: "JM-10",
        name: "Westmoreland",
        slug: "westmoreland",
      }),
      Object.freeze<IProvince>({
        code: "JM-11",
        name: "Saint Elizabeth",
        slug: "saint-elizabeth",
      }),
      Object.freeze<IProvince>({
        code: "JM-12",
        name: "Manchester",
        slug: "manchester",
      }),
      Object.freeze<IProvince>({
        code: "JM-13",
        name: "Clarendon",
        slug: "clarendon",
      }),
      Object.freeze<IProvince>({
        code: "JM-14",
        name: "Saint Catherine",
        slug: "saint-catherine",
      }),
    ],
  }),
  JP: Object.freeze<ICountry>({
    code: "JP",
    currency: CURRENCIES.JPY,
    name: "Japan",
    nameWithArticle: "Japan",
    provinces: [
      Object.freeze<IProvince>({
        code: "JP-01",
        name: "Hokkaido",
        slug: "hokkaido",
      }),
      Object.freeze<IProvince>({
        code: "JP-02",
        name: "Aomori",
        slug: "aomori",
      }),
      Object.freeze<IProvince>({
        code: "JP-03",
        name: "Iwate",
        slug: "iwate",
      }),
      Object.freeze<IProvince>({
        code: "JP-04",
        name: "Miyagi",
        slug: "miyagi",
      }),
      Object.freeze<IProvince>({
        code: "JP-05",
        name: "Akita",
        slug: "akita",
      }),
      Object.freeze<IProvince>({
        code: "JP-06",
        name: "Yamagata",
        slug: "yamagata",
      }),
      Object.freeze<IProvince>({
        code: "JP-07",
        name: "Fukushima",
        slug: "fukushima",
      }),
      Object.freeze<IProvince>({
        code: "JP-08",
        name: "Ibaraki",
        slug: "ibaraki",
      }),
      Object.freeze<IProvince>({
        code: "JP-09",
        name: "Tochigi",
        slug: "tochigi",
      }),
      Object.freeze<IProvince>({
        code: "JP-10",
        name: "Gunma",
        slug: "gunma",
      }),
      Object.freeze<IProvince>({
        code: "JP-11",
        name: "Saitama",
        slug: "saitama",
      }),
      Object.freeze<IProvince>({
        code: "JP-12",
        name: "Chiba",
        slug: "chiba",
      }),
      Object.freeze<IProvince>({
        code: "JP-13",
        name: "T\u00f4ky\u00f4",
        slug: "tokyo",
      }),
      Object.freeze<IProvince>({
        code: "JP-14",
        name: "Kanagawa",
        slug: "kanagawa",
      }),
      Object.freeze<IProvince>({
        code: "JP-15",
        name: "Niigata",
        slug: "niigata",
      }),
      Object.freeze<IProvince>({
        code: "JP-16",
        name: "Toyama",
        slug: "toyama",
      }),
      Object.freeze<IProvince>({
        code: "JP-17",
        name: "Ishikawa",
        slug: "ishikawa",
      }),
      Object.freeze<IProvince>({
        code: "JP-18",
        name: "Fukui",
        slug: "fukui",
      }),
      Object.freeze<IProvince>({
        code: "JP-19",
        name: "Yamanashi",
        slug: "yamanashi",
      }),
      Object.freeze<IProvince>({
        code: "JP-20",
        name: "Nagano",
        slug: "nagano",
      }),
      Object.freeze<IProvince>({
        code: "JP-21",
        name: "Gifu",
        slug: "gifu",
      }),
      Object.freeze<IProvince>({
        code: "JP-22",
        name: "Shizuoka",
        slug: "shizuoka",
      }),
      Object.freeze<IProvince>({
        code: "JP-23",
        name: "Aichi",
        slug: "aichi",
      }),
      Object.freeze<IProvince>({
        code: "JP-24",
        name: "Mie",
        slug: "mie",
      }),
      Object.freeze<IProvince>({
        code: "JP-25",
        name: "Shiga",
        slug: "shiga",
      }),
      Object.freeze<IProvince>({
        code: "JP-26",
        name: "Kyoto",
        slug: "kyoto",
      }),
      Object.freeze<IProvince>({
        code: "JP-27",
        name: "Osaka",
        slug: "osaka",
      }),
      Object.freeze<IProvince>({
        code: "JP-28",
        name: "Hyogo",
        slug: "hyogo",
      }),
      Object.freeze<IProvince>({
        code: "JP-29",
        name: "Nara",
        slug: "nara",
      }),
      Object.freeze<IProvince>({
        code: "JP-30",
        name: "Wakayama",
        slug: "wakayama",
      }),
      Object.freeze<IProvince>({
        code: "JP-31",
        name: "Tottori",
        slug: "tottori",
      }),
      Object.freeze<IProvince>({
        code: "JP-32",
        name: "Shimane",
        slug: "shimane",
      }),
      Object.freeze<IProvince>({
        code: "JP-33",
        name: "Okayama",
        slug: "okayama",
      }),
      Object.freeze<IProvince>({
        code: "JP-34",
        name: "Hiroshima",
        slug: "hiroshima",
      }),
      Object.freeze<IProvince>({
        code: "JP-35",
        name: "Yamaguchi",
        slug: "yamaguchi",
      }),
      Object.freeze<IProvince>({
        code: "JP-36",
        name: "Tokushima",
        slug: "tokushima",
      }),
      Object.freeze<IProvince>({
        code: "JP-37",
        name: "Kagawa",
        slug: "kagawa",
      }),
      Object.freeze<IProvince>({
        code: "JP-38",
        name: "Ehime",
        slug: "ehime",
      }),
      Object.freeze<IProvince>({
        code: "JP-39",
        name: "Kochi",
        slug: "kochi",
      }),
      Object.freeze<IProvince>({
        code: "JP-40",
        name: "Fukuoka",
        slug: "fukuoka",
      }),
      Object.freeze<IProvince>({
        code: "JP-41",
        name: "Saga",
        slug: "saga",
      }),
      Object.freeze<IProvince>({
        code: "JP-42",
        name: "Nagasaki",
        slug: "nagasaki",
      }),
      Object.freeze<IProvince>({
        code: "JP-43",
        name: "Kumamoto",
        slug: "kumamoto",
      }),
      Object.freeze<IProvince>({
        code: "JP-44",
        name: "Oita",
        slug: "oita",
      }),
      Object.freeze<IProvince>({
        code: "JP-45",
        name: "Miyazaki",
        slug: "miyazaki",
      }),
      Object.freeze<IProvince>({
        code: "JP-46",
        name: "Kagoshima",
        slug: "kagoshima",
      }),
      Object.freeze<IProvince>({
        code: "JP-47",
        name: "Okinawa",
        slug: "okinawa",
      }),
    ],
  }),
  JE: Object.freeze<ICountry>({
    code: "JE",
    currency: CURRENCIES.GBP,
    name: "Jersey",
    nameWithArticle: "Jersey",
    provinces: [],
  }),
  JO: Object.freeze<ICountry>({
    code: "JO",
    currency: CURRENCIES.JOD,
    name: "Jordan",
    nameWithArticle: "Jordan",
    provinces: [
      Object.freeze<IProvince>({
        code: "JO-AJ",
        name: "\u02bdAjl\u016bn",
        slug: "ajlun",
      }),
      Object.freeze<IProvince>({
        code: "JO-AM",
        name: "\u2018Amm\u0101n",
        slug: "amman",
      }),
      Object.freeze<IProvince>({
        code: "JO-AQ",
        name: "Al \u02bdAqabah",
        slug: "al-aqabah",
      }),
      Object.freeze<IProvince>({
        code: "JO-AT",
        name: "A\u0163 \u0162af\u012blah",
        slug: "at-tafilah",
      }),
      Object.freeze<IProvince>({
        code: "JO-AZ",
        name: "Az Zarq\u0101'",
        slug: "az-zarqa",
      }),
      Object.freeze<IProvince>({
        code: "JO-BA",
        name: "Al Balq\u0101'",
        slug: "al-balqa",
      }),
      Object.freeze<IProvince>({
        code: "JO-IR",
        name: "Irbid",
        slug: "irbid",
      }),
      Object.freeze<IProvince>({
        code: "JO-JA",
        name: "Jarash",
        slug: "jarash",
      }),
      Object.freeze<IProvince>({
        code: "JO-KA",
        name: "Al Karak",
        slug: "al-karak",
      }),
      Object.freeze<IProvince>({
        code: "JO-MA",
        name: "Al Mafraq",
        slug: "al-mafraq",
      }),
      Object.freeze<IProvince>({
        code: "JO-MD",
        name: "M\u0101dab\u0101",
        slug: "madaba",
      }),
      Object.freeze<IProvince>({
        code: "JO-MN",
        name: "Ma'\u0101n",
        slug: "maan",
      }),
    ],
  }),
  KZ: Object.freeze<ICountry>({
    code: "KZ",
    currency: CURRENCIES.KZT,
    name: "Kazakhstan",
    nameWithArticle: "Kazakhstan",
    provinces: [
      Object.freeze<IProvince>({
        code: "KZ-AKM",
        name: "Akmolinskaja oblast'",
        slug: "akmolinskaja-oblast",
      }),
      Object.freeze<IProvince>({
        code: "KZ-AKT",
        name: "Aktjubinskaja oblast'",
        slug: "aktjubinskaja-oblast",
      }),
      Object.freeze<IProvince>({
        code: "KZ-ALA",
        name: "Almaty",
        slug: "almaty",
      }),
      Object.freeze<IProvince>({
        code: "KZ-ALM",
        name: "Almatinskaja oblast'",
        slug: "almatinskaja-oblast",
      }),
      Object.freeze<IProvince>({
        code: "KZ-AST",
        name: "Astana",
        slug: "astana",
      }),
      Object.freeze<IProvince>({
        code: "KZ-ATY",
        name: "Atyra\u016b oblysy",
        slug: "atyrau-oblysy",
      }),
      Object.freeze<IProvince>({
        code: "KZ-KAR",
        name: "Karagandinskaja oblast'",
        slug: "karagandinskaja-oblast",
      }),
      Object.freeze<IProvince>({
        code: "KZ-KUS",
        name: "Kostanajskaja oblast'",
        slug: "kostanajskaja-oblast",
      }),
      Object.freeze<IProvince>({
        code: "KZ-KZY",
        name: "Kyzylordinskaja oblast'",
        slug: "kyzylordinskaja-oblast",
      }),
      Object.freeze<IProvince>({
        code: "KZ-MAN",
        name: "Mangghysta\u016b oblysy",
        slug: "mangghystau-oblysy",
      }),
      Object.freeze<IProvince>({
        code: "KZ-PAV",
        name: "Pavlodar oblysy",
        slug: "pavlodar-oblysy",
      }),
      Object.freeze<IProvince>({
        code: "KZ-SEV",
        name: "Severo-Kazahstanskaja oblast'",
        slug: "severo-kazahstanskaja-oblast",
      }),
      Object.freeze<IProvince>({
        code: "KZ-VOS",
        name: "Shyghys Qazaqstan oblysy",
        slug: "shyghys-qazaqstan-oblysy",
      }),
      Object.freeze<IProvince>({
        code: "KZ-YUZ",
        name: "Ju\u017eno-Kazahstanskaja oblast'",
        slug: "juzno-kazahstanskaja-oblast",
      }),
      Object.freeze<IProvince>({
        code: "KZ-ZAP",
        name: "Batys Qazaqstan oblysy",
        slug: "batys-qazaqstan-oblysy",
      }),
      Object.freeze<IProvince>({
        code: "KZ-ZHA",
        name: "\u017dambylskaja oblast'",
        slug: "zambylskaja-oblast",
      }),
    ],
  }),
  KE: Object.freeze<ICountry>({
    code: "KE",
    currency: CURRENCIES.KES,
    name: "Kenya",
    nameWithArticle: "Kenya",
    provinces: [
      Object.freeze<IProvince>({
        code: "KE-01",
        name: "Baringo",
        slug: "baringo",
      }),
      Object.freeze<IProvince>({
        code: "KE-02",
        name: "Bomet",
        slug: "bomet",
      }),
      Object.freeze<IProvince>({
        code: "KE-03",
        name: "Bungoma",
        slug: "bungoma",
      }),
      Object.freeze<IProvince>({
        code: "KE-04",
        name: "Busia",
        slug: "busia",
      }),
      Object.freeze<IProvince>({
        code: "KE-05",
        name: "Elgeyo/Marakwet",
        slug: "elgeyomarakwet",
      }),
      Object.freeze<IProvince>({
        code: "KE-06",
        name: "Embu",
        slug: "embu",
      }),
      Object.freeze<IProvince>({
        code: "KE-07",
        name: "Garissa",
        slug: "garissa",
      }),
      Object.freeze<IProvince>({
        code: "KE-08",
        name: "Homa Bay",
        slug: "homa-bay",
      }),
      Object.freeze<IProvince>({
        code: "KE-09",
        name: "Isiolo",
        slug: "isiolo",
      }),
      Object.freeze<IProvince>({
        code: "KE-10",
        name: "Kajiado",
        slug: "kajiado",
      }),
      Object.freeze<IProvince>({
        code: "KE-11",
        name: "Kakamega",
        slug: "kakamega",
      }),
      Object.freeze<IProvince>({
        code: "KE-12",
        name: "Kericho",
        slug: "kericho",
      }),
      Object.freeze<IProvince>({
        code: "KE-13",
        name: "Kiambu",
        slug: "kiambu",
      }),
      Object.freeze<IProvince>({
        code: "KE-14",
        name: "Kilifi",
        slug: "kilifi",
      }),
      Object.freeze<IProvince>({
        code: "KE-15",
        name: "Kirinyaga",
        slug: "kirinyaga",
      }),
      Object.freeze<IProvince>({
        code: "KE-16",
        name: "Kisii",
        slug: "kisii",
      }),
      Object.freeze<IProvince>({
        code: "KE-17",
        name: "Kisumu",
        slug: "kisumu",
      }),
      Object.freeze<IProvince>({
        code: "KE-18",
        name: "Kitui",
        slug: "kitui",
      }),
      Object.freeze<IProvince>({
        code: "KE-19",
        name: "Kwale",
        slug: "kwale",
      }),
      Object.freeze<IProvince>({
        code: "KE-20",
        name: "Laikipia",
        slug: "laikipia",
      }),
      Object.freeze<IProvince>({
        code: "KE-21",
        name: "Lamu",
        slug: "lamu",
      }),
      Object.freeze<IProvince>({
        code: "KE-22",
        name: "Machakos",
        slug: "machakos",
      }),
      Object.freeze<IProvince>({
        code: "KE-23",
        name: "Makueni",
        slug: "makueni",
      }),
      Object.freeze<IProvince>({
        code: "KE-24",
        name: "Mandera",
        slug: "mandera",
      }),
      Object.freeze<IProvince>({
        code: "KE-25",
        name: "Marsabit",
        slug: "marsabit",
      }),
      Object.freeze<IProvince>({
        code: "KE-26",
        name: "Meru",
        slug: "meru",
      }),
      Object.freeze<IProvince>({
        code: "KE-27",
        name: "Migori",
        slug: "migori",
      }),
      Object.freeze<IProvince>({
        code: "KE-28",
        name: "Mombasa",
        slug: "mombasa",
      }),
      Object.freeze<IProvince>({
        code: "KE-29",
        name: "Murang'a",
        slug: "muranga",
      }),
      Object.freeze<IProvince>({
        code: "KE-30",
        name: "Nairobi City",
        slug: "nairobi-city",
      }),
      Object.freeze<IProvince>({
        code: "KE-31",
        name: "Nakuru",
        slug: "nakuru",
      }),
      Object.freeze<IProvince>({
        code: "KE-32",
        name: "Nandi",
        slug: "nandi",
      }),
      Object.freeze<IProvince>({
        code: "KE-33",
        name: "Narok",
        slug: "narok",
      }),
      Object.freeze<IProvince>({
        code: "KE-34",
        name: "Nyamira",
        slug: "nyamira",
      }),
      Object.freeze<IProvince>({
        code: "KE-35",
        name: "Nyandarua",
        slug: "nyandarua",
      }),
      Object.freeze<IProvince>({
        code: "KE-36",
        name: "Nyeri",
        slug: "nyeri",
      }),
      Object.freeze<IProvince>({
        code: "KE-37",
        name: "Samburu",
        slug: "samburu",
      }),
      Object.freeze<IProvince>({
        code: "KE-38",
        name: "Siaya",
        slug: "siaya",
      }),
      Object.freeze<IProvince>({
        code: "KE-39",
        name: "Taita/Taveta",
        slug: "taitataveta",
      }),
      Object.freeze<IProvince>({
        code: "KE-40",
        name: "Tana River",
        slug: "tana-river",
      }),
      Object.freeze<IProvince>({
        code: "KE-41",
        name: "Tharaka-Nithi",
        slug: "tharaka-nithi",
      }),
      Object.freeze<IProvince>({
        code: "KE-42",
        name: "Trans Nzoia",
        slug: "trans-nzoia",
      }),
      Object.freeze<IProvince>({
        code: "KE-43",
        name: "Turkana",
        slug: "turkana",
      }),
      Object.freeze<IProvince>({
        code: "KE-44",
        name: "Uasin Gishu",
        slug: "uasin-gishu",
      }),
      Object.freeze<IProvince>({
        code: "KE-45",
        name: "Vihiga",
        slug: "vihiga",
      }),
      Object.freeze<IProvince>({
        code: "KE-46",
        name: "Wajir",
        slug: "wajir",
      }),
      Object.freeze<IProvince>({
        code: "KE-47",
        name: "West Pokot",
        slug: "west-pokot",
      }),
    ],
  }),
  KI: Object.freeze<ICountry>({
    code: "KI",
    currency: CURRENCIES.AUD,
    name: "Kiribati",
    nameWithArticle: "Kiribati",
    provinces: [
      Object.freeze<IProvince>({
        code: "KI-G",
        name: "Gilbert Islands",
        slug: "gilbert-islands",
      }),
      Object.freeze<IProvince>({
        code: "KI-L",
        name: "Line Islands",
        slug: "line-islands",
      }),
      Object.freeze<IProvince>({
        code: "KI-P",
        name: "Phoenix Islands",
        slug: "phoenix-islands",
      }),
    ],
  }),
  KP: Object.freeze<ICountry>({
    code: "KP",
    currency: CURRENCIES.KRW,
    name: "Korea, Democratic People's Republic of",
    nameWithArticle: "Korea, Democratic People's Republic of",
    provinces: [
      Object.freeze<IProvince>({
        code: "KP-01",
        name: "P'y\u01d2ngyang",
        slug: "pyongyang",
      }),
      Object.freeze<IProvince>({
        code: "KP-02",
        name: "P'y\u01d2ngan-namdo",
        slug: "pyongan-namdo",
      }),
      Object.freeze<IProvince>({
        code: "KP-03",
        name: "P'y\u01d2ngan-bukto",
        slug: "pyongan-bukto",
      }),
      Object.freeze<IProvince>({
        code: "KP-04",
        name: "Chagang-do",
        slug: "chagang-do",
      }),
      Object.freeze<IProvince>({
        code: "KP-05",
        name: "Hwanghae-namdo",
        slug: "hwanghae-namdo",
      }),
      Object.freeze<IProvince>({
        code: "KP-06",
        name: "Hwanghae-bukto",
        slug: "hwanghae-bukto",
      }),
      Object.freeze<IProvince>({
        code: "KP-07",
        name: "Kangweonto",
        slug: "kangweonto",
      }),
      Object.freeze<IProvince>({
        code: "KP-08",
        name: "Hamgy\u01d2ng-namdo",
        slug: "hamgyong-namdo",
      }),
      Object.freeze<IProvince>({
        code: "KP-09",
        name: "Hamgy\u01d2ng-bukto",
        slug: "hamgyong-bukto",
      }),
      Object.freeze<IProvince>({
        code: "KP-10",
        name: "Ryangkangto",
        slug: "ryangkangto",
      }),
      Object.freeze<IProvince>({
        code: "KP-13",
        name: "Nas\u01d2n",
        slug: "nason",
      }),
    ],
  }),
  KR: Object.freeze<ICountry>({
    code: "KR",
    currency: CURRENCIES.KRW,
    name: "Korea, Republic of",
    nameWithArticle: "Korea, Republic of",
    provinces: [
      Object.freeze<IProvince>({
        code: "KR-11",
        name: "Seoul-T'\u01d4kpy\u01d2lshi",
        slug: "seoul-tukpyolshi",
      }),
      Object.freeze<IProvince>({
        code: "KR-26",
        name: "Busan Gwang'yeogsi",
        slug: "busan-gwangyeogsi",
      }),
      Object.freeze<IProvince>({
        code: "KR-27",
        name: "Daegu Gwang'yeogsi",
        slug: "daegu-gwangyeogsi",
      }),
      Object.freeze<IProvince>({
        code: "KR-28",
        name: "Inch'\u01d2n-Kwangy\u01d2kshi",
        slug: "inchon-kwangyokshi",
      }),
      Object.freeze<IProvince>({
        code: "KR-29",
        name: "Gwangju Gwang'yeogsi",
        slug: "gwangju-gwangyeogsi",
      }),
      Object.freeze<IProvince>({
        code: "KR-30",
        name: "Daejeon Gwang'yeogsi",
        slug: "daejeon-gwangyeogsi",
      }),
      Object.freeze<IProvince>({
        code: "KR-31",
        name: "Ulsan Gwang'yeogsi",
        slug: "ulsan-gwangyeogsi",
      }),
      Object.freeze<IProvince>({
        code: "KR-41",
        name: "Gyeonggido",
        slug: "gyeonggido",
      }),
      Object.freeze<IProvince>({
        code: "KR-42",
        name: "Gang'weondo",
        slug: "gangweondo",
      }),
      Object.freeze<IProvince>({
        code: "KR-43",
        name: "Ch'ungch'\u01d2ngbuk-do",
        slug: "chungchongbuk-do",
      }),
      Object.freeze<IProvince>({
        code: "KR-44",
        name: "Ch'ungch'\u01d2ngnam-do",
        slug: "chungchongnam-do",
      }),
      Object.freeze<IProvince>({
        code: "KR-45",
        name: "Ch\u01d2llabuk-do",
        slug: "chollabuk-do",
      }),
      Object.freeze<IProvince>({
        code: "KR-46",
        name: "Ch\u01d2llanam-do",
        slug: "chollanam-do",
      }),
      Object.freeze<IProvince>({
        code: "KR-47",
        name: "Gyeongsangbugdo",
        slug: "gyeongsangbugdo",
      }),
      Object.freeze<IProvince>({
        code: "KR-48",
        name: "Gyeongsangnamdo",
        slug: "gyeongsangnamdo",
      }),
      Object.freeze<IProvince>({
        code: "KR-49",
        name: "Cheju-do",
        slug: "cheju-do",
      }),
      Object.freeze<IProvince>({
        code: "KR-50",
        name: "Sejong",
        slug: "sejong",
      }),
    ],
  }),
  KW: Object.freeze<ICountry>({
    code: "KW",
    currency: CURRENCIES.KWD,
    name: "Kuwait",
    nameWithArticle: "Kuwait",
    provinces: [
      Object.freeze<IProvince>({
        code: "KW-AH",
        name: "Al A\u1e29mad\u012b",
        slug: "al-ahmadi",
      }),
      Object.freeze<IProvince>({
        code: "KW-FA",
        name: "Al Farw\u0101n\u012byah",
        slug: "al-farwaniyah",
      }),
      Object.freeze<IProvince>({
        code: "KW-HA",
        name: "\u1e28awall\u012b",
        slug: "hawalli",
      }),
      Object.freeze<IProvince>({
        code: "KW-JA",
        name: "Al Jahr\u0101\u2019",
        slug: "al-jahra",
      }),
      Object.freeze<IProvince>({
        code: "KW-KU",
        name: "Al Kuwayt",
        slug: "al-kuwayt",
      }),
      Object.freeze<IProvince>({
        code: "KW-MU",
        name: "Mub\u0101rak al Kab\u012br",
        slug: "mubarak-al-kabir",
      }),
    ],
  }),
  KG: Object.freeze<ICountry>({
    code: "KG",
    currency: CURRENCIES.KGS,
    name: "Kyrgyzstan",
    nameWithArticle: "Kyrgyzstan",
    provinces: [
      Object.freeze<IProvince>({
        code: "KG-B",
        name: "Batken",
        slug: "batken",
      }),
      Object.freeze<IProvince>({
        code: "KG-C",
        name: "Ch\u00fc",
        slug: "chu",
      }),
      Object.freeze<IProvince>({
        code: "KG-GB",
        name: "Bishkek",
        slug: "bishkek",
      }),
      Object.freeze<IProvince>({
        code: "KG-GO",
        name: "Gorod O\u0161",
        slug: "gorod-os",
      }),
      Object.freeze<IProvince>({
        code: "KG-J",
        name: "D\u017ealal-Abadskaja oblast'",
        slug: "dzalal-abadskaja-oblast",
      }),
      Object.freeze<IProvince>({
        code: "KG-N",
        name: "Naryn",
        slug: "naryn",
      }),
      Object.freeze<IProvince>({
        code: "KG-O",
        name: "Osh",
        slug: "osh",
      }),
      Object.freeze<IProvince>({
        code: "KG-T",
        name: "Talas",
        slug: "talas",
      }),
      Object.freeze<IProvince>({
        code: "KG-Y",
        name: "Issyk-Kul'skaja oblast'",
        slug: "issyk-kulskaja-oblast",
      }),
    ],
  }),
  LA: Object.freeze<ICountry>({
    code: "LA",
    currency: CURRENCIES.LAK,
    name: "Lao People's Democratic Republic",
    nameWithArticle: "The Lao People's Democratic Republic",
    provinces: [
      Object.freeze<IProvince>({
        code: "LA-AT",
        name: "Attapu",
        slug: "attapu",
      }),
      Object.freeze<IProvince>({
        code: "LA-BK",
        name: "Bok\u00e8o",
        slug: "bokeo",
      }),
      Object.freeze<IProvince>({
        code: "LA-BL",
        name: "Bolikhamxai",
        slug: "bolikhamxai",
      }),
      Object.freeze<IProvince>({
        code: "LA-CH",
        name: "Champasak",
        slug: "champasak",
      }),
      Object.freeze<IProvince>({
        code: "LA-HO",
        name: "Houaphan",
        slug: "houaphan",
      }),
      Object.freeze<IProvince>({
        code: "LA-KH",
        name: "Khammouan",
        slug: "khammouan",
      }),
      Object.freeze<IProvince>({
        code: "LA-LM",
        name: "Louang Namtha",
        slug: "louang-namtha",
      }),
      Object.freeze<IProvince>({
        code: "LA-LP",
        name: "Louangphabang",
        slug: "louangphabang",
      }),
      Object.freeze<IProvince>({
        code: "LA-OU",
        name: "Oudomsai",
        slug: "oudomsai",
      }),
      Object.freeze<IProvince>({
        code: "LA-PH",
        name: "Ph\u00f4ngsali",
        slug: "phongsali",
      }),
      Object.freeze<IProvince>({
        code: "LA-SL",
        name: "Salavan",
        slug: "salavan",
      }),
      Object.freeze<IProvince>({
        code: "LA-SV",
        name: "Savannakh\u00e9t",
        slug: "savannakhet",
      }),
      Object.freeze<IProvince>({
        code: "LA-VI",
        name: "Vientiane",
        slug: "vientiane",
      }),
      Object.freeze<IProvince>({
        code: "LA-VT",
        name: "Vientiane, Prefecture",
        slug: "vientiane-prefecture",
      }),
      Object.freeze<IProvince>({
        code: "LA-XA",
        name: "Sayaboury",
        slug: "sayaboury",
      }),
      Object.freeze<IProvince>({
        code: "LA-XE",
        name: "S\u00e9kong",
        slug: "sekong",
      }),
      Object.freeze<IProvince>({
        code: "LA-XI",
        name: "Xiangkhouang",
        slug: "xiangkhouang",
      }),
    ],
  }),
  LV: Object.freeze<ICountry>({
    code: "LV",
    currency: CURRENCIES.EUR,
    name: "Latvia",
    nameWithArticle: "Latvia",
    provinces: [
      Object.freeze<IProvince>({
        code: "LV-001",
        name: "Aglonas novads",
        slug: "aglonas-novads",
      }),
      Object.freeze<IProvince>({
        code: "LV-002",
        name: "Aizkraukles novads",
        slug: "aizkraukles-novads",
      }),
      Object.freeze<IProvince>({
        code: "LV-003",
        name: "Aizputes novads",
        slug: "aizputes-novads",
      }),
      Object.freeze<IProvince>({
        code: "LV-004",
        name: "Akn\u012bstes novads",
        slug: "aknistes-novads",
      }),
      Object.freeze<IProvince>({
        code: "LV-005",
        name: "Alojas novads",
        slug: "alojas-novads",
      }),
      Object.freeze<IProvince>({
        code: "LV-006",
        name: "Alsungas novads",
        slug: "alsungas-novads",
      }),
      Object.freeze<IProvince>({
        code: "LV-007",
        name: "Al\u016bksnes novads",
        slug: "aluksnes-novads",
      }),
      Object.freeze<IProvince>({
        code: "LV-008",
        name: "Amatas novads",
        slug: "amatas-novads",
      }),
      Object.freeze<IProvince>({
        code: "LV-009",
        name: "Apes novads",
        slug: "apes-novads",
      }),
      Object.freeze<IProvince>({
        code: "LV-010",
        name: "Auces novads",
        slug: "auces-novads",
      }),
      Object.freeze<IProvince>({
        code: "LV-011",
        name: "\u0100da\u017eu novads",
        slug: "adazu-novads",
      }),
      Object.freeze<IProvince>({
        code: "LV-012",
        name: "Bab\u012btes novads",
        slug: "babites-novads",
      }),
      Object.freeze<IProvince>({
        code: "LV-013",
        name: "Baldones novads",
        slug: "baldones-novads",
      }),
      Object.freeze<IProvince>({
        code: "LV-014",
        name: "Baltinavas novads",
        slug: "baltinavas-novads",
      }),
      Object.freeze<IProvince>({
        code: "LV-015",
        name: "Balvu novads",
        slug: "balvu-novads",
      }),
      Object.freeze<IProvince>({
        code: "LV-016",
        name: "Bauskas novads",
        slug: "bauskas-novads",
      }),
      Object.freeze<IProvince>({
        code: "LV-017",
        name: "Bever\u012bnas novads",
        slug: "beverinas-novads",
      }),
      Object.freeze<IProvince>({
        code: "LV-018",
        name: "Broc\u0113nu novads",
        slug: "brocenu-novads",
      }),
      Object.freeze<IProvince>({
        code: "LV-019",
        name: "Burtnieku novads",
        slug: "burtnieku-novads",
      }),
      Object.freeze<IProvince>({
        code: "LV-020",
        name: "Carnikavas novads",
        slug: "carnikavas-novads",
      }),
      Object.freeze<IProvince>({
        code: "LV-021",
        name: "Cesvaines novads",
        slug: "cesvaines-novads",
      }),
      Object.freeze<IProvince>({
        code: "LV-022",
        name: "C\u0113su novads",
        slug: "cesu-novads",
      }),
      Object.freeze<IProvince>({
        code: "LV-023",
        name: "Ciblas novads",
        slug: "ciblas-novads",
      }),
      Object.freeze<IProvince>({
        code: "LV-024",
        name: "Dagdas novads",
        slug: "dagdas-novads",
      }),
      Object.freeze<IProvince>({
        code: "LV-025",
        name: "Daugavpils novads",
        slug: "daugavpils-novads",
      }),
      Object.freeze<IProvince>({
        code: "LV-026",
        name: "Dobeles novads",
        slug: "dobeles-novads",
      }),
      Object.freeze<IProvince>({
        code: "LV-027",
        name: "Dundagas novads",
        slug: "dundagas-novads",
      }),
      Object.freeze<IProvince>({
        code: "LV-028",
        name: "Durbes novads",
        slug: "durbes-novads",
      }),
      Object.freeze<IProvince>({
        code: "LV-029",
        name: "Engures novads",
        slug: "engures-novads",
      }),
      Object.freeze<IProvince>({
        code: "LV-030",
        name: "\u0112rg\u013cu novads",
        slug: "erglu-novads",
      }),
      Object.freeze<IProvince>({
        code: "LV-031",
        name: "Garkalnes novads",
        slug: "garkalnes-novads",
      }),
      Object.freeze<IProvince>({
        code: "LV-032",
        name: "Grobi\u0146as novads",
        slug: "grobinas-novads",
      }),
      Object.freeze<IProvince>({
        code: "LV-033",
        name: "Gulbenes novads",
        slug: "gulbenes-novads",
      }),
      Object.freeze<IProvince>({
        code: "LV-034",
        name: "Iecavas novads",
        slug: "iecavas-novads",
      }),
      Object.freeze<IProvince>({
        code: "LV-035",
        name: "Ik\u0161\u0137iles novads",
        slug: "ikskiles-novads",
      }),
      Object.freeze<IProvince>({
        code: "LV-036",
        name: "Il\u016bkstes novads",
        slug: "ilukstes-novads",
      }),
      Object.freeze<IProvince>({
        code: "LV-037",
        name: "In\u010dukalna novads",
        slug: "incukalna-novads",
      }),
      Object.freeze<IProvince>({
        code: "LV-038",
        name: "Jaunjelgavas novads",
        slug: "jaunjelgavas-novads",
      }),
      Object.freeze<IProvince>({
        code: "LV-039",
        name: "Jaunpiebalgas novads",
        slug: "jaunpiebalgas-novads",
      }),
      Object.freeze<IProvince>({
        code: "LV-040",
        name: "Jaunpils novads",
        slug: "jaunpils-novads",
      }),
      Object.freeze<IProvince>({
        code: "LV-041",
        name: "Jelgavas novads",
        slug: "jelgavas-novads",
      }),
      Object.freeze<IProvince>({
        code: "LV-042",
        name: "J\u0113kabpils novads",
        slug: "jekabpils-novads",
      }),
      Object.freeze<IProvince>({
        code: "LV-043",
        name: "Kandavas novads",
        slug: "kandavas-novads",
      }),
      Object.freeze<IProvince>({
        code: "LV-044",
        name: "K\u0101rsavas novads",
        slug: "karsavas-novads",
      }),
      Object.freeze<IProvince>({
        code: "LV-045",
        name: "Koc\u0113nu novads",
        slug: "kocenu-novads",
      }),
      Object.freeze<IProvince>({
        code: "LV-046",
        name: "Kokneses novads",
        slug: "kokneses-novads",
      }),
      Object.freeze<IProvince>({
        code: "LV-047",
        name: "Kr\u0101slavas novads",
        slug: "kraslavas-novads",
      }),
      Object.freeze<IProvince>({
        code: "LV-048",
        name: "Krimuldas novads",
        slug: "krimuldas-novads",
      }),
      Object.freeze<IProvince>({
        code: "LV-049",
        name: "Krustpils novads",
        slug: "krustpils-novads",
      }),
      Object.freeze<IProvince>({
        code: "LV-050",
        name: "Kuld\u012bgas novads",
        slug: "kuldigas-novads",
      }),
      Object.freeze<IProvince>({
        code: "LV-051",
        name: "\u0136eguma novads",
        slug: "keguma-novads",
      }),
      Object.freeze<IProvince>({
        code: "LV-052",
        name: "\u0136ekavas novads",
        slug: "kekavas-novads",
      }),
      Object.freeze<IProvince>({
        code: "LV-053",
        name: "Lielv\u0101rdes novads",
        slug: "lielvardes-novads",
      }),
      Object.freeze<IProvince>({
        code: "LV-054",
        name: "Limba\u017eu novads",
        slug: "limbazu-novads",
      }),
      Object.freeze<IProvince>({
        code: "LV-055",
        name: "L\u012bgatnes novads",
        slug: "ligatnes-novads",
      }),
      Object.freeze<IProvince>({
        code: "LV-056",
        name: "L\u012bv\u0101nu novads",
        slug: "livanu-novads",
      }),
      Object.freeze<IProvince>({
        code: "LV-057",
        name: "Lub\u0101nas novads",
        slug: "lubanas-novads",
      }),
      Object.freeze<IProvince>({
        code: "LV-058",
        name: "Ludzas novads",
        slug: "ludzas-novads",
      }),
      Object.freeze<IProvince>({
        code: "LV-059",
        name: "Madonas novads",
        slug: "madonas-novads",
      }),
      Object.freeze<IProvince>({
        code: "LV-060",
        name: "Mazsalacas novads",
        slug: "mazsalacas-novads",
      }),
      Object.freeze<IProvince>({
        code: "LV-061",
        name: "M\u0101lpils novads",
        slug: "malpils-novads",
      }),
      Object.freeze<IProvince>({
        code: "LV-062",
        name: "M\u0101rupes novads",
        slug: "marupes-novads",
      }),
      Object.freeze<IProvince>({
        code: "LV-063",
        name: "M\u0113rsraga novads",
        slug: "mersraga-novads",
      }),
      Object.freeze<IProvince>({
        code: "LV-064",
        name: "Nauk\u0161\u0113nu novads",
        slug: "nauksenu-novads",
      }),
      Object.freeze<IProvince>({
        code: "LV-065",
        name: "Neretas novads",
        slug: "neretas-novads",
      }),
      Object.freeze<IProvince>({
        code: "LV-066",
        name: "N\u012bcas novads",
        slug: "nicas-novads",
      }),
      Object.freeze<IProvince>({
        code: "LV-067",
        name: "Ogres novads",
        slug: "ogres-novads",
      }),
      Object.freeze<IProvince>({
        code: "LV-068",
        name: "Olaines novads",
        slug: "olaines-novads",
      }),
      Object.freeze<IProvince>({
        code: "LV-069",
        name: "Ozolnieku novads",
        slug: "ozolnieku-novads",
      }),
      Object.freeze<IProvince>({
        code: "LV-070",
        name: "P\u0101rgaujas novads",
        slug: "pargaujas-novads",
      }),
      Object.freeze<IProvince>({
        code: "LV-071",
        name: "P\u0101vilostas novads",
        slug: "pavilostas-novads",
      }),
      Object.freeze<IProvince>({
        code: "LV-072",
        name: "P\u013cavi\u0146u novads",
        slug: "plavinu-novads",
      }),
      Object.freeze<IProvince>({
        code: "LV-073",
        name: "Prei\u013cu novads",
        slug: "preilu-novads",
      }),
      Object.freeze<IProvince>({
        code: "LV-074",
        name: "Priekules novads",
        slug: "priekules-novads",
      }),
      Object.freeze<IProvince>({
        code: "LV-075",
        name: "Prieku\u013cu novads",
        slug: "priekulu-novads",
      }),
      Object.freeze<IProvince>({
        code: "LV-076",
        name: "Raunas novads",
        slug: "raunas-novads",
      }),
      Object.freeze<IProvince>({
        code: "LV-077",
        name: "R\u0113zeknes novads",
        slug: "rezeknes-novads",
      }),
      Object.freeze<IProvince>({
        code: "LV-078",
        name: "Riebi\u0146u novads",
        slug: "riebinu-novads",
      }),
      Object.freeze<IProvince>({
        code: "LV-079",
        name: "Rojas novads",
        slug: "rojas-novads",
      }),
      Object.freeze<IProvince>({
        code: "LV-080",
        name: "Ropa\u017eu novads",
        slug: "ropazu-novads",
      }),
      Object.freeze<IProvince>({
        code: "LV-081",
        name: "Rucavas novads",
        slug: "rucavas-novads",
      }),
      Object.freeze<IProvince>({
        code: "LV-082",
        name: "Rug\u0101ju novads",
        slug: "rugaju-novads",
      }),
      Object.freeze<IProvince>({
        code: "LV-083",
        name: "Rund\u0101les novads",
        slug: "rundales-novads",
      }),
      Object.freeze<IProvince>({
        code: "LV-084",
        name: "R\u016bjienas novads",
        slug: "rujienas-novads",
      }),
      Object.freeze<IProvince>({
        code: "LV-085",
        name: "Salas novads",
        slug: "salas-novads",
      }),
      Object.freeze<IProvince>({
        code: "LV-086",
        name: "Salacgr\u012bvas novads",
        slug: "salacgrivas-novads",
      }),
      Object.freeze<IProvince>({
        code: "LV-087",
        name: "Salaspils novads",
        slug: "salaspils-novads",
      }),
      Object.freeze<IProvince>({
        code: "LV-088",
        name: "Saldus novads",
        slug: "saldus-novads",
      }),
      Object.freeze<IProvince>({
        code: "LV-089",
        name: "Saulkrastu novads",
        slug: "saulkrastu-novads",
      }),
      Object.freeze<IProvince>({
        code: "LV-090",
        name: "S\u0113jas novads",
        slug: "sejas-novads",
      }),
      Object.freeze<IProvince>({
        code: "LV-091",
        name: "Siguldas novads",
        slug: "siguldas-novads",
      }),
      Object.freeze<IProvince>({
        code: "LV-092",
        name: "Skr\u012bveru novads",
        slug: "skriveru-novads",
      }),
      Object.freeze<IProvince>({
        code: "LV-093",
        name: "Skrundas novads",
        slug: "skrundas-novads",
      }),
      Object.freeze<IProvince>({
        code: "LV-094",
        name: "Smiltenes novads",
        slug: "smiltenes-novads",
      }),
      Object.freeze<IProvince>({
        code: "LV-095",
        name: "Stopi\u0146u novads",
        slug: "stopinu-novads",
      }),
      Object.freeze<IProvince>({
        code: "LV-096",
        name: "Stren\u010du novads",
        slug: "strencu-novads",
      }),
      Object.freeze<IProvince>({
        code: "LV-097",
        name: "Talsu novads",
        slug: "talsu-novads",
      }),
      Object.freeze<IProvince>({
        code: "LV-098",
        name: "T\u0113rvetes novads",
        slug: "tervetes-novads",
      }),
      Object.freeze<IProvince>({
        code: "LV-099",
        name: "Tukuma novads",
        slug: "tukuma-novads",
      }),
      Object.freeze<IProvince>({
        code: "LV-100",
        name: "Vai\u0146odes novads",
        slug: "vainodes-novads",
      }),
      Object.freeze<IProvince>({
        code: "LV-101",
        name: "Valkas novads",
        slug: "valkas-novads",
      }),
      Object.freeze<IProvince>({
        code: "LV-102",
        name: "Varak\u013c\u0101nu novads",
        slug: "varaklanu-novads",
      }),
      Object.freeze<IProvince>({
        code: "LV-103",
        name: "V\u0101rkavas novads",
        slug: "varkavas-novads",
      }),
      Object.freeze<IProvince>({
        code: "LV-104",
        name: "Vecpiebalgas novads",
        slug: "vecpiebalgas-novads",
      }),
      Object.freeze<IProvince>({
        code: "LV-105",
        name: "Vecumnieku novads",
        slug: "vecumnieku-novads",
      }),
      Object.freeze<IProvince>({
        code: "LV-106",
        name: "Ventspils novads",
        slug: "ventspils-novads",
      }),
      Object.freeze<IProvince>({
        code: "LV-107",
        name: "Vies\u012btes novads",
        slug: "viesites-novads",
      }),
      Object.freeze<IProvince>({
        code: "LV-108",
        name: "Vi\u013cakas novads",
        slug: "vilakas-novads",
      }),
      Object.freeze<IProvince>({
        code: "LV-109",
        name: "Vi\u013c\u0101nu novads",
        slug: "vilanu-novads",
      }),
      Object.freeze<IProvince>({
        code: "LV-110",
        name: "Zilupes novads",
        slug: "zilupes-novads",
      }),
      Object.freeze<IProvince>({
        code: "LV-DGV",
        name: "Daugavpils",
        slug: "daugavpils",
      }),
      Object.freeze<IProvince>({
        code: "LV-JEL",
        name: "Jelgava",
        slug: "jelgava",
      }),
      Object.freeze<IProvince>({
        code: "LV-JKB",
        name: "J\u0113kabpils",
        slug: "jekabpils",
      }),
      Object.freeze<IProvince>({
        code: "LV-JUR",
        name: "J\u016brmala",
        slug: "jurmala",
      }),
      Object.freeze<IProvince>({
        code: "LV-LPX",
        name: "Liep\u0101ja",
        slug: "liepaja",
      }),
      Object.freeze<IProvince>({
        code: "LV-REZ",
        name: "R\u0113zekne",
        slug: "rezekne",
      }),
      Object.freeze<IProvince>({
        code: "LV-RIX",
        name: "R\u012bga",
        slug: "riga",
      }),
      Object.freeze<IProvince>({
        code: "LV-VEN",
        name: "Ventspils",
        slug: "ventspils",
      }),
      Object.freeze<IProvince>({
        code: "LV-VMR",
        name: "Valmiera",
        slug: "valmiera",
      }),
    ],
  }),
  LB: Object.freeze<ICountry>({
    code: "LB",
    currency: CURRENCIES.LBP,
    name: "Lebanon",
    nameWithArticle: "Lebanon",
    provinces: [
      Object.freeze<IProvince>({
        code: "LB-AK",
        name: "Aakk\u00e2r",
        slug: "aakkar",
      }),
      Object.freeze<IProvince>({
        code: "LB-AS",
        name: "Ash Shim\u0101l",
        slug: "ash-shimal",
      }),
      Object.freeze<IProvince>({
        code: "LB-BA",
        name: "Bayr\u016bt",
        slug: "bayrut",
      }),
      Object.freeze<IProvince>({
        code: "LB-BH",
        name: "Baalbek-Hermel",
        slug: "baalbek-hermel",
      }),
      Object.freeze<IProvince>({
        code: "LB-BI",
        name: "Al Biq\u0101\u2018",
        slug: "al-biqa",
      }),
      Object.freeze<IProvince>({
        code: "LB-JA",
        name: "Al Jan\u016bb",
        slug: "al-janub",
      }),
      Object.freeze<IProvince>({
        code: "LB-JL",
        name: "Jabal Lubn\u0101n",
        slug: "jabal-lubnan",
      }),
      Object.freeze<IProvince>({
        code: "LB-NA",
        name: "An Naba\u0163\u012byah",
        slug: "an-nabatiyah",
      }),
    ],
  }),
  LS: Object.freeze<ICountry>({
    code: "LS",
    currency: CURRENCIES.LSL,
    name: "Lesotho",
    nameWithArticle: "Lesotho",
    provinces: [
      Object.freeze<IProvince>({
        code: "LS-A",
        name: "Maseru",
        slug: "maseru",
      }),
      Object.freeze<IProvince>({
        code: "LS-B",
        name: "Butha-Buthe",
        slug: "butha-buthe",
      }),
      Object.freeze<IProvince>({
        code: "LS-C",
        name: "Leribe",
        slug: "leribe",
      }),
      Object.freeze<IProvince>({
        code: "LS-D",
        name: "Berea",
        slug: "berea",
      }),
      Object.freeze<IProvince>({
        code: "LS-E",
        name: "Mafeteng",
        slug: "mafeteng",
      }),
      Object.freeze<IProvince>({
        code: "LS-F",
        name: "Mohale's Hoek",
        slug: "mohales-hoek",
      }),
      Object.freeze<IProvince>({
        code: "LS-G",
        name: "Quthing",
        slug: "quthing",
      }),
      Object.freeze<IProvince>({
        code: "LS-H",
        name: "Qacha's Nek",
        slug: "qachas-nek",
      }),
      Object.freeze<IProvince>({
        code: "LS-J",
        name: "Mokhotlong",
        slug: "mokhotlong",
      }),
      Object.freeze<IProvince>({
        code: "LS-K",
        name: "Thaba-Tseka",
        slug: "thaba-tseka",
      }),
    ],
  }),
  LR: Object.freeze<ICountry>({
    code: "LR",
    currency: CURRENCIES.LRD,
    name: "Liberia",
    nameWithArticle: "Liberia",
    provinces: [
      Object.freeze<IProvince>({
        code: "LR-BG",
        name: "Bong",
        slug: "bong",
      }),
      Object.freeze<IProvince>({
        code: "LR-BM",
        name: "Bomi",
        slug: "bomi",
      }),
      Object.freeze<IProvince>({
        code: "LR-CM",
        name: "Grand Cape Mount",
        slug: "grand-cape-mount",
      }),
      Object.freeze<IProvince>({
        code: "LR-GB",
        name: "Grand Bassa",
        slug: "grand-bassa",
      }),
      Object.freeze<IProvince>({
        code: "LR-GG",
        name: "Grand Gedeh",
        slug: "grand-gedeh",
      }),
      Object.freeze<IProvince>({
        code: "LR-GK",
        name: "Grand Kru",
        slug: "grand-kru",
      }),
      Object.freeze<IProvince>({
        code: "LR-GP",
        name: "Gbarpolu",
        slug: "gbarpolu",
      }),
      Object.freeze<IProvince>({
        code: "LR-LO",
        name: "Lofa",
        slug: "lofa",
      }),
      Object.freeze<IProvince>({
        code: "LR-MG",
        name: "Margibi",
        slug: "margibi",
      }),
      Object.freeze<IProvince>({
        code: "LR-MO",
        name: "Montserrado",
        slug: "montserrado",
      }),
      Object.freeze<IProvince>({
        code: "LR-MY",
        name: "Maryland",
        slug: "maryland",
      }),
      Object.freeze<IProvince>({
        code: "LR-NI",
        name: "Nimba",
        slug: "nimba",
      }),
      Object.freeze<IProvince>({
        code: "LR-RG",
        name: "River Gee",
        slug: "river-gee",
      }),
      Object.freeze<IProvince>({
        code: "LR-RI",
        name: "Rivercess",
        slug: "rivercess",
      }),
      Object.freeze<IProvince>({
        code: "LR-SI",
        name: "Sinoe",
        slug: "sinoe",
      }),
    ],
  }),
  LY: Object.freeze<ICountry>({
    code: "LY",
    currency: CURRENCIES.LYD,
    name: "Libya",
    nameWithArticle: "Libya",
    provinces: [
      Object.freeze<IProvince>({
        code: "LY-BA",
        name: "Bangh\u0101z\u012b",
        slug: "banghazi",
      }),
      Object.freeze<IProvince>({
        code: "LY-BU",
        name: "Al Bu\u0163n\u0101n",
        slug: "al-butnan",
      }),
      Object.freeze<IProvince>({
        code: "LY-DR",
        name: "Darnah",
        slug: "darnah",
      }),
      Object.freeze<IProvince>({
        code: "LY-GT",
        name: "Gh\u0101t",
        slug: "ghat",
      }),
      Object.freeze<IProvince>({
        code: "LY-JA",
        name: "Al Jabal al Akh\u1e11ar",
        slug: "al-jabal-al-akhdar",
      }),
      Object.freeze<IProvince>({
        code: "LY-JG",
        name: "Al Jabal al Gharb\u012b",
        slug: "al-jabal-al-gharbi",
      }),
      Object.freeze<IProvince>({
        code: "LY-JI",
        name: "Al Jif\u0101rah",
        slug: "al-jifarah",
      }),
      Object.freeze<IProvince>({
        code: "LY-JU",
        name: "Al Jufrah",
        slug: "al-jufrah",
      }),
      Object.freeze<IProvince>({
        code: "LY-KF",
        name: "Al Kufrah",
        slug: "al-kufrah",
      }),
      Object.freeze<IProvince>({
        code: "LY-MB",
        name: "Al Marqab",
        slug: "al-marqab",
      }),
      Object.freeze<IProvince>({
        code: "LY-MI",
        name: "Mi\u015fr\u0101tah",
        slug: "misratah",
      }),
      Object.freeze<IProvince>({
        code: "LY-MJ",
        name: "Al Marj",
        slug: "al-marj",
      }),
      Object.freeze<IProvince>({
        code: "LY-MQ",
        name: "Murzuq",
        slug: "murzuq",
      }),
      Object.freeze<IProvince>({
        code: "LY-NL",
        name: "N\u0101l\u016bt",
        slug: "nalut",
      }),
      Object.freeze<IProvince>({
        code: "LY-NQ",
        name: "An Nuq\u0101\u0163 al Khams",
        slug: "an-nuqat-al-khams",
      }),
      Object.freeze<IProvince>({
        code: "LY-SB",
        name: "Sabh\u0101",
        slug: "sabha",
      }),
      Object.freeze<IProvince>({
        code: "LY-SR",
        name: "Surt",
        slug: "surt",
      }),
      Object.freeze<IProvince>({
        code: "LY-TB",
        name: "\u0162ar\u0101bulus",
        slug: "tarabulus",
      }),
      Object.freeze<IProvince>({
        code: "LY-WA",
        name: "Al W\u0101\u1e29\u0101t",
        slug: "al-wahat",
      }),
      Object.freeze<IProvince>({
        code: "LY-WD",
        name: "W\u0101d\u012b al \u1e28ay\u0101t",
        slug: "wadi-al-hayat",
      }),
      Object.freeze<IProvince>({
        code: "LY-WS",
        name: "W\u0101d\u012b ash Sh\u0101\u0163i\u2019",
        slug: "wadi-ash-shati",
      }),
      Object.freeze<IProvince>({
        code: "LY-ZA",
        name: "Az Z\u0101wiyah",
        slug: "az-zawiyah",
      }),
    ],
  }),
  LI: Object.freeze<ICountry>({
    code: "LI",
    currency: CURRENCIES.CHF,
    name: "Liechtenstein",
    nameWithArticle: "Liechtenstein",
    provinces: [
      Object.freeze<IProvince>({
        code: "LI-01",
        name: "Balzers",
        slug: "balzers",
      }),
      Object.freeze<IProvince>({
        code: "LI-02",
        name: "Eschen",
        slug: "eschen",
      }),
      Object.freeze<IProvince>({
        code: "LI-03",
        name: "Gamprin",
        slug: "gamprin",
      }),
      Object.freeze<IProvince>({
        code: "LI-04",
        name: "Mauren",
        slug: "mauren",
      }),
      Object.freeze<IProvince>({
        code: "LI-05",
        name: "Planken",
        slug: "planken",
      }),
      Object.freeze<IProvince>({
        code: "LI-06",
        name: "Ruggell",
        slug: "ruggell",
      }),
      Object.freeze<IProvince>({
        code: "LI-07",
        name: "Schaan",
        slug: "schaan",
      }),
      Object.freeze<IProvince>({
        code: "LI-08",
        name: "Schellenberg",
        slug: "schellenberg",
      }),
      Object.freeze<IProvince>({
        code: "LI-09",
        name: "Triesen",
        slug: "triesen",
      }),
      Object.freeze<IProvince>({
        code: "LI-10",
        name: "Triesenberg",
        slug: "triesenberg",
      }),
      Object.freeze<IProvince>({
        code: "LI-11",
        name: "Vaduz",
        slug: "vaduz",
      }),
    ],
  }),
  LT: Object.freeze<ICountry>({
    code: "LT",
    currency: CURRENCIES.EUR,
    name: "Lithuania",
    nameWithArticle: "Lithuania",
    provinces: [
      Object.freeze<IProvince>({
        code: "LT-AL",
        name: "Alytaus apskritis",
        slug: "alytaus-apskritis",
      }),
      Object.freeze<IProvince>({
        code: "LT-KL",
        name: "Klaip\u0117dos apskritis",
        slug: "klaipedos-apskritis",
      }),
      Object.freeze<IProvince>({
        code: "LT-KU",
        name: "Kauno apskritis",
        slug: "kauno-apskritis",
      }),
      Object.freeze<IProvince>({
        code: "LT-MR",
        name: "Marijampol\u0117s apskritis",
        slug: "marijampoles-apskritis",
      }),
      Object.freeze<IProvince>({
        code: "LT-PN",
        name: "Panev\u0117\u017eio apskritis",
        slug: "panevezio-apskritis",
      }),
      Object.freeze<IProvince>({
        code: "LT-SA",
        name: "\u0160iauli\u0173 apskritis",
        slug: "siauliu-apskritis",
      }),
      Object.freeze<IProvince>({
        code: "LT-TA",
        name: "Taurag\u0117s apskritis",
        slug: "taurages-apskritis",
      }),
      Object.freeze<IProvince>({
        code: "LT-TE",
        name: "Tel\u0161i\u0173 apskritis",
        slug: "telsiu-apskritis",
      }),
      Object.freeze<IProvince>({
        code: "LT-UT",
        name: "Utenos apskritis",
        slug: "utenos-apskritis",
      }),
      Object.freeze<IProvince>({
        code: "LT-VL",
        name: "Vilniaus apskritis",
        slug: "vilniaus-apskritis",
      }),
    ],
  }),
  LU: Object.freeze<ICountry>({
    code: "LU",
    currency: CURRENCIES.EUR,
    name: "Luxembourg",
    nameWithArticle: "Luxembourg",
    provinces: [
      Object.freeze<IProvince>({
        code: "LU-D",
        name: "Diekirch",
        slug: "diekirch",
      }),
      Object.freeze<IProvince>({
        code: "LU-G",
        name: "Grevenmacher",
        slug: "grevenmacher",
      }),
      Object.freeze<IProvince>({
        code: "LU-L",
        name: "L\u00ebtzebuerg",
        slug: "letzebuerg",
      }),
    ],
  }),
  MO: Object.freeze<ICountry>({
    code: "MO",
    currency: CURRENCIES.MOP,
    name: "Macao",
    nameWithArticle: "Macao",
    provinces: [],
  }),
  MK: Object.freeze<ICountry>({
    code: "MK",
    currency: CURRENCIES.MKD,
    name: "North Macedonia",
    nameWithArticle: "North Macedonia",
    provinces: [
      Object.freeze<IProvince>({
        code: "MK-01",
        name: "Aerodrom \u2020",
        slug: "aerodrom",
      }),
      Object.freeze<IProvince>({
        code: "MK-02",
        name: "Ara\u010dinovo",
        slug: "aracinovo",
      }),
      Object.freeze<IProvince>({
        code: "MK-03",
        name: "Berovo",
        slug: "berovo",
      }),
      Object.freeze<IProvince>({
        code: "MK-04",
        name: "Bitola",
        slug: "bitola",
      }),
      Object.freeze<IProvince>({
        code: "MK-05",
        name: "Bogdanci",
        slug: "bogdanci",
      }),
      Object.freeze<IProvince>({
        code: "MK-06",
        name: "Bogovinje",
        slug: "bogovinje",
      }),
      Object.freeze<IProvince>({
        code: "MK-07",
        name: "Bosilovo",
        slug: "bosilovo",
      }),
      Object.freeze<IProvince>({
        code: "MK-08",
        name: "Brvenica",
        slug: "brvenica",
      }),
      Object.freeze<IProvince>({
        code: "MK-09",
        name: "Butel \u2020",
        slug: "butel",
      }),
      Object.freeze<IProvince>({
        code: "MK-10",
        name: "Valandovo",
        slug: "valandovo",
      }),
      Object.freeze<IProvince>({
        code: "MK-11",
        name: "Vasilevo",
        slug: "vasilevo",
      }),
      Object.freeze<IProvince>({
        code: "MK-12",
        name: "Vev\u010dani",
        slug: "vevcani",
      }),
      Object.freeze<IProvince>({
        code: "MK-13",
        name: "Veles",
        slug: "veles",
      }),
      Object.freeze<IProvince>({
        code: "MK-14",
        name: "Vinica",
        slug: "vinica",
      }),
      Object.freeze<IProvince>({
        code: "MK-15",
        name: "Vrane\u0161tica",
        slug: "vranestica",
      }),
      Object.freeze<IProvince>({
        code: "MK-16",
        name: "Vrap\u010di\u0161te",
        slug: "vrapciste",
      }),
      Object.freeze<IProvince>({
        code: "MK-17",
        name: "Gazi Baba \u2020",
        slug: "gazi-baba",
      }),
      Object.freeze<IProvince>({
        code: "MK-18",
        name: "Gevgelija",
        slug: "gevgelija",
      }),
      Object.freeze<IProvince>({
        code: "MK-19",
        name: "Gostivar",
        slug: "gostivar",
      }),
      Object.freeze<IProvince>({
        code: "MK-20",
        name: "Gradsko",
        slug: "gradsko",
      }),
      Object.freeze<IProvince>({
        code: "MK-21",
        name: "Debar",
        slug: "debar",
      }),
      Object.freeze<IProvince>({
        code: "MK-22",
        name: "Debarca",
        slug: "debarca",
      }),
      Object.freeze<IProvince>({
        code: "MK-23",
        name: "Del\u010devo",
        slug: "delcevo",
      }),
      Object.freeze<IProvince>({
        code: "MK-24",
        name: "Demir Kapija",
        slug: "demir-kapija",
      }),
      Object.freeze<IProvince>({
        code: "MK-25",
        name: "Demir Hisar",
        slug: "demir-hisar",
      }),
      Object.freeze<IProvince>({
        code: "MK-26",
        name: "Dojran",
        slug: "dojran",
      }),
      Object.freeze<IProvince>({
        code: "MK-27",
        name: "Dolneni",
        slug: "dolneni",
      }),
      Object.freeze<IProvince>({
        code: "MK-28",
        name: "Drugovo",
        slug: "drugovo",
      }),
      Object.freeze<IProvince>({
        code: "MK-29",
        name: "Gjor\u010de Petrov \u2020",
        slug: "gjorce-petrov",
      }),
      Object.freeze<IProvince>({
        code: "MK-30",
        name: "\u017delino",
        slug: "zelino",
      }),
      Object.freeze<IProvince>({
        code: "MK-31",
        name: "Zajas",
        slug: "zajas",
      }),
      Object.freeze<IProvince>({
        code: "MK-32",
        name: "Zelenikovo",
        slug: "zelenikovo",
      }),
      Object.freeze<IProvince>({
        code: "MK-33",
        name: "Zrnovci",
        slug: "zrnovci",
      }),
      Object.freeze<IProvince>({
        code: "MK-34",
        name: "Ilinden",
        slug: "ilinden",
      }),
      Object.freeze<IProvince>({
        code: "MK-35",
        name: "Jegunovce",
        slug: "jegunovce",
      }),
      Object.freeze<IProvince>({
        code: "MK-36",
        name: "Kavadarci",
        slug: "kavadarci",
      }),
      Object.freeze<IProvince>({
        code: "MK-37",
        name: "Karbinci",
        slug: "karbinci",
      }),
      Object.freeze<IProvince>({
        code: "MK-38",
        name: "Karpo\u0161 \u2020",
        slug: "karpos",
      }),
      Object.freeze<IProvince>({
        code: "MK-39",
        name: "Kisela Voda \u2020",
        slug: "kisela-voda",
      }),
      Object.freeze<IProvince>({
        code: "MK-40",
        name: "Ki\u010devo",
        slug: "kicevo",
      }),
      Object.freeze<IProvince>({
        code: "MK-41",
        name: "Kon\u010de",
        slug: "konce",
      }),
      Object.freeze<IProvince>({
        code: "MK-42",
        name: "Ko\u010dani",
        slug: "kocani",
      }),
      Object.freeze<IProvince>({
        code: "MK-43",
        name: "Kratovo",
        slug: "kratovo",
      }),
      Object.freeze<IProvince>({
        code: "MK-44",
        name: "Kriva Palanka",
        slug: "kriva-palanka",
      }),
      Object.freeze<IProvince>({
        code: "MK-45",
        name: "Krivoga\u0161tani",
        slug: "krivogastani",
      }),
      Object.freeze<IProvince>({
        code: "MK-46",
        name: "Kru\u0161evo",
        slug: "krusevo",
      }),
      Object.freeze<IProvince>({
        code: "MK-47",
        name: "Kumanovo",
        slug: "kumanovo",
      }),
      Object.freeze<IProvince>({
        code: "MK-48",
        name: "Lipkovo",
        slug: "lipkovo",
      }),
      Object.freeze<IProvince>({
        code: "MK-49",
        name: "Lozovo",
        slug: "lozovo",
      }),
      Object.freeze<IProvince>({
        code: "MK-50",
        name: "Mavrovo i Rostu\u0161a",
        slug: "mavrovo-i-rostusa",
      }),
      Object.freeze<IProvince>({
        code: "MK-51",
        name: "Makedonska Kamenica",
        slug: "makedonska-kamenica",
      }),
      Object.freeze<IProvince>({
        code: "MK-52",
        name: "Makedonski Brod",
        slug: "makedonski-brod",
      }),
      Object.freeze<IProvince>({
        code: "MK-53",
        name: "Mogila",
        slug: "mogila",
      }),
      Object.freeze<IProvince>({
        code: "MK-54",
        name: "Negotino",
        slug: "negotino",
      }),
      Object.freeze<IProvince>({
        code: "MK-55",
        name: "Novaci",
        slug: "novaci",
      }),
      Object.freeze<IProvince>({
        code: "MK-56",
        name: "Novo Selo",
        slug: "novo-selo",
      }),
      Object.freeze<IProvince>({
        code: "MK-57",
        name: "Oslomej",
        slug: "oslomej",
      }),
      Object.freeze<IProvince>({
        code: "MK-58",
        name: "Ohrid",
        slug: "ohrid",
      }),
      Object.freeze<IProvince>({
        code: "MK-59",
        name: "Petrovec",
        slug: "petrovec",
      }),
      Object.freeze<IProvince>({
        code: "MK-60",
        name: "Peh\u010devo",
        slug: "pehcevo",
      }),
      Object.freeze<IProvince>({
        code: "MK-61",
        name: "Plasnica",
        slug: "plasnica",
      }),
      Object.freeze<IProvince>({
        code: "MK-62",
        name: "Prilep",
        slug: "prilep",
      }),
      Object.freeze<IProvince>({
        code: "MK-63",
        name: "Probi\u0161tip",
        slug: "probistip",
      }),
      Object.freeze<IProvince>({
        code: "MK-64",
        name: "Radovi\u0161",
        slug: "radovis",
      }),
      Object.freeze<IProvince>({
        code: "MK-65",
        name: "Rankovce",
        slug: "rankovce",
      }),
      Object.freeze<IProvince>({
        code: "MK-66",
        name: "Resen",
        slug: "resen",
      }),
      Object.freeze<IProvince>({
        code: "MK-67",
        name: "Rosoman",
        slug: "rosoman",
      }),
      Object.freeze<IProvince>({
        code: "MK-68",
        name: "Saraj \u2020",
        slug: "saraj",
      }),
      Object.freeze<IProvince>({
        code: "MK-69",
        name: "Sveti Nikole",
        slug: "sveti-nikole",
      }),
      Object.freeze<IProvince>({
        code: "MK-70",
        name: "Sopi\u0161te",
        slug: "sopiste",
      }),
      Object.freeze<IProvince>({
        code: "MK-71",
        name: "Staro Nagori\u010dane",
        slug: "staro-nagoricane",
      }),
      Object.freeze<IProvince>({
        code: "MK-72",
        name: "Struga",
        slug: "struga",
      }),
      Object.freeze<IProvince>({
        code: "MK-73",
        name: "Strumica",
        slug: "strumica",
      }),
      Object.freeze<IProvince>({
        code: "MK-74",
        name: "Studeni\u010dani",
        slug: "studenicani",
      }),
      Object.freeze<IProvince>({
        code: "MK-75",
        name: "Tearce",
        slug: "tearce",
      }),
      Object.freeze<IProvince>({
        code: "MK-76",
        name: "Tetovo",
        slug: "tetovo",
      }),
      Object.freeze<IProvince>({
        code: "MK-77",
        name: "Centar \u2020",
        slug: "centar",
      }),
      Object.freeze<IProvince>({
        code: "MK-78",
        name: "Centar \u017dupa",
        slug: "centar-zupa",
      }),
      Object.freeze<IProvince>({
        code: "MK-79",
        name: "\u010cair \u2020",
        slug: "cair",
      }),
      Object.freeze<IProvince>({
        code: "MK-80",
        name: "\u010ca\u0161ka",
        slug: "caska",
      }),
      Object.freeze<IProvince>({
        code: "MK-81",
        name: "\u010ce\u0161inovo-Oble\u0161evo",
        slug: "cesinovo-oblesevo",
      }),
      Object.freeze<IProvince>({
        code: "MK-82",
        name: "\u010cu\u010der Sandevo",
        slug: "cucer-sandevo",
      }),
      Object.freeze<IProvince>({
        code: "MK-83",
        name: "\u0160tip",
        slug: "stip",
      }),
      Object.freeze<IProvince>({
        code: "MK-84",
        name: "\u0160uto Orizari \u2020",
        slug: "suto-orizari",
      }),
    ],
  }),
  MG: Object.freeze<ICountry>({
    code: "MG",
    currency: CURRENCIES.MGA,
    name: "Madagascar",
    nameWithArticle: "Madagascar",
    provinces: [
      Object.freeze<IProvince>({
        code: "MG-A",
        name: "Toamasina",
        slug: "toamasina",
      }),
      Object.freeze<IProvince>({
        code: "MG-D",
        name: "Antsiranana",
        slug: "antsiranana",
      }),
      Object.freeze<IProvince>({
        code: "MG-F",
        name: "Fianarantsoa",
        slug: "fianarantsoa",
      }),
      Object.freeze<IProvince>({
        code: "MG-M",
        name: "Mahajanga",
        slug: "mahajanga",
      }),
      Object.freeze<IProvince>({
        code: "MG-T",
        name: "Antananarivo",
        slug: "antananarivo",
      }),
      Object.freeze<IProvince>({
        code: "MG-U",
        name: "Toliara",
        slug: "toliara",
      }),
    ],
  }),
  MW: Object.freeze<ICountry>({
    code: "MW",
    currency: CURRENCIES.MWK,
    name: "Malawi",
    nameWithArticle: "Malawi",
    provinces: [
      Object.freeze<IProvince>({
        code: "MW-C",
        name: "Central Region",
        slug: "central-region",
      }),
      Object.freeze<IProvince>({
        code: "MW-N",
        name: "Chakumpoto",
        slug: "chakumpoto",
      }),
      Object.freeze<IProvince>({
        code: "MW-S",
        name: "Chakumwera",
        slug: "chakumwera",
      }),
    ],
  }),
  MY: Object.freeze<ICountry>({
    code: "MY",
    currency: CURRENCIES.MYR,
    name: "Malaysia",
    nameWithArticle: "Malaysia",
    provinces: [
      Object.freeze<IProvince>({
        code: "MY-01",
        name: "Johor",
        slug: "johor",
      }),
      Object.freeze<IProvince>({
        code: "MY-02",
        name: "Kedah",
        slug: "kedah",
      }),
      Object.freeze<IProvince>({
        code: "MY-03",
        name: "Kelantan",
        slug: "kelantan",
      }),
      Object.freeze<IProvince>({
        code: "MY-04",
        name: "Melaka",
        slug: "melaka",
      }),
      Object.freeze<IProvince>({
        code: "MY-05",
        name: "Negeri Sembilan",
        slug: "negeri-sembilan",
      }),
      Object.freeze<IProvince>({
        code: "MY-06",
        name: "Pahang",
        slug: "pahang",
      }),
      Object.freeze<IProvince>({
        code: "MY-07",
        name: "Pulau Pinang",
        slug: "pulau-pinang",
      }),
      Object.freeze<IProvince>({
        code: "MY-08",
        name: "Perak",
        slug: "perak",
      }),
      Object.freeze<IProvince>({
        code: "MY-09",
        name: "Perlis",
        slug: "perlis",
      }),
      Object.freeze<IProvince>({
        code: "MY-10",
        name: "Selangor",
        slug: "selangor",
      }),
      Object.freeze<IProvince>({
        code: "MY-11",
        name: "Terengganu",
        slug: "terengganu",
      }),
      Object.freeze<IProvince>({
        code: "MY-12",
        name: "Sabah",
        slug: "sabah",
      }),
      Object.freeze<IProvince>({
        code: "MY-13",
        name: "Sarawak",
        slug: "sarawak",
      }),
      Object.freeze<IProvince>({
        code: "MY-14",
        name: "Wilayah Persekutuan Kuala Lumpur",
        slug: "wilayah-persekutuan-kuala-lumpur",
      }),
      Object.freeze<IProvince>({
        code: "MY-15",
        name: "Wilayah Persekutuan Labuan",
        slug: "wilayah-persekutuan-labuan",
      }),
      Object.freeze<IProvince>({
        code: "MY-16",
        name: "Wilayah Persekutuan Putrajaya",
        slug: "wilayah-persekutuan-putrajaya",
      }),
    ],
  }),
  MV: Object.freeze<ICountry>({
    code: "MV",
    currency: CURRENCIES.MVR,
    name: "Maldives",
    nameWithArticle: "Maldives",
    provinces: [
      Object.freeze<IProvince>({
        code: "MV-CE",
        name: "Central",
        slug: "central",
      }),
      Object.freeze<IProvince>({
        code: "MV-MLE",
        name: "Maale",
        slug: "maale",
      }),
      Object.freeze<IProvince>({
        code: "MV-NC",
        name: "Medhu-Uthuru",
        slug: "medhu-uthuru",
      }),
      Object.freeze<IProvince>({
        code: "MV-NO",
        name: "North",
        slug: "north",
      }),
      Object.freeze<IProvince>({
        code: "MV-SC",
        name: "Medhu-Dhekunu",
        slug: "medhu-dhekunu",
      }),
      Object.freeze<IProvince>({
        code: "MV-SU",
        name: "Dhekunu",
        slug: "dhekunu",
      }),
      Object.freeze<IProvince>({
        code: "MV-UN",
        name: "Mathi-Uthuru",
        slug: "mathi-uthuru",
      }),
      Object.freeze<IProvince>({
        code: "MV-US",
        name: "Mathi-Dhekunu",
        slug: "mathi-dhekunu",
      }),
    ],
  }),
  ML: Object.freeze<ICountry>({
    code: "ML",
    currency: CURRENCIES.XAF,
    name: "Mali",
    nameWithArticle: "Mali",
    provinces: [
      Object.freeze<IProvince>({
        code: "ML-1",
        name: "Kayes",
        slug: "kayes",
      }),
      Object.freeze<IProvince>({
        code: "ML-2",
        name: "Koulikoro",
        slug: "koulikoro",
      }),
      Object.freeze<IProvince>({
        code: "ML-3",
        name: "Sikasso",
        slug: "sikasso",
      }),
      Object.freeze<IProvince>({
        code: "ML-4",
        name: "S\u00e9gou",
        slug: "segou",
      }),
      Object.freeze<IProvince>({
        code: "ML-5",
        name: "Mopti",
        slug: "mopti",
      }),
      Object.freeze<IProvince>({
        code: "ML-6",
        name: "Tombouctou",
        slug: "tombouctou",
      }),
      Object.freeze<IProvince>({
        code: "ML-7",
        name: "Gao",
        slug: "gao",
      }),
      Object.freeze<IProvince>({
        code: "ML-8",
        name: "Kidal",
        slug: "kidal",
      }),
      Object.freeze<IProvince>({
        code: "ML-BKO",
        name: "Bamako",
        slug: "bamako",
      }),
    ],
  }),
  MT: Object.freeze<ICountry>({
    code: "MT",
    currency: CURRENCIES.EUR,
    name: "Malta",
    nameWithArticle: "Malta",
    provinces: [
      Object.freeze<IProvince>({
        code: "MT-01",
        name: "Attard",
        slug: "attard",
      }),
      Object.freeze<IProvince>({
        code: "MT-02",
        name: "Balzan",
        slug: "balzan",
      }),
      Object.freeze<IProvince>({
        code: "MT-03",
        name: "Birgu",
        slug: "birgu",
      }),
      Object.freeze<IProvince>({
        code: "MT-04",
        name: "Birkirkara",
        slug: "birkirkara",
      }),
      Object.freeze<IProvince>({
        code: "MT-05",
        name: "Bir\u017cebbu\u0121a",
        slug: "birzebbuga",
      }),
      Object.freeze<IProvince>({
        code: "MT-06",
        name: "Bormla",
        slug: "bormla",
      }),
      Object.freeze<IProvince>({
        code: "MT-07",
        name: "Dingli",
        slug: "dingli",
      }),
      Object.freeze<IProvince>({
        code: "MT-08",
        name: "Fgura",
        slug: "fgura",
      }),
      Object.freeze<IProvince>({
        code: "MT-09",
        name: "Floriana",
        slug: "floriana",
      }),
      Object.freeze<IProvince>({
        code: "MT-10",
        name: "Fontana",
        slug: "fontana",
      }),
      Object.freeze<IProvince>({
        code: "MT-11",
        name: "Gudja",
        slug: "gudja",
      }),
      Object.freeze<IProvince>({
        code: "MT-12",
        name: "G\u017cira",
        slug: "gzira",
      }),
      Object.freeze<IProvince>({
        code: "MT-13",
        name: "G\u0127ajnsielem",
        slug: "gajnsielem",
      }),
      Object.freeze<IProvince>({
        code: "MT-14",
        name: "G\u0127arb",
        slug: "garb",
      }),
      Object.freeze<IProvince>({
        code: "MT-15",
        name: "G\u0127arg\u0127ur",
        slug: "gargur",
      }),
      Object.freeze<IProvince>({
        code: "MT-16",
        name: "G\u0127asri",
        slug: "gasri",
      }),
      Object.freeze<IProvince>({
        code: "MT-17",
        name: "G\u0127axaq",
        slug: "gaxaq",
      }),
      Object.freeze<IProvince>({
        code: "MT-18",
        name: "\u0126amrun",
        slug: "amrun",
      }),
      Object.freeze<IProvince>({
        code: "MT-19",
        name: "Iklin",
        slug: "iklin",
      }),
      Object.freeze<IProvince>({
        code: "MT-20",
        name: "Isla",
        slug: "isla",
      }),
      Object.freeze<IProvince>({
        code: "MT-21",
        name: "Kalkara",
        slug: "kalkara",
      }),
      Object.freeze<IProvince>({
        code: "MT-22",
        name: "Ker\u010bem",
        slug: "kercem",
      }),
      Object.freeze<IProvince>({
        code: "MT-23",
        name: "Kirkop",
        slug: "kirkop",
      }),
      Object.freeze<IProvince>({
        code: "MT-24",
        name: "Lija",
        slug: "lija",
      }),
      Object.freeze<IProvince>({
        code: "MT-25",
        name: "Luqa",
        slug: "luqa",
      }),
      Object.freeze<IProvince>({
        code: "MT-26",
        name: "Marsa",
        slug: "marsa",
      }),
      Object.freeze<IProvince>({
        code: "MT-27",
        name: "Marsaskala",
        slug: "marsaskala",
      }),
      Object.freeze<IProvince>({
        code: "MT-28",
        name: "Marsaxlokk",
        slug: "marsaxlokk",
      }),
      Object.freeze<IProvince>({
        code: "MT-29",
        name: "Mdina",
        slug: "mdina",
      }),
      Object.freeze<IProvince>({
        code: "MT-30",
        name: "Mellie\u0127a",
        slug: "melliea",
      }),
      Object.freeze<IProvince>({
        code: "MT-31",
        name: "M\u0121arr",
        slug: "mgarr",
      }),
      Object.freeze<IProvince>({
        code: "MT-32",
        name: "Mosta",
        slug: "mosta",
      }),
      Object.freeze<IProvince>({
        code: "MT-33",
        name: "Mqabba",
        slug: "mqabba",
      }),
      Object.freeze<IProvince>({
        code: "MT-34",
        name: "Msida",
        slug: "msida",
      }),
      Object.freeze<IProvince>({
        code: "MT-35",
        name: "Mtarfa",
        slug: "mtarfa",
      }),
      Object.freeze<IProvince>({
        code: "MT-36",
        name: "Munxar",
        slug: "munxar",
      }),
      Object.freeze<IProvince>({
        code: "MT-37",
        name: "Nadur",
        slug: "nadur",
      }),
      Object.freeze<IProvince>({
        code: "MT-38",
        name: "Naxxar",
        slug: "naxxar",
      }),
      Object.freeze<IProvince>({
        code: "MT-39",
        name: "Paola",
        slug: "paola",
      }),
      Object.freeze<IProvince>({
        code: "MT-40",
        name: "Pembroke",
        slug: "pembroke",
      }),
      Object.freeze<IProvince>({
        code: "MT-41",
        name: "Piet\u00e0",
        slug: "pieta",
      }),
      Object.freeze<IProvince>({
        code: "MT-42",
        name: "Qala",
        slug: "qala",
      }),
      Object.freeze<IProvince>({
        code: "MT-43",
        name: "Qormi",
        slug: "qormi",
      }),
      Object.freeze<IProvince>({
        code: "MT-44",
        name: "Qrendi",
        slug: "qrendi",
      }),
      Object.freeze<IProvince>({
        code: "MT-45",
        name: "Rabat Gozo",
        slug: "rabat-gozo",
      }),
      Object.freeze<IProvince>({
        code: "MT-46",
        name: "Rabat Malta",
        slug: "rabat-malta",
      }),
      Object.freeze<IProvince>({
        code: "MT-47",
        name: "Safi",
        slug: "safi",
      }),
      Object.freeze<IProvince>({
        code: "MT-48",
        name: "Saint Julian\u2019s",
        slug: "saint-julians",
      }),
      Object.freeze<IProvince>({
        code: "MT-49",
        name: "Saint John",
        slug: "saint-john",
      }),
      Object.freeze<IProvince>({
        code: "MT-50",
        name: "Saint Lawrence",
        slug: "saint-lawrence",
      }),
      Object.freeze<IProvince>({
        code: "MT-51",
        name: "Saint Paul\u2019s Bay",
        slug: "saint-pauls-bay",
      }),
      Object.freeze<IProvince>({
        code: "MT-52",
        name: "Sannat",
        slug: "sannat",
      }),
      Object.freeze<IProvince>({
        code: "MT-53",
        name: "Saint Lucia\u2019s",
        slug: "saint-lucias",
      }),
      Object.freeze<IProvince>({
        code: "MT-54",
        name: "Santa Venera",
        slug: "santa-venera",
      }),
      Object.freeze<IProvince>({
        code: "MT-55",
        name: "Si\u0121\u0121iewi",
        slug: "siggiewi",
      }),
      Object.freeze<IProvince>({
        code: "MT-56",
        name: "Sliema",
        slug: "sliema",
      }),
      Object.freeze<IProvince>({
        code: "MT-57",
        name: "Swieqi",
        slug: "swieqi",
      }),
      Object.freeze<IProvince>({
        code: "MT-58",
        name: "Ta\u2019 Xbiex",
        slug: "ta-xbiex",
      }),
      Object.freeze<IProvince>({
        code: "MT-59",
        name: "Tarxien",
        slug: "tarxien",
      }),
      Object.freeze<IProvince>({
        code: "MT-60",
        name: "Valletta",
        slug: "valletta",
      }),
      Object.freeze<IProvince>({
        code: "MT-61",
        name: "Xag\u0127ra",
        slug: "xagra",
      }),
      Object.freeze<IProvince>({
        code: "MT-62",
        name: "Xewkija",
        slug: "xewkija",
      }),
      Object.freeze<IProvince>({
        code: "MT-63",
        name: "Xg\u0127ajra",
        slug: "xgajra",
      }),
      Object.freeze<IProvince>({
        code: "MT-64",
        name: "\u017babbar",
        slug: "zabbar",
      }),
      Object.freeze<IProvince>({
        code: "MT-65",
        name: "\u017bebbu\u0121 Gozo",
        slug: "zebbug-gozo",
      }),
      Object.freeze<IProvince>({
        code: "MT-66",
        name: "\u017bebbu\u0121 Malta",
        slug: "zebbug-malta",
      }),
      Object.freeze<IProvince>({
        code: "MT-67",
        name: "\u017bejtun",
        slug: "zejtun",
      }),
      Object.freeze<IProvince>({
        code: "MT-68",
        name: "\u017burrieq",
        slug: "zurrieq",
      }),
    ],
  }),
  MH: Object.freeze<ICountry>({
    code: "MH",
    currency: CURRENCIES.USD,
    name: "Marshall Islands",
    nameWithArticle: "Marshall Islands",
    provinces: [
      Object.freeze<IProvince>({
        code: "MH-ALK",
        name: "Ailuk",
        slug: "ailuk",
      }),
      Object.freeze<IProvince>({
        code: "MH-ALL",
        name: "Ailinglaplap",
        slug: "ailinglaplap",
      }),
      Object.freeze<IProvince>({
        code: "MH-ARN",
        name: "Arno",
        slug: "arno",
      }),
      Object.freeze<IProvince>({
        code: "MH-AUR",
        name: "Aur",
        slug: "aur",
      }),
      Object.freeze<IProvince>({
        code: "MH-EBO",
        name: "Ebon",
        slug: "ebon",
      }),
      Object.freeze<IProvince>({
        code: "MH-ENI",
        name: "Enewetak and Ujelang",
        slug: "enewetak-and-ujelang",
      }),
      Object.freeze<IProvince>({
        code: "MH-JAB",
        name: "Jabat",
        slug: "jabat",
      }),
      Object.freeze<IProvince>({
        code: "MH-JAL",
        name: "Jaluit",
        slug: "jaluit",
      }),
      Object.freeze<IProvince>({
        code: "MH-KIL",
        name: "Bikini and Kili",
        slug: "bikini-and-kili",
      }),
      Object.freeze<IProvince>({
        code: "MH-KWA",
        name: "Kwajalein",
        slug: "kwajalein",
      }),
      Object.freeze<IProvince>({
        code: "MH-LAE",
        name: "Lae",
        slug: "lae",
      }),
      Object.freeze<IProvince>({
        code: "MH-LIB",
        name: "Lib",
        slug: "lib",
      }),
      Object.freeze<IProvince>({
        code: "MH-LIK",
        name: "Likiep",
        slug: "likiep",
      }),
      Object.freeze<IProvince>({
        code: "MH-L",
        name: "Ralik chain",
        slug: "ralik-chain",
      }),
      Object.freeze<IProvince>({
        code: "MH-MAJ",
        name: "Majuro",
        slug: "majuro",
      }),
      Object.freeze<IProvince>({
        code: "MH-MAL",
        name: "Maloelap",
        slug: "maloelap",
      }),
      Object.freeze<IProvince>({
        code: "MH-MEJ",
        name: "Mejit",
        slug: "mejit",
      }),
      Object.freeze<IProvince>({
        code: "MH-MIL",
        name: "Mili",
        slug: "mili",
      }),
      Object.freeze<IProvince>({
        code: "MH-NMK",
        name: "Namdrik",
        slug: "namdrik",
      }),
      Object.freeze<IProvince>({
        code: "MH-NMU",
        name: "Namu",
        slug: "namu",
      }),
      Object.freeze<IProvince>({
        code: "MH-RON",
        name: "Rongelap",
        slug: "rongelap",
      }),
      Object.freeze<IProvince>({
        code: "MH-T",
        name: "Ratak chain",
        slug: "ratak-chain",
      }),
      Object.freeze<IProvince>({
        code: "MH-UJA",
        name: "Ujae",
        slug: "ujae",
      }),
      Object.freeze<IProvince>({
        code: "MH-UTI",
        name: "Utrik",
        slug: "utrik",
      }),
      Object.freeze<IProvince>({
        code: "MH-WTH",
        name: "Wotho",
        slug: "wotho",
      }),
      Object.freeze<IProvince>({
        code: "MH-WTJ",
        name: "Wotje",
        slug: "wotje",
      }),
    ],
  }),
  MQ: Object.freeze<ICountry>({
    code: "MQ",
    currency: CURRENCIES.EUR,
    name: "Martinique",
    nameWithArticle: "Martinique",
    provinces: [],
  }),
  MR: Object.freeze<ICountry>({
    code: "MR",
    currency: CURRENCIES.MRU,
    name: "Mauritania",
    nameWithArticle: "Mauritania",
    provinces: [
      Object.freeze<IProvince>({
        code: "MR-01",
        name: "Hodh ech Chargui",
        slug: "hodh-ech-chargui",
      }),
      Object.freeze<IProvince>({
        code: "MR-02",
        name: "Hodh el Gharbi",
        slug: "hodh-el-gharbi",
      }),
      Object.freeze<IProvince>({
        code: "MR-03",
        name: "Assaba",
        slug: "assaba",
      }),
      Object.freeze<IProvince>({
        code: "MR-04",
        name: "Gorgol",
        slug: "gorgol",
      }),
      Object.freeze<IProvince>({
        code: "MR-05",
        name: "Brakna",
        slug: "brakna",
      }),
      Object.freeze<IProvince>({
        code: "MR-06",
        name: "Trarza",
        slug: "trarza",
      }),
      Object.freeze<IProvince>({
        code: "MR-07",
        name: "Adrar",
        slug: "adrar",
      }),
      Object.freeze<IProvince>({
        code: "MR-08",
        name: "Dakhlet Nou\u00e2dhibou",
        slug: "dakhlet-nouadhibou",
      }),
      Object.freeze<IProvince>({
        code: "MR-09",
        name: "Tagant",
        slug: "tagant",
      }),
      Object.freeze<IProvince>({
        code: "MR-10",
        name: "Guidimaka",
        slug: "guidimaka",
      }),
      Object.freeze<IProvince>({
        code: "MR-11",
        name: "Tiris Zemmour",
        slug: "tiris-zemmour",
      }),
      Object.freeze<IProvince>({
        code: "MR-12",
        name: "Inchiri",
        slug: "inchiri",
      }),
    ],
  }),
  MU: Object.freeze<ICountry>({
    code: "MU",
    currency: CURRENCIES.MUR,
    name: "Mauritius",
    nameWithArticle: "Mauritius",
    provinces: [
      Object.freeze<IProvince>({
        code: "MU-AG",
        name: "Agalega Islands",
        slug: "agalega-islands",
      }),
      Object.freeze<IProvince>({
        code: "MU-BL",
        name: "Black River",
        slug: "black-river",
      }),
      Object.freeze<IProvince>({
        code: "MU-CC",
        name: "Cargados Carajos Shoals",
        slug: "cargados-carajos-shoals",
      }),
      Object.freeze<IProvince>({
        code: "MU-FL",
        name: "Flacq",
        slug: "flacq",
      }),
      Object.freeze<IProvince>({
        code: "MU-GP",
        name: "Grand Port",
        slug: "grand-port",
      }),
      Object.freeze<IProvince>({
        code: "MU-MO",
        name: "Moka",
        slug: "moka",
      }),
      Object.freeze<IProvince>({
        code: "MU-PA",
        name: "Pamplemousses",
        slug: "pamplemousses",
      }),
      Object.freeze<IProvince>({
        code: "MU-PL",
        name: "Port Louis",
        slug: "port-louis",
      }),
      Object.freeze<IProvince>({
        code: "MU-PW",
        name: "Plaines Wilhems",
        slug: "plaines-wilhems",
      }),
      Object.freeze<IProvince>({
        code: "MU-RO",
        name: "Rodrigues Island",
        slug: "rodrigues-island",
      }),
      Object.freeze<IProvince>({
        code: "MU-RR",
        name: "Rivi\u00e8re du Rempart",
        slug: "riviere-du-rempart",
      }),
      Object.freeze<IProvince>({
        code: "MU-SA",
        name: "Savanne",
        slug: "savanne",
      }),
    ],
  }),
  YT: Object.freeze<ICountry>({
    code: "YT",
    currency: CURRENCIES.EUR,
    name: "Mayotte",
    nameWithArticle: "Mayotte",
    provinces: [],
  }),
  MX: Object.freeze<ICountry>({
    code: "MX",
    currency: CURRENCIES.MXN,
    name: "Mexico",
    nameWithArticle: "Mexico",
    provinces: [
      Object.freeze<IProvince>({
        code: "MX-AGU",
        name: "Aguascalientes",
        slug: "aguascalientes",
      }),
      Object.freeze<IProvince>({
        code: "MX-BCN",
        name: "Baja California",
        slug: "baja-california",
      }),
      Object.freeze<IProvince>({
        code: "MX-BCS",
        name: "Baja California Sur",
        slug: "baja-california-sur",
      }),
      Object.freeze<IProvince>({
        code: "MX-CAM",
        name: "Campeche",
        slug: "campeche",
      }),
      Object.freeze<IProvince>({
        code: "MX-CHH",
        name: "Chihuahua",
        slug: "chihuahua",
      }),
      Object.freeze<IProvince>({
        code: "MX-CHP",
        name: "Chiapas",
        slug: "chiapas",
      }),
      Object.freeze<IProvince>({
        code: "MX-COA",
        name: "Coahuila de Zaragoza",
        slug: "coahuila-de-zaragoza",
      }),
      Object.freeze<IProvince>({
        code: "MX-COL",
        name: "Colima",
        slug: "colima",
      }),
      Object.freeze<IProvince>({
        code: "MX-CMX",
        name: "Ciudad de M\u00e9xico",
        slug: "ciudad-de-mexico",
      }),
      Object.freeze<IProvince>({
        code: "MX-DUR",
        name: "Durango",
        slug: "durango",
      }),
      Object.freeze<IProvince>({
        code: "MX-GRO",
        name: "Guerrero",
        slug: "guerrero",
      }),
      Object.freeze<IProvince>({
        code: "MX-GUA",
        name: "Guanajuato",
        slug: "guanajuato",
      }),
      Object.freeze<IProvince>({
        code: "MX-HID",
        name: "Hidalgo",
        slug: "hidalgo",
      }),
      Object.freeze<IProvince>({
        code: "MX-JAL",
        name: "Jalisco",
        slug: "jalisco",
      }),
      Object.freeze<IProvince>({
        code: "MX-MEX",
        name: "M\u00e9xico",
        slug: "mexico",
      }),
      Object.freeze<IProvince>({
        code: "MX-MIC",
        name: "Michoac\u00e1n de Ocampo",
        slug: "michoacan-de-ocampo",
      }),
      Object.freeze<IProvince>({
        code: "MX-MOR",
        name: "Morelos",
        slug: "morelos",
      }),
      Object.freeze<IProvince>({
        code: "MX-NAY",
        name: "Nayarit",
        slug: "nayarit",
      }),
      Object.freeze<IProvince>({
        code: "MX-NLE",
        name: "Nuevo Le\u00f3n",
        slug: "nuevo-leon",
      }),
      Object.freeze<IProvince>({
        code: "MX-OAX",
        name: "Oaxaca",
        slug: "oaxaca",
      }),
      Object.freeze<IProvince>({
        code: "MX-PUE",
        name: "Puebla",
        slug: "puebla",
      }),
      Object.freeze<IProvince>({
        code: "MX-QUE",
        name: "Quer\u00e9taro",
        slug: "queretaro",
      }),
      Object.freeze<IProvince>({
        code: "MX-ROO",
        name: "Quintana Roo",
        slug: "quintana-roo",
      }),
      Object.freeze<IProvince>({
        code: "MX-SIN",
        name: "Sinaloa",
        slug: "sinaloa",
      }),
      Object.freeze<IProvince>({
        code: "MX-SLP",
        name: "San Luis Potos\u00ed",
        slug: "san-luis-potosi",
      }),
      Object.freeze<IProvince>({
        code: "MX-SON",
        name: "Sonora",
        slug: "sonora",
      }),
      Object.freeze<IProvince>({
        code: "MX-TAB",
        name: "Tabasco",
        slug: "tabasco",
      }),
      Object.freeze<IProvince>({
        code: "MX-TAM",
        name: "Tamaulipas",
        slug: "tamaulipas",
      }),
      Object.freeze<IProvince>({
        code: "MX-TLA",
        name: "Tlaxcala",
        slug: "tlaxcala",
      }),
      Object.freeze<IProvince>({
        code: "MX-VER",
        name: "Veracruz de Ignacio de la Llave",
        slug: "veracruz-de-ignacio-de-la-llave",
      }),
      Object.freeze<IProvince>({
        code: "MX-YUC",
        name: "Yucat\u00e1n",
        slug: "yucatan",
      }),
      Object.freeze<IProvince>({
        code: "MX-ZAC",
        name: "Zacatecas",
        slug: "zacatecas",
      }),
    ],
  }),
  FM: Object.freeze<ICountry>({
    code: "FM",
    currency: CURRENCIES.USD,
    name: "Micronesia, Federated States of",
    nameWithArticle: "Micronesia, Federated States of",
    provinces: [
      Object.freeze<IProvince>({
        code: "FM-KSA",
        name: "Kosrae",
        slug: "kosrae",
      }),
      Object.freeze<IProvince>({
        code: "FM-PNI",
        name: "Pohnpei",
        slug: "pohnpei",
      }),
      Object.freeze<IProvince>({
        code: "FM-TRK",
        name: "Chuuk",
        slug: "chuuk",
      }),
      Object.freeze<IProvince>({
        code: "FM-YAP",
        name: "Yap",
        slug: "yap",
      }),
    ],
  }),
  MD: Object.freeze<ICountry>({
    code: "MD",
    currency: CURRENCIES.MDL,
    name: "Moldova, Republic of",
    nameWithArticle: "Moldova, The Republic of",
    provinces: [
      Object.freeze<IProvince>({
        code: "MD-AN",
        name: "Anenii Noi",
        slug: "anenii-noi",
      }),
      Object.freeze<IProvince>({
        code: "MD-BA",
        name: "B\u0103l\u0163i",
        slug: "balti",
      }),
      Object.freeze<IProvince>({
        code: "MD-BD",
        name: "Bender",
        slug: "bender",
      }),
      Object.freeze<IProvince>({
        code: "MD-BR",
        name: "Briceni",
        slug: "briceni",
      }),
      Object.freeze<IProvince>({
        code: "MD-BS",
        name: "Basarabeasca",
        slug: "basarabeasca",
      }),
      Object.freeze<IProvince>({
        code: "MD-CA",
        name: "Cahul",
        slug: "cahul",
      }),
      Object.freeze<IProvince>({
        code: "MD-CL",
        name: "C\u0103l\u0103ra\u015fi",
        slug: "calarasi",
      }),
      Object.freeze<IProvince>({
        code: "MD-CM",
        name: "Cimi\u015flia",
        slug: "cimislia",
      }),
      Object.freeze<IProvince>({
        code: "MD-CR",
        name: "Criuleni",
        slug: "criuleni",
      }),
      Object.freeze<IProvince>({
        code: "MD-CS",
        name: "C\u0103u\u015feni",
        slug: "causeni",
      }),
      Object.freeze<IProvince>({
        code: "MD-CT",
        name: "Cantemir",
        slug: "cantemir",
      }),
      Object.freeze<IProvince>({
        code: "MD-CU",
        name: "Chi\u015fin\u0103u",
        slug: "chisinau",
      }),
      Object.freeze<IProvince>({
        code: "MD-DO",
        name: "Dondu\u015feni",
        slug: "donduseni",
      }),
      Object.freeze<IProvince>({
        code: "MD-DR",
        name: "Drochia",
        slug: "drochia",
      }),
      Object.freeze<IProvince>({
        code: "MD-DU",
        name: "Dub\u0103sari",
        slug: "dubasari",
      }),
      Object.freeze<IProvince>({
        code: "MD-ED",
        name: "Edine\u0163",
        slug: "edinet",
      }),
      Object.freeze<IProvince>({
        code: "MD-FA",
        name: "F\u0103le\u015fti",
        slug: "falesti",
      }),
      Object.freeze<IProvince>({
        code: "MD-FL",
        name: "Flore\u015fti",
        slug: "floresti",
      }),
      Object.freeze<IProvince>({
        code: "MD-GA",
        name: "G\u0103g\u0103uzia, Unitatea teritorial\u0103 autonom\u0103",
        slug: "gagauzia-unitatea-teritoriala-autonoma",
      }),
      Object.freeze<IProvince>({
        code: "MD-GL",
        name: "Glodeni",
        slug: "glodeni",
      }),
      Object.freeze<IProvince>({
        code: "MD-HI",
        name: "H\u00eence\u015fti",
        slug: "hincesti",
      }),
      Object.freeze<IProvince>({
        code: "MD-IA",
        name: "Ialoveni",
        slug: "ialoveni",
      }),
      Object.freeze<IProvince>({
        code: "MD-LE",
        name: "Leova",
        slug: "leova",
      }),
      Object.freeze<IProvince>({
        code: "MD-NI",
        name: "Nisporeni",
        slug: "nisporeni",
      }),
      Object.freeze<IProvince>({
        code: "MD-OC",
        name: "Ocni\u0163a",
        slug: "ocnita",
      }),
      Object.freeze<IProvince>({
        code: "MD-OR",
        name: "Orhei",
        slug: "orhei",
      }),
      Object.freeze<IProvince>({
        code: "MD-RE",
        name: "Rezina",
        slug: "rezina",
      }),
      Object.freeze<IProvince>({
        code: "MD-RI",
        name: "R\u00ee\u015fcani",
        slug: "riscani",
      }),
      Object.freeze<IProvince>({
        code: "MD-SD",
        name: "\u015eold\u0103ne\u015fti",
        slug: "soldanesti",
      }),
      Object.freeze<IProvince>({
        code: "MD-SI",
        name: "S\u00eengerei",
        slug: "singerei",
      }),
      Object.freeze<IProvince>({
        code: "MD-SN",
        name: "St\u00eenga Nistrului, unitatea teritorial\u0103 din",
        slug: "stinga-nistrului-unitatea-teritoriala-din",
      }),
      Object.freeze<IProvince>({
        code: "MD-SO",
        name: "Soroca",
        slug: "soroca",
      }),
      Object.freeze<IProvince>({
        code: "MD-ST",
        name: "Str\u0103\u015feni",
        slug: "straseni",
      }),
      Object.freeze<IProvince>({
        code: "MD-SV",
        name: "\u015etefan Vod\u0103",
        slug: "stefan-voda",
      }),
      Object.freeze<IProvince>({
        code: "MD-TA",
        name: "Taraclia",
        slug: "taraclia",
      }),
      Object.freeze<IProvince>({
        code: "MD-TE",
        name: "Telene\u015fti",
        slug: "telenesti",
      }),
      Object.freeze<IProvince>({
        code: "MD-UN",
        name: "Ungheni",
        slug: "ungheni",
      }),
    ],
  }),
  MC: Object.freeze<ICountry>({
    code: "MC",
    currency: CURRENCIES.EUR,
    name: "Monaco",
    nameWithArticle: "Monaco",
    provinces: [
      Object.freeze<IProvince>({
        code: "MC-CL",
        name: "La Colle",
        slug: "la-colle",
      }),
      Object.freeze<IProvince>({
        code: "MC-CO",
        name: "La Condamine",
        slug: "la-condamine",
      }),
      Object.freeze<IProvince>({
        code: "MC-FO",
        name: "Fontvieille",
        slug: "fontvieille",
      }),
      Object.freeze<IProvince>({
        code: "MC-GA",
        name: "La Gare",
        slug: "la-gare",
      }),
      Object.freeze<IProvince>({
        code: "MC-JE",
        name: "Jardin Exotique",
        slug: "jardin-exotique",
      }),
      Object.freeze<IProvince>({
        code: "MC-LA",
        name: "Larvotto",
        slug: "larvotto",
      }),
      Object.freeze<IProvince>({
        code: "MC-MA",
        name: "Malbousquet",
        slug: "malbousquet",
      }),
      Object.freeze<IProvince>({
        code: "MC-MC",
        name: "Monte-Carlo",
        slug: "monte-carlo",
      }),
      Object.freeze<IProvince>({
        code: "MC-MG",
        name: "Moneghetti",
        slug: "moneghetti",
      }),
      Object.freeze<IProvince>({
        code: "MC-MO",
        name: "Monaco-Ville",
        slug: "monaco-ville",
      }),
      Object.freeze<IProvince>({
        code: "MC-MU",
        name: "Moulins",
        slug: "moulins",
      }),
      Object.freeze<IProvince>({
        code: "MC-PH",
        name: "Port-Hercule",
        slug: "port-hercule",
      }),
      Object.freeze<IProvince>({
        code: "MC-SD",
        name: "Sainte-D\u00e9vote",
        slug: "sainte-devote",
      }),
      Object.freeze<IProvince>({
        code: "MC-SO",
        name: "La Source",
        slug: "la-source",
      }),
      Object.freeze<IProvince>({
        code: "MC-SP",
        name: "Sp\u00e9lugues",
        slug: "spelugues",
      }),
      Object.freeze<IProvince>({
        code: "MC-SR",
        name: "Saint-Roman",
        slug: "saint-roman",
      }),
      Object.freeze<IProvince>({
        code: "MC-VR",
        name: "Vallon de la Rousse",
        slug: "vallon-de-la-rousse",
      }),
    ],
  }),
  MN: Object.freeze<ICountry>({
    code: "MN",
    currency: CURRENCIES.MNT,
    name: "Mongolia",
    nameWithArticle: "Mongolia",
    provinces: [
      Object.freeze<IProvince>({
        code: "MN-035",
        name: "Orhon",
        slug: "orhon",
      }),
      Object.freeze<IProvince>({
        code: "MN-037",
        name: "Darhan uul",
        slug: "darhan-uul",
      }),
      Object.freeze<IProvince>({
        code: "MN-039",
        name: "Hentiy",
        slug: "hentiy",
      }),
      Object.freeze<IProvince>({
        code: "MN-041",
        name: "H\u00f6vsg\u00f6l",
        slug: "hovsgol",
      }),
      Object.freeze<IProvince>({
        code: "MN-043",
        name: "Hovd",
        slug: "hovd",
      }),
      Object.freeze<IProvince>({
        code: "MN-046",
        name: "Uvs",
        slug: "uvs",
      }),
      Object.freeze<IProvince>({
        code: "MN-047",
        name: "T\u00f6v",
        slug: "tov",
      }),
      Object.freeze<IProvince>({
        code: "MN-049",
        name: "Selenge",
        slug: "selenge",
      }),
      Object.freeze<IProvince>({
        code: "MN-051",
        name: "S\u00fchbaatar",
        slug: "suhbaatar",
      }),
      Object.freeze<IProvince>({
        code: "MN-053",
        name: "\u00d6mn\u00f6gov\u012d",
        slug: "omnogovi",
      }),
      Object.freeze<IProvince>({
        code: "MN-055",
        name: "\u00d6v\u00f6rhangay",
        slug: "ovorhangay",
      }),
      Object.freeze<IProvince>({
        code: "MN-057",
        name: "Dzavhan",
        slug: "dzavhan",
      }),
      Object.freeze<IProvince>({
        code: "MN-059",
        name: "Dundgov\u012d",
        slug: "dundgovi",
      }),
      Object.freeze<IProvince>({
        code: "MN-061",
        name: "Dornod",
        slug: "dornod",
      }),
      Object.freeze<IProvince>({
        code: "MN-063",
        name: "Dornogov\u012d",
        slug: "dornogovi",
      }),
      Object.freeze<IProvince>({
        code: "MN-064",
        name: "Gov\u012d-S\u00fcmber",
        slug: "govi-sumber",
      }),
      Object.freeze<IProvince>({
        code: "MN-065",
        name: "Gov\u012d-Altay",
        slug: "govi-altay",
      }),
      Object.freeze<IProvince>({
        code: "MN-067",
        name: "Bulgan",
        slug: "bulgan",
      }),
      Object.freeze<IProvince>({
        code: "MN-069",
        name: "Bayanhongor",
        slug: "bayanhongor",
      }),
      Object.freeze<IProvince>({
        code: "MN-071",
        name: "Bayan-\u00d6lgiy",
        slug: "bayan-olgiy",
      }),
      Object.freeze<IProvince>({
        code: "MN-073",
        name: "Arhangay",
        slug: "arhangay",
      }),
      Object.freeze<IProvince>({
        code: "MN-1",
        name: "Ulaanbaatar",
        slug: "ulaanbaatar",
      }),
    ],
  }),
  ME: Object.freeze<ICountry>({
    code: "ME",
    currency: CURRENCIES.EUR,
    name: "Montenegro",
    nameWithArticle: "Montenegro",
    provinces: [
      Object.freeze<IProvince>({
        code: "ME-01",
        name: "Andrijevica",
        slug: "andrijevica",
      }),
      Object.freeze<IProvince>({
        code: "ME-02",
        name: "Bar",
        slug: "bar",
      }),
      Object.freeze<IProvince>({
        code: "ME-03",
        name: "Berane",
        slug: "berane",
      }),
      Object.freeze<IProvince>({
        code: "ME-04",
        name: "Bijelo Polje",
        slug: "bijelo-polje",
      }),
      Object.freeze<IProvince>({
        code: "ME-05",
        name: "Budva",
        slug: "budva",
      }),
      Object.freeze<IProvince>({
        code: "ME-06",
        name: "Cetinje",
        slug: "cetinje",
      }),
      Object.freeze<IProvince>({
        code: "ME-07",
        name: "Danilovgrad",
        slug: "danilovgrad",
      }),
      Object.freeze<IProvince>({
        code: "ME-08",
        name: "Herceg-Novi",
        slug: "herceg-novi",
      }),
      Object.freeze<IProvince>({
        code: "ME-09",
        name: "Kola\u0161in",
        slug: "kolasin",
      }),
      Object.freeze<IProvince>({
        code: "ME-10",
        name: "Kotor",
        slug: "kotor",
      }),
      Object.freeze<IProvince>({
        code: "ME-11",
        name: "Mojkovac",
        slug: "mojkovac",
      }),
      Object.freeze<IProvince>({
        code: "ME-12",
        name: "Nik\u0161i\u0107",
        slug: "niksic",
      }),
      Object.freeze<IProvince>({
        code: "ME-13",
        name: "Plav",
        slug: "plav",
      }),
      Object.freeze<IProvince>({
        code: "ME-14",
        name: "Pljevlja",
        slug: "pljevlja",
      }),
      Object.freeze<IProvince>({
        code: "ME-15",
        name: "Plu\u017eine",
        slug: "pluzine",
      }),
      Object.freeze<IProvince>({
        code: "ME-16",
        name: "Podgorica",
        slug: "podgorica",
      }),
      Object.freeze<IProvince>({
        code: "ME-17",
        name: "Ro\u017eaje",
        slug: "rozaje",
      }),
      Object.freeze<IProvince>({
        code: "ME-18",
        name: "\u0160avnik",
        slug: "savnik",
      }),
      Object.freeze<IProvince>({
        code: "ME-19",
        name: "Tivat",
        slug: "tivat",
      }),
      Object.freeze<IProvince>({
        code: "ME-20",
        name: "Ulcinj",
        slug: "ulcinj",
      }),
      Object.freeze<IProvince>({
        code: "ME-21",
        name: "\u017dabljak",
        slug: "zabljak",
      }),
      Object.freeze<IProvince>({
        code: "ME-22",
        name: "Gusinje",
        slug: "gusinje",
      }),
      Object.freeze<IProvince>({
        code: "ME-23",
        name: "Petnjica",
        slug: "petnjica",
      }),
    ],
  }),
  MS: Object.freeze<ICountry>({
    code: "MS",
    currency: CURRENCIES.XCD,
    name: "Montserrat",
    nameWithArticle: "Montserrat",
    provinces: [],
  }),
  MA: Object.freeze<ICountry>({
    code: "MA",
    currency: CURRENCIES.MAD,
    name: "Morocco",
    nameWithArticle: "Morocco",
    provinces: [
      Object.freeze<IProvince>({
        code: "MA-01",
        name: "Tanger-T\u00e9touan",
        slug: "tanger-tetouan",
      }),
      Object.freeze<IProvince>({
        code: "MA-02",
        name: "Gharb-Chrarda-Beni Hssen",
        slug: "gharb-chrarda-beni-hssen",
      }),
      Object.freeze<IProvince>({
        code: "MA-03",
        name: "Taza-Al Hoceima-Taounate",
        slug: "taza-al-hoceima-taounate",
      }),
      Object.freeze<IProvince>({
        code: "MA-04",
        name: "L'Oriental",
        slug: "loriental",
      }),
      Object.freeze<IProvince>({
        code: "MA-05",
        name: "F\u00e8s-Boulemane",
        slug: "fes-boulemane",
      }),
      Object.freeze<IProvince>({
        code: "MA-06",
        name: "Mekn\u00e8s-Tafilalet",
        slug: "meknes-tafilalet",
      }),
      Object.freeze<IProvince>({
        code: "MA-07",
        name: "Rabat-Sal\u00e9-Zemmour-Zaer",
        slug: "rabat-sale-zemmour-zaer",
      }),
      Object.freeze<IProvince>({
        code: "MA-08",
        name: "Grand Casablanca",
        slug: "grand-casablanca",
      }),
      Object.freeze<IProvince>({
        code: "MA-09",
        name: "Chaouia-Ouardigha",
        slug: "chaouia-ouardigha",
      }),
      Object.freeze<IProvince>({
        code: "MA-10",
        name: "Doukkala-Abda",
        slug: "doukkala-abda",
      }),
      Object.freeze<IProvince>({
        code: "MA-11",
        name: "Marrakech-Tensift-Al Haouz",
        slug: "marrakech-tensift-al-haouz",
      }),
      Object.freeze<IProvince>({
        code: "MA-12",
        name: "Tadla-Azilal",
        slug: "tadla-azilal",
      }),
      Object.freeze<IProvince>({
        code: "MA-13",
        name: "Sous-Massa-Draa",
        slug: "sous-massa-draa",
      }),
      Object.freeze<IProvince>({
        code: "MA-14",
        name: "Guelmim-Es Semara",
        slug: "guelmim-es-semara",
      }),
      Object.freeze<IProvince>({
        code: "MA-15",
        name: "La\u00e2youne-Boujdour-Sakia el Hamra",
        slug: "laayoune-boujdour-sakia-el-hamra",
      }),
      Object.freeze<IProvince>({
        code: "MA-16",
        name: "Oued ed Dahab-Lagouira",
        slug: "oued-ed-dahab-lagouira",
      }),
    ],
  }),
  MZ: Object.freeze<ICountry>({
    code: "MZ",
    currency: CURRENCIES.MZN,
    name: "Mozambique",
    nameWithArticle: "Mozambique",
    provinces: [
      Object.freeze<IProvince>({
        code: "MZ-A",
        name: "Niassa",
        slug: "niassa",
      }),
      Object.freeze<IProvince>({
        code: "MZ-B",
        name: "Manica",
        slug: "manica",
      }),
      Object.freeze<IProvince>({
        code: "MZ-G",
        name: "Gaza",
        slug: "gaza",
      }),
      Object.freeze<IProvince>({
        code: "MZ-I",
        name: "Inhambane",
        slug: "inhambane",
      }),
      Object.freeze<IProvince>({
        code: "MZ-L",
        name: "Maputo",
        slug: "maputo",
      }),
      Object.freeze<IProvince>({
        code: "MZ-MPM",
        name: "Maputo, City",
        slug: "maputo-city",
      }),
      Object.freeze<IProvince>({
        code: "MZ-N",
        name: "Nampula",
        slug: "nampula",
      }),
      Object.freeze<IProvince>({
        code: "MZ-P",
        name: "Cabo Delgado",
        slug: "cabo-delgado",
      }),
      Object.freeze<IProvince>({
        code: "MZ-Q",
        name: "Zamb\u00e9zia",
        slug: "zambezia",
      }),
      Object.freeze<IProvince>({
        code: "MZ-S",
        name: "Sofala",
        slug: "sofala",
      }),
      Object.freeze<IProvince>({
        code: "MZ-T",
        name: "Tete",
        slug: "tete",
      }),
    ],
  }),
  MM: Object.freeze<ICountry>({
    code: "MM",
    currency: CURRENCIES.MMK,
    name: "Myanmar",
    nameWithArticle: "Myanmar",
    provinces: [
      Object.freeze<IProvince>({
        code: "MM-01",
        name: "Sagaing",
        slug: "sagaing",
      }),
      Object.freeze<IProvince>({
        code: "MM-02",
        name: "Bago",
        slug: "bago",
      }),
      Object.freeze<IProvince>({
        code: "MM-03",
        name: "Magway",
        slug: "magway",
      }),
      Object.freeze<IProvince>({
        code: "MM-04",
        name: "Mandalay",
        slug: "mandalay",
      }),
      Object.freeze<IProvince>({
        code: "MM-05",
        name: "Taninthayi",
        slug: "taninthayi",
      }),
      Object.freeze<IProvince>({
        code: "MM-06",
        name: "Yangon",
        slug: "yangon",
      }),
      Object.freeze<IProvince>({
        code: "MM-07",
        name: "Ayeyawady",
        slug: "ayeyawady",
      }),
      Object.freeze<IProvince>({
        code: "MM-11",
        name: "Kachin",
        slug: "kachin",
      }),
      Object.freeze<IProvince>({
        code: "MM-12",
        name: "Kayah",
        slug: "kayah",
      }),
      Object.freeze<IProvince>({
        code: "MM-13",
        name: "Kayin",
        slug: "kayin",
      }),
      Object.freeze<IProvince>({
        code: "MM-14",
        name: "Chin",
        slug: "chin",
      }),
      Object.freeze<IProvince>({
        code: "MM-15",
        name: "Mon",
        slug: "mon",
      }),
      Object.freeze<IProvince>({
        code: "MM-16",
        name: "Rakhine",
        slug: "rakhine",
      }),
      Object.freeze<IProvince>({
        code: "MM-17",
        name: "Shan",
        slug: "shan",
      }),
      Object.freeze<IProvince>({
        code: "MM-18",
        name: "Nay Pyi Taw",
        slug: "nay-pyi-taw",
      }),
    ],
  }),
  NA: Object.freeze<ICountry>({
    code: "NA",
    currency: CURRENCIES.NAD,
    name: "Namibia",
    nameWithArticle: "Namibia",
    provinces: [
      Object.freeze<IProvince>({
        code: "NA-CA",
        name: "Zambezi",
        slug: "zambezi",
      }),
      Object.freeze<IProvince>({
        code: "NA-ER",
        name: "Erongo",
        slug: "erongo",
      }),
      Object.freeze<IProvince>({
        code: "NA-HA",
        name: "Hardap",
        slug: "hardap",
      }),
      Object.freeze<IProvince>({
        code: "NA-KA",
        name: "Karas",
        slug: "karas",
      }),
      Object.freeze<IProvince>({
        code: "NA-KE",
        name: "Kavango East",
        slug: "kavango-east",
      }),
      Object.freeze<IProvince>({
        code: "NA-KH",
        name: "Khomas",
        slug: "khomas",
      }),
      Object.freeze<IProvince>({
        code: "NA-KU",
        name: "Kunene",
        slug: "kunene",
      }),
      Object.freeze<IProvince>({
        code: "NA-KW",
        name: "Kavango West",
        slug: "kavango-west",
      }),
      Object.freeze<IProvince>({
        code: "NA-OD",
        name: "Otjozondjupa",
        slug: "otjozondjupa",
      }),
      Object.freeze<IProvince>({
        code: "NA-OH",
        name: "Omaheke",
        slug: "omaheke",
      }),
      Object.freeze<IProvince>({
        code: "NA-ON",
        name: "Oshana",
        slug: "oshana",
      }),
      Object.freeze<IProvince>({
        code: "NA-OS",
        name: "Omusati",
        slug: "omusati",
      }),
      Object.freeze<IProvince>({
        code: "NA-OT",
        name: "Oshikoto",
        slug: "oshikoto",
      }),
      Object.freeze<IProvince>({
        code: "NA-OW",
        name: "Ohangwena",
        slug: "ohangwena",
      }),
    ],
  }),
  NR: Object.freeze<ICountry>({
    code: "NR",
    currency: CURRENCIES.AUD,
    name: "Nauru",
    nameWithArticle: "Nauru",
    provinces: [
      Object.freeze<IProvince>({
        code: "NR-01",
        name: "Aiwo",
        slug: "aiwo",
      }),
      Object.freeze<IProvince>({
        code: "NR-02",
        name: "Anabar",
        slug: "anabar",
      }),
      Object.freeze<IProvince>({
        code: "NR-03",
        name: "Anetan",
        slug: "anetan",
      }),
      Object.freeze<IProvince>({
        code: "NR-04",
        name: "Anibare",
        slug: "anibare",
      }),
      Object.freeze<IProvince>({
        code: "NR-05",
        name: "Baiti",
        slug: "baiti",
      }),
      Object.freeze<IProvince>({
        code: "NR-06",
        name: "Boe",
        slug: "boe",
      }),
      Object.freeze<IProvince>({
        code: "NR-07",
        name: "Buada",
        slug: "buada",
      }),
      Object.freeze<IProvince>({
        code: "NR-08",
        name: "Denigomodu",
        slug: "denigomodu",
      }),
      Object.freeze<IProvince>({
        code: "NR-09",
        name: "Ewa",
        slug: "ewa",
      }),
      Object.freeze<IProvince>({
        code: "NR-10",
        name: "Ijuw",
        slug: "ijuw",
      }),
      Object.freeze<IProvince>({
        code: "NR-11",
        name: "Meneng",
        slug: "meneng",
      }),
      Object.freeze<IProvince>({
        code: "NR-12",
        name: "Nibok",
        slug: "nibok",
      }),
      Object.freeze<IProvince>({
        code: "NR-13",
        name: "Uaboe",
        slug: "uaboe",
      }),
      Object.freeze<IProvince>({
        code: "NR-14",
        name: "Yaren",
        slug: "yaren",
      }),
    ],
  }),
  NP: Object.freeze<ICountry>({
    code: "NP",
    currency: CURRENCIES.NPR,
    name: "Nepal",
    nameWithArticle: "Nepal",
    provinces: [
      Object.freeze<IProvince>({
        code: "NP-1",
        name: "Central",
        slug: "central",
      }),
      Object.freeze<IProvince>({
        code: "NP-2",
        name: "Madhya Pashchimanchal",
        slug: "madhya-pashchimanchal",
      }),
      Object.freeze<IProvince>({
        code: "NP-3",
        name: "Pashchimanchal",
        slug: "pashchimanchal",
      }),
      Object.freeze<IProvince>({
        code: "NP-4",
        name: "Eastern",
        slug: "eastern",
      }),
      Object.freeze<IProvince>({
        code: "NP-5",
        name: "Far Western",
        slug: "far-western",
      }),
      Object.freeze<IProvince>({
        code: "NP-BA",
        name: "Bagmati",
        slug: "bagmati",
      }),
      Object.freeze<IProvince>({
        code: "NP-BH",
        name: "Bheri",
        slug: "bheri",
      }),
      Object.freeze<IProvince>({
        code: "NP-DH",
        name: "Dhawalagiri",
        slug: "dhawalagiri",
      }),
      Object.freeze<IProvince>({
        code: "NP-GA",
        name: "Gandaki",
        slug: "gandaki",
      }),
      Object.freeze<IProvince>({
        code: "NP-JA",
        name: "Janakpur",
        slug: "janakpur",
      }),
      Object.freeze<IProvince>({
        code: "NP-KA",
        name: "Karnali",
        slug: "karnali",
      }),
      Object.freeze<IProvince>({
        code: "NP-KO",
        name: "Kosi",
        slug: "kosi",
      }),
      Object.freeze<IProvince>({
        code: "NP-LU",
        name: "Lumbini",
        slug: "lumbini",
      }),
      Object.freeze<IProvince>({
        code: "NP-MA",
        name: "Mahakali",
        slug: "mahakali",
      }),
      Object.freeze<IProvince>({
        code: "NP-ME",
        name: "Mechi",
        slug: "mechi",
      }),
      Object.freeze<IProvince>({
        code: "NP-NA",
        name: "Narayani",
        slug: "narayani",
      }),
      Object.freeze<IProvince>({
        code: "NP-RA",
        name: "Rapti",
        slug: "rapti",
      }),
      Object.freeze<IProvince>({
        code: "NP-SA",
        name: "Sagarmatha",
        slug: "sagarmatha",
      }),
      Object.freeze<IProvince>({
        code: "NP-SE",
        name: "Seti",
        slug: "seti",
      }),
    ],
  }),
  NL: Object.freeze<ICountry>({
    code: "NL",
    currency: CURRENCIES.EUR,
    name: "Netherlands",
    nameWithArticle: "Netherlands",
    provinces: [
      Object.freeze<IProvince>({
        code: "NL-DR",
        name: "Drenthe",
        slug: "drenthe",
      }),
      Object.freeze<IProvince>({
        code: "NL-FL",
        name: "Flevoland",
        slug: "flevoland",
      }),
      Object.freeze<IProvince>({
        code: "NL-FR",
        name: "Frysl\u00e2n",
        slug: "fryslan",
      }),
      Object.freeze<IProvince>({
        code: "NL-GE",
        name: "Gelderland",
        slug: "gelderland",
      }),
      Object.freeze<IProvince>({
        code: "NL-GR",
        name: "Groningen",
        slug: "groningen",
      }),
      Object.freeze<IProvince>({
        code: "NL-LI",
        name: "Limburg",
        slug: "limburg",
      }),
      Object.freeze<IProvince>({
        code: "NL-NB",
        name: "Noord-Brabant",
        slug: "noord-brabant",
      }),
      Object.freeze<IProvince>({
        code: "NL-NH",
        name: "Noord-Holland",
        slug: "noord-holland",
      }),
      Object.freeze<IProvince>({
        code: "NL-OV",
        name: "Overijssel",
        slug: "overijssel",
      }),
      Object.freeze<IProvince>({
        code: "NL-UT",
        name: "Utrecht",
        slug: "utrecht",
      }),
      Object.freeze<IProvince>({
        code: "NL-ZE",
        name: "Zeeland",
        slug: "zeeland",
      }),
      Object.freeze<IProvince>({
        code: "NL-ZH",
        name: "Zuid-Holland",
        slug: "zuid-holland",
      }),
    ],
  }),
  NC: Object.freeze<ICountry>({
    code: "NC",
    currency: CURRENCIES.XPF,
    name: "New Caledonia",
    nameWithArticle: "New Caledonia",
    provinces: [],
  }),
  NZ: Object.freeze<ICountry>({
    code: "NZ",
    currency: CURRENCIES.NZD,
    name: "New Zealand",
    nameWithArticle: "New Zealand",
    provinces: [
      Object.freeze<IProvince>({
        code: "NZ-AUK",
        name: "Auckland",
        slug: "auckland",
      }),
      Object.freeze<IProvince>({
        code: "NZ-BOP",
        name: "Bay of Plenty",
        slug: "bay-of-plenty",
      }),
      Object.freeze<IProvince>({
        code: "NZ-CAN",
        name: "Canterbury",
        slug: "canterbury",
      }),
      Object.freeze<IProvince>({
        code: "NZ-GIS",
        name: "Gisborne District",
        slug: "gisborne-district",
      }),
      Object.freeze<IProvince>({
        code: "NZ-HKB",
        name: "Hawke's Bay",
        slug: "hawkes-bay",
      }),
      Object.freeze<IProvince>({
        code: "NZ-MBH",
        name: "Marlborough District",
        slug: "marlborough-district",
      }),
      Object.freeze<IProvince>({
        code: "NZ-MWT",
        name: "Manawatu-Wanganui",
        slug: "manawatu-wanganui",
      }),
      Object.freeze<IProvince>({
        code: "NZ-NSN",
        name: "Nelson City",
        slug: "nelson-city",
      }),
      Object.freeze<IProvince>({
        code: "NZ-NTL",
        name: "Northland",
        slug: "northland",
      }),
      Object.freeze<IProvince>({
        code: "NZ-OTA",
        name: "Otago",
        slug: "otago",
      }),
      Object.freeze<IProvince>({
        code: "NZ-STL",
        name: "Southland",
        slug: "southland",
      }),
      Object.freeze<IProvince>({
        code: "NZ-TAS",
        name: "Tasman District",
        slug: "tasman-district",
      }),
      Object.freeze<IProvince>({
        code: "NZ-TKI",
        name: "Taranaki",
        slug: "taranaki",
      }),
      Object.freeze<IProvince>({
        code: "NZ-WGN",
        name: "Wellington",
        slug: "wellington",
      }),
      Object.freeze<IProvince>({
        code: "NZ-WKO",
        name: "Waikato",
        slug: "waikato",
      }),
      Object.freeze<IProvince>({
        code: "NZ-WTC",
        name: "West Coast",
        slug: "west-coast",
      }),
    ],
  }),
  NI: Object.freeze<ICountry>({
    code: "NI",
    currency: CURRENCIES.NIO,
    name: "Nicaragua",
    nameWithArticle: "Nicaragua",
    provinces: [
      Object.freeze<IProvince>({
        code: "NI-AN",
        name: "Atl\u00e1ntico Norte",
        slug: "atlantico-norte",
      }),
      Object.freeze<IProvince>({
        code: "NI-AS",
        name: "Atl\u00e1ntico Sur",
        slug: "atlantico-sur",
      }),
      Object.freeze<IProvince>({
        code: "NI-BO",
        name: "Boaco",
        slug: "boaco",
      }),
      Object.freeze<IProvince>({
        code: "NI-CA",
        name: "Carazo",
        slug: "carazo",
      }),
      Object.freeze<IProvince>({
        code: "NI-CI",
        name: "Chinandega",
        slug: "chinandega",
      }),
      Object.freeze<IProvince>({
        code: "NI-CO",
        name: "Chontales",
        slug: "chontales",
      }),
      Object.freeze<IProvince>({
        code: "NI-ES",
        name: "Estel\u00ed",
        slug: "esteli",
      }),
      Object.freeze<IProvince>({
        code: "NI-GR",
        name: "Granada",
        slug: "granada",
      }),
      Object.freeze<IProvince>({
        code: "NI-JI",
        name: "Jinotega",
        slug: "jinotega",
      }),
      Object.freeze<IProvince>({
        code: "NI-LE",
        name: "Le\u00f3n",
        slug: "leon",
      }),
      Object.freeze<IProvince>({
        code: "NI-MD",
        name: "Madriz",
        slug: "madriz",
      }),
      Object.freeze<IProvince>({
        code: "NI-MN",
        name: "Managua",
        slug: "managua",
      }),
      Object.freeze<IProvince>({
        code: "NI-MS",
        name: "Masaya",
        slug: "masaya",
      }),
      Object.freeze<IProvince>({
        code: "NI-MT",
        name: "Matagalpa",
        slug: "matagalpa",
      }),
      Object.freeze<IProvince>({
        code: "NI-NS",
        name: "Nueva Segovia",
        slug: "nueva-segovia",
      }),
      Object.freeze<IProvince>({
        code: "NI-RI",
        name: "Rivas",
        slug: "rivas",
      }),
      Object.freeze<IProvince>({
        code: "NI-SJ",
        name: "R\u00edo San Juan",
        slug: "rio-san-juan",
      }),
    ],
  }),
  NG: Object.freeze<ICountry>({
    code: "NG",
    currency: CURRENCIES.NGN,
    name: "Nigeria",
    nameWithArticle: "Nigeria",
    provinces: [
      Object.freeze<IProvince>({
        code: "NG-AB",
        name: "Abia",
        slug: "abia",
      }),
      Object.freeze<IProvince>({
        code: "NG-AD",
        name: "Adamawa",
        slug: "adamawa",
      }),
      Object.freeze<IProvince>({
        code: "NG-AK",
        name: "Akwa Ibom",
        slug: "akwa-ibom",
      }),
      Object.freeze<IProvince>({
        code: "NG-AN",
        name: "Anambra",
        slug: "anambra",
      }),
      Object.freeze<IProvince>({
        code: "NG-BA",
        name: "Bauchi",
        slug: "bauchi",
      }),
      Object.freeze<IProvince>({
        code: "NG-BE",
        name: "Benue",
        slug: "benue",
      }),
      Object.freeze<IProvince>({
        code: "NG-BO",
        name: "Borno",
        slug: "borno",
      }),
      Object.freeze<IProvince>({
        code: "NG-BY",
        name: "Bayelsa",
        slug: "bayelsa",
      }),
      Object.freeze<IProvince>({
        code: "NG-CR",
        name: "Cross River",
        slug: "cross-river",
      }),
      Object.freeze<IProvince>({
        code: "NG-DE",
        name: "Delta",
        slug: "delta",
      }),
      Object.freeze<IProvince>({
        code: "NG-EB",
        name: "Ebonyi",
        slug: "ebonyi",
      }),
      Object.freeze<IProvince>({
        code: "NG-ED",
        name: "Edo",
        slug: "edo",
      }),
      Object.freeze<IProvince>({
        code: "NG-EK",
        name: "Ekiti",
        slug: "ekiti",
      }),
      Object.freeze<IProvince>({
        code: "NG-EN",
        name: "Enugu",
        slug: "enugu",
      }),
      Object.freeze<IProvince>({
        code: "NG-FC",
        name: "Abuja Federal Capital Territory",
        slug: "abuja-federal-capital-territory",
      }),
      Object.freeze<IProvince>({
        code: "NG-GO",
        name: "Gombe",
        slug: "gombe",
      }),
      Object.freeze<IProvince>({
        code: "NG-IM",
        name: "Imo",
        slug: "imo",
      }),
      Object.freeze<IProvince>({
        code: "NG-JI",
        name: "Jigawa",
        slug: "jigawa",
      }),
      Object.freeze<IProvince>({
        code: "NG-KD",
        name: "Kaduna",
        slug: "kaduna",
      }),
      Object.freeze<IProvince>({
        code: "NG-KE",
        name: "Kebbi",
        slug: "kebbi",
      }),
      Object.freeze<IProvince>({
        code: "NG-KN",
        name: "Kano",
        slug: "kano",
      }),
      Object.freeze<IProvince>({
        code: "NG-KO",
        name: "Kogi",
        slug: "kogi",
      }),
      Object.freeze<IProvince>({
        code: "NG-KT",
        name: "Katsina",
        slug: "katsina",
      }),
      Object.freeze<IProvince>({
        code: "NG-KW",
        name: "Kwara",
        slug: "kwara",
      }),
      Object.freeze<IProvince>({
        code: "NG-LA",
        name: "Lagos",
        slug: "lagos",
      }),
      Object.freeze<IProvince>({
        code: "NG-NA",
        name: "Nasarawa",
        slug: "nasarawa",
      }),
      Object.freeze<IProvince>({
        code: "NG-NI",
        name: "Niger",
        slug: "niger",
      }),
      Object.freeze<IProvince>({
        code: "NG-OG",
        name: "Ogun",
        slug: "ogun",
      }),
      Object.freeze<IProvince>({
        code: "NG-ON",
        name: "Ondo",
        slug: "ondo",
      }),
      Object.freeze<IProvince>({
        code: "NG-OS",
        name: "Osun",
        slug: "osun",
      }),
      Object.freeze<IProvince>({
        code: "NG-OY",
        name: "Oyo",
        slug: "oyo",
      }),
      Object.freeze<IProvince>({
        code: "NG-PL",
        name: "Plateau",
        slug: "plateau",
      }),
      Object.freeze<IProvince>({
        code: "NG-RI",
        name: "Rivers",
        slug: "rivers",
      }),
      Object.freeze<IProvince>({
        code: "NG-SO",
        name: "Sokoto",
        slug: "sokoto",
      }),
      Object.freeze<IProvince>({
        code: "NG-TA",
        name: "Taraba",
        slug: "taraba",
      }),
      Object.freeze<IProvince>({
        code: "NG-YO",
        name: "Yobe",
        slug: "yobe",
      }),
      Object.freeze<IProvince>({
        code: "NG-ZA",
        name: "Zamfara",
        slug: "zamfara",
      }),
    ],
  }),
  NE: Object.freeze<ICountry>({
    code: "NE",
    currency: CURRENCIES.XAF,
    name: "Niger",
    nameWithArticle: "Niger",
    provinces: [
      Object.freeze<IProvince>({
        code: "NE-1",
        name: "Agadez",
        slug: "agadez",
      }),
      Object.freeze<IProvince>({
        code: "NE-2",
        name: "Diffa",
        slug: "diffa",
      }),
      Object.freeze<IProvince>({
        code: "NE-3",
        name: "Dosso",
        slug: "dosso",
      }),
      Object.freeze<IProvince>({
        code: "NE-4",
        name: "Maradi",
        slug: "maradi",
      }),
      Object.freeze<IProvince>({
        code: "NE-5",
        name: "Tahoua",
        slug: "tahoua",
      }),
      Object.freeze<IProvince>({
        code: "NE-6",
        name: "Tillab\u00e9ri",
        slug: "tillaberi",
      }),
      Object.freeze<IProvince>({
        code: "NE-7",
        name: "Zinder",
        slug: "zinder",
      }),
      Object.freeze<IProvince>({
        code: "NE-8",
        name: "Niamey",
        slug: "niamey",
      }),
    ],
  }),
  NU: Object.freeze<ICountry>({
    code: "NU",
    currency: CURRENCIES.NZD,
    name: "Niue",
    nameWithArticle: "Niue",
    provinces: [],
  }),
  NF: Object.freeze<ICountry>({
    code: "NF",
    currency: CURRENCIES.AUD,
    name: "Norfolk Island",
    nameWithArticle: "Norfolk Island",
    provinces: [],
  }),
  MP: Object.freeze<ICountry>({
    code: "MP",
    currency: CURRENCIES.USD,
    name: "Northern Mariana Islands",
    nameWithArticle: "Northern Mariana Islands",
    provinces: [],
  }),
  NO: Object.freeze<ICountry>({
    code: "NO",
    currency: CURRENCIES.NOK,
    name: "Norway",
    nameWithArticle: "Norway",
    provinces: [
      Object.freeze<IProvince>({
        code: "NO-01",
        name: "\u00d8stfold",
        slug: "stfold",
      }),
      Object.freeze<IProvince>({
        code: "NO-02",
        name: "Akershus",
        slug: "akershus",
      }),
      Object.freeze<IProvince>({
        code: "NO-03",
        name: "Oslo",
        slug: "oslo",
      }),
      Object.freeze<IProvince>({
        code: "NO-04",
        name: "Hedmark",
        slug: "hedmark",
      }),
      Object.freeze<IProvince>({
        code: "NO-05",
        name: "Oppland",
        slug: "oppland",
      }),
      Object.freeze<IProvince>({
        code: "NO-06",
        name: "Buskerud",
        slug: "buskerud",
      }),
      Object.freeze<IProvince>({
        code: "NO-07",
        name: "Vestfold",
        slug: "vestfold",
      }),
      Object.freeze<IProvince>({
        code: "NO-08",
        name: "Telemark",
        slug: "telemark",
      }),
      Object.freeze<IProvince>({
        code: "NO-09",
        name: "Aust-Agder",
        slug: "aust-agder",
      }),
      Object.freeze<IProvince>({
        code: "NO-10",
        name: "Vest-Agder",
        slug: "vest-agder",
      }),
      Object.freeze<IProvince>({
        code: "NO-11",
        name: "Rogaland",
        slug: "rogaland",
      }),
      Object.freeze<IProvince>({
        code: "NO-12",
        name: "Hordaland",
        slug: "hordaland",
      }),
      Object.freeze<IProvince>({
        code: "NO-14",
        name: "Sogn og Fjordane",
        slug: "sogn-og-fjordane",
      }),
      Object.freeze<IProvince>({
        code: "NO-15",
        name: "M\u00f8re og Romsdal",
        slug: "mre-og-romsdal",
      }),
      Object.freeze<IProvince>({
        code: "NO-16",
        name: "S\u00f8r-Tr\u00f8ndelag",
        slug: "sr-trndelag",
      }),
      Object.freeze<IProvince>({
        code: "NO-17",
        name: "Nord-Tr\u00f8ndelag",
        slug: "nord-trndelag",
      }),
      Object.freeze<IProvince>({
        code: "NO-18",
        name: "Nordland",
        slug: "nordland",
      }),
      Object.freeze<IProvince>({
        code: "NO-19",
        name: "Romsa",
        slug: "romsa",
      }),
      Object.freeze<IProvince>({
        code: "NO-20",
        name: "Finnmark",
        slug: "finnmark",
      }),
      Object.freeze<IProvince>({
        code: "NO-21",
        name: "Svalbard",
        slug: "svalbard",
      }),
      Object.freeze<IProvince>({
        code: "NO-22",
        name: "Jan Mayen",
        slug: "jan-mayen",
      }),
    ],
  }),
  OM: Object.freeze<ICountry>({
    code: "OM",
    currency: CURRENCIES.OMR,
    name: "Oman",
    nameWithArticle: "Oman",
    provinces: [
      Object.freeze<IProvince>({
        code: "OM-BU",
        name: "Al Buraym\u012b",
        slug: "al-buraymi",
      }),
      Object.freeze<IProvince>({
        code: "OM-MA",
        name: "Masqa\u0163",
        slug: "masqat",
      }),
      Object.freeze<IProvince>({
        code: "OM-MU",
        name: "Musandam",
        slug: "musandam",
      }),
      Object.freeze<IProvince>({
        code: "OM-ZU",
        name: "Z\u0327uf\u0101r",
        slug: "zufar",
      }),
    ],
  }),
  PK: Object.freeze<ICountry>({
    code: "PK",
    currency: CURRENCIES.PKR,
    name: "Pakistan",
    nameWithArticle: "Pakistan",
    provinces: [
      Object.freeze<IProvince>({
        code: "PK-BA",
        name: "Balochistan",
        slug: "balochistan",
      }),
      Object.freeze<IProvince>({
        code: "PK-GB",
        name: "Gilgit-Baltist\u0101n",
        slug: "gilgit-baltistan",
      }),
      Object.freeze<IProvince>({
        code: "PK-IS",
        name: "Isl\u0101m\u0101b\u0101d",
        slug: "islamabad",
      }),
      Object.freeze<IProvince>({
        code: "PK-JK",
        name: "Azad Kashmir",
        slug: "azad-kashmir",
      }),
      Object.freeze<IProvince>({
        code: "PK-KP",
        name: "Kha\u012bbar Pakht\u016bnkhw\u0101",
        slug: "khaibar-pakhtunkhwa",
      }),
      Object.freeze<IProvince>({
        code: "PK-PB",
        name: "Panj\u0101b",
        slug: "panjab",
      }),
      Object.freeze<IProvince>({
        code: "PK-SD",
        name: "Sindh",
        slug: "sindh",
      }),
      Object.freeze<IProvince>({
        code: "PK-TA",
        name: "Federally Administered Tribal Areas",
        slug: "federally-administered-tribal-areas",
      }),
    ],
  }),
  PW: Object.freeze<ICountry>({
    code: "PW",
    currency: CURRENCIES.USD,
    name: "Palau",
    nameWithArticle: "Palau",
    provinces: [
      Object.freeze<IProvince>({
        code: "PW-002",
        name: "Aimeliik",
        slug: "aimeliik",
      }),
      Object.freeze<IProvince>({
        code: "PW-004",
        name: "Airai",
        slug: "airai",
      }),
      Object.freeze<IProvince>({
        code: "PW-010",
        name: "Angaur",
        slug: "angaur",
      }),
      Object.freeze<IProvince>({
        code: "PW-050",
        name: "Hatobohei",
        slug: "hatobohei",
      }),
      Object.freeze<IProvince>({
        code: "PW-100",
        name: "Kayangel",
        slug: "kayangel",
      }),
      Object.freeze<IProvince>({
        code: "PW-150",
        name: "Koror",
        slug: "koror",
      }),
      Object.freeze<IProvince>({
        code: "PW-212",
        name: "Melekeok",
        slug: "melekeok",
      }),
      Object.freeze<IProvince>({
        code: "PW-214",
        name: "Ngaraard",
        slug: "ngaraard",
      }),
      Object.freeze<IProvince>({
        code: "PW-218",
        name: "Ngarchelong",
        slug: "ngarchelong",
      }),
      Object.freeze<IProvince>({
        code: "PW-222",
        name: "Ngardmau",
        slug: "ngardmau",
      }),
      Object.freeze<IProvince>({
        code: "PW-224",
        name: "Ngatpang",
        slug: "ngatpang",
      }),
      Object.freeze<IProvince>({
        code: "PW-226",
        name: "Ngchesar",
        slug: "ngchesar",
      }),
      Object.freeze<IProvince>({
        code: "PW-227",
        name: "Ngeremlengui",
        slug: "ngeremlengui",
      }),
      Object.freeze<IProvince>({
        code: "PW-228",
        name: "Ngiwal",
        slug: "ngiwal",
      }),
      Object.freeze<IProvince>({
        code: "PW-350",
        name: "Peleliu",
        slug: "peleliu",
      }),
      Object.freeze<IProvince>({
        code: "PW-370",
        name: "Sonsorol",
        slug: "sonsorol",
      }),
    ],
  }),
  PS: Object.freeze<ICountry>({
    code: "PS",
    currency: CURRENCIES.ILS,
    name: "Palestine",
    nameWithArticle: "Palestine",
    provinces: [
      Object.freeze<IProvince>({
        code: "PS-BTH",
        name: "Bayt La\u1e29m",
        slug: "bayt-lahm",
      }),
      Object.freeze<IProvince>({
        code: "PS-DEB",
        name: "Dayr al Bala\u1e29",
        slug: "dayr-al-balah",
      }),
      Object.freeze<IProvince>({
        code: "PS-GZA",
        name: "Gaza",
        slug: "gaza",
      }),
      Object.freeze<IProvince>({
        code: "PS-HBN",
        name: "Al Khal\u012bl",
        slug: "al-khalil",
      }),
      Object.freeze<IProvince>({
        code: "PS-JEM",
        name: "Al Quds",
        slug: "al-quds",
      }),
      Object.freeze<IProvince>({
        code: "PS-JEN",
        name: "Jan\u012bn",
        slug: "janin",
      }),
      Object.freeze<IProvince>({
        code: "PS-JRH",
        name: "Ar\u012b\u1e29\u0101 wa al Aghw\u0101r",
        slug: "ariha-wa-al-aghwar",
      }),
      Object.freeze<IProvince>({
        code: "PS-KYS",
        name: "Khan Yunis",
        slug: "khan-yunis",
      }),
      Object.freeze<IProvince>({
        code: "PS-NBS",
        name: "Nablus",
        slug: "nablus",
      }),
      Object.freeze<IProvince>({
        code: "PS-NGZ",
        name: "North Gaza",
        slug: "north-gaza",
      }),
      Object.freeze<IProvince>({
        code: "PS-QQA",
        name: "Qalqilya",
        slug: "qalqilya",
      }),
      Object.freeze<IProvince>({
        code: "PS-RBH",
        name: "Ramallah",
        slug: "ramallah",
      }),
      Object.freeze<IProvince>({
        code: "PS-RFH",
        name: "Rafah",
        slug: "rafah",
      }),
      Object.freeze<IProvince>({
        code: "PS-SLT",
        name: "Salfit",
        slug: "salfit",
      }),
      Object.freeze<IProvince>({
        code: "PS-TBS",
        name: "Tubas",
        slug: "tubas",
      }),
      Object.freeze<IProvince>({
        code: "PS-TKM",
        name: "Tulkarm",
        slug: "tulkarm",
      }),
    ],
  }),
  PA: Object.freeze<ICountry>({
    code: "PA",
    currency: CURRENCIES.PAB,
    name: "Panama",
    nameWithArticle: "Panama",
    provinces: [
      Object.freeze<IProvince>({
        code: "PA-10",
        name: "Panam\u00e1 Oeste",
        slug: "panama-oeste",
      }),
      Object.freeze<IProvince>({
        code: "PA-1",
        name: "Bocas del Toro",
        slug: "bocas-del-toro",
      }),
      Object.freeze<IProvince>({
        code: "PA-2",
        name: "Cocl\u00e9",
        slug: "cocle",
      }),
      Object.freeze<IProvince>({
        code: "PA-3",
        name: "Col\u00f3n",
        slug: "colon",
      }),
      Object.freeze<IProvince>({
        code: "PA-4",
        name: "Chiriqu\u00ed",
        slug: "chiriqui",
      }),
      Object.freeze<IProvince>({
        code: "PA-5",
        name: "Dari\u00e9n",
        slug: "darien",
      }),
      Object.freeze<IProvince>({
        code: "PA-6",
        name: "Herrera",
        slug: "herrera",
      }),
      Object.freeze<IProvince>({
        code: "PA-7",
        name: "Los Santos",
        slug: "los-santos",
      }),
      Object.freeze<IProvince>({
        code: "PA-8",
        name: "Panam\u00e1",
        slug: "panama",
      }),
      Object.freeze<IProvince>({
        code: "PA-9",
        name: "Veraguas",
        slug: "veraguas",
      }),
      Object.freeze<IProvince>({
        code: "PA-EM",
        name: "Ember\u00e1",
        slug: "embera",
      }),
      Object.freeze<IProvince>({
        code: "PA-KY",
        name: "Kuna Yala",
        slug: "kuna-yala",
      }),
      Object.freeze<IProvince>({
        code: "PA-NB",
        name: "Ng\u00f6be-Bugl\u00e9",
        slug: "ngobe-bugle",
      }),
    ],
  }),
  PG: Object.freeze<ICountry>({
    code: "PG",
    currency: CURRENCIES.PGK,
    name: "Papua New Guinea",
    nameWithArticle: "Papua New Guinea",
    provinces: [
      Object.freeze<IProvince>({
        code: "PG-CPK",
        name: "Chimbu",
        slug: "chimbu",
      }),
      Object.freeze<IProvince>({
        code: "PG-CPM",
        name: "Central",
        slug: "central",
      }),
      Object.freeze<IProvince>({
        code: "PG-EBR",
        name: "East New Britain",
        slug: "east-new-britain",
      }),
      Object.freeze<IProvince>({
        code: "PG-EHG",
        name: "Eastern Highlands",
        slug: "eastern-highlands",
      }),
      Object.freeze<IProvince>({
        code: "PG-EPW",
        name: "Enga",
        slug: "enga",
      }),
      Object.freeze<IProvince>({
        code: "PG-ESW",
        name: "East Sepik",
        slug: "east-sepik",
      }),
      Object.freeze<IProvince>({
        code: "PG-GPK",
        name: "Gulf",
        slug: "gulf",
      }),
      Object.freeze<IProvince>({
        code: "PG-HLA",
        name: "Hela",
        slug: "hela",
      }),
      Object.freeze<IProvince>({
        code: "PG-JWK",
        name: "Jiwaka",
        slug: "jiwaka",
      }),
      Object.freeze<IProvince>({
        code: "PG-MBA",
        name: "Milne Bay",
        slug: "milne-bay",
      }),
      Object.freeze<IProvince>({
        code: "PG-MPL",
        name: "Morobe",
        slug: "morobe",
      }),
      Object.freeze<IProvince>({
        code: "PG-MPM",
        name: "Madang",
        slug: "madang",
      }),
      Object.freeze<IProvince>({
        code: "PG-MRL",
        name: "Manus",
        slug: "manus",
      }),
      Object.freeze<IProvince>({
        code: "PG-NIK",
        name: "New Ireland",
        slug: "new-ireland",
      }),
      Object.freeze<IProvince>({
        code: "PG-NPP",
        name: "Northern",
        slug: "northern",
      }),
      Object.freeze<IProvince>({
        code: "PG-NSB",
        name: "Bougainville",
        slug: "bougainville",
      }),
      Object.freeze<IProvince>({
        code: "PG-SAN",
        name: "West Sepik",
        slug: "west-sepik",
      }),
      Object.freeze<IProvince>({
        code: "PG-SHM",
        name: "Southern Highlands",
        slug: "southern-highlands",
      }),
      Object.freeze<IProvince>({
        code: "PG-WBK",
        name: "West New Britain",
        slug: "west-new-britain",
      }),
      Object.freeze<IProvince>({
        code: "PG-WHM",
        name: "Western Highlands",
        slug: "western-highlands",
      }),
      Object.freeze<IProvince>({
        code: "PG-WPD",
        name: "Western",
        slug: "western",
      }),
    ],
  }),
  PY: Object.freeze<ICountry>({
    code: "PY",
    currency: CURRENCIES.PYG,
    name: "Paraguay",
    nameWithArticle: "Paraguay",
    provinces: [
      Object.freeze<IProvince>({
        code: "PY-10",
        name: "Alto Paran\u00e1",
        slug: "alto-parana",
      }),
      Object.freeze<IProvince>({
        code: "PY-11",
        name: "Central",
        slug: "central",
      }),
      Object.freeze<IProvince>({
        code: "PY-12",
        name: "\u00d1eembuc\u00fa",
        slug: "neembucu",
      }),
      Object.freeze<IProvince>({
        code: "PY-13",
        name: "Amambay",
        slug: "amambay",
      }),
      Object.freeze<IProvince>({
        code: "PY-14",
        name: "Canindey\u00fa",
        slug: "canindeyu",
      }),
      Object.freeze<IProvince>({
        code: "PY-15",
        name: "Presidente Hayes",
        slug: "presidente-hayes",
      }),
      Object.freeze<IProvince>({
        code: "PY-16",
        name: "Alto Paraguay",
        slug: "alto-paraguay",
      }),
      Object.freeze<IProvince>({
        code: "PY-19",
        name: "Boquer\u00f3n",
        slug: "boqueron",
      }),
      Object.freeze<IProvince>({
        code: "PY-1",
        name: "Concepci\u00f3n",
        slug: "concepcion",
      }),
      Object.freeze<IProvince>({
        code: "PY-2",
        name: "San Pedro",
        slug: "san-pedro",
      }),
      Object.freeze<IProvince>({
        code: "PY-3",
        name: "Cordillera",
        slug: "cordillera",
      }),
      Object.freeze<IProvince>({
        code: "PY-4",
        name: "Guair\u00e1",
        slug: "guaira",
      }),
      Object.freeze<IProvince>({
        code: "PY-5",
        name: "Caaguaz\u00fa",
        slug: "caaguazu",
      }),
      Object.freeze<IProvince>({
        code: "PY-6",
        name: "Caazap\u00e1",
        slug: "caazapa",
      }),
      Object.freeze<IProvince>({
        code: "PY-7",
        name: "Itap\u00faa",
        slug: "itapua",
      }),
      Object.freeze<IProvince>({
        code: "PY-8",
        name: "Misiones",
        slug: "misiones",
      }),
      Object.freeze<IProvince>({
        code: "PY-9",
        name: "Paraguar\u00ed",
        slug: "paraguari",
      }),
      Object.freeze<IProvince>({
        code: "PY-ASU",
        name: "Asunci\u00f3n",
        slug: "asuncion",
      }),
    ],
  }),
  PE: Object.freeze<ICountry>({
    code: "PE",
    currency: CURRENCIES.PEN,
    name: "Peru",
    nameWithArticle: "Peru",
    provinces: [
      Object.freeze<IProvince>({
        code: "PE-AMA",
        name: "Amarumayu",
        slug: "amarumayu",
      }),
      Object.freeze<IProvince>({
        code: "PE-ANC",
        name: "Ancash",
        slug: "ancash",
      }),
      Object.freeze<IProvince>({
        code: "PE-APU",
        name: "Apur\u00edmac",
        slug: "apurimac",
      }),
      Object.freeze<IProvince>({
        code: "PE-ARE",
        name: "Arequipa",
        slug: "arequipa",
      }),
      Object.freeze<IProvince>({
        code: "PE-AYA",
        name: "Ayacucho",
        slug: "ayacucho",
      }),
      Object.freeze<IProvince>({
        code: "PE-CAJ",
        name: "Cajamarca",
        slug: "cajamarca",
      }),
      Object.freeze<IProvince>({
        code: "PE-CAL",
        name: "El Callao",
        slug: "el-callao",
      }),
      Object.freeze<IProvince>({
        code: "PE-CUS",
        name: "Cusco",
        slug: "cusco",
      }),
      Object.freeze<IProvince>({
        code: "PE-HUC",
        name: "Hu\u00e1nuco",
        slug: "huanuco",
      }),
      Object.freeze<IProvince>({
        code: "PE-HUV",
        name: "Huancavelica",
        slug: "huancavelica",
      }),
      Object.freeze<IProvince>({
        code: "PE-ICA",
        name: "Ica",
        slug: "ica",
      }),
      Object.freeze<IProvince>({
        code: "PE-JUN",
        name: "Hunin",
        slug: "hunin",
      }),
      Object.freeze<IProvince>({
        code: "PE-LAL",
        name: "La Libertad",
        slug: "la-libertad",
      }),
      Object.freeze<IProvince>({
        code: "PE-LAM",
        name: "Lambayeque",
        slug: "lambayeque",
      }),
      Object.freeze<IProvince>({
        code: "PE-LIM",
        name: "Lima",
        slug: "lima",
      }),
      Object.freeze<IProvince>({
        code: "PE-LOR",
        name: "Loreto",
        slug: "loreto",
      }),
      Object.freeze<IProvince>({
        code: "PE-MDD",
        name: "Madre de Dios",
        slug: "madre-de-dios",
      }),
      Object.freeze<IProvince>({
        code: "PE-MOQ",
        name: "Moquegua",
        slug: "moquegua",
      }),
      Object.freeze<IProvince>({
        code: "PE-PAS",
        name: "Pasco",
        slug: "pasco",
      }),
      Object.freeze<IProvince>({
        code: "PE-PIU",
        name: "Piura",
        slug: "piura",
      }),
      Object.freeze<IProvince>({
        code: "PE-PUN",
        name: "Puno",
        slug: "puno",
      }),
      Object.freeze<IProvince>({
        code: "PE-SAM",
        name: "San Martin",
        slug: "san-martin",
      }),
      Object.freeze<IProvince>({
        code: "PE-TAC",
        name: "Tacna",
        slug: "tacna",
      }),
      Object.freeze<IProvince>({
        code: "PE-TUM",
        name: "Tumbes",
        slug: "tumbes",
      }),
      Object.freeze<IProvince>({
        code: "PE-UCA",
        name: "Ucayali",
        slug: "ucayali",
      }),
    ],
  }),
  PH: Object.freeze<ICountry>({
    code: "PH",
    currency: CURRENCIES.PHP,
    name: "Philippines",
    nameWithArticle: "Philippines",
    provinces: [
      Object.freeze<IProvince>({
        code: "PH-00",
        name: "National Capital Region",
        slug: "national-capital-region",
      }),
      Object.freeze<IProvince>({
        code: "PH-01",
        name: "Ilocos",
        slug: "ilocos",
      }),
      Object.freeze<IProvince>({
        code: "PH-02",
        name: "Cagayan Valley",
        slug: "cagayan-valley",
      }),
      Object.freeze<IProvince>({
        code: "PH-03",
        name: "Central Luzon",
        slug: "central-luzon",
      }),
      Object.freeze<IProvince>({
        code: "PH-05",
        name: "Bicol",
        slug: "bicol",
      }),
      Object.freeze<IProvince>({
        code: "PH-06",
        name: "Rehiyon ng Kanlurang Bisaya",
        slug: "rehiyon-ng-kanlurang-bisaya",
      }),
      Object.freeze<IProvince>({
        code: "PH-07",
        name: "Central Visayas",
        slug: "central-visayas",
      }),
      Object.freeze<IProvince>({
        code: "PH-08",
        name: "Eastern Visayas",
        slug: "eastern-visayas",
      }),
      Object.freeze<IProvince>({
        code: "PH-09",
        name: "Rehiyon ng Tangway ng Sambuwangga",
        slug: "rehiyon-ng-tangway-ng-sambuwangga",
      }),
      Object.freeze<IProvince>({
        code: "PH-10",
        name: "Northern Mindanao",
        slug: "northern-mindanao",
      }),
      Object.freeze<IProvince>({
        code: "PH-11",
        name: "Davao",
        slug: "davao",
      }),
      Object.freeze<IProvince>({
        code: "PH-12",
        name: "Rehiyon ng Soccsksargen",
        slug: "rehiyon-ng-soccsksargen",
      }),
      Object.freeze<IProvince>({
        code: "PH-13",
        name: "Caraga",
        slug: "caraga",
      }),
      Object.freeze<IProvince>({
        code: "PH-14",
        name: "Autonomous Region in Muslim Mindanao",
        slug: "autonomous-region-in-muslim-mindanao",
      }),
      Object.freeze<IProvince>({
        code: "PH-15",
        name: "Cordillera Administrative Region",
        slug: "cordillera-administrative-region",
      }),
      Object.freeze<IProvince>({
        code: "PH-40",
        name: "Calabarzon",
        slug: "calabarzon",
      }),
      Object.freeze<IProvince>({
        code: "PH-41",
        name: "Mimaropa",
        slug: "mimaropa",
      }),
    ],
  }),
  PN: Object.freeze<ICountry>({
    code: "PN",
    currency: CURRENCIES.NZD,
    name: "Pitcairn",
    nameWithArticle: "Pitcairn",
    provinces: [],
  }),
  PL: Object.freeze<ICountry>({
    code: "PL",
    currency: CURRENCIES.PLN,
    name: "Poland",
    nameWithArticle: "Poland",
    provinces: [
      Object.freeze<IProvince>({
        code: "PL-DS",
        name: "Dolno\u015bl\u0105skie",
        slug: "dolnoslaskie",
      }),
      Object.freeze<IProvince>({
        code: "PL-KP",
        name: "Kujawsko-pomorskie",
        slug: "kujawsko-pomorskie",
      }),
      Object.freeze<IProvince>({
        code: "PL-LB",
        name: "Lubuskie",
        slug: "lubuskie",
      }),
      Object.freeze<IProvince>({
        code: "PL-LD",
        name: "\u0141\u00f3dzkie",
        slug: "odzkie",
      }),
      Object.freeze<IProvince>({
        code: "PL-LU",
        name: "Lubelskie",
        slug: "lubelskie",
      }),
      Object.freeze<IProvince>({
        code: "PL-MA",
        name: "Ma\u0142opolskie",
        slug: "maopolskie",
      }),
      Object.freeze<IProvince>({
        code: "PL-MZ",
        name: "Mazowieckie",
        slug: "mazowieckie",
      }),
      Object.freeze<IProvince>({
        code: "PL-OP",
        name: "Opolskie",
        slug: "opolskie",
      }),
      Object.freeze<IProvince>({
        code: "PL-PD",
        name: "Podlaskie",
        slug: "podlaskie",
      }),
      Object.freeze<IProvince>({
        code: "PL-PK",
        name: "Podkarpackie",
        slug: "podkarpackie",
      }),
      Object.freeze<IProvince>({
        code: "PL-PM",
        name: "Pomorskie",
        slug: "pomorskie",
      }),
      Object.freeze<IProvince>({
        code: "PL-SK",
        name: "\u015awi\u0119tokrzyskie",
        slug: "swietokrzyskie",
      }),
      Object.freeze<IProvince>({
        code: "PL-SL",
        name: "\u015al\u0105skie",
        slug: "slaskie",
      }),
      Object.freeze<IProvince>({
        code: "PL-WN",
        name: "Warmi\u0144sko-mazurskie",
        slug: "warminsko-mazurskie",
      }),
      Object.freeze<IProvince>({
        code: "PL-WP",
        name: "Wielkopolskie",
        slug: "wielkopolskie",
      }),
      Object.freeze<IProvince>({
        code: "PL-ZP",
        name: "Zachodniopomorskie",
        slug: "zachodniopomorskie",
      }),
    ],
  }),
  PT: Object.freeze<ICountry>({
    code: "PT",
    currency: CURRENCIES.EUR,
    name: "Portugal",
    nameWithArticle: "Portugal",
    provinces: [
      Object.freeze<IProvince>({
        code: "PT-01",
        name: "Aveiro",
        slug: "aveiro",
      }),
      Object.freeze<IProvince>({
        code: "PT-02",
        name: "Beja",
        slug: "beja",
      }),
      Object.freeze<IProvince>({
        code: "PT-03",
        name: "Braga",
        slug: "braga",
      }),
      Object.freeze<IProvince>({
        code: "PT-04",
        name: "Bragan\u00e7a",
        slug: "braganca",
      }),
      Object.freeze<IProvince>({
        code: "PT-05",
        name: "Castelo Branco",
        slug: "castelo-branco",
      }),
      Object.freeze<IProvince>({
        code: "PT-06",
        name: "Coimbra",
        slug: "coimbra",
      }),
      Object.freeze<IProvince>({
        code: "PT-07",
        name: "\u00c9vora",
        slug: "evora",
      }),
      Object.freeze<IProvince>({
        code: "PT-08",
        name: "Faro",
        slug: "faro",
      }),
      Object.freeze<IProvince>({
        code: "PT-09",
        name: "Guarda",
        slug: "guarda",
      }),
      Object.freeze<IProvince>({
        code: "PT-10",
        name: "Leiria",
        slug: "leiria",
      }),
      Object.freeze<IProvince>({
        code: "PT-11",
        name: "Lisboa",
        slug: "lisboa",
      }),
      Object.freeze<IProvince>({
        code: "PT-12",
        name: "Portalegre",
        slug: "portalegre",
      }),
      Object.freeze<IProvince>({
        code: "PT-13",
        name: "Porto",
        slug: "porto",
      }),
      Object.freeze<IProvince>({
        code: "PT-14",
        name: "Santar\u00e9m",
        slug: "santarem",
      }),
      Object.freeze<IProvince>({
        code: "PT-15",
        name: "Set\u00fabal",
        slug: "setubal",
      }),
      Object.freeze<IProvince>({
        code: "PT-16",
        name: "Viana do Castelo",
        slug: "viana-do-castelo",
      }),
      Object.freeze<IProvince>({
        code: "PT-17",
        name: "Vila Real",
        slug: "vila-real",
      }),
      Object.freeze<IProvince>({
        code: "PT-18",
        name: "Viseu",
        slug: "viseu",
      }),
      Object.freeze<IProvince>({
        code: "PT-20",
        name: "Regi\u00e3o Aut\u00f3noma dos A\u00e7ores",
        slug: "regiao-autonoma-dos-acores",
      }),
      Object.freeze<IProvince>({
        code: "PT-30",
        name: "Regi\u00e3o Aut\u00f3noma da Madeira",
        slug: "regiao-autonoma-da-madeira",
      }),
    ],
  }),
  PR: Object.freeze<ICountry>({
    code: "PR",
    currency: CURRENCIES.USD,
    name: "Puerto Rico",
    nameWithArticle: "Puerto Rico",
    provinces: [],
  }),
  QA: Object.freeze<ICountry>({
    code: "QA",
    currency: CURRENCIES.QAR,
    name: "Qatar",
    nameWithArticle: "Qatar",
    provinces: [
      Object.freeze<IProvince>({
        code: "QA-DA",
        name: "Ad Daw\u1e29ah",
        slug: "ad-dawhah",
      }),
      Object.freeze<IProvince>({
        code: "QA-KH",
        name: "Al Khawr wa adh Dhakh\u012brah",
        slug: "al-khawr-wa-adh-dhakhirah",
      }),
      Object.freeze<IProvince>({
        code: "QA-MS",
        name: "Ash Sham\u0101l",
        slug: "ash-shamal",
      }),
      Object.freeze<IProvince>({
        code: "QA-RA",
        name: "Ar Rayy\u0101n",
        slug: "ar-rayyan",
      }),
      Object.freeze<IProvince>({
        code: "QA-US",
        name: "Umm \u015eal\u0101l",
        slug: "umm-salal",
      }),
      Object.freeze<IProvince>({
        code: "QA-WA",
        name: "Al Wakrah",
        slug: "al-wakrah",
      }),
      Object.freeze<IProvince>({
        code: "QA-ZA",
        name: "Az\u0327 Z\u0327a\u2018\u0101yin",
        slug: "az-zaayin",
      }),
    ],
  }),
  RE: Object.freeze<ICountry>({
    code: "RE",
    currency: CURRENCIES.EUR,
    name: "Réunion",
    nameWithArticle: "Réunion",
    provinces: [],
  }),
  RO: Object.freeze<ICountry>({
    code: "RO",
    currency: CURRENCIES.RON,
    name: "Romania",
    nameWithArticle: "Romania",
    provinces: [
      Object.freeze<IProvince>({
        code: "RO-B",
        name: "Bucure\u015fti",
        slug: "bucuresti",
      }),
    ],
  }),
  RU: Object.freeze<ICountry>({
    code: "RU",
    currency: CURRENCIES.RUB,
    name: "Russian Federation",
    nameWithArticle: "The Russian Federation",
    provinces: [
      Object.freeze<IProvince>({
        code: "RU-AD",
        name: "Adygeja, Respublika",
        slug: "adygeja-respublika",
      }),
      Object.freeze<IProvince>({
        code: "RU-AL",
        name: "Altaj, Respublika",
        slug: "altaj-respublika",
      }),
      Object.freeze<IProvince>({
        code: "RU-ALT",
        name: "Altajskij kraj",
        slug: "altajskij-kraj",
      }),
      Object.freeze<IProvince>({
        code: "RU-AMU",
        name: "Amurskaja oblast'",
        slug: "amurskaja-oblast",
      }),
      Object.freeze<IProvince>({
        code: "RU-ARK",
        name: "Arhangel'skaja oblast'",
        slug: "arhangelskaja-oblast",
      }),
      Object.freeze<IProvince>({
        code: "RU-AST",
        name: "Astrahanskaja oblast'",
        slug: "astrahanskaja-oblast",
      }),
      Object.freeze<IProvince>({
        code: "RU-BA",
        name: "Bashkortostan, Respublika",
        slug: "bashkortostan-respublika",
      }),
      Object.freeze<IProvince>({
        code: "RU-BEL",
        name: "Belgorodskaja oblast'",
        slug: "belgorodskaja-oblast",
      }),
      Object.freeze<IProvince>({
        code: "RU-BRY",
        name: "Brjanskaja oblast'",
        slug: "brjanskaja-oblast",
      }),
      Object.freeze<IProvince>({
        code: "RU-BU",
        name: "Burjatija, Respublika",
        slug: "burjatija-respublika",
      }),
      Object.freeze<IProvince>({
        code: "RU-CE",
        name: "\u010ce\u010denskaja Respublika",
        slug: "cecenskaja-respublika",
      }),
      Object.freeze<IProvince>({
        code: "RU-CHE",
        name: "\u010celjabinskaja oblast'",
        slug: "celjabinskaja-oblast",
      }),
      Object.freeze<IProvince>({
        code: "RU-CHU",
        name: "Chukotskiy avtonomnyy okrug",
        slug: "chukotskiy-avtonomnyy-okrug",
      }),
      Object.freeze<IProvince>({
        code: "RU-CU",
        name: "Chuvashskaya Respublika",
        slug: "chuvashskaya-respublika",
      }),
      Object.freeze<IProvince>({
        code: "RU-DA",
        name: "Dagestan, Respublika",
        slug: "dagestan-respublika",
      }),
      Object.freeze<IProvince>({
        code: "RU-IN",
        name: "Ingu\u0161etija, Respublika",
        slug: "ingusetija-respublika",
      }),
      Object.freeze<IProvince>({
        code: "RU-IRK",
        name: "Irkutskaja oblast'",
        slug: "irkutskaja-oblast",
      }),
      Object.freeze<IProvince>({
        code: "RU-IVA",
        name: "Ivanovskaja oblast'",
        slug: "ivanovskaja-oblast",
      }),
      Object.freeze<IProvince>({
        code: "RU-KAM",
        name: "Kam\u010datskij kraj",
        slug: "kamcatskij-kraj",
      }),
      Object.freeze<IProvince>({
        code: "RU-KB",
        name: "Kabardino-Balkarskaja Respublika",
        slug: "kabardino-balkarskaja-respublika",
      }),
      Object.freeze<IProvince>({
        code: "RU-KC",
        name: "Kara\u010daevo-\u010cerkesskaja Respublika",
        slug: "karacaevo-cerkesskaja-respublika",
      }),
      Object.freeze<IProvince>({
        code: "RU-KDA",
        name: "Krasnodarskij kraj",
        slug: "krasnodarskij-kraj",
      }),
      Object.freeze<IProvince>({
        code: "RU-KEM",
        name: "Kemerovskaja oblast'",
        slug: "kemerovskaja-oblast",
      }),
      Object.freeze<IProvince>({
        code: "RU-KGD",
        name: "Kaliningradskaja oblast'",
        slug: "kaliningradskaja-oblast",
      }),
      Object.freeze<IProvince>({
        code: "RU-KGN",
        name: "Kurganskaja oblast'",
        slug: "kurganskaja-oblast",
      }),
      Object.freeze<IProvince>({
        code: "RU-KHA",
        name: "Habarovskij kraj",
        slug: "habarovskij-kraj",
      }),
      Object.freeze<IProvince>({
        code: "RU-KHM",
        name: "Hanty-Mansijskij avtonomnyj okrug",
        slug: "hanty-mansijskij-avtonomnyj-okrug",
      }),
      Object.freeze<IProvince>({
        code: "RU-KIR",
        name: "Kirovskaja oblast'",
        slug: "kirovskaja-oblast",
      }),
      Object.freeze<IProvince>({
        code: "RU-KK",
        name: "Hakasija, Respublika",
        slug: "hakasija-respublika",
      }),
      Object.freeze<IProvince>({
        code: "RU-KL",
        name: "Kalmykija, Respublika",
        slug: "kalmykija-respublika",
      }),
      Object.freeze<IProvince>({
        code: "RU-KLU",
        name: "Kaluzhskaya oblast'",
        slug: "kaluzhskaya-oblast",
      }),
      Object.freeze<IProvince>({
        code: "RU-KO",
        name: "Komi, Respublika",
        slug: "komi-respublika",
      }),
      Object.freeze<IProvince>({
        code: "RU-KOS",
        name: "Kostromskaja oblast'",
        slug: "kostromskaja-oblast",
      }),
      Object.freeze<IProvince>({
        code: "RU-KR",
        name: "Karelija, Respublika",
        slug: "karelija-respublika",
      }),
      Object.freeze<IProvince>({
        code: "RU-KRS",
        name: "Kurskaja oblast'",
        slug: "kurskaja-oblast",
      }),
      Object.freeze<IProvince>({
        code: "RU-KYA",
        name: "Krasnojarskij kraj",
        slug: "krasnojarskij-kraj",
      }),
      Object.freeze<IProvince>({
        code: "RU-LEN",
        name: "Leningradskaja oblast'",
        slug: "leningradskaja-oblast",
      }),
      Object.freeze<IProvince>({
        code: "RU-LIP",
        name: "Lipeckaja oblast'",
        slug: "lipeckaja-oblast",
      }),
      Object.freeze<IProvince>({
        code: "RU-MAG",
        name: "Magadanskaja oblast'",
        slug: "magadanskaja-oblast",
      }),
      Object.freeze<IProvince>({
        code: "RU-ME",
        name: "Marij \u00c8l, Respublika",
        slug: "marij-el-respublika",
      }),
      Object.freeze<IProvince>({
        code: "RU-MO",
        name: "Mordovija, Respublika",
        slug: "mordovija-respublika",
      }),
      Object.freeze<IProvince>({
        code: "RU-MOS",
        name: "Moskovskaja oblast'",
        slug: "moskovskaja-oblast",
      }),
      Object.freeze<IProvince>({
        code: "RU-MUR",
        name: "Murmanskaja oblast'",
        slug: "murmanskaja-oblast",
      }),
      Object.freeze<IProvince>({
        code: "RU-NEN",
        name: "Neneckij avtonomnyj okrug",
        slug: "neneckij-avtonomnyj-okrug",
      }),
      Object.freeze<IProvince>({
        code: "RU-NGR",
        name: "Novgorodskaja oblast'",
        slug: "novgorodskaja-oblast",
      }),
      Object.freeze<IProvince>({
        code: "RU-NIZ",
        name: "Ni\u017eegorodskaja oblast'",
        slug: "nizegorodskaja-oblast",
      }),
      Object.freeze<IProvince>({
        code: "RU-NVS",
        name: "Novosibirskaja oblast'",
        slug: "novosibirskaja-oblast",
      }),
      Object.freeze<IProvince>({
        code: "RU-OMS",
        name: "Omskaja oblast'",
        slug: "omskaja-oblast",
      }),
      Object.freeze<IProvince>({
        code: "RU-ORE",
        name: "Orenburgskaja oblast'",
        slug: "orenburgskaja-oblast",
      }),
      Object.freeze<IProvince>({
        code: "RU-ORL",
        name: "Orlovskaja oblast'",
        slug: "orlovskaja-oblast",
      }),
      Object.freeze<IProvince>({
        code: "RU-PER",
        name: "Permskij kraj",
        slug: "permskij-kraj",
      }),
      Object.freeze<IProvince>({
        code: "RU-PNZ",
        name: "Penzenskaja oblast'",
        slug: "penzenskaja-oblast",
      }),
      Object.freeze<IProvince>({
        code: "RU-PRI",
        name: "Primorskij kraj",
        slug: "primorskij-kraj",
      }),
      Object.freeze<IProvince>({
        code: "RU-PSK",
        name: "Pskovskaja oblast'",
        slug: "pskovskaja-oblast",
      }),
      Object.freeze<IProvince>({
        code: "RU-ROS",
        name: "Rostovskaja oblast'",
        slug: "rostovskaja-oblast",
      }),
      Object.freeze<IProvince>({
        code: "RU-RYA",
        name: "Rjazanskaja oblast'",
        slug: "rjazanskaja-oblast",
      }),
      Object.freeze<IProvince>({
        code: "RU-SAK",
        name: "Sahalinskaja oblast'",
        slug: "sahalinskaja-oblast",
      }),
      Object.freeze<IProvince>({
        code: "RU-SAM",
        name: "Samarskaja oblast'",
        slug: "samarskaja-oblast",
      }),
      Object.freeze<IProvince>({
        code: "RU-SAR",
        name: "Saratovskaja oblast'",
        slug: "saratovskaja-oblast",
      }),
      Object.freeze<IProvince>({
        code: "RU-SA",
        name: "Saha, Respublika",
        slug: "saha-respublika",
      }),
      Object.freeze<IProvince>({
        code: "RU-SE",
        name: "Severnaja Osetija, Respublika",
        slug: "severnaja-osetija-respublika",
      }),
      Object.freeze<IProvince>({
        code: "RU-SMO",
        name: "Smolenskaja oblast'",
        slug: "smolenskaja-oblast",
      }),
      Object.freeze<IProvince>({
        code: "RU-STA",
        name: "Stavropol'skij kraj",
        slug: "stavropolskij-kraj",
      }),
      Object.freeze<IProvince>({
        code: "RU-SVE",
        name: "Sverdlovskaja oblast'",
        slug: "sverdlovskaja-oblast",
      }),
      Object.freeze<IProvince>({
        code: "RU-TAM",
        name: "Tambovskaja oblast'",
        slug: "tambovskaja-oblast",
      }),
      Object.freeze<IProvince>({
        code: "RU-TA",
        name: "Tatarstan, Respublika",
        slug: "tatarstan-respublika",
      }),
      Object.freeze<IProvince>({
        code: "RU-TOM",
        name: "Tomskaja oblast'",
        slug: "tomskaja-oblast",
      }),
      Object.freeze<IProvince>({
        code: "RU-TUL",
        name: "Tul'skaja oblast'",
        slug: "tulskaja-oblast",
      }),
      Object.freeze<IProvince>({
        code: "RU-TVE",
        name: "Tverskaja oblast'",
        slug: "tverskaja-oblast",
      }),
      Object.freeze<IProvince>({
        code: "RU-TY",
        name: "Tyva, Respublika",
        slug: "tyva-respublika",
      }),
      Object.freeze<IProvince>({
        code: "RU-TYU",
        name: "Tjumenskaja oblast'",
        slug: "tjumenskaja-oblast",
      }),
      Object.freeze<IProvince>({
        code: "RU-UD",
        name: "Udmurtskaja Respublika",
        slug: "udmurtskaja-respublika",
      }),
      Object.freeze<IProvince>({
        code: "RU-ULY",
        name: "Ul'janovskaja oblast'",
        slug: "uljanovskaja-oblast",
      }),
      Object.freeze<IProvince>({
        code: "RU-VGG",
        name: "Volgogradskaja oblast'",
        slug: "volgogradskaja-oblast",
      }),
      Object.freeze<IProvince>({
        code: "RU-VLA",
        name: "Vladimirskaja oblast'",
        slug: "vladimirskaja-oblast",
      }),
      Object.freeze<IProvince>({
        code: "RU-VLG",
        name: "Vologodskaja oblast'",
        slug: "vologodskaja-oblast",
      }),
      Object.freeze<IProvince>({
        code: "RU-VOR",
        name: "Voronezhskaya oblast'",
        slug: "voronezhskaya-oblast",
      }),
      Object.freeze<IProvince>({
        code: "RU-YAN",
        name: "Jamalo-Neneckij avtonomnyj okrug",
        slug: "jamalo-neneckij-avtonomnyj-okrug",
      }),
      Object.freeze<IProvince>({
        code: "RU-YAR",
        name: "Jaroslavskaja oblast'",
        slug: "jaroslavskaja-oblast",
      }),
      Object.freeze<IProvince>({
        code: "RU-ZAB",
        name: "Zabajkal'skij kraj",
        slug: "zabajkalskij-kraj",
      }),
    ],
  }),
  RW: Object.freeze<ICountry>({
    code: "RW",
    currency: CURRENCIES.RWF,
    name: "Rwanda",
    nameWithArticle: "Rwanda",
    provinces: [
      Object.freeze<IProvince>({
        code: "RW-01",
        name: "Ville de Kigal",
        slug: "ville-de-kigal",
      }),
      Object.freeze<IProvince>({
        code: "RW-02",
        name: "Est",
        slug: "est",
      }),
      Object.freeze<IProvince>({
        code: "RW-03",
        name: "Nord",
        slug: "nord",
      }),
      Object.freeze<IProvince>({
        code: "RW-04",
        name: "Ouest",
        slug: "ouest",
      }),
      Object.freeze<IProvince>({
        code: "RW-05",
        name: "Sud",
        slug: "sud",
      }),
    ],
  }),
  SH: Object.freeze<ICountry>({
    code: "SH",
    currency: CURRENCIES.SHP,
    name: "Saint Helena, Ascension and Tristan da Cunha",
    nameWithArticle: "Saint Helena, Ascension and Tristan da Cunha",
    provinces: [
      Object.freeze<IProvince>({
        code: "SH-AC",
        name: "Ascension",
        slug: "ascension",
      }),
      Object.freeze<IProvince>({
        code: "SH-HL",
        name: "Saint Helena",
        slug: "saint-helena",
      }),
      Object.freeze<IProvince>({
        code: "SH-TA",
        name: "Tristan da Cunha",
        slug: "tristan-da-cunha",
      }),
    ],
  }),
  KN: Object.freeze<ICountry>({
    code: "KN",
    currency: CURRENCIES.XCD,
    name: "Saint Kitts and Nevis",
    nameWithArticle: "Saint Kitts and Nevis",
    provinces: [
      Object.freeze<IProvince>({
        code: "KN-01",
        name: "Christ Church Nichola Town",
        slug: "christ-church-nichola-town",
      }),
      Object.freeze<IProvince>({
        code: "KN-02",
        name: "Saint Anne Sandy Point",
        slug: "saint-anne-sandy-point",
      }),
      Object.freeze<IProvince>({
        code: "KN-03",
        name: "Saint George Basseterre",
        slug: "saint-george-basseterre",
      }),
      Object.freeze<IProvince>({
        code: "KN-04",
        name: "Saint George Gingerland",
        slug: "saint-george-gingerland",
      }),
      Object.freeze<IProvince>({
        code: "KN-05",
        name: "Saint James Windward",
        slug: "saint-james-windward",
      }),
      Object.freeze<IProvince>({
        code: "KN-06",
        name: "Saint John Capisterre",
        slug: "saint-john-capisterre",
      }),
      Object.freeze<IProvince>({
        code: "KN-07",
        name: "Saint John Figtree",
        slug: "saint-john-figtree",
      }),
      Object.freeze<IProvince>({
        code: "KN-08",
        name: "Saint Mary Cayon",
        slug: "saint-mary-cayon",
      }),
      Object.freeze<IProvince>({
        code: "KN-09",
        name: "Saint Paul Capisterre",
        slug: "saint-paul-capisterre",
      }),
      Object.freeze<IProvince>({
        code: "KN-10",
        name: "Saint Paul Charlestown",
        slug: "saint-paul-charlestown",
      }),
      Object.freeze<IProvince>({
        code: "KN-11",
        name: "Saint Peter Basseterre",
        slug: "saint-peter-basseterre",
      }),
      Object.freeze<IProvince>({
        code: "KN-12",
        name: "Saint Thomas Lowland",
        slug: "saint-thomas-lowland",
      }),
      Object.freeze<IProvince>({
        code: "KN-13",
        name: "Saint Thomas Middle Island",
        slug: "saint-thomas-middle-island",
      }),
      Object.freeze<IProvince>({
        code: "KN-15",
        name: "Trinity Palmetto Point",
        slug: "trinity-palmetto-point",
      }),
    ],
  }),
  LC: Object.freeze<ICountry>({
    code: "LC",
    currency: CURRENCIES.XCD,
    name: "Saint Lucia",
    nameWithArticle: "Saint Lucia",
    provinces: [
      Object.freeze<IProvince>({
        code: "LC-01",
        name: "Anse la Raye",
        slug: "anse-la-raye",
      }),
      Object.freeze<IProvince>({
        code: "LC-02",
        name: "Castries",
        slug: "castries",
      }),
      Object.freeze<IProvince>({
        code: "LC-03",
        name: "Choiseul",
        slug: "choiseul",
      }),
      Object.freeze<IProvince>({
        code: "LC-05",
        name: "Dennery",
        slug: "dennery",
      }),
      Object.freeze<IProvince>({
        code: "LC-06",
        name: "Gros Islet",
        slug: "gros-islet",
      }),
      Object.freeze<IProvince>({
        code: "LC-07",
        name: "Laborie",
        slug: "laborie",
      }),
      Object.freeze<IProvince>({
        code: "LC-08",
        name: "Micoud",
        slug: "micoud",
      }),
      Object.freeze<IProvince>({
        code: "LC-10",
        name: "Soufri\u00e8re",
        slug: "soufriere",
      }),
      Object.freeze<IProvince>({
        code: "LC-11",
        name: "Vieux Fort",
        slug: "vieux-fort",
      }),
      Object.freeze<IProvince>({
        code: "LC-12",
        name: "Canaries",
        slug: "canaries",
      }),
    ],
  }),
  VC: Object.freeze<ICountry>({
    code: "VC",
    currency: CURRENCIES.XCD,
    name: "Saint Vincent and the Grenadines",
    nameWithArticle: "Saint Vincent and the Grenadines",
    provinces: [
      Object.freeze<IProvince>({
        code: "VC-01",
        name: "Charlotte",
        slug: "charlotte",
      }),
      Object.freeze<IProvince>({
        code: "VC-02",
        name: "Saint Andrew",
        slug: "saint-andrew",
      }),
      Object.freeze<IProvince>({
        code: "VC-03",
        name: "Saint David",
        slug: "saint-david",
      }),
      Object.freeze<IProvince>({
        code: "VC-04",
        name: "Saint George",
        slug: "saint-george",
      }),
      Object.freeze<IProvince>({
        code: "VC-05",
        name: "Saint Patrick",
        slug: "saint-patrick",
      }),
      Object.freeze<IProvince>({
        code: "VC-06",
        name: "Grenadines",
        slug: "grenadines",
      }),
    ],
  }),
  WS: Object.freeze<ICountry>({
    code: "WS",
    currency: CURRENCIES.WST,
    name: "Samoa",
    nameWithArticle: "Samoa",
    provinces: [
      Object.freeze<IProvince>({
        code: "WS-AA",
        name: "A'ana",
        slug: "aana",
      }),
      Object.freeze<IProvince>({
        code: "WS-AL",
        name: "Aiga-i-le-Tai",
        slug: "aiga-i-le-tai",
      }),
      Object.freeze<IProvince>({
        code: "WS-AT",
        name: "Atua",
        slug: "atua",
      }),
      Object.freeze<IProvince>({
        code: "WS-FA",
        name: "Fa'asaleleaga",
        slug: "faasaleleaga",
      }),
      Object.freeze<IProvince>({
        code: "WS-GE",
        name: "Gaga'emauga",
        slug: "gagaemauga",
      }),
      Object.freeze<IProvince>({
        code: "WS-GI",
        name: "Gagaifomauga",
        slug: "gagaifomauga",
      }),
      Object.freeze<IProvince>({
        code: "WS-PA",
        name: "Palauli",
        slug: "palauli",
      }),
      Object.freeze<IProvince>({
        code: "WS-SA",
        name: "Satupa'itea",
        slug: "satupaitea",
      }),
      Object.freeze<IProvince>({
        code: "WS-TU",
        name: "Tuamasaga",
        slug: "tuamasaga",
      }),
      Object.freeze<IProvince>({
        code: "WS-VF",
        name: "Va'a-o-Fonoti",
        slug: "vaa-o-fonoti",
      }),
      Object.freeze<IProvince>({
        code: "WS-VS",
        name: "Vaisigano",
        slug: "vaisigano",
      }),
    ],
  }),
  SM: Object.freeze<ICountry>({
    code: "SM",
    currency: CURRENCIES.EUR,
    name: "San Marino",
    nameWithArticle: "San Marino",
    provinces: [
      Object.freeze<IProvince>({
        code: "SM-01",
        name: "Acquaviva",
        slug: "acquaviva",
      }),
      Object.freeze<IProvince>({
        code: "SM-02",
        name: "Chiesanuova",
        slug: "chiesanuova",
      }),
      Object.freeze<IProvince>({
        code: "SM-03",
        name: "Domagnano",
        slug: "domagnano",
      }),
      Object.freeze<IProvince>({
        code: "SM-04",
        name: "Faetano",
        slug: "faetano",
      }),
      Object.freeze<IProvince>({
        code: "SM-05",
        name: "Fiorentino",
        slug: "fiorentino",
      }),
      Object.freeze<IProvince>({
        code: "SM-06",
        name: "Borgo Maggiore",
        slug: "borgo-maggiore",
      }),
      Object.freeze<IProvince>({
        code: "SM-07",
        name: "San Marino",
        slug: "san-marino",
      }),
      Object.freeze<IProvince>({
        code: "SM-08",
        name: "Montegiardino",
        slug: "montegiardino",
      }),
      Object.freeze<IProvince>({
        code: "SM-09",
        name: "Serravalle",
        slug: "serravalle",
      }),
    ],
  }),
  ST: Object.freeze<ICountry>({
    code: "ST",
    currency: CURRENCIES.STD,
    name: "Sao Tome and Principe",
    nameWithArticle: "Sao Tome and Principe",
    provinces: [
      Object.freeze<IProvince>({
        code: "ST-P",
        name: "Pr\u00edncipe",
        slug: "principe",
      }),
      Object.freeze<IProvince>({
        code: "ST-S",
        name: "S\u00e3o Tom\u00e9",
        slug: "sao-tome",
      }),
    ],
  }),
  SA: Object.freeze<ICountry>({
    code: "SA",
    currency: CURRENCIES.SAR,
    name: "Saudi Arabia",
    nameWithArticle: "Saudi Arabia",
    provinces: [
      Object.freeze<IProvince>({
        code: "SA-01",
        name: "Ar Riy\u0101\u1e11",
        slug: "ar-riyad",
      }),
      Object.freeze<IProvince>({
        code: "SA-02",
        name: "Makkah al Mukarramah",
        slug: "makkah-al-mukarramah",
      }),
      Object.freeze<IProvince>({
        code: "SA-03",
        name: "Al Mad\u012bnah al Munawwarah",
        slug: "al-madinah-al-munawwarah",
      }),
      Object.freeze<IProvince>({
        code: "SA-04",
        name: "Ash Sharq\u012byah",
        slug: "ash-sharqiyah",
      }),
      Object.freeze<IProvince>({
        code: "SA-05",
        name: "Al Qa\u015f\u012bm",
        slug: "al-qasim",
      }),
      Object.freeze<IProvince>({
        code: "SA-06",
        name: "\u1e28\u0101'il",
        slug: "hail",
      }),
      Object.freeze<IProvince>({
        code: "SA-07",
        name: "Tab\u016bk",
        slug: "tabuk",
      }),
      Object.freeze<IProvince>({
        code: "SA-08",
        name: "Al \u1e28ud\u016bd ash Sham\u0101l\u012byah",
        slug: "al-hudud-ash-shamaliyah",
      }),
      Object.freeze<IProvince>({
        code: "SA-09",
        name: "J\u0101z\u0101n",
        slug: "jazan",
      }),
      Object.freeze<IProvince>({
        code: "SA-10",
        name: "Najr\u0101n",
        slug: "najran",
      }),
      Object.freeze<IProvince>({
        code: "SA-11",
        name: "Al B\u0101\u1e29ah",
        slug: "al-bahah",
      }),
      Object.freeze<IProvince>({
        code: "SA-12",
        name: "Al Jawf",
        slug: "al-jawf",
      }),
      Object.freeze<IProvince>({
        code: "SA-14",
        name: "'As\u012br",
        slug: "asir",
      }),
    ],
  }),
  SN: Object.freeze<ICountry>({
    code: "SN",
    currency: CURRENCIES.XAF,
    name: "Senegal",
    nameWithArticle: "Senegal",
    provinces: [
      Object.freeze<IProvince>({
        code: "SN-DB",
        name: "Diourbel",
        slug: "diourbel",
      }),
      Object.freeze<IProvince>({
        code: "SN-DK",
        name: "Dakar",
        slug: "dakar",
      }),
      Object.freeze<IProvince>({
        code: "SN-FK",
        name: "Fatick",
        slug: "fatick",
      }),
      Object.freeze<IProvince>({
        code: "SN-KA",
        name: "Kaffrine",
        slug: "kaffrine",
      }),
      Object.freeze<IProvince>({
        code: "SN-KD",
        name: "Kolda",
        slug: "kolda",
      }),
      Object.freeze<IProvince>({
        code: "SN-KE",
        name: "K\u00e9dougou",
        slug: "kedougou",
      }),
      Object.freeze<IProvince>({
        code: "SN-KL",
        name: "Kaolack",
        slug: "kaolack",
      }),
      Object.freeze<IProvince>({
        code: "SN-LG",
        name: "Louga",
        slug: "louga",
      }),
      Object.freeze<IProvince>({
        code: "SN-MT",
        name: "Matam",
        slug: "matam",
      }),
      Object.freeze<IProvince>({
        code: "SN-SE",
        name: "S\u00e9dhiou",
        slug: "sedhiou",
      }),
      Object.freeze<IProvince>({
        code: "SN-SL",
        name: "Saint-Louis",
        slug: "saint-louis",
      }),
      Object.freeze<IProvince>({
        code: "SN-TC",
        name: "Tambacounda",
        slug: "tambacounda",
      }),
      Object.freeze<IProvince>({
        code: "SN-TH",
        name: "Thi\u00e8s",
        slug: "thies",
      }),
      Object.freeze<IProvince>({
        code: "SN-ZG",
        name: "Ziguinchor",
        slug: "ziguinchor",
      }),
    ],
  }),
  RS: Object.freeze<ICountry>({
    code: "RS",
    currency: CURRENCIES.RSD,
    name: "Serbia",
    nameWithArticle: "Serbia",
    provinces: [
      Object.freeze<IProvince>({
        code: "RS-00",
        name: "Beograd",
        slug: "beograd",
      }),
      Object.freeze<IProvince>({
        code: "RS-01",
        name: "Severnoba\u010dki okrug",
        slug: "severnobacki-okrug",
      }),
      Object.freeze<IProvince>({
        code: "RS-02",
        name: "Srednjebanatski okrug",
        slug: "srednjebanatski-okrug",
      }),
      Object.freeze<IProvince>({
        code: "RS-03",
        name: "Severnobanatski okrug",
        slug: "severnobanatski-okrug",
      }),
      Object.freeze<IProvince>({
        code: "RS-04",
        name: "Ju\u017enobanatski okrug",
        slug: "juznobanatski-okrug",
      }),
      Object.freeze<IProvince>({
        code: "RS-05",
        name: "Zapadnoba\u010dki okrug",
        slug: "zapadnobacki-okrug",
      }),
      Object.freeze<IProvince>({
        code: "RS-06",
        name: "Ju\u017enoba\u010dki okrug",
        slug: "juznobacki-okrug",
      }),
      Object.freeze<IProvince>({
        code: "RS-07",
        name: "Sremski okrug",
        slug: "sremski-okrug",
      }),
      Object.freeze<IProvince>({
        code: "RS-08",
        name: "Ma\u010dvanski okrug",
        slug: "macvanski-okrug",
      }),
      Object.freeze<IProvince>({
        code: "RS-09",
        name: "Kolubarski okrug",
        slug: "kolubarski-okrug",
      }),
      Object.freeze<IProvince>({
        code: "RS-10",
        name: "Podunavski okrug",
        slug: "podunavski-okrug",
      }),
      Object.freeze<IProvince>({
        code: "RS-11",
        name: "Brani\u010devski okrug",
        slug: "branicevski-okrug",
      }),
      Object.freeze<IProvince>({
        code: "RS-12",
        name: "\u0160umadijski okrug",
        slug: "sumadijski-okrug",
      }),
      Object.freeze<IProvince>({
        code: "RS-13",
        name: "Pomoravski okrug",
        slug: "pomoravski-okrug",
      }),
      Object.freeze<IProvince>({
        code: "RS-14",
        name: "Borski okrug",
        slug: "borski-okrug",
      }),
      Object.freeze<IProvince>({
        code: "RS-15",
        name: "Zaje\u010darski okrug",
        slug: "zajecarski-okrug",
      }),
      Object.freeze<IProvince>({
        code: "RS-16",
        name: "Zlatiborski okrug",
        slug: "zlatiborski-okrug",
      }),
      Object.freeze<IProvince>({
        code: "RS-17",
        name: "Moravi\u010dki okrug",
        slug: "moravicki-okrug",
      }),
      Object.freeze<IProvince>({
        code: "RS-18",
        name: "Ra\u0161ki okrug",
        slug: "raski-okrug",
      }),
      Object.freeze<IProvince>({
        code: "RS-19",
        name: "Rasinski okrug",
        slug: "rasinski-okrug",
      }),
      Object.freeze<IProvince>({
        code: "RS-20",
        name: "Ni\u0161avski okrug",
        slug: "nisavski-okrug",
      }),
      Object.freeze<IProvince>({
        code: "RS-21",
        name: "Topli\u010dki okrug",
        slug: "toplicki-okrug",
      }),
      Object.freeze<IProvince>({
        code: "RS-22",
        name: "Pirotski okrug",
        slug: "pirotski-okrug",
      }),
      Object.freeze<IProvince>({
        code: "RS-23",
        name: "Jablani\u010dki okrug",
        slug: "jablanicki-okrug",
      }),
      Object.freeze<IProvince>({
        code: "RS-24",
        name: "P\u010dinjski okrug",
        slug: "pcinjski-okrug",
      }),
      Object.freeze<IProvince>({
        code: "RS-25",
        name: "Kosovski okrug",
        slug: "kosovski-okrug",
      }),
      Object.freeze<IProvince>({
        code: "RS-26",
        name: "Pe\u0107ki okrug",
        slug: "pecki-okrug",
      }),
      Object.freeze<IProvince>({
        code: "RS-27",
        name: "Prizrenski okrug",
        slug: "prizrenski-okrug",
      }),
      Object.freeze<IProvince>({
        code: "RS-28",
        name: "Kosovsko-Mitrova\u010dki okrug",
        slug: "kosovsko-mitrovacki-okrug",
      }),
      Object.freeze<IProvince>({
        code: "RS-29",
        name: "Kosovsko-Pomoravski okrug",
        slug: "kosovsko-pomoravski-okrug",
      }),
      Object.freeze<IProvince>({
        code: "RS-KM",
        name: "Kosovo-Metohija",
        slug: "kosovo-metohija",
      }),
      Object.freeze<IProvince>({
        code: "RS-VO",
        name: "Vojvodina",
        slug: "vojvodina",
      }),
    ],
  }),
  SC: Object.freeze<ICountry>({
    code: "SC",
    currency: CURRENCIES.SCR,
    name: "Seychelles",
    nameWithArticle: "Seychelles",
    provinces: [
      Object.freeze<IProvince>({
        code: "SC-01",
        name: "Anse aux Pins",
        slug: "anse-aux-pins",
      }),
      Object.freeze<IProvince>({
        code: "SC-02",
        name: "Ans Bwalo",
        slug: "ans-bwalo",
      }),
      Object.freeze<IProvince>({
        code: "SC-03",
        name: "Anse Etoile",
        slug: "anse-etoile",
      }),
      Object.freeze<IProvince>({
        code: "SC-04",
        name: "Au Cap",
        slug: "au-cap",
      }),
      Object.freeze<IProvince>({
        code: "SC-05",
        name: "Anse Royale",
        slug: "anse-royale",
      }),
      Object.freeze<IProvince>({
        code: "SC-06",
        name: "Baie Lazare",
        slug: "baie-lazare",
      }),
      Object.freeze<IProvince>({
        code: "SC-07",
        name: "Baie Sainte-Anne",
        slug: "baie-sainte-anne",
      }),
      Object.freeze<IProvince>({
        code: "SC-08",
        name: "Beau Vallon",
        slug: "beau-vallon",
      }),
      Object.freeze<IProvince>({
        code: "SC-09",
        name: "Bel Air",
        slug: "bel-air",
      }),
      Object.freeze<IProvince>({
        code: "SC-10",
        name: "Bel Ombre",
        slug: "bel-ombre",
      }),
      Object.freeze<IProvince>({
        code: "SC-11",
        name: "Cascade",
        slug: "cascade",
      }),
      Object.freeze<IProvince>({
        code: "SC-12",
        name: "Glacis",
        slug: "glacis",
      }),
      Object.freeze<IProvince>({
        code: "SC-13",
        name: "Grand'Anse Mah\u00e9",
        slug: "grandanse-mahe",
      }),
      Object.freeze<IProvince>({
        code: "SC-14",
        name: "Grand'Anse Praslin",
        slug: "grandanse-praslin",
      }),
      Object.freeze<IProvince>({
        code: "SC-15",
        name: "Ladig",
        slug: "ladig",
      }),
      Object.freeze<IProvince>({
        code: "SC-16",
        name: "English River",
        slug: "english-river",
      }),
      Object.freeze<IProvince>({
        code: "SC-17",
        name: "Mon Bikston",
        slug: "mon-bikston",
      }),
      Object.freeze<IProvince>({
        code: "SC-18",
        name: "Mon Fleri",
        slug: "mon-fleri",
      }),
      Object.freeze<IProvince>({
        code: "SC-19",
        name: "Plaisance",
        slug: "plaisance",
      }),
      Object.freeze<IProvince>({
        code: "SC-20",
        name: "Pointe La Rue",
        slug: "pointe-la-rue",
      }),
      Object.freeze<IProvince>({
        code: "SC-21",
        name: "Porglo",
        slug: "porglo",
      }),
      Object.freeze<IProvince>({
        code: "SC-22",
        name: "Saint Louis",
        slug: "saint-louis",
      }),
      Object.freeze<IProvince>({
        code: "SC-23",
        name: "Takamaka",
        slug: "takamaka",
      }),
      Object.freeze<IProvince>({
        code: "SC-24",
        name: "Lemamel",
        slug: "lemamel",
      }),
      Object.freeze<IProvince>({
        code: "SC-25",
        name: "Roche Ca\u00efman",
        slug: "roche-caiman",
      }),
    ],
  }),
  GS: Object.freeze<ICountry>({
    code: "GS",
    currency: CURRENCIES.GBP,
    name: "South Georgia and the South Sandwich Islands",
    nameWithArticle: "South Georgia and the South Sandwich Islands",
    provinces: [],
  }),
  SL: Object.freeze<ICountry>({
    code: "SL",
    currency: CURRENCIES.SLL,
    name: "Sierra Leone",
    nameWithArticle: "Sierra Leone",
    provinces: [
      Object.freeze<IProvince>({
        code: "SL-E",
        name: "Eastern",
        slug: "eastern",
      }),
      Object.freeze<IProvince>({
        code: "SL-N",
        name: "Northern",
        slug: "northern",
      }),
      Object.freeze<IProvince>({
        code: "SL-S",
        name: "Southern",
        slug: "southern",
      }),
      Object.freeze<IProvince>({
        code: "SL-W",
        name: "Western Area",
        slug: "western-area",
      }),
    ],
  }),
  SG: Object.freeze<ICountry>({
    code: "SG",
    currency: CURRENCIES.SGD,
    name: "Singapore",
    nameWithArticle: "Singapore",
    provinces: [
      Object.freeze<IProvince>({
        code: "SG-01",
        name: "Central Singapore",
        slug: "central-singapore",
      }),
      Object.freeze<IProvince>({
        code: "SG-02",
        name: "North East",
        slug: "north-east",
      }),
      Object.freeze<IProvince>({
        code: "SG-03",
        name: "North West",
        slug: "north-west",
      }),
      Object.freeze<IProvince>({
        code: "SG-04",
        name: "South East",
        slug: "south-east",
      }),
      Object.freeze<IProvince>({
        code: "SG-05",
        name: "South West",
        slug: "south-west",
      }),
    ],
  }),
  SK: Object.freeze<ICountry>({
    code: "SK",
    currency: CURRENCIES.EUR,
    name: "Slovakia",
    nameWithArticle: "Slovakia",
    provinces: [
      Object.freeze<IProvince>({
        code: "SK-BC",
        name: "Banskobystrick\u00fd kraj",
        slug: "banskobystricky-kraj",
      }),
      Object.freeze<IProvince>({
        code: "SK-BL",
        name: "Bratislavsk\u00fd kraj",
        slug: "bratislavsky-kraj",
      }),
      Object.freeze<IProvince>({
        code: "SK-KI",
        name: "Ko\u0161ick\u00fd kraj",
        slug: "kosicky-kraj",
      }),
      Object.freeze<IProvince>({
        code: "SK-NI",
        name: "Nitriansky kraj",
        slug: "nitriansky-kraj",
      }),
      Object.freeze<IProvince>({
        code: "SK-PV",
        name: "Pre\u0161ovsk\u00fd kraj",
        slug: "presovsky-kraj",
      }),
      Object.freeze<IProvince>({
        code: "SK-TA",
        name: "Trnavsk\u00fd kraj",
        slug: "trnavsky-kraj",
      }),
      Object.freeze<IProvince>({
        code: "SK-TC",
        name: "Tren\u010diansky kraj",
        slug: "trenciansky-kraj",
      }),
      Object.freeze<IProvince>({
        code: "SK-ZI",
        name: "\u017dilinsk\u00fd kraj",
        slug: "zilinsky-kraj",
      }),
    ],
  }),
  SI: Object.freeze<ICountry>({
    code: "SI",
    currency: CURRENCIES.EUR,
    name: "Slovenia",
    nameWithArticle: "Slovenia",
    provinces: [
      Object.freeze<IProvince>({
        code: "SI-001",
        name: "Ajdov\u0161\u010dina",
        slug: "ajdovscina",
      }),
      Object.freeze<IProvince>({
        code: "SI-002",
        name: "Beltinci",
        slug: "beltinci",
      }),
      Object.freeze<IProvince>({
        code: "SI-003",
        name: "Bled",
        slug: "bled",
      }),
      Object.freeze<IProvince>({
        code: "SI-004",
        name: "Bohinj",
        slug: "bohinj",
      }),
      Object.freeze<IProvince>({
        code: "SI-005",
        name: "Borovnica",
        slug: "borovnica",
      }),
      Object.freeze<IProvince>({
        code: "SI-006",
        name: "Bovec",
        slug: "bovec",
      }),
      Object.freeze<IProvince>({
        code: "SI-007",
        name: "Brda",
        slug: "brda",
      }),
      Object.freeze<IProvince>({
        code: "SI-008",
        name: "Brezovica",
        slug: "brezovica",
      }),
      Object.freeze<IProvince>({
        code: "SI-009",
        name: "Bre\u017eice",
        slug: "brezice",
      }),
      Object.freeze<IProvince>({
        code: "SI-010",
        name: "Ti\u0161ina",
        slug: "tisina",
      }),
      Object.freeze<IProvince>({
        code: "SI-011",
        name: "Celje",
        slug: "celje",
      }),
      Object.freeze<IProvince>({
        code: "SI-012",
        name: "Cerklje na Gorenjskem",
        slug: "cerklje-na-gorenjskem",
      }),
      Object.freeze<IProvince>({
        code: "SI-013",
        name: "Cerknica",
        slug: "cerknica",
      }),
      Object.freeze<IProvince>({
        code: "SI-014",
        name: "Cerkno",
        slug: "cerkno",
      }),
      Object.freeze<IProvince>({
        code: "SI-015",
        name: "\u010cren\u0161ovci",
        slug: "crensovci",
      }),
      Object.freeze<IProvince>({
        code: "SI-016",
        name: "\u010crna na Koro\u0161kem",
        slug: "crna-na-koroskem",
      }),
      Object.freeze<IProvince>({
        code: "SI-017",
        name: "\u010crnomelj",
        slug: "crnomelj",
      }),
      Object.freeze<IProvince>({
        code: "SI-018",
        name: "Destrnik",
        slug: "destrnik",
      }),
      Object.freeze<IProvince>({
        code: "SI-019",
        name: "Diva\u010da",
        slug: "divaca",
      }),
      Object.freeze<IProvince>({
        code: "SI-020",
        name: "Dobrepolje",
        slug: "dobrepolje",
      }),
      Object.freeze<IProvince>({
        code: "SI-021",
        name: "Dobrova-Polhov Gradec",
        slug: "dobrova-polhov-gradec",
      }),
      Object.freeze<IProvince>({
        code: "SI-022",
        name: "Dol pri Ljubljani",
        slug: "dol-pri-ljubljani",
      }),
      Object.freeze<IProvince>({
        code: "SI-023",
        name: "Dom\u017eale",
        slug: "domzale",
      }),
      Object.freeze<IProvince>({
        code: "SI-024",
        name: "Dornava",
        slug: "dornava",
      }),
      Object.freeze<IProvince>({
        code: "SI-025",
        name: "Dravograd",
        slug: "dravograd",
      }),
      Object.freeze<IProvince>({
        code: "SI-026",
        name: "Duplek",
        slug: "duplek",
      }),
      Object.freeze<IProvince>({
        code: "SI-027",
        name: "Gorenja vas-Poljane",
        slug: "gorenja-vas-poljane",
      }),
      Object.freeze<IProvince>({
        code: "SI-028",
        name: "Gori\u0161nica",
        slug: "gorisnica",
      }),
      Object.freeze<IProvince>({
        code: "SI-029",
        name: "Gornja Radgona",
        slug: "gornja-radgona",
      }),
      Object.freeze<IProvince>({
        code: "SI-030",
        name: "Gornji Grad",
        slug: "gornji-grad",
      }),
      Object.freeze<IProvince>({
        code: "SI-031",
        name: "Gornji Petrovci",
        slug: "gornji-petrovci",
      }),
      Object.freeze<IProvince>({
        code: "SI-032",
        name: "Grosuplje",
        slug: "grosuplje",
      }),
      Object.freeze<IProvince>({
        code: "SI-033",
        name: "\u0160alovci",
        slug: "salovci",
      }),
      Object.freeze<IProvince>({
        code: "SI-034",
        name: "Hrastnik",
        slug: "hrastnik",
      }),
      Object.freeze<IProvince>({
        code: "SI-035",
        name: "Hrpelje-Kozina",
        slug: "hrpelje-kozina",
      }),
      Object.freeze<IProvince>({
        code: "SI-036",
        name: "Idrija",
        slug: "idrija",
      }),
      Object.freeze<IProvince>({
        code: "SI-037",
        name: "Ig",
        slug: "ig",
      }),
      Object.freeze<IProvince>({
        code: "SI-038",
        name: "Ilirska Bistrica",
        slug: "ilirska-bistrica",
      }),
      Object.freeze<IProvince>({
        code: "SI-039",
        name: "Ivan\u010dna Gorica",
        slug: "ivancna-gorica",
      }),
      Object.freeze<IProvince>({
        code: "SI-040",
        name: "Izola",
        slug: "izola",
      }),
      Object.freeze<IProvince>({
        code: "SI-041",
        name: "Jesenice",
        slug: "jesenice",
      }),
      Object.freeze<IProvince>({
        code: "SI-042",
        name: "Jur\u0161inci",
        slug: "jursinci",
      }),
      Object.freeze<IProvince>({
        code: "SI-043",
        name: "Kamnik",
        slug: "kamnik",
      }),
      Object.freeze<IProvince>({
        code: "SI-044",
        name: "Kanal",
        slug: "kanal",
      }),
      Object.freeze<IProvince>({
        code: "SI-045",
        name: "Kidri\u010devo",
        slug: "kidricevo",
      }),
      Object.freeze<IProvince>({
        code: "SI-046",
        name: "Kobarid",
        slug: "kobarid",
      }),
      Object.freeze<IProvince>({
        code: "SI-047",
        name: "Kobilje",
        slug: "kobilje",
      }),
      Object.freeze<IProvince>({
        code: "SI-048",
        name: "Ko\u010devje",
        slug: "kocevje",
      }),
      Object.freeze<IProvince>({
        code: "SI-049",
        name: "Komen",
        slug: "komen",
      }),
      Object.freeze<IProvince>({
        code: "SI-050",
        name: "Koper",
        slug: "koper",
      }),
      Object.freeze<IProvince>({
        code: "SI-051",
        name: "Kozje",
        slug: "kozje",
      }),
      Object.freeze<IProvince>({
        code: "SI-052",
        name: "Kranj",
        slug: "kranj",
      }),
      Object.freeze<IProvince>({
        code: "SI-053",
        name: "Kranjska Gora",
        slug: "kranjska-gora",
      }),
      Object.freeze<IProvince>({
        code: "SI-054",
        name: "Kr\u0161ko",
        slug: "krsko",
      }),
      Object.freeze<IProvince>({
        code: "SI-055",
        name: "Kungota",
        slug: "kungota",
      }),
      Object.freeze<IProvince>({
        code: "SI-056",
        name: "Kuzma",
        slug: "kuzma",
      }),
      Object.freeze<IProvince>({
        code: "SI-057",
        name: "La\u0161ko",
        slug: "lasko",
      }),
      Object.freeze<IProvince>({
        code: "SI-058",
        name: "Lenart",
        slug: "lenart",
      }),
      Object.freeze<IProvince>({
        code: "SI-059",
        name: "Lendava",
        slug: "lendava",
      }),
      Object.freeze<IProvince>({
        code: "SI-060",
        name: "Litija",
        slug: "litija",
      }),
      Object.freeze<IProvince>({
        code: "SI-061",
        name: "Ljubljana",
        slug: "ljubljana",
      }),
      Object.freeze<IProvince>({
        code: "SI-062",
        name: "Ljubno",
        slug: "ljubno",
      }),
      Object.freeze<IProvince>({
        code: "SI-063",
        name: "Ljutomer",
        slug: "ljutomer",
      }),
      Object.freeze<IProvince>({
        code: "SI-064",
        name: "Logatec",
        slug: "logatec",
      }),
      Object.freeze<IProvince>({
        code: "SI-065",
        name: "Lo\u0161ka Dolina",
        slug: "loska-dolina",
      }),
      Object.freeze<IProvince>({
        code: "SI-066",
        name: "Lo\u0161ki Potok",
        slug: "loski-potok",
      }),
      Object.freeze<IProvince>({
        code: "SI-067",
        name: "Lu\u010de",
        slug: "luce",
      }),
      Object.freeze<IProvince>({
        code: "SI-068",
        name: "Lukovica",
        slug: "lukovica",
      }),
      Object.freeze<IProvince>({
        code: "SI-069",
        name: "Maj\u0161perk",
        slug: "majsperk",
      }),
      Object.freeze<IProvince>({
        code: "SI-070",
        name: "Maribor",
        slug: "maribor",
      }),
      Object.freeze<IProvince>({
        code: "SI-071",
        name: "Medvode",
        slug: "medvode",
      }),
      Object.freeze<IProvince>({
        code: "SI-072",
        name: "Menge\u0161",
        slug: "menges",
      }),
      Object.freeze<IProvince>({
        code: "SI-073",
        name: "Metlika",
        slug: "metlika",
      }),
      Object.freeze<IProvince>({
        code: "SI-074",
        name: "Me\u017eica",
        slug: "mezica",
      }),
      Object.freeze<IProvince>({
        code: "SI-075",
        name: "Miren-Kostanjevica",
        slug: "miren-kostanjevica",
      }),
      Object.freeze<IProvince>({
        code: "SI-076",
        name: "Mislinja",
        slug: "mislinja",
      }),
      Object.freeze<IProvince>({
        code: "SI-077",
        name: "Morav\u010de",
        slug: "moravce",
      }),
      Object.freeze<IProvince>({
        code: "SI-078",
        name: "Moravske Toplice",
        slug: "moravske-toplice",
      }),
      Object.freeze<IProvince>({
        code: "SI-079",
        name: "Mozirje",
        slug: "mozirje",
      }),
      Object.freeze<IProvince>({
        code: "SI-080",
        name: "Murska Sobota",
        slug: "murska-sobota",
      }),
      Object.freeze<IProvince>({
        code: "SI-081",
        name: "Muta",
        slug: "muta",
      }),
      Object.freeze<IProvince>({
        code: "SI-082",
        name: "Naklo",
        slug: "naklo",
      }),
      Object.freeze<IProvince>({
        code: "SI-083",
        name: "Nazarje",
        slug: "nazarje",
      }),
      Object.freeze<IProvince>({
        code: "SI-084",
        name: "Nova Gorica",
        slug: "nova-gorica",
      }),
      Object.freeze<IProvince>({
        code: "SI-085",
        name: "Novo Mesto",
        slug: "novo-mesto",
      }),
      Object.freeze<IProvince>({
        code: "SI-086",
        name: "Odranci",
        slug: "odranci",
      }),
      Object.freeze<IProvince>({
        code: "SI-087",
        name: "Ormo\u017e",
        slug: "ormoz",
      }),
      Object.freeze<IProvince>({
        code: "SI-088",
        name: "Osilnica",
        slug: "osilnica",
      }),
      Object.freeze<IProvince>({
        code: "SI-089",
        name: "Pesnica",
        slug: "pesnica",
      }),
      Object.freeze<IProvince>({
        code: "SI-090",
        name: "Piran",
        slug: "piran",
      }),
      Object.freeze<IProvince>({
        code: "SI-091",
        name: "Pivka",
        slug: "pivka",
      }),
      Object.freeze<IProvince>({
        code: "SI-092",
        name: "Pod\u010detrtek",
        slug: "podcetrtek",
      }),
      Object.freeze<IProvince>({
        code: "SI-093",
        name: "Podvelka",
        slug: "podvelka",
      }),
      Object.freeze<IProvince>({
        code: "SI-094",
        name: "Postojna",
        slug: "postojna",
      }),
      Object.freeze<IProvince>({
        code: "SI-095",
        name: "Preddvor",
        slug: "preddvor",
      }),
      Object.freeze<IProvince>({
        code: "SI-096",
        name: "Ptuj",
        slug: "ptuj",
      }),
      Object.freeze<IProvince>({
        code: "SI-097",
        name: "Puconci",
        slug: "puconci",
      }),
      Object.freeze<IProvince>({
        code: "SI-098",
        name: "Ra\u010de-Fram",
        slug: "race-fram",
      }),
      Object.freeze<IProvince>({
        code: "SI-099",
        name: "Rade\u010de",
        slug: "radece",
      }),
      Object.freeze<IProvince>({
        code: "SI-100",
        name: "Radenci",
        slug: "radenci",
      }),
      Object.freeze<IProvince>({
        code: "SI-101",
        name: "Radlje ob Dravi",
        slug: "radlje-ob-dravi",
      }),
      Object.freeze<IProvince>({
        code: "SI-102",
        name: "Radovljica",
        slug: "radovljica",
      }),
      Object.freeze<IProvince>({
        code: "SI-103",
        name: "Ravne na Koro\u0161kem",
        slug: "ravne-na-koroskem",
      }),
      Object.freeze<IProvince>({
        code: "SI-104",
        name: "Ribnica",
        slug: "ribnica",
      }),
      Object.freeze<IProvince>({
        code: "SI-105",
        name: "Roga\u0161ovci",
        slug: "rogasovci",
      }),
      Object.freeze<IProvince>({
        code: "SI-106",
        name: "Roga\u0161ka Slatina",
        slug: "rogaska-slatina",
      }),
      Object.freeze<IProvince>({
        code: "SI-107",
        name: "Rogatec",
        slug: "rogatec",
      }),
      Object.freeze<IProvince>({
        code: "SI-108",
        name: "Ru\u0161e",
        slug: "ruse",
      }),
      Object.freeze<IProvince>({
        code: "SI-109",
        name: "Semi\u010d",
        slug: "semic",
      }),
      Object.freeze<IProvince>({
        code: "SI-110",
        name: "Sevnica",
        slug: "sevnica",
      }),
      Object.freeze<IProvince>({
        code: "SI-111",
        name: "Se\u017eana",
        slug: "sezana",
      }),
      Object.freeze<IProvince>({
        code: "SI-112",
        name: "Slovenj Gradec",
        slug: "slovenj-gradec",
      }),
      Object.freeze<IProvince>({
        code: "SI-113",
        name: "Slovenska Bistrica",
        slug: "slovenska-bistrica",
      }),
      Object.freeze<IProvince>({
        code: "SI-114",
        name: "Slovenske Konjice",
        slug: "slovenske-konjice",
      }),
      Object.freeze<IProvince>({
        code: "SI-115",
        name: "Star\u0161e",
        slug: "starse",
      }),
      Object.freeze<IProvince>({
        code: "SI-116",
        name: "Sveti Jurij",
        slug: "sveti-jurij",
      }),
      Object.freeze<IProvince>({
        code: "SI-117",
        name: "\u0160en\u010dur",
        slug: "sencur",
      }),
      Object.freeze<IProvince>({
        code: "SI-118",
        name: "\u0160entilj",
        slug: "sentilj",
      }),
      Object.freeze<IProvince>({
        code: "SI-119",
        name: "\u0160entjernej",
        slug: "sentjernej",
      }),
      Object.freeze<IProvince>({
        code: "SI-120",
        name: "\u0160entjur",
        slug: "sentjur",
      }),
      Object.freeze<IProvince>({
        code: "SI-121",
        name: "\u0160kocjan",
        slug: "skocjan",
      }),
      Object.freeze<IProvince>({
        code: "SI-122",
        name: "\u0160kofja Loka",
        slug: "skofja-loka",
      }),
      Object.freeze<IProvince>({
        code: "SI-123",
        name: "\u0160kofljica",
        slug: "skofljica",
      }),
      Object.freeze<IProvince>({
        code: "SI-124",
        name: "\u0160marje pri Jel\u0161ah",
        slug: "smarje-pri-jelsah",
      }),
      Object.freeze<IProvince>({
        code: "SI-125",
        name: "\u0160martno ob Paki",
        slug: "smartno-ob-paki",
      }),
      Object.freeze<IProvince>({
        code: "SI-126",
        name: "\u0160o\u0161tanj",
        slug: "sostanj",
      }),
      Object.freeze<IProvince>({
        code: "SI-127",
        name: "\u0160tore",
        slug: "store",
      }),
      Object.freeze<IProvince>({
        code: "SI-128",
        name: "Tolmin",
        slug: "tolmin",
      }),
      Object.freeze<IProvince>({
        code: "SI-129",
        name: "Trbovlje",
        slug: "trbovlje",
      }),
      Object.freeze<IProvince>({
        code: "SI-130",
        name: "Trebnje",
        slug: "trebnje",
      }),
      Object.freeze<IProvince>({
        code: "SI-131",
        name: "Tr\u017ei\u010d",
        slug: "trzic",
      }),
      Object.freeze<IProvince>({
        code: "SI-132",
        name: "Turni\u0161\u010de",
        slug: "turnisce",
      }),
      Object.freeze<IProvince>({
        code: "SI-133",
        name: "Velenje",
        slug: "velenje",
      }),
      Object.freeze<IProvince>({
        code: "SI-134",
        name: "Velike La\u0161\u010de",
        slug: "velike-lasce",
      }),
      Object.freeze<IProvince>({
        code: "SI-135",
        name: "Videm",
        slug: "videm",
      }),
      Object.freeze<IProvince>({
        code: "SI-136",
        name: "Vipava",
        slug: "vipava",
      }),
      Object.freeze<IProvince>({
        code: "SI-137",
        name: "Vitanje",
        slug: "vitanje",
      }),
      Object.freeze<IProvince>({
        code: "SI-138",
        name: "Vodice",
        slug: "vodice",
      }),
      Object.freeze<IProvince>({
        code: "SI-139",
        name: "Vojnik",
        slug: "vojnik",
      }),
      Object.freeze<IProvince>({
        code: "SI-140",
        name: "Vrhnika",
        slug: "vrhnika",
      }),
      Object.freeze<IProvince>({
        code: "SI-141",
        name: "Vuzenica",
        slug: "vuzenica",
      }),
      Object.freeze<IProvince>({
        code: "SI-142",
        name: "Zagorje ob Savi",
        slug: "zagorje-ob-savi",
      }),
      Object.freeze<IProvince>({
        code: "SI-143",
        name: "Zavr\u010d",
        slug: "zavrc",
      }),
      Object.freeze<IProvince>({
        code: "SI-144",
        name: "Zre\u010de",
        slug: "zrece",
      }),
      Object.freeze<IProvince>({
        code: "SI-146",
        name: "\u017delezniki",
        slug: "zelezniki",
      }),
      Object.freeze<IProvince>({
        code: "SI-147",
        name: "\u017diri",
        slug: "ziri",
      }),
      Object.freeze<IProvince>({
        code: "SI-148",
        name: "Benedikt",
        slug: "benedikt",
      }),
      Object.freeze<IProvince>({
        code: "SI-149",
        name: "Bistrica ob Sotli",
        slug: "bistrica-ob-sotli",
      }),
      Object.freeze<IProvince>({
        code: "SI-150",
        name: "Bloke",
        slug: "bloke",
      }),
      Object.freeze<IProvince>({
        code: "SI-151",
        name: "Braslov\u010de",
        slug: "braslovce",
      }),
      Object.freeze<IProvince>({
        code: "SI-152",
        name: "Cankova",
        slug: "cankova",
      }),
      Object.freeze<IProvince>({
        code: "SI-153",
        name: "Cerkvenjak",
        slug: "cerkvenjak",
      }),
      Object.freeze<IProvince>({
        code: "SI-154",
        name: "Dobje",
        slug: "dobje",
      }),
      Object.freeze<IProvince>({
        code: "SI-155",
        name: "Dobrna",
        slug: "dobrna",
      }),
      Object.freeze<IProvince>({
        code: "SI-156",
        name: "Dobrovnik",
        slug: "dobrovnik",
      }),
      Object.freeze<IProvince>({
        code: "SI-157",
        name: "Dolenjske Toplice",
        slug: "dolenjske-toplice",
      }),
      Object.freeze<IProvince>({
        code: "SI-158",
        name: "Grad",
        slug: "grad",
      }),
      Object.freeze<IProvince>({
        code: "SI-159",
        name: "Hajdina",
        slug: "hajdina",
      }),
      Object.freeze<IProvince>({
        code: "SI-160",
        name: "Ho\u010de-Slivnica",
        slug: "hoce-slivnica",
      }),
      Object.freeze<IProvince>({
        code: "SI-161",
        name: "Hodo\u0161",
        slug: "hodos",
      }),
      Object.freeze<IProvince>({
        code: "SI-162",
        name: "Horjul",
        slug: "horjul",
      }),
      Object.freeze<IProvince>({
        code: "SI-163",
        name: "Jezersko",
        slug: "jezersko",
      }),
      Object.freeze<IProvince>({
        code: "SI-164",
        name: "Komenda",
        slug: "komenda",
      }),
      Object.freeze<IProvince>({
        code: "SI-165",
        name: "Kostel",
        slug: "kostel",
      }),
      Object.freeze<IProvince>({
        code: "SI-166",
        name: "Kri\u017eevci",
        slug: "krizevci",
      }),
      Object.freeze<IProvince>({
        code: "SI-167",
        name: "Lovrenc na Pohorju",
        slug: "lovrenc-na-pohorju",
      }),
      Object.freeze<IProvince>({
        code: "SI-168",
        name: "Markovci",
        slug: "markovci",
      }),
      Object.freeze<IProvince>({
        code: "SI-169",
        name: "Miklav\u017e na Dravskem Polju",
        slug: "miklavz-na-dravskem-polju",
      }),
      Object.freeze<IProvince>({
        code: "SI-170",
        name: "Mirna Pe\u010d",
        slug: "mirna-pec",
      }),
      Object.freeze<IProvince>({
        code: "SI-171",
        name: "Oplotnica",
        slug: "oplotnica",
      }),
      Object.freeze<IProvince>({
        code: "SI-172",
        name: "Podlehnik",
        slug: "podlehnik",
      }),
      Object.freeze<IProvince>({
        code: "SI-173",
        name: "Polzela",
        slug: "polzela",
      }),
      Object.freeze<IProvince>({
        code: "SI-174",
        name: "Prebold",
        slug: "prebold",
      }),
      Object.freeze<IProvince>({
        code: "SI-175",
        name: "Prevalje",
        slug: "prevalje",
      }),
      Object.freeze<IProvince>({
        code: "SI-176",
        name: "Razkri\u017eje",
        slug: "razkrizje",
      }),
      Object.freeze<IProvince>({
        code: "SI-177",
        name: "Ribnica na Pohorju",
        slug: "ribnica-na-pohorju",
      }),
      Object.freeze<IProvince>({
        code: "SI-178",
        name: "Selnica ob Dravi",
        slug: "selnica-ob-dravi",
      }),
      Object.freeze<IProvince>({
        code: "SI-179",
        name: "Sodra\u017eica",
        slug: "sodrazica",
      }),
      Object.freeze<IProvince>({
        code: "SI-180",
        name: "Sol\u010dava",
        slug: "solcava",
      }),
      Object.freeze<IProvince>({
        code: "SI-181",
        name: "Sveta Ana",
        slug: "sveta-ana",
      }),
      Object.freeze<IProvince>({
        code: "SI-182",
        name: "Sveti Andra\u017e v Slovenskih Goricah",
        slug: "sveti-andraz-v-slovenskih-goricah",
      }),
      Object.freeze<IProvince>({
        code: "SI-183",
        name: "\u0160empeter-Vrtojba",
        slug: "sempeter-vrtojba",
      }),
      Object.freeze<IProvince>({
        code: "SI-184",
        name: "Tabor",
        slug: "tabor",
      }),
      Object.freeze<IProvince>({
        code: "SI-185",
        name: "Trnovska Vas",
        slug: "trnovska-vas",
      }),
      Object.freeze<IProvince>({
        code: "SI-186",
        name: "Trzin",
        slug: "trzin",
      }),
      Object.freeze<IProvince>({
        code: "SI-187",
        name: "Velika Polana",
        slug: "velika-polana",
      }),
      Object.freeze<IProvince>({
        code: "SI-188",
        name: "Ver\u017eej",
        slug: "verzej",
      }),
      Object.freeze<IProvince>({
        code: "SI-189",
        name: "Vransko",
        slug: "vransko",
      }),
      Object.freeze<IProvince>({
        code: "SI-190",
        name: "\u017dalec",
        slug: "zalec",
      }),
      Object.freeze<IProvince>({
        code: "SI-191",
        name: "\u017detale",
        slug: "zetale",
      }),
      Object.freeze<IProvince>({
        code: "SI-192",
        name: "\u017dirovnica",
        slug: "zirovnica",
      }),
      Object.freeze<IProvince>({
        code: "SI-193",
        name: "\u017du\u017eemberk",
        slug: "zuzemberk",
      }),
      Object.freeze<IProvince>({
        code: "SI-194",
        name: "\u0160martno pri Litiji",
        slug: "smartno-pri-litiji",
      }),
      Object.freeze<IProvince>({
        code: "SI-195",
        name: "Apa\u010de",
        slug: "apace",
      }),
      Object.freeze<IProvince>({
        code: "SI-196",
        name: "Cirkulane",
        slug: "cirkulane",
      }),
      Object.freeze<IProvince>({
        code: "SI-197",
        name: "Kosanjevica na Krki",
        slug: "kosanjevica-na-krki",
      }),
      Object.freeze<IProvince>({
        code: "SI-198",
        name: "Makole",
        slug: "makole",
      }),
      Object.freeze<IProvince>({
        code: "SI-199",
        name: "Mokronog-Trebelno",
        slug: "mokronog-trebelno",
      }),
      Object.freeze<IProvince>({
        code: "SI-200",
        name: "Polj\u010dane",
        slug: "poljcane",
      }),
      Object.freeze<IProvince>({
        code: "SI-201",
        name: "Ren\u010de-Vogrsko",
        slug: "rence-vogrsko",
      }),
      Object.freeze<IProvince>({
        code: "SI-202",
        name: "Sredi\u0161\u010de ob Dravi",
        slug: "sredisce-ob-dravi",
      }),
      Object.freeze<IProvince>({
        code: "SI-203",
        name: "Stra\u017ea",
        slug: "straza",
      }),
      Object.freeze<IProvince>({
        code: "SI-204",
        name: "Sveta Trojica v Slovenskih Goricah",
        slug: "sveta-trojica-v-slovenskih-goricah",
      }),
      Object.freeze<IProvince>({
        code: "SI-205",
        name: "Sveti Toma\u017e",
        slug: "sveti-tomaz",
      }),
      Object.freeze<IProvince>({
        code: "SI-206",
        name: "\u0160marje\u0161ke Toplice",
        slug: "smarjeske-toplice",
      }),
      Object.freeze<IProvince>({
        code: "SI-207",
        name: "Gorje",
        slug: "gorje",
      }),
      Object.freeze<IProvince>({
        code: "SI-208",
        name: "Log-Dragomer",
        slug: "log-dragomer",
      }),
      Object.freeze<IProvince>({
        code: "SI-209",
        name: "Re\u010dica ob Savinji",
        slug: "recica-ob-savinji",
      }),
      Object.freeze<IProvince>({
        code: "SI-210",
        name: "Sveti Jurij v Slovenskih Goricah",
        slug: "sveti-jurij-v-slovenskih-goricah",
      }),
      Object.freeze<IProvince>({
        code: "SI-211",
        name: "\u0160entrupert",
        slug: "sentrupert",
      }),
      Object.freeze<IProvince>({
        code: "SI-212",
        name: "Mirna",
        slug: "mirna",
      }),
    ],
  }),
  SB: Object.freeze<ICountry>({
    code: "SB",
    currency: CURRENCIES.SBD,
    name: "Solomon Islands",
    nameWithArticle: "Solomon Islands",
    provinces: [
      Object.freeze<IProvince>({
        code: "SB-CE",
        name: "Central",
        slug: "central",
      }),
      Object.freeze<IProvince>({
        code: "SB-CH",
        name: "Choiseul",
        slug: "choiseul",
      }),
      Object.freeze<IProvince>({
        code: "SB-CT",
        name: "Capital Territory",
        slug: "capital-territory",
      }),
      Object.freeze<IProvince>({
        code: "SB-GU",
        name: "Guadalcanal",
        slug: "guadalcanal",
      }),
      Object.freeze<IProvince>({
        code: "SB-IS",
        name: "Isabel",
        slug: "isabel",
      }),
      Object.freeze<IProvince>({
        code: "SB-MK",
        name: "Makira-Ulawa",
        slug: "makira-ulawa",
      }),
      Object.freeze<IProvince>({
        code: "SB-ML",
        name: "Malaita",
        slug: "malaita",
      }),
      Object.freeze<IProvince>({
        code: "SB-RB",
        name: "Rennell and Bellona",
        slug: "rennell-and-bellona",
      }),
      Object.freeze<IProvince>({
        code: "SB-TE",
        name: "Temotu",
        slug: "temotu",
      }),
      Object.freeze<IProvince>({
        code: "SB-WE",
        name: "Western",
        slug: "western",
      }),
    ],
  }),
  SO: Object.freeze<ICountry>({
    code: "SO",
    currency: CURRENCIES.SOS,
    name: "Somalia",
    nameWithArticle: "Somalia",
    provinces: [
      Object.freeze<IProvince>({
        code: "SO-AW",
        name: "Awdal",
        slug: "awdal",
      }),
      Object.freeze<IProvince>({
        code: "SO-BK",
        name: "Bakool",
        slug: "bakool",
      }),
      Object.freeze<IProvince>({
        code: "SO-BN",
        name: "Banaadir",
        slug: "banaadir",
      }),
      Object.freeze<IProvince>({
        code: "SO-BR",
        name: "Bari",
        slug: "bari",
      }),
      Object.freeze<IProvince>({
        code: "SO-BY",
        name: "Bay",
        slug: "bay",
      }),
      Object.freeze<IProvince>({
        code: "SO-GA",
        name: "Galguduud",
        slug: "galguduud",
      }),
      Object.freeze<IProvince>({
        code: "SO-GE",
        name: "Gedo",
        slug: "gedo",
      }),
      Object.freeze<IProvince>({
        code: "SO-HI",
        name: "Hiiraan",
        slug: "hiiraan",
      }),
      Object.freeze<IProvince>({
        code: "SO-JD",
        name: "Jubbada Dhexe",
        slug: "jubbada-dhexe",
      }),
      Object.freeze<IProvince>({
        code: "SO-JH",
        name: "Jubbada Hoose",
        slug: "jubbada-hoose",
      }),
      Object.freeze<IProvince>({
        code: "SO-MU",
        name: "Mudug",
        slug: "mudug",
      }),
      Object.freeze<IProvince>({
        code: "SO-NU",
        name: "Nugaal",
        slug: "nugaal",
      }),
      Object.freeze<IProvince>({
        code: "SO-SA",
        name: "Sanaag",
        slug: "sanaag",
      }),
      Object.freeze<IProvince>({
        code: "SO-SD",
        name: "Shabeellaha Dhexe",
        slug: "shabeellaha-dhexe",
      }),
      Object.freeze<IProvince>({
        code: "SO-SH",
        name: "Shabeellaha Hoose",
        slug: "shabeellaha-hoose",
      }),
      Object.freeze<IProvince>({
        code: "SO-SO",
        name: "Sool",
        slug: "sool",
      }),
      Object.freeze<IProvince>({
        code: "SO-TO",
        name: "Togdheer",
        slug: "togdheer",
      }),
      Object.freeze<IProvince>({
        code: "SO-WO",
        name: "Woqooyi Galbeed",
        slug: "woqooyi-galbeed",
      }),
    ],
  }),
  ZA: Object.freeze<ICountry>({
    code: "ZA",
    currency: CURRENCIES.ZAR,
    name: "South Africa",
    nameWithArticle: "South Africa",
    provinces: [
      Object.freeze<IProvince>({
        code: "ZA-EC",
        name: "Eastern Cape",
        slug: "eastern-cape",
      }),
      Object.freeze<IProvince>({
        code: "ZA-FS",
        name: "Free State",
        slug: "free-state",
      }),
      Object.freeze<IProvince>({
        code: "ZA-GP",
        name: "Gauteng",
        slug: "gauteng",
      }),
      Object.freeze<IProvince>({
        code: "ZA-LP",
        name: "Limpopo",
        slug: "limpopo",
      }),
      Object.freeze<IProvince>({
        code: "ZA-MP",
        name: "Mpumalanga",
        slug: "mpumalanga",
      }),
      Object.freeze<IProvince>({
        code: "ZA-NC",
        name: "Northern Cape",
        slug: "northern-cape",
      }),
      Object.freeze<IProvince>({
        code: "ZA-KZN",
        name: "Kwazulu-Natal",
        slug: "kwazulu-natal",
      }),
      Object.freeze<IProvince>({
        code: "ZA-NW",
        name: "North-West",
        slug: "north-west",
      }),
      Object.freeze<IProvince>({
        code: "ZA-WC",
        name: "Western Cape",
        slug: "western-cape",
      }),
    ],
  }),
  SS: Object.freeze<ICountry>({
    code: "SS",
    currency: CURRENCIES.SDG,
    name: "South Sudan",
    nameWithArticle: "South Sudan",
    provinces: [
      Object.freeze<IProvince>({
        code: "SS-BN",
        name: "Northern Bahr el Ghazal",
        slug: "northern-bahr-el-ghazal",
      }),
      Object.freeze<IProvince>({
        code: "SS-BW",
        name: "Western Bahr el Ghazal",
        slug: "western-bahr-el-ghazal",
      }),
      Object.freeze<IProvince>({
        code: "SS-EC",
        name: "Central Equatoria",
        slug: "central-equatoria",
      }),
      Object.freeze<IProvince>({
        code: "SS-EE",
        name: "Eastern Equatoria",
        slug: "eastern-equatoria",
      }),
      Object.freeze<IProvince>({
        code: "SS-EW",
        name: "Western Equatoria",
        slug: "western-equatoria",
      }),
      Object.freeze<IProvince>({
        code: "SS-JG",
        name: "Jonglei",
        slug: "jonglei",
      }),
      Object.freeze<IProvince>({
        code: "SS-LK",
        name: "Lakes",
        slug: "lakes",
      }),
      Object.freeze<IProvince>({
        code: "SS-NU",
        name: "Upper Nile",
        slug: "upper-nile",
      }),
      Object.freeze<IProvince>({
        code: "SS-UY",
        name: "Unity",
        slug: "unity",
      }),
      Object.freeze<IProvince>({
        code: "SS-WR",
        name: "Warrap",
        slug: "warrap",
      }),
    ],
  }),
  ES: Object.freeze<ICountry>({
    code: "ES",
    currency: CURRENCIES.EUR,
    name: "Spain",
    nameWithArticle: "Spain",
    provinces: [
      Object.freeze<IProvince>({
        code: "ES-AN",
        name: "Andaluc\u00eda",
        slug: "andalucia",
      }),
      Object.freeze<IProvince>({
        code: "ES-AR",
        name: "Arag\u00f3n",
        slug: "aragon",
      }),
      Object.freeze<IProvince>({
        code: "ES-AS",
        name: "Asturias, Principado de",
        slug: "asturias-principado-de",
      }),
      Object.freeze<IProvince>({
        code: "ES-CB",
        name: "Cantabria",
        slug: "cantabria",
      }),
      Object.freeze<IProvince>({
        code: "ES-CE",
        name: "Ceuta",
        slug: "ceuta",
      }),
      Object.freeze<IProvince>({
        code: "ES-CL",
        name: "Castilla y Le\u00f3n",
        slug: "castilla-y-leon",
      }),
      Object.freeze<IProvince>({
        code: "ES-CM",
        name: "Castilla-La Mancha",
        slug: "castilla-la-mancha",
      }),
      Object.freeze<IProvince>({
        code: "ES-CN",
        name: "Canarias",
        slug: "canarias",
      }),
      Object.freeze<IProvince>({
        code: "ES-CT",
        name: "Catalunya",
        slug: "catalunya",
      }),
      Object.freeze<IProvince>({
        code: "ES-EX",
        name: "Extremadura",
        slug: "extremadura",
      }),
      Object.freeze<IProvince>({
        code: "ES-GA",
        name: "Galicia",
        slug: "galicia",
      }),
      Object.freeze<IProvince>({
        code: "ES-IB",
        name: "Illes Balears",
        slug: "illes-balears",
      }),
      Object.freeze<IProvince>({
        code: "ES-MC",
        name: "Murcia, Regi\u00f3n de",
        slug: "murcia-region-de",
      }),
      Object.freeze<IProvince>({
        code: "ES-MD",
        name: "Madrid, Comunidad de",
        slug: "madrid-comunidad-de",
      }),
      Object.freeze<IProvince>({
        code: "ES-ML",
        name: "Melilla",
        slug: "melilla",
      }),
      Object.freeze<IProvince>({
        code: "ES-NC",
        name: "Nafarroako Foru Komunitatea*",
        slug: "nafarroako-foru-komunitatea",
      }),
      Object.freeze<IProvince>({
        code: "ES-PV",
        name: "Euskal Herria",
        slug: "euskal-herria",
      }),
      Object.freeze<IProvince>({
        code: "ES-RI",
        name: "La Rioja",
        slug: "la-rioja",
      }),
      Object.freeze<IProvince>({
        code: "ES-VC",
        name: "Valenciana, Comunidad",
        slug: "valenciana-comunidad",
      }),
    ],
  }),
  LK: Object.freeze<ICountry>({
    code: "LK",
    currency: CURRENCIES.LKR,
    name: "Sri Lanka",
    nameWithArticle: "Sri Lanka",
    provinces: [
      Object.freeze<IProvince>({
        code: "LK-1",
        name: "Basn\u0101hira pa\u1e37\u0101ta",
        slug: "basnahira-palata",
      }),
      Object.freeze<IProvince>({
        code: "LK-2",
        name: "Central Province",
        slug: "central-province",
      }),
      Object.freeze<IProvince>({
        code: "LK-3",
        name: "Daku\u1e47u pa\u1e37\u0101ta",
        slug: "dakunu-palata",
      }),
      Object.freeze<IProvince>({
        code: "LK-4",
        name: "Northern Province",
        slug: "northern-province",
      }),
      Object.freeze<IProvince>({
        code: "LK-5",
        name: "Eastern Province",
        slug: "eastern-province",
      }),
      Object.freeze<IProvince>({
        code: "LK-6",
        name: "North Western Province",
        slug: "north-western-province",
      }),
      Object.freeze<IProvince>({
        code: "LK-7",
        name: "North Central Province",
        slug: "north-central-province",
      }),
      Object.freeze<IProvince>({
        code: "LK-8",
        name: "\u016av\u0101 m\u0101k\u0101\u1e47am",
        slug: "uva-makanam",
      }),
      Object.freeze<IProvince>({
        code: "LK-9",
        name: "Chappirakamuva m\u0101k\u0101\u1e47am",
        slug: "chappirakamuva-makanam",
      }),
    ],
  }),
  BL: Object.freeze<ICountry>({
    code: "BL",
    currency: CURRENCIES.EUR,
    name: "Saint Barth\u00e9lemy",
    nameWithArticle: "Saint Barth\u00e9lemy",
    provinces: [],
  }),
  SX: Object.freeze<ICountry>({
    code: "SX",
    currency: CURRENCIES.ANG,
    name: "Sint Maarten",
    nameWithArticle: "Sint Maarten",
    provinces: [],
  }),
  MF: Object.freeze<ICountry>({
    code: "MF",
    currency: CURRENCIES.ANG,
    name: "Saint Martin",
    nameWithArticle: "Saint Martin",
    provinces: [],
  }),
  PM: Object.freeze<ICountry>({
    code: "PM",
    currency: CURRENCIES.EUR,
    name: "Saint Pierre and Miquelon",
    nameWithArticle: "Saint Pierre and Miquelon",
    provinces: [],
  }),
  SD: Object.freeze<ICountry>({
    code: "SD",
    currency: CURRENCIES.SDG,
    name: "Sudan",
    nameWithArticle: "Sudan",
    provinces: [
      Object.freeze<IProvince>({
        code: "SD-DC",
        name: "Central Darfur",
        slug: "central-darfur",
      }),
      Object.freeze<IProvince>({
        code: "SD-DE",
        name: "East Darfur",
        slug: "east-darfur",
      }),
      Object.freeze<IProvince>({
        code: "SD-DN",
        name: "North Darfur",
        slug: "north-darfur",
      }),
      Object.freeze<IProvince>({
        code: "SD-DS",
        name: "Jan\u016bb D\u0101rf\u016br",
        slug: "janub-darfur",
      }),
      Object.freeze<IProvince>({
        code: "SD-DW",
        name: "Gharb D\u0101rf\u016br",
        slug: "gharb-darfur",
      }),
      Object.freeze<IProvince>({
        code: "SD-GD",
        name: "Al Qa\u1e11\u0101rif",
        slug: "al-qadarif",
      }),
      Object.freeze<IProvince>({
        code: "SD-GZ",
        name: "Al Jaz\u012brah",
        slug: "al-jazirah",
      }),
      Object.freeze<IProvince>({
        code: "SD-KA",
        name: "Kassala",
        slug: "kassala",
      }),
      Object.freeze<IProvince>({
        code: "SD-KH",
        name: "Al Khar\u0163\u016bm",
        slug: "al-khartum",
      }),
      Object.freeze<IProvince>({
        code: "SD-KN",
        name: "North Kordofan",
        slug: "north-kordofan",
      }),
      Object.freeze<IProvince>({
        code: "SD-KS",
        name: "Jan\u016bb Kurduf\u0101n",
        slug: "janub-kurdufan",
      }),
      Object.freeze<IProvince>({
        code: "SD-NB",
        name: "An N\u012bl al Azraq",
        slug: "an-nil-al-azraq",
      }),
      Object.freeze<IProvince>({
        code: "SD-NO",
        name: "Ash Sham\u0101l\u012byah",
        slug: "ash-shamaliyah",
      }),
      Object.freeze<IProvince>({
        code: "SD-NR",
        name: "An N\u012bl",
        slug: "an-nil",
      }),
      Object.freeze<IProvince>({
        code: "SD-NW",
        name: "An N\u012bl al Abya\u1e11",
        slug: "an-nil-al-abyad",
      }),
      Object.freeze<IProvince>({
        code: "SD-RS",
        name: "Al Ba\u1e29r al A\u1e29mar",
        slug: "al-bahr-al-ahmar",
      }),
      Object.freeze<IProvince>({
        code: "SD-SI",
        name: "Sennar",
        slug: "sennar",
      }),
    ],
  }),
  SR: Object.freeze<ICountry>({
    code: "SR",
    currency: CURRENCIES.SRD,
    name: "Suriname",
    nameWithArticle: "Suriname",
    provinces: [
      Object.freeze<IProvince>({
        code: "SR-BR",
        name: "Brokopondo",
        slug: "brokopondo",
      }),
      Object.freeze<IProvince>({
        code: "SR-CM",
        name: "Commewijne",
        slug: "commewijne",
      }),
      Object.freeze<IProvince>({
        code: "SR-CR",
        name: "Coronie",
        slug: "coronie",
      }),
      Object.freeze<IProvince>({
        code: "SR-MA",
        name: "Marowijne",
        slug: "marowijne",
      }),
      Object.freeze<IProvince>({
        code: "SR-NI",
        name: "Nickerie",
        slug: "nickerie",
      }),
      Object.freeze<IProvince>({
        code: "SR-PM",
        name: "Paramaribo",
        slug: "paramaribo",
      }),
      Object.freeze<IProvince>({
        code: "SR-PR",
        name: "Para",
        slug: "para",
      }),
      Object.freeze<IProvince>({
        code: "SR-SA",
        name: "Saramacca",
        slug: "saramacca",
      }),
      Object.freeze<IProvince>({
        code: "SR-SI",
        name: "Sipaliwini",
        slug: "sipaliwini",
      }),
      Object.freeze<IProvince>({
        code: "SR-WA",
        name: "Wanica",
        slug: "wanica",
      }),
    ],
  }),
  SJ: Object.freeze<ICountry>({
    code: "SJ",
    currency: CURRENCIES.NOK,
    name: "Svalbard and Jan Mayen",
    nameWithArticle: "Svalbard and Jan Mayen",
    provinces: [],
  }),
  SZ: Object.freeze<ICountry>({
    code: "SZ",
    currency: CURRENCIES.SZL,
    name: "Eswatini",
    nameWithArticle: "Eswatini",
    provinces: [
      Object.freeze<IProvince>({
        code: "SZ-HH",
        name: "Hhohho",
        slug: "hhohho",
      }),
      Object.freeze<IProvince>({
        code: "SZ-LU",
        name: "Lubombo",
        slug: "lubombo",
      }),
      Object.freeze<IProvince>({
        code: "SZ-MA",
        name: "Manzini",
        slug: "manzini",
      }),
      Object.freeze<IProvince>({
        code: "SZ-SH",
        name: "Shiselweni",
        slug: "shiselweni",
      }),
    ],
  }),
  SE: Object.freeze<ICountry>({
    code: "SE",
    currency: CURRENCIES.SEK,
    name: "Sweden",
    nameWithArticle: "Sweden",
    provinces: [
      Object.freeze<IProvince>({
        code: "SE-AB",
        name: "Stockholms l\u00e4n",
        slug: "stockholms-lan",
      }),
      Object.freeze<IProvince>({
        code: "SE-AC",
        name: "V\u00e4sterbottens l\u00e4n",
        slug: "vasterbottens-lan",
      }),
      Object.freeze<IProvince>({
        code: "SE-BD",
        name: "Norrbottens l\u00e4n",
        slug: "norrbottens-lan",
      }),
      Object.freeze<IProvince>({
        code: "SE-C",
        name: "Uppsala l\u00e4n",
        slug: "uppsala-lan",
      }),
      Object.freeze<IProvince>({
        code: "SE-D",
        name: "S\u00f6dermanlands l\u00e4n",
        slug: "sodermanlands-lan",
      }),
      Object.freeze<IProvince>({
        code: "SE-E",
        name: "\u00d6sterg\u00f6tlands l\u00e4n",
        slug: "ostergotlands-lan",
      }),
      Object.freeze<IProvince>({
        code: "SE-F",
        name: "J\u00f6nk\u00f6pings l\u00e4n",
        slug: "jonkopings-lan",
      }),
      Object.freeze<IProvince>({
        code: "SE-G",
        name: "Kronobergs l\u00e4n",
        slug: "kronobergs-lan",
      }),
      Object.freeze<IProvince>({
        code: "SE-H",
        name: "Kalmar l\u00e4n",
        slug: "kalmar-lan",
      }),
      Object.freeze<IProvince>({
        code: "SE-I",
        name: "Gotlands l\u00e4n",
        slug: "gotlands-lan",
      }),
      Object.freeze<IProvince>({
        code: "SE-K",
        name: "Blekinge l\u00e4n",
        slug: "blekinge-lan",
      }),
      Object.freeze<IProvince>({
        code: "SE-M",
        name: "Sk\u00e5ne l\u00e4n",
        slug: "skane-lan",
      }),
      Object.freeze<IProvince>({
        code: "SE-N",
        name: "Hallands l\u00e4n",
        slug: "hallands-lan",
      }),
      Object.freeze<IProvince>({
        code: "SE-O",
        name: "V\u00e4stra G\u00f6talands l\u00e4n",
        slug: "vastra-gotalands-lan",
      }),
      Object.freeze<IProvince>({
        code: "SE-S",
        name: "V\u00e4rmlands l\u00e4n",
        slug: "varmlands-lan",
      }),
      Object.freeze<IProvince>({
        code: "SE-T",
        name: "\u00d6rebro l\u00e4n",
        slug: "orebro-lan",
      }),
      Object.freeze<IProvince>({
        code: "SE-U",
        name: "V\u00e4stmanlands l\u00e4n",
        slug: "vastmanlands-lan",
      }),
      Object.freeze<IProvince>({
        code: "SE-W",
        name: "Dalarnas l\u00e4n",
        slug: "dalarnas-lan",
      }),
      Object.freeze<IProvince>({
        code: "SE-X",
        name: "G\u00e4vleborgs l\u00e4n",
        slug: "gavleborgs-lan",
      }),
      Object.freeze<IProvince>({
        code: "SE-Y",
        name: "V\u00e4sternorrlands l\u00e4n",
        slug: "vasternorrlands-lan",
      }),
      Object.freeze<IProvince>({
        code: "SE-Z",
        name: "J\u00e4mtlands l\u00e4n",
        slug: "jamtlands-lan",
      }),
    ],
  }),
  CH: Object.freeze<ICountry>({
    code: "CH",
    currency: CURRENCIES.CHF,
    name: "Switzerland",
    nameWithArticle: "Switzerland",
    provinces: [
      Object.freeze<IProvince>({
        code: "CH-AG",
        name: "Aargau",
        slug: "aargau",
      }),
      Object.freeze<IProvince>({
        code: "CH-AI",
        name: "Appenzell Innerrhoden",
        slug: "appenzell-innerrhoden",
      }),
      Object.freeze<IProvince>({
        code: "CH-AR",
        name: "Appenzell Ausserrhoden",
        slug: "appenzell-ausserrhoden",
      }),
      Object.freeze<IProvince>({
        code: "CH-BE",
        name: "Bern",
        slug: "bern",
      }),
      Object.freeze<IProvince>({
        code: "CH-BL",
        name: "Basel-Landschaft",
        slug: "basel-landschaft",
      }),
      Object.freeze<IProvince>({
        code: "CH-BS",
        name: "Basel-Stadt",
        slug: "basel-stadt",
      }),
      Object.freeze<IProvince>({
        code: "CH-FR",
        name: "Freiburg",
        slug: "freiburg",
      }),
      Object.freeze<IProvince>({
        code: "CH-GE",
        name: "Gen\u00e8ve",
        slug: "geneve",
      }),
      Object.freeze<IProvince>({
        code: "CH-GL",
        name: "Glarus",
        slug: "glarus",
      }),
      Object.freeze<IProvince>({
        code: "CH-GR",
        name: "Graub\u00fcnden",
        slug: "graubunden",
      }),
      Object.freeze<IProvince>({
        code: "CH-JU",
        name: "Jura",
        slug: "jura",
      }),
      Object.freeze<IProvince>({
        code: "CH-LU",
        name: "Luzern",
        slug: "luzern",
      }),
      Object.freeze<IProvince>({
        code: "CH-NE",
        name: "Neuch\u00e2tel",
        slug: "neuchatel",
      }),
      Object.freeze<IProvince>({
        code: "CH-NW",
        name: "Nidwalden",
        slug: "nidwalden",
      }),
      Object.freeze<IProvince>({
        code: "CH-OW",
        name: "Obwalden",
        slug: "obwalden",
      }),
      Object.freeze<IProvince>({
        code: "CH-SG",
        name: "Sankt Gallen",
        slug: "sankt-gallen",
      }),
      Object.freeze<IProvince>({
        code: "CH-SH",
        name: "Schaffhausen",
        slug: "schaffhausen",
      }),
      Object.freeze<IProvince>({
        code: "CH-SO",
        name: "Solothurn",
        slug: "solothurn",
      }),
      Object.freeze<IProvince>({
        code: "CH-SZ",
        name: "Schwyz",
        slug: "schwyz",
      }),
      Object.freeze<IProvince>({
        code: "CH-TG",
        name: "Thurgau",
        slug: "thurgau",
      }),
      Object.freeze<IProvince>({
        code: "CH-TI",
        name: "Ticino",
        slug: "ticino",
      }),
      Object.freeze<IProvince>({
        code: "CH-UR",
        name: "Uri",
        slug: "uri",
      }),
      Object.freeze<IProvince>({
        code: "CH-VD",
        name: "Vaud",
        slug: "vaud",
      }),
      Object.freeze<IProvince>({
        code: "CH-VS",
        name: "Valais",
        slug: "valais",
      }),
      Object.freeze<IProvince>({
        code: "CH-ZG",
        name: "Zug",
        slug: "zug",
      }),
      Object.freeze<IProvince>({
        code: "CH-ZH",
        name: "Z\u00fcrich",
        slug: "zurich",
      }),
    ],
  }),
  SY: Object.freeze<ICountry>({
    code: "SY",
    currency: CURRENCIES.SYP,
    name: "Syria",
    nameWithArticle: "Syria",
    provinces: [
      Object.freeze<IProvince>({
        code: "SY-DI",
        name: "Dimashq",
        slug: "dimashq",
      }),
      Object.freeze<IProvince>({
        code: "SY-DR",
        name: "Dar'\u0101",
        slug: "dara",
      }),
      Object.freeze<IProvince>({
        code: "SY-DY",
        name: "Dayr az Zawr",
        slug: "dayr-az-zawr",
      }),
      Object.freeze<IProvince>({
        code: "SY-HA",
        name: "Al \u1e28asakah",
        slug: "al-hasakah",
      }),
      Object.freeze<IProvince>({
        code: "SY-HI",
        name: "\u1e28im\u015f",
        slug: "hims",
      }),
      Object.freeze<IProvince>({
        code: "SY-HL",
        name: "\u1e28alab",
        slug: "halab",
      }),
      Object.freeze<IProvince>({
        code: "SY-HM",
        name: "\u1e28am\u0101h",
        slug: "hamah",
      }),
      Object.freeze<IProvince>({
        code: "SY-ID",
        name: "Idlib",
        slug: "idlib",
      }),
      Object.freeze<IProvince>({
        code: "SY-LA",
        name: "Al L\u0101dhiq\u012byah",
        slug: "al-ladhiqiyah",
      }),
      Object.freeze<IProvince>({
        code: "SY-QU",
        name: "Al Qunay\u0163irah",
        slug: "al-qunaytirah",
      }),
      Object.freeze<IProvince>({
        code: "SY-RA",
        name: "Ar Raqqah",
        slug: "ar-raqqah",
      }),
      Object.freeze<IProvince>({
        code: "SY-RD",
        name: "R\u012bf Dimashq",
        slug: "rif-dimashq",
      }),
      Object.freeze<IProvince>({
        code: "SY-SU",
        name: "As Suwayd\u0101'",
        slug: "as-suwayda",
      }),
      Object.freeze<IProvince>({
        code: "SY-TA",
        name: "\u0162ar\u0163\u016bs",
        slug: "tartus",
      }),
    ],
  }),
  TW: Object.freeze<ICountry>({
    code: "TW",
    currency: CURRENCIES.TWD,
    name: "Taiwan",
    nameWithArticle: "Taiwan",
    provinces: [
      Object.freeze<IProvince>({
        code: "TW-KHH",
        name: "Kaohsiung",
        slug: "kaohsiung",
      }),
      Object.freeze<IProvince>({
        code: "TW-TPE",
        name: "Taipei",
        slug: "taipei",
      }),
    ],
  }),
  TJ: Object.freeze<ICountry>({
    code: "TJ",
    currency: CURRENCIES.TJS,
    name: "Tajikistan",
    nameWithArticle: "Tajikistan",
    provinces: [
      Object.freeze<IProvince>({
        code: "TJ-DU",
        name: "Dushanbe",
        slug: "dushanbe",
      }),
      Object.freeze<IProvince>({
        code: "TJ-GB",
        name: "K\u016dhistoni Badakhshon",
        slug: "kuhistoni-badakhshon",
      }),
      Object.freeze<IProvince>({
        code: "TJ-KT",
        name: "Khatlon",
        slug: "khatlon",
      }),
      Object.freeze<IProvince>({
        code: "TJ-SU",
        name: "Sughd",
        slug: "sughd",
      }),
    ],
  }),
  TZ: Object.freeze<ICountry>({
    code: "TZ",
    currency: CURRENCIES.TZS,
    name: "Tanzania, United Republic of",
    nameWithArticle: "Tanzania, The United Republic of",
    provinces: [
      Object.freeze<IProvince>({
        code: "TZ-01",
        name: "Arusha",
        slug: "arusha",
      }),
      Object.freeze<IProvince>({
        code: "TZ-02",
        name: "Dar es Salaam",
        slug: "dar-es-salaam",
      }),
      Object.freeze<IProvince>({
        code: "TZ-03",
        name: "Dodoma",
        slug: "dodoma",
      }),
      Object.freeze<IProvince>({
        code: "TZ-04",
        name: "Iringa",
        slug: "iringa",
      }),
      Object.freeze<IProvince>({
        code: "TZ-05",
        name: "Kagera",
        slug: "kagera",
      }),
      Object.freeze<IProvince>({
        code: "TZ-06",
        name: "Kaskazini Pemba",
        slug: "kaskazini-pemba",
      }),
      Object.freeze<IProvince>({
        code: "TZ-07",
        name: "Kaskazini Unguja",
        slug: "kaskazini-unguja",
      }),
      Object.freeze<IProvince>({
        code: "TZ-08",
        name: "Kigoma",
        slug: "kigoma",
      }),
      Object.freeze<IProvince>({
        code: "TZ-09",
        name: "Kilimanjaro",
        slug: "kilimanjaro",
      }),
      Object.freeze<IProvince>({
        code: "TZ-10",
        name: "Kusini Pemba",
        slug: "kusini-pemba",
      }),
      Object.freeze<IProvince>({
        code: "TZ-11",
        name: "Kusini Unguja",
        slug: "kusini-unguja",
      }),
      Object.freeze<IProvince>({
        code: "TZ-12",
        name: "Lindi",
        slug: "lindi",
      }),
      Object.freeze<IProvince>({
        code: "TZ-13",
        name: "Mara",
        slug: "mara",
      }),
      Object.freeze<IProvince>({
        code: "TZ-14",
        name: "Mbeya",
        slug: "mbeya",
      }),
      Object.freeze<IProvince>({
        code: "TZ-15",
        name: "Mjini Magharibi",
        slug: "mjini-magharibi",
      }),
      Object.freeze<IProvince>({
        code: "TZ-16",
        name: "Morogoro",
        slug: "morogoro",
      }),
      Object.freeze<IProvince>({
        code: "TZ-17",
        name: "Mtwara",
        slug: "mtwara",
      }),
      Object.freeze<IProvince>({
        code: "TZ-18",
        name: "Mwanza",
        slug: "mwanza",
      }),
      Object.freeze<IProvince>({
        code: "TZ-19",
        name: "Coast",
        slug: "coast",
      }),
      Object.freeze<IProvince>({
        code: "TZ-20",
        name: "Rukwa",
        slug: "rukwa",
      }),
      Object.freeze<IProvince>({
        code: "TZ-21",
        name: "Ruvuma",
        slug: "ruvuma",
      }),
      Object.freeze<IProvince>({
        code: "TZ-22",
        name: "Shinyanga",
        slug: "shinyanga",
      }),
      Object.freeze<IProvince>({
        code: "TZ-23",
        name: "Singida",
        slug: "singida",
      }),
      Object.freeze<IProvince>({
        code: "TZ-24",
        name: "Tabora",
        slug: "tabora",
      }),
      Object.freeze<IProvince>({
        code: "TZ-25",
        name: "Tanga",
        slug: "tanga",
      }),
      Object.freeze<IProvince>({
        code: "TZ-26",
        name: "Manyara",
        slug: "manyara",
      }),
      Object.freeze<IProvince>({
        code: "TZ-27",
        name: "Geita",
        slug: "geita",
      }),
      Object.freeze<IProvince>({
        code: "TZ-28",
        name: "Katavi",
        slug: "katavi",
      }),
      Object.freeze<IProvince>({
        code: "TZ-29",
        name: "Njombe",
        slug: "njombe",
      }),
      Object.freeze<IProvince>({
        code: "TZ-30",
        name: "Simiyu",
        slug: "simiyu",
      }),
    ],
  }),
  TH: Object.freeze<ICountry>({
    code: "TH",
    currency: CURRENCIES.THB,
    name: "Thailand",
    nameWithArticle: "Thailand",
    provinces: [
      Object.freeze<IProvince>({
        code: "TH-10",
        name: "Krung Thep Maha Nakhon",
        slug: "krung-thep-maha-nakhon",
      }),
      Object.freeze<IProvince>({
        code: "TH-11",
        name: "Samut Prakan",
        slug: "samut-prakan",
      }),
      Object.freeze<IProvince>({
        code: "TH-12",
        name: "Nonthaburi",
        slug: "nonthaburi",
      }),
      Object.freeze<IProvince>({
        code: "TH-13",
        name: "Pathum Thani",
        slug: "pathum-thani",
      }),
      Object.freeze<IProvince>({
        code: "TH-14",
        name: "Phra Nakhon Si Ayutthaya",
        slug: "phra-nakhon-si-ayutthaya",
      }),
      Object.freeze<IProvince>({
        code: "TH-15",
        name: "Ang Thong",
        slug: "ang-thong",
      }),
      Object.freeze<IProvince>({
        code: "TH-16",
        name: "Lop Buri",
        slug: "lop-buri",
      }),
      Object.freeze<IProvince>({
        code: "TH-17",
        name: "Sing Buri",
        slug: "sing-buri",
      }),
      Object.freeze<IProvince>({
        code: "TH-18",
        name: "Chai Nat",
        slug: "chai-nat",
      }),
      Object.freeze<IProvince>({
        code: "TH-19",
        name: "Saraburi",
        slug: "saraburi",
      }),
      Object.freeze<IProvince>({
        code: "TH-20",
        name: "Chon Buri",
        slug: "chon-buri",
      }),
      Object.freeze<IProvince>({
        code: "TH-21",
        name: "Rayong",
        slug: "rayong",
      }),
      Object.freeze<IProvince>({
        code: "TH-22",
        name: "Chanthaburi",
        slug: "chanthaburi",
      }),
      Object.freeze<IProvince>({
        code: "TH-23",
        name: "Trat",
        slug: "trat",
      }),
      Object.freeze<IProvince>({
        code: "TH-24",
        name: "Chachoengsao",
        slug: "chachoengsao",
      }),
      Object.freeze<IProvince>({
        code: "TH-25",
        name: "Prachin Buri",
        slug: "prachin-buri",
      }),
      Object.freeze<IProvince>({
        code: "TH-26",
        name: "Nakhon Nayok",
        slug: "nakhon-nayok",
      }),
      Object.freeze<IProvince>({
        code: "TH-27",
        name: "Sa Kaeo",
        slug: "sa-kaeo",
      }),
      Object.freeze<IProvince>({
        code: "TH-30",
        name: "Nakhon Ratchasima",
        slug: "nakhon-ratchasima",
      }),
      Object.freeze<IProvince>({
        code: "TH-31",
        name: "Buri Ram",
        slug: "buri-ram",
      }),
      Object.freeze<IProvince>({
        code: "TH-32",
        name: "Surin",
        slug: "surin",
      }),
      Object.freeze<IProvince>({
        code: "TH-33",
        name: "Si Sa Ket",
        slug: "si-sa-ket",
      }),
      Object.freeze<IProvince>({
        code: "TH-34",
        name: "Ubon Ratchathani",
        slug: "ubon-ratchathani",
      }),
      Object.freeze<IProvince>({
        code: "TH-35",
        name: "Yasothon",
        slug: "yasothon",
      }),
      Object.freeze<IProvince>({
        code: "TH-36",
        name: "Chaiyaphum",
        slug: "chaiyaphum",
      }),
      Object.freeze<IProvince>({
        code: "TH-37",
        name: "Amnat Charoen",
        slug: "amnat-charoen",
      }),
      Object.freeze<IProvince>({
        code: "TH-38",
        name: "Bueng Kan",
        slug: "bueng-kan",
      }),
      Object.freeze<IProvince>({
        code: "TH-39",
        name: "Nong Bua Lam Phu",
        slug: "nong-bua-lam-phu",
      }),
      Object.freeze<IProvince>({
        code: "TH-40",
        name: "Khon Kaen",
        slug: "khon-kaen",
      }),
      Object.freeze<IProvince>({
        code: "TH-41",
        name: "Udon Thani",
        slug: "udon-thani",
      }),
      Object.freeze<IProvince>({
        code: "TH-42",
        name: "Loei",
        slug: "loei",
      }),
      Object.freeze<IProvince>({
        code: "TH-43",
        name: "Nong Khai",
        slug: "nong-khai",
      }),
      Object.freeze<IProvince>({
        code: "TH-44",
        name: "Maha Sarakham",
        slug: "maha-sarakham",
      }),
      Object.freeze<IProvince>({
        code: "TH-45",
        name: "Roi Et",
        slug: "roi-et",
      }),
      Object.freeze<IProvince>({
        code: "TH-46",
        name: "Kalasin",
        slug: "kalasin",
      }),
      Object.freeze<IProvince>({
        code: "TH-47",
        name: "Sakon Nakhon",
        slug: "sakon-nakhon",
      }),
      Object.freeze<IProvince>({
        code: "TH-48",
        name: "Nakhon Phanom",
        slug: "nakhon-phanom",
      }),
      Object.freeze<IProvince>({
        code: "TH-49",
        name: "Mukdahan",
        slug: "mukdahan",
      }),
      Object.freeze<IProvince>({
        code: "TH-50",
        name: "Chiang Mai",
        slug: "chiang-mai",
      }),
      Object.freeze<IProvince>({
        code: "TH-51",
        name: "Lamphun",
        slug: "lamphun",
      }),
      Object.freeze<IProvince>({
        code: "TH-52",
        name: "Lampang",
        slug: "lampang",
      }),
      Object.freeze<IProvince>({
        code: "TH-53",
        name: "Uttaradit",
        slug: "uttaradit",
      }),
      Object.freeze<IProvince>({
        code: "TH-54",
        name: "Phrae",
        slug: "phrae",
      }),
      Object.freeze<IProvince>({
        code: "TH-55",
        name: "Nan",
        slug: "nan",
      }),
      Object.freeze<IProvince>({
        code: "TH-56",
        name: "Phayao",
        slug: "phayao",
      }),
      Object.freeze<IProvince>({
        code: "TH-57",
        name: "Chiang Rai",
        slug: "chiang-rai",
      }),
      Object.freeze<IProvince>({
        code: "TH-58",
        name: "Mae Hong Son",
        slug: "mae-hong-son",
      }),
      Object.freeze<IProvince>({
        code: "TH-60",
        name: "Nakhon Sawan",
        slug: "nakhon-sawan",
      }),
      Object.freeze<IProvince>({
        code: "TH-61",
        name: "Uthai Thani",
        slug: "uthai-thani",
      }),
      Object.freeze<IProvince>({
        code: "TH-62",
        name: "Kamphaeng Phet",
        slug: "kamphaeng-phet",
      }),
      Object.freeze<IProvince>({
        code: "TH-63",
        name: "Tak",
        slug: "tak",
      }),
      Object.freeze<IProvince>({
        code: "TH-64",
        name: "Sukhothai",
        slug: "sukhothai",
      }),
      Object.freeze<IProvince>({
        code: "TH-65",
        name: "Phitsanulok",
        slug: "phitsanulok",
      }),
      Object.freeze<IProvince>({
        code: "TH-66",
        name: "Phichit",
        slug: "phichit",
      }),
      Object.freeze<IProvince>({
        code: "TH-67",
        name: "Phetchabun",
        slug: "phetchabun",
      }),
      Object.freeze<IProvince>({
        code: "TH-70",
        name: "Ratchaburi",
        slug: "ratchaburi",
      }),
      Object.freeze<IProvince>({
        code: "TH-71",
        name: "Kanchanaburi",
        slug: "kanchanaburi",
      }),
      Object.freeze<IProvince>({
        code: "TH-72",
        name: "Suphan Buri",
        slug: "suphan-buri",
      }),
      Object.freeze<IProvince>({
        code: "TH-73",
        name: "Nakhon Pathom",
        slug: "nakhon-pathom",
      }),
      Object.freeze<IProvince>({
        code: "TH-74",
        name: "Samut Sakhon",
        slug: "samut-sakhon",
      }),
      Object.freeze<IProvince>({
        code: "TH-75",
        name: "Samut Songkhram",
        slug: "samut-songkhram",
      }),
      Object.freeze<IProvince>({
        code: "TH-76",
        name: "Phetchaburi",
        slug: "phetchaburi",
      }),
      Object.freeze<IProvince>({
        code: "TH-77",
        name: "Prachuap Khiri Khan",
        slug: "prachuap-khiri-khan",
      }),
      Object.freeze<IProvince>({
        code: "TH-80",
        name: "Nakhon Si Thammarat",
        slug: "nakhon-si-thammarat",
      }),
      Object.freeze<IProvince>({
        code: "TH-81",
        name: "Krabi",
        slug: "krabi",
      }),
      Object.freeze<IProvince>({
        code: "TH-82",
        name: "Phangnga",
        slug: "phangnga",
      }),
      Object.freeze<IProvince>({
        code: "TH-83",
        name: "Phuket",
        slug: "phuket",
      }),
      Object.freeze<IProvince>({
        code: "TH-84",
        name: "Surat Thani",
        slug: "surat-thani",
      }),
      Object.freeze<IProvince>({
        code: "TH-85",
        name: "Ranong",
        slug: "ranong",
      }),
      Object.freeze<IProvince>({
        code: "TH-86",
        name: "Chumphon",
        slug: "chumphon",
      }),
      Object.freeze<IProvince>({
        code: "TH-90",
        name: "Songkhla",
        slug: "songkhla",
      }),
      Object.freeze<IProvince>({
        code: "TH-91",
        name: "Satun",
        slug: "satun",
      }),
      Object.freeze<IProvince>({
        code: "TH-92",
        name: "Trang",
        slug: "trang",
      }),
      Object.freeze<IProvince>({
        code: "TH-93",
        name: "Phatthalung",
        slug: "phatthalung",
      }),
      Object.freeze<IProvince>({
        code: "TH-94",
        name: "Pattani",
        slug: "pattani",
      }),
      Object.freeze<IProvince>({
        code: "TH-95",
        name: "Yala",
        slug: "yala",
      }),
      Object.freeze<IProvince>({
        code: "TH-96",
        name: "Narathiwat",
        slug: "narathiwat",
      }),
      Object.freeze<IProvince>({
        code: "TH-S",
        name: "Phatthaya",
        slug: "phatthaya",
      }),
    ],
  }),
  TL: Object.freeze<ICountry>({
    code: "TL",
    currency: CURRENCIES.USD,
    name: "Timor-Leste",
    nameWithArticle: "The Democratic Republic of Timor-Leste",
    provinces: [
      Object.freeze<IProvince>({
        code: "TL-AL",
        name: "Aileu",
        slug: "aileu",
      }),
      Object.freeze<IProvince>({
        code: "TL-AN",
        name: "Ainaro",
        slug: "ainaro",
      }),
      Object.freeze<IProvince>({
        code: "TL-BA",
        name: "Baucau",
        slug: "baucau",
      }),
      Object.freeze<IProvince>({
        code: "TL-BO",
        name: "Bobonaro",
        slug: "bobonaro",
      }),
      Object.freeze<IProvince>({
        code: "TL-CO",
        name: "Cova Lima",
        slug: "cova-lima",
      }),
      Object.freeze<IProvince>({
        code: "TL-DI",
        name: "D\u00edli",
        slug: "dili",
      }),
      Object.freeze<IProvince>({
        code: "TL-ER",
        name: "Ermera",
        slug: "ermera",
      }),
      Object.freeze<IProvince>({
        code: "TL-LA",
        name: "Laut\u00e9m",
        slug: "lautem",
      }),
      Object.freeze<IProvince>({
        code: "TL-LI",
        name: "Likis\u00e1",
        slug: "likisa",
      }),
      Object.freeze<IProvince>({
        code: "TL-MF",
        name: "Manufahi",
        slug: "manufahi",
      }),
      Object.freeze<IProvince>({
        code: "TL-MT",
        name: "Manatuto",
        slug: "manatuto",
      }),
      Object.freeze<IProvince>({
        code: "TL-OE",
        name: "Oecussi",
        slug: "oecussi",
      }),
      Object.freeze<IProvince>({
        code: "TL-VI",
        name: "Vikeke",
        slug: "vikeke",
      }),
    ],
  }),
  TG: Object.freeze<ICountry>({
    code: "TG",
    currency: CURRENCIES.XAF,
    name: "Togo",
    nameWithArticle: "Togo",
    provinces: [
      Object.freeze<IProvince>({
        code: "TG-C",
        name: "Centre",
        slug: "centre",
      }),
      Object.freeze<IProvince>({
        code: "TG-K",
        name: "Kara",
        slug: "kara",
      }),
      Object.freeze<IProvince>({
        code: "TG-M",
        name: "Maritime",
        slug: "maritime",
      }),
      Object.freeze<IProvince>({
        code: "TG-P",
        name: "Plateaux",
        slug: "plateaux",
      }),
      Object.freeze<IProvince>({
        code: "TG-S",
        name: "Savannes",
        slug: "savannes",
      }),
    ],
  }),
  TK: Object.freeze<ICountry>({
    code: "TK",
    currency: CURRENCIES.NZD,
    name: "Tokelau",
    nameWithArticle: "Tokelau",
    provinces: [],
  }),
  TO: Object.freeze<ICountry>({
    code: "TO",
    currency: CURRENCIES.TOP,
    name: "Tonga",
    nameWithArticle: "Tonga",
    provinces: [
      Object.freeze<IProvince>({
        code: "TO-01",
        name: "'Eua",
        slug: "eua",
      }),
      Object.freeze<IProvince>({
        code: "TO-02",
        name: "Ha'apai",
        slug: "haapai",
      }),
      Object.freeze<IProvince>({
        code: "TO-03",
        name: "Niuas",
        slug: "niuas",
      }),
      Object.freeze<IProvince>({
        code: "TO-04",
        name: "Tongatapu",
        slug: "tongatapu",
      }),
      Object.freeze<IProvince>({
        code: "TO-05",
        name: "Vava'u",
        slug: "vavau",
      }),
    ],
  }),
  TT: Object.freeze<ICountry>({
    code: "TT",
    currency: CURRENCIES.TTD,
    name: "Trinidad and Tobago",
    nameWithArticle: "Trinidad and Tobago",
    provinces: [
      Object.freeze<IProvince>({
        code: "TT-ARI",
        name: "Arima",
        slug: "arima",
      }),
      Object.freeze<IProvince>({
        code: "TT-CHA",
        name: "Chaguanas",
        slug: "chaguanas",
      }),
      Object.freeze<IProvince>({
        code: "TT-CTT",
        name: "Couva-Tabaquite-Talparo",
        slug: "couva-tabaquite-talparo",
      }),
      Object.freeze<IProvince>({
        code: "TT-DMN",
        name: "Diego Martin",
        slug: "diego-martin",
      }),
      Object.freeze<IProvince>({
        code: "TT-ETO",
        name: "Eastern Tobago",
        slug: "eastern-tobago",
      }),
      Object.freeze<IProvince>({
        code: "TT-PED",
        name: "Penal-Debe",
        slug: "penal-debe",
      }),
      Object.freeze<IProvince>({
        code: "TT-POS",
        name: "Port of Spain",
        slug: "port-of-spain",
      }),
      Object.freeze<IProvince>({
        code: "TT-PRT",
        name: "Princes Town",
        slug: "princes-town",
      }),
      Object.freeze<IProvince>({
        code: "TT-PTF",
        name: "Point Fortin",
        slug: "point-fortin",
      }),
      Object.freeze<IProvince>({
        code: "TT-RCM",
        name: "Rio Claro-Mayaro",
        slug: "rio-claro-mayaro",
      }),
      Object.freeze<IProvince>({
        code: "TT-SFO",
        name: "San Fernando",
        slug: "san-fernando",
      }),
      Object.freeze<IProvince>({
        code: "TT-SGE",
        name: "Sangre Grande",
        slug: "sangre-grande",
      }),
      Object.freeze<IProvince>({
        code: "TT-SIP",
        name: "Siparia",
        slug: "siparia",
      }),
      Object.freeze<IProvince>({
        code: "TT-SJL",
        name: "San Juan-Laventille",
        slug: "san-juan-laventille",
      }),
      Object.freeze<IProvince>({
        code: "TT-TUP",
        name: "Tunapuna-Piarco",
        slug: "tunapuna-piarco",
      }),
      Object.freeze<IProvince>({
        code: "TT-WTO",
        name: "Western Tobago",
        slug: "western-tobago",
      }),
    ],
  }),
  TN: Object.freeze<ICountry>({
    code: "TN",
    currency: CURRENCIES.TND,
    name: "Tunisia",
    nameWithArticle: "Tunisia",
    provinces: [
      Object.freeze<IProvince>({
        code: "TN-11",
        name: "Tunis",
        slug: "tunis",
      }),
      Object.freeze<IProvince>({
        code: "TN-12",
        name: "Ariana",
        slug: "ariana",
      }),
      Object.freeze<IProvince>({
        code: "TN-13",
        name: "Ben Arous",
        slug: "ben-arous",
      }),
      Object.freeze<IProvince>({
        code: "TN-14",
        name: "La Manouba",
        slug: "la-manouba",
      }),
      Object.freeze<IProvince>({
        code: "TN-21",
        name: "Nabeul",
        slug: "nabeul",
      }),
      Object.freeze<IProvince>({
        code: "TN-22",
        name: "Zaghouan",
        slug: "zaghouan",
      }),
      Object.freeze<IProvince>({
        code: "TN-23",
        name: "Bizerte",
        slug: "bizerte",
      }),
      Object.freeze<IProvince>({
        code: "TN-31",
        name: "B\u00e9ja",
        slug: "beja",
      }),
      Object.freeze<IProvince>({
        code: "TN-32",
        name: "Jendouba",
        slug: "jendouba",
      }),
      Object.freeze<IProvince>({
        code: "TN-33",
        name: "Le Kef",
        slug: "le-kef",
      }),
      Object.freeze<IProvince>({
        code: "TN-34",
        name: "Siliana",
        slug: "siliana",
      }),
      Object.freeze<IProvince>({
        code: "TN-41",
        name: "Kairouan",
        slug: "kairouan",
      }),
      Object.freeze<IProvince>({
        code: "TN-42",
        name: "Kasserine",
        slug: "kasserine",
      }),
      Object.freeze<IProvince>({
        code: "TN-43",
        name: "Sidi Bouzid",
        slug: "sidi-bouzid",
      }),
      Object.freeze<IProvince>({
        code: "TN-51",
        name: "Sousse",
        slug: "sousse",
      }),
      Object.freeze<IProvince>({
        code: "TN-52",
        name: "Monastir",
        slug: "monastir",
      }),
      Object.freeze<IProvince>({
        code: "TN-53",
        name: "Mahdia",
        slug: "mahdia",
      }),
      Object.freeze<IProvince>({
        code: "TN-61",
        name: "Sfax",
        slug: "sfax",
      }),
      Object.freeze<IProvince>({
        code: "TN-71",
        name: "Gafsa",
        slug: "gafsa",
      }),
      Object.freeze<IProvince>({
        code: "TN-72",
        name: "Tozeur",
        slug: "tozeur",
      }),
      Object.freeze<IProvince>({
        code: "TN-73",
        name: "Kebili",
        slug: "kebili",
      }),
      Object.freeze<IProvince>({
        code: "TN-81",
        name: "Gab\u00e8s",
        slug: "gabes",
      }),
      Object.freeze<IProvince>({
        code: "TN-82",
        name: "Medenine",
        slug: "medenine",
      }),
      Object.freeze<IProvince>({
        code: "TN-83",
        name: "Tataouine",
        slug: "tataouine",
      }),
    ],
  }),
  TR: Object.freeze<ICountry>({
    code: "TR",
    currency: CURRENCIES.TRY,
    name: "Turkey",
    nameWithArticle: "Turkey",
    provinces: [
      Object.freeze<IProvince>({
        code: "TR-01",
        name: "Adana",
        slug: "adana",
      }),
      Object.freeze<IProvince>({
        code: "TR-02",
        name: "Ad\u0131yaman",
        slug: "adyaman",
      }),
      Object.freeze<IProvince>({
        code: "TR-03",
        name: "Afyonkarahisar",
        slug: "afyonkarahisar",
      }),
      Object.freeze<IProvince>({
        code: "TR-04",
        name: "A\u011fr\u0131",
        slug: "agr",
      }),
      Object.freeze<IProvince>({
        code: "TR-05",
        name: "Amasya",
        slug: "amasya",
      }),
      Object.freeze<IProvince>({
        code: "TR-06",
        name: "Ankara",
        slug: "ankara",
      }),
      Object.freeze<IProvince>({
        code: "TR-07",
        name: "Antalya",
        slug: "antalya",
      }),
      Object.freeze<IProvince>({
        code: "TR-08",
        name: "Artvin",
        slug: "artvin",
      }),
      Object.freeze<IProvince>({
        code: "TR-09",
        name: "Ayd\u0131n",
        slug: "aydn",
      }),
      Object.freeze<IProvince>({
        code: "TR-10",
        name: "Bal\u0131kesir",
        slug: "balkesir",
      }),
      Object.freeze<IProvince>({
        code: "TR-11",
        name: "Bilecik",
        slug: "bilecik",
      }),
      Object.freeze<IProvince>({
        code: "TR-12",
        name: "Bing\u00f6l",
        slug: "bingol",
      }),
      Object.freeze<IProvince>({
        code: "TR-13",
        name: "Bitlis",
        slug: "bitlis",
      }),
      Object.freeze<IProvince>({
        code: "TR-14",
        name: "Bolu",
        slug: "bolu",
      }),
      Object.freeze<IProvince>({
        code: "TR-15",
        name: "Burdur",
        slug: "burdur",
      }),
      Object.freeze<IProvince>({
        code: "TR-16",
        name: "Bursa",
        slug: "bursa",
      }),
      Object.freeze<IProvince>({
        code: "TR-17",
        name: "\u00c7anakkale",
        slug: "canakkale",
      }),
      Object.freeze<IProvince>({
        code: "TR-18",
        name: "\u00c7ank\u0131r\u0131",
        slug: "cankr",
      }),
      Object.freeze<IProvince>({
        code: "TR-19",
        name: "\u00c7orum",
        slug: "corum",
      }),
      Object.freeze<IProvince>({
        code: "TR-20",
        name: "Denizli",
        slug: "denizli",
      }),
      Object.freeze<IProvince>({
        code: "TR-21",
        name: "Diyarbak\u0131r",
        slug: "diyarbakr",
      }),
      Object.freeze<IProvince>({
        code: "TR-22",
        name: "Edirne",
        slug: "edirne",
      }),
      Object.freeze<IProvince>({
        code: "TR-23",
        name: "Elaz\u0131\u011f",
        slug: "elazg",
      }),
      Object.freeze<IProvince>({
        code: "TR-24",
        name: "Erzincan",
        slug: "erzincan",
      }),
      Object.freeze<IProvince>({
        code: "TR-25",
        name: "Erzurum",
        slug: "erzurum",
      }),
      Object.freeze<IProvince>({
        code: "TR-26",
        name: "Eski\u015fehir",
        slug: "eskisehir",
      }),
      Object.freeze<IProvince>({
        code: "TR-27",
        name: "Gaziantep",
        slug: "gaziantep",
      }),
      Object.freeze<IProvince>({
        code: "TR-28",
        name: "Giresun",
        slug: "giresun",
      }),
      Object.freeze<IProvince>({
        code: "TR-29",
        name: "G\u00fcm\u00fc\u015fhane",
        slug: "gumushane",
      }),
      Object.freeze<IProvince>({
        code: "TR-30",
        name: "Hakk\u00e2ri",
        slug: "hakkari",
      }),
      Object.freeze<IProvince>({
        code: "TR-31",
        name: "Hatay",
        slug: "hatay",
      }),
      Object.freeze<IProvince>({
        code: "TR-32",
        name: "Isparta",
        slug: "isparta",
      }),
      Object.freeze<IProvince>({
        code: "TR-33",
        name: "Mersin",
        slug: "mersin",
      }),
      Object.freeze<IProvince>({
        code: "TR-34",
        name: "\u0130stanbul",
        slug: "istanbul",
      }),
      Object.freeze<IProvince>({
        code: "TR-35",
        name: "\u0130zmir",
        slug: "izmir",
      }),
      Object.freeze<IProvince>({
        code: "TR-36",
        name: "Kars",
        slug: "kars",
      }),
      Object.freeze<IProvince>({
        code: "TR-37",
        name: "Kastamonu",
        slug: "kastamonu",
      }),
      Object.freeze<IProvince>({
        code: "TR-38",
        name: "Kayseri",
        slug: "kayseri",
      }),
      Object.freeze<IProvince>({
        code: "TR-39",
        name: "K\u0131rklareli",
        slug: "krklareli",
      }),
      Object.freeze<IProvince>({
        code: "TR-40",
        name: "K\u0131r\u015fehir",
        slug: "krsehir",
      }),
      Object.freeze<IProvince>({
        code: "TR-41",
        name: "Kocaeli",
        slug: "kocaeli",
      }),
      Object.freeze<IProvince>({
        code: "TR-42",
        name: "Konya",
        slug: "konya",
      }),
      Object.freeze<IProvince>({
        code: "TR-43",
        name: "K\u00fctahya",
        slug: "kutahya",
      }),
      Object.freeze<IProvince>({
        code: "TR-44",
        name: "Malatya",
        slug: "malatya",
      }),
      Object.freeze<IProvince>({
        code: "TR-45",
        name: "Manisa",
        slug: "manisa",
      }),
      Object.freeze<IProvince>({
        code: "TR-46",
        name: "Kahramanmara\u015f",
        slug: "kahramanmaras",
      }),
      Object.freeze<IProvince>({
        code: "TR-47",
        name: "Mardin",
        slug: "mardin",
      }),
      Object.freeze<IProvince>({
        code: "TR-48",
        name: "Mu\u011fla",
        slug: "mugla",
      }),
      Object.freeze<IProvince>({
        code: "TR-49",
        name: "Mu\u015f",
        slug: "mus",
      }),
      Object.freeze<IProvince>({
        code: "TR-50",
        name: "Nev\u015fehir",
        slug: "nevsehir",
      }),
      Object.freeze<IProvince>({
        code: "TR-51",
        name: "Ni\u011fde",
        slug: "nigde",
      }),
      Object.freeze<IProvince>({
        code: "TR-52",
        name: "Ordu",
        slug: "ordu",
      }),
      Object.freeze<IProvince>({
        code: "TR-53",
        name: "Rize",
        slug: "rize",
      }),
      Object.freeze<IProvince>({
        code: "TR-54",
        name: "Sakarya",
        slug: "sakarya",
      }),
      Object.freeze<IProvince>({
        code: "TR-55",
        name: "Samsun",
        slug: "samsun",
      }),
      Object.freeze<IProvince>({
        code: "TR-56",
        name: "Siirt",
        slug: "siirt",
      }),
      Object.freeze<IProvince>({
        code: "TR-57",
        name: "Sinop",
        slug: "sinop",
      }),
      Object.freeze<IProvince>({
        code: "TR-58",
        name: "Sivas",
        slug: "sivas",
      }),
      Object.freeze<IProvince>({
        code: "TR-59",
        name: "Tekirda\u011f",
        slug: "tekirdag",
      }),
      Object.freeze<IProvince>({
        code: "TR-60",
        name: "Tokat",
        slug: "tokat",
      }),
      Object.freeze<IProvince>({
        code: "TR-61",
        name: "Trabzon",
        slug: "trabzon",
      }),
      Object.freeze<IProvince>({
        code: "TR-62",
        name: "Tunceli",
        slug: "tunceli",
      }),
      Object.freeze<IProvince>({
        code: "TR-63",
        name: "\u015eanl\u0131urfa",
        slug: "sanlurfa",
      }),
      Object.freeze<IProvince>({
        code: "TR-64",
        name: "U\u015fak",
        slug: "usak",
      }),
      Object.freeze<IProvince>({
        code: "TR-65",
        name: "Van",
        slug: "van",
      }),
      Object.freeze<IProvince>({
        code: "TR-66",
        name: "Yozgat",
        slug: "yozgat",
      }),
      Object.freeze<IProvince>({
        code: "TR-67",
        name: "Zonguldak",
        slug: "zonguldak",
      }),
      Object.freeze<IProvince>({
        code: "TR-68",
        name: "Aksaray",
        slug: "aksaray",
      }),
      Object.freeze<IProvince>({
        code: "TR-69",
        name: "Bayburt",
        slug: "bayburt",
      }),
      Object.freeze<IProvince>({
        code: "TR-70",
        name: "Karaman",
        slug: "karaman",
      }),
      Object.freeze<IProvince>({
        code: "TR-71",
        name: "K\u0131r\u0131kkale",
        slug: "krkkale",
      }),
      Object.freeze<IProvince>({
        code: "TR-72",
        name: "Batman",
        slug: "batman",
      }),
      Object.freeze<IProvince>({
        code: "TR-73",
        name: "\u015e\u0131rnak",
        slug: "srnak",
      }),
      Object.freeze<IProvince>({
        code: "TR-74",
        name: "Bart\u0131n",
        slug: "bartn",
      }),
      Object.freeze<IProvince>({
        code: "TR-75",
        name: "Ardahan",
        slug: "ardahan",
      }),
      Object.freeze<IProvince>({
        code: "TR-76",
        name: "I\u011fd\u0131r",
        slug: "igdr",
      }),
      Object.freeze<IProvince>({
        code: "TR-77",
        name: "Yalova",
        slug: "yalova",
      }),
      Object.freeze<IProvince>({
        code: "TR-78",
        name: "Karab\u00fck",
        slug: "karabuk",
      }),
      Object.freeze<IProvince>({
        code: "TR-79",
        name: "Kilis",
        slug: "kilis",
      }),
      Object.freeze<IProvince>({
        code: "TR-80",
        name: "Osmaniye",
        slug: "osmaniye",
      }),
      Object.freeze<IProvince>({
        code: "TR-81",
        name: "D\u00fczce",
        slug: "duzce",
      }),
    ],
  }),
  TM: Object.freeze<ICountry>({
    code: "TM",
    currency: CURRENCIES.TMM,
    name: "Turkmenistan",
    nameWithArticle: "Turkmenistan",
    provinces: [
      Object.freeze<IProvince>({
        code: "TM-A",
        name: "Ahal",
        slug: "ahal",
      }),
      Object.freeze<IProvince>({
        code: "TM-B",
        name: "Balkan",
        slug: "balkan",
      }),
      Object.freeze<IProvince>({
        code: "TM-D",
        name: "Da\u015foguz",
        slug: "dasoguz",
      }),
      Object.freeze<IProvince>({
        code: "TM-L",
        name: "Lebap",
        slug: "lebap",
      }),
      Object.freeze<IProvince>({
        code: "TM-M",
        name: "Mary",
        slug: "mary",
      }),
      Object.freeze<IProvince>({
        code: "TM-S",
        name: "A\u015fgabat",
        slug: "asgabat",
      }),
    ],
  }),
  TC: Object.freeze<ICountry>({
    code: "TC",
    currency: CURRENCIES.USD,
    name: "Turks and Caicos Islands",
    nameWithArticle: "Turks and Caicos Islands",
    provinces: [],
  }),
  TV: Object.freeze<ICountry>({
    code: "TV",
    currency: CURRENCIES.AUD,
    name: "Tuvalu",
    nameWithArticle: "Tuvalu",
    provinces: [
      Object.freeze<IProvince>({
        code: "TV-FUN",
        name: "Funafuti",
        slug: "funafuti",
      }),
      Object.freeze<IProvince>({
        code: "TV-NIT",
        name: "Niutao",
        slug: "niutao",
      }),
      Object.freeze<IProvince>({
        code: "TV-NKF",
        name: "Nukufetau",
        slug: "nukufetau",
      }),
      Object.freeze<IProvince>({
        code: "TV-NKL",
        name: "Nukulaelae",
        slug: "nukulaelae",
      }),
      Object.freeze<IProvince>({
        code: "TV-NMA",
        name: "Nanumea",
        slug: "nanumea",
      }),
      Object.freeze<IProvince>({
        code: "TV-NMG",
        name: "Nanumaga",
        slug: "nanumaga",
      }),
      Object.freeze<IProvince>({
        code: "TV-NUI",
        name: "Nui",
        slug: "nui",
      }),
      Object.freeze<IProvince>({
        code: "TV-VAI",
        name: "Vaitupu",
        slug: "vaitupu",
      }),
    ],
  }),
  UG: Object.freeze<ICountry>({
    code: "UG",
    currency: CURRENCIES.UGX,
    name: "Uganda",
    nameWithArticle: "Uganda",
    provinces: [
      Object.freeze<IProvince>({
        code: "UG-101",
        name: "Kalangala",
        slug: "kalangala",
      }),
      Object.freeze<IProvince>({
        code: "UG-102",
        name: "Kampala",
        slug: "kampala",
      }),
      Object.freeze<IProvince>({
        code: "UG-103",
        name: "Kiboga",
        slug: "kiboga",
      }),
      Object.freeze<IProvince>({
        code: "UG-104",
        name: "Luwero",
        slug: "luwero",
      }),
      Object.freeze<IProvince>({
        code: "UG-105",
        name: "Masaka",
        slug: "masaka",
      }),
      Object.freeze<IProvince>({
        code: "UG-106",
        name: "Mpigi",
        slug: "mpigi",
      }),
      Object.freeze<IProvince>({
        code: "UG-107",
        name: "Mubende",
        slug: "mubende",
      }),
      Object.freeze<IProvince>({
        code: "UG-108",
        name: "Mukono",
        slug: "mukono",
      }),
      Object.freeze<IProvince>({
        code: "UG-109",
        name: "Nakasongola",
        slug: "nakasongola",
      }),
      Object.freeze<IProvince>({
        code: "UG-110",
        name: "Rakai",
        slug: "rakai",
      }),
      Object.freeze<IProvince>({
        code: "UG-111",
        name: "Sembabule",
        slug: "sembabule",
      }),
      Object.freeze<IProvince>({
        code: "UG-112",
        name: "Kayunga",
        slug: "kayunga",
      }),
      Object.freeze<IProvince>({
        code: "UG-113",
        name: "Wakiso",
        slug: "wakiso",
      }),
      Object.freeze<IProvince>({
        code: "UG-114",
        name: "Mityana",
        slug: "mityana",
      }),
      Object.freeze<IProvince>({
        code: "UG-115",
        name: "Nakaseke",
        slug: "nakaseke",
      }),
      Object.freeze<IProvince>({
        code: "UG-116",
        name: "Lyantonde",
        slug: "lyantonde",
      }),
      Object.freeze<IProvince>({
        code: "UG-117",
        name: "Buikwe",
        slug: "buikwe",
      }),
      Object.freeze<IProvince>({
        code: "UG-118",
        name: "Bukomansibi",
        slug: "bukomansibi",
      }),
      Object.freeze<IProvince>({
        code: "UG-119",
        name: "Butambala",
        slug: "butambala",
      }),
      Object.freeze<IProvince>({
        code: "UG-120",
        name: "Buvuma",
        slug: "buvuma",
      }),
      Object.freeze<IProvince>({
        code: "UG-121",
        name: "Gomba",
        slug: "gomba",
      }),
      Object.freeze<IProvince>({
        code: "UG-122",
        name: "Kalungu",
        slug: "kalungu",
      }),
      Object.freeze<IProvince>({
        code: "UG-123",
        name: "Kyankwanzi",
        slug: "kyankwanzi",
      }),
      Object.freeze<IProvince>({
        code: "UG-124",
        name: "Lwengo",
        slug: "lwengo",
      }),
      Object.freeze<IProvince>({
        code: "UG-201",
        name: "Bugiri",
        slug: "bugiri",
      }),
      Object.freeze<IProvince>({
        code: "UG-202",
        name: "Busia",
        slug: "busia",
      }),
      Object.freeze<IProvince>({
        code: "UG-203",
        name: "Iganga",
        slug: "iganga",
      }),
      Object.freeze<IProvince>({
        code: "UG-204",
        name: "Jinja",
        slug: "jinja",
      }),
      Object.freeze<IProvince>({
        code: "UG-205",
        name: "Kamuli",
        slug: "kamuli",
      }),
      Object.freeze<IProvince>({
        code: "UG-206",
        name: "Kapchorwa",
        slug: "kapchorwa",
      }),
      Object.freeze<IProvince>({
        code: "UG-207",
        name: "Katakwi",
        slug: "katakwi",
      }),
      Object.freeze<IProvince>({
        code: "UG-208",
        name: "Kumi",
        slug: "kumi",
      }),
      Object.freeze<IProvince>({
        code: "UG-209",
        name: "Mbale",
        slug: "mbale",
      }),
      Object.freeze<IProvince>({
        code: "UG-210",
        name: "Pallisa",
        slug: "pallisa",
      }),
      Object.freeze<IProvince>({
        code: "UG-211",
        name: "Soroti",
        slug: "soroti",
      }),
      Object.freeze<IProvince>({
        code: "UG-212",
        name: "Tororo",
        slug: "tororo",
      }),
      Object.freeze<IProvince>({
        code: "UG-213",
        name: "Kaberamaido",
        slug: "kaberamaido",
      }),
      Object.freeze<IProvince>({
        code: "UG-214",
        name: "Mayuge",
        slug: "mayuge",
      }),
      Object.freeze<IProvince>({
        code: "UG-215",
        name: "Sironko",
        slug: "sironko",
      }),
      Object.freeze<IProvince>({
        code: "UG-216",
        name: "Amuria",
        slug: "amuria",
      }),
      Object.freeze<IProvince>({
        code: "UG-217",
        name: "Budaka",
        slug: "budaka",
      }),
      Object.freeze<IProvince>({
        code: "UG-218",
        name: "Bukwa",
        slug: "bukwa",
      }),
      Object.freeze<IProvince>({
        code: "UG-219",
        name: "Butaleja",
        slug: "butaleja",
      }),
      Object.freeze<IProvince>({
        code: "UG-220",
        name: "Kaliro",
        slug: "kaliro",
      }),
      Object.freeze<IProvince>({
        code: "UG-221",
        name: "Manafwa",
        slug: "manafwa",
      }),
      Object.freeze<IProvince>({
        code: "UG-222",
        name: "Namutumba",
        slug: "namutumba",
      }),
      Object.freeze<IProvince>({
        code: "UG-223",
        name: "Bududa",
        slug: "bududa",
      }),
      Object.freeze<IProvince>({
        code: "UG-224",
        name: "Bukedea",
        slug: "bukedea",
      }),
      Object.freeze<IProvince>({
        code: "UG-225",
        name: "Bulambuli",
        slug: "bulambuli",
      }),
      Object.freeze<IProvince>({
        code: "UG-226",
        name: "Buyende",
        slug: "buyende",
      }),
      Object.freeze<IProvince>({
        code: "UG-227",
        name: "Kibuku",
        slug: "kibuku",
      }),
      Object.freeze<IProvince>({
        code: "UG-228",
        name: "Kween",
        slug: "kween",
      }),
      Object.freeze<IProvince>({
        code: "UG-229",
        name: "Luuka",
        slug: "luuka",
      }),
      Object.freeze<IProvince>({
        code: "UG-230",
        name: "Namayingo",
        slug: "namayingo",
      }),
      Object.freeze<IProvince>({
        code: "UG-231",
        name: "Ngora",
        slug: "ngora",
      }),
      Object.freeze<IProvince>({
        code: "UG-232",
        name: "Serere",
        slug: "serere",
      }),
      Object.freeze<IProvince>({
        code: "UG-301",
        name: "Adjumani",
        slug: "adjumani",
      }),
      Object.freeze<IProvince>({
        code: "UG-302",
        name: "Apac",
        slug: "apac",
      }),
      Object.freeze<IProvince>({
        code: "UG-303",
        name: "Arua",
        slug: "arua",
      }),
      Object.freeze<IProvince>({
        code: "UG-304",
        name: "Gulu",
        slug: "gulu",
      }),
      Object.freeze<IProvince>({
        code: "UG-305",
        name: "Kitgum",
        slug: "kitgum",
      }),
      Object.freeze<IProvince>({
        code: "UG-306",
        name: "Kotido",
        slug: "kotido",
      }),
      Object.freeze<IProvince>({
        code: "UG-307",
        name: "Lira",
        slug: "lira",
      }),
      Object.freeze<IProvince>({
        code: "UG-308",
        name: "Moroto",
        slug: "moroto",
      }),
      Object.freeze<IProvince>({
        code: "UG-309",
        name: "Moyo",
        slug: "moyo",
      }),
      Object.freeze<IProvince>({
        code: "UG-310",
        name: "Nebbi",
        slug: "nebbi",
      }),
      Object.freeze<IProvince>({
        code: "UG-311",
        name: "Nakapiripirit",
        slug: "nakapiripirit",
      }),
      Object.freeze<IProvince>({
        code: "UG-312",
        name: "Pader",
        slug: "pader",
      }),
      Object.freeze<IProvince>({
        code: "UG-313",
        name: "Yumbe",
        slug: "yumbe",
      }),
      Object.freeze<IProvince>({
        code: "UG-314",
        name: "Amolatar",
        slug: "amolatar",
      }),
      Object.freeze<IProvince>({
        code: "UG-315",
        name: "Kaabong",
        slug: "kaabong",
      }),
      Object.freeze<IProvince>({
        code: "UG-316",
        name: "Koboko",
        slug: "koboko",
      }),
      Object.freeze<IProvince>({
        code: "UG-317",
        name: "Abim",
        slug: "abim",
      }),
      Object.freeze<IProvince>({
        code: "UG-318",
        name: "Dokolo",
        slug: "dokolo",
      }),
      Object.freeze<IProvince>({
        code: "UG-319",
        name: "Amuru",
        slug: "amuru",
      }),
      Object.freeze<IProvince>({
        code: "UG-320",
        name: "Maracha",
        slug: "maracha",
      }),
      Object.freeze<IProvince>({
        code: "UG-321",
        name: "Oyam",
        slug: "oyam",
      }),
      Object.freeze<IProvince>({
        code: "UG-322",
        name: "Agago",
        slug: "agago",
      }),
      Object.freeze<IProvince>({
        code: "UG-323",
        name: "Alebtong",
        slug: "alebtong",
      }),
      Object.freeze<IProvince>({
        code: "UG-324",
        name: "Amudat",
        slug: "amudat",
      }),
      Object.freeze<IProvince>({
        code: "UG-325",
        name: "Buhweju",
        slug: "buhweju",
      }),
      Object.freeze<IProvince>({
        code: "UG-326",
        name: "Kole",
        slug: "kole",
      }),
      Object.freeze<IProvince>({
        code: "UG-327",
        name: "Lamwo",
        slug: "lamwo",
      }),
      Object.freeze<IProvince>({
        code: "UG-328",
        name: "Napak",
        slug: "napak",
      }),
      Object.freeze<IProvince>({
        code: "UG-329",
        name: "Nwoya",
        slug: "nwoya",
      }),
      Object.freeze<IProvince>({
        code: "UG-330",
        name: "Otuke",
        slug: "otuke",
      }),
      Object.freeze<IProvince>({
        code: "UG-331",
        name: "Zombo",
        slug: "zombo",
      }),
      Object.freeze<IProvince>({
        code: "UG-401",
        name: "Bundibugyo",
        slug: "bundibugyo",
      }),
      Object.freeze<IProvince>({
        code: "UG-402",
        name: "Bushenyi",
        slug: "bushenyi",
      }),
      Object.freeze<IProvince>({
        code: "UG-403",
        name: "Hoima",
        slug: "hoima",
      }),
      Object.freeze<IProvince>({
        code: "UG-404",
        name: "Kabale",
        slug: "kabale",
      }),
      Object.freeze<IProvince>({
        code: "UG-405",
        name: "Kabarole",
        slug: "kabarole",
      }),
      Object.freeze<IProvince>({
        code: "UG-406",
        name: "Kasese",
        slug: "kasese",
      }),
      Object.freeze<IProvince>({
        code: "UG-407",
        name: "Kibaale",
        slug: "kibaale",
      }),
      Object.freeze<IProvince>({
        code: "UG-408",
        name: "Kisoro",
        slug: "kisoro",
      }),
      Object.freeze<IProvince>({
        code: "UG-409",
        name: "Masindi",
        slug: "masindi",
      }),
      Object.freeze<IProvince>({
        code: "UG-410",
        name: "Mbarara",
        slug: "mbarara",
      }),
      Object.freeze<IProvince>({
        code: "UG-411",
        name: "Ntungamo",
        slug: "ntungamo",
      }),
      Object.freeze<IProvince>({
        code: "UG-412",
        name: "Rukungiri",
        slug: "rukungiri",
      }),
      Object.freeze<IProvince>({
        code: "UG-413",
        name: "Kamwenge",
        slug: "kamwenge",
      }),
      Object.freeze<IProvince>({
        code: "UG-414",
        name: "Kanungu",
        slug: "kanungu",
      }),
      Object.freeze<IProvince>({
        code: "UG-415",
        name: "Kyenjojo",
        slug: "kyenjojo",
      }),
      Object.freeze<IProvince>({
        code: "UG-416",
        name: "Ibanda",
        slug: "ibanda",
      }),
      Object.freeze<IProvince>({
        code: "UG-417",
        name: "Isingiro",
        slug: "isingiro",
      }),
      Object.freeze<IProvince>({
        code: "UG-418",
        name: "Kiruhura",
        slug: "kiruhura",
      }),
      Object.freeze<IProvince>({
        code: "UG-419",
        name: "Buliisa",
        slug: "buliisa",
      }),
      Object.freeze<IProvince>({
        code: "UG-420",
        name: "Kiryandongo",
        slug: "kiryandongo",
      }),
      Object.freeze<IProvince>({
        code: "UG-421",
        name: "Kyegegwa",
        slug: "kyegegwa",
      }),
      Object.freeze<IProvince>({
        code: "UG-422",
        name: "Mitooma",
        slug: "mitooma",
      }),
      Object.freeze<IProvince>({
        code: "UG-423",
        name: "Ntoroko",
        slug: "ntoroko",
      }),
      Object.freeze<IProvince>({
        code: "UG-424",
        name: "Rubirizi",
        slug: "rubirizi",
      }),
      Object.freeze<IProvince>({
        code: "UG-425",
        name: "Sheema",
        slug: "sheema",
      }),
    ],
  }),
  UA: Object.freeze<ICountry>({
    code: "UA",
    currency: CURRENCIES.UAH,
    name: "Ukraine",
    nameWithArticle: "Ukraine",
    provinces: [
      Object.freeze<IProvince>({
        code: "UA-05",
        name: "Vinnytska oblast",
        slug: "vinnytska-oblast",
      }),
      Object.freeze<IProvince>({
        code: "UA-07",
        name: "Volynska oblast",
        slug: "volynska-oblast",
      }),
      Object.freeze<IProvince>({
        code: "UA-09",
        name: "Luhanska oblast",
        slug: "luhanska-oblast",
      }),
      Object.freeze<IProvince>({
        code: "UA-12",
        name: "Dnipropetrovska oblast",
        slug: "dnipropetrovska-oblast",
      }),
      Object.freeze<IProvince>({
        code: "UA-14",
        name: "Donetska oblast",
        slug: "donetska-oblast",
      }),
      Object.freeze<IProvince>({
        code: "UA-18",
        name: "Zhytomyrska oblast",
        slug: "zhytomyrska-oblast",
      }),
      Object.freeze<IProvince>({
        code: "UA-21",
        name: "Zakarpatska oblast",
        slug: "zakarpatska-oblast",
      }),
      Object.freeze<IProvince>({
        code: "UA-23",
        name: "Zaporizka oblast",
        slug: "zaporizka-oblast",
      }),
      Object.freeze<IProvince>({
        code: "UA-26",
        name: "Ivano-Frankivska oblast",
        slug: "ivano-frankivska-oblast",
      }),
      Object.freeze<IProvince>({
        code: "UA-32",
        name: "Kyivska oblast",
        slug: "kyivska-oblast",
      }),
      Object.freeze<IProvince>({
        code: "UA-35",
        name: "Kirovohradska oblast",
        slug: "kirovohradska-oblast",
      }),
      Object.freeze<IProvince>({
        code: "UA-43",
        name: "Avtonomna Respublika Krym",
        slug: "avtonomna-respublika-krym",
      }),
      Object.freeze<IProvince>({
        code: "UA-46",
        name: "Lvivska oblast",
        slug: "lvivska-oblast",
      }),
      Object.freeze<IProvince>({
        code: "UA-48",
        name: "Mykolaivska oblast",
        slug: "mykolaivska-oblast",
      }),
      Object.freeze<IProvince>({
        code: "UA-51",
        name: "Odeska oblast",
        slug: "odeska-oblast",
      }),
      Object.freeze<IProvince>({
        code: "UA-53",
        name: "Poltavska oblast",
        slug: "poltavska-oblast",
      }),
      Object.freeze<IProvince>({
        code: "UA-56",
        name: "Rivnenska oblast",
        slug: "rivnenska-oblast",
      }),
      Object.freeze<IProvince>({
        code: "UA-59",
        name: "Sumska oblast",
        slug: "sumska-oblast",
      }),
      Object.freeze<IProvince>({
        code: "UA-61",
        name: "Ternopilska oblast",
        slug: "ternopilska-oblast",
      }),
      Object.freeze<IProvince>({
        code: "UA-63",
        name: "Kharkivska oblast",
        slug: "kharkivska-oblast",
      }),
      Object.freeze<IProvince>({
        code: "UA-65",
        name: "Khersonska oblast",
        slug: "khersonska-oblast",
      }),
      Object.freeze<IProvince>({
        code: "UA-68",
        name: "Khmelnytska oblast",
        slug: "khmelnytska-oblast",
      }),
      Object.freeze<IProvince>({
        code: "UA-71",
        name: "Cherkaska oblast",
        slug: "cherkaska-oblast",
      }),
      Object.freeze<IProvince>({
        code: "UA-74",
        name: "Chernihivska oblast",
        slug: "chernihivska-oblast",
      }),
      Object.freeze<IProvince>({
        code: "UA-77",
        name: "Chernivetska oblast",
        slug: "chernivetska-oblast",
      }),
    ],
  }),
  AE: Object.freeze<ICountry>({
    code: "AE",
    currency: CURRENCIES.AED,
    name: "United Arab Emirates",
    nameWithArticle: "United Arab Emirates",
    provinces: [
      Object.freeze<IProvince>({
        code: "AE-AJ",
        name: "Ajman",
        slug: "ajman",
      }),
      Object.freeze<IProvince>({
        code: "AE-AZ",
        name: "Abu Dhabi",
        slug: "abu-dhabi",
      }),
      Object.freeze<IProvince>({
        code: "AE-DU",
        name: "Dubai",
        slug: "dubai",
      }),
      Object.freeze<IProvince>({
        code: "AE-FU",
        name: "Fujairah",
        slug: "fujairah",
      }),
      Object.freeze<IProvince>({
        code: "AE-RK",
        name: "Ras Al Khaimah",
        slug: "ras-al-khaimah",
      }),
      Object.freeze<IProvince>({
        code: "AE-SH",
        name: "Sharjah",
        slug: "sharjah",
      }),
      Object.freeze<IProvince>({
        code: "AE-UQ",
        name: "Umm Al Quwain",
        slug: "umm-al-quwain",
      }),
    ],
  }),
  GB: Object.freeze<ICountry>({
    code: "GB",
    currency: CURRENCIES.GBP,
    name: "United Kingdom",
    nameWithArticle: "United Kingdom",
    provinces: [
      Object.freeze<IProvince>({
        code: "GB-ABD",
        name: "Aberdeenshire",
        slug: "aberdeenshire",
      }),
      Object.freeze<IProvince>({
        code: "GB-ABE",
        name: "Aberdeen City",
        slug: "aberdeen-city",
      }),
      Object.freeze<IProvince>({
        code: "GB-AGB",
        name: "Argyll and Bute",
        slug: "argyll-and-bute",
      }),
      Object.freeze<IProvince>({
        code: "GB-AGY",
        name: "Isle of Anglesey",
        slug: "isle-of-anglesey",
      }),
      Object.freeze<IProvince>({
        code: "GB-ANS",
        name: "Angus",
        slug: "angus",
      }),
      Object.freeze<IProvince>({
        code: "GB-ANT",
        name: "Antrim",
        slug: "antrim",
      }),
      Object.freeze<IProvince>({
        code: "GB-ARD",
        name: "Ards",
        slug: "ards",
      }),
      Object.freeze<IProvince>({
        code: "GB-ARM",
        name: "Armagh",
        slug: "armagh",
      }),
      Object.freeze<IProvince>({
        code: "GB-BAS",
        name: "Bath and North East Somerset",
        slug: "bath-and-north-east-somerset",
      }),
      Object.freeze<IProvince>({
        code: "GB-BBD",
        name: "Blackburn with Darwen",
        slug: "blackburn-with-darwen",
      }),
      Object.freeze<IProvince>({
        code: "GB-BDF",
        name: "Bedford",
        slug: "bedford",
      }),
      Object.freeze<IProvince>({
        code: "GB-BDG",
        name: "Barking and Dagenham",
        slug: "barking-and-dagenham",
      }),
      Object.freeze<IProvince>({
        code: "GB-BEN",
        name: "Brent",
        slug: "brent",
      }),
      Object.freeze<IProvince>({
        code: "GB-BEX",
        name: "Bexley",
        slug: "bexley",
      }),
      Object.freeze<IProvince>({
        code: "GB-BFS",
        name: "Belfast",
        slug: "belfast",
      }),
      Object.freeze<IProvince>({
        code: "GB-BGE",
        name: "Bridgend",
        slug: "bridgend",
      }),
      Object.freeze<IProvince>({
        code: "GB-BGW",
        name: "Blaenau Gwent",
        slug: "blaenau-gwent",
      }),
      Object.freeze<IProvince>({
        code: "GB-BIR",
        name: "Birmingham",
        slug: "birmingham",
      }),
      Object.freeze<IProvince>({
        code: "GB-BKM",
        name: "Buckinghamshire",
        slug: "buckinghamshire",
      }),
      Object.freeze<IProvince>({
        code: "GB-BLA",
        name: "Ballymena",
        slug: "ballymena",
      }),
      Object.freeze<IProvince>({
        code: "GB-BLY",
        name: "Ballymoney",
        slug: "ballymoney",
      }),
      Object.freeze<IProvince>({
        code: "GB-BMH",
        name: "Bournemouth",
        slug: "bournemouth",
      }),
      Object.freeze<IProvince>({
        code: "GB-BNB",
        name: "Banbridge",
        slug: "banbridge",
      }),
      Object.freeze<IProvince>({
        code: "GB-BNE",
        name: "Barnet",
        slug: "barnet",
      }),
      Object.freeze<IProvince>({
        code: "GB-BNH",
        name: "Brighton and Hove",
        slug: "brighton-and-hove",
      }),
      Object.freeze<IProvince>({
        code: "GB-BNS",
        name: "Barnsley",
        slug: "barnsley",
      }),
      Object.freeze<IProvince>({
        code: "GB-BOL",
        name: "Bolton",
        slug: "bolton",
      }),
      Object.freeze<IProvince>({
        code: "GB-BPL",
        name: "Blackpool",
        slug: "blackpool",
      }),
      Object.freeze<IProvince>({
        code: "GB-BRC",
        name: "Bracknell Forest",
        slug: "bracknell-forest",
      }),
      Object.freeze<IProvince>({
        code: "GB-BRD",
        name: "Bradford",
        slug: "bradford",
      }),
      Object.freeze<IProvince>({
        code: "GB-BRY",
        name: "Bromley",
        slug: "bromley",
      }),
      Object.freeze<IProvince>({
        code: "GB-BST",
        name: "Bristol, City of",
        slug: "bristol-city-of",
      }),
      Object.freeze<IProvince>({
        code: "GB-BUR",
        name: "Bury",
        slug: "bury",
      }),
      Object.freeze<IProvince>({
        code: "GB-CAM",
        name: "Cambridgeshire",
        slug: "cambridgeshire",
      }),
      Object.freeze<IProvince>({
        code: "GB-CAY",
        name: "Caerphilly",
        slug: "caerphilly",
      }),
      Object.freeze<IProvince>({
        code: "GB-CBF",
        name: "Central Bedfordshire",
        slug: "central-bedfordshire",
      }),
      Object.freeze<IProvince>({
        code: "GB-CGN",
        name: "Ceredigion",
        slug: "ceredigion",
      }),
      Object.freeze<IProvince>({
        code: "GB-CGV",
        name: "Craigavon",
        slug: "craigavon",
      }),
      Object.freeze<IProvince>({
        code: "GB-CHE",
        name: "Cheshire East",
        slug: "cheshire-east",
      }),
      Object.freeze<IProvince>({
        code: "GB-CHW",
        name: "Cheshire West and Chester",
        slug: "cheshire-west-and-chester",
      }),
      Object.freeze<IProvince>({
        code: "GB-CKF",
        name: "Carrickfergus",
        slug: "carrickfergus",
      }),
      Object.freeze<IProvince>({
        code: "GB-CKT",
        name: "Cookstown",
        slug: "cookstown",
      }),
      Object.freeze<IProvince>({
        code: "GB-CLD",
        name: "Calderdale",
        slug: "calderdale",
      }),
      Object.freeze<IProvince>({
        code: "GB-CLK",
        name: "Clackmannanshire",
        slug: "clackmannanshire",
      }),
      Object.freeze<IProvince>({
        code: "GB-CLR",
        name: "Coleraine",
        slug: "coleraine",
      }),
      Object.freeze<IProvince>({
        code: "GB-CMA",
        name: "Cumbria",
        slug: "cumbria",
      }),
      Object.freeze<IProvince>({
        code: "GB-CMD",
        name: "Camden",
        slug: "camden",
      }),
      Object.freeze<IProvince>({
        code: "GB-CMN",
        name: "Carmarthenshire",
        slug: "carmarthenshire",
      }),
      Object.freeze<IProvince>({
        code: "GB-CON",
        name: "Cornwall",
        slug: "cornwall",
      }),
      Object.freeze<IProvince>({
        code: "GB-COV",
        name: "Coventry",
        slug: "coventry",
      }),
      Object.freeze<IProvince>({
        code: "GB-CRF",
        name: "Cardiff",
        slug: "cardiff",
      }),
      Object.freeze<IProvince>({
        code: "GB-CRY",
        name: "Croydon",
        slug: "croydon",
      }),
      Object.freeze<IProvince>({
        code: "GB-CSR",
        name: "Castlereagh",
        slug: "castlereagh",
      }),
      Object.freeze<IProvince>({
        code: "GB-CWY",
        name: "Conwy",
        slug: "conwy",
      }),
      Object.freeze<IProvince>({
        code: "GB-DAL",
        name: "Darlington",
        slug: "darlington",
      }),
      Object.freeze<IProvince>({
        code: "GB-DBY",
        name: "Derbyshire",
        slug: "derbyshire",
      }),
      Object.freeze<IProvince>({
        code: "GB-DEN",
        name: "Denbighshire",
        slug: "denbighshire",
      }),
      Object.freeze<IProvince>({
        code: "GB-DER",
        name: "Derby",
        slug: "derby",
      }),
      Object.freeze<IProvince>({
        code: "GB-DEV",
        name: "Devon",
        slug: "devon",
      }),
      Object.freeze<IProvince>({
        code: "GB-DGN",
        name: "Dungannon and South Tyrone",
        slug: "dungannon-and-south-tyrone",
      }),
      Object.freeze<IProvince>({
        code: "GB-DGY",
        name: "Dumfries and Galloway",
        slug: "dumfries-and-galloway",
      }),
      Object.freeze<IProvince>({
        code: "GB-DNC",
        name: "Doncaster",
        slug: "doncaster",
      }),
      Object.freeze<IProvince>({
        code: "GB-DND",
        name: "Dundee City",
        slug: "dundee-city",
      }),
      Object.freeze<IProvince>({
        code: "GB-DOR",
        name: "Dorset",
        slug: "dorset",
      }),
      Object.freeze<IProvince>({
        code: "GB-DOW",
        name: "Down",
        slug: "down",
      }),
      Object.freeze<IProvince>({
        code: "GB-DRY",
        name: "Derry",
        slug: "derry",
      }),
      Object.freeze<IProvince>({
        code: "GB-DUD",
        name: "Dudley",
        slug: "dudley",
      }),
      Object.freeze<IProvince>({
        code: "GB-DUR",
        name: "Durham County",
        slug: "durham-county",
      }),
      Object.freeze<IProvince>({
        code: "GB-EAL",
        name: "Ealing",
        slug: "ealing",
      }),
      Object.freeze<IProvince>({
        code: "GB-EAY",
        name: "East Ayrshire",
        slug: "east-ayrshire",
      }),
      Object.freeze<IProvince>({
        code: "GB-EDH",
        name: "Edinburgh, City of",
        slug: "edinburgh-city-of",
      }),
      Object.freeze<IProvince>({
        code: "GB-EDU",
        name: "East Dunbartonshire",
        slug: "east-dunbartonshire",
      }),
      Object.freeze<IProvince>({
        code: "GB-ELN",
        name: "East Lothian",
        slug: "east-lothian",
      }),
      Object.freeze<IProvince>({
        code: "GB-ELS",
        name: "Eilean Siar",
        slug: "eilean-siar",
      }),
      Object.freeze<IProvince>({
        code: "GB-ENF",
        name: "Enfield",
        slug: "enfield",
      }),
      Object.freeze<IProvince>({
        code: "GB-ERW",
        name: "East Renfrewshire",
        slug: "east-renfrewshire",
      }),
      Object.freeze<IProvince>({
        code: "GB-ERY",
        name: "East Riding of Yorkshire",
        slug: "east-riding-of-yorkshire",
      }),
      Object.freeze<IProvince>({
        code: "GB-ESS",
        name: "Essex",
        slug: "essex",
      }),
      Object.freeze<IProvince>({
        code: "GB-ESX",
        name: "East Sussex",
        slug: "east-sussex",
      }),
      Object.freeze<IProvince>({
        code: "GB-FAL",
        name: "Falkirk",
        slug: "falkirk",
      }),
      Object.freeze<IProvince>({
        code: "GB-FER",
        name: "Fermanagh",
        slug: "fermanagh",
      }),
      Object.freeze<IProvince>({
        code: "GB-FIF",
        name: "Fife",
        slug: "fife",
      }),
      Object.freeze<IProvince>({
        code: "GB-FLN",
        name: "Flintshire",
        slug: "flintshire",
      }),
      Object.freeze<IProvince>({
        code: "GB-GAT",
        name: "Gateshead",
        slug: "gateshead",
      }),
      Object.freeze<IProvince>({
        code: "GB-GLG",
        name: "Glasgow City",
        slug: "glasgow-city",
      }),
      Object.freeze<IProvince>({
        code: "GB-GLS",
        name: "Gloucestershire",
        slug: "gloucestershire",
      }),
      Object.freeze<IProvince>({
        code: "GB-GRE",
        name: "Greenwich",
        slug: "greenwich",
      }),
      Object.freeze<IProvince>({
        code: "GB-GWN",
        name: "Gwynedd",
        slug: "gwynedd",
      }),
      Object.freeze<IProvince>({
        code: "GB-HAL",
        name: "Halton",
        slug: "halton",
      }),
      Object.freeze<IProvince>({
        code: "GB-HAM",
        name: "Hampshire",
        slug: "hampshire",
      }),
      Object.freeze<IProvince>({
        code: "GB-HAV",
        name: "Havering",
        slug: "havering",
      }),
      Object.freeze<IProvince>({
        code: "GB-HCK",
        name: "Hackney",
        slug: "hackney",
      }),
      Object.freeze<IProvince>({
        code: "GB-HEF",
        name: "Herefordshire",
        slug: "herefordshire",
      }),
      Object.freeze<IProvince>({
        code: "GB-HIL",
        name: "Hillingdon",
        slug: "hillingdon",
      }),
      Object.freeze<IProvince>({
        code: "GB-HLD",
        name: "Highland",
        slug: "highland",
      }),
      Object.freeze<IProvince>({
        code: "GB-HMF",
        name: "Hammersmith and Fulham",
        slug: "hammersmith-and-fulham",
      }),
      Object.freeze<IProvince>({
        code: "GB-HNS",
        name: "Hounslow",
        slug: "hounslow",
      }),
      Object.freeze<IProvince>({
        code: "GB-HPL",
        name: "Hartlepool",
        slug: "hartlepool",
      }),
      Object.freeze<IProvince>({
        code: "GB-HRT",
        name: "Hertfordshire",
        slug: "hertfordshire",
      }),
      Object.freeze<IProvince>({
        code: "GB-HRW",
        name: "Harrow",
        slug: "harrow",
      }),
      Object.freeze<IProvince>({
        code: "GB-HRY",
        name: "Haringey",
        slug: "haringey",
      }),
      Object.freeze<IProvince>({
        code: "GB-IOS",
        name: "Isles of Scilly",
        slug: "isles-of-scilly",
      }),
      Object.freeze<IProvince>({
        code: "GB-IOW",
        name: "Isle of Wight",
        slug: "isle-of-wight",
      }),
      Object.freeze<IProvince>({
        code: "GB-ISL",
        name: "Islington",
        slug: "islington",
      }),
      Object.freeze<IProvince>({
        code: "GB-IVC",
        name: "Inverclyde",
        slug: "inverclyde",
      }),
      Object.freeze<IProvince>({
        code: "GB-KEC",
        name: "Kensington and Chelsea",
        slug: "kensington-and-chelsea",
      }),
      Object.freeze<IProvince>({
        code: "GB-KEN",
        name: "Kent",
        slug: "kent",
      }),
      Object.freeze<IProvince>({
        code: "GB-KHL",
        name: "Kingston upon Hull",
        slug: "kingston-upon-hull",
      }),
      Object.freeze<IProvince>({
        code: "GB-KIR",
        name: "Kirklees",
        slug: "kirklees",
      }),
      Object.freeze<IProvince>({
        code: "GB-KTT",
        name: "Kingston upon Thames",
        slug: "kingston-upon-thames",
      }),
      Object.freeze<IProvince>({
        code: "GB-KWL",
        name: "Knowsley",
        slug: "knowsley",
      }),
      Object.freeze<IProvince>({
        code: "GB-LAN",
        name: "Lancashire",
        slug: "lancashire",
      }),
      Object.freeze<IProvince>({
        code: "GB-LBH",
        name: "Lambeth",
        slug: "lambeth",
      }),
      Object.freeze<IProvince>({
        code: "GB-LCE",
        name: "Leicester",
        slug: "leicester",
      }),
      Object.freeze<IProvince>({
        code: "GB-LDS",
        name: "Leeds",
        slug: "leeds",
      }),
      Object.freeze<IProvince>({
        code: "GB-LEC",
        name: "Leicestershire",
        slug: "leicestershire",
      }),
      Object.freeze<IProvince>({
        code: "GB-LEW",
        name: "Lewisham",
        slug: "lewisham",
      }),
      Object.freeze<IProvince>({
        code: "GB-LIN",
        name: "Lincolnshire",
        slug: "lincolnshire",
      }),
      Object.freeze<IProvince>({
        code: "GB-LIV",
        name: "Liverpool",
        slug: "liverpool",
      }),
      Object.freeze<IProvince>({
        code: "GB-LMV",
        name: "Limavady",
        slug: "limavady",
      }),
      Object.freeze<IProvince>({
        code: "GB-LND",
        name: "London, City of",
        slug: "london-city-of",
      }),
      Object.freeze<IProvince>({
        code: "GB-LRN",
        name: "Larne",
        slug: "larne",
      }),
      Object.freeze<IProvince>({
        code: "GB-LSB",
        name: "Lisburn",
        slug: "lisburn",
      }),
      Object.freeze<IProvince>({
        code: "GB-LUT",
        name: "Luton",
        slug: "luton",
      }),
      Object.freeze<IProvince>({
        code: "GB-MAN",
        name: "Manchester",
        slug: "manchester",
      }),
      Object.freeze<IProvince>({
        code: "GB-MDB",
        name: "Middlesbrough",
        slug: "middlesbrough",
      }),
      Object.freeze<IProvince>({
        code: "GB-MDW",
        name: "Medway",
        slug: "medway",
      }),
      Object.freeze<IProvince>({
        code: "GB-MFT",
        name: "Magherafelt",
        slug: "magherafelt",
      }),
      Object.freeze<IProvince>({
        code: "GB-MIK",
        name: "Milton Keynes",
        slug: "milton-keynes",
      }),
      Object.freeze<IProvince>({
        code: "GB-MLN",
        name: "Midlothian",
        slug: "midlothian",
      }),
      Object.freeze<IProvince>({
        code: "GB-MON",
        name: "Monmouthshire",
        slug: "monmouthshire",
      }),
      Object.freeze<IProvince>({
        code: "GB-MRT",
        name: "Merton",
        slug: "merton",
      }),
      Object.freeze<IProvince>({
        code: "GB-MRY",
        name: "Moray",
        slug: "moray",
      }),
      Object.freeze<IProvince>({
        code: "GB-MTY",
        name: "Merthyr Tydfil",
        slug: "merthyr-tydfil",
      }),
      Object.freeze<IProvince>({
        code: "GB-MYL",
        name: "Moyle",
        slug: "moyle",
      }),
      Object.freeze<IProvince>({
        code: "GB-NAY",
        name: "North Ayrshire",
        slug: "north-ayrshire",
      }),
      Object.freeze<IProvince>({
        code: "GB-NBL",
        name: "Northumberland",
        slug: "northumberland",
      }),
      Object.freeze<IProvince>({
        code: "GB-NDN",
        name: "North Down",
        slug: "north-down",
      }),
      Object.freeze<IProvince>({
        code: "GB-NEL",
        name: "North East Lincolnshire",
        slug: "north-east-lincolnshire",
      }),
      Object.freeze<IProvince>({
        code: "GB-NET",
        name: "Newcastle upon Tyne",
        slug: "newcastle-upon-tyne",
      }),
      Object.freeze<IProvince>({
        code: "GB-NFK",
        name: "Norfolk",
        slug: "norfolk",
      }),
      Object.freeze<IProvince>({
        code: "GB-NGM",
        name: "Nottingham",
        slug: "nottingham",
      }),
      Object.freeze<IProvince>({
        code: "GB-NLK",
        name: "North Lanarkshire",
        slug: "north-lanarkshire",
      }),
      Object.freeze<IProvince>({
        code: "GB-NLN",
        name: "North Lincolnshire",
        slug: "north-lincolnshire",
      }),
      Object.freeze<IProvince>({
        code: "GB-NSM",
        name: "North Somerset",
        slug: "north-somerset",
      }),
      Object.freeze<IProvince>({
        code: "GB-NTA",
        name: "Newtownabbey",
        slug: "newtownabbey",
      }),
      Object.freeze<IProvince>({
        code: "GB-NTH",
        name: "Northamptonshire",
        slug: "northamptonshire",
      }),
      Object.freeze<IProvince>({
        code: "GB-NTL",
        name: "Neath Port Talbot",
        slug: "neath-port-talbot",
      }),
      Object.freeze<IProvince>({
        code: "GB-NTT",
        name: "Nottinghamshire",
        slug: "nottinghamshire",
      }),
      Object.freeze<IProvince>({
        code: "GB-NTY",
        name: "North Tyneside",
        slug: "north-tyneside",
      }),
      Object.freeze<IProvince>({
        code: "GB-NWM",
        name: "Newham",
        slug: "newham",
      }),
      Object.freeze<IProvince>({
        code: "GB-NWP",
        name: "Newport",
        slug: "newport",
      }),
      Object.freeze<IProvince>({
        code: "GB-NYK",
        name: "North Yorkshire",
        slug: "north-yorkshire",
      }),
      Object.freeze<IProvince>({
        code: "GB-NYM",
        name: "Newry and Mourne",
        slug: "newry-and-mourne",
      }),
      Object.freeze<IProvince>({
        code: "GB-OLD",
        name: "Oldham",
        slug: "oldham",
      }),
      Object.freeze<IProvince>({
        code: "GB-OMH",
        name: "Omagh",
        slug: "omagh",
      }),
      Object.freeze<IProvince>({
        code: "GB-ORK",
        name: "Orkney Islands",
        slug: "orkney-islands",
      }),
      Object.freeze<IProvince>({
        code: "GB-OXF",
        name: "Oxfordshire",
        slug: "oxfordshire",
      }),
      Object.freeze<IProvince>({
        code: "GB-PEM",
        name: "Pembrokeshire",
        slug: "pembrokeshire",
      }),
      Object.freeze<IProvince>({
        code: "GB-PKN",
        name: "Perth and Kinross",
        slug: "perth-and-kinross",
      }),
      Object.freeze<IProvince>({
        code: "GB-PLY",
        name: "Plymouth",
        slug: "plymouth",
      }),
      Object.freeze<IProvince>({
        code: "GB-POL",
        name: "Poole",
        slug: "poole",
      }),
      Object.freeze<IProvince>({
        code: "GB-POR",
        name: "Portsmouth",
        slug: "portsmouth",
      }),
      Object.freeze<IProvince>({
        code: "GB-POW",
        name: "Powys",
        slug: "powys",
      }),
      Object.freeze<IProvince>({
        code: "GB-PTE",
        name: "Peterborough",
        slug: "peterborough",
      }),
      Object.freeze<IProvince>({
        code: "GB-RCC",
        name: "Redcar and Cleveland",
        slug: "redcar-and-cleveland",
      }),
      Object.freeze<IProvince>({
        code: "GB-RCH",
        name: "Rochdale",
        slug: "rochdale",
      }),
      Object.freeze<IProvince>({
        code: "GB-RCT",
        name: "Rhondda, Cynon, Taff",
        slug: "rhondda-cynon-taff",
      }),
      Object.freeze<IProvince>({
        code: "GB-RDB",
        name: "Redbridge",
        slug: "redbridge",
      }),
      Object.freeze<IProvince>({
        code: "GB-RDG",
        name: "Reading",
        slug: "reading",
      }),
      Object.freeze<IProvince>({
        code: "GB-RFW",
        name: "Renfrewshire",
        slug: "renfrewshire",
      }),
      Object.freeze<IProvince>({
        code: "GB-RIC",
        name: "Richmond upon Thames",
        slug: "richmond-upon-thames",
      }),
      Object.freeze<IProvince>({
        code: "GB-ROT",
        name: "Rotherham",
        slug: "rotherham",
      }),
      Object.freeze<IProvince>({
        code: "GB-RUT",
        name: "Rutland",
        slug: "rutland",
      }),
      Object.freeze<IProvince>({
        code: "GB-SAW",
        name: "Sandwell",
        slug: "sandwell",
      }),
      Object.freeze<IProvince>({
        code: "GB-SAY",
        name: "South Ayrshire",
        slug: "south-ayrshire",
      }),
      Object.freeze<IProvince>({
        code: "GB-SCB",
        name: "Scottish Borders, The",
        slug: "scottish-borders-the",
      }),
      Object.freeze<IProvince>({
        code: "GB-SFK",
        name: "Suffolk",
        slug: "suffolk",
      }),
      Object.freeze<IProvince>({
        code: "GB-SFT",
        name: "Sefton",
        slug: "sefton",
      }),
      Object.freeze<IProvince>({
        code: "GB-SGC",
        name: "South Gloucestershire",
        slug: "south-gloucestershire",
      }),
      Object.freeze<IProvince>({
        code: "GB-SHF",
        name: "Sheffield",
        slug: "sheffield",
      }),
      Object.freeze<IProvince>({
        code: "GB-SHN",
        name: "St. Helens",
        slug: "st-helens",
      }),
      Object.freeze<IProvince>({
        code: "GB-SHR",
        name: "Shropshire",
        slug: "shropshire",
      }),
      Object.freeze<IProvince>({
        code: "GB-SKP",
        name: "Stockport",
        slug: "stockport",
      }),
      Object.freeze<IProvince>({
        code: "GB-SLF",
        name: "Salford",
        slug: "salford",
      }),
      Object.freeze<IProvince>({
        code: "GB-SLG",
        name: "Slough",
        slug: "slough",
      }),
      Object.freeze<IProvince>({
        code: "GB-SLK",
        name: "South Lanarkshire",
        slug: "south-lanarkshire",
      }),
      Object.freeze<IProvince>({
        code: "GB-SND",
        name: "Sunderland",
        slug: "sunderland",
      }),
      Object.freeze<IProvince>({
        code: "GB-SOL",
        name: "Solihull",
        slug: "solihull",
      }),
      Object.freeze<IProvince>({
        code: "GB-SOM",
        name: "Somerset",
        slug: "somerset",
      }),
      Object.freeze<IProvince>({
        code: "GB-SOS",
        name: "Southend-on-Sea",
        slug: "southend-on-sea",
      }),
      Object.freeze<IProvince>({
        code: "GB-SRY",
        name: "Surrey",
        slug: "surrey",
      }),
      Object.freeze<IProvince>({
        code: "GB-STB",
        name: "Strabane",
        slug: "strabane",
      }),
      Object.freeze<IProvince>({
        code: "GB-STE",
        name: "Stoke-on-Trent",
        slug: "stoke-on-trent",
      }),
      Object.freeze<IProvince>({
        code: "GB-STG",
        name: "Stirling",
        slug: "stirling",
      }),
      Object.freeze<IProvince>({
        code: "GB-STH",
        name: "Southampton",
        slug: "southampton",
      }),
      Object.freeze<IProvince>({
        code: "GB-STN",
        name: "Sutton",
        slug: "sutton",
      }),
      Object.freeze<IProvince>({
        code: "GB-STS",
        name: "Staffordshire",
        slug: "staffordshire",
      }),
      Object.freeze<IProvince>({
        code: "GB-STT",
        name: "Stockton-on-Tees",
        slug: "stockton-on-tees",
      }),
      Object.freeze<IProvince>({
        code: "GB-STY",
        name: "South Tyneside",
        slug: "south-tyneside",
      }),
      Object.freeze<IProvince>({
        code: "GB-SWA",
        name: "Swansea",
        slug: "swansea",
      }),
      Object.freeze<IProvince>({
        code: "GB-SWD",
        name: "Swindon",
        slug: "swindon",
      }),
      Object.freeze<IProvince>({
        code: "GB-SWK",
        name: "Southwark",
        slug: "southwark",
      }),
      Object.freeze<IProvince>({
        code: "GB-TAM",
        name: "Tameside",
        slug: "tameside",
      }),
      Object.freeze<IProvince>({
        code: "GB-TFW",
        name: "Telford and Wrekin",
        slug: "telford-and-wrekin",
      }),
      Object.freeze<IProvince>({
        code: "GB-THR",
        name: "Thurrock",
        slug: "thurrock",
      }),
      Object.freeze<IProvince>({
        code: "GB-TOB",
        name: "Torbay",
        slug: "torbay",
      }),
      Object.freeze<IProvince>({
        code: "GB-TOF",
        name: "Torfaen",
        slug: "torfaen",
      }),
      Object.freeze<IProvince>({
        code: "GB-TRF",
        name: "Trafford",
        slug: "trafford",
      }),
      Object.freeze<IProvince>({
        code: "GB-TWH",
        name: "Tower Hamlets",
        slug: "tower-hamlets",
      }),
      Object.freeze<IProvince>({
        code: "GB-VGL",
        name: "Vale of Glamorgan, The",
        slug: "vale-of-glamorgan-the",
      }),
      Object.freeze<IProvince>({
        code: "GB-WAR",
        name: "Warwickshire",
        slug: "warwickshire",
      }),
      Object.freeze<IProvince>({
        code: "GB-WBK",
        name: "West Berkshire",
        slug: "west-berkshire",
      }),
      Object.freeze<IProvince>({
        code: "GB-WDU",
        name: "West Dunbartonshire",
        slug: "west-dunbartonshire",
      }),
      Object.freeze<IProvince>({
        code: "GB-WFT",
        name: "Waltham Forest",
        slug: "waltham-forest",
      }),
      Object.freeze<IProvince>({
        code: "GB-WGN",
        name: "Wigan",
        slug: "wigan",
      }),
      Object.freeze<IProvince>({
        code: "GB-WIL",
        name: "Wiltshire",
        slug: "wiltshire",
      }),
      Object.freeze<IProvince>({
        code: "GB-WKF",
        name: "Wakefield",
        slug: "wakefield",
      }),
      Object.freeze<IProvince>({
        code: "GB-WLL",
        name: "Walsall",
        slug: "walsall",
      }),
      Object.freeze<IProvince>({
        code: "GB-WLN",
        name: "West Lothian",
        slug: "west-lothian",
      }),
      Object.freeze<IProvince>({
        code: "GB-WLV",
        name: "Wolverhampton",
        slug: "wolverhampton",
      }),
      Object.freeze<IProvince>({
        code: "GB-WND",
        name: "Wandsworth",
        slug: "wandsworth",
      }),
      Object.freeze<IProvince>({
        code: "GB-WNM",
        name: "Windsor and Maidenhead",
        slug: "windsor-and-maidenhead",
      }),
      Object.freeze<IProvince>({
        code: "GB-WOK",
        name: "Wokingham",
        slug: "wokingham",
      }),
      Object.freeze<IProvince>({
        code: "GB-WOR",
        name: "Worcestershire",
        slug: "worcestershire",
      }),
      Object.freeze<IProvince>({
        code: "GB-WRL",
        name: "Wirral",
        slug: "wirral",
      }),
      Object.freeze<IProvince>({
        code: "GB-WRT",
        name: "Warrington",
        slug: "warrington",
      }),
      Object.freeze<IProvince>({
        code: "GB-WRX",
        name: "Wrexham",
        slug: "wrexham",
      }),
      Object.freeze<IProvince>({
        code: "GB-WSM",
        name: "Westminster",
        slug: "westminster",
      }),
      Object.freeze<IProvince>({
        code: "GB-WSX",
        name: "West Sussex",
        slug: "west-sussex",
      }),
      Object.freeze<IProvince>({
        code: "GB-YOR",
        name: "York",
        slug: "york",
      }),
      Object.freeze<IProvince>({
        code: "GB-ZET",
        name: "Shetland Islands",
        slug: "shetland-islands",
      }),
    ],
  }),
  UM: Object.freeze<ICountry>({
    code: "UM",
    currency: CURRENCIES.USD,
    name: "United States Minor Outlying Islands",
    nameWithArticle: "United States Minor Outlying Islands",
    provinces: [
      Object.freeze<IProvince>({
        code: "UM-67",
        name: "Johnston Atoll",
        slug: "johnston-atoll",
      }),
      Object.freeze<IProvince>({
        code: "UM-71",
        name: "Midway Islands",
        slug: "midway-islands",
      }),
      Object.freeze<IProvince>({
        code: "UM-76",
        name: "Navassa Island",
        slug: "navassa-island",
      }),
      Object.freeze<IProvince>({
        code: "UM-79",
        name: "Wake Island",
        slug: "wake-island",
      }),
      Object.freeze<IProvince>({
        code: "UM-81",
        name: "Baker Island",
        slug: "baker-island",
      }),
      Object.freeze<IProvince>({
        code: "UM-84",
        name: "Howland Island",
        slug: "howland-island",
      }),
      Object.freeze<IProvince>({
        code: "UM-86",
        name: "Jarvis Island",
        slug: "jarvis-island",
      }),
      Object.freeze<IProvince>({
        code: "UM-89",
        name: "Kingman Reef",
        slug: "kingman-reef",
      }),
      Object.freeze<IProvince>({
        code: "UM-95",
        name: "Palmyra Atoll",
        slug: "palmyra-atoll",
      }),
    ],
  }),
  US: Object.freeze<ICountry>({
    code: "US",
    currency: CURRENCIES.USD,
    name: "United States",
    nameWithArticle: "United States",
    provinces: [
      Object.freeze<IProvince>({
        code: "US-AK",
        name: "Alaska",
        slug: "alaska",
      }),
      Object.freeze<IProvince>({
        code: "US-AL",
        name: "Alabama",
        slug: "alabama",
      }),
      Object.freeze<IProvince>({
        code: "US-AR",
        name: "Arkansas",
        slug: "arkansas",
      }),
      Object.freeze<IProvince>({
        code: "US-AZ",
        name: "Arizona",
        slug: "arizona",
      }),
      Object.freeze<IProvince>({
        code: "US-CA",
        name: "California",
        slug: "california",
      }),
      Object.freeze<IProvince>({
        code: "US-CO",
        name: "Colorado",
        slug: "colorado",
      }),
      Object.freeze<IProvince>({
        code: "US-CT",
        name: "Connecticut",
        slug: "connecticut",
      }),
      Object.freeze<IProvince>({
        code: "US-DC",
        name: "District of Columbia",
        slug: "district-of-columbia",
      }),
      Object.freeze<IProvince>({
        code: "US-DE",
        name: "Delaware",
        slug: "delaware",
      }),
      Object.freeze<IProvince>({
        code: "US-FL",
        name: "Florida",
        slug: "florida",
      }),
      Object.freeze<IProvince>({
        code: "US-GA",
        name: "Georgia",
        slug: "georgia",
      }),
      Object.freeze<IProvince>({
        code: "US-HI",
        name: "Hawaii",
        slug: "hawaii",
      }),
      Object.freeze<IProvince>({
        code: "US-IA",
        name: "Iowa",
        slug: "iowa",
      }),
      Object.freeze<IProvince>({
        code: "US-ID",
        name: "Idaho",
        slug: "idaho",
      }),
      Object.freeze<IProvince>({
        code: "US-IL",
        name: "Illinois",
        slug: "illinois",
      }),
      Object.freeze<IProvince>({
        code: "US-IN",
        name: "Indiana",
        slug: "indiana",
      }),
      Object.freeze<IProvince>({
        code: "US-KS",
        name: "Kansas",
        slug: "kansas",
      }),
      Object.freeze<IProvince>({
        code: "US-KY",
        name: "Kentucky",
        slug: "kentucky",
      }),
      Object.freeze<IProvince>({
        code: "US-LA",
        name: "Louisiana",
        slug: "louisiana",
      }),
      Object.freeze<IProvince>({
        code: "US-MA",
        name: "Massachusetts",
        slug: "massachusetts",
      }),
      Object.freeze<IProvince>({
        code: "US-MD",
        name: "Maryland",
        slug: "maryland",
      }),
      Object.freeze<IProvince>({
        code: "US-ME",
        name: "Maine",
        slug: "maine",
      }),
      Object.freeze<IProvince>({
        code: "US-MI",
        name: "Michigan",
        slug: "michigan",
      }),
      Object.freeze<IProvince>({
        code: "US-MN",
        name: "Minnesota",
        slug: "minnesota",
      }),
      Object.freeze<IProvince>({
        code: "US-MO",
        name: "Missouri",
        slug: "missouri",
      }),
      Object.freeze<IProvince>({
        code: "US-MS",
        name: "Mississippi",
        slug: "mississippi",
      }),
      Object.freeze<IProvince>({
        code: "US-MT",
        name: "Montana",
        slug: "montana",
      }),
      Object.freeze<IProvince>({
        code: "US-NC",
        name: "North Carolina",
        slug: "north-carolina",
      }),
      Object.freeze<IProvince>({
        code: "US-ND",
        name: "North Dakota",
        slug: "north-dakota",
      }),
      Object.freeze<IProvince>({
        code: "US-NE",
        name: "Nebraska",
        slug: "nebraska",
      }),
      Object.freeze<IProvince>({
        code: "US-NH",
        name: "New Hampshire",
        slug: "new-hampshire",
      }),
      Object.freeze<IProvince>({
        code: "US-NJ",
        name: "New Jersey",
        slug: "new-jersey",
      }),
      Object.freeze<IProvince>({
        code: "US-NM",
        name: "New Mexico",
        slug: "new-mexico",
      }),
      Object.freeze<IProvince>({
        code: "US-NV",
        name: "Nevada",
        slug: "nevada",
      }),
      Object.freeze<IProvince>({
        code: "US-NY",
        name: "New York",
        slug: "new-york",
      }),
      Object.freeze<IProvince>({
        code: "US-OH",
        name: "Ohio",
        slug: "ohio",
      }),
      Object.freeze<IProvince>({
        code: "US-OK",
        name: "Oklahoma",
        slug: "oklahoma",
      }),
      Object.freeze<IProvince>({
        code: "US-OR",
        name: "Oregon",
        slug: "oregon",
      }),
      Object.freeze<IProvince>({
        code: "US-PA",
        name: "Pennsylvania",
        slug: "pennsylvania",
      }),
      Object.freeze<IProvince>({
        code: "US-RI",
        name: "Rhode Island",
        slug: "rhode-island",
      }),
      Object.freeze<IProvince>({
        code: "US-SC",
        name: "South Carolina",
        slug: "south-carolina",
      }),
      Object.freeze<IProvince>({
        code: "US-SD",
        name: "South Dakota",
        slug: "south-dakota",
      }),
      Object.freeze<IProvince>({
        code: "US-TN",
        name: "Tennessee",
        slug: "tennessee",
      }),
      Object.freeze<IProvince>({
        code: "US-TX",
        name: "Texas",
        slug: "texas",
      }),
      Object.freeze<IProvince>({
        code: "US-UT",
        name: "Utah",
        slug: "utah",
      }),
      Object.freeze<IProvince>({
        code: "US-VA",
        name: "Virginia",
        slug: "virginia",
      }),
      Object.freeze<IProvince>({
        code: "US-VT",
        name: "Vermont",
        slug: "vermont",
      }),
      Object.freeze<IProvince>({
        code: "US-WA",
        name: "Washington",
        slug: "washington",
      }),
      Object.freeze<IProvince>({
        code: "US-WI",
        name: "Wisconsin",
        slug: "wisconsin",
      }),
      Object.freeze<IProvince>({
        code: "US-WV",
        name: "West Virginia",
        slug: "west-virginia",
      }),
      Object.freeze<IProvince>({
        code: "US-WY",
        name: "Wyoming",
        slug: "wyoming",
      }),
    ],
  }),
  UY: Object.freeze<ICountry>({
    code: "UY",
    currency: CURRENCIES.UYU,
    name: "Uruguay",
    nameWithArticle: "Uruguay",
    provinces: [
      Object.freeze<IProvince>({
        code: "UY-AR",
        name: "Artigas",
        slug: "artigas",
      }),
      Object.freeze<IProvince>({
        code: "UY-CA",
        name: "Canelones",
        slug: "canelones",
      }),
      Object.freeze<IProvince>({
        code: "UY-CL",
        name: "Cerro Largo",
        slug: "cerro-largo",
      }),
      Object.freeze<IProvince>({
        code: "UY-CO",
        name: "Colonia",
        slug: "colonia",
      }),
      Object.freeze<IProvince>({
        code: "UY-DU",
        name: "Durazno",
        slug: "durazno",
      }),
      Object.freeze<IProvince>({
        code: "UY-FD",
        name: "Florida",
        slug: "florida",
      }),
      Object.freeze<IProvince>({
        code: "UY-FS",
        name: "Flores",
        slug: "flores",
      }),
      Object.freeze<IProvince>({
        code: "UY-LA",
        name: "Lavalleja",
        slug: "lavalleja",
      }),
      Object.freeze<IProvince>({
        code: "UY-MA",
        name: "Maldonado",
        slug: "maldonado",
      }),
      Object.freeze<IProvince>({
        code: "UY-MO",
        name: "Montevideo",
        slug: "montevideo",
      }),
      Object.freeze<IProvince>({
        code: "UY-PA",
        name: "Paysand\u00fa",
        slug: "paysandu",
      }),
      Object.freeze<IProvince>({
        code: "UY-RN",
        name: "R\u00edo Negro",
        slug: "rio-negro",
      }),
      Object.freeze<IProvince>({
        code: "UY-RO",
        name: "Rocha",
        slug: "rocha",
      }),
      Object.freeze<IProvince>({
        code: "UY-RV",
        name: "Rivera",
        slug: "rivera",
      }),
      Object.freeze<IProvince>({
        code: "UY-SA",
        name: "Salto",
        slug: "salto",
      }),
      Object.freeze<IProvince>({
        code: "UY-SJ",
        name: "San Jos\u00e9",
        slug: "san-jose",
      }),
      Object.freeze<IProvince>({
        code: "UY-SO",
        name: "Soriano",
        slug: "soriano",
      }),
      Object.freeze<IProvince>({
        code: "UY-TA",
        name: "Tacuaremb\u00f3",
        slug: "tacuarembo",
      }),
      Object.freeze<IProvince>({
        code: "UY-TT",
        name: "Treinta y Tres",
        slug: "treinta-y-tres",
      }),
    ],
  }),
  UZ: Object.freeze<ICountry>({
    code: "UZ",
    currency: CURRENCIES.KGS,
    name: "Uzbekistan",
    nameWithArticle: "Uzbekistan",
    provinces: [
      Object.freeze<IProvince>({
        code: "UZ-AN",
        name: "Andijon",
        slug: "andijon",
      }),
      Object.freeze<IProvince>({
        code: "UZ-BU",
        name: "Buxoro",
        slug: "buxoro",
      }),
      Object.freeze<IProvince>({
        code: "UZ-FA",
        name: "Farg\u2018ona",
        slug: "fargona",
      }),
      Object.freeze<IProvince>({
        code: "UZ-JI",
        name: "Jizzax",
        slug: "jizzax",
      }),
      Object.freeze<IProvince>({
        code: "UZ-NG",
        name: "Namangan",
        slug: "namangan",
      }),
      Object.freeze<IProvince>({
        code: "UZ-NW",
        name: "Navoiy",
        slug: "navoiy",
      }),
      Object.freeze<IProvince>({
        code: "UZ-QA",
        name: "Qashqadaryo",
        slug: "qashqadaryo",
      }),
      Object.freeze<IProvince>({
        code: "UZ-QR",
        name: "Qoraqalpog\u2018iston Respublikasi",
        slug: "qoraqalpogiston-respublikasi",
      }),
      Object.freeze<IProvince>({
        code: "UZ-SA",
        name: "Samarqand",
        slug: "samarqand",
      }),
      Object.freeze<IProvince>({
        code: "UZ-SI",
        name: "Sirdaryo",
        slug: "sirdaryo",
      }),
      Object.freeze<IProvince>({
        code: "UZ-SU",
        name: "Surxondaryo",
        slug: "surxondaryo",
      }),
      Object.freeze<IProvince>({
        code: "UZ-TK",
        name: "Toshkent, City",
        slug: "toshkent-city",
      }),
      Object.freeze<IProvince>({
        code: "UZ-TO",
        name: "Toshkent",
        slug: "toshkent",
      }),
      Object.freeze<IProvince>({
        code: "UZ-XO",
        name: "Xorazm",
        slug: "xorazm",
      }),
    ],
  }),
  VU: Object.freeze<ICountry>({
    code: "VU",
    currency: CURRENCIES.VUV,
    name: "Vanuatu",
    nameWithArticle: "Vanuatu",
    provinces: [
      Object.freeze<IProvince>({
        code: "VU-MAP",
        name: "Malampa",
        slug: "malampa",
      }),
      Object.freeze<IProvince>({
        code: "VU-PAM",
        name: "P\u00e9nama",
        slug: "penama",
      }),
      Object.freeze<IProvince>({
        code: "VU-SAM",
        name: "Sanma",
        slug: "sanma",
      }),
      Object.freeze<IProvince>({
        code: "VU-SEE",
        name: "Sh\u00e9fa",
        slug: "shefa",
      }),
      Object.freeze<IProvince>({
        code: "VU-TAE",
        name: "Taf\u00e9a",
        slug: "tafea",
      }),
      Object.freeze<IProvince>({
        code: "VU-TOB",
        name: "Torba",
        slug: "torba",
      }),
    ],
  }),
  VA: Object.freeze<ICountry>({
    code: "VA",
    currency: CURRENCIES.EUR,
    name: "Holy See",
    nameWithArticle: "The Holy See",
    provinces: [],
  }),
  VE: Object.freeze<ICountry>({
    code: "VE",
    currency: CURRENCIES.VEF,
    name: "Venezuela, Bolivarian Republic of",
    nameWithArticle: "Venezuela, The Bolivarian Republic of",
    provinces: [
      Object.freeze<IProvince>({
        code: "VE-A",
        name: "Distrito Capital",
        slug: "distrito-capital",
      }),
      Object.freeze<IProvince>({
        code: "VE-B",
        name: "Anzo\u00e1tegui",
        slug: "anzoategui",
      }),
      Object.freeze<IProvince>({
        code: "VE-C",
        name: "Apure",
        slug: "apure",
      }),
      Object.freeze<IProvince>({
        code: "VE-D",
        name: "Aragua",
        slug: "aragua",
      }),
      Object.freeze<IProvince>({
        code: "VE-E",
        name: "Barinas",
        slug: "barinas",
      }),
      Object.freeze<IProvince>({
        code: "VE-F",
        name: "Bol\u00edvar",
        slug: "bolivar",
      }),
      Object.freeze<IProvince>({
        code: "VE-G",
        name: "Carabobo",
        slug: "carabobo",
      }),
      Object.freeze<IProvince>({
        code: "VE-H",
        name: "Cojedes",
        slug: "cojedes",
      }),
      Object.freeze<IProvince>({
        code: "VE-I",
        name: "Falc\u00f3n",
        slug: "falcon",
      }),
      Object.freeze<IProvince>({
        code: "VE-J",
        name: "Gu\u00e1rico",
        slug: "guarico",
      }),
      Object.freeze<IProvince>({
        code: "VE-K",
        name: "Lara",
        slug: "lara",
      }),
      Object.freeze<IProvince>({
        code: "VE-L",
        name: "M\u00e9rida",
        slug: "merida",
      }),
      Object.freeze<IProvince>({
        code: "VE-M",
        name: "Miranda",
        slug: "miranda",
      }),
      Object.freeze<IProvince>({
        code: "VE-N",
        name: "Monagas",
        slug: "monagas",
      }),
      Object.freeze<IProvince>({
        code: "VE-O",
        name: "Nueva Esparta",
        slug: "nueva-esparta",
      }),
      Object.freeze<IProvince>({
        code: "VE-P",
        name: "Portuguesa",
        slug: "portuguesa",
      }),
      Object.freeze<IProvince>({
        code: "VE-R",
        name: "Sucre",
        slug: "sucre",
      }),
      Object.freeze<IProvince>({
        code: "VE-S",
        name: "T\u00e1chira",
        slug: "tachira",
      }),
      Object.freeze<IProvince>({
        code: "VE-T",
        name: "Trujillo",
        slug: "trujillo",
      }),
      Object.freeze<IProvince>({
        code: "VE-U",
        name: "Yaracuy",
        slug: "yaracuy",
      }),
      Object.freeze<IProvince>({
        code: "VE-V",
        name: "Zulia",
        slug: "zulia",
      }),
      Object.freeze<IProvince>({
        code: "VE-X",
        name: "Vargas",
        slug: "vargas",
      }),
      Object.freeze<IProvince>({
        code: "VE-Y",
        name: "Delta Amacuro",
        slug: "delta-amacuro",
      }),
      Object.freeze<IProvince>({
        code: "VE-Z",
        name: "Amazonas",
        slug: "amazonas",
      }),
    ],
  }),
  VN: Object.freeze<ICountry>({
    code: "VN",
    currency: CURRENCIES.VND,
    name: "Viet Nam",
    nameWithArticle: "Viet Nam",
    provinces: [
      Object.freeze<IProvince>({
        code: "VN-01",
        name: "Lai Ch\u00e2u",
        slug: "lai-chau",
      }),
      Object.freeze<IProvince>({
        code: "VN-02",
        name: "L\u00e0o Cai",
        slug: "lao-cai",
      }),
      Object.freeze<IProvince>({
        code: "VN-03",
        name: "H\u00e0 Giang",
        slug: "ha-giang",
      }),
      Object.freeze<IProvince>({
        code: "VN-04",
        name: "Cao B\u1eb1ng",
        slug: "cao-bang",
      }),
      Object.freeze<IProvince>({
        code: "VN-05",
        name: "S\u01a1n La",
        slug: "son-la",
      }),
      Object.freeze<IProvince>({
        code: "VN-06",
        name: "Y\u00ean B\u00e1i",
        slug: "yen-bai",
      }),
      Object.freeze<IProvince>({
        code: "VN-07",
        name: "Tuy\u00ean Quang",
        slug: "tuyen-quang",
      }),
      Object.freeze<IProvince>({
        code: "VN-09",
        name: "L\u1ea1ng S\u01a1n",
        slug: "lang-son",
      }),
      Object.freeze<IProvince>({
        code: "VN-13",
        name: "Qu\u1ea3ng Ninh",
        slug: "quang-ninh",
      }),
      Object.freeze<IProvince>({
        code: "VN-14",
        name: "H\u00f2a B\u00ecnh",
        slug: "hoa-binh",
      }),
      Object.freeze<IProvince>({
        code: "VN-18",
        name: "Ninh B\u00ecnh",
        slug: "ninh-binh",
      }),
      Object.freeze<IProvince>({
        code: "VN-20",
        name: "Th\u00e1i B\u00ecnh",
        slug: "thai-binh",
      }),
      Object.freeze<IProvince>({
        code: "VN-21",
        name: "Thanh H\u00f3a",
        slug: "thanh-hoa",
      }),
      Object.freeze<IProvince>({
        code: "VN-22",
        name: "Ngh\u1ec7 An",
        slug: "nghe-an",
      }),
      Object.freeze<IProvince>({
        code: "VN-23",
        name: "H\u00e0 T\u0129nh",
        slug: "ha-tinh",
      }),
      Object.freeze<IProvince>({
        code: "VN-24",
        name: "Qu\u1ea3ng B\u00ecnh",
        slug: "quang-binh",
      }),
      Object.freeze<IProvince>({
        code: "VN-25",
        name: "Qu\u1ea3ng Tr\u1ecb",
        slug: "quang-tri",
      }),
      Object.freeze<IProvince>({
        code: "VN-26",
        name: "Th\u1eeba Thi\u00ean-Hu\u1ebf",
        slug: "thua-thien-hue",
      }),
      Object.freeze<IProvince>({
        code: "VN-27",
        name: "Qu\u1ea3ng Nam",
        slug: "quang-nam",
      }),
      Object.freeze<IProvince>({
        code: "VN-28",
        name: "Kon Tum",
        slug: "kon-tum",
      }),
      Object.freeze<IProvince>({
        code: "VN-29",
        name: "Qu\u1ea3ng Ng\u00e3i",
        slug: "quang-ngai",
      }),
      Object.freeze<IProvince>({
        code: "VN-30",
        name: "Gia Lai",
        slug: "gia-lai",
      }),
      Object.freeze<IProvince>({
        code: "VN-31",
        name: "B\u00ecnh \u0110\u1ecbnh",
        slug: "binh-inh",
      }),
      Object.freeze<IProvince>({
        code: "VN-32",
        name: "Ph\u00fa Y\u00ean",
        slug: "phu-yen",
      }),
      Object.freeze<IProvince>({
        code: "VN-33",
        name: "\u0110\u1eafk L\u1eafk",
        slug: "ak-lak",
      }),
      Object.freeze<IProvince>({
        code: "VN-34",
        name: "Kh\u00e1nh H\u00f2a",
        slug: "khanh-hoa",
      }),
      Object.freeze<IProvince>({
        code: "VN-35",
        name: "L\u00e2m \u00d0\u1ed3ng",
        slug: "lam-ong",
      }),
      Object.freeze<IProvince>({
        code: "VN-36",
        name: "Ninh Thu\u1eadn",
        slug: "ninh-thuan",
      }),
      Object.freeze<IProvince>({
        code: "VN-37",
        name: "T\u00e2y Ninh",
        slug: "tay-ninh",
      }),
      Object.freeze<IProvince>({
        code: "VN-39",
        name: "\u00d0\u1ed3ng Nai",
        slug: "ong-nai",
      }),
      Object.freeze<IProvince>({
        code: "VN-40",
        name: "B\u00ecnh Thu\u1eadn",
        slug: "binh-thuan",
      }),
      Object.freeze<IProvince>({
        code: "VN-41",
        name: "Long An",
        slug: "long-an",
      }),
      Object.freeze<IProvince>({
        code: "VN-43",
        name: "B\u00e0 R\u1ecba - V\u0169ng T\u00e0u",
        slug: "ba-ria-vung-tau",
      }),
      Object.freeze<IProvince>({
        code: "VN-44",
        name: "An Giang",
        slug: "an-giang",
      }),
      Object.freeze<IProvince>({
        code: "VN-45",
        name: "\u00d0\u1ed3ng Th\u00e1p",
        slug: "ong-thap",
      }),
      Object.freeze<IProvince>({
        code: "VN-46",
        name: "Ti\u1ec1n Giang",
        slug: "tien-giang",
      }),
      Object.freeze<IProvince>({
        code: "VN-47",
        name: "Ki\u1ebfn Giang",
        slug: "kien-giang",
      }),
      Object.freeze<IProvince>({
        code: "VN-49",
        name: "V\u0129nh Long",
        slug: "vinh-long",
      }),
      Object.freeze<IProvince>({
        code: "VN-50",
        name: "B\u1ebfn Tre",
        slug: "ben-tre",
      }),
      Object.freeze<IProvince>({
        code: "VN-51",
        name: "Tr\u00e0 Vinh",
        slug: "tra-vinh",
      }),
      Object.freeze<IProvince>({
        code: "VN-52",
        name: "S\u00f3c Tr\u0103ng",
        slug: "soc-trang",
      }),
      Object.freeze<IProvince>({
        code: "VN-53",
        name: "B\u1eafc K\u1ea1n",
        slug: "bac-kan",
      }),
      Object.freeze<IProvince>({
        code: "VN-54",
        name: "B\u1eafc Giang",
        slug: "bac-giang",
      }),
      Object.freeze<IProvince>({
        code: "VN-55",
        name: "B\u1ea1c Li\u00eau",
        slug: "bac-lieu",
      }),
      Object.freeze<IProvince>({
        code: "VN-56",
        name: "B\u1eafc Ninh",
        slug: "bac-ninh",
      }),
      Object.freeze<IProvince>({
        code: "VN-57",
        name: "B\u00ecnh D\u01b0\u01a1ng",
        slug: "binh-duong",
      }),
      Object.freeze<IProvince>({
        code: "VN-58",
        name: "B\u00ecnh Ph\u01b0\u1edbc",
        slug: "binh-phuoc",
      }),
      Object.freeze<IProvince>({
        code: "VN-59",
        name: "C\u00e0 Mau",
        slug: "ca-mau",
      }),
      Object.freeze<IProvince>({
        code: "VN-61",
        name: "H\u1ea3i D\u01b0\u01a1ng",
        slug: "hai-duong",
      }),
      Object.freeze<IProvince>({
        code: "VN-63",
        name: "H\u00e0 Nam",
        slug: "ha-nam",
      }),
      Object.freeze<IProvince>({
        code: "VN-66",
        name: "H\u01b0ng Y\u00ean",
        slug: "hung-yen",
      }),
      Object.freeze<IProvince>({
        code: "VN-67",
        name: "Nam \u00d0\u1ecbnh",
        slug: "nam-inh",
      }),
      Object.freeze<IProvince>({
        code: "VN-68",
        name: "Ph\u00fa Th\u1ecd",
        slug: "phu-tho",
      }),
      Object.freeze<IProvince>({
        code: "VN-69",
        name: "Th\u00e1i Nguy\u00ean",
        slug: "thai-nguyen",
      }),
      Object.freeze<IProvince>({
        code: "VN-70",
        name: "V\u0129nh Ph\u00fac",
        slug: "vinh-phuc",
      }),
      Object.freeze<IProvince>({
        code: "VN-71",
        name: "\u0110i\u1ec7n Bi\u00ean",
        slug: "ien-bien",
      }),
      Object.freeze<IProvince>({
        code: "VN-72",
        name: "\u0110\u1eafk N\u00f4ng",
        slug: "ak-nong",
      }),
      Object.freeze<IProvince>({
        code: "VN-73",
        name: "H\u1eadu Giang",
        slug: "hau-giang",
      }),
      Object.freeze<IProvince>({
        code: "VN-CT",
        name: "Can Tho",
        slug: "can-tho",
      }),
      Object.freeze<IProvince>({
        code: "VN-DN",
        name: "Da Nang",
        slug: "da-nang",
      }),
      Object.freeze<IProvince>({
        code: "VN-HN",
        name: "Ha Noi",
        slug: "ha-noi",
      }),
      Object.freeze<IProvince>({
        code: "VN-HP",
        name: "Hai Phong",
        slug: "hai-phong",
      }),
      Object.freeze<IProvince>({
        code: "VN-SG",
        name: "Ho Chi Minh",
        slug: "ho-chi-minh",
      }),
    ],
  }),
  VG: Object.freeze<ICountry>({
    code: "VG",
    currency: CURRENCIES.GBP,
    name: "Virgin Islands (British)",
    nameWithArticle: "Virgin Islands (British)",
    provinces: [],
  }),
  VI: Object.freeze<ICountry>({
    code: "VI",
    currency: CURRENCIES.USD,
    name: "Virgin Islands (U.S)",
    nameWithArticle: "Virgin Islands (U.S)",
    provinces: [],
  }),
  WF: Object.freeze<ICountry>({
    code: "WF",
    currency: CURRENCIES.XPF,
    name: "Wallis and Futuna",
    nameWithArticle: "Wallis and Futuna",
    provinces: [],
  }),
  EH: Object.freeze<ICountry>({
    code: "EH",
    currency: CURRENCIES.MAD,
    name: "Western Sahara",
    nameWithArticle: "Western Sahara",
    provinces: [],
  }),
  YE: Object.freeze<ICountry>({
    code: "YE",
    currency: CURRENCIES.YER,
    name: "Yemen",
    nameWithArticle: "Yemen",
    provinces: [
      Object.freeze<IProvince>({
        code: "YE-AB",
        name: "Aby\u0101n",
        slug: "abyan",
      }),
      Object.freeze<IProvince>({
        code: "YE-AD",
        name: "'Adan",
        slug: "adan",
      }),
      Object.freeze<IProvince>({
        code: "YE-AM",
        name: "'Amr\u0101n",
        slug: "amran",
      }),
      Object.freeze<IProvince>({
        code: "YE-BA",
        name: "Al Bay\u1e11\u0101'",
        slug: "al-bayda",
      }),
      Object.freeze<IProvince>({
        code: "YE-DA",
        name: "A\u1e11 \u1e10\u0101li'",
        slug: "ad-dali",
      }),
      Object.freeze<IProvince>({
        code: "YE-DH",
        name: "Dham\u0101r",
        slug: "dhamar",
      }),
      Object.freeze<IProvince>({
        code: "YE-HD",
        name: "\u1e28a\u1e11ramawt",
        slug: "hadramawt",
      }),
      Object.freeze<IProvince>({
        code: "YE-HJ",
        name: "\u1e28ajjah",
        slug: "hajjah",
      }),
      Object.freeze<IProvince>({
        code: "YE-HU",
        name: "Al \u1e28udaydah",
        slug: "al-hudaydah",
      }),
      Object.freeze<IProvince>({
        code: "YE-IB",
        name: "Ibb",
        slug: "ibb",
      }),
      Object.freeze<IProvince>({
        code: "YE-JA",
        name: "Al Jawf",
        slug: "al-jawf",
      }),
      Object.freeze<IProvince>({
        code: "YE-LA",
        name: "La\u1e29ij",
        slug: "lahij",
      }),
      Object.freeze<IProvince>({
        code: "YE-MA",
        name: "Ma'rib",
        slug: "marib",
      }),
      Object.freeze<IProvince>({
        code: "YE-MR",
        name: "Al Mahrah",
        slug: "al-mahrah",
      }),
      Object.freeze<IProvince>({
        code: "YE-MW",
        name: "Al Ma\u1e29w\u012bt",
        slug: "al-mahwit",
      }),
      Object.freeze<IProvince>({
        code: "YE-RA",
        name: "Raymah",
        slug: "raymah",
      }),
      Object.freeze<IProvince>({
        code: "YE-SA",
        name: "Am\u0101nat al \u2018\u0100\u015fimah",
        slug: "amanat-al-asimah",
      }),
      Object.freeze<IProvince>({
        code: "YE-SD",
        name: "\u015e\u0101\u02bbdah",
        slug: "sadah",
      }),
      Object.freeze<IProvince>({
        code: "YE-SH",
        name: "Shabwah",
        slug: "shabwah",
      }),
      Object.freeze<IProvince>({
        code: "YE-SN",
        name: "\u015ean\u02bb\u0101'",
        slug: "sana",
      }),
      Object.freeze<IProvince>({
        code: "YE-TA",
        name: "T\u0101\u02bbizz",
        slug: "taizz",
      }),
    ],
  }),
  ZM: Object.freeze<ICountry>({
    code: "ZM",
    currency: CURRENCIES.MWK,
    name: "Zambia",
    nameWithArticle: "Zambia",
    provinces: [
      Object.freeze<IProvince>({
        code: "ZM-01",
        name: "Western",
        slug: "western",
      }),
      Object.freeze<IProvince>({
        code: "ZM-02",
        name: "Central",
        slug: "central",
      }),
      Object.freeze<IProvince>({
        code: "ZM-03",
        name: "Eastern",
        slug: "eastern",
      }),
      Object.freeze<IProvince>({
        code: "ZM-04",
        name: "Luapula",
        slug: "luapula",
      }),
      Object.freeze<IProvince>({
        code: "ZM-05",
        name: "Northern",
        slug: "northern",
      }),
      Object.freeze<IProvince>({
        code: "ZM-06",
        name: "North-Western",
        slug: "north-western",
      }),
      Object.freeze<IProvince>({
        code: "ZM-07",
        name: "Southern",
        slug: "southern",
      }),
      Object.freeze<IProvince>({
        code: "ZM-08",
        name: "Copperbelt",
        slug: "copperbelt",
      }),
      Object.freeze<IProvince>({
        code: "ZM-09",
        name: "Lusaka",
        slug: "lusaka",
      }),
      Object.freeze<IProvince>({
        code: "ZM-10",
        name: "Muchinga",
        slug: "muchinga",
      }),
    ],
  }),
  ZW: Object.freeze<ICountry>({
    code: "ZW",
    currency: CURRENCIES.ZWD,
    name: "Zimbabwe",
    nameWithArticle: "Zimbabwe",
    provinces: [
      Object.freeze<IProvince>({
        code: "ZW-BU",
        name: "Bulawayo",
        slug: "bulawayo",
      }),
      Object.freeze<IProvince>({
        code: "ZW-HA",
        name: "Harare",
        slug: "harare",
      }),
      Object.freeze<IProvince>({
        code: "ZW-MA",
        name: "Manicaland",
        slug: "manicaland",
      }),
      Object.freeze<IProvince>({
        code: "ZW-MC",
        name: "Mashonaland Central",
        slug: "mashonaland-central",
      }),
      Object.freeze<IProvince>({
        code: "ZW-ME",
        name: "Mashonaland East",
        slug: "mashonaland-east",
      }),
      Object.freeze<IProvince>({
        code: "ZW-MI",
        name: "Midlands",
        slug: "midlands",
      }),
      Object.freeze<IProvince>({
        code: "ZW-MN",
        name: "Matabeleland North",
        slug: "matabeleland-north",
      }),
      Object.freeze<IProvince>({
        code: "ZW-MS",
        name: "Matabeleland South",
        slug: "matabeleland-south",
      }),
      Object.freeze<IProvince>({
        code: "ZW-MV",
        name: "Masvingo",
        slug: "masvingo",
      }),
      Object.freeze<IProvince>({
        code: "ZW-MW",
        name: "Mashonaland West",
        slug: "mashonaland-west",
      }),
    ],
  }),
});

const provincesBySlug: {
  [countryCode: string]: { [provinceSlug: string]: IProvince };
} = {};
for (const [countryKey, countryData] of Object.entries(COUNTRIES)) {
  const provinces: { [provinceSlug: string]: IProvince } = {};
  for (const province of countryData.provinces || []) {
    provinces[province.slug] = province;
  }

  provincesBySlug[countryKey] = provinces;
}

const provincesByCode: { [provinceCode: string]: IProvince } = {};
for (const countryData of Object.values(COUNTRIES)) {
  for (const province of countryData.provinces || []) {
    provincesByCode[province.code] = province;
  }
}

export const PROVINCE_SLUGS_BY_COUNTRY_CODE = Object.freeze(provincesBySlug);
export const PROVINCES_BY_CODES = Object.freeze(provincesByCode);
