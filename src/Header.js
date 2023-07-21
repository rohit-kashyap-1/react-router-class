import React from 'react'
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <nav className="navbar navbar-expand-sm bg-dark">

            <div className="container-fluid">

                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link text-white" to="/">Homepage</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white" to="/about">About us</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white" to="/services">Services</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white" to="/blog">Blog</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white" to="/blog/b">Blog Details</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white" to="/contact">Contact US</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white" to="/support">Support</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white" to="/pricing">Pricing</Link>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown">About US</a>
                        <ul className="dropdown-menu">
                            <li><Link className="dropdown-item" to="/vision">Vision</Link></li>

                        </ul>
                    </li>
                </ul>
            </div>


        </nav>
    )
}
