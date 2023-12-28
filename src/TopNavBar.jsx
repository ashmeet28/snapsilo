import { useState } from 'react'
import { useEffect } from 'react'
import './TopNavBar.scss'

import SnapSiloLogo from './assets/main_logo.svg'
import MenuIcon from './assets/menu.svg'
import CloseIcon from './assets/close.svg'

function TopNavBar({ onNavBtnClick }) {
    const [isNavVisible, setIsNavVisible] = useState(false)

    const [windowSize, setWindowSize] = useState([
        window.innerWidth,
        window.innerHeight,
    ]);

    useEffect(() => {
        const handleWindowResize = () => {
            setWindowSize([window.innerWidth, window.innerHeight]);
        };

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    if (windowSize[0] > 600) {
        return (
            <>
                <div id='div_7206'>
                    <div id='div_6815'>
                        <div id='div_9510'>
                            <img src={SnapSiloLogo} alt="Main Logo" />
                            <h1>SnapSilo</h1>
                        </div>
                        {/* <div id='div_8106'>
                            <img src={MenuIcon} alt="Menu Icon" />
                            <img src={CloseIcon} alt="Close Icon" />
                        </div> */}
                    </div>
                    <div id='div_5937'>
                        <button onClick={() => onNavBtnClick("Sign in")}>Sign in</button>
                        <button onClick={() => onNavBtnClick("Sign up")}>Sign up</button>
                    </div>
                </div>
            </>
        )
    } else {
        if (isNavVisible) {
            return (
                <>
                    <div id='div_7206'>
                        <div id='div_6815'>
                            <div id='div_9510'>
                                <img src={SnapSiloLogo} alt="Main Logo" />
                                <h1>SnapSilo</h1>
                            </div>
                            <div id='div_8106'>
                                {/* <img src={MenuIcon} alt="Menu Icon" /> */}
                                <img src={CloseIcon} alt="Close Icon" onClick={() => setIsNavVisible(false)} />
                            </div>
                        </div>
                        <div id='div_5937'>
                            <button onClick={() => onNavBtnClick("Sign in")}>Sign in</button>
                            <button onClick={() => onNavBtnClick("Sign up")}>Sign up</button>
                        </div>
                    </div>
                </>
            )
        } else {
            return (
                <>
                    <div id='div_7206'>
                        <div id='div_6815'>
                            <div id='div_9510'>
                                <img src={SnapSiloLogo} alt="Main Logo" />
                                <h1>SnapSilo</h1>
                            </div>
                            <div id='div_8106'>
                                <img src={MenuIcon} alt="Menu Icon" onClick={() => setIsNavVisible(true)} />
                                {/* <img src={CloseIcon} alt="Close Icon" /> */}
                            </div>
                        </div>
                        {/* <div id='div_5937'>
                            <button onClick={() => onNavBtnClick("Sign in")}>Sign in</button>
                            <button onClick={() => onNavBtnClick("Sign up")}>Sign up</button>
                        </div> */}
                    </div>
                </>
            )
        }
    }

}

export default TopNavBar