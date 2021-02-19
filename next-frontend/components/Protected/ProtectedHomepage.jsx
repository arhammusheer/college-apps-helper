import { Container, Wrap, WrapItem } from "@chakra-ui/layout";
import Navbar from "./Navbar";
import PracticePapers from "./PracticePapers";

export default function ProtectedHomepage() {
  return (
    <div>
      <Navbar />
      <Wrap mx={6} mt={10}>
        <PracticePapers />
      </Wrap>
    </div>
  );
}
