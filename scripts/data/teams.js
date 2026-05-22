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
  const code = teamFlagCode(key);
  return code ? `https://flagcdn.com/${code}.svg` : "assets/flag-fallback.svg";
}
