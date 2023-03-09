import {
  Box,
  Button,
  Card,
  Center,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";

function Careers() {
  return (
    <Box minH={"100%"} bgColor={"#051726"} h={"100%"}>
      <Box>
        <Heading
          textAlign={"center"}
          color={"whitesmoke"}
          fontStyle={"italic"}
          fontWeight={"bold"}
          fontSize={30}
        >
          CAREERS AT GYM SPACE
        </Heading>
      </Box>
      <Center>
        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 1 }}
          h={"100%"}
          w={"50%"}
          spacing={10}
          p={30}
        >
          <Box
            bgImage={"./images/careers.jpg"}
            h={40}
            bgSize={"cover"}
            bgPos={"center"}
            textAlign={"center"}
            p={30}
            bgColor={"blue"}
            color={"whitesmoke"}
          ></Box>
        </SimpleGrid>
      </Center>
      <Box>
        <Center>
          <Button bgColor={"#81FFD9"} borderRadius={"12"} p={4}>
            <Text fontSize={18} fontWeight={"bold"} color={"whitesmoke"}>
              SEE CAREER VACANCIES
            </Text>
          </Button>
        </Center>
        <Center>
          <Card p={30} alignItems={"center"} w={"100%"}></Card>
        </Center>
      </Box>
    </Box>
  );
}

export default Careers;
