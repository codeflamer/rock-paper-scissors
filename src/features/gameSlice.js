import { createSlice } from '@reduxjs/toolkit'

export const gameSlice = createSlice({
  name: 'game',
  initialState: {
    totalScore: 0,
    userAnswer:null,
    computerAnswer:null,
    userColor:null,
    computerColor:null
  },
  reducers: {
    addUserAnswer: (state,action) => {
      state.userAnswer = action.payload;
    },
    addComputerAnswer: (state,action) => {
      state.computerAnswer = action.payload;
    },
    addComputerColor: (state,action) => {
      state.computerColor = action.payload;
    },
    addUserColor: (state,action) => {
      state.userColor = action.payload;
    },
    increaseTotalScore: (state) => {
      state.value +=1;
    },
    decreaseTotalScore: (state) => {
      state.value -= 1;
    },
  },
})

// Action creators are generated for each case reducer function
export const { addUserAnswer, addComputerAnswer, increaseTotalScore,decreaseTotalScore,addComputerColor,addUserColor } = gameSlice.actions

export const getUserAnswer = (state) => state.game.userAnswer;
export const getComputerAnswer = (state) => state.game.computerAnswer;
export const getTotalScore = (state) => state.game.totalScore;
export const getUserColor = (state) => state.game.userColor;
export const getComputerColor = (state) => state.game.computerColor;

export default gameSlice.reducer