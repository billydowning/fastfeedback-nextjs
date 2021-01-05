import DashboardShell from "@/components/DashboardShell";
import Overview from "@/components/Overview";
import EmptyState from "@/components/EmptyState";
import ApptCardSkeleton from "@/components/ApptCardSkeleton";
import useSWR from "swr";
import fetcher from "@/utils/fetcher";

import { useAuth } from "@/lib/auth";

const Dashboard = () => {
  const auth = useAuth();
  const { data } = useSWR("/api/appts", fetcher);

  console.log(data);

  if (!auth.user) {
    return (
      <DashboardShell>
        <ApptCardSkeleton />
      </DashboardShell>
    );
  }

  return (
    <DashboardShell>
      <EmptyState />
    </DashboardShell>
  );
};

export default Dashboard;
