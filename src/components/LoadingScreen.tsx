import { useEffect } from "react";
import type { FC } from "react";
import { Box } from "@mui/material";

const LoadingScreen: FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: "background.black",
        minHeight: "100%",
      }}
    />
  );
};

export default LoadingScreen;
