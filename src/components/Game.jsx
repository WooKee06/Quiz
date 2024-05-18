export default function ({ data, stepClick, step, questions }) {
	const percentage = Math.round((step / questions.length) * 100)
	return (
		<>
			<div className='steps'>
				<h2>{step + 1}</h2>/<span>{questions.length}</span>
			</div>
			<div className='progress'>
				<div
					style={{ width: `${percentage}%` }}
					className='progress__inner'
				></div>
			</div>
			<h1 className='game-title'>{data.title}</h1>
			<ul>
				{data.variants.map((text, i) => (
					<li onClick={() => stepClick(i)} key={text}>
						{text}
					</li>
				))}
			</ul>
		</>
	)
}
