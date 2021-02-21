import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import {
  Box,
  Center,
  Flex,
  Heading,
  SimpleGrid,
  Text,
} from "@chakra-ui/layout";
import Error from "next/error";
import Link from "next/link";

export default function _404({ statusCode }) {
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} height="90vh">
      <Flex align="center">
        <Image src="/error404.svg" />
      </Flex>

      <Flex align="center">
        <div>
          <Text color="red.400">Error 404</Text>
          <Heading colorScheme="red" fontSize="5xl">
            We got some bad news for ya
          </Heading>
          <Text>The page you're looking for does not exist.</Text>

          <Link href="/">
            <Button mt={4}>Go back Home</Button>
          </Link>
        </div>
      </Flex>
    </SimpleGrid>
  );
}
Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};
