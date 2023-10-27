import React from "react";
import { useState } from "react";
import axios from "../config/axios";

import { Box, Button, TextField } from "@mui/material";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = () => {
    let user = { username, password };
    axios
      .post("/login", user)
      .then((res) => {
        console.log("Respuesta del servidor:", res);
        console.log("Valor del token:", res.data.token);
        localStorage.setItem("token", res.data.token);
      })
      .catch((err) => {
        console.log("Error al intentar autenticar:", err);
      });
  };
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        label="username"
        variant="standard"
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <TextField
        label="password"
        variant="standard"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <Button variant="contained" onClick={handleClick}>
        Login
      </Button>
    </Box>
  );
}

export default Login;
