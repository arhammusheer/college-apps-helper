import { useColorMode } from "@chakra-ui/color-mode";
import Icon from "@chakra-ui/icon";
import { Flex } from "@chakra-ui/layout";
import { HiMoon, HiSun } from "react-icons/hi";
export default function ThemeSwitcher() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex onClick={toggleColorMode} w="100%" align="center">
      <Icon as={colorMode === "light" ? HiMoon : HiSun} />
      &nbsp;
      {colorMode === "light" ? "Dark" : "Light"} Theme
    </Flex>
  );
}
