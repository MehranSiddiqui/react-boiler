import React from "react";
import { useFormik } from "formik";
import Card from "../components/Common/Card/Card";
import { Container, TextField, Button } from "@mui/material";
import * as Yup from "yup";

const Login = () => {
  const recievedData = JSON.parse(localStorage.getItem("Users"));

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid Email address")
        .required("This Field is Required"),
      password: Yup.string().required("This Field is Required"),
    }),

    onSubmit: (values) => {
      const checkEmail = values.email;
      const checkPassword = values.password;
      const checkData = recievedData.find(
        (data) =>
          data.userMail === checkEmail && data.userPassword === checkPassword
      );
      if (checkData) {
        alert("LoggedIn Successfully");
      } else if (!checkData) {
        alert("Invalid Email or Password");
      }
    },
  });

  return (
    <Container>
      <Card>
        <h1>Please Login</h1>
        <form onSubmit={formik.handleSubmit} className="data-form">
          <TextField
            fullWidth
            id="email"
            name="email"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.email}
            label="Email"
          />
          {formik.errors.email ? <div>{formik.errors.email}</div> : null}
          <TextField
            fullWidth
            id="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.password}
            label="Password"
          />
          {formik.errors.password ? <div>{formik.errors.password}</div> : null}

          <Button variant="outlined" type="submit">
            Login
          </Button>
        </form>
      </Card>
    </Container>
  );
};

export default Login;
