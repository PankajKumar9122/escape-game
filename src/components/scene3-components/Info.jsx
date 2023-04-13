import { React } from 'react';
import NextSceneBtn from '../NextSceneBtn';

function Info(props) {
  const {sceneChange, sceneCompleted} = props;

  return (
    <aside className="col-span-5 p-2 flex flex-col justify-evenly">
      <div className=''>
        <h2 className="p-4 text-lg text-center font-bold">The rules</h2>
        <ul>
          <li>Click a card to reveal it</li>
          <li>Click on a second card to reveal it</li>
          <li>If they match, the cards will remain revealed</li>
          <li>If they don't match they will both turn back over</li>
          <li>Keep playing until all the cards are revealed</li>
        </ul>
      </div>
      <div className='h-1/3 text-center'>
        {sceneCompleted && <h1 className='p-4'>Looks like you've got quite the memory!</h1>}
        {sceneCompleted && <NextSceneBtn nextScene={sceneChange} text="Continue" /> }
      </div>
    </aside>
  )
}

export default Info;