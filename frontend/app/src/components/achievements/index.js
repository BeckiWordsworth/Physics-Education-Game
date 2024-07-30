import React from "react";
// import "./style.scss";
import styled from "styled-components";

class Achievements extends React.Component {
  render() {
    return (
      <W.AchievmentContainer>
        <div className="champion-list">
          <h1>{this.props.headline}</h1>
          <p>{this.props.text} </p>
        </div>
        <div className={this.props.pointsData > this.props.pointsLimit ? "completed" : "badge"}>
          <img src={"./" + this.props.source + ".png"} alt={this.props.source} />
        </div>
      </W.AchievmentContainer>
    );
  }
}

export default Achievements;

const W = {
  AchievmentContainer: styled.div`
    margin: 0 auto;
    width: 800px;
    height: 170px;
    margin-top: 20px;
    margin-bottom: 10px;
    padding: 10px 20px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 0 25px rgba(0, 0, 0, 0.04);
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    img {
      height: 150px;
    }
  `,

  Badge: styled.div`
    width: 20%;
    filter: grayscale(100%);
  `,

  Completed: styled.div`
    width: 20%;
    filter: grayscale(0%);
  `,
};
