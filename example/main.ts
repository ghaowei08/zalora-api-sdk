main();

function main() {
  const settingsRaw = readFileSync("./settings.json").toString();
  const settings = JSON.parse(settingsRaw);
  const categoriesRaw = readFileSync("./categories.json").toString();
  const categories = JSON.parse(categoriesRaw);
  const categoryMappingRaw = readFileSync("./categoryMapping.json").toString();
  const categoryMapping = JSON.parse(categoryMappingRaw);
  const attributeSetsRaw = readFileSync("./attributeSets.json").toString();
  const attributeSets = JSON.parse(attributeSetsRaw);
  const attributeSetAttributesRaw = readFileSync(
    "./attributeSetAttributes.json"
  ).toString();
  const attributeSetAttributes = JSON.parse(attributeSetAttributesRaw);
  // Map categories
  const result = categories
    .filter((e: any) => e.visible)
    .filter((e: any) => e.pathIds.length > 2)
    .map((e: any) => {
      const path = e.pathIds
        .reverse()
        .filter((p: any) => p != 1)
        .map((p: any) => categories.find((c: any) => c.id == p));
      return {
        id: e.id,
        parentId: e.parentId ?? 0,
        pathIds: e.pathIds,
        visible: e.visible,
        Hierarchy: path.map((p: any) => p?.name).join(" > "),
        IsSupportSizeChart: false,
      };
    })
    .sort((a: any, b: any) => a.Hierarchy.localeCompare(b.Hierarchy));
  const availableCountry = settings.product_form_available_properties;
  const selectedCategory = categories.find((e: any) => e.id == 53);
  const selectedAttributeSet = attributeSets.find(
    (e: any) => e.id == selectedCategory.attributeSetId
  );
  const selectedAttributeSetAttributes = attributeSetAttributes.find(
    (e: any) => e.id == selectedAttributeSet.id
  );

  console.table(
    selectedAttributeSetAttributes.attributes.map((e: any) => ({
      id: e.id,
      name: e.name,
      feedName: e.feedName,
      isMandatory: e.isMandatory,
      isGlobalAttribute: e.isGlobalAttribute,
      productType: e.productType,
      inputType: e.inputType,
      attributeType: e.attributeType,
      inputMode: e.inputMode,
      attributeDefinitionType: e.attributeDefinitionType,
      attributeDefinitionCountry: e.attributeDefinitionCountry,
      isUsedInConsignmentFormulas: e.isUsedInConsignmentFormulas,
    }))
  );
  console.log(availableCountry);
}
