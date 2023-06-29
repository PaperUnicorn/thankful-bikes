import {
  Box,
  Container,
  CssBaseline,
  Grid,
  Paper,
  styled,
  useTheme,
} from "@mui/material";
import ToolDrawer from "./Drawer/ToolDrawer";
import { useState } from "react";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import NavBar from "./Header/Navbar";
import { Outlet } from "react-router-dom";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  width: "100%",
  padding: theme.spacing(1),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const MainLayout: React.FC<any> = ({ sx }) => {
  const [openDrawer, setOpenDrawer] = useState(true);
  return (
    <Box sx={{ display: "flex", width: "100%" }}>
      <CssBaseline />
      <NavBar openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />
      <ToolDrawer open={openDrawer} setOpen={setOpenDrawer} />

      <Main open={openDrawer}>
        <DrawerHeader />
        <Outlet />
      </Main>
    </Box>
  );
};

export default MainLayout;
