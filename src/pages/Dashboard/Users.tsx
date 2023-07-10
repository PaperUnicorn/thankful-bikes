import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Checkbox,
  Container,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";

import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";

import SummaryCard from "../../components/card/SummaryCard";
import SimpleActionBar from "../../components/actionbar/SimpleActionBar";
import { useState } from "react";

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

const Users: React.FC<any> = ({ sx }) => {
  const [selectedRows, setSelectedRows] = useState([]:);
  return (
    <>
      <SimpleActionBar title="USERS" handleShare={handleShare} />
      <Stack direction="row" spacing={8}>
        <SummaryCard heading="Total users" count="14" />
        <SummaryCard heading="Active users" count="10" />
        <SummaryCard heading="Inactive users" count="4" />
      </Stack>
      <Container maxWidth={false} sx={{ margin: "2rem 0rem" }}>
        <Paper elevation={3}>
          <DataGrid
            rows={rows}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 10 },
              },
            }}
            pageSizeOptions={[10]}
            checkboxSelection
            sx={{ width: "100%", height: "120%" }}
            onRowSelectionModelChange={(ids) => {
              const selectedRowsData = ids.map((id) =>
                rows.find((row) => row.id === id)
              );
              setSelectedRows(selectedRowsData)
            }}
          />
        </Paper>
      </Container>
    </>
  );
};

export default Users;
