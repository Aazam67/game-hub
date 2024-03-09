import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/loogo.webp";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  //Webp images are highly optimized images for web.
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src={logo} boxSize="60px"></Image>
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
