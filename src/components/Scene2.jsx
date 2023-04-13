import { React } from "react";
import Numpad from "./scene2-components/Numpad";
import NextSceneBtn from './NextSceneBtn';

function Scene2(props) {

  const {sceneChange, completeScene, sceneCompleted} = props

  return (
    <div
      className="
        self-center flex flex-col justify-center items-center
      "
    >
      <h1
        className="
          text-center
          text-3xl
          mb-4
        "
      >
        {sceneCompleted ? "You Cracked it!" : "What's the code?"}
      </h1>
      {!sceneCompleted && <Numpad revealButton={completeScene}/>}
      <p
      >
      {sceneCompleted ? "That one was easy... the next one won't be!" : "Click on the numbers to see if they are present in the code. A little hint to get you started: maybe brute force isn't the best way..."}
      </p>
      {sceneCompleted && <NextSceneBtn nextScene={sceneChange} text="Continue" />}
    </div>
  )
}

export default Scene2;