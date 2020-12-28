import Head from "next/head";
import NextLink from "next/link";
import styles from "../styles/Home.module.css";
import { useAuth } from "@/lib/auth";
import {
  Button,
  Heading,
  Text,
  Code,
  Icon,
  Box,
  Flex,
  VStack,
  Link,
} from "@chakra-ui/react";
import DogLogo from "@/components/DogLogo";
import Menu from "@/components/Menu";

export default function Home() {
  const auth = useAuth();
  return (
    <div>
      <Head>
        <title>Fast Feedback</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box>
        <VStack
          justifyContent="center"
          alignItems="center"
          h="100vh"
          spacing={6}
        >
          <Heading size="3xl">I'm feeling supersonic</Heading>
          <DogLogo w="128" h="128" />
          <h3>Current User: {auth.user ? auth.user.email : "None"}</h3>
          {auth.user ? (
            <>
              <Button onClick={(e) => auth.signout()}>Sign Out</Button>
              <Button>
                <NextLink href="/dashboard" passHref>
                  <Link mr={4} ml={4}>
                    Dashboard
                  </Link>
                </NextLink>
              </Button>
            </>
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
        </VStack>
      </Box>
    </div>
  );
}
