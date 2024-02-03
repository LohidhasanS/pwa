import { Navigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import QuestionsScreen from "../screens/QuestionsScreen";
import SuccessScreen from "../screens/SuccessScreen";
import LoginScreen from "../screens/LoginScreen";

const MainRoutes = {
  path: "/",
  element: <MainLayout />,
  children: [
    {
      path: "/",
      element: <Navigate to="login" replace />,
    },
    {
      path: "/login",
      element: <LoginScreen />,
    },
    {
      path: "/questions",
      element: <QuestionsScreen />,
    },
    {
      path: "/success-screen",
      element: <SuccessScreen />,
    },
  ],
};
export default MainRoutes;
