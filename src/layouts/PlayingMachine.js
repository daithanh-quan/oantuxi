import React, { Component } from 'react';
import { connect } from 'react-redux'
class PlayingMachine extends Component {
  render() {
    let keyframe = `@keyframes randomTopToBottom${Date.now()} {
      0% {top:0px},
      25% {top:100px},
      50% {top:200px},
      75% {top:100px},
      100% {top:0px}
    }`
    return (
      <div className="mt-5 text-center">
        <div className="d-flex justify-content-center align-center mb-5 ">
          <style>
            {keyframe}
          </style>
          <div className="speech-bubble">
            <img src={this.props.machine.url} width={'50px'} alt="" style={{
              position: 'absolute',
              top: 50,
              transform: 'translate(-50% , -50% ) ',
              animation: `randomTopToBottom${Date.now()} linear 0.8s`
            }} />
          </div>
        </div>
        <img src="./img/playerComputer.png" alt="player" width={'150px'} height={'150px'} />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    machine: state.RockPaperScissorsRC.machine
  }
}

export default connect(mapStateToProps)(PlayingMachine);