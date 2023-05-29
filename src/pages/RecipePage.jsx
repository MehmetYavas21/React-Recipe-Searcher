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
        {data.hits.map((title) => {
          return <option key={title.recipe.label}>{title.recipe.label}</option>;
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
        w={["sm", "md", "lg"]}
        h="30vh"
        alt={item.label}
      />
          <Flex flexDir="row">
            
            <Flex flexDir="column"
                <Text fontWeight="450" as="medium">
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
                <Text>Total Cooking time: {item.totalTime} Minutes</Text>
                <Text>Serving: {item.yield}</Text>
                <Box bg="red.200">
                  {item.ingredientLines.map((ingrdtn) => (
                  <Text key={item.label} size={{sm, md, lg}}>
                    Ingredients: {ingrdtn}
                  </Text>
                  ))}
                </Box>
              </Flex>

              <Flex flexDir="column">
                <Box>
                  <Box bg="grey.800">
                    {item.healthLabels.map((healthLab) => (
                      <Box>
                        <h2> Health Labels: </h2>
                        <Text key={item.label} size={{sm, md, lg}} bg="yellow" color="red">
                          {healthLab}
                        </Text>
                      </Box>
                    ))}
                  </Box>
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
                  </Box> // sahipsiz !!
                  <Flex flexDir="column">
                    <Box>
                      <Text> Total nutrients:</Text>
                    </Box>
                    <Flex align="center" justify="center">
                      <Text flexDir="row" >{item.totalNutrients.ENERC_KCAL.quantity} calories</Text>
                      <Text flexDir="row" >{item.totalNutrients.CHOCDF.quantity} g CARBS</Text>
                      <Text flexDir="row" >{item.totalNutrients.PROCNT.quantity} g PROTEIN</Text>
                      <Text flexDir="row" >{item.totalNutrients.FAT.quantity} g FAT</Text>
                      <Text flexDir="row" >{item.totalNutrients.CHOLE.quantity} mg CHOLESTEROL</Text>
                      <Text flexDir="row" >{item.totalNutrients.NA.quantity} mg SODIUM</Text>
                    </Flex>
                  </Flex>
                </Flex>
      </Flex>
    </Center>
  );
};
