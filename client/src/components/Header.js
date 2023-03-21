import React, { useState } from "react";
import "./Header.css";
import avatar from "../assets/images/avatar.jpg";

const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <div className="Header content">
            <a className="brand-link" href="/">
                Vân kể chuyện
            </a>
            <ul className="menu">
                <li className="menu-item">
                    <a href="/">Home</a>
                </li>
                <li className="menu-item">
                    <a href="/">About Vân</a>
                </li>
                <li className="menu-item">
                    <a href="/">Contact</a>
                </li>
            </ul>
            {isLoggedIn ? (
                <div className="account">
                    <button className="primary-button">Sign up</button>
                    <button className="tetiary-button">Log in</button>
                </div>
            ) : (
                <div className="profile">
                    <img className="avatar" src={avatar} alt="avatar" />
                    <span className="account-label">Hello, Van</span>
                    <ul className="dropdown">
                        <li className="dropdown-item">
                            <span>Manage account</span>
                        </li>
                        <li className="dropdown-item">
                            <span>My favorites</span>
                        </li>
                        <li className="dropdown-item">
                            <span>Log out</span>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Header;
