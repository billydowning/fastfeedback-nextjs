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
  Box,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
} from "@chakra-ui/react";
import { CalendarIcon } from "@chakra-ui/icons";

const ApptCardSkeleton = () => {
  const auth = useAuth();
  return (
    <Flex backgroundColor="#0A2540" height="vh">
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
            <Stack //Appt card starts here
              isInline
              justifyContent="space-around"
              alignItems="center"
              border="1px solid #C3C3C3"
              borderRadius={8}
              minWidth="40vw"
            >
              <Box padding="6" boxShadow="lg" bg="white" width="100%">
                <SkeletonCircle size="10" />
                <SkeletonText mt="4" noOfLines={4} />
              </Box>
            </Stack>
            <Stack //Appt card starts here
              isInline
              justifyContent="space-around"
              alignItems="center"
              border="1px solid #C3C3C3"
              borderRadius={8}
              minWidth="40vw"
            >
              <Box padding="6" boxShadow="lg" bg="white" width="100%">
                <SkeletonCircle size="10" />
                <SkeletonText mt="4" noOfLines={4} />
              </Box>
            </Stack>
            //Appt card ends here
          </Stack>
          <Stack spacing={2}>
            <Stack spacing={2} color="#c0c0c0">
              <Heading size="sm">Recent Activity:</Heading>
            </Stack>
            <Stack spacing={4}>
              <Skeleton height="20px" mt={2} />
              <Skeleton height="20px" />
              <Skeleton height="20px" />
              <Skeleton height="20px" />
              <Skeleton height="20px" />
              <Skeleton height="20px" />
              <Skeleton height="20px" />
              <Skeleton height="20px" />
              <Skeleton height="20px" />
              <Skeleton height="20px" />
              <Skeleton height="20px" />
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Flex>
  );
};

export default ApptCardSkeleton;
