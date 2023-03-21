import React from "react";
import "./Search.scss";
import { BiSearch } from "react-icons/bi";

const Search = () => {
    return (
        <div className="Search">
            <input type="text" placeholder="Search post" autoFocus />
            <button className="tetiary-button">
                <BiSearch className="icon" />
            </button>
        </div>
    );
};

export default Search;
