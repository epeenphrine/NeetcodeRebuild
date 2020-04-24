import React, { Component } from 'react'

export class Home extends Component {
    render() {
        return (
            <div className='container-fluid text-center'>
                <h1>
                    Hello!
                </h1>
                <h1 className='col-6'>the site uses React as Frontend and Django as backend</h1>
                <h1 classNAme=''>the purpose of this site is to try out deployment and development technologies. As well as learn some web design</h1>
                <h1 className='col-6' style={{marginTop:'150px'}}>
                    scroll down to see some web apps !
                </h1>
            </div>
            
        )
    }
}

export default Home