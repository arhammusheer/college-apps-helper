import { Box, SimpleGrid, Text } from "@chakra-ui/layout";
import Navbar from "../../components/Protected/Navbar";
import { Button } from "@chakra-ui/button";
import { useUser } from "@auth0/nextjs-auth0";
import Error from "next/error";
import LoadingPage from "../../components/Unprotected/LoadingPage";

export default function SAT() {
  const { user, error, isLoading } = useUser();
  if (isLoading) return <LoadingPage />;
  if (user) {
    return (
      <>
        <Navbar />
        <SimpleGrid mx={6} mt={10} columns={2} spacing={10}>
          <Box>
            <div>
              <Button
                onClick={() => {
                  ReactDOM.render(
                    <DisplayPDF Link="http://www.africau.edu/images/default/sample.pdf" />,
                    document.getElementById("displayPDF")
                  );
                }}
              >
                Load pdf
              </Button>
            </div>
          </Box>
          <Box height={"80vh"}>
            <div id="displayPDF">
              <DisplayPDF />
            </div>
          </Box>
        </SimpleGrid>
      </>
    );
  }

  return <Error statusCode={403} />;
}

function DisplayPDF(props) {
  if (props.Link) {
    return <embed width="100%" height="100%" src={props.Link} />;
  }
  return (
    <Box boxShadow="lg" borderRadius="xl" p={5}>
      <Text fontSize="2xl" color="gray.300">
        Your PDF will appear here
      </Text>
    </Box>
  );
}
