import React, { Component } from "react";


import StatesHistoricalChart from './StateHistoricalChart'

export class StateHistorical extends Component {

  render() {

    const deaths = []
    const dates = []
    const cases = []

    this.props.states_historical.forEach(element => {
        deaths.push(element.deaths)
        dates.push(element.date)
        cases.push(element.cases)
    });
    return <div>
      <StatesHistoricalChart  
        deaths = {deaths} 
        dates = {dates}
        cases = {cases}
      />
      </div>;

  }
}

export default StateHistorical;
