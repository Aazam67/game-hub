import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

const ColorModeSwitch = () => {
  //to work with ColorMode, we have to use a custom hook defined in chakra
  //we call that hook down here.
  //This returns on object with two properties.
  //We destructure the object and grab a function called toggle color mode
  //and a property called color mode, which represents the current mode.
  //we use colorScheme for switch button

  //to work with ColorMode, we have to use a custom hook defined in chakra.
  //so we import a hook called useColorMode.
  //onChange to check the switch.
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <HStack>
      <Switch
        colorScheme="green"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      />
      <Text>Switch Mode</Text>
    </HStack>
  );
};

export default ColorModeSwitch;
