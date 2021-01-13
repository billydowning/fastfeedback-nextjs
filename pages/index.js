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
  ChakraProvider,
  extendTheme,
} from "@chakra-ui/react";
import Navbar from "@/components/Navbar";
import FadeEffect from "@/components/Fade";
import theme from "@/styles/theme";

const Home = () => {
  const auth = useAuth();
  const myTheme = extendTheme(theme);

  return (
    <ChakraProvider theme={myTheme}>
      <div>
        <Navbar />

        <Box
          backgroundColor="#0A2540"
          bgImage="url('/bg5.jpg')"
          bgPosition="center"
          bgSize="100%"
          opacity="80%"
          bgRepeat="no-repeat"
        >
          <VStack
            justifyContent="center"
            alignItems="center"
            h="100vh"
            spacing={4}
          >
            {auth.user ? (
              <>
                <Button colorScheme="red">
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
    </ChakraProvider>
  );
};

export default Home;
