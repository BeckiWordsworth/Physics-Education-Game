import React from 'react'
import Header from '../header'
import Answer from '../answer'
import './style.scss'


class Question extends React.Component {

  render() {
    return (
      <div className="question-container">
        <div className="question">
          <div className="question-text">{this.props.question.text}</div>
          <div className="question-id">{this.props.question._id}</div>
        </div>
      </div>
    )
  }
}

export default Question
