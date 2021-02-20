import { useUser } from "@auth0/nextjs-auth0";
import { Box, Center, Container } from "@chakra-ui/layout";
import Navbar from "../components/Protected/Navbar";

export default function profile() {
  const { user, error, isLoading } = useUser();
  return (
    <>
      <Navbar />
      <Center height="80vh">
        <Box boxShadow={4}>
            
        </Box>
      </Center>
    </>
  );
}
