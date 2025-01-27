import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addFormData } from "../features/form/formSlice";
function Form() {
  const [firstName, setFristName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [company, setCompany] = useState("");
  const [telephone, setTelephone] = useState("");
  const dispatch = useDispatch();
  function addFormHanlder(e) {
    e.preventDefault();
    dispatch(addFormData({ firstName, lastName, address, company, telephone }));
    setFristName("");
    setLastName("");
    setAddress("");
    setCompany("");
    setTelephone("");
  }
  return (
    <div>
      <form className="form" onSubmit={addFormHanlder}>
        <h1>Contact Us</h1>
        <div>
          <label className="input-text">First Name</label>
          <input
            placeholder="Enter First Name"
            type="text"
            required
            value={firstName}
            onChange={(e) => setFristName(e.target.value)}
          />
        </div>
        <div>
          <label className="input-text">Last Name</label>
          <input
            placeholder="Enter Last Name"
            required
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div>
          <label className="input-text">Address</label>
          <input
            placeholder="Enter Address"
            type="text"
            required
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div>
          <label className="input-text">Company</label>
          <input
            placeholder="Enter Company"
            type="text"
            required
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
        </div>
        <div>
          <label className="input-text">Telephone</label>
          <input
            placeholder="Enter Telephone"
            type="text"
            required
            pattern="03[0-9]{2}[0-9]{7}"
            value={telephone}
            onChange={(e) => setTelephone(e.target.value)}
          />
        </div>
        <button className="btn-submit" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
