import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'

import SignInScene from './SignInScene.jsx'
import HomeScene from './HomeScene.jsx'

function App() {
  const [currentState, setCurrentState] = useState('HomeScene')

  function handleHomeSceneNav(message) {
    switch (message) {
      case "sign in":
        setCurrentState("SignInScene")
    }
  }

  switch (currentState) {
    case "HomeScene":
      return (
        <>
          <HomeScene onNavBtnClick={handleHomeSceneNav} />
        </>
      )
    case "SignInScene":
      return (
        <>
          <SignInScene onGoBack={() => setCurrentState("HomeScene")} />
        </>
      )
  }
}

export default App
