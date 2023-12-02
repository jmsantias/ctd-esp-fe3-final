import React, { useContext } from "react";
import { AppContext } from "../Components/utils/global.context";
import Card from "../Components/Card";

const Favs = () => {
  const { state } = useContext(AppContext);
  const { favorites } = state;

  return (
    <div className={`fav ${state.theme ? 'light' : 'dark'}`}>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {favorites.length > 0 ? (
          favorites.map((dentist) => (
            <Card
              key={dentist.id}
              id={dentist.id}
              name={dentist.name}
              username={dentist.username}
            />
          ))
        ) : (
          <p>There are no favorite dentists.</p>
        )}
      </div>
    </div>
  );
};

export default Favs;