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
import Navbar from "@/components/Navbar";
import FadeEffect from "@/components/Fade";

const Home = () => {
  const auth = useAuth();

  return (
    <div>
      <Navbar />

      <Box
        backgroundColor="#0A2540"
        bgImage="url('/bg1.jpg')"
        bgPosition="center"
      >
        <VStack
          justifyContent="center"
          alignItems="center"
          h="100vh"
          spacing={4}
        >
          <FadeEffect>
            <Heading size="3xl" color="#0A2540" mb={8}>
              I'm feeling supersonic
            </Heading>
          </FadeEffect>
          <Image h="64" w="64" src="/snow_globe.svg" />
          {auth.user ? (
            <>
              <Button>
                <NextLink href="/dashboard" passHref>
                  Dashboard
                </NextLink>
              </Button>
            </>
          ) : (
            <div></div>
          )}
        </VStack>
      </Box>
    </div>
  );
};

export default Home;
