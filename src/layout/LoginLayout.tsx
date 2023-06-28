import { Container, Grid } from "@mui/material";
import Login from "../pages/Authentication/Login";

const style = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    top: "50%",
  },
};

const LoginLayout: React.FC<any> = () => {
  return (
    <Grid
      container
      direction="column"
      justifyContent="flex-end"
      sx={{
        minHeight: "100vh",
      }}
    >
      <Grid item xs={12}>
        <Grid
          item
          xs={12}
          container
          justifyContent="center"
          alignItems="center"
          sx={{
            minHeight: { xs: "calc(100vh - 134px)", md: "calc(100vh - 112px)" },
          }}
        >
          <Grid item>
            <Login />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default LoginLayout;
