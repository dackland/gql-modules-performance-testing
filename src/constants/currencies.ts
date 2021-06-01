export interface ICurrency {
  readonly code: string;
  readonly symbol: string;
  readonly name: string;
  readonly plural: string;
  readonly exponent: number;
}

export const CURRENCIES = Object.freeze({
  AED: Object.freeze<ICurrency>({
    code: "AED",
    symbol: "AED",
    name: "UAE dirham",
    plural: "UAE dirhams",
    exponent: 2,
  }),

  AFN: Object.freeze<ICurrency>({
    code: "AFN",
    symbol: "\u060b",
    name: "Afghani",
    plural: "Afganis",
    exponent: 2,
  }),

  ALL: Object.freeze<ICurrency>({
    code: "ALL",
    symbol: "Lek",
    name: "Lek",
    plural: "Lekë",
    exponent: 2,
  }),

  AMD: Object.freeze<ICurrency>({
    code: "AMD",
    symbol: "\u058f",
    name: "Armenian dram",
    plural: "Armenian drams",
    exponent: 2,
  }),

  ANG: Object.freeze<ICurrency>({
    code: "ANG",
    symbol: "\u0192",
    name: "Netherlands Antillean Guilder",
    plural: "Netherlands Antillean Guilders",
    exponent: 2,
  }),

  AOA: Object.freeze<ICurrency>({
    code: "AOA",
    symbol: "Kz",
    name: "Kwanza",
    plural: "Kwanzas",
    exponent: 2,
  }),

  ARS: Object.freeze<ICurrency>({
    code: "ARS",
    symbol: "$",
    name: "Argentinian peso",
    plural: "Argentinian pesos",
    exponent: 2,
  }),

  AUD: Object.freeze<ICurrency>({
    code: "AUD",
    symbol: "$",
    name: "Australian dollar",
    plural: "Australian dollars",
    exponent: 2,
  }),

  AWG: Object.freeze<ICurrency>({
    code: "AWG",
    symbol: "\u0192",
    name: "Aruban Guilder",
    plural: "Aruban Guilders",
    exponent: 2,
  }),

  AZN: Object.freeze<ICurrency>({
    code: "AZN",
    symbol: "\u043c\u0430\u043d",
    name: "New Manat",
    plural: "New Manat",
    exponent: 2,
  }),

  BAM: Object.freeze<ICurrency>({
    code: "BAM",
    symbol: "KM",
    name: "Convertible Marks",
    plural: "Convertible Marks",
    exponent: 2,
  }),

  BBD: Object.freeze<ICurrency>({
    code: "BBD",
    symbol: "$",
    name: "Barbados dollar",
    plural: "Barbados dollars",
    exponent: 2,
  }),

  BDT: Object.freeze<ICurrency>({
    code: "BDT",
    symbol: "\u09f3",
    name: "Taka",
    plural: "Takas",
    exponent: 2,
  }),

  BGN: Object.freeze<ICurrency>({
    code: "BGN",
    symbol: "\u043b\u0432",
    name: "Lev",
    plural: "Leva",
    exponent: 2,
  }),

  BHD: Object.freeze<ICurrency>({
    code: "BHD",
    symbol: "BD",
    name: "Bahraini dinar",
    plural: "Bahraini dinars",
    exponent: 3,
  }),

  BIF: Object.freeze<ICurrency>({
    code: "BIF",
    symbol: "FBu",
    name: "Burundi franc",
    plural: "Burundi francs",
    exponent: 0,
  }),

  BMD: Object.freeze<ICurrency>({
    code: "BMD",
    symbol: "$",
    name: "Bermuda dollar",
    plural: "Bermuda dollars",
    exponent: 2,
  }),

  BND: Object.freeze<ICurrency>({
    code: "BND",
    symbol: "$",
    name: "Brunei dollar",
    plural: "Brunei dollars",
    exponent: 2,
  }),

  BOB: Object.freeze<ICurrency>({
    code: "BOB",
    symbol: "$b",
    name: "Boliviano",
    plural: "Bolivianos",
    exponent: 2,
  }),

  BRL: Object.freeze<ICurrency>({
    code: "BRL",
    symbol: "R$",
    name: "Real",
    plural: "Reales",
    exponent: 2,
  }),

  BSD: Object.freeze<ICurrency>({
    code: "BSD",
    symbol: "$",
    name: "Bahamian dollar",
    plural: "Bahamian dollars",
    exponent: 2,
  }),

  BTN: Object.freeze<ICurrency>({
    code: "BTN",
    symbol: "Nu.",
    name: "Ngultrum",
    plural: "Ngultrums",
    exponent: 2,
  }),

  BWP: Object.freeze<ICurrency>({
    code: "BWP",
    symbol: "P",
    name: "Pula",
    plural: "Pula",
    exponent: 2,
  }),

  BYR: Object.freeze<ICurrency>({
    code: "BYR",
    symbol: "p.",
    name: "Belarussian rouble",
    plural: "Belarussian roubles",
    exponent: 0,
  }),

  BZD: Object.freeze<ICurrency>({
    code: "BZD",
    symbol: "BZ$",
    name: "Belize dollar",
    plural: "Belize dollars",
    exponent: 2,
  }),

  CAD: Object.freeze<ICurrency>({
    code: "CAD",
    symbol: "$",
    name: "Canadian dollar",
    plural: "Canadian dollars",
    exponent: 2,
  }),

  CDF: Object.freeze<ICurrency>({
    code: "CDF",
    symbol: "\u20a3",
    name: "Franc congolais",
    plural: "Francs congolais",
    exponent: 2,
  }),

  CHF: Object.freeze<ICurrency>({
    code: "CHF",
    symbol: "CHF",
    name: "Swiss franc",
    plural: "Swiss francs",
    exponent: 2,
  }),

  CLP: Object.freeze<ICurrency>({
    code: "CLP",
    symbol: "$",
    name: "Chilean peso",
    plural: "Chilean pesos",
    exponent: 0,
  }),

  CNY: Object.freeze<ICurrency>({
    code: "CNY",
    symbol: "\u00a5",
    name: "Ren-Min-Bi yuan",
    plural: "Ren-Min-Bi yuan",
    exponent: 2,
  }),

  COP: Object.freeze<ICurrency>({
    code: "COP",
    symbol: "$",
    name: "Colombian peso",
    plural: "Colombian pesos",
    exponent: 2,
  }),

  CRC: Object.freeze<ICurrency>({
    code: "CRC",
    symbol: "\u20a1",
    name: "Costa Rican colon",
    plural: "Costa Rican colones",
    exponent: 2,
  }),

  CUP: Object.freeze<ICurrency>({
    code: "CUP",
    symbol: "\u20b1",
    name: "Cuban peso",
    plural: "Cuban pesos",
    exponent: 2,
  }),

  CVE: Object.freeze<ICurrency>({
    code: "CVE",
    symbol: "Esc",
    name: "Cape Verde escudo",
    plural: "Cape Verde escudos",
    exponent: 0,
  }),

  CZK: Object.freeze<ICurrency>({
    code: "CZK",
    symbol: "K\u010d",
    name: "Czech koruna",
    plural: "Czech korun",
    exponent: 2,
  }),

  DJF: Object.freeze<ICurrency>({
    code: "DJF",
    symbol: "\u20a3",
    name: "Djibouti franc",
    plural: "Djibouti francs",
    exponent: 0,
  }),

  DKK: Object.freeze<ICurrency>({
    code: "DKK",
    symbol: "kr",
    name: "Danish krone",
    plural: "Danish kroner",
    exponent: 2,
  }),

  DOP: Object.freeze<ICurrency>({
    code: "DOP",
    symbol: "RD$",
    name: "Dominican peso",
    plural: "Dominican pesos",
    exponent: 2,
  }),

  DZD: Object.freeze<ICurrency>({
    code: "DZD",
    symbol: "\u062f\u002e\u062c",
    name: "Algerian dinar",
    plural: "Algerian dinars",
    exponent: 2,
  }),

  EEK: Object.freeze<ICurrency>({
    code: "EEK",
    symbol: "kr",
    name: "Estonian kroon",
    plural: "Estonian krooni",
    exponent: 2,
  }),

  EGP: Object.freeze<ICurrency>({
    code: "EGP",
    symbol: "E \u00a3",
    name: "Egyptian pound",
    plural: "Egyptian pounds",
    exponent: 2,
  }),

  ERN: Object.freeze<ICurrency>({
    code: "ERN",
    symbol: "Nfk",
    name: "Nakfa",
    plural: "Nakfas",
    exponent: 2,
  }),

  ETB: Object.freeze<ICurrency>({
    code: "ETB",
    symbol: "Br",
    name: "Ethiopian birr",
    plural: "Ethiopian birrs",
    exponent: 2,
  }),

  EUR: Object.freeze<ICurrency>({
    code: "EUR",
    symbol: "\u20ac",
    name: "Euro",
    plural: "Euros",
    exponent: 2,
  }),

  FJD: Object.freeze<ICurrency>({
    code: "FJD",
    symbol: "$",
    name: "Fiji dollar",
    plural: "Fiji dollars",
    exponent: 2,
  }),

  FKP: Object.freeze<ICurrency>({
    code: "FKP",
    symbol: "\u00a3",
    name: "Falkland Islands (Malvinas) Pound",
    plural: "Falkland Islands (Malvinas) Pounds",
    exponent: 2,
  }),

  GBP: Object.freeze<ICurrency>({
    code: "GBP",
    symbol: "\u00a3",
    name: "Pound sterling",
    plural: "Pounds sterling",
    exponent: 2,
  }),

  GEL: Object.freeze<ICurrency>({
    code: "GEL",
    symbol: "\u10da",
    name: "Lari",
    plural: "Lari",
    exponent: 2,
  }),

  GHS: Object.freeze<ICurrency>({
    code: "GHS",
    symbol: "GH\u00a2",
    name: "Ghana Cedi",
    plural: "Ghana Cedis",
    exponent: 2,
  }),

  GIP: Object.freeze<ICurrency>({
    code: "GIP",
    symbol: "\u00a3",
    name: "Gibraltar pound",
    plural: "Gibraltar pounds",
    exponent: 2,
  }),

  GMD: Object.freeze<ICurrency>({
    code: "GMD",
    symbol: "D",
    name: "Dalasi",
    plural: "Dalasi",
    exponent: 2,
  }),

  GNF: Object.freeze<ICurrency>({
    code: "GNF",
    symbol: "\u20a3",
    name: "Guinean franc",
    plural: "Guinean francs",
    exponent: 0,
  }),

  GTQ: Object.freeze<ICurrency>({
    code: "GTQ",
    symbol: "Q",
    name: "Quetzal",
    plural: "Quetzales",
    exponent: 2,
  }),

  GWP: Object.freeze<ICurrency>({
    code: "GWP",
    symbol: "$",
    name: "Guinean bissau Peso",
    plural: "Guinean bissau Pesos",
    exponent: 2,
  }),

  GYD: Object.freeze<ICurrency>({
    code: "GYD",
    symbol: "$",
    name: "Guyana dollar",
    plural: "Guyana dollars",
    exponent: 2,
  }),

  HKD: Object.freeze<ICurrency>({
    code: "HKD",
    symbol: "$",
    name: "Hong Kong dollar",
    plural: "Hong Kong dollars",
    exponent: 2,
  }),

  HNL: Object.freeze<ICurrency>({
    code: "HNL",
    symbol: "L",
    name: "Lempira",
    plural: "Lempiras",
    exponent: 2,
  }),

  HRK: Object.freeze<ICurrency>({
    code: "HRK",
    symbol: "kn",
    name: "Kuna",
    plural: "Kunas",
    exponent: 2,
  }),

  HTG: Object.freeze<ICurrency>({
    code: "HTG",
    symbol: "G",
    name: "Haitian gourde",
    plural: "Haitian gourdes",
    exponent: 2,
  }),

  HUF: Object.freeze<ICurrency>({
    code: "HUF",
    symbol: "Ft",
    name: "Forint",
    plural: "Forints",
    exponent: 2,
  }),

  IDR: Object.freeze<ICurrency>({
    code: "IDR",
    symbol: "Rp",
    name: "Rupiah",
    plural: "Rupiahs",
    exponent: 2,
  }),

  ILS: Object.freeze<ICurrency>({
    code: "ILS",
    symbol: "\u20aa",
    name: "New Israeli sheqel",
    plural: "New Israeli sheqels",
    exponent: 2,
  }),

  INR: Object.freeze<ICurrency>({
    code: "INR",
    symbol: "\u20b9",
    name: "Indian rupee",
    plural: "Indian rupees",
    exponent: 2,
  }),

  IQD: Object.freeze<ICurrency>({
    code: "IQD",
    symbol: "\u062f\u002e\u0639",
    name: "Iraqi dinar",
    plural: "Iraqi dinars",
    exponent: 3,
  }),

  IRR: Object.freeze<ICurrency>({
    code: "IRR",
    symbol: "\ufdfc",
    name: "Iranian rial",
    plural: "Iranian rials",
    exponent: 2,
  }),

  ISK: Object.freeze<ICurrency>({
    code: "ISK",
    symbol: "kr",
    name: "Icelandic Krona",
    plural: "Icelandic Kronur",
    exponent: 0,
  }),

  JMD: Object.freeze<ICurrency>({
    code: "JMD",
    symbol: "J$",
    name: "Jamaican dollar",
    plural: "Jamaican dollars",
    exponent: 2,
  }),

  JOD: Object.freeze<ICurrency>({
    code: "JOD",
    symbol: "\u062f\u002e\u0627",
    name: "Jordanian dinar",
    plural: "Jordanian dinars",
    exponent: 3,
  }),

  JPY: Object.freeze<ICurrency>({
    code: "JPY",
    symbol: "\u00a5",
    name: "Yen",
    plural: "Yen",
    exponent: 0,
  }),

  KES: Object.freeze<ICurrency>({
    code: "KES",
    symbol: "SH",
    name: "Kenyan shilling",
    plural: "Kenyan shillings",
    exponent: 2,
  }),

  KGS: Object.freeze<ICurrency>({
    code: "KGS",
    symbol: "\u043b\u0432",
    name: "Kyrgyz Som",
    plural: "Kyrgyz Soms",
    exponent: 2,
  }),

  KHR: Object.freeze<ICurrency>({
    code: "KHR",
    symbol: "\u17db",
    name: "Riel",
    plural: "Riels",
    exponent: 2,
  }),

  KMF: Object.freeze<ICurrency>({
    code: "KMF",
    symbol: "\u20a3",
    name: "Comoro franc",
    plural: "Comoro francs",
    exponent: 0,
  }),

  KRW: Object.freeze<ICurrency>({
    code: "KRW",
    symbol: "\u20a9",
    name: "Won",
    plural: "Won",
    exponent: 0,
  }),

  KWD: Object.freeze<ICurrency>({
    code: "KWD",
    symbol: "\u062f\u002e\u0643",
    name: "Kuwaiti dinar",
    plural: "Kuwaiti dinars",
    exponent: 3,
  }),

  KYD: Object.freeze<ICurrency>({
    code: "KYD",
    symbol: "$",
    name: "Cayman Islands dollar",
    plural: "Cayman Islands dollars",
    exponent: 2,
  }),

  KZT: Object.freeze<ICurrency>({
    code: "KZT",
    symbol: "\u043b\u0432",
    name: "Tenge",
    plural: "Tenge",
    exponent: 2,
  }),

  LAK: Object.freeze<ICurrency>({
    code: "LAK",
    symbol: "\u20ad",
    name: "Kip",
    plural: "Kips",
    exponent: 2,
  }),

  LBP: Object.freeze<ICurrency>({
    code: "LBP",
    symbol: "LBP",
    name: "Lebanese pound",
    plural: "Lebanese pounds",
    exponent: 2,
  }),

  LKR: Object.freeze<ICurrency>({
    code: "LKR",
    symbol: "\u20a8",
    name: "Sri Lankan rupee",
    plural: "Sri Lankan rupees",
    exponent: 2,
  }),

  LRD: Object.freeze<ICurrency>({
    code: "LRD",
    symbol: "$",
    name: "Liberian dollar",
    plural: "Liberian dollars",
    exponent: 2,
  }),

  LSL: Object.freeze<ICurrency>({
    code: "LSL",
    symbol: "M",
    name: "Loti",
    plural: "Maloti",
    exponent: 2,
  }),

  LTL: Object.freeze<ICurrency>({
    code: "LTL",
    symbol: "Lt",
    name: "Lithuanian litus",
    plural: "Lithuanian litai",
    exponent: 2,
  }),

  LVL: Object.freeze<ICurrency>({
    code: "LVL",
    symbol: "Ls",
    name: "Latvian lats",
    plural: "Latvian lats",
    exponent: 2,
  }),

  LYD: Object.freeze<ICurrency>({
    code: "LYD",
    symbol: "\u0644\u002e\u062f",
    name: "Libyan dinar",
    plural: "Libyan dinar",
    exponent: 3,
  }),

  MAD: Object.freeze<ICurrency>({
    code: "MAD",
    symbol: "\u062f\u002e\u0645",
    name: "Moroccan dirham",
    plural: "Moroccan dirhams",
    exponent: 2,
  }),

  MDL: Object.freeze<ICurrency>({
    code: "MDL",
    symbol: "L",
    name: "Moldovan leu",
    plural: "Moldovan lei",
    exponent: 2,
  }),

  MGA: Object.freeze<ICurrency>({
    code: "MGA",
    symbol: "Ar",
    name: "Malagasy Ariary",
    plural: "Malagasy Ariaries",
    exponent: 1,
  }),

  MKD: Object.freeze<ICurrency>({
    code: "MKD",
    symbol: "\u0434\u0435\u043d",
    name: "Denar",
    plural: "Denari",
    exponent: 2,
  }),

  MMK: Object.freeze<ICurrency>({
    code: "MMK",
    symbol: "K",
    name: "Kyat",
    plural: "Kyats",
    exponent: 2,
  }),

  MNT: Object.freeze<ICurrency>({
    code: "MNT",
    symbol: "\u20ae",
    name: "Tugrik",
    plural: "Tugriks",
    exponent: 2,
  }),

  MOP: Object.freeze<ICurrency>({
    code: "MOP",
    symbol: "P",
    name: "Pataca",
    plural: "Patacas",
    exponent: 2,
  }),

  MRO: Object.freeze<ICurrency>({
    code: "MRO",
    symbol: "UM",
    name: "Ouguiya",
    plural: "Ouguiyas",
    exponent: 1,
  }),

  MRU: Object.freeze<ICurrency>({
    code: "MRU",
    symbol: "UM",
    name: "Ouguiya",
    plural: "Ouguiyas",
    exponent: 1,
  }),

  MUR: Object.freeze<ICurrency>({
    code: "MUR",
    symbol: "\u20a8",
    name: "Mauritian rupee",
    plural: "Mauritian rupees",
    exponent: 2,
  }),

  MVR: Object.freeze<ICurrency>({
    code: "MVR",
    symbol: "Rf",
    name: "Rufiyaa",
    plural: "Rufiyaas",
    exponent: 2,
  }),

  MWK: Object.freeze<ICurrency>({
    code: "MWK",
    symbol: "MK",
    name: "Kwacha",
    plural: "Kwacha",
    exponent: 2,
  }),

  MXN: Object.freeze<ICurrency>({
    code: "MXN",
    symbol: "$",
    name: "Mexican peso",
    plural: "Mexican pesos",
    exponent: 2,
  }),

  MYR: Object.freeze<ICurrency>({
    code: "MYR",
    symbol: "RM",
    name: "Malaysian ringgit",
    plural: "Malaysian ringgit",
    exponent: 2,
  }),

  MZN: Object.freeze<ICurrency>({
    code: "MZN",
    symbol: "MT",
    name: "Metical",
    plural: "Meticais",
    exponent: 2,
  }),

  NAD: Object.freeze<ICurrency>({
    code: "NAD",
    symbol: "$",
    name: "Namibian dollar",
    plural: "Namibian dollar",
    exponent: 2,
  }),

  NGN: Object.freeze<ICurrency>({
    code: "NGN",
    symbol: "\u20a6",
    name: "Naira",
    plural: "Naira",
    exponent: 2,
  }),

  NIO: Object.freeze<ICurrency>({
    code: "NIO",
    symbol: "C$",
    name: "Cordoba Oro",
    plural: "Cordobas Oro",
    exponent: 2,
  }),

  NOK: Object.freeze<ICurrency>({
    code: "NOK",
    symbol: "kr",
    name: "Norwegian krone",
    plural: "Norwegian kroner",
    exponent: 2,
  }),

  NPR: Object.freeze<ICurrency>({
    code: "NPR",
    symbol: "\u20a8",
    name: "Nepalese rupee",
    plural: "Nepalese rupees",
    exponent: 2,
  }),

  NZD: Object.freeze<ICurrency>({
    code: "NZD",
    symbol: "$",
    name: "New Zealand dollar",
    plural: "New Zealand dollars",
    exponent: 2,
  }),

  OMR: Object.freeze<ICurrency>({
    code: "OMR",
    symbol: "\ufdfc",
    name: "Omani rial",
    plural: "Omani rials",
    exponent: 3,
  }),

  PAB: Object.freeze<ICurrency>({
    code: "PAB",
    symbol: "B/.",
    name: "Balboa",
    plural: "Balboas",
    exponent: 2,
  }),

  PEN: Object.freeze<ICurrency>({
    code: "PEN",
    symbol: "S/.",
    name: "Nuevo Sol",
    plural: "Nuevo Soles",
    exponent: 2,
  }),

  PGK: Object.freeze<ICurrency>({
    code: "PGK",
    symbol: "K",
    name: "Kina",
    plural: "Kinas",
    exponent: 2,
  }),

  PHP: Object.freeze<ICurrency>({
    code: "PHP",
    symbol: "Php",
    name: "Philippine peso",
    plural: "Philippine pesos",
    exponent: 2,
  }),

  PKR: Object.freeze<ICurrency>({
    code: "PKR",
    symbol: "\u20a8",
    name: "Pakistani rupee",
    plural: "Pakistani rupees",
    exponent: 2,
  }),

  PLN: Object.freeze<ICurrency>({
    code: "PLN",
    symbol: "z\u0142",
    name: "Zloty",
    plural: "Zloty",
    exponent: 2,
  }),

  PYG: Object.freeze<ICurrency>({
    code: "PYG",
    symbol: "Gs",
    name: "Guarani",
    plural: "Guaranis",
    exponent: 0,
  }),

  QAR: Object.freeze<ICurrency>({
    code: "QAR",
    symbol: "\ufdfc",
    name: "Qatari riyal",
    plural: "Qatari riyals",
    exponent: 2,
  }),

  RON: Object.freeze<ICurrency>({
    code: "RON",
    symbol: "lei",
    name: "New Leu",
    plural: "New Lei",
    exponent: 2,
  }),

  RSD: Object.freeze<ICurrency>({
    code: "RSD",
    symbol: "\u0414\u0438\u043d.",
    name: "Serbian Dinar",
    plural: "Serbian Dinars",
    exponent: 2,
  }),

  RUB: Object.freeze<ICurrency>({
    code: "RUB",
    symbol: "\u0440\u0443\u0431",
    name: "Russian rouble",
    plural: "Russian roubles",
    exponent: 2,
  }),

  RWF: Object.freeze<ICurrency>({
    code: "RWF",
    symbol: "R\u20a3",
    name: "Rwanda franc",
    plural: "Rwanda francs",
    exponent: 0,
  }),

  SAR: Object.freeze<ICurrency>({
    code: "SAR",
    symbol: "\ufdfc",
    name: "Saudi riyal",
    plural: "Saudi riyals",
    exponent: 2,
  }),

  SBD: Object.freeze<ICurrency>({
    code: "SBD",
    symbol: "$",
    name: "Solomon Islands Dollar",
    plural: "Solomon Islands Dollars",
    exponent: 2,
  }),

  SCR: Object.freeze<ICurrency>({
    code: "SCR",
    symbol: "\u20a8",
    name: "Seychelles rupee",
    plural: "Seychelles rupees",
    exponent: 2,
  }),

  SDG: Object.freeze<ICurrency>({
    code: "SDG",
    symbol: "\u00a3",
    name: "Sudanese Pound",
    plural: "Sudanese Pounds",
    exponent: 2,
  }),

  SEK: Object.freeze<ICurrency>({
    code: "SEK",
    symbol: "kr",
    name: "Swedish Krona",
    plural: "Swedish Kronur",
    exponent: 2,
  }),

  SGD: Object.freeze<ICurrency>({
    code: "SGD",
    symbol: "$",
    name: "Singapore dollar",
    plural: "Singapore dollars",
    exponent: 2,
  }),

  SHP: Object.freeze<ICurrency>({
    code: "SHP",
    symbol: "\u00a3",
    name: "Saint Helena Pound",
    plural: "Saint Helena Pounds",
    exponent: 2,
  }),

  SLL: Object.freeze<ICurrency>({
    code: "SLL",
    symbol: "Le",
    name: "Leone",
    plural: "Leones",
    exponent: 2,
  }),

  SOS: Object.freeze<ICurrency>({
    code: "SOS",
    symbol: "S",
    name: "Somali shilling",
    plural: "Somali shillings",
    exponent: 2,
  }),

  SRD: Object.freeze<ICurrency>({
    code: "SRD",
    symbol: "$",
    name: "Surinam dollar",
    plural: "Surinam dollars",
    exponent: 2,
  }),

  SSP: Object.freeze<ICurrency>({
    code: "SSP",
    symbol: "£",
    name: "South Sudanese pound",
    plural: "South Sudanese pounds",
    exponent: 2,
  }),

  STD: Object.freeze<ICurrency>({
    code: "STD",
    symbol: "Db",
    name: "Dobra",
    plural: "Dobras",
    exponent: 2,
  }),

  SVC: Object.freeze<ICurrency>({
    code: "SVC",
    symbol: "$",
    name: "El Salvador colon",
    plural: "El Salvador colones",
    exponent: 2,
  }),

  SYP: Object.freeze<ICurrency>({
    code: "SYP",
    symbol: "\u00a3",
    name: "Syrian pound",
    plural: "Syrian pounds",
    exponent: 2,
  }),

  SZL: Object.freeze<ICurrency>({
    code: "SZL",
    symbol: "E",
    name: "Lilangeni",
    plural: "Emalangeni",
    exponent: 2,
  }),

  THB: Object.freeze<ICurrency>({
    code: "THB",
    symbol: "\u0e3f",
    name: "Baht",
    plural: "Baht",
    exponent: 2,
  }),

  TJS: Object.freeze<ICurrency>({
    code: "TJS",
    symbol: "SM",
    name: "Somoni",
    plural: "Somonis",
    exponent: 2,
  }),

  TMM: Object.freeze<ICurrency>({
    code: "TMM",
    symbol: "m",
    name: "Manat",
    plural: "Manat",
    exponent: 0,
  }),

  TND: Object.freeze<ICurrency>({
    code: "TND",
    symbol: "TND",
    name: "Tunisian dinar",
    plural: "Tunisian dinars",
    exponent: 3,
  }),

  TOP: Object.freeze<ICurrency>({
    code: "TOP",
    symbol: "$",
    name: "Pa'anga",
    plural: "Pa'anga",
    exponent: 2,
  }),

  TRY: Object.freeze<ICurrency>({
    code: "TRY",
    symbol: "TL",
    name: "Turkish Lira",
    plural: "Turkish Liras",
    exponent: 2,
  }),

  TTD: Object.freeze<ICurrency>({
    code: "TTD",
    symbol: "TT$",
    name: "Trinidad and Tobago dollar",
    plural: "Trinidad and Tobago dollars",
    exponent: 2,
  }),

  TWD: Object.freeze<ICurrency>({
    code: "TWD",
    symbol: "NT$",
    name: "Taiwan New Dollar",
    plural: "Taiwan New Dollars",
    exponent: 2,
  }),

  TZS: Object.freeze<ICurrency>({
    code: "TZS",
    symbol: "Sh",
    name: "Tanzanian shilling",
    plural: "Tanzanian shillings",
    exponent: 2,
  }),

  UAH: Object.freeze<ICurrency>({
    code: "UAH",
    symbol: "\u20b4",
    name: "Hryvnia",
    plural: "Hryvni",
    exponent: 2,
  }),

  UGX: Object.freeze<ICurrency>({
    code: "UGX",
    symbol: "UGX",
    name: "Ugandan shilling",
    plural: "Ugandan shillings",
    exponent: 0,
  }),

  USD: Object.freeze<ICurrency>({
    code: "USD",
    symbol: "$",
    name: "United States dollar",
    plural: "United States dollars",
    exponent: 2,
  }),

  UYU: Object.freeze<ICurrency>({
    code: "UYU",
    symbol: "$U",
    name: "Uruguayo peso",
    plural: "Uruguayo pesos",
    exponent: 2,
  }),

  UZS: Object.freeze<ICurrency>({
    code: "UZS",
    symbol: "\u043b\u0432",
    name: "Uzbekistan sum",
    plural: "Uzbekistan sum",
    exponent: 2,
  }),

  VEF: Object.freeze<ICurrency>({
    code: "VEF",
    symbol: "Bs",
    name: "Bolivar Fuerte",
    plural: "Bolivares Fuerte",
    exponent: 2,
  }),

  VND: Object.freeze<ICurrency>({
    code: "VND",
    symbol: "\u20ab",
    name: "Dong",
    plural: "Dongs",
    exponent: 0,
  }),

  VUV: Object.freeze<ICurrency>({
    code: "VUV",
    symbol: "VT",
    name: "Vatu",
    plural: "Vatu",
    exponent: 0,
  }),

  WST: Object.freeze<ICurrency>({
    code: "WST",
    symbol: "$",
    name: "Samoan Tala",
    plural: "Samoan Talas",
    exponent: 2,
  }),

  XAF: Object.freeze<ICurrency>({
    code: "XAF",
    symbol: "Fr",
    name: "CFA Franc - BEAC",
    plural: "CFA Francs - BEAC",
    exponent: 0,
  }),

  XCD: Object.freeze<ICurrency>({
    code: "XCD",
    symbol: "$",
    name: "Eastern Caribbean dollar",
    plural: "Eastern Caribbean dollars",
    exponent: 2,
  }),

  XOF: Object.freeze<ICurrency>({
    code: "XOF",
    symbol: "CFA",
    name: "CFA franc - BCEAO",
    plural: "CFA francs - BCEAO",
    exponent: 0,
  }),

  XPF: Object.freeze<ICurrency>({
    code: "XPF",
    symbol: "\u20a3",
    name: "Comptoirs Francais du Pacifique Francs",
    plural: "Comptoirs Francais du Pacifique Francs",
    exponent: 0,
  }),

  YER: Object.freeze<ICurrency>({
    code: "YER",
    symbol: "\ufdfc",
    name: "Yemeni rial",
    plural: "Yemeni rials",
    exponent: 2,
  }),

  ZAR: Object.freeze<ICurrency>({
    code: "ZAR",
    symbol: "R",
    name: "Rand",
    plural: "Rand",
    exponent: 2,
  }),

  ZMK: Object.freeze<ICurrency>({
    code: "ZMK",
    symbol: "ZK",
    name: "Kwacha",
    plural: "Kwachas",
    exponent: 2,
  }),

  ZMW: Object.freeze<ICurrency>({
    code: "ZMW",
    symbol: "ZK",
    name: "Kwacha",
    plural: "Kwachas",
    exponent: 2,
  }),

  ZWD: Object.freeze<ICurrency>({
    code: "ZWD",
    symbol: "Z$",
    name: "Zimbabwean dollar",
    plural: "Zimbabwean dollars",
    exponent: 2,
  }),
});
