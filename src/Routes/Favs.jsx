import React, { useContext } from "react";
import { AppContext } from "../Components/utils/global.context";
import Card from "../Components/Card";

const Favs = () => {
  const { state } = useContext(AppContext);

  return (
    <div className={state.theme === 'dark' ? 'dark' : 'light'}>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {state.favorites.length > 0 ? (
          state.favorites.map((dentist) => (
            <Card
              key={dentist.id}
              id={dentist.id}
              name={dentist.name}
              username={dentist.username}
            />
          ))
        ) : (
          <p>No hay dentistas destacados.</p>
        )}
      </div>
    </div>
  );
};

export default Favs;