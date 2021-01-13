import DashboardShell from "@/components/DashboardShell";
import Overview from "@/components/Overview";
import EmptyState from "@/components/EmptyState";
import ApptCardSkeleton from "@/components/ApptCardSkeleton";
import useSWR from "swr";
import fetcher from "@/utils/fetcher";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import theme from "@/styles/theme";

import { useAuth } from "@/lib/auth";

const Dashboard = () => {
  const auth = useAuth();
  const { data } = useSWR("/api/appts", fetcher);
  const myTheme = extendTheme(theme);

  console.log(data);

  if (!auth.user) {
    return (
      <ChakraProvider theme={myTheme}>
        <DashboardShell>
          <ApptCardSkeleton />
        </DashboardShell>
      </ChakraProvider>
    );
  }

  return (
    <ChakraProvider theme={myTheme}>
      <DashboardShell>
        <EmptyState />
      </DashboardShell>
    </ChakraProvider>
  );
};

export default Dashboard;
