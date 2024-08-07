import React from "react";
import styled from "styled-components";

const ProgressBar = () => {
  state = {
    active: false,
  };

  let progressStyle = {
    width: this.state.active ? "100%" : this.props.progress + "%",
  };

  return (
    <P.ProgressBar>
      <P.Background></P.Background>
      <P.Filler style={progressStyle}></P.Filler>
    </P.ProgressBar>
  );
};

export default ProgressBar;

const P = {
  ProgressBar: styled.div`
    position: relative;
    height: 20px;
    width: 80%;
    margin: 0 auto;
    margin-top: 10px;
    border-left: solid 2px #ccc;
    border-right: solid 2px #ccc;
  `,

  Background: styled.div`
    position: absolute;
    width: 100%;
    top: 8px;
    height: 2px;
    background: #ccc;
  `,

  Filler: styled.div`
    position: absolute;
    top: 2px;
    background-color: #37ba00;
    height: 16px;
    border-radius: 10px;
  `,
};
