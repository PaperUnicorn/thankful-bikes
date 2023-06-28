import { styled, useTheme } from "@mui/material/styles";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import StoreIcon from "@mui/icons-material/Store";
import PersonIcon from "@mui/icons-material/Person";
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

const list = () => (
  <List>
    <ListItem key={"Stores"} disablePadding>
      <ListItemButton>
        <ListItemIcon>
          <StoreIcon sx={{ color: "whitesmoke" }} />
        </ListItemIcon>
        <ListItemText primary={"Stores"} />
      </ListItemButton>
    </ListItem>
    <ListItem key={"Users"} disablePadding>
      <ListItemButton>
        <ListItemIcon>
          <PersonIcon sx={{ color: "whitesmoke" }} />
        </ListItemIcon>
        <ListItemText primary={"Users"} />
      </ListItemButton>
    </ListItem>
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
        width: 250,
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
