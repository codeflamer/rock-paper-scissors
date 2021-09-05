import { createSlice } from '@reduxjs/toolkit'

export const gameSlice = createSlice({
  name: 'game',
  initialState: {
    totalScore: 0,
    userAnswer:null,
    computerAnswer:null,
    userColor:null,
    computerColor:null,
    userImage:null,
    compImage:null,
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
    addUserImage: (state,action) => {
      state.userImage = action.payload;
    },
    addCompImage: (state,action) => {
      state.compImage = action.payload;
    },
    increaseTotalScore: (state) => {
      state.totalScore +=1;
    },
    decreaseTotalScore: (state) => {
      state.totalScore -= 1;
    },
  },
})

// Action creators are generated for each case reducer function
export const { addUserAnswer, addComputerAnswer, increaseTotalScore,decreaseTotalScore,addComputerColor,addUserColor,addUserImage,addCompImage } = gameSlice.actions

export const getUserAnswer = (state) => state.game.userAnswer;
export const getComputerAnswer = (state) => state.game.computerAnswer;
export const getTotalScore = (state) => state.game.totalScore;
export const getUserColor = (state) => state.game.userColor;
export const getComputerColor = (state) => state.game.computerColor;
export const getComputerImage = (state) => state.game.compImage;
export const getUserImage = (state) => state.game.userImage;

export default gameSlice.reducer