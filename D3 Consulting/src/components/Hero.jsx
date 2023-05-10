import React from "react";

function Hero(){
    return(
        <div className="bg">
            <div className="heroContainer">
            <div id="homeHero">
                <img id="heroImg" src="https://images.pexels.com/photos/3772622/pexels-photo-3772622.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
            </div>
            <div id="heroinfo">
                <p className="preH">
                Posted on startup
                </p>
                <h1>
                    Step-by-step guide to choosing great font pairs
                </h1>
                <p className="author">
                    By James West  |  May 23, 2022 
                </p>
                <p className="heroP">
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
                </p>
            </div>
            
        </div>
        </div>
        
    );
}

export default Hero;