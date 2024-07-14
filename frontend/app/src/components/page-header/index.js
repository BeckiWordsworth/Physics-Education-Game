import React from "react";
import DuoPhysicsClient from "../../model/duophysics-client.js";
import styled from "styled-components";

class PageHeader extends React.Component {
  state = {
    updateCounter: 0,
  };

  constructor() {
    super();
  }

  componentDidMount() {
    DuoPhysicsClient.updateHeaderCallback = this.updateHeaderCallback;
  }

  updateHeaderCallback = () => {
    this.setState({
      updateCounter: this.state.updateCounter + 1,
    });
  };

  render() {
    let userInfo = DuoPhysicsClient.isLoggedIn() ? "Hello " + DuoPhysicsClient.getUserName() : "";
    let userLogged = DuoPhysicsClient.isLoggedIn() ? <a href="/user">Log Out</a> : <a href="/user">Login / Register</a>;

    return (
      <H.Container>
        <H.HeaderContent>
          <H.LogoContainer>
            <a href="/">
              <img src="/logo.png" alt="Logo" />
            </a>
          </H.LogoContainer>
          <H.SiteTitle>
            <a href="/">Duophysics</a>
          </H.SiteTitle>
          <div className="userInfo">{userInfo}</div>
          <H.HeaderLinks>
            <ul>
              <li>
                <a href="/dashboard">Dashboard</a>
              </li>
              <li>{userLogged}</li>
              <li>
                <a href="/stats">Stats</a>
              </li>
            </ul>
          </H.HeaderLinks>
        </H.HeaderContent>
      </H.Container>
    );
  }
}

export default PageHeader;

const H = {
  Container: styled.div`
    background: rgba(32, 166, 231, 0.8) linear-gradient(180deg, #20a8e9, rgba(30, 158, 220, 0.5)) repeat-x;
    background-color: rgba(32, 166, 231, 0.8);
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.1);
    color: #fff;
    font-size: 15px;
    height: 70px;
    margin: 0;
    top: 0;
    padding: 0 20px;
    font-family: "Roboto", sans-serif;
    position: fixed;
    z-index: 100;
    width: 100%;
    box-sizing: border-box;
  `,
  HeaderContent: styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: center;
  `,
  LogoContainer: styled.div`
    width: 70px;

    img {
      width: auto;
      height: 50px;
      padding: 10px 10px 0px 10px;
    }
  `,

  SiteTitle: styled.div`
    font-size: 16pt;
    flex-grow: 1;

    a {
      text-decoration: none;
      color: white;
    }
  `,

  HeaderLinks: styled.nav`
    font-size: 15px;
    font-weight: bold;

    ul {
      list-style-type: none;
      display: flex;
      justify-content: flex-end;

      li {
        padding: 0 2px;
      }
    }

    a {
      text-decoration: none;
      color: #ffffff;
      padding: 10px 10px;
    }

    a:hover {
      text-decoration: none;
      background-color: #4488cc;
      border-radius: 20px;
    }
  `,
};
