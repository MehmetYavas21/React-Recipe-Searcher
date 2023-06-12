import { Box, Text, SimpleGrid } from "@chakra-ui/react";
import { AiFillAndroid } from "react-icons/ai";

export const Footer = () => (
  <Box>
    <Text
      textTransform="uppercase"
      fontSize={["sm", "md", "lg", "xl"]}
      color="green.100"
    >
      {" "}
      Shortcuts:
    </Text>
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      textAlign="center"
      rounded="lg"
      color="green.100"
      w="100%"
      minH="50vh"
      p="10"
      fontSize={["sm", "md", "lg", "xl"]}
    >
      <Text>🧂: Low Sodyum</Text>
      <Text display="inline-flex" alignItems="center" justifyItems="center">
        <AiFillAndroid pt="10" pb="0" />: High Fiber
      </Text>
      <Text>🧈 : Low Fat</Text>
      <Text>C : Low Carbonhydrates</Text>
      <Text>== : Balanced</Text>
      <Text>HP : High Protein</Text>
    </SimpleGrid>
  </Box>
);
