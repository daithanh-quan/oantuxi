import React, { Component } from 'react'
import PlayingMachine from '../layouts/PlayingMachine'
import PlayingPoint from '../layouts/PlayingPoint'
import PlayingUser from '../layouts/PlayingUser'

export default class ScreenGame extends Component {
  render() {
    return (
      <div style={{ backgroundImage: "url('./img/bgGame.png')", width: '100%', height: '100%', position: 'fixed', backgroundSize: 'cover' }}>
        <div style={{ backgroundColor: '#fffffe29', position: 'fixed', width: '100%', height: '100%' }}></div>
        <div className="container">
          <div className="row">
            <div className="col-4">
              <PlayingUser />
            </div>
            <div className="col-4">
              <PlayingPoint />
            </div>
            <div className="col-4">
              <PlayingMachine />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
