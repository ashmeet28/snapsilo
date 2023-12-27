import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'

import SignInScene from './SignInScene.jsx'
import SignUpScene from './SignUpScene.jsx'

import HomeScene from './HomeScene.jsx'

function App() {
  const [currentState, setCurrentState] = useState('HomeScene')

  function handleHomeSceneNav(message) {
    switch (message) {
      case "Sign in":
        setCurrentState("SignInScene")
        break
      case "Sign up":
        setCurrentState("SignUpScene")
        break
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
    case "SignUpScene":
      return (
        <>
          <SignUpScene onGoBack={() => setCurrentState("HomeScene")} />
        </>
      )
  }
}

export default App
