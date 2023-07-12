import { Stack, Container } from "@mui/material";
import SimpleActionBar from "../../components/actionbar/SimpleActionBar";
import SummaryCard from "../../components/card/SummaryCard";
import MainTable from "../../components/table/MainTable";

const Campaigns: React.FC<any> = ({ sx }) => {
  return (
    <>
      <SimpleActionBar title="Campaigns" handleShare={undefined} />
      <Stack direction="row" spacing={8}>
        <SummaryCard heading="This Campaign growth" subtitle="14%" />
      </Stack>
      <Container maxWidth={false} sx={{ margin: "2rem 0rem" }}>
        <MainTable rows={[]} columns={[]} />
      </Container>
    </>
  );
};

export default Campaigns;
