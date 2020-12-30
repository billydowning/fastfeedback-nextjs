import React from "react";
import NextLink from "next/link";
import {
  ChakraProvider,
  Flex,
  Stack,
  Icon,
  Container,
  Link,
  Avatar,
  Heading,
  Input,
  List,
  ListItem,
  IconButton,
} from "@chakra-ui/react";
import { ArrowUpDownIcon, CalendarIcon } from "@chakra-ui/icons";
import DogLogo from "@/components/DogLogo";

import { useAuth } from "@/lib/auth";
//import Footer from './Footer';

const DashboardShell = ({ children }) => {
  const auth = useAuth();

  return (
    <ChakraProvider resetCSS>
      <Flex justifyContent="flex-start" flexDirection="column">
        <Flex
          justifyContent="space-between"
          alignItems="center"
          backgroundColor="#121212"
          border="1px solid #C3C3C3"
          height="10vh"
        >
          <Stack spacing={10} isInline alignItems="center" ml={8}>
            <NextLink href="/" passHref>
              <Link>
                <DogLogo h="64" w="64" />
              </Link>
            </NextLink>
            <Input placeholder="Search" variant="outline" color="#c0c0c0" />
          </Stack>
          <Stack
            spacing={8}
            isInline
            alignItems="center"
            color="#dbdbdb"
            mr={8}
          >
            <Link>Join Us</Link>
            <Link>Community</Link>
            <Link>Support</Link>
            <Link>Messages</Link>
            <NextLink href="/" passHref>
              <Link>
                <Avatar mr="20px" size="sm" src={auth.user?.photoUrl} />
              </Link>
            </NextLink>
          </Stack>
        </Flex>
        <Flex
          justifyContent="flex-start"
          backgroundColor="#111111"
          border="1px solid #C3C3C3"
          borderRadius={8}
        >
          <Container minWidth="75vw">
            <Flex
              flexDirection="row"
              justifyContent="flex-start"
              alignItems="center"
            >
              <Flex m="10px">
                <Avatar size="lg" src={auth.user?.photoUrl} />
              </Flex>
              <Stack spacing={2} m="10px">
                <Heading color="#c0c0c0" size="lg" mt="10px">
                  Billy Downing
                </Heading>
                <Heading size="sm" color="#c0c0c0">
                  Salt Lake City, UT
                </Heading>
                <Heading size="xs" color="#c0c0c0">
                  ID: 456789
                </Heading>
              </Stack>
            </Flex>
            <Stack spacing={2}>
              <Flex justifyContent="center">
                <Stack spacing={20} isInline color="#c0c0c0" m="15px">
                  <Link color="#c0c0c0">Overview</Link>
                  <Link color="#c0c0c0">Appointments</Link>
                  <Link color="#c0c0c0">My Providers</Link>
                  <Link color="#c0c0c0">My Localites</Link>
                  <Link>Invoices</Link>
                  <Link>Help</Link>
                </Stack>
              </Flex>
            </Stack>
          </Container>
        </Flex>
        {children}
      </Flex>
    </ChakraProvider>
  );
};

export default DashboardShell;
