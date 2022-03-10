import React, { useEffect, useState } from 'react'
import './Navbar.css';

const Navbar = () => {

    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true);
            }
            else handleShow(false);
        });

        return () => {
            window.removeEventListener("scroll");
        };

    }, []);

    return (
        <div className={`nav ${show && "nav__black"}`}>
            <h1></h1>
            <img className="nav__logo" src='https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg' alt='Netflix Logo' />

            <img className="nav__avatar" src="https://www.pngwing.com/en/free-png-xsukd" alt='Avatar' />




        </div>
    )
}

export default Navbar