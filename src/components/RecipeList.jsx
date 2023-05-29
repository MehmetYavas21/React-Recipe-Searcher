import {
  Box,
  Flex,
  Text,
  Grid,
  Heading,
  GridItem,
  Center,
  SimpleGrid,
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
        <SimpleGrid
          bg='gray.500'
          columns={{ sm: 1, md: 2, lg:4, xl:6 }}
          spacing='8'
          p='10'
          textAlign='center'
          rounded='lg'
          color='gray.400'
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
        </SimpleGrid>
      </Center>
    </>
  );
};
