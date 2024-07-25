import React from "react";
import styled from "styled-components";
import DuoPhysicsClient from "../../model/duophysics-client.js";

const TopicList = ({ id, title, icon }) => {
  return (
    <T.TopicItem>
      <a href={"/topic/" + id}>
        <img src={`${DuoPhysicsClient.ServerUrl}/topic_icons/${icon}`} alt="Icon" />
        <br />
        {title}
      </a>
    </T.TopicItem>
  );
};

export default TopicList;

const T = {
  TopicItem: styled.div`
    padding: 10px;
    text-align: center;
    display: grid;

    a {
      text-decoration: none;
      color: #333;
      font-weight: bold;
      padding: 8px;
    }

    a:hover {
      background-color: #ddd;
      border-radius: 8px;
    }
  `,
};
