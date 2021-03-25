import { Box, Flex, Heading } from "@chakra-ui/layout";
import { signIn, useSession } from "next-auth/client";
import Navbar from "../../components/Protected/Navbar";
import NewCommunity from "../../components/Protected/NewCommunity";
import LoadingPage from "../../components/Unprotected/LoadingPage";

export default function newCommunity() {
  const [session, loading] = useSession();
  if (session) {
    return (
      <>
        <Navbar />
        <Flex height="80vh" alignItems={"center"} justifyContent={"center"}>
          <Box
            width={["90%", "75%", "50%", "35%"]}
            p={3}
            m={3}
            borderRadius={"xl"}
            boxShadow={"lg"}
          >
            <Heading>Create New Community</Heading>
            <Box my={5}>
              <NewCommunity />
            </Box>
          </Box>
        </Flex>
      </>
    );
  }
  if (loading) {
    return <LoadingPage />;
  }
  return signIn();
}
