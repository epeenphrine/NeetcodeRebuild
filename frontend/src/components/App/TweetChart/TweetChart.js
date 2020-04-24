import React, { Component } from 'react'
import Navlink from './NavLink'
import ChartTest from './Chart/ChartTest'
import TweetContainer from './TweetContainer/TweetContainer'
import TweetTest from './TweetContainer/TweetTest'

export class TweetChart extends Component {
    state = {
        res: {},
        stock: {},
        x: [],
        y: [],
        tweet_id: "1253700113383534598",
        new_date: ''
    }



    handleHover(event) {
        this.setState({
            new_date: event
        })
    }
    // pass function to child to update state 
    constructor(props) {
        super(props)
        this.handleHover = this.handleHover.bind(this)
    }



    
    componentDidMount() {
        fetch(
            `https://api.tdameritrade.com/v1/marketdata/SPX/pricehistory?apikey=${process.env.REACT_APP_TDA_API_KEY}&periodType=month&period=1&frequencyType=daily`
        ).then(res =>
            res.json()).then(data => {
                this.setState({
                    res: data,
                    y: data.candles.map(candle =>
                        candle.close
                    ),
                    x: data.candles.map(candle =>
                        //epoch time converting to mm/ddd/yyyy format using template stringing 
                        `${new Date(candle.datetime).getUTCMonth() + 1}-${new Date(candle.datetime).getUTCDate()}-${new Date(candle.datetime).getUTCFullYear()}`

                    ),
                    stock: data.symbol
                })
                //console.log(this.state.x)
                //console.log(this.state.y)
                //console.log(this.state.stock)
                //console.log(this.state.res)
            }).catch(() => console.log("couldn't get key"))
    }

    render() {
        return (
            <div>

                <div className='d-flex flex-column justify-content-around'>
                    <Navlink
                    />
                    <div className='d-flex flex-row justify-content-around flex-wrap'>
                        <ChartTest
                            stock={this.state.stock}
                            x={this.state.x}
                            y={this.state.y}
                            tweet_id={this.state.tweet_id}
                            handleHover={this.handleHover}
                        />

                        <TweetTest
                            tweet_id={this.state.tweet_id}
                            new_date={this.state.new_date}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default TweetChart
