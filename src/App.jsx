import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'

import SignInScene from './SignInScene.jsx'
import HomeScene from './HomeScene.jsx'

function App() {
  const [currentState, setCurrentState] = useState('SignInScene')

  switch (currentState) {
    case "SignInScene":
      return (
        <>
          <SignInScene onGoBack={() => setCurrentState("HomeScene")} />
        </>
      )
    case "HomeScene":
      return (
        <>
          <HomeScene />
        </>
      )
  }
}

export default App
