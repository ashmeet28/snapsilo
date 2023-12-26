import { useState } from 'react'
import './HomeScene.scss'

import TopNavBar from './TopNavBar.jsx'

function HomeScene({ onNavBtnClick }) {
    return (
        <>
            <TopNavBar onNavBtnClick={onNavBtnClick} />
        </>
    )
}

export default HomeScene