import React from 'react'
import { MoonIcon } from '@heroicons/react/outline'

const Header = ({ isClicked, setIsClicked }) => {
    return (
        <header className={isClicked ? 'header dark-mode' : 'header'}>
            <h2 className="header__logo">Where in the world?</h2>
            <button
                className="light-dark-mode-toggler"
                onClick={() => setIsClicked(!isClicked)}
            >
                <MoonIcon className="moon-icon" />
                <p className="toggle-label">Dark Mode</p>
            </button>
        </header>
    )
}

export default Header
