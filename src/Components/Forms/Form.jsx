import React from "react";
import './Form.css';
import { Checkbox, Button } from '@material-ui/core';

const Form = () => {
  return (
    <div className="container">

      <div className="details">
        <input id="name" className="input" type="text" placeholder="Enter Your Name"></input>
        <input id="email" className="input" type="text" placeholder="Enter Your Email"></input>
      </div>

      <div className="requirements">

        <div className="beds">
          <Checkbox />
          <label>Beds</label>
        </div>

        <div className="icu">
          <Checkbox />
          <label>ICU</label>
        </div>

        <div className="oxygen">
          <Checkbox />
          <label>Oxygen</label>
        </div>

        <div className="remdesivir">
          <Checkbox />
          <label>Remdesivir</label>
        </div>

        <div className="ventilator">
          <Checkbox />
          <label>Ventilator</label>
        </div>

        <div className="other">
          <input type="text" placeholder="Other"></input>
        </div>

      </div>

      <div className="submit">
        <Button variant="contained" color="primary">
          Submit
        </Button>
      </div>
    </div>
  );
}

export default Form;
