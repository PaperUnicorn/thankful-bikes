import LoginIcon from "@mui/icons-material/Login";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
// material-ui
import {
  Alert,
  Button,
  Card,
  CardActions,
  CardContent,
  Snackbar,
  TextField,
} from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { Navigate, redirect, useNavigate } from "react-router-dom";

const style = {
  card: {
    height: "40rem",
    width: "40rem",
    padding: "1rem",
    borderRadius: "10px",
  },
};

const schema = yup.object().shape({
  username: yup.string().min(4).max(100).required(),
  password: yup.string().min(4).max(100).required(),
});

const Login: React.FC<any> = ({ sx }) => {
  const [apiError, setApiError] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const login: SubmitHandler<{
    username: string;
    password: string;
  }> = async (values) => {
    try {
      const response = await axios.post(
        "http://localhost:8090/clp/v1/auth/login",
        values
      );
      localStorage.setItem("auth", response.data.access_token);
      console.log(response);
    } catch (err) {
      localStorage.setItem("auth", "auth with error");

      setApiError(true);
      console.log(err);
      navigate("/welcome/dashboard");
    }
    await console.log(values);
    reset();
  };

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setApiError(false);
  };

  return (
    <>
      <Card sx={style.card} variant="outlined">
        <CardContent>
          <h1>Login</h1>

          <TextField
            {...register("username")}
            name="username"
            fullWidth
            label="username"
            id="username"
            margin="normal"
            helperText={errors?.username?.message}
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
          <Button size="small">Forgot password ?</Button>
        </CardActions>
      </Card>
      <Snackbar open={apiError} autoHideDuration={6000} onClose={handleClose}>
        <Alert severity="error" sx={{ width: "100%" }}>
          Invalid Credentials
        </Alert>
      </Snackbar>
    </>
  );
};

export default Login;
