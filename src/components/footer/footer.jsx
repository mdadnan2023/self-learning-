import React from 'react'
import "./footer.css"
import { Link } from 'react-router-dom'

export default function footer() {
    return (
        <div>
            <footer>
                <div className="container">
                    <div className="service s1">
                        <h4>SERVICES</h4>
                        <Link to="/contact"><p>Contact Us</p></Link>
                        <Link to="/contact"><p>Track Order</p></Link>
                        <Link to="/contact"><p>Return Order</p></Link>
                        <Link to="/contact"><p>Cancel Order</p></Link>
                    </div>
                    <div className="service s2">
                        <h4>QUICK LINKS</h4>
                        <Link to="/contact"><p>About Us</p></Link>
                        <Link to="/contact"><p>We're Hiring</p></Link>
                        <Link to="/contact"><p>Terms And condition</p></Link>
                        <Link to="/contact"><p>Privacy Policy</p></Link>
                    </div>
                    <div className="service s3">
                        <h4>CONNECT WITH US</h4>
                        <p><i class="fab fa-facebook-square"></i>4.7M People Like this</p>
                        <p><i class="fab fa-instagram"></i>1 Million Followers</p>
                        <div className="icons">
                            <i class="fab fa-twitter"></i>
                            <i class="fab fa-pinterest-square"></i>
                            <i class="fab fa-snapchat-ghost"></i>
                            <i class="fab fa-apple"></i>
                        </div>
                    </div>
                    <div className="service s4">
                        <h4>KEEP UP TO DATE</h4>
                        <input type="text" placeholder="Enter Email id" />
                        <button id="btn">SUBSCRIBE</button>
                    </div>
                </div>
                <div className="line"></div>
            </footer>
        </div>
    )
}
