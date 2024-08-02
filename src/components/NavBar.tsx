import { HStack, Image } from "@chakra-ui/react";
import loggo from "../assets/loggo.webp";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  //Webp images are highly optimized images for web.
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src={loggo} boxSize="60px"></Image>
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
