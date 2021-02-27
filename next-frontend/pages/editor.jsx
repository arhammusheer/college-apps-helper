import { AspectRatio, Box, Flex, Heading, SimpleGrid } from "@chakra-ui/layout";
import { signIn, useSession } from "next-auth/client";
import LoadingPage from "../components/Unprotected/LoadingPage";
import Navbar from "../components/Protected/Navbar";
import { useState } from "react";
import dynamic from "next/dynamic";
import { Textarea } from "@chakra-ui/textarea";
import MarkdownIt from "markdown-it";

const MdEditor = dynamic(() => import("react-markdown-editor-lite"), {
  ssr: false,
});

export default function editor() {
  const [session, loading] = useSession();
  if (loading) return <LoadingPage />;

  if (session) {
    const mdParser = new MarkdownIt(/* Markdown-it options */);

    return (
      <div>
        <Navbar />
        <SimpleGrid columns={2} mt={5} mx={5}>
          <Box>
            <Heading>Editor</Heading>
          </Box>
          <AspectRatio>
            <iframe
              src="http://localhost:3000/"
              title="W3Schools Free Online Web Tutorials"
            ></iframe>
          </AspectRatio>
          <Box>
            <Heading>Preview</Heading>
          </Box>
        </SimpleGrid>
      </div>
    );
  }
  return signIn();
}
