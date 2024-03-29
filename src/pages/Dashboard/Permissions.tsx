import { Stack, Container } from "@mui/material";
import SimpleActionBar from "../../components/actionbar/SimpleActionBar";
import SummaryCard from "../../components/card/SummaryCard";
import MainTable from "../../components/table/MainTable";

const Permissions: React.FC<any> = ({ sx }) => {
  return (
    <>
      <SimpleActionBar title="Permissions" handleShare={undefined} />
      <Stack direction="row" spacing={8}>
        <SummaryCard heading="Total users" count="14" />
        <SummaryCard heading="Active users" count="10" />
        <SummaryCard heading="Inactive users" count="4" />
      </Stack>
      <Container maxWidth={false} sx={{ margin: "2rem 0rem" }}>
        <MainTable rows={[]} columns={[]} />
      </Container>
    </>
  );
};

export default Permissions;
