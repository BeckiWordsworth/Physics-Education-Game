import React from "react"
import { Link } from "react-router-dom"
import SignUpForm from "./signup"
import LogInForm from "./login"
import './style.scss'
import DuoPhysicsClient from "../../model/duophysics-client.js"

class UserPage extends React.Component {

  state = {
    isLoggedIn: false
  }

  updateLoginStatus = status => {
    this.setState({
      isLoggedIn: status
    });
  }

  logout = () => {
    DuoPhysicsClient.logout();
    this.setState({
      isLoggedIn: false
    })
  }

  render() {
    if(DuoPhysicsClient.isLoggedIn()) {
      return (
        <div className="pageContentUserInfo">
          <h1>You are logged in!</h1>
          <button onClick={this.logout}>Logout</button>
        </div>
      )
    } else {
      return (
        <div className="pageContentLoginPage">
          <div className="backButtonContainer">
            <Link to="/"><button className="navigationButtonTop-small">&larr; Back to level page</button></Link>
          </div>
          <div className="formsContainer">
            <div className="formBox">
              <LogInForm onLogin={this.updateLoginStatus} />
            </div>
            <div className="formBox">
              <SignUpForm onLogin={this.updateLoginStatus} />
            </div>
          </div>
        </div>

      )
    }
  }
}

export default UserPage
