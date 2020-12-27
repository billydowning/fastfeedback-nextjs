import Head from "next/head";
//import "../styles/globals.css";
import { AuthProvider } from "@/lib/auth";
import { ThemeProvider, CSSReset } from "@chakra-ui/react";
import customTheme from "@/styles/theme";
import { Global, css } from "@emotion/react";

const GlobalStyle = ({ children }) => {
  return (
    <>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <CSSReset />
      <Global
        styles={css`
          html {
            scroll-behavior: smooth;
          }
          #__next {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
          }
        `}
      />
      {children}
    </>
  );
};

const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={customTheme}>
      <AuthProvider>
        <GlobalStyle />
        <Component {...pageProps} />
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App;

// <Head>
//   <link
//     rel="stylesheet"
//     href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css"
//     />
// </Head>
