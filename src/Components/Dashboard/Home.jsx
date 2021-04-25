import React, { useState, useEffect } from "react";
// import React, { Component } from "react";
import Action from "./Action";
import Footer from "./Footer";
import "./Home.css";
import Message from "./Message";
import PeopleInfo from "./PeopleInfo";
import db from "../Firebase/Firebase";

const Home = () => {
  const [peopleData, setData] = useState([]);

  const fetchData = async () => {
    const response = db.collection("peopleData");
    const data = await response.get();
    data.docs.forEach((item) => {
      setData([...peopleData, item.data()]);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <React.Fragment>
      <Message />
      <Action />
      <PeopleInfo peopleData={peopleData} />
      <Footer />
    </React.Fragment>
  );
};

export default Home;
