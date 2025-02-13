import React from "react"
import { Outlet , Link } from "react-router-dom";
function NavBar() {
    return (
        <>
            <nav className="nav-bar">
                <a href="/">
                    <Link to="/home">Home</Link>
                </a>
                <a href="/about">
                    <Link to="/about">About</Link>
                </a>
                <a href="/skills">
                    <Link to="/skills">Skills</Link>
                </a>
                <a href="/services">
                    <Link to="/services">Services</Link>
                </a>
                <a href="/portfolio">
                    <Link to="/portfolio">Portfolio</Link>
                </a>
                <a href="/contact">
                    <Link to="/contact">Contact</Link>
                </a>
            </nav><br /><br /><br /><br />
            <Outlet/>
        </>
    )
}

export { NavBar }