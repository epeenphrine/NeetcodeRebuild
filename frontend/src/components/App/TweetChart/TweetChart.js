import React, { Component } from 'react'
import Navlink from './NavLink'
import ChartTest from './Chart/ChartTest'
import TweetTest from './Tweet/TweetTest'
import TweetTimeline from './Tweet/TweetTimeline'
import './TweetChart.css'

export class TweetChart extends Component {
    state = {
        res: {},
        stock: {},
        x: [],
        x_selected: '',
        y: [],
        y_bar: [],
        filtered_tweet_ids: [],
        neetcode_res: [],
        total_tweets_dates: [],
        total_tweets: [],
        tweets_test: ['1254767509460234243', '1254769296280031232', '1254575880510287872', '1254518803888734217', '1254481206936326145']
    }

    handleHover(event) {
        this.setState({
            x_selected: event,
            filtered_tweet_ids: this.state.neetcode_res.filter(
                item => item.tweet_date === event
            ),
            hover: true
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
            `http://192.168.86.31:1500/proxy/tda`
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

        fetch(`http://192.168.86.31:1500/proxy/tweet`)
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
        //don't call stuff in here by this.

        let tweets;
        let tweets_heading;

        if (this.state.filtered_tweet_ids.length != 0) {
            tweets = this.state.filtered_tweet_ids.map(tweet => {
                return (
                    <TweetTest
                        key={tweet.id}
                        tweet_id={tweet.tweet_id}
                    />
                )
            })
            tweets_heading =
                <h2 className='text-center'>
                    Tweets on {this.state.x_selected}
                </h2>
        }
        let y_bar = []
        this.state.x.forEach(
            item => {
                var count = 0
                this.state.neetcode_res.forEach(
                    item1 => {
                        if (item === item1.tweet_date) {
                            count += 1
                        }
                    }
                )
                y_bar.push(count)
            }
        )
        return (
            <div className='tweet-chart container-fluid'>
                <iframe width="100%" height="500" src="https://www.youtube.com/embed/GI7sBsBHdCk?autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <div className='d-flex flex-column justify-content-around'>
                <h1 className="text-center m-5">TRUMP's PUMP</h1>
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

                        <div className='d-inline-block p-2' >
                            {tweets_heading}
                            <div className='overflow-y '>

                                {tweets}
                            </div>
                        </div>
                        <div className='d-inline-block p-2' >
                            <h2 className='text-center'>Recent Tweets</h2>
                            <TweetTimeline />
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}

export default TweetChart