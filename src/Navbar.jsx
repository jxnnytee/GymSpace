import {
  useDisclosure,
  Box,
  HStack,
  IconButton,
  Image,
} from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsFillPersonFill } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import Draw from "./Draw";
import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Heading,
} from "@chakra-ui/react";

function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box minW={"100%"} minH={"100%"} zIndex={20} pos={"fixed"}>
      <Box bgColor={"#051726"}>
        <HStack
          justifyContent={"space-between"}
          pl={{ base: 2, md: 20, lg: 20 }}
          pr={{ base: 2, md: 20, lg: 20 }}
          spacing={6}
        >
          <Box>
            <Image w={40} src="./images/logo.jpg" />
          </Box>
          <HStack spacing={{ base: "2", md: "10", lg: "10" }}>
            <IconButton icon={<GoLocation />} w={6} h={20} color={"#81FFD9"} />
            <IconButton
              icon={<BsFillPersonFill />}
              w={10}
              h={20}
              color={"#81FFD9"}
            />
            <IconButton
              onClick={onOpen}
              icon={<GiHamburgerMenu />}
              w={10}
              h={20}
              color={"#81FFD9"}
            />
          </HStack>
        </HStack>
      </Box>
    </Box>
  );
}

export default Navbar;
