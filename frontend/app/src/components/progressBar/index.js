import React from "react";
import "./style.scss";

const ProgressBar = () => {
  state = {
    active: false,
  };

  let progressStyle = {
    width: this.state.active ? "100%" : this.props.progress + "%",
  };

  return (
    <div className="progressBar">
      <div className="background"></div>
      <div className="filler" style={progressStyle}></div>
    </div>
  );
};

export default ProgressBar;
