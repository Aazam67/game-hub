//I don't want to implement that mapping in GameCard because that's a distraction from what that component is supposed to do.

import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
//md which is material design
import { MdPhoneIphone } from "react-icons/md";
//
import { SiNintendo } from "react-icons/si";
//bs which is bootstrap.
import { BsGlobe } from "react-icons/bs";
import { Platform } from "../hooks/useGames";
import { HStack, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";

//we should give this a prop which is going to be an array of platform objects. so use an interface to define the shape of props.
interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    ps: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    lix: FaLinux,
    ios: MdPhoneIphone,
    web: BsGlobe,
    ad: FaAndroid,
  };
  return (
    <>
      <HStack marginY={1}>
        {platforms.map((platform) => (
          <Icon as={iconMap[platform.slug]} color="gray.500" />
        ))}
      </HStack>
    </>
  );
};

export default PlatformIconList;
