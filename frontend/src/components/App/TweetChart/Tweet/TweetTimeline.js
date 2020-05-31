import React from "react";
import { Timeline, TwitterTweetEmbed } from "react-twitter-widgets";
class TweetTimeline extends React.Component {
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
            height: "2000",
          }}
          onLoad={() => console.log("Timeline is loaded!")}
        />

      </div>
    );
  }
}

export default TweetTimeline;
