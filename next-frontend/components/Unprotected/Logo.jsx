import Icon from "@chakra-ui/icon";
import { Center, Heading } from "@chakra-ui/layout";
import Link from "next/link";
import { HiLibrary } from "react-icons/hi";
export default function Logo() {
  return (
    <Center>
      <div style={{ cursor: "pointer" }}>
        <Link href="/">
          <Heading fontSize="4xl" mb={0} p={0}>
            <Icon as={HiLibrary} />
            CollgR
          </Heading>
        </Link>
      </div>
    </Center>
  );
}
