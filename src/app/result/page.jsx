'use client'
import StarBg from '@/components/StarBg'
import Link from 'next/link'
import { useSelector } from 'react-redux'
import style from './page.module.scss'

export default function Result() {
	const rightAnswer = useSelector(state => state.answer.rightAnswer)
	const wrongAnswer = useSelector(state => state.answer.wrongAnswer)

	return (
		<div className={style.app}>
			<StarBg />
			<div className={style.result}>
				<h2>Ваш результат</h2>
				<div className={style.answers}>
					<h3>Правельные ответы:</h3>
					{rightAnswer.map((data, index) => (
						<div className={style.resiltItem} key={index}>
							<h1 className={style.gameTitle}>{data.title}</h1>
							<ul>
								{data.variants.map((text, i) => (
									<li
										style={{
											backgroundImage:
												i === data.correct
													? ' linear-gradient(to top, #37ecba 0%, #72afd3 100%)'
													: '',
											color: i === data.correct ? '#fff' : '',
											border: i === data.correct ? 'none' : '',
										}}
										key={text}
									>
										{text}
									</li>
								))}
							</ul>
						</div>
					))}
					<br />
					<h3>Неправельные ответы:</h3>
					{wrongAnswer.map((data, index) => (
						<div className={style.resiltItem} key={index}>
							<h1 className={style.gameTitle}>{data.title}</h1>
							<ul>
								{data.variants.map((text, i) => (
									<li
										style={{
											backgroundImage:
												i === data.correct
													? 'linear-gradient(to top, #37ecba 0%, #72afd3 100%)'
													: i === data.userAnswer
													? ' linear-gradient(to top, #ff0844 0%, #ffb199 100%)'
													: '',
											color:
												i === data.correct || i === data.userAnswer
													? '#fff'
													: '',
											border:
												i === data.correct || i === data.userAnswer
													? 'none'
													: '',
										}}
										key={text}
									>
										{text}
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
				<Link className={style.btn} onClick={() => history.back()} href=''>
					<button className='resilt-btn'>Повторить тест</button>
				</Link>
			</div>
		</div>
	)
}
