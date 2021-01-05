import React from "react";
import NextLink from "next/link";
import { useAuth } from "@/lib/auth";
import {
  Flex,
  Stack,
  Icon,
  Container,
  Link,
  Avatar,
  Heading,
  List,
  ListItem,
  Box,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
} from "@chakra-ui/react";

const ActivityFeedSkeleton = () => {
  const auth = useAuth();
  return (
    <Stack spacing={2}>
      <Stack spacing={2} color="#c0c0c0">
        <Heading size="sm">Recent Activity:</Heading>
      </Stack>
      <Stack spacing={6}>
        <Skeleton height="20px" mt={2} />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
      </Stack>
    </Stack>
  );
};

export default ActivityFeedSkeleton;
