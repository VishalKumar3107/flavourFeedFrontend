import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import "../allcss/Login.css";
import React, { useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../hooks/helper";

export const Auth = () => {
  const [showLogin, setShowLogin] = useState(true);

  const handleToggleForm = () => {
    setShowLogin(prevState => !prevState);
  };
  return (
    <div className="logincontainer">
      <div className="login-page">
        <h1>{showLogin ? "sign up" : "login"}</h1>
        <button className="switchbutton" onClick={handleToggleForm}>
          {showLogin ? "or LOGIN" : "or SIGNUP"}
        </button>
        {showLogin ? <Register /> : <Login />}
       
      </div>
      </div>
  );
};

const Login = () => {
  const [_, setCookies] = useCookies(["access_token"]);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const result = await axios.post(`${BASE_URL}/auth/login`, {
        username,
        password,
      });

      setCookies("access_token", result.data.token);
      window.localStorage.setItem("userID", result.data.userID);
      window.localStorage.setItem("username", username);
      navigate("/");
    } catch (error) {
      console.error(error);
      window.alert(error.response.data.message);
    }
  };

  return (
    <Flex
      minH={"70vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("transparent")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}></Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Username</FormLabel>
              <Input
                type="text"
                id="username"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input
                 type="password"
                 id="password"
                 value={password}
                 onChange={(event) => setPassword(event.target.value)}
              />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Checkbox>Remember me</Checkbox>
                <Link color={"blue.400"}>Forgot password?</Link>
              </Stack>
              <Button
              onClick={handleSubmit}
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
              >
                Login
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [_, setCookies] = useCookies(["access_token"]);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post(`${BASE_URL}/auth/register`, {
        username,
        password,
      });
      alert("Registration Completed! Now login.");
    } catch (error) {
      console.error(error);
      window.alert(error.response.data.message);
    }
  };

  return (

    <Flex
      minH={"70vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("transparent")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}></Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Username</FormLabel>
              <Input
                type="text"
                id="username"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input
                 type="password"
                 id="password"
                 value={password}
                 onChange={(event) => setPassword(event.target.value)}
              />
            </FormControl>
            <Stack spacing={10}>
              
              <Button
              onClick={handleSubmit}
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
              >
                SignUp
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};
