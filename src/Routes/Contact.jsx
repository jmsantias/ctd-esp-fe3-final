import React, { useContext } from 'react';
import { AppContext } from '../Components/utils/global.context'; // Asegúrate de importar tu contexto
import Form from '../Components/Form';

const Contact = () => {
  const { state } = useContext(AppContext);

  return (
    <div className={`contact ${state.theme ? 'light' : 'dark'}`}>
      <h2>Want to know more?</h2>
      <p>Send us your questions and we will contact you</p>
      <Form />
    </div>
  );
};

export default Contact;