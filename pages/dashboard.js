import FreePlanEmptyState from "@/components/FreePlanEmptyState";
import { useAuth } from "@/lib/auth";

const Dashboard = () => {
  const auth = useAuth();

  if (!auth.user) {
    return "Loading...";
  }

  return <FreePlanEmptyState />;
};

export default Dashboard;
