import { Timeline, TwitterTweetEmbed } from "react-twitter-embed";
import TweetEmbed from 'react-tweet-embed'

import React, { Component } from 'react'

export class TweetTest extends Component {


    render() {
        return (
            <div>
                <TweetEmbed id={this.props.tweet_id} options={{theme: 'dark'}} /> 
            </div>
        )
    }
}

export default TweetTest
