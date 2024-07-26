import React, { useEffect, useState } from "react";
// import "./style.scss";
import styled from "styled-components";

class Answer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      answer: null,
    };
  }

  onClick = () => {
    this.props.onAnswerSelected(this.props.index);
  };

  render() {
    return (
      <D.Answer>
        <button id={this.props.index} onClick={this.onClick}>
          {this.props.answer}
        </button>
      </D.Answer>
    );
  }
}

export default Answer;

const D = {
  Answer: styled.div`
    height: 100%;

    button {
      display: block;
      background-color: #aaa;
      font-size: 14pt;
      color: #fff;
      width: 100%;
      height: 100%;
      margin: 0px auto;
      padding: 10px;
      border-radius: 20px;
      font-family: "Montserrat", sans-serif;
      transition: 0.3s;
    }

    button:hover {
      background-color: #20a8e9;
    }
  `,
};
