import DashboardShell from "@/components/DashboardShell";
import { useAuth } from "@/lib/auth";

const Dashboard = () => {
  // const auth = useAuth();

  // if (!auth.user) {
  //   return "Loading...";
  // }

  return <DashboardShell />;
};

export default Dashboard;
