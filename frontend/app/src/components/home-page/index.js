import React from 'react'
import DuoPhysicsClient from "../../model/duophysics-client.js"
import './style.scss'


class HomePage extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {

    let userLogged = DuoPhysicsClient.isLoggedIn() ? "/dashboard" : "/user"

    return (
      <div className="homepage">

        <div className="hero">
          <div className="hero-icon"><img src="/logo.png" alt="Logo" /></div>
          <div className="hero-content">
            <h1>DuoPhysics</h1>
            <p>Learn Physics for free</p>
            <br />
            <a href={userLogged}>Get Started</a>
          </div>
        </div>

        <section>
          <div className="section-content">
            <h2>A fun way to learn Physics</h2>
            <p>Learning with DuoPhysics is fun! Earn points for correct answers, collect badges, and level up. This bite-sized lessons are effective, and we have proof that it works. We have a range of subjects for your to dive into which are both fun and interesting.</p>
            <div className="science-icon">
                <img src="/science-book.png" alt="sciencebook" />
                <img src="/dropper.png" alt="dropper" />
                <img src="/nuclear.png" alt="nuclear" />
                <img src="/saturn.png" alt="saturn" />
                <img src="/telescope.png" alt="telescope" />
                <img src="/radar.png" alt="radar" />
                <img src="/satellite.png" alt="satelite" />
                <img src="/flask.png" alt="flask" />
                <img src="/newton-cradle.png" alt="newton" />
                <img src="/space.png" alt="space" />
            </div>
            </div>
        </section>

        <section>
          <div className="section-content">
            <h2>Learn anywhere</h2>
            <p>Make your breaks and commutes more productive by learning through your phone aswell. Lessons are quick and can be played anywhere.</p>
            <div className="image-icon">
                <img src="/smartphone.png" alt="phone" />
                <img src="/tablet.png" alt="tablet" />
                <img src="/laptop.png" alt="laptop" />
            </div>
          </div>
        </section>

        <footer>
          <div className="footer-content">
            Learning Physics the fun way with DuoPhysics.
          </div>
        </footer>
      </div>
    )
  }
}

export default HomePage
