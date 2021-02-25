import { Wrap } from "@chakra-ui/layout";
import PracticePapers from "./PracticePapers";

export default function ProtectedHomepage() {
  return (
    <Wrap mx={6} mt={10}>
        <PracticePapers />
      </Wrap>
    
  );
}
