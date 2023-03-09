import React from "react";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Input,
  useDisclosure,
} from "@chakra-ui/react";

function Draw() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <Box p="4">
            <Heading>Drawer Title</Heading>
          </Box>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default Draw;
