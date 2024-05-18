import { configureStore } from '@reduxjs/toolkit'
import answerSlice from './answers/answerSlice'
import userSlice from './user/userSlice'

export const store = configureStore({
	reducer: {
		user: userSlice,
		answer: answerSlice,
	},
})
