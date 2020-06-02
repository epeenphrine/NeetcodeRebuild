import React, { Component } from "react";
import Chart from "./Chart/Chart";
import Table from "./Table";
import StateHistorical from "./States/StateHistorical";

export class Covid19 extends Component {
  state = {
    global: {},
    states_data: [],
    states_historical: [],
    countries_historical: {},
    global_data: [],
    search: "",
  };

  //api call and w/e
  setCountriesHistorical() {
    fetch(`https://corona.lmao.ninja/v2/historical?lastdays=90`, {})
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          countries_historical: data,
        });
      })
      .catch((err) => console.log(err));
  }

  setGlobalSummary() {
    fetch(`https://api.covid19api.com/summary`)
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          global: data.Global,
          global_data: data,
        });
      })
      .catch((e) => console.log(e));
  }

  setStatesHistorical() {
    fetch("https://corona.lmao.ninja/v2/nyt/usa", {})
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          states_historical: data,
        });
      })
      .catch((err) => console.log(err));
  }

  setStatesCurrent() {
    fetch(`http://192.168.86.31:1500/proxy/covid`, {})
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          states_data: data,
        });
      })
      .catch((err) => console.log(err));
  }

  componentDidMount() {
    this.setGlobalSummary();
    this.setStatesCurrent();
    this.setStatesHistorical();
    console.log(this.state.states_historical);
    console.log("component did mount");
  }

  setSearch(e) {
    console.log(e);
    this.setState({
      search: e,
    });
  }

  render() {
    const global = this.state.global;
    let usa_total = 0;
    let states = [];
    let positives = [];
    let usa = [];
    this.state.states_data.forEach((item) => {
      usa_total += item.positive;
    });
    this.state.states_data.forEach((item) => {
      states.push(item.state);
      positives.push(item.positive);
      usa.push(usa_total.toLocaleString());
    });

    //filter for search box
    const filter = states
      .filter((state) => state.toLowerCase().includes(this.state.search))
      .map((filtereditem) => <li>{filtereditem}</li>);

    return (
      <div className="covid-19 container-fluid">
        <div className="my-4">
          <Table global={global} />
        </div>
        <div className="row my-5">
          <StateHistorical
            states_historical={this.state.states_historical}
            usa_total={usa_total}
            states={states}
            positives={positives}
            usa={usa}
          />
        </div>

        <input type="text" onChange={(e) => this.setSearch(e.target.value)} />
        {filter}
      </div>
    );
  }
}

export default Covid19;
