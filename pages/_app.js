import Head from "next/head";
import { AuthProvider } from "@/lib/auth";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "@/styles/theme";
import { Global, css } from "@emotion/react";

const App = ({ Component, pageProps }) => {
  const GlobalStyle = ({ children }) => {
    return (
      <>
        <Head>
          <meta content="width=device-width, initial-scale=1" name="viewport" />
          <title>YrLang.com</title>
        </Head>
        <Global
          styles={css`
            html {
              scroll-behavior: smooth;
            }
            #__next {
              display: flex;
              flex-direction: column;
              min-height: "100vh";
            }
            @font-face {
              font-family: "Inter";
            }
          `}
        />
        {children}
      </>
    );
  };
  return (
    <ChakraProvider theme={theme}>
      <AuthProvider>
        <GlobalStyle />
        <Component {...pageProps} />
      </AuthProvider>
    </ChakraProvider>
  );
};

export default App;
