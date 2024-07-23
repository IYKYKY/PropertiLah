import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { scroller } from 'react-scroll';

function Navigation() {
    const location = useLocation();

    const scrollToSection = (section) => {
        if (location.pathname === '/') {
            scroller.scrollTo(section, {
                duration: 800,
                delay: 0,
                smooth: 'easeInOutQuart'
            });
        }
    };

    return (
        <nav>
            <ul>
                <li>
                    <Link to="/" onClick={() => scrollToSection('about')}>
                        About Us
                    </Link>
                </li>
                <li>
                    <Link to="/" onClick={() => scrollToSection('sell')}>
                        Sell to Us
                    </Link>
                </li>
                <li>
                    <Link to="/" onClick={() => scrollToSection('buyers')}>
                        Join Buyer's List
                    </Link>
                </li>
                <li>
                    <Link to="/" onClick={() => scrollToSection('properties')}>
                        Properties On Sale
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;
