import React from 'react'
import logo from './logo.svg';



function Header(prop) {
    return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">{prop.text}</h1>
        </header>
    )
}

export default Header;