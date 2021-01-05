import React from "react";
import { useAuth } from "@/lib/auth";
import { Stack, List, ListItem, Avatar, Heading } from "@chakra-ui/react";

const ActivityFeed = () => {
  const auth = useAuth();
  return (
    <>
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
          </Stack>
        </List>
      </Stack>
    </>
  );
};

export default ActivityFeed;
