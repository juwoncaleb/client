import "@/styles/global.css";
import { ChakraProvider } from "@chakra-ui/react";
import Script from "next/script";

export default function App({ Component, pageProps }) {
  return (
    <>
    

      {/* Fallback for no-JS */}
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src="https://www.facebook.com/tr?id=1885228362366345&ev=PageView&noscript=1"
        />
      </noscript>

      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}
