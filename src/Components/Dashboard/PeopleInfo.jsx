import React, { Component } from "react";
import PeopleCard from "./PeopleCard";
import "./PeopleInfo.css";

const PeopleInfo = ({ peopleData }) => {
  return (
    <div className="peopleInfo">
      <h1>peole data</h1>
      <div className="cards">
        {peopleData.map((data) => (
          <PeopleCard heading={data} />
        ))}
      </div>
    </div>
  );
};

export default PeopleInfo;
