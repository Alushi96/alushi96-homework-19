import React from 'react';
import Search from "./Search.js"
import "./Navbar.css"

function Navbar(){
    return(
        <div className="descriptor">
                <div className="bold">Employee Name Search </div>
                <Search />
        </div>
    )
}
export default Navbar;