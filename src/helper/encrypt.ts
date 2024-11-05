import CryptoJS from "crypto-js";

export function generator(
  applicationSecret: string,
  httpMethod: "GET" | "POST",
  requestPath: string,
  requestBody?: string
): { sign: string; nonce: string; timestamp: number; bodyHash: string } {
  const timestamp = Math.floor(Date.now() / 1000);
  const nonce = getNonce();
  const bodyHash = requestBody ? getBodyHash(requestBody) : "";
  const sign = createSignature(
    httpMethod,
    requestPath,
    timestamp,
    nonce,
    bodyHash,
    applicationSecret
  );
  return {
    sign: sign,
    nonce: nonce,
    timestamp: timestamp,
    bodyHash: bodyHash,
  };
}

function createSignature(
  httpMethod: string,
  requestPath: string,
  timestamp: number,
  nonce: string,
  bodyHash: string,
  applicationSecret: string
): string {
  const content = `${httpMethod} ${requestPath}\ntimestamp=${timestamp}\nnonce=${nonce}\nbody_hash=${bodyHash}`;
  const hash = CryptoJS.HmacSHA256(content, applicationSecret);
  return CryptoJS.enc.Hex.stringify(hash);
}

function getNonce(): string {
  return CryptoJS.lib.WordArray.random(20).toString(CryptoJS.enc.Hex);
}

function getBodyHash(req: string): string {
  return CryptoJS.SHA256(req).toString(CryptoJS.enc.Hex);
}

function getHeader(
  accessToken: string,
  timestamp: string,
  nonce: string,
  signature: string
) {
  return {
    Authorization: `Bearer ${accessToken}`,
    "X-Timestamp": timestamp,
    "X-Nonce": nonce,
    "X-Signature-Algorithm": "HMAC-SHA256",
    "X-Signature": signature,
    "Content-Type": "application/json",
  };
}
