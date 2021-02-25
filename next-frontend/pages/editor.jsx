import { Box, SimpleGrid } from "@chakra-ui/layout";
import { signIn, useSession } from "next-auth/client";
import LoadingPage from "../components/Unprotected/LoadingPage";
import Navbar from "../components/Protected/Navbar";

export default function Editor() {
  const [session, loading] = useSession();

  if (loading) return <LoadingPage />;
  if (session) {
    return (
      <div>
        <Navbar />
        <SimpleGrid columns={2}>
          <Box>
						hotStatusHandlers
          </Box>
        </SimpleGrid>
      </div>
    );
  }
  return signIn();
}
