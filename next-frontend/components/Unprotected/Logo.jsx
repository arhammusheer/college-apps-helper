import Icon from "@chakra-ui/icon";
import { Center, Text } from "@chakra-ui/layout";
import { HiLibrary } from "react-icons/hi";
import ThemeSwitcher from "../ThemeSwitcher";
export default function Logo() {
  return (
    <Center>
      <div>
        <Text fontSize="4xl" mb={0} p={0}>
          <Icon as={HiLibrary} />
          Collgr
        </Text>
      </div>
    </Center>
  );
}
