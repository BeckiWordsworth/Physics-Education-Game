import React from "react";
import styled from "styled-components";

const PostQuizLosePage = () => {
  return (
    <L.LoserContainer>
      <h1> Game over! PLease try again!</h1>

      <img src={"./GameOver.png"} alt="loser" />

      <a href={"/dashboard"}>
        <button> Continue </button>
      </a>
    </L.LoserContainer>
  );
};

export default PostQuizLosePage;

const L = {
  LoserContainer: styled.div`
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
