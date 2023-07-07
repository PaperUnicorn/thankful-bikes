import StoreIcon from "@mui/icons-material/Store";
import PersonIcon from "@mui/icons-material/Person";
import LayersIcon from "@mui/icons-material/Layers";
export const menuItems = [
  {
    text: "Stores",
    link: "stores",
    icon: <StoreIcon sx={{ color: "whitesmoke" }} />,
  },
  {
    text: "Users",
    link: "users",
    icon: <PersonIcon sx={{ color: "whitesmoke" }} />,
  },
  {
    text: "Permissions",
    link: "permissions",
    icon: <LayersIcon sx={{ color: "whitesmoke" }} />,
  },
];
