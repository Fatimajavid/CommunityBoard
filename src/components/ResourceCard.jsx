import React from "react";

const ResourceCard = (props) => {
    return (
        <div className={'ResourceCard ' + props.color}>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
            {props.image && <img src={props.image} style={{ width: "100px", height: "100px", objectFit: "contain" }} />}
            <a href={props.link} target="_blank" rel="noopener noreferrer">Learn More</a>
        </div>
    );
};

export default ResourceCard;

