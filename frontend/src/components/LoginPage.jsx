import React from "react";
import { useFormik } from "formik";
import * as yup from 'yup';
import {Button, TextField} from "@mui/material"
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate=useNavigate()
  const baseUrl = "http://localhost:3005/api/user";
  const validationSchema = yup.object({
    email: yup
      .string("Enter your email")
      .email("Enter a valid email")
      .required("Email is required"),
    password: yup
      .string("Enter your password")
      .min(8, "Password should be of minimum 8 characters length")
      .required("Password is required"),
  });
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: async(values) => {
      const newData = {
        email:values.email,
        password:values.password,
      }
      try {
        var response = await axios({
          method: "post",
          baseURL: baseUrl,
          url: "/login",
          data: newData
        });
        if (response.data.isAuth === true) {
          localStorage.setItem("token", "hello")
          navigate("/todo")
        }
        else{
          alert(response.data.message)
        }
      } catch (error) {
        console.log(error);
      }
      
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        
        <TextField
          fullWidth
          id="email"
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
          fullWidth
          id="password"
          name="password"
          label="Password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        <Button color="primary" variant="contained" fullWidth type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default LoginPage;

