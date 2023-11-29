import React, { useContext } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Routes/Home";
import Detail from "./Routes/Detail";
import Contact from "./Routes/Contact";
import Favs from "./Routes/Favs";
import { AppContext } from "./Components/utils/global.context";

function App() {
  const { state } = useContext(AppContext);
  console.log('Rendering App...');

  return (
      <div className={`App ${state.theme ? 'light' : 'dark'}`}>
        <Navbar />
        
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/dentist/:id" element={<Detail />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/favs" element={<Favs />} />

          <Route
            path="/*"
            element={<Navigate to="/home" />}
          />
        </Routes>

        <Footer />
      </div>
  );
}

export default App;
