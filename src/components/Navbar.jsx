import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <>
            <nav className="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        <img
                            src="./images/o-circuito.png"
                            alt="Logo"
                            width="30"
                            height="24"
                            className="d-inline-block align-text-top"
                        />
                        ByteHelp
                    </Link>
                    <ul className="navbar-nav ms-auto d-flex flex-row gap-3">
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">Sobre Nós</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">Contato</Link>
                        </li>
                    </ul>
                </div>
            </nav>


        </>
    );
}

export default Navbar;
