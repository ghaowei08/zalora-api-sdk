require("dotenv").config();
const { ZaloraInstance } = require("../npm/dist");
const axios = require("axios");

const clientId = process.env.clientId;
const clientSecret = process.env.clientSecret;
const accessToken = process.env.accessToken;

async function getAccessToken() {
  const zalora = new ZaloraInstance({ clientId, clientSecret });
  const token = await zalora.authGroup.getAccessToken();

  console.log("Token", token);
}

getAccessToken();
