import { Link } from "react-router-dom";
import LoginIcon from "@mui/icons-material/Login";
// material-ui
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";

const style = {
  card: {
    height: "40rem",
    width: "40rem",
    padding: "1rem",
  },
};

const Login: React.FC<any> = ({ sx }) => {
  const handleLogin = (event: any) => {
    event.preventDefault();
    console.log(event.target);
  };
  return (
    <Card sx={style.card} variant="outlined">
      <CardContent>
        <h1>Login</h1>

        <TextField fullWidth label="username" id="username" margin="normal" />
        <TextField
          fullWidth
          label="password"
          id="password"
          margin="normal"
          type="password"
        />
      </CardContent>

      <CardActions>
        <Button
          variant="contained"
          startIcon={<LoginIcon />}
          onClick={handleLogin}
        >
          Login
        </Button>
        <Button size="small">Register</Button>
      </CardActions>
    </Card>
  );
};

export default Login;
