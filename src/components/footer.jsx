import React from "react";
import '../styles/footer.css';
import LogoWhite from '../images/logo-white.svg';
import Isos from '../images/isos.svg';
import { FaInstagram } from 'react-icons/fa';
import { FiTwitter } from 'react-icons/fi';
import { BsFacebook, BsLinkedin } from 'react-icons/bs';
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <>
            <section className="footer-section">
                <div className="row text-white mb-3">
                    <div className="col-md-2">
                        <h5 className="pb-2 fontBold">PRODUCTS</h5>
                        <Link to="https://jobpays.app/jobbank/" className="text-white"><p className="pt-4">JobBank</p></Link>
                        <Link to="https://jobpays.app/jobbook/" className="text-white"><p className="pt-3">JobBook</p></Link>
                        <Link to="https://jobpays.app/jobstock/" className="text-white"><p className="pt-3">JobStock</p></Link>
                    </div>
                    <div className="col-md-2">
                        <h5 className="pb-2 fontBold">COMPANY</h5>
                        <p className="pt-4">About Us</p>
                        <p className="pt-3">Careers</p>
                        <p className="pt-3">FAQs</p>
                    </div>
                    <div className="col-md-2">
                        <h5 className="pb-2 fontBold">CONNECT WITH US</h5>
                        <Link to="https://www.instagram.com/zarttech/" className="text-white"><p className="pt-4"><FaInstagram size={25} className="me-3" />Instagram</p></Link>
                        <Link to="https://twitter.com/zarttech" className="text-white"><p className="pt-4"><FiTwitter size={25} className="me-3" />Twitter</p></Link>
                        <Link to="https://jobpays.app/jobbank/" className="text-white"><p className="pt-4"><BsLinkedin size={25} className="me-3" />LinkedIn</p></Link>
                    </div>
                    <div className="col-md-2 mx-auto">
                        <h5 className="pb-2 fontBold">CONTACT US</h5>
                        <p className="pt-4">Email <br/>support@jobpays.app</p>
                        <p className="pt-3"><button className="primary-btn-white py-3">Marketplace</button></p>
                    </div>
                    <div className="col-md-3 text-end">
                        <p> <img src={Isos}/></p>
                        <p>Benoordenhoutseweg <br />46, 2596 BC The Hague,<br />The Netherlands.</p><br />
                    </div>
                </div>
            </section>
            <section className="footer-copyright text-white text-center">
                <div className="d-flex justify-content-between">
                    <span>Copyright 2023 JobPays. All rights reserved. JobPays</span>
                    <div className="d-flex justify-content-between w-50"><span>Privacy Policy</span>
                        <span>Terms of Use</span>
                        <span>Cookie Policy</span>
                        <span>Terms and Conditions</span>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Footer;