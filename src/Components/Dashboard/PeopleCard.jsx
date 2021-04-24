import React, { Component } from "react";
import "./PeopleCard.css";

const PeopleCard = ({ heading }) => {
  return (
    <div className="card">
      <img
        className="card-img-top"
        src="https://source.unsplash.com/random/150x100"
        alt="Card image cap"
      />
      <div className="card-body">
        <h5 className="card-title">{heading}</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
};

export default PeopleCard;
