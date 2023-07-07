import * as React from "react";
import {
  Avatar,
  Box,
  Breadcrumbs,
  Button,
  Card,
  CardHeader,
  IconButton,
  Link,
  Menu,
  MenuItem,
  Stack,
  Toolbar,
  Typography,
  styled,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import { useLocation } from "react-router";
import NotificationCard from "../../components/card/NotificationCard";
import { red } from "@mui/material/colors";
import { title } from "process";
import { menuItems } from "../Drawer/DrawerItems";

const drawerWidth = 240;

function stringToColor(string: string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

function stringAvatar(name: string) {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
  };
}

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  background: "white",
  color: "black",
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    background: "white",
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));
const NavBar: React.FC<{ openDrawer: boolean; setOpenDrawer: Function }> = ({
  openDrawer,
  setOpenDrawer,
}) => {
  const location = useLocation();
  const pathnames = location.pathname.split("/");

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [notifAnchorEl, setNotifAnchorEl] = React.useState<null | HTMLElement>(
    null
  );
  const notifOpen = Boolean(notifAnchorEl);
  const handleNotifClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setNotifAnchorEl(event.currentTarget);
  };
  const handleNotifClose = () => {
    setNotifAnchorEl(null);
  };

  return (
    <AppBar position="fixed" open={openDrawer}>
      <Toolbar>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Stack alignItems="center" direction="row">
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={() => {
                setOpenDrawer(true);
              }}
              edge="start"
              sx={{ mr: 2, ...(openDrawer && { display: "none" }) }}
            >
              <MenuIcon />
            </IconButton>

            <Breadcrumbs aria-label="breadcrumb">
              <Link underline="hover" color="inherit" href="/">
                Dashboard
              </Link>

              <Link
                underline="hover"
                color="inherit"
                href={pathnames[pathnames.length - 1]}
              >
                {
                  menuItems.find(
                    (e) =>
                      e.text.toUpperCase() ===
                      pathnames[pathnames.length - 1].toUpperCase()
                  )?.text
                }
              </Link>
            </Breadcrumbs>
          </Stack>
          <Box>
            <Box alignContent={"right"}>
              <Stack alignItems="center" direction="row">
                <Button
                  id="notif-button"
                  aria-controls={notifOpen ? "notif-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={notifOpen ? "true" : undefined}
                  onClick={handleNotifClick}
                >
                  <Avatar variant="rounded">
                    <NotificationsIcon />
                  </Avatar>
                </Button>

                <Menu
                  id="notif-menu"
                  anchorEl={notifAnchorEl}
                  open={notifOpen}
                  onClose={handleNotifClose}
                  MenuListProps={{
                    "aria-labelledby": "notif-button",
                  }}
                >
                  <NotificationCard
                    onClick={handleNotifClose}
                    title={"Notification"}
                    subtitle={"youve got mail"}
                  />
                  <NotificationCard
                    onClick={handleNotifClose}
                    title={"Notification"}
                    subtitle={"youve got mail"}
                  />
                  <NotificationCard
                    onClick={handleNotifClose}
                    title={"Notification"}
                    subtitle={"youve got mail"}
                  />
                  <Card sx={{ minWidth: "2rem" }}>
                    <CardHeader title={"see all"} />
                  </Card>
                </Menu>

                <Button
                  id="profile-button"
                  aria-controls={open ? "profile-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                >
                  <Avatar {...stringAvatar("Chinmay Kalegaonkar")} />
                </Button>
                <Menu
                  id="profile-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    "aria-labelledby": "profile-button",
                  }}
                >
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                  <MenuItem onClick={handleClose}>My account</MenuItem>
                  <MenuItem onClick={handleClose}>Logout</MenuItem>
                </Menu>
              </Stack>
            </Box>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
export default NavBar;
