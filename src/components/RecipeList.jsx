import {
  Box,
  Flex,
  Text,
  Grid,
  Heading,
  GridItem,
  Center,
} from "@chakra-ui/react";
import { RecipeItem } from "./RecipeItem";
import { useState } from "react";

export const RecipeList = ({ recipes, clickFn, setItem }) => {
  return (
    <>
      <Center
        flexDir={"column"}
        gap={4}
        size={["sm", "md", "lg", "xl"]}
        m="auto"
        pl="10"
        pr="10"
      >
        <Grid
          templateColumns={[
            "repeat(1, 1fr 1fr)",
            "repeat(2, 1fr 1fr)",
            "repeat(3, 1fr 1fr)",
            "repeat(4, 1fr 1fr)",
          ]}
          gap="3"
        >
          {recipes.map((recipe) => (
            <>
              <GridItem colSpan="2" width="400px">
                <RecipeItem
                  key={recipe.label}
                  recipe={recipe}
                  clickFn={clickFn}
                  setItem={setItem}
                />
              </GridItem>
            </>
          ))}
        </Grid>
      </Center>
    </>
  );
};
