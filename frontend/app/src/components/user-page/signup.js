import React, { useState } from "react";
import styled from "styled-components";

const SignUpForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [newUserAdded, setNewUserAdded] = useState(false);

  const handleFormUpdate = (event) => {
    const { name, value } = event.target;
    if (name === "username") setUsername(value);
    else if (name === "email") setEmail(value);
    else if (name === "password") setPassword(value);
  };

  const submitForm = (event) => {
    event.preventDefault();

    const userDetails = {
      username,
      email,
      password,
    };

    fetch("http://localhost:8080/users", {
      method: "POST",
      body: JSON.stringify(userDetails),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.created === true) {
          console.log("Success:", JSON.stringify(result));
          setNewUserAdded(true);
        } else {
          console.log("Failure:", JSON.stringify(result));
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <h4>CREATE A NEW ACCOUNT</h4>
      <U.SignUpForm onSubmit={submitForm}>
        <label htmlFor="username">Username: </label>
        <input name="username" type="text" onChange={handleFormUpdate} />
        <br />
        <label htmlFor="emal">Email address: </label>
        <input name="email" type="text" onChange={handleFormUpdate} />
        <br />
        <label htmlFor="password">Password: </label>
        <input name="password" type="password" onChange={handleFormUpdate} />
        <br />
        <button type="submit">Submit</button>
      </U.SignUpForm>
      {newUserAdded ? <p>New user added. Welcome! Please check your email.</p> : <p />}
    </div>
  );
};

export default SignUpForm;

const U = {
  SignUpForm: styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    border-radius: 20px;
    input[type="text"],
    [type="password"] {
      width: 100%;
      padding: 5px;
      display: inline-block;
      border: 1px solid #ccc;
      border-radius: 4px;
      box-sizing: border-box;
      font-size: 15px;
    }
    button {
      background-color: $primaryButtonColor;
      border-radius: 10px;
      padding: 5px 15px;
      border: none;
      font-size: 15px;
      margin-right: 10px;
      margin-top: 10px;
      width: 100%;
    }
    button:hover {
      background-color: #a07a5e;
      color: #fff;
    }
  `,
};
