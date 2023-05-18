import { Box, Button, FormLabel, TextField } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate()

  const [username,setUsername]=useState('')
  const [password,setPassword]= useState('')

  const submitHandler =()=>{
    if(username ==='admin' && password==='1234'){
      window.alert('Login Successful!')
      navigate('/')
    }else{
      window.alert('Invalid credentials')
    }
  }

  const handleUserNameChange =(e)=>{
    setUsername(e.target.value)
  }

  const handlePasswordChange =(e)=>{
    setPassword(e.target.value)
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent={"center"}
          maxWidth={400}
          alignContent={"center"}
          alignSelf={"center"}
          marginLeft={"auto"}
          marginRight={"auto"}
          marginTop={8}
        >
          
          <FormLabel>User Name</FormLabel>
          <TextField
            value={username}
            onChange={handleUserNameChange}
            margin="normal"
            fullWidth
            variant="outlined"
            name="username"
          />
          <FormLabel>Password</FormLabel>
          <TextField
            value={password}
            onChange={handlePasswordChange}
            type="password"
            margin="normal"
            fullWidth
            variant="outlined"
            name="password"
          />
          <Button type="submit" variant="contained">
            Sign In
          </Button>
        </Box>

      </form>
    </div>
  );
};

export default Login;
