import React from "react";
import { Link } from "react-router-dom";
import SignUpForm from "./signup";
import LogInForm from "./login";
import styled from "styled-components";

// import "./style.scss";
import DuoPhysicsClient from "../../model/duophysics-client.js";

class UserPage extends React.Component {
  state = {
    isLoggedIn: false,
  };

  updateLoginStatus = (status) => {
    this.setState({
      isLoggedIn: status,
    });
  };

  logout = () => {
    DuoPhysicsClient.logout();
    this.setState({
      isLoggedIn: false,
    });
  };

  render() {
    if (DuoPhysicsClient.isLoggedIn()) {
      return (
        <U.PageContentLoginPage>
          <h1>You are logged in!</h1>
          <button onClick={this.logout}>Logout</button>
        </U.PageContentLoginPage>
      );
    } else {
      return (
        <U.PageContentLoginPage>
          <U.BackButtonContainer>
            <Link to="/">
              <U.NavigationButtonTopSmall>&larr; Back to level page</U.NavigationButtonTopSmall>
            </Link>
          </U.BackButtonContainer>
          <U.FormsContainer>
            <U.FormBox>
              <LogInForm onLogin={this.updateLoginStatus} />
            </U.FormBox>
            <U.FormBox>
              <SignUpForm onLogin={this.updateLoginStatus} />
            </U.FormBox>
          </U.FormsContainer>
        </U.PageContentLoginPage>
      );
    }
  }
}

export default UserPage;

const U = {
  PageContentLoginPage: styled.div`
    background-color: #dbe8ff;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-position: center center;
    display: flex;
    flex-direction: column;
    height: 100vh;
  `,
  FormsContainer: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    width: 100%;
    height: auto;
  `,
  FormBox: styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    width: 280px;
    height: 400px;
    background-color: #ffffffe1;
    font-weight: bold;
    border-radius: 20px;
    margin: 0 35px;
    h4 {
      text-align: center;
    }
  `,

  loginForm: styled.div`
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

  BackButtonContainer: styled.div`
    display: flex;
    justify-content: flex-start;
  `,

  NavigationButtonTopSmall: styled.div`
    background-color: #ead9c2;
    text-transform: uppercase;
    border-radius: 10px;
    padding: 10px 15px;
    margin: 15px;
    width: auto;
    border: none;
    font-size: 15px;
    }
    button:hover {
      background-color: #a07a5e;
      color: #fff;
    }
`,
};
