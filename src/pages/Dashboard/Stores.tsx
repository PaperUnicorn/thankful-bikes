import { Stack, Container } from "@mui/material";
import SimpleActionBar from "../../components/actionbar/SimpleActionBar";
import SummaryCard from "../../components/card/SummaryCard";
import MainTable from "../../components/table/MainTable";

const Stores: React.FC<any> = ({ sx }) => {
  return (
    <>
      <SimpleActionBar title="Stores" handleShare={undefined} />
      <Stack direction="row" spacing={8}>
        <SummaryCard heading="Active Stores" count="9" />
      </Stack>
      <Container maxWidth={false} sx={{ margin: "2rem 0rem" }}>
        <MainTable rows={[]} columns={[]} />
      </Container>
    </>
  );
};

export default Stores;
