import React from 'react';
import { useEffect } from 'react';
import NextSceneBtn from './NextSceneBtn';

const Scene1 = props => {
  const { sceneChange, startGame } = props;

  useEffect(()=> startGame(), [])

  return (
   <div
    className='
      flex
      flex-col
      self-center
      lg:mx-24
      lg:p-12
      bg-slate-100
      rounded-lg
      text-center
    '
   >
     <h1
      className='
        text-3xl
        py-2
      '
     >
      Welcome to Art Escape!
    </h1>
    <p>
      An escape game where you will have 15 minutes to solve a series of puzzles. Each of the puzzles will give you a clue to the identity of the world's most wanted art thief.
      If you solve the enigmas and identify the thief - you win! However, if you fail the world's finest cultural artefcts will forever be at risk.
    </p>
    <h3
      className='
        text-3xl
        py-2
      '
    >
      The Rules
    </h3>
    <ul>
      <li>Please don't use the internet to help you</li>
      <li>No looking in the source code while you're playing</li>
      <li>etc.</li>
    </ul>
    <div
      className='
        py-2
      '
    >
      <NextSceneBtn nextScene={sceneChange} text="Start" />
    </div>
   </div>
  )
}

export default Scene1;