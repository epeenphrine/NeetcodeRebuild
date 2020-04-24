import React from "react";
import "./Chart.css";

class Chart extends React.Component {

  render() {
    let { stock } = this.state;
    return this.state.stock ? (
      <div className="chart-container">
        <h2>{stock.symbol}</h2>
        <p>{stock.description}</p>
        <h4>Closing Price: {stock.closePrice}</h4>
      </div>
    ) : (
        <h1> Grabbing stock prices </h1>
      );

  }
}

export default Chart;
