'use client'
import Link from 'next/link'
import { MdOutlineRestartAlt } from 'react-icons/md'
import { useSelector } from 'react-redux'

export default function Result({ restart, correct, questions }) {
	const successList = [
		'https://i.pinimg.com/564x/22/1f/4a/221f4a3cdbb7b74d9374b1dcd6ac53ab.jpg',
		'https://i.pinimg.com/564x/92/b0/b2/92b0b27b3ee2c4f42528ac135f8965c1.jpg',
		'https://i.pinimg.com/564x/63/68/0b/63680bc7f5020f5446259126b2ce0de0.jpg',
		'https://i.pinimg.com/564x/ed/f2/7f/edf27fcb251e0fd992a2784e7ed6e95d.jpg',
		'https://i.pinimg.com/564x/0f/67/29/0f67293c02526a2cf19fe754ac80b889.jpg',
		'https://i.pinimg.com/564x/00/e2/39/00e2394cc29d9e8e53e3eb84a16da8c5.jpg',
		'https://i.pinimg.com/736x/c7/fb/02/c7fb025c2cc7b4e9f30a717488efbf0e.jpg',
		'https://i.pinimg.com/564x/30/a0/54/30a054cf9bf350b4715cc78ba6724031.jpg',
		'https://i.pinimg.com/564x/f4/1d/6e/f41d6e9dc95394f5d2a573ff90f4f681.jpg',
		'https://i.pinimg.com/564x/08/4a/cf/084acff920ead16b1906539455660092.jpg',
		'https://i.pinimg.com/originals/58/63/b2/5863b2517825b2fefd15cbd19f122711.jpg',
	]

	let randomNumber = Math.round(Math.random() * 10)
	const userName = useSelector(state => state.user.currentUser)
	const goodCorrect = Math.round(questions.length / 2)
	return (
		<div className='result'>
			<div className='result__img'>
				<img src={`${successList[randomNumber]}`} />
			</div>

			<div className='result__info'>
				{correct >= goodCorrect ? (
					<h2>
						<strong>{userName}</strong>, поздравляю с успешным прохождением
						теста! Это отличный результат, который показывает твои знания и
						способности. Продолжай двигаться вперёд и достигать новых вершин!
						<br />
						<hr />
						<span>
							Вы набрали <strong>{correct}</strong>
							правельных ответов из <strong>{questions.length}</strong>
						</span>
					</h2>
				) : (
					<h2>
						{userName}, поздравляю с успешным прохождением теста! Хотя, если
						честно, результат мог бы быть и лучше. Но не отчаивайся, у тебя ещё
						есть время подтянуть свои знания. Удачи! <br />
						<hr />
						<span>
							Вы набрали <strong>{correct} </strong> правельных ответов из{' '}
							<strong>{questions.length}</strong>
						</span>
					</h2>
				)}
				<div className='btns'>
					<Link className='check-result' href='/result'>
						<button className='resilt-btn'>Посмотреть результат</button>
					</Link>
					<a className='restart' href={`/${restart}`}>
						<button className='resilt-btn'>
							<MdOutlineRestartAlt color='#ffffff' size={25} />
						</button>
					</a>
				</div>
			</div>
		</div>
	)
}
