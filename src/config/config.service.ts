export enum Country {
  "GSC" = "GSC",
  "HK" = "HK",
  "ID" = "ID",
  "MY" = "MY",
  "PH" = "PH",
  "SG" = "SG",
  "TW" = "TW",
}

export enum Environment {
  "Production" = "Production",
  "Staging" = "Staging",
}

const environment: { [key in Environment]: string } = {
  Production: "sellercenter-api-staging",
  Staging: "sellercenter-api",
};

const server: { [key in Country]: string } = {
  // "Dafiti BR" = "https://{environment}.sellercenter.com.br",
  // "Dafiti CL" = "https://{environment}.dafiti.cl",
  // "Dafiti CO" = "https://{environment}.dafiti.com.co",
  // "Iconic AU" = "https://{environment}.theiconic.com.au",
  GSC: "https://{environment}.zalora.com",
  HK: "https://{environment}.zalora.com.hk",
  ID: "https://{environment}.zalora.co.id",
  MY: "https://{environment}.zalora.com.my",
  PH: "https://{environment}.zalora.com.ph",
  SG: "https://{environment}.zalora.sg",
  TW: "https://{environment}.zalora.com.tw",
};

export const GetBaseUrl = (country: Country, env: Environment) => {
  const s = server[country];
  const e = environment[env];
  return s.replace("{environment}", e);
};
