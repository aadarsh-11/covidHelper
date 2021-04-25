import React, { Component } from "react";
import "./Message.css";

const Message = () => {
  return (
    <section id="message">
      <div className="imageContainer">
        <img
          src="https://images.unsplash.com/photo-1583423230902-b653abc541eb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1789&q=80"
          sizes=""
          alt=""
        />
      </div>
      <div className="messageContainer">
        <h1 className="messageHeading ">Stay Home Stay Safe!</h1>
        <p className="messageContent">
          Coronavirus disease (COVID-19) is an infectious disease caused by a
          newly discovered coronavirus. Most people who fall sick with COVID-19
          will experience mild to moderate symptoms and recover without special
          treatment. In some region many different types of Things are require
          and there are that not available. So we are provide to register your
          self and to ask what types of things you need is if anyone have they
          contact you and help you else they share it for others to help you.
          You can always help anyone!
        </p>
      </div>
    </section>
  );
};

export default Message;
