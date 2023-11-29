import React, { useState, useContext } from "react";
import { AppContext } from "../Components/utils/global.context";

const Form = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
  });

  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const { dispatch } = useContext(AppContext);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (formData.fullName.length < 6 || !formData.email.includes("@")) {
      setError("Por favor, verifica tu información nuevamente.");
      setSuccessMessage(null);
    } else {
      dispatch({ type: "SUBMIT_FORM", payload: formData });
      setError(null);
      setSuccessMessage("Thanks, we will contact you soon.");
      setFormData({
        fullName: "",
        email: "",
      });
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
    </div>
  );
};

export default Form;