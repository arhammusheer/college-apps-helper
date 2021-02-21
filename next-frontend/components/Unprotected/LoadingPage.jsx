import { Center } from "@chakra-ui/layout";
import { Spinner } from "@chakra-ui/spinner";
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

        <div className={loader.loader} style={{ transform: "rotate(90deg)" }}>
          <svg viewBox="0 0 80 80">
            <circle id="test" cx="40" cy="40" r="32"></circle>
          </svg>
        </div>
        <div className={loader.loader} style={{ transform: "rotate(180deg)" }}>
          <svg viewBox="0 0 80 80">
            <circle id="test" cx="40" cy="40" r="32"></circle>
          </svg>
        </div>
      </Center>
    </>
  );
}
