import React from "react";
import "./Main.css";

export default function Main() {
    return (
        <main className="main container">
            <h1 className="title">Fun facts about React</h1>
            <ul className="react-facts-list">
                <li><span>Was first released in 2013</span></li>
                <li><span>Was originally created by Jordan Walke</span></li>
                <li><span>Has well over 100K stars on GitHub</span></li>
                <li><span>Is maintained by Facebook</span></li>
                <li><span>Powers thousands of enterprise apps, including mobile apps</span></li>
            </ul>
        </main>
    )
}