import React, { Component } from 'react'
import './navbar.css'
import logo from "../assets/logo.svg"

export default class Navbar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            hamburger: false
        }
    }

    render() {
        return (
            <div className={this.state.hamburger ? "wholenav overflow" : "wholenav"}>
                <nav>
                    <figure className="logo-fig">
                        <img class="logo-img" src={logo} alt="logo" />
                    </figure>
                    <ul>
                        <li><a href="/soon">Home</a></li>
                        <li><a href="/soon">Products</a></li>
                        <li><a href="/soon">About Us</a></li>
                        <li><a href="/soon">Contact Us</a></li>
                        <li><a className='icon-btn' href="/soon"><i class="fa-solid fa-cart-shopping"></i>Cart</a></li>
                        <li><a className='icon-btn' href="/soon"><i class="fa-regular fa-user"></i>Login</a></li>

                    </ul>

                    <i className={this.state.hamburger ? "fas fa-times" : "fas fa-bars"} id="hamburger"
                        onClick={() => {
                            this.setState({ hamburger: !this.state.hamburger });
                        }}></i>
                    <ul className={this.state.hamburger ? "hamburgerMenu active" : "hamburgerMenu"}>
                        <li>Home</li>
                        <li>Services</li>
                        <li>Hire Devloper</li>
                        <li>Our Works</li>
                        <li>Contact</li>
                        <li>About</li>
                        <li>Inquire</li>
                    </ul>
                </nav>
            </div>

        )
    }
}