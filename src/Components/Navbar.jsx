import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from './utils/global.context';

const Navbar = () => {
  const { theme, dispatch } = useContext(AppContext);

  const changeTheme = () => {
    console.log('Changing theme...');
    dispatch({ type:'TOGGLE_THEME'});
  };

  console.log('Theme:', theme);

  return (
    <nav className={`nav ${theme === 'dark' ? 'dark-theme' : 'light-theme'}`}>
      <div className="logo-container">
        <div className={`logo ${theme === 'dark' ? 'dark' : 'light'}`}>DH Odontologos</div>
      </div>
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/contacto">Contacto</Link>
        </li>
        <li>
          <Link to="/favs">Favoritos</Link>
        </li>
      </ul>
      <button onClick={changeTheme}>Change theme</button>
    </nav>
  );
};

export default Navbar;
