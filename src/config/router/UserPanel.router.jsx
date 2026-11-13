import { Dashboard } from "../../components/Layouts/AuthLayout/UserPanel/Layout/Dashboard/Dashboard" ;
import { UserProfile } from "../../components/Layouts/AuthLayout/UserPanel/Layout/UserProfile/UserProfile";

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