import Head from "next/head";
import { AuthProvider } from "@/lib/auth";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import theme from "@/styles/theme";

const App = ({ Component, pageProps }) => {
  const myTheme = extendTheme(theme);

  return (
    <ChakraProvider theme={myTheme}>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </ChakraProvider>
  );
};

export default App;
