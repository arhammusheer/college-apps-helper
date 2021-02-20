import { Center } from "@chakra-ui/layout";
import { Spinner } from "@chakra-ui/spinner";

export default function LoadingPage() {
    return(<>
    <Center height="100vh"><Spinner/> Loading...</Center>
    </>)
}