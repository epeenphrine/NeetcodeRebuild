import React from "react";

const Tweet = (props) => {
  const { handle, tweet, date } = props.data;

  return (
    <>
      {/* <div className="name">{handle}</div>
      <div className="msg">{tweet}</div>
      <div className="date">{date}</div> */}
    </>
  );
};

export default Tweet;
