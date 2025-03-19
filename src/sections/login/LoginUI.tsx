import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  Snackbar,
  Alert,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { useAuth } from "../../hooks/UseAuth";

interface FormData {
  username: string;
  password: string;
}
const LoginUI: React.FC = () => {
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [errormsg, seterrormsg] = useState(false);
  const [loading,setloading]=useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const { mutate } = useAuth();
  const handleCredentials = (data: FormData) => {
    setloading(true);
    mutate(data, {
      onError: (error: any) => {
        seterrormsg(error.message || "Something went wrong");
        setSnackbarOpen(true);
      },
    });
  };

  return (
    //  make the snackbar top right in body
    <>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={() => setSnackbarOpen(false)}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert onClose={() => setSnackbarOpen(false)} severity="error">
          {errormsg}
        </Alert>
      </Snackbar>

      <Box
        sx={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #fdfbfb 0%, #ebedee 100%)",
        }}
      >
        <Paper
          elevation={10}
          sx={{
            padding: 4,
            borderRadius: 3,
            maxWidth: 400,
            textAlign: "center",
            background: "rgba(255, 255, 255, 0.8)",
            backdropFilter: "blur(10px)",
            color: "#333",
          }}
        >
          <Typography variant="h4" gutterBottom fontWeight="bold" color="#333">
            Welcome Back
          </Typography>
          <Typography variant="body2" gutterBottom color="#555">
            Please enter your details to sign in.
          </Typography>
          <form onSubmit={handleSubmit(handleCredentials)}>
            <TextField
              fullWidth
              label="Email"
              variant="outlined"
              margin="normal"
              {...register("username", { required: "Email is required" })}
              error={!!errors.username}
              sx={{ input: { color: "#333" }, label: { color: "#777" } }}
            />
            <TextField
              fullWidth
              label="Password"
              type="password"
              variant="outlined"
              margin="normal"
              {...register("password", { required: "Password is required" })}
              error={!!errors.password}
              sx={{ input: { color: "#333" }, label: { color: "#777" } }}
            />
            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{
                mt: 2,
                bgcolor: "#ff6f61",
                "&:hover": { bgcolor: "#ff3b30" },
                padding: 1,
                fontSize: "1.1rem",
              }}
            >
              {loading?"Signing In...":"Sign In"}
            </Button>
          </form>

          <Typography variant="body2" sx={{ mt: 2, color: "#555" }}>
            Don't have an account?{" "}
            <span style={{ color: "#ff3b30" }}>Sign Up</span>
          </Typography>
        </Paper>
      </Box>
    </>
  );
};

export default LoginUI;
