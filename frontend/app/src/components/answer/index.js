import React from 'react'
import './style.scss'


class Answer extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      answer: null
    }
  }

  onClick = () => {
    this.props.onAnswerSelected(this.props.index)
  }

  render() {
    return (
      <div className="answer">
        <button id={this.props.index} onClick={this.onClick}>{this.props.answer}</button>
      </div>
    )
  }
}

export default Answer
