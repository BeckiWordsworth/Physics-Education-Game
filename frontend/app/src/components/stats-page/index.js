import React, { useEffect, useState } from "react";
import Achievements from "../achievements";
import LineChart from "../line-graph";
import DuoPhysicsClient from "../../model/duophysics-client.js";
import styled from "styled-components";

const Stats = () => {
  const [totalScore, setTotalScore] = useState(0);
  const [pointsData, setPointsData] = useState(0);

  useEffect(async () => {
    try {
      const result = await fetchResults();
      setTotalScore(result);
    } catch (err) {
      console.log(err);
    }
  }, []);

  let fetchResults = async () => {
    let userId = DuoPhysicsClient.getUserId();

    const response = await fetch(`${DuoPhysicsClient.ServerUrl}/scores/${userId}`);

    if (!response.ok) {
      throw new Error(`Fetch Error: ${response.status}`);
    }

    return await response.json();
  };

  // let fetchResults = () => {
  //   let userId = DuoPhysicsClient.getUserId();

  //   fetch(`${DuoPhysicsClient.ServerUrl}/scores/${userId}`)
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((json) => {
  //       console.log(json);
  //       this.setState({
  //         totalScore: json[0].total,
  //       });
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  let userName = DuoPhysicsClient.getUserName();

  return (
    <S.StatsPage>
      <S.UserContainer>
        <h1>Achievements</h1>

        <S.UserContent>
          <div>
            <img src="./anon-user.jpg" alt="user" />
          </div>
          <div>
            <p>Hello {userName}</p>
            <p>Great job! You have earned {this.props.totalScore} points so far!</p>
          </div>
        </S.UserContent>
      </S.UserContainer>

      <Achievements
        pointsData={this.state.totalScore}
        pointsLimit={20}
        source="badge-heart2"
        headline="Champion!"
        text="You conquered a course!"
      />
      <Achievements
        pointsData={this.state.totalScore}
        pointsLimit={50}
        source="badge-star"
        headline="Wildfire!"
        text="You sustained your streak!"
      />
      <Achievements
        pointsData={this.state.totalScore}
        pointsLimit={70}
        source="badge-medal"
        headline="Overachiever"
        text="You can't be stopped!"
      />
      <Achievements
        pointsData={this.state.totalScore}
        pointsLimit={100}
        source="badge-diamond"
        headline="Super player!"
        text="You are pushing yourself to the max!"
      />
      <Achievements
        pointsData={this.state.totalScore}
        pointsLimit={150}
        source="badge-diamond2"
        headline="Overtime!"
        text="You put in the time to reach your goals!"
      />
    </S.StatsPage>
  );
};

export default Stats;

const S = {
  StatsPage: styled.div`
    padding-top: 20px;
  `,

  UserContainer: styled.div`
    margin: 0px auto;
    width: 800px;
    height: 310px;
    padding: 10px 20px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 0 25px rgba(0, 0, 0, 0.04);
  `,

  UserContent: styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  `,
};
