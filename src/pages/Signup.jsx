import React from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import TextField from "@mui/material/TextField";
import { Container } from "@mui/material";
import Card from "../components/Common/Card/Card";
import { Button } from "@mui/material";

const Signup = () => {
  const navigateTo = useNavigate();
  const userData = localStorage.getItem("Users")
    ? JSON.parse(localStorage.getItem("Users"))
    : [];
    
    // Manual Validation
  // const validate = (values) => {
  //   const errors = {};
  //   if (!values.firstName) {
  //     errors.firstName = "Required";
  //   } else if (values.firstName.length > 15) {
  //     errors.firstName = "Must be Equal or less than 15 characters";
  //   }
  //   if (!values.lastName) {
  //     errors.lastName = "Required";
  //   } else if (values.lastName.length > 20) {
  //     errors.lastName = "Must be Equal or less than 20 characters";
  //   }
  //   if (!values.email) {
  //     errors.email = "Required";
  //   } else if (
  //     !/^[A-Z0-9._%+~]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
  //   ) {
  //     errors.email = "Invalid Email";
  //   }
  //   if (!values.password) {
  //     errors.password = "Required";
  //   } else if (values.password.length < 8) {
  //     errors.password = "Must be more than 8 characters";
  //   }
  //   return errors;
  // };
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, "Must Be 15 Characters or less")
        .required("This Field is required."),
      lastName: Yup.string().max(10, "Must be 10 cahracters or less"),
      email: Yup.string()
        .email("Invalid Email address")
        .required("This Field is Required"),
      password: Yup.string().required("This Field is Required"),
    }),
    onSubmit: (values) => {
      const fromDetail = {
        userName: `${values.firstName} ${values.lastName}`,
        userMail: values.email,
        userPassword: values.password,
      };
      const userExists = userData.find(
        (item) => item.userMail === values.email
      );
      if (userExists) {
        alert("Email Already Exist");
      } else {
        userData.push(fromDetail);
        localStorage.setItem("Users", JSON.stringify(userData));
        navigateTo("/login");
      }
    },
  });
  return (
    <Container fixed>
      <Card>
        <h1>Hello</h1>
        <form onSubmit={formik.handleSubmit} className="data-form">
          <TextField
            fullWidth
            id="firstName"
            name="firstName"
            type="text"
            onChange={formik.handleChange}
            //the onBlur is fired when the TextField field looses focus
            onBlur={formik.handleBlur}
            value={formik.values.firstName}
            label="First Name"
          />
          {formik.touched.firstName && formik.errors.firstName ? (
            <div className="message">{formik.errors.firstName}</div>
          ) : null}
          <TextField
            fullWidth
            id="lastname"
            name="lastName"
            type="text"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.lastName}
            label="Last Name"
          />
          {formik.touched.lastName && formik.errors.lastName ? (
            <div className="message">{formik.errors.lastName}</div>
          ) : null}
          <TextField
            fullWidth
            id="email"
            name="email"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            label="Email"
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="message">{formik.errors.email}</div>
          ) : null}
          <TextField
            fullWidth
            id="password"
            name="password"
            type="text"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.password}
            label="Password"
          />
          {formik.touched.password && formik.errors.password ? (
            <div className="message">{formik.errors.password}</div>
          ) : null}

          <Button variant="outlined" type="submit">Register</Button>
        </form>
      </Card>
    </Container>
  );
};

export default Signup;
