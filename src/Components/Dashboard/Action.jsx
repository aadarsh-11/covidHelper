import React, { Component } from "react";
import "./Actions.css";

const Action = () => {
  return (
    <section>
      <div className="actionBtns">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 button-group">
              <h3 className="title-head" style={{ "padding-bottom": "3%" }}>
                Want to help Other People?
              </h3>
              <button
                type="button"
                className="btn btn-dark btn-md download-button"
              >
                Click Here
              </button>
            </div>
            <div className="col-lg-6 button-group">
              <h3 className="title-head" style={{ "padding-bottom": "3%" }}>
                Want Help Yourself?
              </h3>
              <button
                type="button"
                className="btn btn-dark btn-md download-button"
              >
                Click Here
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Action;
