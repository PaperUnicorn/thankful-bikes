import { Card, CardContent, Typography } from "@mui/material";

const SummaryCard: React.FC<{
  heading: string;
  count: string;
  subtitle?: string;
}> = ({ heading, count, subtitle }) => {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {heading}
        </Typography>
        <Typography variant="h5" component="div">
          {count}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default SummaryCard;
