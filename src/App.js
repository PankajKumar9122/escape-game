import React, { useState } from 'react';
import Start from "./components/Start";
import Scene1 from "./components/Scene1";
import Scene2 from "./components/Scene2";
import Scene3 from "./components/Scene3";
import EndScene from "./components/EndScene";
import Nav from "./components/Nav";


function App() {

  // State to manage which scene to display
  const [scene, setScene] = useState(0)

  const nextScene = () => {
    // Update scene state so the conditional rendering displays the next scene
    setScene((prevScene) => prevScene + 1)
    // Reset sceneCompleted state for the new scene
    toggleSceneCompleted()
  }

  // State to manage whether a given scene is complete or not (to be passed as props to the scenes that need it)
  const [sceneCompleted, setSceneCompleted] = useState(false)

  const toggleSceneCompleted = () => {
    setSceneCompleted(prev => !prev)
  }

  // State to record the duration of the game
  const [startTime, setStartTime] = useState(0);
  const [endTime, setEndTime] = useState(0);

  const recordStartTime = () => {
    setStartTime(Date.now)
  }

  const recordEndTime = () => {
    if (endTime === 0) {
      setEndTime(Date.now)
    }
  }

  return (
    <div className='h-screen'>
      <Nav scene={scene}/>
      <div className="flex flex-row justify-center p-4 bg-orange-50 font-mono">

        {scene === 0 && <Start
                           sceneChange={nextScene}
                           />
        }

        {scene === 1 && <Scene1
                          startGame={recordStartTime}
                          sceneChange={nextScene}
                          />
        }

        {scene === 2  && <Scene2
                            sceneChange={nextScene}
                            completeScene={toggleSceneCompleted}
                            sceneCompleted={sceneCompleted}
                            />
        }

        {scene === 3  && <Scene3
                            sceneChange={nextScene}
                            completeScene={toggleSceneCompleted}
                            sceneCompleted={sceneCompleted}
                            />
        }

        {scene === 4 && <EndScene
                          endGame={recordEndTime}
                          start={startTime}
                          end={endTime}
                          />
        }

      </div>
    </div>

  )
}
export default App;