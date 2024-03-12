import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import axios from "axios";

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [errorData, setErroData] = useState({});

  const handleForm = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8000/signup",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("RESSS",response)
    } catch (error) {
     handleErrorResponse("ERRR",error.response.data.error);
    }
  };

  const handleErrorResponse = (errResponse) => {
    let error = {};
    const requiredAttributes = ["firstName", "email", "password"];
    for (const attribute of requiredAttributes) {
      if (!errResponse[attribute]) {
        error[attribute] = `${attribute} is required.`;
      }
    }

    setErroData(error);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TextField
          id="outlined-basic"
          value={formData.firstName}
          label="First Name"
          variant="outlined"
          name="firstName"
          onChange={handleForm}
          helperText={errorData.firstName}
          error={errorData.firstName}
        />
        <TextField
          id="outlined-basic"
          name="lastName"
          label="Last Name"
          variant="outlined"
          value={formData.lastName}
          onChange={handleForm}

        />
        <TextField
          id="outlined-basic"
          name="email"
          label="Email"
          variant="outlined"
          value={formData.email}
          onChange={handleForm}
          helperText={errorData.email}
          error={errorData.email}

        />
        <TextField
          id="outlined-basic"
          type="password"
          label="Password"
          variant="outlined"
          name="password"
          value={formData.password}
          onChange={handleForm}
          helperText={errorData.password}
          error={errorData.password}
        />
    <br/>
    <br/>
        <Button variant="contained" type="submit">
          Create
        </Button>
      </form>
    </div>
  );
};

export default SignUpForm;
