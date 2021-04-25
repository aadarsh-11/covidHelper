import { React, useState } from "react";
import "./Form.css";
import db from "../Firebase/Firebase";
import { Checkbox, Button } from "@material-ui/core";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [beds, setBeds] = useState("");
  const [icu, setIcu] = useState("");
  const [oxygen, setOxygen] = useState("");
  const [remdesivir, setRemdesivir] = useState("");
  const [ventilator, setVentilator] = useState("");
  const [other, setOther] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    db.collection("peopleData")
      .add({
        name: name,
        email: email,
        phone: phone,
        city: city,
        beds: beds,
      })
      .then(() => {
        alert("Form has been submitted");
      })
      .catch((error) => {
        console.log(error.message);
      });
    setName("");
    setEmail("");
    setPhone("");
    setCity("");
    setOther("");
  };

  return (
    <div className="container">
      <div className="details">
        <input
          id="name"
          className="input"
          type="text"
          placeholder="Enter Your Name"
          onChange={(e) => setName(e.target.value)}
        ></input>
        <input
          id="email"
          className="input"
          type="text"
          placeholder="Enter Your Email"
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <input
          id="phoneNo"
          className="input"
          type="text"
          placeholder="Enter Your Phone Number"
          onChange={(e) => setPhone(e.target.value)}
        ></input>
        <input
          id="city"
          className="input"
          type="text"
          placeholder="Enter Your City"
          onChange={(e) => setCity(e.target.value)}
        ></input>
      </div>

      <div className="requirements">
        <div className="beds">
          <Checkbox/>
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
          <input type="text" placeholder="Other" onChange={(e) => setOther(e.target.value)}></input>
        </div>
      </div>

      <div className="submit">
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Submit
        </Button>
      </div>
    </div>
  );
};

export default Form;
