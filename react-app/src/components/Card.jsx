import React from "react";
import Description from "./Description";
import Image from "./Image";


export default function Card(props){
    return(
        <div className="card">
            <Description 
            detail={props.detail}
            title = {props.title}
            />
        </div>
    );
}