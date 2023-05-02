import React from "react";
import Images from "./Images";
import FeaturedPostDetails from "./FeaturedPostDetails";

function FeaturePost(){
    return(
        <div className="featurePost">
            <h3>Featured Post</h3>
            <div className="postWrapper">
                <Images className="featureImg" src="https://images.pexels.com/photos/296282/pexels-photo-296282.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
                <FeaturedPostDetails />
            </div>
        </div>
    );
}

export default FeaturePost;