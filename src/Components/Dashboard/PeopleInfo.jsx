import React, { Component } from "react";
import PeopleCard from "./PeopleCard";
import "./PeopleInfo.css";

const PeopleInfo = ({ peopleData }) => {
  return (
    <section id="peopleData">
      <div className="peopleInfo">
        <h1>People data</h1>
        <div className="cards">
          <div className="container-fluid">
            <div className="row">
              {peopleData &&
                peopleData.map((data) => (
                  <div key="data.email" className="col-lg-3">
                    <PeopleCard heading={data.name} />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PeopleInfo;
