import React, { Component } from 'react'

export class Table extends Component {

    render() {

        const global = this.props.global
        const thColNew = ["New Confirmed", "New Deaths", "New Recovered"]
        const thColTotal = ["Total Confirmed", "Total Deaths", "Total Recovered"]
        const globalNew = [global.NewConfirmed, global.NewDeaths, global.NewRecovered,]
        const globalTotal = [global.TotalConfirmed, global.TotalDeaths, global.TotalRecovered]

        const thNew = thColNew.map((th, i) => {
            const item = globalNew[i]
            return (
                <tr>
                    <th scope="row" key={th}>
                        <h3>
                            {th}
                        </h3>
                    </th>
                    <td>
                        <h3 key={i}>
                            {parseInt(item, 10).toLocaleString()}
                        </h3>
                    </td>
                </tr>
            )
        })
        const thTotal = thColTotal.map((th, i) => {
            const item = globalTotal[i]
            return (
                <tr key={th}>
                    <h3>
                        <th scope="row" >{th}</th>
                    </h3>
                    <td>
                        <h3>

                            {parseInt(item, 10).toLocaleString()}
                        </h3>
                    </td>
                </tr>
            )
        })


        console.log(this.props.global)
        return (
            <div>
                <div className="row">
                    <div className="total-col col-sm-6">
                        <h1 className="text-center">Global Total</h1>
                        <table className="table table-hover ">
                            <tbody>
                                {thTotal}
                            </tbody>
                        </table>
                    </div>
                    <div className="new-col col-sm-6">
                        <h1 className="text-center">Global New</h1>
                        <table className="table table-hover ">
                            <tbody>
                                {thNew}
                            </tbody>
                        </table>
                    </div>
                </div>
                <h1>
                    {global.NewConfirmed}
                </h1>

            </div>
        )
    }
}

export default Table
