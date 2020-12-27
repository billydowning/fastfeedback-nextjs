import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useAuth } from "../lib/auth";
import { Button, Heading, Text, Code } from "@chakra-ui/react";

export default function Home() {
  const auth = useAuth();
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Heading fontWeight="medium">I'm feeling supersonic</Heading>
        <Text>Current User: {auth.user ? auth.user.email : "None"}</Text>
        {auth.user ? (
          <Button className="ui primary button" onClick={(e) => auth.signout()}>
            Sign Out
          </Button>
        ) : (
          <div>
            <Button
              className="ui primary button"
              style={{ margin: "10px" }}
              onClick={(e) => auth.signinWithGitHub()}
            >
              Sign In with Github
            </Button>
            <Button
              className="ui red button"
              style={{ margin: "10px" }}
              onClick={(e) => auth.signinWithGoogle()}
            >
              Sign In with Google
            </Button>
          </div>
        )}
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
