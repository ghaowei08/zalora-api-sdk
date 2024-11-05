require("dotenv").config();
const { writeFileSync, readFileSync } = require("fs");
const { ZaloraInstance } = require("../npm/dist");
const axios = require("axios");

const clientId = process.env.clientId;
const clientSecret = process.env.clientSecret;
const accessToken = process.env.accessToken;

const zalora = new ZaloraInstance({ clientId, clientSecret, accessToken });

// getAccessToken();
// getCategories();
// getCategoryMapping();
// getCategoryMostUsed();
// getSettings();
// getBrands();
// getAttributes();
// getAttibuteSets();
// getAttibuteSetAttributes();
// getProducts();
// getProductSets();
getProductSetProducts();

async function getAccessToken() {
  const res = await zalora.auth.getAccessToken();

  console.log("Token", res);
}

async function getCategories() {
  let categories = [];
  let limit = 100;
  let offset = 0;
  let res = await zalora.category.getCategories({ limit, offset });
  categories = categories.concat(res.items);
  while (res.pagination.totalCount > limit + offset) {
    offset += limit;
    console.log(res.pagination.totalCount, offset);
    res = await zalora.category.getCategories({
      limit,
      offset,
    });
    categories = categories.concat(res.items);
  }
  writeFileSync("categories.json", JSON.stringify(categories));
}

async function getCategoryMapping() {
  let res = await zalora.category.getCategoryMapping();
  writeFileSync("categoryMapping.json", JSON.stringify(res));
}

async function getCategoryMostUsed() {
  let res = await zalora.category.getCategoryMostUsed();
  writeFileSync("categoryMostUsed.json", JSON.stringify(res));
}

async function getSettings() {
  let res = await zalora.setting.getSettings();
  writeFileSync("settings.json", JSON.stringify(res));
}

async function getBrands() {
  let brands = [];
  let limit = 100;
  let offset = 0;
  let res = await zalora.brand.getBrands({ limit, offset });
  brands = brands.concat(res.items);
  while (res.pagination.totalCount > limit + offset) {
    offset += limit;
    console.log(res.pagination.totalCount, offset);
    res = await zalora.brand.getBrands({
      limit,
      offset,
    });
    brands = brands.concat(res.items);
  }
  writeFileSync("brands.json", JSON.stringify(brands));
}

async function getAttibuteSets() {
  let res = await zalora.attribute.getAttributeSets();
  writeFileSync("attributeSets.json", JSON.stringify(res));
}

async function getAttibuteSetAttributes() {
  const attributeSetsRaw = readFileSync("./attributeSets.json").toString();
  const attributeSets = JSON.parse(attributeSetsRaw);
  const result = await Promise.all(
    attributeSets.map(async (e) => {
      return {
        ...e,
        attributes: await zalora.attribute.getAttributeSetAttributes({
          attributeSetId: e.id,
        }),
      };
    })
  );
  writeFileSync("attributeSetAttributes.json", JSON.stringify(result));
}

async function getAttributes() {
  let attributes = [];
  let limit = 100;
  let offset = 0;
  let res = await zalora.attribute.getAttributes({ limit, offset });
  attributes = attributes.concat(res.items);
  while (res.pagination.totalCount > limit + offset) {
    offset += limit;
    console.log(res.pagination.totalCount, offset);
    res = await zalora.brand.getAttributes({
      limit,
      offset,
    });
    attributes = attributes.concat(res.items);
  }
  writeFileSync("attributes.json", JSON.stringify(attributes));
}

async function getProductSets() {
  let attributes = [];
  let limit = 100;
  let offset = 0;
  let res = await zalora.productSet.getProductSets({ limit, offset });
  attributes = attributes.concat(res.items);
  while (res.pagination.totalCount > limit + offset) {
    offset += limit;
    console.log(res.pagination.totalCount, offset);
    res = await zalora.productSet.getProductSets({
      limit,
      offset,
    });
    attributes = attributes.concat(res.items);
  }
  writeFileSync("productSets.json", JSON.stringify(attributes));
}

async function getProductSetProducts() {
  const productSetsRaw = readFileSync("./productSets.json").toString();
  const productSets = JSON.parse(productSetsRaw);
  const products = [];
  for (let i = 0; i < productSets.length; i++) {
    console.log(`Product: ${i} / ${productSets.length}`);
    const productSetProducts = await zalora.product.getProductSetProducts({
      productSetId: productSets[i].id,
    });
    products.push({
      ...productSets[i],
      products: productSetProducts,
    });
  }
  writeFileSync("productSetProducts.json", JSON.stringify(products));
}

async function getProducts() {
  let res = await zalora.product.getProducts();
  writeFileSync("products.json", JSON.stringify(res));
}
