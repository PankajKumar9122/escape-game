import { React } from "react";

function NumpadButton(props) {
  const { digit, handleClick} = props
  return (
    <div
    className="
      rounded-full
      bg-black
      text-white
      text-center
      hover:text-green-400
      hover:shadow-lg
      hover:cursor-pointer
      "
      onClick={handleClick}
    >
      <p
        className="
          text-3xl"
      >
        {digit}
      </p>
    </div>
  )
}

export default NumpadButton