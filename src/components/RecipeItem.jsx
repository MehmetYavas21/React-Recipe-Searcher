import { Box, Image, Text, WrapItem, Center } from "@chakra-ui/react";

const diebetTypes = [
  {
    LowSodium: "🧂",
    HighFiber: "ℋ𝓕",
    LowFat: "🧈",
    LowCarb: "C",
    Balanced: "==",
    HighProtein: "HP",
  },
];
export const RecipeItem = ({ recipe, setItem }) => {
  const VeganAndVegetarian = () => {
    return recipe.healthLabels.forEach((item) => {
      if (item == "Vegetarian" || item == "Vegan") return `${item} `;
    });
  };

  const Diebet = ({ d }) => {
    return diebetTypes.map((item) => {
      [d.dietLabels?.replace("-", "")];
      if (d == "Low-Sodium") return item.LowSodium;
      if (d == "High-Fiber") return item.HighFiber;
      if (d == "Low-Fat") return item.LowFat;
      if (d == "Low-Carb") return item.LowCarb;
      if (d == "Balanced") return item.Balanced;
      if (d == "High-Protein") return item.HighProtein;
    });
  };
  return (
    <Center flexDir={"column"} gap={4} size={["sm", "md", "lg", "xl"]} m="auto">
      <Box
        background="#ddd"
        padding="10px"
        borderRadius="10px"
        width="75%"
        margin="1em"
        cursor={"pointer"}
        onClick={() => setItem(recipe)}
      >
        <Box gap={8} display="flex" width="100%" flexDirection="column">
          <Image
            src={recipe.image}
            w={100}
            h={100}
            borderRadius={"xl"}
            alt={recipe.label}
            margin="auto"
          />
          <Text fontWeight={"450"} as="medium">
            <p
              style={{
                textTransform: "uppercase",
                opacity: "0.8",
                color: "#999",
              }}
            >
              {recipe.mealType}
            </p>
            <h2 style={{ textTransform: "Capitalize", fontWeight: "bolder" }}>
              {recipe.label}
            </h2>
            <Box bg="red.200" borderRadius="10" pl="5">
              <VeganAndVegetarian />
            </Box>

            <p style={{ textTransform: "capitalize" }}>{recipe.dishType}</p>

            <Box display="flex" gap="3">
              {recipe.cautions != "" && (
                <Box display="flex" flexDirection="column">
                  <p>Coution:</p>
                  <Text
                    noOfLines="1"
                    style={{
                      textTransform: "uppercase",
                      color: "red",
                      backgroundColor: "orange",
                      borderRadius: 10,
                      paddingLeft: "5px",
                      paddingRight: "5px",
                      width: "100%",
                      fontSize: "0.9em",
                    }}
                  >
                    {recipe.cautions}
                  </Text>
                </Box>
              )}
              <Text
                bg="green.700"
                borderRadius="50"
                textAlign="center"
                padding={5}
                fontStyle="oblique"
              >
                <Diebet d={recipe.dietLabels} />
                {/* {recipe.dietLabels} */}
              </Text>
            </Box>
          </Text>
        </Box>
      </Box>
    </Center>
  );
};
