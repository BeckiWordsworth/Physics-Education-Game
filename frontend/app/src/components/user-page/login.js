import React from "react";
import DuoPhysicsClient from "../../model/duophysics-client.js";
import styled from "styled-components";

class LogInForm extends React.Component {
  state = {
    username: "",
    password: "",
    isLoggedIn: false,
  };

  handleFormUpdate = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  submitForm = (event) => {
    event.preventDefault();
    const userDetails = {
      username: this.state.username,
      password: this.state.password,
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

        this.setState(
          {
            isLoggedIn: true,
          },
          () => {
            this.props.onLogin(this.state.isLoggedIn);
          }
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <div>
        <h4>LOG IN</h4>
        <U.LoginForm onSubmit={this.submitForm}>
          <label htmlFor="username">Username: </label>
          <input name="username" type="text" onChange={this.handleFormUpdate} />
          <br />
          <label htmlFor="password">Password: </label>
          <input name="password" type="password" onChange={this.handleFormUpdate} />
          <br />
          <button type="submit">Submit</button>
        </U.LoginForm>
      </div>
    );
  }
}

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
