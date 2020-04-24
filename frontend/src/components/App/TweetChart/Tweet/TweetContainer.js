import React from "react";
import Tweet from "../Tweet/Tweet";
import { Timeline, TwitterTweetEmbed } from "react-twitter-widgets";
class TweetContainer extends React.Component {
  state = { articles: [] };

  render() {
    return (
      <div 
      >
        <Timeline
          dataSource={{
            sourceType: "profile",
            screenName: "realDonaldTrump",
          }}
          options={{
            username: "realDonaldTrump",
            theme: "dark",
            height: "1065",
          }}
          onLoad={() => console.log("Timeline is loaded!")}
        />

      </div>
    );
  }
}

export default TweetContainer;
