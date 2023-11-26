import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../Components/utils/global.context"; // Asegúrate de importar tu contexto

const Card = ({ name, username, id }) => {
  const { dispatch } = useContext(AppContext);

  const addFav = () => {
    // Aquí iría la lógica para agregar la Card en el localStorage
    // Supongamos que tienes un estado global que maneja las cards favoritas
    dispatch({ type: "ADD_FAV", payload: { id, name, username } });
  };

  return (
    <div className="card">
      {/* Mostrar el nombre, el nombre de usuario y el ID */}
      <h3>{name}</h3>
      <p>{username}</p>
      <p>ID: {id}</p>

      {/* La Card servirá como Link hacia la página de detalle */}
      <Link to={`/dentist/${id}`}>Ver Detalles</Link>

      {/* Integrar la lógica para guardar la Card en el localStorage */}
      <button onClick={addFav} className="favButton">
        Add fav
      </button>
    </div>
  );
};

export default Card;
