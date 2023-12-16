import { useState } from 'react'
import './SignInScene.scss'

function SignInScene() {
    return (
        <>
            <h1 id='h1_1941'>SnapSilo</h1>
            <div id='div_9279'>
                <label htmlFor="input_8291">Username</label>
                <br />
                <input type="text" id='input_8291' autoCapitalize='off' />
                <br />
                <label htmlFor="input_5822">Password</label>
                <br />
                <input type="password" id='input_5822' />
                <br />
                <button>Sign in</button>
            </div>
        </>
    )
}

export default SignInScene
