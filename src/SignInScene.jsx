import { useState } from 'react'
import './SignInScene.scss'

import SnapSiloLogo from './assets/main_logo.svg'
import MessageScene from './MessageScene.jsx'

function SignInScene({ onGoBack, onSignIn }) {
    const [isTryingToSignIn, setIsTryingToSignIn] = useState(false)

    function tryToSignIn() {
        setIsTryingToSignIn(true)
    }

    if (!isTryingToSignIn) {
        return (
            <>
                <div id='div_1739'>
                    <img src={SnapSiloLogo} alt="Main Logo" />
                    <h1>SnapSilo</h1>
                </div>
                <div id='div_9279'>
                    <label htmlFor="input_8291">Username</label>
                    <br />
                    <input type="text" id='input_8291' autoCapitalize='off' />
                    <br />
                    <label htmlFor="input_5822">Password</label>
                    <br />
                    <input type="password" id='input_5822' />
                    <br />
                    <button onClick={() => tryToSignIn()}>Sign in</button>
                </div>
                <div id='div_7294'>
                    <button onClick={() => onGoBack()}>Go back</button>
                </div>
            </>
        )
    } else {
        return (
            <>
                <MessageScene message="Signing In..." />
            </>
        )
    }
}

export default SignInScene