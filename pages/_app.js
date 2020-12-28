import Head from "next/head";
import "../styles/globals.css";
import { AuthProvider } from "@/lib/auth";
//import { ThemeProvider, CSSReset } from "@chakra-ui/react";
//import customTheme from "@/styles/theme";
//import { Global, css } from "@emotion/react";

const App = ({ Component, pageProps }) => {
  return (
    <div>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css"
        />
      </Head>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </div>
  );
};

export default App;
