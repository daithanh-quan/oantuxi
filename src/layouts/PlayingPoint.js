import React, { Component } from 'react';
import { connect } from 'react-redux'
import { handleEndGame, handleRandomOfMachine } from '../redux/action/ActionGame';
class PlayingPoint extends Component {
  render() {
    let { goal, playingTime, result } = this.props
    return (
      <div className="text-center my-5">
        <h1 className="font-game text-warning ">{result}</h1>
        <p className="text-success" style={{ fontSize: '30px', fontWeight: 'bold' }}>Số bàn thắng: <span className="text-light">{goal}</span></p>
        <p className="text-success" style={{ fontSize: '30px', fontWeight: 'bold' }}>Số bàn chơi: <span className="text-light">{playingTime}</span></p>
        <button
          className="btn btn-success my-4"
          onClick={() => {
            let account = 0

            let randomSelect = setInterval(() => {
              this.props.dispatch(handleRandomOfMachine())
              account++
              if (account > 20) {
                clearInterval(randomSelect)
                this.props.dispatch(handleEndGame())
              }

            }, 100)

          }}
        >
          Play Game</button>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    goal: state.RockPaperScissorsRC.goal,
    playingTime: state.RockPaperScissorsRC.playingTime,
    result: state.RockPaperScissorsRC.result
  }
}

export default connect(mapStateToProps)(PlayingPoint);