import Icon from "@chakra-ui/icon";
import { Center, Flex, Heading } from "@chakra-ui/layout";
import Link from "next/link";
import { HiLibrary } from "react-icons/hi";
export default function Logo() {
  return (
    <Center>
      <div style={{ cursor: "pointer" }}>
        <Link href="/">
          <Flex align="end" mx={2}>
            <Heading fontSize="4xl" mb={0} p={0}>
              <Icon as={HiLibrary} />
              CollgR
            </Heading>
          </Flex>
        </Link>
      </div>
    </Center>
  );
}
