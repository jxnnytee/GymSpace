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

function Content() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    console.log(searchTerm);
  };
  return (
    <Box minH={"100vh"} h={"100%"}>
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
            CLAIM YOUR FREE 3-DAY PASS
          </Heading>
          <Text>
            Start something new with a FREE 3 day pass at PureGym and enjoy
            access to unlimited classes and more top-of-the-range kit than you
            can shake a kettlebell at. Choose from 340+ gyms nationwide
            (exclusions apply) - hurry, offer ends Sunday! Start your free trial
            today with code FREEPASS
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
            WAY MORE CHOICE
          </Heading>
          <Text>
            Get way more than you pay for at PureGym! With 340+ gyms nationwide
            to choose from, unlimited classes and more top of the range kit than
            you can shake a kettlebell at.
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
            WAY MORE FLEXIBILITY
          </Heading>
          <Text>
            At PureGym there’s no pesky contracts weighing you down, and way
            more you time, anytime, with 24/7 access in most gyms.
          </Text>
        </Box>
      </SimpleGrid>
      <Box>
        <Center>
          <Card p={30} alignItems={"center"} w={"100%"}>
            <Box mb={5}>
              <Heading
                color={"#81FFD9"}
                fontStyle={"italic"}
                fontWeight={"bold"}
                fontSize={30}
              >
                FIND YOUR NEAREST GYM
              </Heading>
              <Text mt={5} textAlign={"center"}>
                Find your nearest Gym Space and get started today!
              </Text>
              <Center>
                <Button mt={5} bgColor={"#81FFD9"} borderRadius={"12"} p={4}>
                  <Text fontWeight={"bold"} color={"whitesmoke"}>
                    FIND A GYM
                  </Text>
                </Button>
              </Center>
            </Box>
            <Image
              objectFit={"cover"}
              h={500}
              opacity={"0.4"}
              src="./images/map.jpg"
            />
            <Box mt={5}>
              <Heading
                textAlign={"center"}
                color={"#81FFD9"}
                fontStyle={"italic"}
                fontWeight={"bold"}
                fontSize={30}
              >
                MORE THAN A GYM
              </Heading>
              <Text mt={5} width={"100%"} textAlign={"center"}>
                At Gym Space you get way more than you pay for! You can enjoy
                flexible memberships, unlimited classes and 24/7 access, but
                it's not just the stuff you'd expect from a gym, it's the extra
                value too. Think new friends, way more you time, friendly teams
                and a judgement-free space to workout and feel-good in. No
                wonder we're the UK's favourite gym.
              </Text>
              <Center>
                <Button mt={5} bgColor={"#81FFD9"} borderRadius={"12"} p={4}>
                  <Text fontWeight={"bold"} color={"whitesmoke"}>
                    TELL ME MORE
                  </Text>
                </Button>
              </Center>
            </Box>
          </Card>
        </Center>
      </Box>
    </Box>
  );
}

export default Content;
