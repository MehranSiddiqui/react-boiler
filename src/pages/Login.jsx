import React from "react";
import { useFormik } from "formik";
import Card from "../components/Common/Card/Card";
import { TextField, Button } from "@mui/material";
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
    <Card className="data-form">
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
          className="text-field"
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
          className="text-field"
        />
        {formik.errors.password ? <div>{formik.errors.password}</div> : null}

        <Button variant="outlined" type="submit" className="button-theme">
          Login
        </Button>
      </form>
    </Card>
  );
};

export default Login;
