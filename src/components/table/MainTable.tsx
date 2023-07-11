import { Paper } from "@mui/material";

import { DataGrid } from "@mui/x-data-grid";

const MainTable: React.FC<{
  rows: any[];
  columns: any;
}> = ({ rows, columns }) => {
  return (
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
          console.log(selectedRowsData);
        }}
      />
    </Paper>
  );
};

export default MainTable;
