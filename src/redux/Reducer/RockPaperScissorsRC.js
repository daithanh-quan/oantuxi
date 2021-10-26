import { CHOICE_MACHINE, CHOICE_USER, END_GAME } from "../constant/typeGameAction"

const stateDefault = {
  // điểm chơi
  goal: 0,
  playingTime: 0,
  result: "I'll join Avenger, because i am Thanh '_'",
  // mảng các giá trị hình ảnh
  arraySelective: [
    { ma: 'bua', url: './img/bua.png', },
    { ma: 'keo', url: './img/keo.png', },
    { ma: 'bao', url: './img/bao.png', },
  ],
  // sự lựa chọn của người chơi
  playerChoose: { ma: 'bao', url: './img/bao.png' },
  // của máy
  machine: { ma: 'bao', url: './img/bao.png', }
}

const RockPaperScissorsRC = (state = stateDefault, action) => {
  switch (action.type) {
    // render ra giao diện các hình ảnh
    case CHOICE_USER: {
      // set lại state playerChoose
      state.playerChoose.url = action.img.url
      state.playerChoose.ma = action.img.ma
      return { ...state }
    }
    // tạo random cho máy khi click
    case CHOICE_MACHINE: {
      let index = Math.floor(Math.random() * 3)
      state.machine = state.arraySelective[index]

      return { ...state }
    }
    case END_GAME: {
      state.playingTime += 1
      let player = { ...state.playerChoose }
      let machine = { ...state.machine }
      switch (player.ma) {
        case 'keo': if (machine.ma === 'keo') {
          state.result = "Hòa nhau !!"
        } else if (machine.ma === 'bao') {
          state.result = "Chiến Thắng"
          state.goal += 1
        } else {
          state.result = "Bạn đã thua !!"
        }
          break;
        case 'bua': if (machine.ma === 'keo') {
          state.result = "Chiến Thắng"
          state.goal += 1
        } else if (machine.ma === 'bao') {
          state.result = "Bạn đã thua !!"
        } else {
          state.result = "Hòa nhau !!"
        }
          break;
        case 'bao': if (machine.ma === 'keo') {
          state.result = "Bạn đã thua !!"
        } else if (machine.ma === 'bao') {
          state.result = "Hòa nhau !!"
        } else {
          state.result = "Chiến Thắng"
          state.goal += 1
        }
          break;
        default: return
      }
      return { ...state }
    }
    default: return { ...state }
  }
}

export default RockPaperScissorsRC