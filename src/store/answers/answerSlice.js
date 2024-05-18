import { createSlice } from '@reduxjs/toolkit'

export const answerSlice = createSlice({
	name: 'answer',
	initialState: {
		rightAnswer: [],
		wrongAnswer: [],
	},
	reducers: {
		pushRightAnswer: (state, action) => {
			state.rightAnswer.push(action.payload)
		},
		pushWrongAnswer: (state, action) => {
			state.wrongAnswer.push(action.payload)
		},
	},
})

export const { pushRightAnswer, pushWrongAnswer } = answerSlice.actions

export default answerSlice.reducer
