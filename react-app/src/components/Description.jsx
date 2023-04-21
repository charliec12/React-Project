import React from "react";

function Description(props){

    return(
        <div>
            <img src="..." class="card-img-top" alt="..."/>
            <div class="card-body">
                <h5 class="card-title">{props.title}</h5>
                <p class="card-text">{props.detail}</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    );

}

export default Description;