import { Container, Stack } from "@mui/material";

import { GridColDef } from "@mui/x-data-grid";

import SummaryCard from "../../components/card/SummaryCard";
import SimpleActionBar from "../../components/actionbar/SimpleActionBar";
import MainTable from "../../components/table/MainTable";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 170 },
  { field: "username", headerName: "User name", width: 130 },
  { field: "email", headerName: "Email", width: 130 },
  {
    field: "role",
    headerName: "Role",
    width: 90,
  },
  {
    field: "store",
    headerName: "Store",
    width: 160,
  },
];

const rows = [
  { id: 1, username: "Snow", email: "Jon", role: "manager" },
  { id: 2, username: "Lannister", email: "Cersei", role: "cashier" },
  { id: 3, username: "Lannister", email: "Jaime", role: "BDE" },
  { id: 4, username: "Stark", email: "Arya", role: "BDE" },
  { id: 5, username: "Targaryen", email: "Daenerys", role: "cashier" },
  { id: 6, username: "Melisandre", email: null, role: "BDE" },
  { id: 7, username: "Clifford", email: "Ferrara", role: "BDE" },
  { id: 8, username: "Frances", email: "Rossini", role: "BDE" },
  { id: 9, username: "Roxie", email: "Harvey", role: "cashier" },
];

const handleShare = () => {
  console.log(`clicked`);
};

const Users: React.FC<any> = () => {
  return (
    <>
      <SimpleActionBar title="USERS" handleShare={handleShare} />
      <Stack direction="row" spacing={8}>
        <SummaryCard heading="Total users" count="14" />
        <SummaryCard heading="Active users" count="10" />
        <SummaryCard heading="Inactive users" count="4" />
      </Stack>
      <Container maxWidth={false} sx={{ margin: "2rem 0rem" }}>
        <MainTable rows={rows} columns={columns} />
      </Container>
    </>
  );
};

export default Users;
