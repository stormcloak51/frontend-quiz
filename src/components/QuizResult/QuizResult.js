import './QuizResult.scss'
import gratsImg from '../../img/grats.jpg'

function QuizResult(props) {
	const {amnt, setCount, setCountCorrect, countCorrect} = props

	const playAgain = () => {
		setCount(0);
		setCountCorrect(0);
	} 

	return (
		<div className="wrap">
			<div className='QuizResult'>
				<h2>Правильных ответов {countCorrect} из {amnt}</h2>
				<img src={gratsImg} alt="Congratulations" />
				<button onClick={() => playAgain()}>Пройти заново</button>
			</div>
		</div>
	)

}

export {QuizResult}