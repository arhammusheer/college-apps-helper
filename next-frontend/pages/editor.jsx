import { AspectRatio, Box, Heading, SimpleGrid } from "@chakra-ui/layout";
import { signIn, useSession } from "next-auth/client";
import LoadingPage from "../components/Unprotected/LoadingPage";
import Navbar from "../components/Protected/Navbar";

export default function editor() {
  const [session, loading] = useSession();
  if (loading) return <LoadingPage />;

  if (session) {
    return (
      <div>
        <Navbar />
        <SimpleGrid columns={2} mt={5} mx={5}>
          <Box>
            <Heading>Editor</Heading>
          </Box>
          <AspectRatio></AspectRatio>
          <Box>
            <Heading>Preview</Heading>
          </Box>
        </SimpleGrid>
      </div>
    );
  }
  return signIn();
}
