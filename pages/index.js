import Head from "next/head";
import NextLink from "next/link";
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
  Image,
} from "@chakra-ui/react";
import DogLogo from "@/components/DogLogo";

const Home = () => {
  const auth = useAuth();
  return (
    <div>
      <Head>
        <title>YrLang.com</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box backgroundColor="#121212">
        <VStack
          justifyContent="center"
          alignItems="center"
          h="100vh"
          spacing={4}
        >
          <Heading size="3xl" color="#c0c0c0" mb={8}>
            I'm feeling supersonic
          </Heading>
          <Image h="64" w="64" src="/snow_globe.svg" />
          <Heading size="md" color="#c0c0c0">
            Current User: {auth.user ? auth.user.email : "None"}
          </Heading>
          {auth.user ? (
            <>
              <Button onClick={(e) => auth.signout()}>Sign Out</Button>
              <Button>
                <NextLink href="/dashboard" passHref>
                  Dashboard
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
};

export default Home;
