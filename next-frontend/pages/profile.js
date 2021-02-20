import { useUser } from "@auth0/nextjs-auth0";
import { Box, Center, Container } from "@chakra-ui/layout";
import Error from "next/error";
import Navbar from "../components/Protected/Navbar";
import LoadingPage from "../components/Unprotected/LoadingPage";

export default function profile() {
  const { user, error, isLoading } = useUser();
  if (user) {
    return (
      <>
        <Navbar />
        <Center height="80vh">
          <Box boxShadow={4}></Box>
        </Center>
      </>
    );
  }
  if (error) return <Center vh="80vh">An error Occured</Center>;
  if (isLoading) return <LoadingPage/>;
  return <Error statusCode={403}/>
}
