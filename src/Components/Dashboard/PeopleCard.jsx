import React, { Component } from "react";
import "./PeopleCard.css";

const PeopleCard = ({ heading }) => {
  return (
    <div className="card bg-light mb-3">
      <div className="card-header">{heading}</div>
      <div className="card-body">
        {/* <h5 className="card-title">Info card title</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p> */}
      </div>
    </div>
  );
};

export default PeopleCard;
