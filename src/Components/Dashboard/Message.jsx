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
        <h1 className="messageHeading ">Welcome to dashboard</h1>
        <p className="messageContent">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </section>
  );
};

export default Message;
