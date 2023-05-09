import React from "react";
import Images from "./Images";
import FeaturedPostDetails from "./FeaturedPostDetails";
import AllPost from "./AllPost";

function FeaturePost(){
    return(
        <div className="featurePost">
            
            <div className="postWrapper">
            <h3>Featured Post</h3>
                <Images src="https://images.pexels.com/photos/296282/pexels-photo-296282.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
                <FeaturedPostDetails />
            </div>
            <AllPost/>
        </div>
    );
}

export default FeaturePost;