import React from "react";
import NextLink from "next/link";
import { useAuth } from "@/lib/auth";
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
import { CalendarIcon } from "@chakra-ui/icons";

import DashboardShell from "./DashboardShell";

const Overview = () => {
  const auth = useAuth();
  return (
    <Flex backgroundColor="#111111" height="vh">
      <Container minWidth="75vw" minHeight="75vh">
        <Flex justifyContent="center" />
        <Stack
          isInline
          justifyContent="space-between"
          m="20px"
          alignItems="flex-start"
        >
          <Stack spacing={4}>
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
                <Avatar size="lg" mr="25px" src={auth.user?.photoUrl} />
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
                <Avatar size="lg" mr="25px" src={auth.user?.photoUrl} />
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
                <Avatar size="lg" mr="25px" src={auth.user?.photoUrl} />
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
                    <Avatar size="xs" src={auth.user?.photoUrl} />
                    <ListItem color="#c0c0c0">Activity item</ListItem>
                    <ListItem color="#c0c0c0">1h</ListItem>
                  </Stack>
                  <Stack spacing={4} isInline>
                    <Avatar size="xs" src={auth.user?.photoUrl} />
                    <ListItem color="#c0c0c0">Activity item</ListItem>
                    <ListItem color="#c0c0c0">2h</ListItem>
                  </Stack>
                  <Stack spacing={4} isInline>
                    <Avatar size="xs" src={auth.user?.photoUrl} />
                    <ListItem color="#c0c0c0">Activity item</ListItem>
                    <ListItem color="#c0c0c0">4h</ListItem>
                  </Stack>
                  <Stack spacing={4} isInline>
                    <Avatar size="xs" src={auth.user?.photoUrl} />
                    <ListItem color="#c0c0c0">Activity item</ListItem>
                    <ListItem color="#c0c0c0">6h</ListItem>
                  </Stack>
                  <Stack spacing={4} isInline>
                    <Avatar size="xs" src={auth.user?.photoUrl} />
                    <ListItem color="#c0c0c0">Activity item</ListItem>
                    <ListItem color="#c0c0c0">1d</ListItem>
                  </Stack>
                  <Stack spacing={4} isInline>
                    <Avatar size="xs" src={auth.user?.photoUrl} />
                    <ListItem color="#c0c0c0">Activity item</ListItem>
                    <ListItem color="#c0c0c0">1d</ListItem>
                  </Stack>
                  <Stack spacing={4} isInline>
                    <Avatar size="xs" src={auth.user?.photoUrl} />
                    <ListItem color="#c0c0c0">Activity item</ListItem>
                    <ListItem color="#c0c0c0">2d</ListItem>
                  </Stack>
                  <Stack spacing={4} isInline>
                    <Avatar size="xs" src={auth.user?.photoUrl} />
                    <ListItem color="#c0c0c0">Activity item</ListItem>
                    <ListItem color="#c0c0c0">2d</ListItem>
                  </Stack>
                  <Stack spacing={4} isInline>
                    <Avatar size="xs" src={auth.user?.photoUrl} />
                    <ListItem color="#c0c0c0">Activity item</ListItem>
                    <ListItem color="#c0c0c0">3d</ListItem>
                  </Stack>
                  <Stack spacing={4} isInline>
                    <Avatar size="xs" src={auth.user?.photoUrl} />
                    <ListItem color="#c0c0c0">Activity item</ListItem>
                    <ListItem color="#c0c0c0">5d</ListItem>
                  </Stack>
                </Stack>
              </List>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Flex>
  );
};

export default Overview;
