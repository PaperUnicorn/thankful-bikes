import StoreIcon from "@mui/icons-material/Store";
import PersonIcon from "@mui/icons-material/Person";
import LayersIcon from "@mui/icons-material/Layers";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import CampaignIcon from "@mui/icons-material/Campaign";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import CalculateIcon from "@mui/icons-material/Calculate";
import CableIcon from "@mui/icons-material/Cable";
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
  {
    text: "Billing",
    link: "billing",
    icon: <CreditCardIcon sx={{ color: "whitesmoke" }} />,
  },
  {
    text: "Programs",
    link: "programs",
    icon: <ElectricBoltIcon sx={{ color: "whitesmoke" }} />,
  },
  {
    text: "Campaigns",
    link: "campaigns",
    icon: <CampaignIcon sx={{ color: "whitesmoke" }} />,
  },
  {
    text: "Analytics",
    link: "analytics",
    icon: <AnalyticsIcon sx={{ color: "whitesmoke" }} />,
  },
  {
    text: "Tools",
    link: "tools",
    icon: <CalculateIcon sx={{ color: "whitesmoke" }} />,
  },
  {
    text: "Integrations",
    link: "integrations",
    icon: <CableIcon sx={{ color: "whitesmoke" }} />,
  },
];
