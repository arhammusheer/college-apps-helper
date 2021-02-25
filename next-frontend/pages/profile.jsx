import { Avatar } from "@chakra-ui/avatar";
import { Button } from "@chakra-ui/button";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { useDisclosure } from "@chakra-ui/hooks";
import { Image } from "@chakra-ui/image";
import { Input } from "@chakra-ui/input";
import { Box, Center, Flex, Heading, Text } from "@chakra-ui/layout";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/modal";
import { Tooltip } from "@chakra-ui/tooltip";
import { signIn, useSession } from "next-auth/client";
import { useState } from "react";
import Navbar from "../components/Protected/Navbar";
import LoadingPage from "../components/Unprotected/LoadingPage";
import ReactFileReader from "react-file-reader";

export default function Profile() {
  const [session, loading] = useSession();
  if (session) {
    const [userName, setUserName] = useState(session.user.name);
    const [userEmail, setUserEmail] = useState(session.user.email);
    const [userImage, setUserImage] = useState(session.user.image);

    const handleImage = (image) => {
      setUserImage(image.base64);
    };
    const resetProfile = () => {
      setUserName(session.user.name);
      setUserEmail(session.user.email);
      setUserImage(session.user.image);
    };

    return (
      <>
        <Navbar />
        <Flex height={"80vh"} align="center" justifyContent="center">
          <Box shadow={"lg"} borderRadius={"xl"} p={5}>
            <Center>
              <ReactFileReader
                fileTypes="image/*"
                handleFiles={handleImage}
                multipleFiles={false}
                base64={true}
              >
                <Tooltip label="Edit Image" aria-label="tooltip">
                  <Avatar
                    background="transparent"
                    src={userImage}
                    name={userName}
                    size={"xl"}
                  />
                </Tooltip>
              </ReactFileReader>

              <Box ml={3}>
                <Heading>{userName}</Heading>
                <Text>{userEmail}</Text>
              </Box>
            </Center>
            <Flex
              justifyContent="flex-end"
              hidden={
                userName == session.user.name &&
                userImage == session.user.image &&
                userEmail == session.user.email
              }
            >
              <Button
                colorScheme="gray"
                variant="ghost"
                size="sm"
                m={1}
                onClick={resetProfile}
              >
                Cancel
              </Button>
              <Button colorScheme="teal" size="sm" m={1}>
                Save
              </Button>
            </Flex>
          </Box>
        </Flex>
      </>
    );
  }
  if (loading) return <LoadingPage />;
  return signIn();
}
