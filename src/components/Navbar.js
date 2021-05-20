import React from "react";
import logo from "../logo.png";


const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                    <a className="navbar-brand" href="#"><img className="logo" src={logo} alt="AryanshKurmi logo..." /></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About ME</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">projects</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">my resume</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">contact me</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </nav>

    )
}

export default Navbar
