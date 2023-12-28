import { useState } from 'react'
import './HomeScene.scss'

import TopNavBar from './TopNavBar.jsx'
import SearchBar from './SearchBar.jsx'

function HomeScene({ onNavBtnClick }) {
    return (
        <>
            <TopNavBar onNavBtnClick={onNavBtnClick} />
            <SearchBar />
        </>
    )
}

export default HomeScene