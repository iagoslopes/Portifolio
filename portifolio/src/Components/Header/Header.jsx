import React, { useState } from 'react';
import { RiMenu3Fill, RiCloseLine } from 'react-icons/ri';

function Header() {
    const [showMenu, setShowMenu] = useState(false);
    const logo = "<MeuPortifolio />";

    return (
        <header>
            <div>
                <a href="#">
                    {logo}
                </a>
            </div>
            <nav className={`nav_menu ${showMenu ? "hideMenu" : "showMenu"}`}>
                <a href="#home">
                    Home
                </a>
                <a href="#about">
                    About
                </a>
                <a href="#projects">
                    Projects
                </a>
                <a href="#contact">
                    Contact
                </a>
            </nav>
            <button
                className='btn_menu'
                onClick={() =>
                    setShowMenu(!showMenu)}>
                {showMenu ? <RiCloseLine /> : <RiMenu3Fill />}
            </button>
        </header>
    )
}

export default Header