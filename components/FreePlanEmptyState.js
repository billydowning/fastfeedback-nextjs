import React from "react";
import { Heading, Box, Text, Button, VStack } from "@chakra-ui/react";

import DashboardShell from "./DashboardShell";

const FreePlanEmptyState = () => (
  <DashboardShell>
    <Box width="100%" backgroundColor="white" borderRadius="8px" p={8}>
      <VStack justifyContent="center" alignItems="center" spacing={4}>
        <Heading size="md">Get feedback on your site instantly.</Heading>
        <Text>Start today, then grow with us 🌱</Text>
        <Button>Upgrade to Starter</Button>
      </VStack>
    </Box>
  </DashboardShell>
);

export default FreePlanEmptyState;
