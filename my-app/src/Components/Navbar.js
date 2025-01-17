import React, {useState} from "react";
import '../stylesheets/App.css';

export default function Navbar() {
    const [showLinks, setShowLinks] = useState(false);
    return (
        <nav className="navbar">
            <div className="leftSide">
                <div id={showLinks ? "hidden" : ""} className="links">
                    <a href="/">Home</a>
                    <a href="/about">About</a>
                    <a href="/contact">Contact</a>
                </div>
                <button onClick={() => setShowLinks(!showLinks)}>Open</button>
            </div>
            <div className="rightSide">
                <input type="text" placeholder="hey hackers!"></input>
                <button className="search-button">Search</button>
            </div>
        </nav>
    )
}