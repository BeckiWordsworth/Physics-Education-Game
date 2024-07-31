import React from "react";
import styled from "styled-components";

class Question extends React.Component {
  render() {
    return (
      <Q.QuestionContainer>
        <Q.Question>
          <Q.QuestionText>{this.props.question.text}</Q.QuestionText>
          <Q.QuestionId>{this.props.question._id}</Q.QuestionId>
        </Q.Question>
      </Q.QuestionContainer>
    );
  }
}

export default Question;

const Q = {
  QuestionContainer: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 440px;
  `,

  Question: styled.div`
    width: 80%;
    height: 300px;
    background-color: #f3f3f3;
    padding: 10px;
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.05);
    border: solid 3px #e1e1e1;
  `,

  QuestionText: styled.div`
    font-size: 19pt;
    font-weight: bold;
  `,
  QuestionId: styled.div`
    margin-top: 10px;
    color: #ccc;
    font-size: 10pt;
  `,
};
