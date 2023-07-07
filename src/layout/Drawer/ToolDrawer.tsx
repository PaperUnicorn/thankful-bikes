import { styled, useTheme } from "@mui/material/styles";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import {
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Link } from "react-router-dom";
import { menuItems } from "./DrawerItems";

const list = () => (
  <List>
    {menuItems.map((item, index) => {
      return (
        <ListItem key={index} disablePadding>
          <ListItemButton component={Link} to={item.link}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItemButton>
        </ListItem>
      );
    })}
  </List>
);

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const ToolDrawer: React.FC<{ open: boolean; setOpen: Function }> = ({
  open,
  setOpen,
}) => {
  const theme = useTheme();
  return (
    <Drawer
      sx={{
        width: 240,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: 240,
          boxSizing: "border-box",
          background: "#212529",
          color: "white",
        },
      }}
      variant="persistent"
      anchor="left"
      open={open}
    >
      <DrawerHeader>
        <IconButton onClick={() => setOpen(false)}>
          <ChevronLeftIcon sx={{ color: "whitesmoke" }} />
        </IconButton>
      </DrawerHeader>
      {list()}
    </Drawer>
  );
};

export default ToolDrawer;
