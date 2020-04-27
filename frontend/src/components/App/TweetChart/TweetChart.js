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
        y_bar: [],
        filtered_tweet_ids: [],
        neetcode_res: [],
        total_tweets_dates: [],
        total_tweets: [],
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
    formatDate(date) {
        var d = new Date(date),
            month = '' + (d.getUTCMonth() + 1),
            day = '' + d.getUTCDate(),
            year = d.getUTCFullYear();

        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;

        return [year, month, day].join('-');
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
                    //`${new Date(candle.datetime).getUTCFullYear()}-${new Date(candle.datetime).getUTCMonth() + 1}-${new Date(candle.datetime).getUTCDate()}`
                    {
                        return (this.formatDate(candle.datetime))
                    }
                    ),
                    stock: data.symbol
                })
                //console.log(this.state.x)
                //console.log(this.state.y)
                //console.log(this.state.stock)
                //console.log(this.state.res)
            }).catch(() => console.log("couldn't get key"))

        fetch(`${process.env.REACT_APP_NEETCODE_API}`)
            .then(res => res.json())
            .then(data => {
                this.setState({
                    neetcode_res: data,
                    y_bar: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,23,4,5]
                })
                //console.log(this.state.neetcode_res)
            })
            .catch(() => console.log("can't get neetcode api "))


    }

    render() {
        //don't call stuff in here by this.
       
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
       
        
        let y_bar = [] 

        this.state.x.forEach(
            item => {
                var count = 0 
                this.state.neetcode_res.forEach(
                    item1 => {
                        if ( item === item1.date) {
                            count += 1
                        }
                    }
                )
                y_bar.push(count)
            }
        )

        return (
            <div>

                <div className='d-flex flex-column justify-content-around'>
                    <Navlink
                    />

                    <div className='row container-fluid'>
                        <div className='d-inline-block p-3' >
                            <ChartTest
                                stock={this.state.stock}
                                x={this.state.x}
                                y={this.state.y}
                                handleHover={this.handleHover}
                                y_bar={y_bar}

                            />
                        </div>
                        <div className='d-inline-block p-3' >
                            <h2>what trump tweeted this day</h2>
                            {tweets}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default TweetChart
