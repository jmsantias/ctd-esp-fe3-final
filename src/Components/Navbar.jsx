import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../Components/utils/global.context';

const Navbar = () => {
  const { state, dispatch } = useContext(AppContext);

  const changeTheme = () => {
    console.log('Changing theme...');
    dispatch({ type:'TOGGLE_THEME'});
  };

  console.log('Theme:', state.theme);

  return (

    <nav className={`nav ${state.theme ? 'light' : 'dark'}`}>
      <div className="logo-container">
        <div className={`titulo ${state.theme ? 'light' : 'dark'}`}>DH Odonto</div>
      </div>
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/contacto">Contact</Link>
        </li>
        <li>
          <Link to="/favs">Favorites</Link>
        </li>
        <li>
        <button onClick={changeTheme}>🌙</button>
        </li>
      </ul>
    </nav>

  );
};

export default Navbar;
