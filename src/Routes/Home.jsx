import React, { useEffect, useContext } from "react";
import { AppContext } from "../Components/utils/global.context";
import Card from "../Components/Card";

const Home = () => {
  const { state, dispatch } = useContext(AppContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data = await response.json();
        console.log(data);
        dispatch({ type: "SET_DATA", payload: data });
      } catch (error) {
        console.error("Error fetching dentists:", error);
      }
    };

    fetchData();
  }, [dispatch]);

  return (
    <main className={state.theme === "dark" ? "dark" : "light"}>
      <h1>Home</h1>
      <div className="card-grid">
        {state.data.length > 0 ? (
          state.data.map((dentist) => (
            <Card
              key={dentist.id}
              id={dentist.id}
              name={dentist.name}
              username={dentist.username}
            />
          ))
        ) : (
          <p>No hay dentistas disponibles.</p>
        )}
      </div>
    </main>
  );
};

export default Home;
