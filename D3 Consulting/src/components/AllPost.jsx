import React from "react";
import AllPostItems from "./AllPostItems";

function AllPost(){
    return(
        <div className="allPost">
            <AllPostItems/>
            <AllPostItems/>
            <AllPostItems/>
            <AllPostItems/>     
        </div>
    );
}

export default AllPost;