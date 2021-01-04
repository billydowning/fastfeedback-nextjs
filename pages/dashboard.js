import DashboardShell from "@/components/DashboardShell";
import Overview from "@/components/Overview";
import EmptyState from "@/components/EmptyState";

import { useAuth } from "@/lib/auth";

const Dashboard = () => {
  // const auth = useAuth();

  // if (!auth.user) {
  //   return "Loading...";
  // }
  return (
    <DashboardShell>
      <EmptyState />
    </DashboardShell>
  );
};

export default Dashboard;
