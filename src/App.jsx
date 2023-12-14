import './App.scss'
import SignInScene from './SignInScene.jsx'
import { useState } from 'react';

function App() {
  const [currentScene, setCurrentScene] = useState('SignIn');

  switch (currentScene) {
    case "SignIn":
      return < SignInScene />
  }
}

export default App
