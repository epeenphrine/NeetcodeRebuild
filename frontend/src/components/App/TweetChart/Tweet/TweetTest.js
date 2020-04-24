import { Timeline, TwitterTweetEmbed } from "react-twitter-widgets";
import TweetEmbed from 'react-tweet-embed'

import React, { Component } from 'react'

export class TweetTest extends Component {


    render() {
        return (
            <div>
                <h1>{this.props.new_date}</h1>
                <TweetEmbed id={this.props.tweet_id} options={{theme: 'dark'}}/>
            </div>
        )
    }
}

export default TweetTest
