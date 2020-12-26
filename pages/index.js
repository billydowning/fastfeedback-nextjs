import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useAuth } from "../lib/auth";

export default function Home() {
  const auth = useAuth();
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>I'm feeling supersonic</h1>
        <button
          className="ui primary button"
          onClick={(e) => auth.signinWithGitHub()}
        >
          Sign In
        </button>
        <div>{auth?.user?.email}</div>
        {auth?.user && (
          <button className="ui primary button" onClick={(e) => auth.signout()}>
            Sign Out
          </button>
        )}
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
