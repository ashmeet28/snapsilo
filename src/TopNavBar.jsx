import { useState } from 'react'
import './TopNavBar.scss'

function TopNavBar({ onNavBtnClick }) {
    return (
        <>
            <div id='div_7206'>
                <h1>SnapSilo</h1>
                <div id='div_5937'>
                    <button onClick={() => onNavBtnClick("sign in")}>Sign in</button>
                    <button id='button_1946' onClick={() => onNavBtnClick("sign up")}>Sign up</button>
                </div>
            </div>
        </>
    )
}

export default TopNavBar