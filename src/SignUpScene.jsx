import { useState } from 'react'
import './SignUpScene.scss'

import SnapSiloLogo from './assets/main_logo.svg'
import MessageScene from './MessageScene.jsx'

function SignUpScene({ onGoBack, onSignUp }) {
    const [isTryingToSignUp, setIsTryingToSignUp] = useState(false)

    function tryToSignUp() {
        setIsTryingToSignUp(true)
    }

    if (!isTryingToSignUp) {
        return (
            <>
                <div id='div_5982'>
                    <img src={SnapSiloLogo} alt="Main Logo" />
                    <h1>SnapSilo</h1>
                </div>
                <div id='div_6820'>
                    <label htmlFor="input_9172">Username</label>
                    <br />
                    <input type="text" id='input_9172' autoCapitalize='off' />
                    <br />
                    <label htmlFor="input_9380">Password</label>
                    <br />
                    <input type="password" id='input_9380' />
                    <br />
                    <button onClick={() => tryToSignUp()}>Sign up</button>
                </div>
                <div id='div_3491'>
                    <button onClick={() => onGoBack()}>Go back</button>
                </div>
            </>
        )
    } else {
        return (
            <>
                <MessageScene message="Signing Up..." />
            </>
        )
    }
}

export default SignUpScene