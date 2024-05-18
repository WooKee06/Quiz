'use client'

import { pushRightAnswer, pushWrongAnswer } from '@/store/answers/answerSlice'
import { useState } from 'react'
import { IoCaretBackCircleOutline } from 'react-icons/io5'
import { useDispatch } from 'react-redux'
import Game from '../../components/Game'
import Result from '../../components/Result'
import StarBg from '../../components/StarBg'
import '../page.scss'
import questions from './data'

export default function Pm07Page() {
	const [step, setStep] = useState(0)
	const [correct, setCorrect] = useState(0)
	const question = questions[step]
	const dispatch = useDispatch()

	const stepClick = i => {
		setStep(step + 1)

		// Добавляем userAnswer к вопросу
		const answeredQuestion = { ...question, userAnswer: i }

		if (i === question.correct) {
			setCorrect(correct + 1)
			dispatch(pushRightAnswer(answeredQuestion))
		} else {
			dispatch(pushWrongAnswer(answeredQuestion))
		}
	}

	const restart = 'pm07'

	return (
		<div className='pm-page'>
			<StarBg />
			<button onClick={() => history.back()}>
				<IoCaretBackCircleOutline size={20} />
				Назад
			</button>
			<div className='App'>
				{step !== questions.length ? (
					<Game
						questions={questions}
						step={step}
						stepClick={stepClick}
						data={question}
					/>
				) : (
					<Result restart={restart} questions={questions} correct={correct} />
				)}
			</div>
		</div>
	)
}
