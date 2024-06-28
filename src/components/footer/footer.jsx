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
                        <Link to="/Soon"><p>Track Order</p></Link>
                        <Link to="/Soon"><p>Return Order</p></Link>
                        <Link to="/Soon"><p>Cancel Order</p></Link>
                        <Link to="/Soon"><p>We're Hiring</p></Link>
                    </div>
                    <div className="service s2">
                        <h4>QUICK LINKS</h4>
                        <Link to="/about"><p>About Us</p></Link>
                        <Link to="/contact"><p>Contact Us</p></Link>
                        <Link to="/Soon"><p>Terms And condition</p></Link>
                        <Link to="/Soon"><p>Privacy Policy</p></Link>
                    </div>
                    <div className="service s3">
                        <h4>CONNECT WITH US</h4>
                        <p><i class="fab fa-facebook-square"></i>4.7M People Like this</p>
                        <p><i class="fab fa-instagram"></i>1 Million Followers</p>
                        <div className="icons">
                            <a href="https://x.com/?lang=en" target="_blank" rel='noreferrer'><i class="fab fa-twitter"></i></a>
                            <a href="https://in.pinterest.com/" target="_blank" rel='noreferrer'><i class="fab fa-pinterest-square"></i></a>
                            <a href="https://www.snapchat.com/" target="_blank" rel='noreferrer'><i class="fab fa-snapchat-ghost"></i></a>
                            <a href="https://www.apple.com/in/?afid=p238%7Cs8Vs8GkTq-dc_mtid_187079nc38483_pcrid_703367968965_pgrid_112258962467_pntwk_g_pchan__pexid__ptid_kwd-10778630_&cid=aos-IN-kwgo-brand--slid---product-" target="_blank" rel='noreferrer'><i class="fab fa-apple"></i></a>
                        </div>
                    </div>
                    <div className="service s4">
                        <h4>KEEP UP TO DATE</h4>
                        <input type="text" placeholder="Enter Email id" />
                        <button id="btn">SUBSCRIBE</button>
                    </div>
                </div>
                <span className="line"></span>
            </footer>
        </div>
    )
}
