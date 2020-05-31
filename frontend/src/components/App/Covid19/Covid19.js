import React, { Component } from 'react'
import Chart from './Chart/Chart'
import Table from './Table'

export class Covid19 extends Component {
    state = {
        global: {},
        states_data: [],
        data: []
    }
    
    componentDidMount() {
        fetch(
            `https://api.covid19api.com/summary`
        )
            .then(res =>
                res.json()).then(data => {
                    this.setState({
                        global: data.Global,
                        data: data
                    })
                })
            .catch(() => console.log("couldn't get key"))

        fetch(
            `http://192.168.86.31:1500/proxy/covid`, {
        })
            .then(res =>
                res.json()).then(data => {
                    this.setState({
                        states_data: data
                    })
                }).catch((err) => console.log(err))
        console.log("componenet did update")
        const testing = process.env.REACT_APP_TDA_PROXY
        console.log(testing)
    }

    render() {

        const global = this.state.global
        let usa_total = 0
        let states = []
        let positives = []
        let usa = []
        this.state.states_data.forEach(
            item => {
                usa_total += item.positive
            }
        )
        this.state.states_data.forEach(
            item => {
                console.log(item)
                states.push(item.state)
                positives.push(item.positive)
                usa.push(usa_total.toLocaleString())
            }
        )
        
        return (
            <div className="covid-19 container-fluid">
                <div className="my-4">
                    <Table
                        global={global}
                    />
                </div>

                <div className="row my-5">
                    <Chart
                        usa_total={usa_total}
                        states={states}
                        positives={positives}
                        usa={usa}
                    />

                </div>
            </div>
        )
    }
}

export default Covid19
