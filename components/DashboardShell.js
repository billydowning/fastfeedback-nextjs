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
          <Stack spacing={10} isInline alignItems="center">
            <ArrowUpDownIcon
              ml="10px"
              width="32px"
              height="32px"
              color="#f3f3f3"
            />
            <Input placeholder="Search" variant="outline" color="#c0c0c0" />
          </Stack>
          <Stack spacing={8} isInline alignItems="center" color="#dbdbdb">
            <Link>Join Us</Link>
            <Link>Community</Link>
            <Link>Support</Link>
            <Link>Messages</Link>
            <Avatar mr="20px" size="sm" />
          </Stack>
        </Flex>
        <Flex
          justifyContent="flex-start"
          backgroundColor="#111111"
          border="1px solid #C3C3C3"
        >
          <Container minWidth="75vw">
            <Flex
              flexDirection="row"
              justifyContent="flex-start"
              alignItems="center"
            >
              <Flex m="10px">
                <Avatar size="lg" />
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
        <Flex backgroundColor="#111111" height="vh">
          <Container minWidth="75vw" minHeight="75vh">
            <Flex justifyContent="center" />
            <Stack
              isInline
              justifyContent="space-between"
              m="20px"
              alignItems="flex-start"
            >
              <Stack spacing={2}>
                <Stack spacing={2}>
                  <Heading color="#c0c0c0" size="sm">
                    Upcoming Appointments:
                  </Heading>
                </Stack>
                <Stack
                  spacing={20}
                  isInline
                  justifyContent="space-around"
                  alignItems="center"
                  border="1px solid #C3C3C3"
                  borderRadius={8}
                  minWidth="40vw"
                >
                  <Stack
                    spacing={2}
                    isInline
                    justifyContent="flex-start"
                    alignItems="center"
                  >
                    <Avatar size="md" mr="25px" />
                    <List>
                      <ListItem color="#c0c0c0">Name:</ListItem>
                      <ListItem color="#c0c0c0">Date: </ListItem>
                      <ListItem color="#c0c0c0">Time:</ListItem>
                      <ListItem color="#c0c0c0">Location:</ListItem>
                      <ListItem color="#c0c0c0">Status:</ListItem>
                    </List>
                  </Stack>
                  <Stack spacing={2}>
                    <IconButton
                      aria-label="icon"
                      icon={<CalendarIcon />}
                      size="md"
                    />
                  </Stack>
                </Stack>
                <Stack
                  spacing={20}
                  isInline
                  justifyContent="space-around"
                  alignItems="center"
                  border="1px solid #C3C3C3"
                  borderRadius={8}
                  minWidth="40vw"
                >
                  <Stack
                    spacing={2}
                    isInline
                    justifyContent="flex-start"
                    alignItems="center"
                  >
                    <Avatar size="md" mr="25px" />
                    <List>
                      <ListItem color="#c0c0c0">Name:</ListItem>
                      <ListItem color="#c0c0c0">Date: </ListItem>
                      <ListItem color="#c0c0c0">Time:</ListItem>
                      <ListItem color="#c0c0c0">Location:</ListItem>
                      <ListItem color="#c0c0c0">Status:</ListItem>
                    </List>
                  </Stack>
                  <Stack spacing={2}>
                    <IconButton
                      aria-label="icon"
                      icon={<CalendarIcon />}
                      size="md"
                    />
                  </Stack>
                </Stack>
                <Stack
                  spacing={20}
                  isInline
                  justifyContent="space-around"
                  alignItems="center"
                  border="1px solid #C3C3C3"
                  borderRadius={8}
                  minWidth="40vw"
                >
                  <Stack
                    spacing={2}
                    isInline
                    justifyContent="flex-start"
                    alignItems="center"
                  >
                    <Avatar size="md" mr="25px" />
                    <List>
                      <ListItem color="#c0c0c0">Name:</ListItem>
                      <ListItem color="#c0c0c0">Date: </ListItem>
                      <ListItem color="#c0c0c0">Time:</ListItem>
                      <ListItem color="#c0c0c0">Location:</ListItem>
                      <ListItem color="#c0c0c0">Status:</ListItem>
                    </List>
                  </Stack>
                  <Stack spacing={2}>
                    <IconButton
                      aria-label="icon"
                      icon={<CalendarIcon />}
                      size="md"
                    />
                  </Stack>
                </Stack>
              </Stack>
              <Stack spacing={2}>
                <Stack spacing={2} color="#c0c0c0">
                  <Heading size="sm">Recent Activity:</Heading>
                </Stack>
                <Stack>
                  <List>
                    <Stack spacing={4}>
                      <Stack spacing={4} isInline>
                        <Avatar size="xs" />
                        <ListItem color="#c0c0c0">Activity item</ListItem>
                      </Stack>
                      <Stack spacing={4} isInline>
                        <Avatar size="xs" />
                        <ListItem color="#c0c0c0">Activity item</ListItem>
                      </Stack>
                      <Stack spacing={4} isInline>
                        <Avatar size="xs" />
                        <ListItem color="#c0c0c0">Activity item</ListItem>
                      </Stack>
                      <Stack spacing={4} isInline>
                        <Avatar size="xs" />
                        <ListItem color="#c0c0c0">Activity item</ListItem>
                      </Stack>
                      <Stack spacing={4} isInline>
                        <Avatar size="xs" />
                        <ListItem color="#c0c0c0">Activity item</ListItem>
                      </Stack>
                      <Stack spacing={4} isInline>
                        <Avatar size="xs" />
                        <ListItem color="#c0c0c0">Activity item</ListItem>
                      </Stack>
                      <Stack spacing={4} isInline>
                        <Avatar size="xs" />
                        <ListItem color="#c0c0c0">Activity item</ListItem>
                      </Stack>
                      <Stack spacing={4} isInline>
                        <Avatar size="xs" />
                        <ListItem color="#c0c0c0">Activity item</ListItem>
                      </Stack>
                      <Stack spacing={4} isInline>
                        <Avatar size="xs" />
                        <ListItem color="#c0c0c0">Activity item</ListItem>
                      </Stack>
                      <Stack spacing={4} isInline>
                        <Avatar size="xs" />
                        <ListItem color="#c0c0c0">Activity item</ListItem>
                      </Stack>
                    </Stack>
                  </List>
                </Stack>
              </Stack>
            </Stack>
          </Container>
        </Flex>
      </Flex>
    </ChakraProvider>
  );
};

export default DashboardShell;
