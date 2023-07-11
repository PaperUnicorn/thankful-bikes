import { Box, Stack, Typography } from "@mui/material";

import AddCircleIcon from "@mui/icons-material/AddCircle";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import ShareIcon from "@mui/icons-material/Share";

const SimpleActionBar: React.FC<{
  title: string;
  handleShare?: Function;
  handleDownload?: Function;
  handleEdit?: Function;
  handleAdd?: Function;
}> = ({ title, handleShare, handleDownload, handleEdit, handleAdd }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Typography variant="h6" color="text.tertiary" gutterBottom>
        {title}
      </Typography>
      <Stack direction="row" spacing={2}>
        <ShareIcon
          onClick={() => {
            handleShare && handleShare();
          }}
        />

        <FileDownloadIcon
          onClick={() => {
            handleDownload && handleDownload();
          }}
        />
        <ModeEditIcon
          onClick={() => {
            handleEdit && handleEdit();
          }}
        />
        <AddCircleIcon
          onClick={() => {
            handleAdd && handleAdd();
          }}
        />
      </Stack>
    </Box>
  );
};

export default SimpleActionBar;
