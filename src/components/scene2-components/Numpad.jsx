import { React, useState, useEffect } from "react";
import NumpadButton from "./NumpadButton";

function Numpad(props) {
  const { revealButton } = props;
  const [answerCode, setAnswerCode] = useState(generateAnswerCode())
  const [inputCode, setInputCode] = useState(["*", "*", "*", "*"])
  const [attempts, setAttempts] = useState(0);

  function generateButtons(numOfBtns) {
    const digits = [];
    for (let i = 0; i < numOfBtns; i++) {
      digits.push(i + 1)
    }
    return digits.map(num => <NumpadButton key={num} digit={num} handleClick={() => handleInputClick(num)}/>)
  }

  function generateAnswerCode() {
    const codeArr = Array(4).fill()
                            .map(() => Math.ceil(Math.random() * 9))
    return codeArr;
  }

  useEffect(() => {
    if (answerCode.join("") === inputCode.join("")) {
      revealButton()
    }
  }, [inputCode])

  function handleInputClick(inputNum) {
    updateInputCode(inputNum)
    addAttempt()
  }

  function updateInputCode(inputDigit) {
    setInputCode(prevInputCode => answerCode.map((ansNum, index) => {
      if (prevInputCode[index] === '*') {
        return ansNum === inputDigit ? inputDigit.toString() : "*"
      } else {
        return prevInputCode[index]
      }
    }))
  }

  function addAttempt() {
    setAttempts(prev => prev + 1)
  }

  useEffect(() => {
    if (attempts % 5 === 0 && answerCode.join("") !== inputCode.join("")) {
      resetCode()
    }
  }, [attempts])

  function resetCode() {
    setAnswerCode(generateAnswerCode())
    setInputCode(["*", "*", "*", "*"])
  }

  function hintReveal(attempts) {
    let hint = " You're going to need your keyboard";

    if (attempts > 60) {
      hint = " How do you select everything?"
    }

    return hint
  }

    return (
    <div className="grid grid-cols-3 gap-4 w-96 text-orange-100/">
      {generateButtons(9)}
      <div
        className="
          col-span-full
          rounded-full
          text-center
          bg-black
          text-green-400"
        >
        <p>
          {inputCode}
        </p>
        <p>{attempts % 5} of 5 attempts before reset</p>
      </div>
        <p className="col-span-3 text-center">
          Hint:
          {(attempts > 30 || attempts > 60) ? hintReveal(attempts) : " Try harder" }
        </p>
      <p
        className="text-orange-50"
      >
        {answerCode}
      </p>
    </div>
  )
}

export default Numpad