import { Button } from "@chakra-ui/button";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { AddIcon } from "@chakra-ui/icons";
import { Input } from "@chakra-ui/input";
import { Textarea } from "@chakra-ui/textarea";

export default function NewCommunity() {
  return (
    <form>
      <FormControl id="name">
        <FormLabel>Room Name</FormLabel>
        <Input type="text" />
      </FormControl>
      <FormControl id="description">
        <FormLabel>Room Description</FormLabel>
        <Textarea placeholder="Here is a sample placeholder" />
      </FormControl>
      <Button leftIcon={<AddIcon />} type="submit">Create</Button>
    </form>
  );
}
