import React from "react";
import styled from "styled-components";

class PostQuizPage extends React.Component {
  render() {
    return (
      <W.WinnerContainer>
        <h1> Lesson Complete +10 XP</h1>

        <img src={"./high_five_snl.gif"} alt="winner" />
        <h2> Good job! </h2>

        <a href={"/dashboard"}>
          <button>Continue</button>
        </a>
      </W.WinnerContainer>
    );
  }
}

export default PostQuizPage;

const W = {
  WinnerContainer: styled.div`
    padding: 50px;
    text-align: center;
    display: grid;

    img {
      padding: 10px;
      margin: 0 auto;
    }

    button {
      padding: 10px;
      background: none;
      border: solid 2px #bbb;
      border-radius: 20px;
      color: #666;
      font-size: 10pt;
      font-family: "Montserrat", sans-serif;
      transition: 0.2s;
    }

    button:hover {
      background: #ccc;
      color: #333;
    }
  `,
};
