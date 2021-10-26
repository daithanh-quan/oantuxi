import { CHOICE_MACHINE, CHOICE_USER, END_GAME } from "../constant/typeGameAction"

export const handleChoiceUser = (img) => {
  return {
    type: CHOICE_USER,
    img: img
  }
}
export const handleRandomOfMachine = () => {
  return {
    type: CHOICE_MACHINE
  }
}
export const handleEndGame = () => {
  return {
    type: END_GAME
  }
}