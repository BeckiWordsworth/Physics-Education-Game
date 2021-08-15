import React from 'react'
import './style.scss'


class ProgressBar extends React.Component {

  state = {
    active: false,
  };

  render() {

    let progressStyle = {
      width: this.state.active ? "100%" : this.props.progress + "%"
    }

    return(
      <div className="progressBar">
        <div className="background"></div>
        <div className="filler" style={progressStyle}></div>
      </div>

    )
  }

}

export default ProgressBar
