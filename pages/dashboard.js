import DashboardShell from "@/components/DashboardShell";
import Overview from "@/components/Overview";

import { useAuth } from "@/lib/auth";

const dashboard = () => {
  // const auth = useAuth();

  // if (!auth.user) {
  //   return "Loading...";
  // }

  return <Overview />;
};

export default dashboard;
