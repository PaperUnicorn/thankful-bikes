import { Avatar, Card, CardHeader, IconButton } from "@mui/material";
import { red } from "@mui/material/colors";
import React from "react";

const NotificationCard: React.FC<any> = ({ type, title, subtitle }) => {
  return (
    <Card sx={{ minWidth: "20rem" }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            !
          </Avatar>
        }
        title={title}
        subheader={subtitle}
      />
    </Card>
  );
};

export default NotificationCard;
