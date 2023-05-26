import { useState } from "react";
import { RecipePage } from "./pages/RecipePage";
import { RecipeListPage } from "./pages/RecipeListPage";
import { Box, Center, Heading } from "@chakra-ui/react";

export const App = () => {
  const [userRecipe, setUserRecipe] = useState();
  const [getItem, setItem] = useState(false);

  return (
    <Center flexDir={"column"} bg={"blue.700"} height="100%">
      {getItem ? (
        <RecipePage recipe={userRecipe} item={getItem} setItem={setItem} />
      ) : (
        <>
          <RecipeListPage clickFn={setUserRecipe} setItem={setItem} />
        </>
      )}
    </Center>
  );
};
