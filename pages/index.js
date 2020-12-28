import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useAuth } from "@/lib/auth";
//import { Button, Heading, Text, Code, Icon } from "@chakra-ui/react";
import DogLogo from "@/components/Logo";

export default function Home() {
  const auth = useAuth();
  return (
    <div className={styles.container}>
      <Head>
        <title>Fast Feedback</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>I'm feeling supersonic</h1>
        <DogLogo />
        <h3>Current User: {auth.user ? auth.user.email : "None"}</h3>
        {auth.user ? (
          <button className="ui primary button" onClick={(e) => auth.signout()}>
            Sign Out
          </button>
        ) : (
          <div>
            <button
              className="ui primary button"
              style={{ margin: "10px" }}
              onClick={(e) => auth.signinWithGitHub()}
            >
              Sign In with Github
            </button>
            <button
              className="ui red button"
              style={{ margin: "10px" }}
              onClick={(e) => auth.signinWithGoogle()}
            >
              Sign In with Google
            </button>
          </div>
        )}
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
