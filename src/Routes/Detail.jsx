import React, { useEffect, useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../Components/utils/global.context'; // Asegúrate de importar tu contexto

const Detail = () => {
  const { state } = useContext(AppContext);
  const { id } = useParams();
  const [dentist, setDentist] = useState(null);

  useEffect(() => {

    const fetchDentist = async () => {
      try {
        const response = await fetch(`URL_DE_LA_API/${id}`);
        const data = await response.json();
        setDentist(data);
      } catch (error) {
        console.error('Error fetching dentist details:', error);
      }
    };

    fetchDentist();
  }, [id]); // El useEffect se ejecutará cuando cambie el parámetro 'id'

  return (
    <div className={state.theme === 'dark' ? 'dark-theme' : 'light-theme'}>
      <h1>Detail Dentist id {id}</h1>
      {dentist && (
        <>
          <p>Name: {dentist.name}</p>
          <p>Email: {dentist.email}</p>
          <p>Phone: {dentist.phone}</p>
          <p>Website: {dentist.website}</p>
        </>
      )}
    </div>
  );
};

export default Detail;