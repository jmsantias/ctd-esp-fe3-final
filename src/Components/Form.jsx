import React, { useState, useContext } from "react";
import { AppContext } from "../Components/utils/global.context";

const Form = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
  });

  const [error, setError] = useState(null);
  const { dispatch } = useContext(AppContext);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validaciones básicas
    if (formData.fullName.length < 6 || !formData.email.includes("@")) {
      setError("Por favor, verifica tu información nuevamente.");
    } else {
      // Aquí podrías enviar los datos al servidor o realizar otras acciones necesarias
      dispatch({ type: "SUBMIT_FORM", payload: formData });
      setError(null);
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
          Nombre Completo:
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
        <button type="submit">Enviar</button>
      </form>

      {error && <p>{error}</p>}
    </div>
  );
};

export default Form;