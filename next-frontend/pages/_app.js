import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "next-auth/client";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Provider session={pageProps.session}>
        <Component {...pageProps} />
      </Provider>
    </ChakraProvider>
  );
}
