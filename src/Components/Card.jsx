import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../Components/utils/global.context";
import "../index.css";

const Card = ({ name, username, id }) => {
  const { state, dispatch } = useContext(AppContext);
  const { favorites } = state;
  const [isFav, setIsFav] = useState(favorites.some((fav) => fav.id === id));

  const addFav = () => {
    dispatch({ type: "ADD_FAV", payload: { id, name, username } });
    setIsFav(true);
  };

  const removeFav = () => {
    dispatch({ type: "REMOVE_FAV", payload: id });
    setIsFav(false);
  };

  return (
    <div className={`card ${isFav ? "favorited" : ""}`}>
      <img
        src="../images/doctor.jpg"
        alt="imgDoctor"
        style={{ width: "200px" }}
      />
      <h3>{name}</h3>
      <p>{username}</p>
      <p>ID: {id}</p>

      <Link to={`/dentist/${id}`}>Ver Detalles</Link>

      {isFav ? (
        <button onClick={removeFav} className="favButton">
          Remove fav
        </button>
      ) : (
        <button onClick={addFav} className="favButton">
          Add fav
        </button>
      )}
    </div>
  );
};

export default Card;
