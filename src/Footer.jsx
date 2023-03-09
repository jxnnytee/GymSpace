import {
  Heading,
  SimpleGrid,
  Text,
  Box,
  textDecoration,
  Center,
} from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { FaTiktok } from "react-icons/fa";

function Footer() {
  return (
    <Center bgColor={"gray.300"}>
      <Box>
        <Icon as={AiFillTwitterCircle} w={8} h={8} />
        <Icon as={AiFillInstagram} w={8} h={8} />
        <Icon as={AiFillFacebook} w={8} h={8} />
        <Icon as={FaTiktok} w={6} h={7} />
      </Box>
      <SimpleGrid
        w={1000}
        columns={{ base: 1, md: 2, lg: 4 }}
        h={"100%"}
        spacing={10}
        p={10}
      >
        <Box>
          <Heading mb={2} fontWeight={"bold"}>
            Our gyms
          </Heading>
          <Text>
            <a href="#">Gyms Near Me</a>
          </Text>
          <Text>
            <a href="#">Student Gym Membership</a>
          </Text>
          <Text>
            <a href="#">Gyms in London</a>
          </Text>
          <Text>
            <a href="#">Fitness Classes</a>
          </Text>
          <Text>
            <a href="#">Personal trainers</a>
          </Text>
          <Text>
            <a href="#">City Center Gyms</a>
          </Text>
          <Text>
            <a href="#">Corporate Gym Memberships</a>
          </Text>
          <Text>
            <a href="#">Gym Membership Deals & Offers</a>
          </Text>
        </Box>

        <Box>
          <Heading mb={2} fontWeight={"bold"}>
            Get assistance
          </Heading>
          <Text>
            <a href="#">Help & Conact</a>
          </Text>
          <Text>
            <a href="#">Facebook</a>
          </Text>
          <Text>
            <a href="#">Instagram</a>
          </Text>
          <Text>
            <a href="#">Twitter</a>
          </Text>
          <Text>
            <a href="#">Linkedin</a>
          </Text>
        </Box>

        <Box>
          <Heading mb={2} fontWeight={"bold"}>
            Company
          </Heading>
          <Text>
            <a href="#">About us</a>
          </Text>
          <Text>
            <a href="#">Careers</a>
          </Text>
          <Text>
            <a href="#">Gym Space Corporate</a>
          </Text>
          <Text>
            <a href="#">Investor Relations</a>
          </Text>
          <Text>
            <a href="#">Personal trainers</a>
          </Text>
          <Text>
            <a href="#">Gym Space App</a>
          </Text>
          <Text>
            <a href="#">Statements</a>
          </Text>
          <Text>
            <a href="#">Gym Space New York</a>
          </Text>
        </Box>

        <Box>
          <Heading mb={2} fontWeight={"bold"}>
            Serious stuff
          </Heading>
          <Text>
            <a href="#">Terms & Conditions</a>
          </Text>
          <Text>
            <a href="#">Gym Rules</a>
          </Text>
          <Text>
            <a href="#">Privacy</a>
          </Text>
          <Text>
            <a href="#">Cookies</a>
          </Text>
          <Text>
            <a href="#">Gym Safety</a>
          </Text>
        </Box>
      </SimpleGrid>
    </Center>
  );
}

export default Footer;
