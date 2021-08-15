import React from 'react'
import { ResponsiveLine } from '@nivo/line'


class LineGraph extends React.Component {

  render() {
    console.log(this.props.graphData)

    if (!this.props.graphData || this.props.graphData.length == 0) {
      return (<div></div>)
    }

    let data = this.props.graphData

    return (
      <ResponsiveLine
          data={data}
          margin={{
              "top": 50,
              "right": 30,
              "bottom": 50,
              "left": 60
          }}
          xScale={{
              "type": "point"
          }}
          yScale={{
              "type": "linear",
              "stacked": true,
              "min": "auto",
              "max": "auto"
          }}
          minY="auto"
          maxY="auto"
          stacked={true}
          axisTop= {null}
          axisRight={null}
          axisBottom={{
              "orient": "bottom",
              "tickSize": 5,
              "tickPadding": 5,
              "tickRotation": 0,
              "legend": "Days Ago",
              "legendOffset": 36,
              "legendPosition": "middle"
          }}
          axisLeft={{
              "orient": "left",
              "tickSize": 5,
              "tickPadding": 5,
              "tickRotation": 0,
              "legend": "Number of Activities",
              "legendOffset": -40,
              "legendPosition": "middle"
          }}
          dotSize={10}
          dotColor="inherit:darker(0.3)"
          dotBorderWidth={2}
          dotBorderColor="#ffffff"
          enableDotLabel={true}
          dotLabel="y"
          dotLabelYOffset={-12}
          animate={true}
          motionStiffness={90}
          motionDamping={15}
        />
    )
  }
}

export default LineGraph
