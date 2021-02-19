import { Box, SimpleGrid, Text } from "@chakra-ui/layout";
import Navbar from "../../components/Protected/Navbar";
import NoSSR from "react-no-ssr";

export default function SAT() {
  return (
    <>
      <Navbar />
      <SimpleGrid mx={6} mt={10} columns={2} spacing={10}>
        <Box></Box>
        <Box height={"80vh"}>
          <NoSSR>
            {DisplayPDF(
              "http://www.orimi.com/pdf-test.pdf"
            )}
          </NoSSR>
        </Box>
      </SimpleGrid>
    </>
  );
}

function DisplayPDF(link = undefined) {
  if (link) {
    return <embed width="100%" height="100%" src={link} />;
  }
  return (
    <Box boxShadow="lg" borderRadius="xl" p={5}>
      <Text fontSize="2xl" color="gray.300">
        Opened files display here
      </Text>
    </Box>
  );
}
