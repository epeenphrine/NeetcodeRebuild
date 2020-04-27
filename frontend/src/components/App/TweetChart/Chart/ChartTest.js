import React, { Component } from 'react'
import Plot from 'react-plotly.js'
import axios from 'axios'

export class ChartTest extends Component {

    //state = {
        //res: {},
        //stock: {},
        //x: [],
        //y: [],
        //tweet_id: "1253700113383534598"
    //}

    //componentDidMount() {
        //fetch(
            //`https://api.tdameritrade.com/v1/marketdata/SPX/pricehistory?apikey=${process.env.REACT_APP_TDA_API_KEY}&periodType=month&period=1&frequencyType=daily`
        //).then(res =>
            //res.json()).then(data => {
                //this.setState({
                    //res: data,
                    //y: data.candles.map(candle => 
                        //candle.close
                    //),
                    //x: data.candles.map(candle => 
                        ////epoch time converting to mm/ddd/yyyy format using template stringing 
                        //`${new Date(candle.datetime).getUTCMonth()+1}-${new Date(candle.datetime).getUTCDate()}-${new Date(candle.datetime).getUTCFullYear()}`
                        
                        //),
                    //stock: data.symbol
                //})
                //console.log(this.state.x)
                ////console.log(this.state.y)
                ////console.log(this.state.stock)
                ////console.log(this.state.res)
            //}).catch(() => console.log("couldn't get key"))


    //}

    //handlHover(event) {
        //console.log('got new date')
        //this.setState({
           //new_date: event
        //})
        //console.log(this.state.new_date)
        //console.log(this.state)
    //}

    render() {
        return (

            <div className='contininer'>
                <div className='row'>

                    <Plot
                        data={[
                            {
                                x: this.props.x,
                                y: this.props.y,
                                type: 'scatter',
                                mode: 'lines+markers',
                                marker: { color: 'blue' },
                            },
                        ]}
                        layout={{
                            autosize: true, title: this.props.stock, tracetoggle: false, displayModeBar: false, margin: {
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
                            autosize: true, title: 'Amount of tweets this day', tracetoggle: false, displayModeBar: false, margin: {
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