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

function Members() {
  return (
    <Box minH={"100%"} bgColor={"#81FFD9"} h={"100%"}>
      <Box>
        <Heading
          textAlign={"center"}
          color={"whitesmoke"}
          fontStyle={"italic"}
          fontWeight={"bold"}
          fontSize={30}
        >
          HEAR FROM OUR MEMBERS
        </Heading>
      </Box>
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3 }}
        h={"100%"}
        spacing={10}
        p={30}
      >
        <Box
          textAlign={"center"}
          p={30}
          bgColor={"#051726"}
          color={"whitesmoke"}
        >
          <Heading
            color={"#81FFD9"}
            fontStyle={"italic"}
            fontWeight={"bold"}
            fontSize={30}
          >
            MARIA
          </Heading>
          <Text>
            "Gym Space gives me more than just a workout when I think about it.
            I joined after going through a tough time, it's given me so much
            back and helped me to stay feeling good. My quads don't feel so good
            after leg day, though!"
          </Text>
        </Box>
        <Box
          textAlign={"center"}
          p={30}
          bgColor={"#051726"}
          color={"whitesmoke"}
        >
          <Heading
            color={"#81FFD9"}
            fontStyle={"italic"}
            fontWeight={"bold"}
            fontSize={30}
          >
            HANNAH
          </Heading>
          <Text>
            "I've become close friends with the assault bike and stairmasters...
            let's call it a love hate relationship! But in all seriousness, I've
            even become friendly with Michael, my PT, who's helped me get even
            more out of the gym in my path to losing 5 stone!"
          </Text>
        </Box>
        <Box
          textAlign={"center"}
          p={30}
          bgColor={"#051726"}
          color={"whitesmoke"}
        >
          <Heading
            color={"#81FFD9"}
            fontStyle={"italic"}
            fontWeight={"bold"}
            fontSize={30}
          >
            LISA
          </Heading>
          <Text>
            "Playing sports growing up, I was slightly worried that going to the
            gym would feel isolationg in comparison, but Gym Space is such a
            friendly environmetn. I've started attending more classes too, I
            love that classes are included in the price."
          </Text>
        </Box>
      </SimpleGrid>
      <Box>
        <Center>
          <Card p={30} alignItems={"center"} w={"100%"}></Card>
        </Center>
      </Box>
    </Box>
  );
}

export default Members;
