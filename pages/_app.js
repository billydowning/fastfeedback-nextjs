import Head from "next/head";
import "../styles/globals.css";
import { AuthProvider } from "../lib/auth";

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css"
        />
      </Head>
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;
