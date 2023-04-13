import React from 'react';
import NextSceneBtn from "./NextSceneBtn";

const Start = props => {
  const { sceneChange } = props;
  return (
    <div className='flex flex-col justify-between p-12 bg-slate-100 rounded-lg text-center'>

      <h1 className='text-8xl my-4'>Art Escape</h1>

      <NextSceneBtn
        text={"Start"}
        nextScene={sceneChange}
       />
    </div>
  )
}

export default Start;