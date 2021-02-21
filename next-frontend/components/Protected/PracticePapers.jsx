import { Button } from "@chakra-ui/button";
import { Divider, Heading, HStack, Text, WrapItem } from "@chakra-ui/layout";
import Link from "next/link";
import { FaFacebook, FaTwitter } from "react-icons/fa";

export default function PracticePapers() {
  return (
    <WrapItem boxShadow="xl" p={4} borderRadius="2xl" w="md">
      <div>
        <Heading fontSize="2xl">Practice Papers</Heading>
        <Divider my={2}/>
        <Text>
          Official practice papers and study material for SAT/ACT/IELTS to help
          you get started.
        </Text>
        <HStack mt={4}>
          <Link href="/SAT">
            <Button colorScheme="cyan">SAT</Button>
          </Link>
          <Button colorScheme="teal">ACT</Button>
          <Button colorScheme="red">IELTS</Button>
        </HStack>
      </div>
    </WrapItem>
  );
}
