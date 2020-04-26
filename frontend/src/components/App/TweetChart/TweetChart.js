import React, { Component } from 'react'
import Navlink from './NavLink'
import ChartTest from './Chart/ChartTest'
import TweetTest from './Tweet/TweetTest'
import './TweetChart.css'

export class TweetChart extends Component {
    state = {
        res: {},
        stock: {},
        x: [],
        y: [],
        tweet_id: ["1254145835450933249", "1254050117767880706", "1254021070379769856", "1253788620642750464"],
        filtered_tweet_ids: [],
        new_date: [],
        neetcode_res: {},
        tweet_api_date: [],
        tweet_api_tweet_id: []
    }



    handleHover(event) {
        this.setState({
            filtered_tweet_ids: this.state.neetcode_res.filter(
                neetcode => neetcode.date === event
            )
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
                        `${new Date(candle.datetime).getUTCFullYear()}-${new Date(candle.datetime).getUTCMonth() + 1}-${new Date(candle.datetime).getUTCDate()}`

                    ),
                    stock: data.symbol
                })
                //console.log(this.state.y)
                //console.log(this.state.stock)
                //console.log(this.state.res)
            }).catch(() => console.log("couldn't get key"))

        fetch(`${process.env.REACT_APP_NEETCODE_API}`)
            .then(res => res.json())
            .then(data => {
                this.setState({
                    neetcode_res: data,
                })
                console.log(this.state.neetcode_res)
            })
            .catch(() => console.log("can't get neetcode api "))

    }

    render() {
        let tweets;
        if (this.state.filtered_tweet_ids) {
            tweets = this.state.filtered_tweet_ids.map(tweet => {
                return (
                    <TweetTest
                        key={tweet.tweet_id}
                        tweet_id={tweet.tweet_id}
                    />
                )
            })
        }
        return (
            <div>

                <div className='d-flex flex-column justify-content-around'>
                    <Navlink
                    />
                        <div className='row'>
                            <div className='d-inline-block p-3' >
                                <ChartTest
                                    stock={this.state.stock}
                                    x={this.state.x}
                                    y={this.state.y}
                                    tweet_id={this.state.tweet_id}
                                    handleHover={this.handleHover}
                                />
                            </div>
                            <div className='d-inline-block p-3' >
                                {tweets}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default TweetChart
