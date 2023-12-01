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
    const newFavorites = [...favorites, { id, name, username }];
    localStorage.setItem("favorites", JSON.stringify(newFavorites));
  };

  const removeFav = () => {
    dispatch({ type: "REMOVE_FAV", payload: id });
    setIsFav(false);
    const newFavorites = favorites.filter((fav) => fav.id !== id);
    localStorage.setItem("favorites", JSON.stringify(newFavorites));
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

      <Link to={`/dentist/${id}`} className="texto-negrita">View Details</Link>


      {isFav ? (
        <button onClick={removeFav} className="favButton">
          Remove fav
        </button>
      ) : (
        <button onClick={addFav} className="favButton">
          ⭐️
        </button>
      )}
    </div>
  );
};

export default Card;
