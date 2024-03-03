import React from "react";

export default function NewsItem(props) {
  return (
    <div className="card my-3" >
      <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left: '90%'}}>{props.source}</span>
      <img src={props.image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.description}</p>
        <a href={props.url} target="blank" className="btn btn-sm btn-primary d-flex justify-content-center ">
          Click to Explore more
        </a>
      </div>
    </div>
  );
}
