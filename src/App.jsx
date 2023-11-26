import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Home from './Routes/Home';
import Detail from './Routes/Detail';
import Contact from './Routes/Contact';
import Favs from './Routes/Favs';
import { ContextProvider } from './Components/utils/global.context'; // Asegúrate de importar tu contexto
import './App.css';

function App() {
  return (
    <ContextProvider>
      <Router>
        <div className="App">
          <Navbar />

          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/dentist/:id" component={Detail} />
            <Route path="/contacto" component={Contact} />
            <Route path="/favs" component={Favs} />
          </Switch>

          <Footer />
        </div>
      </Router>
    </ContextProvider>
  );
}

export default App;