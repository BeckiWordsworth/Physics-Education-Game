import React, { useEffect, useState } from "react";
import TopicList from "../topiclist";
import LineChart from "../line-graph";
import DuoPhysicsClient from "../../model/duophysics-client.js";
import moment from "moment";
import styled from "styled-components";

const DashboardPage = ({ totalScore, crownData }) => {
  const [topics, setTopics] = useState([
    { id: "1", title: "Astronomy", level: "2", icon: "/globe.png" },
    { id: "2", title: "Astronomy", level: "3", icon: "/hearing.png" },
    { id: "3", title: "Astronomy", level: "4", icon: "/weather.png" },
    { id: "4", title: "Mechanics", level: "1", icon: "/waves.png" },
    { id: "5", title: "Mechanics", level: "2", icon: "/glass.png" },
    { id: "6", title: "BioPhysics", level: "1", icon: "/idea.png" },
  ]);
  const [user, setUser] = useState(null);
  const [recentActivityGraphData, setRecentActivityGraphData] = useState();
  const [timeResults, setTimeResults] = useState();

  useEffect(async () => {
    try {
      const result = await fetchTopics();
      setTopics(result);
    } catch (err) {
      console.log(err);
    }
  }, []);

  let fetchTopics = async () => {
    const response = await fetch(`${DuoPhysicsClient.ServerUrl}/topics`);

    if (!response.ok) {
      throw new Error(`Fetch Error: ${response.status}`);
    }

    return await response.json();
  };

  let fetchTimeData = () => {
    let UserId = DuoPhysicsClient.getUserId();

    fetch(`${DuoPhysicsClient.ServerUrl}/resultsTime/${UserId}`)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        console.log(json);

        setTimeResults(json);

        timeResult();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  let timeResult = () => {
    let graphData = [
      {
        id: "recent_activity",
        color: "hsl(281, 70%, 50%)",
        data: [],
      },
    ];

    for (var daysAgo = 0; daysAgo < 7; daysAgo++) {
      let day = moment().subtract(daysAgo, "days").format("DD-MM-YYYY");
      let totalEntries = 0;

      this.state.timeResults.forEach((entry) => {
        let entryDay = moment(entry.datetime).format("DD-MM-YYYY");

        if (entryDay === day) {
          totalEntries += 1;
        }
      });

      let newEntry = {
        x: daysAgo.toString(),
        y: totalEntries,
      };

      if (daysAgo == 0) {
        newEntry["x"] = "Today";
      }

      graphData[0].data.push(newEntry);
    }

    setRecentActivityGraphData(graphData);
  };

  return (
    <D.DashboardContainer>
      <D.DashboardMain>
        <div className="topic-list">
          <h2>Physics Topics</h2>
          {topics.map((topic) => {
            return <TopicList id={topic._id} title={topic.title} icon={topic.icon} />;
          })}
        </div>
      </D.DashboardMain>
      <D.DashboardSidebar>
        <div>
          <a href="/stats">
            <img src="/crown.png" alt="Logo" />
          </a>
          <h2>You are on {crownData} crowns</h2>
        </div>

        <D.DashboardSidebarGraph>
          <div>
            <h2>Last 7 Days Activity</h2>
            <a href="/stats"></a>

            <D.ActivityLineGraph>
              <LineChart graphData={recentActivityGraphData} />
            </D.ActivityLineGraph>
          </div>
        </D.DashboardSidebarGraph>
      </D.DashboardSidebar>
    </D.DashboardContainer>
  );
};

export default DashboardPage;

const D = {
  DashboardContainer: styled.div`
    padding: 20px;
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-column-gap: 20px;

    h2 {
      margin: 0px;
      font-weight: normal;
    }
  `,

  DashboardSidebar: styled.div`
    display: block;
    text-align: center;

    img {
      display: block;
      margin: 0 auto;
    }
  `,

  DashboardMain: styled.div`
    padding: 10px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 0 25px rgba(0, 0, 0, 0.04);
    margin-bottom: 20px;
  `,

  DashboardSidebarGraph: styled.div`
    display: block;
    text-align: center;
  `,

  ActivityLineGraph: styled.div`
    height: 400px;
  `,
};
