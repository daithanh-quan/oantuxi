import React, { Component } from 'react';
import { connect } from 'react-redux'
import { handleChoiceUser } from '../redux/action/ActionGame';
class PlayingUser extends Component {

  renderSelective = () => {
    let { arraySelective } = this.props.arraySelective
    return arraySelective.map((img, index) => {
      return (
        <button
          className="col-3 btn btn-info"
          key={index}
          onClick={() => {
            this.props.dispatch(handleChoiceUser(img))
          }}
        >
          <img src={img.url} alt="" width={'50px'} />
        </button>
      )
    })
  }
  render() {
    let { playerChoose } = this.props.arraySelective
    return (
      <div className=" my-5 text-center" >
        <div className="d-flex justify-content-center align-center mb-5 ">
          <div className="speech-bubble">
            <img src={playerChoose.url} width={'50px'} alt="" style={{
              position: 'absolute',
              top: 50,
              transform: 'translate(-50% , -50% ) rotateY(180deg)'
            }} />
          </div>
        </div>
        <img src="./img/player.png" alt="player" width={'150px'} height={'150px'} />
        <div className="container-fluid">
          <div className="row justify-content-between">
            {this.renderSelective()}
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    arraySelective: state.RockPaperScissorsRC
  }
}

export default connect(mapStateToProps)(PlayingUser);