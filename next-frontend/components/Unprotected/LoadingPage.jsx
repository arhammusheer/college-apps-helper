import { Center } from "@chakra-ui/layout";
import loader from "../../styles/loader.module.css";
export default function LoadingPage() {
  return (
    <>
      <Center height="100vh" className={loader.contain}>
        <div className={loader.loader}>
          <svg viewBox="0 0 80 80">
            <circle id="test" cx="40" cy="40" r="32"></circle>
          </svg>
        </div>
      </Center>
    </>
  );
}
