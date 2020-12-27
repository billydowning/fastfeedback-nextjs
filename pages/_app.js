import Head from "next/head";
//import "../styles/globals.css";
import { AuthProvider } from "../lib/auth";
import { ThemeProvider, CSSReset } from "@chakra-ui/react";
import customTheme from "../styles/theme";

const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={customTheme}>
      <AuthProvider>
        <CSSReset />
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
