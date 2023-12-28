import { useState } from 'react'
import './SearchBar.scss'

import SearchIcon from './assets/search.svg'

function SearchBar() {
    return (
        <>
            <div id='div_7120'>
                <div id='div_0149'>
                    <input type="text" placeholder='Search' />
                    <img src={SearchIcon} alt="Search Icon" />
                </div>
            </div>
        </>
    )
}

export default SearchBar