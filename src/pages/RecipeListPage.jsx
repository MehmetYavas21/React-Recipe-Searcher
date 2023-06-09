import { useState } from "react";
import { data } from "../utils/data";
import { TextInput } from "../components/ui/TextInput";
import { RecipeList } from "../components/RecipeList";
import { Heading, Box, Center } from "@chakra-ui/react";
import { Button } from  "../components/ui/TextInput";

export const RecipeListPage = ({ clickFn, setItem }) => {
  const greeting = "Welcome to Winc Recipe Finder!";
  const [searchField, setSearchField] = useState("");

  const handleChange = (event) => {
    setSearchField(event.target.value);
  };

  const recipesArray = [];
  data.hits.forEach((element) => {
    recipesArray.push(element);
  });
  const recipes = [];
  recipesArray.forEach((item) => recipes.push(item.recipe));

  const matchedRecipes = recipes.filter((recipe) => {
    return recipe.label.toLowerCase().includes(searchField.toLowerCase());
  });

  return (
      <Flex flexDir="column">
        <Heading
          m="auto"
          size={["sm", "md", "lg", "xl"]}
          color={"white"}
          pt={10}
          alignSelf="center"
        >
          {greeting}
        </Heading>
          <Flex flexDir="row">
            <TextInput
              border="1px solid #ddd"
              borderRadius="10"
              changeFn={handleChange}
              pl="10"
              cursor="pointer"
              w={200}
              mb={8}
              color="teal"
              placeholder="custom placeholder"
              _placeholder={{ color: "inherit" }}
            />
            <Button/>
           </Flex>
        <RecipeList
          recipes={matchedRecipes}
          clickFn={clickFn}
          setItem={setItem}
          // display="flex"
          // flexDirection="column"
          // alignSelf="center"
        />
      </Flex>
  );
};
