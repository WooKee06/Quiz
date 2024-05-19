'use client'

import Link from 'next/link'
import { useState } from 'react'
import { PiHandWavingFill } from 'react-icons/pi'
import { useDispatch } from 'react-redux'
import StarBg from '../components/StarBg'
import TestsPage from '../components/testsModal.jsx'
import { setCurrentUser } from '../store/user/userSlice.js'
import './page.scss'

export default function MainPage() {
	const [name, setName] = useState('')
	const [openModal, setOpenModal] = useState(false)
	const dispatch = useDispatch()
	const HandleOpenModal = () => {
		setOpenModal(true)
		dispatch(setCurrentUser(name))
	}
	const HandleCloseModal = () => {
		setOpenModal(false)
	}

	return (
		<div className='pm-page'>
			<StarBg />
			<div className='main-page__bg'>
				<h1>Wookee-tests</h1>
				<p>
					Здравствуйте, уважаемые коллеги! Мы рады видеть вас на нашем сайте,
					где вы сможете проверить свои знания и подготовиться к аккредитации.
					Наш портал предлагает широкий выбор тестов по различным направлениям
					профессиональной деятельности, включая ПМ 11.01, 01.01, 01.2, 02.02,
					02.03 и другие. Прохождение тестов на нашем сайте поможет вам оценить
					свой уровень знаний и определить области, требующие дополнительного
					изучения. Мы уверены, что наша платформа будет полезна для вас, и
					желаем успехов в подготовке к аккредитации!
				</p>

				<label className='label'>
					<span className='icon'>
						<svg
							className='w-6 h-6 text-gray-800 dark:text-white'
							aria-hidden='true'
							xmlns='http://www.w3.org/2000/svg'
							width='30'
							height='30'
							fill='none'
							viewBox='0 0 24 24'
						>
							<path
								stroke='currentColor'
								strokeWidth='1.25'
								d='M7 17v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z'
							></path>
						</svg>
					</span>
					<input
						type='text'
						value={name}
						onChange={e => setName(e.target.value)}
						className='input'
						placeholder='Введите имя:'
						autoComplete='off'
					/>
				</label>

				{name ? (
					<button onClick={HandleOpenModal} className='cta'>
						<span>Пройти тест</span>
						<svg width='15px' height='10px' viewBox='0 0 13 10'>
							<path d='M1,5 L11,5'></path>
							<polyline points='8 1 12 5 8 9'></polyline>
						</svg>
					</button>
				) : (
					<button className='cta-unuble'>
						<span>Пройти тест</span>
						<svg width='15px' height='10px' viewBox='0 0 13 10'>
							<path d='M1,5 L11,5'></path>
							<polyline points='8 1 12 5 8 9'></polyline>
						</svg>
					</button>
				)}
			</div>
			<TestsPage
				name={name}
				HandleCloseModal={HandleCloseModal}
				openModal={openModal}
			/>
			<div className='my-social'>
				<h2>
					Я там{' '}
					<span class='waving-hand'>
						<PiHandWavingFill />
					</span>{' '}
				</h2>
				<div className='links'>
					<Link href='https://t.me/WookeeFR'>Telegram</Link>
					<Link href='https://vk.com/wookee2006'>Vk</Link>
				</div>
			</div>
		</div>
	)
}
