import React, { Component } from "react";
import {
    Route, Routes,
    NavLink,
    HashRouter
} from "react-router-dom";
import Home from "./Home";
import Gallery from "./Gallery";
import Contact from "./Contact";
import Menu from "./Menu";

class Main extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <h1>Sunny Day Cafe</h1>
                    <ul className="header">
                        <li><NavLink exact to="/">Home</NavLink></li>
                        <li><NavLink to="/menu">Menu</NavLink></li>
                        <li><NavLink to="/gallery">Gallery</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                    </ul>
                    <div className="content">
                    <Routes>
                        <Route path="/" element={<Home />}/>
                        <Route path="/menu" element={<Menu />}/>
                        <Route path="/gallery" element={<Gallery />}/>
                        <Route path="/contact" element={<Contact/>}/>
                    </Routes>
                    </div>
                </div>
            </HashRouter>
        );
    }
}

export default Main;