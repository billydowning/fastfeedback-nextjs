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
} from "@chakra-ui/react";

import DashboardShell from "./DashboardShell";
import DogLogo from "@/components/DogLogo";

const EmptyState = () => {
  const auth = useAuth();

  return (
    <DashboardShell>
      <Stack spacing={8} backgroundColor="#121212" h="100vh">
        <Container>
          <Stack spacing={2} alignItems="center" justifyContent="center" m={8}>
            <Image h="98" w="98" src="/park.svg" />
          </Stack>
          <Stack spacing={2} alignItems="center" justifyContent="center">
            <Heading color="#c0c0c0" size="sm" textAlign="center">
              You don't have any upcoming appointments, yet. Click the button
              below to get started.
            </Heading>
          </Stack>
          <Stack
            spacing={2}
            alignItems="center"
            justifyContent="flex-start"
            m={8}
          >
            <Button variant="solid" size="md">
              Explore YrLang
            </Button>
          </Stack>
        </Container>
      </Stack>
    </DashboardShell>
  );
};

export default EmptyState;
