import { Suspense } from "react";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <Box flex={1}>
      <Suspense fallback="Loading...">
        <Outlet />
      </Suspense>
    </Box>
  );
};
export default MainLayout;
