import Link from 'next/link'
import { FaRegCheckCircle } from 'react-icons/fa'
import { SlClose } from 'react-icons/sl'
import '../app/page.scss'

export default function testsModal({ name, openModal, HandleCloseModal }) {
	return (
		<div className={openModal ? 'tests-wrapper show' : 'tests-wrapper'}>
			<div className={openModal ? 'tests-show' : 'tests'}>
				<SlClose
					color='#fff'
					size={40}
					className='close-modal'
					onClick={HandleCloseModal}
				/>
				<h2>{name} можете выбирать ПМ:</h2>
				<div className='links'>
					<Link className='link-btn test-pm' href='/testpm'>
						<div className='link-btn__title'>
							<h2> C++ / тестировние ПО</h2>
							<FaRegCheckCircle size={20} />
						</div>

						<div className='link-btn__teacher'>
							<span>Преподаватель:</span>
							<h2>Магамедова А.Н</h2>
						</div>
					</Link>
					<Link className='link-btn pm11' href='/pm11'>
						<div className='link-btn__title'>
							<h2>SQL Server Management</h2>
							<FaRegCheckCircle size={20} />
						</div>

						<div className='link-btn__teacher'>
							<span>Преподаватель:</span>
							<h2>Салманова Ю.Р</h2>
						</div>
					</Link>
					<Link className='link-btn pm02' href='/pm02'>
						<div className='link-btn__title'>
							<h2>Технологии разработки ПО</h2>
							<FaRegCheckCircle size={20} />
						</div>

						<div className='link-btn__teacher'>
							<span>Преподаватель:</span>
							<h2>Мурадханова Д.Б</h2>
						</div>
					</Link>
					<Link className='link-btn pm01' href='/pm03'>
						<div className='link-btn__title'>
							<h2>Програмирование на JAVA</h2>
							<FaRegCheckCircle size={20} />
						</div>

						<div className='link-btn__teacher'>
							<span>Преподаватель:</span>
							<h2>Байрамов Н.Р</h2>
						</div>
					</Link>
					<Link className='link-btn pm07' href='/pm07'>
						<div className='link-btn__title'>
							<h2>Работа с сервером SQL</h2>
							<FaRegCheckCircle size={20} />
						</div>

						<div className='link-btn__teacher'>
							<span>Преподаватель:</span>
							<h2>Атемов А.Э</h2>
						</div>
					</Link>
					<Link className='link-btn pm04' href='/pm04'>
						<div className='link-btn__title'>
							<h2>Установка программного обеспечения</h2>
							<FaRegCheckCircle size={20} />
						</div>

						<div className='link-btn__teacher'>
							<span>Преподаватель:</span>
							<h2>Агарагимов М.Ю.</h2>
						</div>
					</Link>
				</div>
			</div>
		</div>
	)
}
