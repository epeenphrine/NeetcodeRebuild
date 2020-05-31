import React, { Component } from "react";

import './Navbar.css'

export class Nav extends Component {

  render() {
    return (
      <div className='my-nav'>
        <nav
          className="navbar navbar-expand-lg navbar-dark bg-dark"
        >
            <a className="navbar-brand" href="/" >
              NEETcode
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <a
                  className="nav-item nav-link active"
                  href="https://github.com/epeenphrine"
                >
                  github.com/epeenphrine
                  <span className="sr-only">(current)</span>
                </a>
                <a className="nav-item nav-link current" href="/about">
                  about/contact
                </a>
                <a className="nav-item nav-link disabled" href="#">
                  Disabled
                </a>
              </div>

            </div>
        </nav>
      </div>
    );
  }
}

export default Nav;
