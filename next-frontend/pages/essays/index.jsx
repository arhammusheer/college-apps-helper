import { signIn, useSession } from "next-auth/client";
import LoadingPage from "../../components/Unprotected/LoadingPage";
import {
  Box,
  Center,
  Flex,
  Heading,
  SimpleGrid,
  Spacer,
} from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import Link from "next/link";
import Navbar from "../../components/Protected/Navbar";

export default function Essays() {
  const [session, loading] = useSession();

  if (loading) return <LoadingPage />;
  if (session) {
    return (
      <div>
        <Navbar />
        <Flex mt={10} mx={4}>
          <Box>
            <Heading>My Essays</Heading>
          </Box>
          <Spacer />
          <Box>
            <Link href="/editor">
              <Button>New</Button>
            </Link>
          </Box>
        </Flex>
        <Center>
          <SimpleGrid mt={10} columns={1}>
            <Box></Box>
          </SimpleGrid>
        </Center>
      </div>
    );
  }
  return signIn();
}
