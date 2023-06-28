import { Link } from "react-router-dom";
import LoginIcon from "@mui/icons-material/Login";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
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
    borderRadius: "10px",
  },
};

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(4).max(100).required(),
});

const Login: React.FC<any> = ({ sx }) => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const login: SubmitHandler<{
    email: string;
    password: string;
  }> = async (values) => {
    await console.log(values);
    reset();
  };

  return (
    <Card sx={style.card} variant="outlined">
      <CardContent>
        <h1>Login</h1>

        <TextField
          {...register("email")}
          name="email"
          fullWidth
          label="email"
          id="email"
          margin="normal"
          helperText={errors?.email?.message}
        />
        <TextField
          fullWidth
          label="password"
          id="password"
          margin="normal"
          type="password"
          {...register("password")}
          helperText={errors?.password?.message}
        />
      </CardContent>

      <CardActions>
        <Button
          sx={{ borderRadius: "10px" }}
          variant="contained"
          startIcon={<LoginIcon />}
          onClick={handleSubmit(login)}
        >
          Login
        </Button>
        <Button size="small">Register</Button>
      </CardActions>
    </Card>
  );
};

export default Login;
