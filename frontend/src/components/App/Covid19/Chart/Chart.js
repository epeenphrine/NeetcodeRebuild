
import React, { Component } from 'react'
import Plot from 'react-plotly.js'

export class Chart extends Component {


    render() {
        return (
            <div className='row'>
                <div className="d-inline p-6">
                    <Plot
                        data={[
                            {
                                //labels:  ["Eve", "Cain", "Seth", "Enos", "Noam", "Abel", "Awan", "Enoch", "Azura"],
                                //parents: ["", "Eve", "Eve", "Seth", "Seth", "Eve", "Eve", "Awan", "Eve" ],
                                //values:  [65, 14, 12, 10, 2, 6, 6, 4, 4],
                                labels: this.props.states,
                                parents: this.props.usa,
                                values: this.props.positives,
                                type: 'sunburst',
                                outsidetextfont: { size: 20, color: "#377eb8" },
                                leaf: { opacity: 0.4 },
                                marker: { line: { width: 3 } },
                                branchvalues: 'total',
                            },
                        ]}
                        layout={{
                            height: 500, width: 500, autosize: true, title: 'COVID 19 statistics', titlefont: { size: 20 }, tracetoggle: false, displayModeBar: false, margin: {
                                l: 60,
                                r: 50,
                                b: 80,
                                t: 70,
                                pad: 4
                            },
                            autocolorscale: true,

                        }}
                        onHover={(event) => console.log(event.points[0].x)}
                    //onHover = {(event) => console.log(event.points)}
                    //onHover= {(event) =>console.log(event) }
                    />

                </div>
                <div className="d-inline p-6">
                    <Plot
                        data={[
                            {
                                //labels:  ["Eve", "Cain", "Seth", "Enos", "Noam", "Abel", "Awan", "Enoch", "Azura"],
                                //parents: ["", "Eve", "Eve", "Seth", "Seth", "Eve", "Eve", "Awan", "Eve" ],
                                //values:  [65, 14, 12, 10, 2, 6, 6, 4, 4],
                                x: this.props.states,
                                y: this.props.positives,
                                text: this.props.positives.map(String),
                                textpoistion: "auto",
                                type: 'bar',
                                outsidetextfont: { size: 20, color: "#377eb8" },
                                leaf: { opacity: 0.4 },
                                marker: { line: { width: 3 } },
                                branchvalues: 'total',
                                transforms: [{
                                    type: 'sort',
                                    target: "y",
                                    order: "ascending"
                                }]
                            },
                        ]}
                        layout={{
                            height: 500, width: 1000, autosize: true, staticPlot: true, title: 'COVID 19 statistics', titlefont: { size: 20 }, tracetoggle: false, displayModeBar: false, margin: {
                                l: 60,
                                r: 50,
                                b: 80,
                                t: 70,
                                pad: 4
                            },
                            autocolorscale: true,

                        }}
                        onHover={(event) => console.log(event.points[0].x)}
                    //onHover = {(event) => console.log(event.points)}
                    //onHover= {(event) =>console.log(event) }
                    />
                </div>

            </div>

        )
    }
}

export default Chart 