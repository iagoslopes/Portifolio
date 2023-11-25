import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { RiMenu3Fill, RiCloseLine } from 'react-icons/ri';
import './header.css';

function Header() {
    const [showMenu, setShowMenu] = useState(false);
    const logo = "<MeuPortifolio />";

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    const closeMenu = () => {
        setShowMenu(false);
    };

    useEffect(() => {
        document.addEventListener('click', closeMenu);

        return () => {
            document.removeEventListener('click', closeMenu);
        };
    }, []);

    return (
        <header>
            <div className='content' onClick={(e) => e.stopPropagation()}>
                <h2 className='content-logo'>{logo}</h2>
                <nav className={`content-nav ${showMenu ? 'show' : ''}`}>
                    <ul>
                        <li>
                            <Link to="home" smooth={true} duration={500} onClick={closeMenu}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="projects" smooth={true} duration={500} onClick={closeMenu}>
                                Projects
                            </Link>
                        </li>
                        <li>
                            <Link to="about" smooth={true} duration={500} onClick={closeMenu}>
                                About
                            </Link>
                        </li>
                        <li>
                            <Link to="contact" smooth={true} duration={500} onClick={closeMenu}>
                                Contact
                            </Link>
                        </li>
                    </ul>
                </nav>
                <div className='content-button' onClick={toggleMenu}>
                    {showMenu ? (
                        <RiCloseLine size={40} />
                    ) : (
                        <RiMenu3Fill size={40} />
                    )}
                </div>
            </div>
        </header>
    );
}

export default Header;