import React, { useEffect, useState } from "react";
// import "./style.scss";
import styled from "styled-components";

const Answer = ({ answer, index, onAnswerSelected }) => {
  // const [answer, setAnswer] = useState(null);

  onClick = () => {
    onAnswerSelected(index);
  };

  return (
    <D.Answer>
      <button id={index} onClick={this.onClick}>
        {answer}
      </button>
    </D.Answer>
  );
};

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
