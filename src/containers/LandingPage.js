import React, { Component } from 'react'

class LandingPage extends Component {
  render() {
    return (
      <div>
        <h3>If you are trying to correct behavior</h3>
        <h3>...and you are tired of talking.</h3>
        <h3>You are in the right place!</h3>
        <h1>Welcome To Parent In Your Pocket!</h1>
        <a className="home-page-link" href="/kids">All Of Your Children</a> <br />
        <a className="home-page-link" href="/kids/new">Make A New Kid</a> <br />
      </div>
    )
  }
}

export default LandingPage