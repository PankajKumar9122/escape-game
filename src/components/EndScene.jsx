import {React, useState, useEffect} from 'react';

const EndScene = props => {
  const { start, end, endGame } = props;

  const [timeToFinish, setTimeToFinish] = useState('60:00');

  const calcGameDuration = () => {
    const gameDuration = end - start;
    const rawMins = Math.floor(gameDuration / 60000);
    const mins = rawMins < 10 ? '0' + rawMins : rawMins;
    const rawSecs = Math.floor((gameDuration % 60000) / 1000);
    const secs = rawSecs < 10 ? '0' + rawSecs : rawSecs;
    return `${mins}:${secs}`;
  }

  useEffect(()=> {
    endGame();
    setTimeToFinish(calcGameDuration());
  })

  return (
    <div className='flex flex-col justify-between p-12 bg-slate-100 rounded-lg text-center'>
      <h1 className='text-8xl my-4'>You win!</h1>
      <p className='text-3xl'>Well done, you managed to solve all the puzzles and save the painting.
      <br />
      <br />
      Your time is</p>
      <h3 className='text-4xl'>{timeToFinish}</h3>
    </div>
  )
}

export default EndScene;