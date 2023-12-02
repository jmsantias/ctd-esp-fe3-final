import React, { useEffect, useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../Components/utils/global.context';

const Detail = () => {
  const { state } = useContext(AppContext);
  const { id } = useParams();
  const [dentist, setDentist] = useState(null);

  useEffect(() => {
    const fetchDentist = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        const data = await response.json();
        setDentist(data);
      } catch (error) {
        console.error('Error fetching dentist details:', error);
      }
    };

    fetchDentist();
  }, [id]);

  return (
    <div className={state.theme ? 'light' : 'dark'}>
      <h1>Detail Dentist id {id}</h1>

      {dentist && (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Website</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{dentist.name}</td>
              <td>{dentist.email}</td>
              <td>{dentist.phone}</td>
              <td>{dentist.website}</td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Detail;