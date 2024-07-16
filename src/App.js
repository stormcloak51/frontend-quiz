import React from 'react';

import {QuizCard} from './components/QuizCard/QuizCard.js';
import {QuizResult} from './components/QuizResult/QuizResult.js';

import './App.css';

function App() {
  const questions = [{question: 'Что такое React?', ans1: 'Библеотека', ans2: 'Хз', ans3: '51 элемент таблицы Менделеева', correct: 1}, {question: 'Почему птицы любят горшки?', ans1: 'Илон Маск', ans2: 'Из за обильного количества любви', ans3: 'Не придумал короче', correct: 3}, {question: 'Почему корейка не любит корейскую кухню?', ans1: 'Корейка любит покакать', ans2: 'Я не хочу отвечать на этот вопрос', ans3: 'Корейка любит меня', correct: 2}]
  const [count, setCount] = React.useState(0);
  const [countCorrect, setCountCorrect] = React.useState(0);
  return (
    <div className='App'>
      {count !== questions.length ? <QuizCard questions={questions} count={count} setCount={setCount} countCorrect={countCorrect} setCountCorrect={setCountCorrect}/> : <QuizResult setCount={setCount} amnt={questions.length} countCorrect={countCorrect} setCountCorrect={setCountCorrect}/>}

    </div>
  );
}

export default App;
