import { Stack, Container } from "@mui/material";
import SimpleActionBar from "../../components/actionbar/SimpleActionBar";
import SummaryCard from "../../components/card/SummaryCard";
import MainTable from "../../components/table/MainTable";

const Billing: React.FC<any> = ({ sx }) => {
  return (
    <>
      <SimpleActionBar title="Billing" handleShare={undefined} />
      <Stack direction="row" spacing={8}>
        <SummaryCard heading="Most used item" subtitle="Promotions" />
      </Stack>
      <Container maxWidth={false} sx={{ margin: "2rem 0rem" }}>
        <MainTable rows={[]} columns={[]} />
      </Container>
    </>
  );
};

export default Billing;
