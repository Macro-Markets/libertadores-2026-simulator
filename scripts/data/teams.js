import { getLang, t } from "../i18n/index.js";

export const TEAM_FLAG_CODES = {
  Flamengo: "br",
  Estudiantes: "ar",
  Cusco: "pe",
  "Independiente Medellin": "co",
  Nacional: "uy",
  Universitario: "pe",
  "Coquimbo Unido": "cl",
  "Deportes Tolima": "co",
  Fluminense: "br",
  Bolivar: "bo",
  "Deportivo La Guaira": "ve",
  "Independiente Rivadavia": "ar",
  "Boca Juniors": "ar",
  Cruzeiro: "br",
  "Universidad Catolica": "cl",
  "Barcelona SC": "ec",
  Penarol: "uy",
  Corinthians: "br",
  "Santa Fe": "co",
  Platense: "ar",
  Palmeiras: "br",
  "Cerro Porteno": "py",
  Junior: "co",
  "Sporting Cristal": "pe",
  "LDU Quito": "ec",
  Lanus: "ar",
  "Always Ready": "bo",
  Mirassol: "br",
  "Independiente del Valle": "ec",
  Libertad: "py",
  "Rosario Central": "ar",
  "Universidad Central": "ve"
};

export const TEAM_LOGO_URLS = {
  Flamengo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Clube_de_Regatas_do_Flamengo_logo.svg",
  Estudiantes: "https://commons.wikimedia.org/wiki/Special:FilePath/Estudiantes%20de%20la%20Plata%20crest%20%282025%29.svg",
  "Independiente Medellin": "https://commons.wikimedia.org/wiki/Special:FilePath/Escudo%20del%20Deportivo%20Independiente%20Medell%C3%ADn.svg",
  Nacional: "https://commons.wikimedia.org/wiki/Special:FilePath/Club%20Nacional%20de%20Football.png",
  Universitario: "https://commons.wikimedia.org/wiki/Special:FilePath/Logo%20oficial%20de%20Universitario.png",
  Fluminense: "https://upload.wikimedia.org/wikipedia/commons/1/12/Fluminense_Football_Club.svg",
  Bolivar: "https://commons.wikimedia.org/wiki/Special:FilePath/Emblem%20bolivar.png",
  "Independiente Rivadavia": "https://commons.wikimedia.org/wiki/Special:FilePath/Escudo%20del%20Club%20Independiente%20Rivadavia.svg",
  "Boca Juniors": "https://commons.wikimedia.org/wiki/Special:FilePath/Boca%20Juniors%20logo18.svg",
  Cruzeiro: "https://upload.wikimedia.org/wikipedia/commons/9/90/Cruzeiro_Esporte_Clube_%28logo%29.svg",
  "Universidad Catolica": "https://commons.wikimedia.org/wiki/Special:FilePath/Escudo-universidad-catolica-chile.png",
  Corinthians: "https://upload.wikimedia.org/wikipedia/commons/d/dd/Corinthians_Paulista_1914-16.png",
  "Santa Fe": "https://commons.wikimedia.org/wiki/Special:FilePath/Escudo%20de%20Independiente%20Santa%20Fe.svg",
  Palmeiras: "https://upload.wikimedia.org/wikipedia/commons/1/13/SE_Palmeiras.svg",
  "Cerro Porteno": "https://commons.wikimedia.org/wiki/Special:FilePath/Escudo%20del%20Club%20Cerro%20Porte%C3%B1o.svg",
  Junior: "https://commons.wikimedia.org/wiki/Special:FilePath/Junior%20Barranquilla%20logo.svg",
  Lanus: "https://commons.wikimedia.org/wiki/Special:FilePath/Escudo%20del%20Club%20Lan%C3%BAs.png",
  Mirassol: "https://upload.wikimedia.org/wikipedia/commons/2/2c/Mirassol_Futebol_Clube_logo.svg",
  "Independiente del Valle": "https://commons.wikimedia.org/wiki/Special:FilePath/Escudoindependientedelvalle2023.png",
  "Rosario Central": "https://commons.wikimedia.org/wiki/Special:FilePath/Escudo%20del%20Club%20Atl%C3%A9tico%20Rosario%20Central.svg",
  Libertad: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Libertad-logo.png"
};

