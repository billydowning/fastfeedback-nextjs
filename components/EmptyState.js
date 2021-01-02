import React from "react";
import { useAuth } from "@/lib/auth";
import {
  Heading,
  Box,
  Text,
  Button,
  VStack,
  Stack,
  Container,
  Image,
  List,
  ListItem,
  Avatar,
  Flex,
} from "@chakra-ui/react";

import DashboardShell from "./DashboardShell";
import DogLogo from "@/components/DogLogo";
import SearchModal from "@/components/SearchModal";

const EmptyState = () => {
  const auth = useAuth();

  return (
    <>
      <DashboardShell>
        <Flex backgroundColor="#0A2540" height="vh">
          <Container minWidth="75vw" minHeight="75vh">
            <Flex justifyContent="center" />
            <Stack
              isInline
              justifyContent="space-between"
              m="20px"
              alignItems="flex-start"
            >
              <Stack spacing={4} backgroundColor="#0A2540" h="100vh">
                <Container>
                  <Stack
                    spacing={2}
                    alignItems="center"
                    justifyContent="center"
                    m={4}
                  >
                    <Image h="98" w="98" src="/park.svg" />
                  </Stack>
                  <Stack
                    spacing={2}
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Heading color="#c0c0c0" size="sm" textAlign="center">
                      You don't have any upcoming appointments, yet. Click the
                      button below to get started.
                    </Heading>
                  </Stack>
                  <Stack
                    spacing={2}
                    alignItems="center"
                    justifyContent="flex-start"
                    m={8}
                  >
                    <SearchModal />
                  </Stack>
                </Container>
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
      </DashboardShell>
    </>
  );
};

export default EmptyState;
