import React from "react"
import "./style.scss"
import DuoPhysicsClient from "../../model/duophysics-client.js"


class TopicList extends React.Component {

  render() {
    return (
      <div className="topic-item">
          <a href={"/topic/" + this.props.id}>
            <img src={`${DuoPhysicsClient.ServerUrl}/topic_icons/${this.props.icon}`} alt="Icon" /><br />
            {this.props.title}
          </a>
      </div>
    )
  }
}

export default TopicList
