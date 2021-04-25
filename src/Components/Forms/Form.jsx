import { React, useState } from "react";
import './Form.css';
import { db } from '../Firebase/Firebase';
import { Checkbox, Button } from '@material-ui/core';

const Form = () => {

  const [name, setname] = useState("");
  const [email, setemail] = useState("");

  const handleSubmit = (e) => {
    // e.preventdefault();

    db.collection('Information').add({
      Username: name,
      Useremail: email,
    })
      .then(() => {
        alert("Form has been submitted");
      })
      .catch((error) => {
        console.log(error.message);
      });
    setname("");
    setemail("");
  }

  return (
    <div className="container">

      <div className="details">
        <input id="name" className="input" type="text" placeholder="Enter Your Name" onChange={(e) => setname(e.target.value)}></input>
        <input id="email" className="input" type="text" placeholder="Enter Your Email" onChange={(e) => setemail(e.target.value)}></input>
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
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Submit
        </Button>
      </div>
    </div>
  );
}

export default Form;
