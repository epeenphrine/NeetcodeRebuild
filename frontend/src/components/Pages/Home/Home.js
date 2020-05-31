import React, { Component, Fragment } from 'react'

//components
import Cards from './Cards'

import './Home.css'

export class Home extends Component {
    state = {
        projects: [],
    }

    render() {
        const stuff = [1, 2, 3, 4, 5]
        const cards = stuff.map(stuf => {
            return (
                <Cards />
            )
        }
        )
        return (
            <Fragment>
                <div className="jumbotron jumbotron-fluid text-white">
                    <div className='container'>
                        <h1 className="display-4">Hello</h1>
                        <p className="lead">The site uses React as frontend and Django as backend</p>
                        <p className='lead'>Scroll down to see some web apps</p>
                        <a className='text-white' href="https://github.com/epeenphrine/neetcoderebuild">
                            {"</ view the source code />"}
                        </a>
                    </div>
                </div>
                <div className='row'>
                    {cards}
                </div>
            </Fragment>

        )
    }
}

export default Home