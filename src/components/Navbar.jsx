import React from "react";
import logo from "../images/react-icon.png"
import "./Navbar.css"

export default function Navbar() {
    return (
        <nav className="nav">
            <div className="container flex">
                <div>
                <img className="logo" src={logo} alt="React logo"/>
                <h3 className="nav-title">ReactFacts</h3>
                </div>
                <ul>
                    <li>React Course - Project 1</li>
                </ul>
            </div>
        </nav>
    )
}