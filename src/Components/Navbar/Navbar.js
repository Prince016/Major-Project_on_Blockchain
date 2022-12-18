import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'react-bootstrap/Image'
import logo from '../../Images/mp_logo.jpg'
import '../Navbar/nav.css';
import Hamburger from 'hamburger-react'
import Button from 'react-bootstrap/Button';

const NavbarComponent = () => {
    return (
        <div className='nav_bar'>
            <nav className="navbar bg-light">
                <div className="container-fluid">
                    <div className='div_left'>

                        <a className="navbar-brand " href="#">
                            <img   src={logo} alt="Logo" width="60" height="45" ge className="d-inline-block align-text-top " />

                        </a>
                        <h2 className='nav_title'> My Results</h2>
                    </div>
                    <button type="button" className="nav-btn">Login</button>
                </div>
            </nav>
        </div>
    )
}

export default NavbarComponent