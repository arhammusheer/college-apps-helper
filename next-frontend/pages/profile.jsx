import { Avatar } from "@chakra-ui/avatar";
import { Button } from "@chakra-ui/button";
import { Box, Center, Flex, Heading, Text } from "@chakra-ui/layout";
import { Tooltip } from "@chakra-ui/tooltip";
import { getSession, signIn, useSession } from "next-auth/client";
import { useState } from "react";
import Navbar from "../components/Protected/Navbar";
import LoadingPage from "../components/Unprotected/LoadingPage";
import ReactFileReader from "react-file-reader";
import { Editable, EditableInput, EditablePreview } from "@chakra-ui/editable";
import { useToast } from "@chakra-ui/toast";

export default function Profile() {
  const [session, loading] = useSession();
  if (session) {
    const [userName, setUserName] = useState(session.user.name);
    const [userEmail, setUserEmail] = useState(session.user.email);
    const [userImage, setUserImage] = useState(session.user.image);
    const toast = useToast();

    const handleImage = (image) => {
      setUserImage(image.base64);
    };
    const resetImage = () => {
      setUserImage(session.user.image);
    };
    const submitUserName = async (username) => {
      if (username !== session.user.name)
        await fetch("/api/profile/username", {
          method: "POST",
          body: JSON.stringify({ username: username }),
        }).then((response) => {
          if (response.status === 200) {
            toast({
              title: "Username Updated",
              description: "Your username has successfully been updated",
              status: "success",
              duration: 800,
              isClosable: true,
              position: "bottom-right",
            });
            toast({
              title: "Re-Login required",
              description:
                "To reflect your profile changes, you may need to login again.",
              status: "warning",
              duration: 5000,
              isClosable: true,
              position: "bottom-right",
            });
            getSession();
          } else {
            toast({
              title: "Could not update username",
              description: "An error occured",
              status: "error",
              duration: 800,
              isClosable: true,
              position: "bottom-right",
            });
          }
        });
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
                <Heading>
                  <Editable defaultValue={userName} onSubmit={submitUserName}>
                    <EditablePreview />
                    <EditableInput />
                  </Editable>
                </Heading>
                <Text
                  onClick={() => {
                    toast({
                      title: "Email is not editable",
                      description: "Sorry, you cannot edit your email",
                      status: "warning",
                      duration: 800,
                      isClosable: true,
                      position: "bottom-right",
                    });
                  }}
                >
                  {userEmail}
                </Text>
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
                onClick={resetImage}
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
