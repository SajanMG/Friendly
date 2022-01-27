import React from 'react'
import { MoonIcon } from '@heroicons/react/outline'

const Header = () => {
    return (
        <header className="header">
            <h2 className="header__logo">Where in the world?</h2>
            <button className="light-dark-mode-toggler">
                <MoonIcon className="moon-icon" />
                <p className="toggle-label">Dark Mode</p>
            </button>
        </header>
    )
}

export default Header
