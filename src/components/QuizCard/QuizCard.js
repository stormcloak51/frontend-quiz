import './QuizCard.scss'

function QuizCard(props) {
	const {questions, count, setCount, countCorrect, setCountCorrect} = props;

	const handleClick = (n) => {
		if (n === questions[count].correct) {
			setCountCorrect(countCorrect + 1)
		}
		setCount(count + 1)
	}

	return (
		<div className="wrap">
			<div className='QuizCard'>
				<h2>{questions[count].question}</h2>
				<ul>
					<li onClick={() => handleClick(1)}>{questions[count].ans1}</li>
					<li onClick={() => handleClick(2)}>{questions[count].ans2}</li>
					<li onClick={() => handleClick(3)}>{questions[count].ans3}</li>
				</ul>
			</div>
		</div>
	)
}


export {QuizCard};