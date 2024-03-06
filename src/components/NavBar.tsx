import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/loogo.webp";

const NavBar = () => {
  return (
    <HStack>
      <Image src={logo} boxSize="60px"></Image>
      <Text size="20px">NavBar</Text>
    </HStack>
  );
};

export default NavBar;
