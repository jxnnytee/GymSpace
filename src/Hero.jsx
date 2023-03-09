import { Box, Button, Center, Image, Text } from "@chakra-ui/react";

function Hero() {
  return (
    <Box
      minH={"100vh"}
      minW={"100%"}
      bgImage={"./images/gym.jpg"}
      bgPos={"center"}
      bgSize={"cover"}
    >
      <Center>
        <Box fontWeight={"bold"} mt={650} w={"100%"} h={"100%"}>
          <Box opacity={"0.9"} p={3} bgColor={"#051726"}>
            <Text fontSize={40} color={"#81FFD9"} textAlign={"center"}>
              FROM £15.99 A MONTH
            </Text>
            <Text textAlign={"center"} fontSize={30} color={"whitesmoke"}>
              NO CONTRACT
            </Text>
            <Center p={3}>
              <Button bgColor={"#81FFD9"} borderRadius={"12"} p={4}>
                <Text fontSize={18} fontWeight={"bold"} color={"whitesmoke"}>
                  JOIN NOW
                </Text>
              </Button>
            </Center>
          </Box>
        </Box>
      </Center>
    </Box>
  );
}

export default Hero;
