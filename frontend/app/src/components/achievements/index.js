import React from "react"
import './style.scss'

class Achievements extends React.Component {

  render() {
    return (
      <div className="achievement-container">
        <div className="champion-list">
          <h1>{this.props.headline}</h1>
          <p>{this.props.text} </p>
        </div>
        <div className={this.props.pointsData > this.props.pointsLimit ? "completed" : "badge"} >
          <img src={"./" + this.props.source + ".png"} alt={this.props.source} />
        </div>
      </div>
    )
  }
}

export default Achievements
