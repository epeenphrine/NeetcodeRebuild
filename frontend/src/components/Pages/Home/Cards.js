
import React, { Component } from 'react'

import './Cards.css'

export class Cards extends Component {
    render() {
        return (
            <div className='my-card'>
                <div className="card" style={{ width: '18rem' }}>
                    <img src="https://th.bing.com/th/id/OIP.CvElzdu7uM76Z3hMXRWx_gHaHa?pid=Api&rs=1" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Cards
