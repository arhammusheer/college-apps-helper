import { Heading, Link, Text } from "@chakra-ui/layout";
import ReactMarkdown from "react-markdown";
import ChakraUIRenderer from "chakra-ui-markdown-renderer";

export default function MarkdownHelp() {
	const blockquote = "> `>` blockquote"
  return (
    <>
      <Heading size={"2xl"}># Heading 1</Heading>
      <Heading size={"xl"}>## Heading 2</Heading>
      <Heading size={"lg"}>### Heading 3</Heading>
      <Heading size={"md"}>#### Heading 4</Heading>
      <Heading size={"sm"}>##### Heading 5</Heading>
      <Heading size={"xs"}>###### Heading 6</Heading>
      <Text style={{ fontWeight: "bold" }}>**bold text**</Text>
      <Text style={{ fontStyle: "italic" }}>*italicized text*</Text>
      <ReactMarkdown
        renderers={ChakraUIRenderer()}
        source={blockquote}
        escapeHtml={false}
      />
      <Link href="https://www.markdownguide.org/cheat-sheet/">
        Click Here for full markdown guide
      </Link>
    </>
  );
}
