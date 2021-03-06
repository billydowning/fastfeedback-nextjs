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

import SearchModal from "@/components/SearchModal";
import ActivityFeed from "@/components/ActivityFeed";

const EmptyState = () => {
  const auth = useAuth();

  return (
    <>
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
                <Stack spacing={2} alignItems="center" justifyContent="center">
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
              <ActivityFeed />
            </Stack>
          </Stack>
        </Container>
      </Flex>
    </>
  );
};

export default EmptyState;
