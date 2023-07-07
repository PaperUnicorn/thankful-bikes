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

import AddCircleIcon from "@mui/icons-material/AddCircle";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import ShareIcon from "@mui/icons-material/Share";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 170 },
  { field: "firstName", headerName: "First name", width: 130 },
  { field: "lastName", headerName: "Last name", width: 130 },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 90,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

const SummaryCard = () => {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Total
        </Typography>
        <Typography variant="h5" component="div">
          14
        </Typography>
      </CardContent>
    </Card>
  );
};

const Users: React.FC<any> = ({ sx }) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h6" color="text.tertiary" gutterBottom>
          USERS
        </Typography>
        <Stack direction="row" spacing={2}>
          <ShareIcon />
          <FileDownloadIcon />
          <ModeEditIcon />
          <AddCircleIcon />
        </Stack>
      </Box>
      {/* <Stack direction="row" spacing={8}>
        <SummaryCard />
        <SummaryCard />
        <SummaryCard />
        <SummaryCard />
        <SummaryCard />
      </Stack> */}
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
          />
        </Paper>
      </Container>
    </>
  );
};

export default Users;
