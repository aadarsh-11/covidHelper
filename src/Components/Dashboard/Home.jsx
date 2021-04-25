import React, { Component } from "react";
import Action from "./Action";
import "./Home.css";
import Message from "./Message";
import PeopleInfo from "./PeopleInfo";
import Form from "../Forms/Form.jsx ";

const Home = () => {
  return (
    <React.Fragment>
      <Message />
      <Action />
      <Form />
      <PeopleInfo peopleData={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]} />
    </React.Fragment>
  );
};

export default Home;
