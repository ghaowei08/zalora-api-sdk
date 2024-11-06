import { readFileSync } from "fs";

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
  const currCategories = categories
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
  // Initial
  const selectedCategoryId = 53;
  const availableCountry = settings.product_form_available_properties;
  const selectedCategory = categories.find(
    (e: any) => e.id == selectedCategoryId
  );
  const selectedAttributeSet = attributeSets.find(
    (e: any) => e.id == selectedCategory.attributeSetId
  );
  const selectedAttributeSetAttributes = attributeSetAttributes.find(
    (e: any) => e.id == selectedAttributeSet.id
  );

  // Base Attributes
  const currAttributes1 = selectedAttributeSetAttributes.attributes.map(
    (e: any) => ({
      id: e.id,
      name: e.name,
      feedName: e.feedName,
      isMandatory: e.isMandatory,
      productType: e.productType,
      inputType: e.inputType,
      attributeType: e.attributeType,
      inputMode: e.inputMode,
      options: e.options,
      attributeDefinitionType: e.attributeDefinitionType,
      attributeDefinitionCountry: e.attributeDefinitionCountry,
      isUsedInConsignmentFormulas: e.isUsedInConsignmentFormulas,
    })
  );
  // Filter country
  const currAttributes2 = currAttributes1.filter(
    (e: any) =>
      e.attributeDefinitionCountry == null ||
      availableCountry.includes(e.attributeDefinitionCountry)
  );
  // Map category attributes
  const currCategoryMapping = categoryMapping.find(
    (e: any) => e.categoryId == selectedCategoryId
  );
  console.log(currCategoryMapping);
  const currAttributes3 = currAttributes2.map((e: any) => {
    const foundAttributeIndex = currCategoryMapping.attributes.findIndex(
      (att: any) => att.attributeId == e.id
    );
    if (foundAttributeIndex != -1) {
      return {
        ...e,
        options: e.options.filter((o: any) =>
          currCategoryMapping.attributes[foundAttributeIndex].options.some(
            (f: any) => f == o.id
          )
        ),
      };
    } else {
      return e;
    }
  });
  console.table(currAttributes3);
}
