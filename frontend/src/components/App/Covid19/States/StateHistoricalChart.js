import React, { Component } from "react";
import Plot from "react-plotly.js";

export class StateHistoricalChart extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-sm-6">
          <Plot
            data={[
              {
                //labels:  ["Eve", "Cain", "Seth", "Enos", "Noam", "Abel", "Awan", "Enoch", "Azura"],
                //parents: ["", "Eve", "Eve", "Seth", "Seth", "Eve", "Eve", "Awan", "Eve" ],
                //values:  [65, 14, 12, 10, 2, 6, 6, 4, 4],
                x: this.props.dates,
                y: this.props.cases,
                text: this.props.cases.map(String),
                textpoistion: "auto",
                type: "line",
                line: {
                  color: "blue",
                  width: 3,
                },
                outsidetextfont: { size: 20, color: "#377eb8" },
                leaf: { opacity: 0.4 },
                marker: { line: { width: 3 } },
                branchvalues: "total",
                transforms: [
                  {
                    type: "sort",
                    target: "y",
                    order: "ascending",
                  },
                ],
              },
            ]}
            layout={{
              height: 500,
              width: 800,
              autosize: true,
              staticPlot: true,
              title: "USA cases vs time",
              titlefont: { size: 20 },
              tracetoggle: false,
              displayModeBar: false,
              margin: {
                l: 60,
                r: 50,
                b: 80,
                t: 70,
                pad: 4,
              },
              autocolorscale: true,
            }}
            onHover={(event) => console.log(event.points[0].x)}
            //onHover = {(event) => console.log(event.points)}
            //onHover= {(event) =>console.log(event) }
          />
        </div>
        <div className="col-sm-6">
          <h3>USA death vs time</h3>
        <Plot
          data={[
            {
              //labels:  ["Eve", "Cain", "Seth", "Enos", "Noam", "Abel", "Awan", "Enoch", "Azura"],
              //parents: ["", "Eve", "Eve", "Seth", "Seth", "Eve", "Eve", "Awan", "Eve" ],
              //values:  [65, 14, 12, 10, 2, 6, 6, 4, 4],
              x: this.props.dates,
              y: this.props.deaths,
              text: this.props.deaths.map(String),
              textpoistion: "auto",
              type: "line",
              line: {
                color: "red",
                width: 3,
              },
              outsidetextfont: { size: 20, color: "blue" },
              leaf: { opacity: 0.4 },
              marker: { line: { width: 3 } },
              branchvalues: "total",
              transforms: [
                {
                  type: "sort",
                  target: "y",
                  order: "ascending",
                },
              ],
            },
          ]}
          layout={{
            height: 500,
            width: 800,
            autosize: true,
            staticPlot: true,
            title: "USA deaths vs time",
            titlefont: { size: 20 },
            tracetoggle: false,
            displayModeBar: false,
            margin: {
              l: 60,
              r: 50,
              b: 80,
              t: 70,
              pad: 4,
            },
            autocolorscale: true,
          }}
          onHover={(event) => console.log(event.points[0].x)}
          //onHover = {(event) => console.log(event.points)}
          //onHover= {(event) =>console.log(event) }
        />

        </div>
      </div>
    );
  }
}

export default StateHistoricalChart;
