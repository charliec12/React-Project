import React from "react";
import Button from "./Button";

function FeaturedPostDetails(){
    return(
        <div className="featuredPostDetails">
            <p>By John Doe   |   May 23, 2022</p>
            <h2>Lorem ipsum dolor sit amet, consectetur 
            adipiscing elit, sed do eiusmod tempor.</h2>
            <p>Duis aute irure dolor in reprehenderit in 
            voluptate velit esse cillum dolore eu fugiat 
            nulla pariatur. Excepteur sint occaecat cupidatat 
            non proident.</p>
            <Button text="Read More >"/>
        </div>
    );
}

export default FeaturedPostDetails;