export const TEAM_LABELS_BY_LANG = {
  pt: {
    Flamengo: "Flamengo",
    Estudiantes: "Estudiantes",
    Cusco: "Cusco",
    "Independiente Medellin": "Independiente Medellín",
    Nacional: "Nacional",
    Universitario: "Universitario",
    "Coquimbo Unido": "Coquimbo Unido",
    "Deportes Tolima": "Deportes Tolima",
    Fluminense: "Fluminense",
    Bolivar: "Bolívar",
    "Deportivo La Guaira": "Deportivo La Guaira",
    "Independiente Rivadavia": "Independiente Rivadavia",
    "Boca Juniors": "Boca Juniors",
    Cruzeiro: "Cruzeiro",
    "Universidad Catolica": "Universidad Católica",
    "Barcelona SC": "Barcelona",
    Penarol: "Peñarol",
    Corinthians: "Corinthians",
    "Santa Fe": "Santa Fe",
    Platense: "Platense",
    Palmeiras: "Palmeiras",
    "Cerro Porteno": "Cerro Porteño",
    Junior: "Junior",
    "Sporting Cristal": "Sporting Cristal",
    "LDU Quito": "LDU Quito",
    Lanus: "Lanús",
    "Always Ready": "Always Ready",
    Mirassol: "Mirassol",
    "Independiente del Valle": "Independiente del Valle",
    Libertad: "Libertad",
    "Rosario Central": "Rosario Central",
    "Universidad Central": "Universidad Central"
  },
  en: {
    Flamengo: "Flamengo",
    Estudiantes: "Estudiantes",
    Cusco: "Cusco",
    "Independiente Medellin": "Independiente Medellin",
    Nacional: "Nacional",
    Universitario: "Universitario",
    "Coquimbo Unido": "Coquimbo Unido",
    "Deportes Tolima": "Deportes Tolima",
    Fluminense: "Fluminense",
    Bolivar: "Bolivar",
    "Deportivo La Guaira": "Deportivo La Guaira",
    "Independiente Rivadavia": "Independiente Rivadavia",
    "Boca Juniors": "Boca Juniors",
    Cruzeiro: "Cruzeiro",
    "Universidad Catolica": "Universidad Catolica",
    "Barcelona SC": "Barcelona",
    Penarol: "Penarol",
    Corinthians: "Corinthians",
    "Santa Fe": "Santa Fe",
    Platense: "Platense",
    Palmeiras: "Palmeiras",
    "Cerro Porteno": "Cerro Porteno",
    Junior: "Junior",
    "Sporting Cristal": "Sporting Cristal",
    "LDU Quito": "LDU Quito",
    Lanus: "Lanus",
    "Always Ready": "Always Ready",
    Mirassol: "Mirassol",
    "Independiente del Valle": "Independiente del Valle",
    Libertad: "Libertad",
    "Rosario Central": "Rosario Central",
    "Universidad Central": "Universidad Central"
  },
  es: {
    Flamengo: "Flamengo",
    Estudiantes: "Estudiantes",
    Cusco: "Cusco",
    "Independiente Medellin": "Independiente Medellín",
    Nacional: "Nacional",
    Universitario: "Universitario",
    "Coquimbo Unido": "Coquimbo Unido",
    "Deportes Tolima": "Deportes Tolima",
    Fluminense: "Fluminense",
    Bolivar: "Bolívar",
    "Deportivo La Guaira": "Deportivo La Guaira",
    "Independiente Rivadavia": "Independiente Rivadavia",
    "Boca Juniors": "Boca Juniors",
    Cruzeiro: "Cruzeiro",
    "Universidad Catolica": "Universidad Católica",
    "Barcelona SC": "Barcelona",
    Penarol: "Peñarol",
    Corinthians: "Corinthians",
    "Santa Fe": "Santa Fe",
    Platense: "Platense",
    Palmeiras: "Palmeiras",
    "Cerro Porteno": "Cerro Porteño",
    Junior: "Junior",
    "Sporting Cristal": "Sporting Cristal",
    "LDU Quito": "LDU Quito",
    Lanus: "Lanús",
    "Always Ready": "Always Ready",
    Mirassol: "Mirassol",
    "Independiente del Valle": "Independiente del Valle",
    Libertad: "Libertad",
    "Rosario Central": "Rosario Central",
    "Universidad Central": "Universidad Central"
  }
};

export function teamLabel(key) {
  if (!key || key === "TBD") return t("bracket.tbd");
  const lang = getLang();
  const dict = TEAM_LABELS_BY_LANG[lang] || TEAM_LABELS_BY_LANG.pt;
  return dict[key] || TEAM_LABELS_BY_LANG.pt[key] || key;
}

export function teamFlagCode(key) {
  if (!key || key === "TBD") return null;
  return TEAM_FLAG_CODES[key] || null;
}

export function teamFlagUrl(key) {
  if (key && TEAM_LOGO_URLS[key]) return TEAM_LOGO_URLS[key];
  return teamCountryFlagUrl(key);
}

export function teamCountryFlagUrl(key) {
  const code = teamFlagCode(key);
  return code ? `https://flagcdn.com/${code}.svg` : "assets/flag-fallback.svg";
}

export function teamImageAttrs(key) {
  const fallback = teamCountryFlagUrl(key);
  return `src="${teamFlagUrl(key)}" onerror="this.onerror=null;this.src='${fallback}'"`;
}
