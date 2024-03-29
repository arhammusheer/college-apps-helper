import {
  AspectRatio,
  Box,
  Flex,
  Heading,
  SimpleGrid,
  Spacer,
} from "@chakra-ui/layout";
import { signIn, useSession } from "next-auth/client";
import LoadingPage from "../../components/Unprotected/LoadingPage";
import Navbar from "../../components/Protected/Navbar";
import { Textarea } from "@chakra-ui/textarea";
import { useState } from "react";
import ReactMarkdown from "react-markdown";
import ChakraUIRenderer from "chakra-ui-markdown-renderer";
import { HiInformationCircle } from "react-icons/hi";
import { IconButton } from "@chakra-ui/button";
import {
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
} from "@chakra-ui/popover";
import MarkdownHelp from "../../components/Protected/MarkdownHelp";

export default function editor() {
  const [session, loading] = useSession();
  const [markdown, setMarkdown] = useState("");

  let handleMarkdownChange = (e) => {
    let inputValue = e.target.value;
    setMarkdown(inputValue);
  };
  if (loading) return <LoadingPage />;

  if (session) {
    return (
      <div>
        <Navbar />
        <SimpleGrid columns={2} mt={5} mx={5}>
          <Box mx={1}>
            <Flex mb={4} alignItems={"center"}>
              <Heading>Editor</Heading>
              <Spacer />
              <Popover>
                <PopoverTrigger>
                  <IconButton icon={<HiInformationCircle />} size="xs" />
                </PopoverTrigger>
                <PopoverContent>
                  <PopoverArrow />
                  <PopoverCloseButton />
                  <PopoverHeader>Markdown Help</PopoverHeader>
                  <PopoverBody>
                    <MarkdownHelp />
                  </PopoverBody>
                </PopoverContent>
              </Popover>
            </Flex>
            <Textarea
              onChange={handleMarkdownChange}
              value={markdown}
              variant={"filled"}
              height={"80vh"}
            />
          </Box>
          <Box mx={2}>
            <Heading>Preview</Heading>
            <ReactMarkdown
              mt={4}
              renderers={ChakraUIRenderer()}
              source={markdown}
              escapeHtml={false}
            />
          </Box>
        </SimpleGrid>
      </div>
    );
  }
  return signIn();
}
