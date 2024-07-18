import React, { useEffect, useState } from "react";
import DuoPhysicsClient from "../../model/duophysics-client.js";
import styled from "styled-components";

const LogInForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleFormUpdate = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  const submitForm = (event) => {
    event.preventDefault();
    const userDetails = {
      username: username,
      password: password,
    };
    fetch("http://localhost:8080/sessions", {
      method: "POST",
      body: JSON.stringify(userDetails),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((result) => {
        DuoPhysicsClient.onLogin(result.id, result.username, result.accessToken);
        console.log("Success!");

        setIsLoggedIn(true);

        // () => {
        //   this.props.onLogin(isLoggedIn);
        // }

        // this.setState(
        //   {
        //     isLoggedIn: true,
        //   },
        //   () => {
        //     this.props.onLogin(isLoggedIn);
        //   }
        // );
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <h4>LOG IN</h4>
      <U.LoginForm onSubmit={submitForm}>
        <label htmlFor="username">Username: </label>
        <input name="username" type="text" onChange={handleFormUpdate} />
        <br />
        <label htmlFor="password">Password: </label>
        <input name="password" type="password" onChange={handleFormUpdate} />
        <br />
        <button type="submit">Submit</button>
      </U.LoginForm>
    </div>
  );
};

export default LogInForm;

const U = {
  LoginForm: styled.div`
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
