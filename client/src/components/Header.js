import React, { useEffect, useState } from "react";
import "./Header.scss";
import avatar from "../assets/images/avatar.jpg";
import { BiSearch } from "react-icons/bi";
import Search from "./Search";

const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [showSearch, setShowSearch] = useState(false);

    const handleSearchClick = () => setShowSearch(!showSearch);

    useEffect(() => {
        // Get data here
    }, []);

    return (
        <>
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
                ) : (
                    <div className="account">
                        <button className="primary-button">Sign up</button>
                        <button className="tetiary-button">Log in</button>

                        <button
                            className="search-button tetiary-button"
                            onClick={handleSearchClick}
                        >
                            <BiSearch className="icon" />
                            <span>Search</span>
                        </button>
                    </div>
                )}
            </div>
            {showSearch && <Search />}
        </>
    );
};

export default Header;
