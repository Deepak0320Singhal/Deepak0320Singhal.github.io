import React from 'react'

function Navbar() {
    return (
        <>
            <nav  className="navbar navbar-expand-lg customBackground">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarUnderlineExample" aria-controls="navbarExample" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <a className="navbar-brand" href="#"><img src="./Netaji_logo.png    " width="36" /></a>
                    <div className="collapse navbar-collapse" id="navbarUnderlineExample">
                        <ul className="navbar-nav navbar-nav-underline">
                            <li className="nav-item">
                                <a className="nav-link active" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Team</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Projects</a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Profile</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;