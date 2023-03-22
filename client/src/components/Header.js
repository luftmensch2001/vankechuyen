import React, { useEffect, useState } from "react";
import "./Header.scss";
import avatar from "../assets/images/avatar.jpg";
import { BiSearch, BiMenu } from "react-icons/bi";
import { IoClose } from "react-icons/io5";
import Search from "./Search";

const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [showSearch, setShowSearch] = useState(false);
    const [showMenu, setShowMenu] = useState(false);

    const handleSearchClick = () => setShowSearch(!showSearch);

    const handleShowMenu = () => setShowMenu(!showMenu);

    useEffect(() => {
        // Get data here
    }, []);

    return (
        <>
            <div className="Header desktop content">
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
            <div className="Header mobile content">
                <a className="brand-link" href="/">
                    Vân kể chuyện
                </a>
                <div className="search-and-menu">
                    <button
                        className="search-button tetiary-button"
                        onClick={handleSearchClick}
                    >
                        <BiSearch className="icon" />
                    </button>
                    <button
                        className="toggle primary-button"
                        onClick={handleShowMenu}
                    >
                        <BiMenu className="icon" />
                    </button>
                </div>
                {showMenu && (
                    <div className="collapse">
                        <button
                            className="toggle primary-button"
                            onClick={handleShowMenu}
                        >
                            <IoClose className="icon" />
                        </button>
                        <a href="/">Home</a>
                        <a href="/">About Vân</a>
                        <a href="/">Contact</a>
                        {isLoggedIn ? (
                            <>
                                <a href="/">Manage account</a>
                                <a href="/">My favorites</a>
                                <a href="/">Log out</a>
                            </>
                        ) : (
                            <>
                                <a href="/">Login</a>
                                <a href="/">Sign up</a>
                            </>
                        )}
                    </div>
                )}
            </div>
            {showSearch && <Search />}
        </>
    );
};

export default Header;
