import { redirect } from "next/navigation";

const Dashboard = () => {
  redirect('/dashboard/posts');
};

export default Dashboard;