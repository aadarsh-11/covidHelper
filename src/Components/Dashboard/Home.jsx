import React, { Component } from "react";
import "./Home.css";
import Message from "./Message";
import PeopleInfo from "./PeopleInfo";

const Home = () => {
  return (
    <React.Fragment>
      <section id="message">
        <Message />
        <div className="helpBtn">
          <button className="btn btn-primary">Get Help</button>
          <button className="btn btn-primary">Help Others</button>
        </div>
      </section>
      <section id="peopleData">
        <PeopleInfo peopleData={[1, 2, 3, 4]} />
      </section>
    </React.Fragment>
  );
};

export default Home;
