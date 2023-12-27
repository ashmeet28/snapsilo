import { useState } from 'react'
import SnapSiloLogo from './assets/main_logo.svg'
import './TopNavBar.scss'

function TopNavBar({ onNavBtnClick }) {
    return (
        <>
            <div id='div_7206'>
                <div id='div_9510'>
                    <img src={SnapSiloLogo} alt="Main Logo" />
                    <h1>SnapSilo</h1>
                </div>
                <div id='div_5937'>
                    <button onClick={() => onNavBtnClick("Sign in")}>Sign in</button>
                    <button onClick={() => onNavBtnClick("Sign up")}>Sign up</button>
                </div>
            </div>
        </>
    )
}

export default TopNavBar