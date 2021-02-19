import { useColorMode } from "@chakra-ui/color-mode";
import Icon from "@chakra-ui/icon";
import { HiMoon, HiSun } from "react-icons/hi";
export default function ThemeSwitcher() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <div onClick={toggleColorMode}>
      <Icon as={colorMode === "light" ? HiMoon : HiSun} boxSize={5} />
      Switch Theme
    </div>
  );
}
