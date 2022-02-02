import React from 'react'

const Button = ({ children, onClick }) => {
    return (
        <button type="button" className="generic-button" onClick={onClick}>
            {children}
        </button>
    )
}

export default Button
