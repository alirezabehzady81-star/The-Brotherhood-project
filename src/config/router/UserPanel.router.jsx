import { Dashboard } from "../../components/Layouts/UserPanel/Dashboard/Dashboard";
import { UserProfile } from "../../components/Layouts/UserPanel/UserProfile/UserProfile";

const UserPanelRouter = [
  {
    path: "dashboard",
    element: <Dashboard />,
  },
  {
    path: "userProfile",
    element: <UserProfile />,
  },
];

export { UserPanelRouter };