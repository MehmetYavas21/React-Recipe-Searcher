import { Center, Flex, Heading, Image, Text, Box } from "@chakra-ui/react";
import { Button } from "../components/ui/Button";
import { data } from "../utils/data";

export const RecipePage = ({ item, setItem }) => {
  const goBack = () => {
    setItem("");
  };
  const handleChage = (recipe) => {
    const selectedItem = data.hits.filter((item) => {
      return item.recipe.label == recipe.target.value;
    });

    setItem(selectedItem[0].recipe);
  };
  const SelectionBox = () => {
    return (
      <select onChange={(recipe) => handleChage(recipe)}>
        {data.hits.map((re) => {
          return <option key={re.recipe.label}>{re.recipe.label}</option>;
        })}
      </select>
    );
  };
  return (
    <Center
      flexDir={"column"}
      gap={4}
      background="white"
      width={["sm", "md", "lg", "xl"]}
      p="5"
      height="100%"
    >
      <SelectionBox />
      <Button onClick={goBack}>
        <Text>Go Back</Text>
      </Button>

      <Image
        src={item.image}
        w={["sm", "md", "lg", "xl"]}
        h="30vh"
        alt={item.label}
      />
      <Box>
        <Text fontWeight={"450"} as="medium">
          <p
            style={{
              textTransform: "uppercase",
              opacity: "0.8",
              color: "#999",
            }}
          >
            {item.mealType}
          </p>
        </Text>
        <Heading fontSize={"2xl"} color="green.800" textTransform="capitalize">
          {item.label}
        </Heading>
        <Box>
          <Text>Total Cooking time: {item.totalTime} Minutes</Text>
          <Text>Serving: {item.yield}</Text>
          <Text>
            Ingredients :<li>{item.ingredientLines}</li>
          </Text>
        </Box>

        <Box>
          <Text> Health Labels :{item.healthLabels}</Text>
          {item.dietLabels != "" && (
            <Box>
              <p>Diet :</p>
              <Text background="green.300" width="100%">
                {item.dietLabels}
              </Text>
            </Box>
          )}
        </Box>
        <Box display="flex" gap="3">
          {item.cautions != "" && (
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
                {item.cautions}
              </Text>
            </Box>
          )}
        </Box>
      </Box>
      <Box>
        <Box>
          <Text> Total nutrients:</Text>
        </Box>
        <Box>
          <Text>{item.totalNutrients.ENERC_KCAL.quantity} calories</Text>
          <Text>{item.totalNutrients.CHOCDF.quantity} g CARBS</Text>
          <Text>{item.totalNutrients.PROCNT.quantity} g PROTEIN</Text>
          <Text>{item.totalNutrients.FAT.quantity} g FAT</Text>
          <Text>{item.totalNutrients.CHOLE.quantity} mg CHOLESTEROL</Text>
          <Text>{item.totalNutrients.NA.quantity} mg SODIUM</Text>
        </Box>
      </Box>
    </Center>
  );
};
