import React from "react";
import Navigation from "./Navigation";
import CTA from "./CTA";

function Footer(){
    return(
        <div className="bg">
            <div className="footer">
            <div className="footerContainer">
                <Navigation/>
                <CTA/>
                <div className="footerContact">
                    <p>D3 Consulting</p>
                    <p>1234 Memorial St.
                    City, State ZipCode</p>
                </div>
                <div className="footerSocials">
                    <a href="#"><span class="fa fa-facebook"></span></a>
                    <a href="#"><span class="fa fa-twitter"></span></a>
                    <a href="#"><span class="fa fa-instagram"></span></a>
                    <a href="#"><span class="fa fa-linkedin"></span></a>
                </div>
            </div>
        </div>
        </div>
        
    );
}

export default Footer;