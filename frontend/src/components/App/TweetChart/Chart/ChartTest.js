import React, { Component } from 'react'
import Plot from 'react-plotly.js'

export class ChartTest extends Component {


    render() {
        return (

            <div className='container'>
                <div className='row line-chart'>
                    <Plot
                        data={[
                            {
                                x: this.props.x,
                                y: this.props.y,
                                line: {shape: "spline", smoothing: 0.5},
                                type: 'scatter',
                                mode: 'lines+markers',
                                marker: { color: 'blue' },
                            },
                        ]}
                        layout={{
                            autosize: true, title: 'S & P 500 ', titlefont: {size: 20}, tracetoggle: false, displayModeBar: false, margin: {
                                l: 60,
                                r: 50,
                                b: 80,
                                t: 70,
                                pad: 4
                            }
                        }}
                        onHover={(event) => this.props.handleHover(event.points[0].x)}
                    //onHover = {(event) => console.log(event.points)}
                    //onHover= {(event) =>console.log(event) }
                    />
                </div>
                <div className='row'>

                    <Plot
                        data={[
                            {
                                x: this.props.x,
                                y: this.props.y_bar,
                                type: 'bar',
                                mode: 'lines+markers',
                                marker: { color: 'red' },
                            },
                        ]}
                        layout={{
                            autosize: true, title: 'Tweet volume during market days', ttitlefont: {size: 30}, tracetoggle: false, displayModeBar: false, margin: {
                                l: 60,  
                                r: 40,
                                b: 40,
                                t: 80,
                                pad: 4
                            }
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

export default ChartTest