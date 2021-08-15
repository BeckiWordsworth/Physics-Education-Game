import React from 'react'
import "./style.scss"
import TopicList from '../topiclist'
import LineChart from '../line-graph'
import DuoPhysicsClient from "../../model/duophysics-client.js"
import moment from 'moment';

class DashboardPage extends React.Component {

  state = {
    topics: [],
    user: null,
    recentActivityGraphData: null
  }

  componentDidMount() {
    this.fetchData()
    this.fetchTimeData()
  }

  fetchData = () => {
    fetch(`${DuoPhysicsClient.ServerUrl}/topics`)
      .then((response) => {
        return response.json()
      })
      .then((json) => {
        console.log(json)

        this.setState({
          topics: json
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  fetchTimeData = () => {
    let UserId = DuoPhysicsClient.getUserId()

    fetch(`${DuoPhysicsClient.ServerUrl}/resultsTime/${UserId}`)
    .then((response) => {
      return response.json()
    })
    .then((json) => {
      console.log(json)
      this.setState({
        timeResults: json
      }, this.timeResults)
    })
    .catch((error) => {
      console.log(error)
    })
  }

  timeResults = () => {
    let graphData = [{
      "id": "recent_activity",
      "color": "hsl(281, 70%, 50%)",
      "data": [

      ]
    }]

    for(var daysAgo = 0; daysAgo < 7; daysAgo++)
    {
      let day = moment().subtract(daysAgo, 'days').format('DD-MM-YYYY')
      let totalEntries = 0;

      this.state.timeResults.forEach((entry) => {
        let entryDay = moment(entry.datetime).format('DD-MM-YYYY')

        if (entryDay === day) {
          totalEntries += 1;
        }
      })

      let newEntry = {
        "x": daysAgo.toString(),
        "y": totalEntries
      }

      if (daysAgo == 0) {
        newEntry["x"] = "Today"
      }

      graphData[0].data.push(newEntry)
    }

    this.setState({
      recentActivityGraphData: graphData
    })
  }

  render() {
    return (
      <div className="dashboard-container">
        <div className="dashboard-main">
          <div className="topic-list">
            <h2>Physics Topics</h2>
            {this.state.topics.map((topic) => {
              return <TopicList id={topic._id}
                title={topic.title}
                icon={topic.icon}
                />
            })}
          </div>
        </div>
        <div className="dashboard-sidebar">
          <div>
            <a href="/stats"><img src="/crown.png" alt="Logo" /></a>
            <h2>You are on {this.props.crownData} crowns</h2>
          </div>

          <div className="dashboard-sidebar-graph">
            <div>
            <h2>Last 7 Days Activity</h2>
              <a href="/stats"></a>

              <div className="activity-line-graph">
                <LineChart graphData={this.state.recentActivityGraphData} />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

}

export default DashboardPage
