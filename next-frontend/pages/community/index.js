import { Button } from "@chakra-ui/button";
import { useDisclosure } from "@chakra-ui/hooks";
import { Box, Flex, Heading, Spacer, Text } from "@chakra-ui/layout";
import { Modal, ModalContent, ModalHeader, ModalOverlay } from "@chakra-ui/modal";
import { signIn, useSession } from "next-auth/client";
import Link from "next/link";
import Navbar from "../../components/Protected/Navbar";
import LoadingPage from "../../components/Unprotected/LoadingPage";

export default function index() {
  const [session, loading] = useSession();
  const { isOpen, onOpen, onClose } = useDisclosure();

  if (session) {
    const Favourites = () => {
      return <Text>You currently don't have any favourite rooms</Text>;
    };

    const Explore = () => {
      return <Text>No open rooms yet</Text>;
    };

    return (
      <>
        <Navbar />
        <Box m={[5, 10, 15, 20]}>
          <Box>
            <Flex justifyContent="space-between" alignItems="center">
              <Heading>Community</Heading>
              <Spacer />
              {/* <Link href="community/new"> */}
              <Button size={"xs"} onClick={onOpen}>
                Create new room
              </Button>
              {/* </Link> */}
            </Flex>
            <Text>A place to find people in the same boat</Text>
          </Box>
          <Box mt={[5, 10]}>
            <Heading size="md">Favourites</Heading>
            <Favourites />
          </Box>

          <Box mt={[5, 10]}>
            <Heading size="md">Explore</Heading>
            <Explore />
          </Box>
        </Box>

        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Lorem count={2} />
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
              <Button variant="ghost">Secondary Action</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    );
  }
  if (loading) return <LoadingPage />;
  return signIn();
}
