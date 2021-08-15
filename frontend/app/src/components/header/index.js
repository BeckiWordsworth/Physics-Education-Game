import React from "react"
import './style.scss'
import DuoPhysicsClient from "../../model/duophysics-client.js"

class Header extends React.Component {

  state = {
    updateCounter: 0
  }

  constructor() {
    super()
  }

  componentDidMount() {
    DuoPhysicsClient.updateHeaderCallback = this.updateHeaderCallback;
  }

  updateHeaderCallback = () => {
    this.setState({
      updateCounter: this.state.updateCounter + 1
    })
  }

  render() {
    let userInfo = DuoPhysicsClient.isLoggedIn() ? "Hello " + DuoPhysicsClient.getUserName() : ""
    let userLogged = DuoPhysicsClient.isLoggedIn() ? <a href="/user">Log Out</a> : <a href="/user">Login / Register</a>

    return (
      <header>
        <div className="headerContent">
          <div className="logoContainer">
            <a href="/"><img src="/logo.png" alt="Logo" /></a>
          </div>
          <div className="siteTitle">
            <a href="/">Duophysics</a>
          </div>
          <div className="userInfo">
            {userInfo}
          </div>
          <nav className="headerLinks">
            <ul>
              <li><a href="/dashboard">Dashboard</a></li>
              <li>{userLogged}</li>
              <li><a href="/stats">Stats</a></li>
            </ul>
          </nav>
        </div>
      </header>
    )
  }

}

export default Header
