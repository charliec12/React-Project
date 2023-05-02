import React from "react";
import Logo from './Logo'

function Navigation(){
    return(
        <div id="navbar">
            <div id="logo">
                <Logo/>
            </div>
            <div id="linkslist">
                <a href="#">Home</a>
                <a href="#">Blog</a>
                <a href="#">About Us</a>
                <a href="#">Contact Us</a>
            </div>

            <button id="button">Subscribe</button>

        </div>
    );
}



export default Navigation;