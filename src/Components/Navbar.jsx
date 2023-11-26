import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../Components/utils/global.context'; // Asegúrate de importar tu contexto

const Navbar = () => {
  const { theme, dispatch } = useContext(AppContext);

  const changeTheme = () => {
    // Aquí deberías enviar una acción al contexto global para cambiar el tema
    dispatch({ type: 'TOGGLE_THEME' });
  };

  return (
    <nav className={theme === 'dark' ? 'dark-theme' : 'light-theme'}>
      {/* Agregar los enlaces correspondientes a las rutas definidas */}
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

      {/* Implementar la lógica para cambiar de Theme con el botón */}
      <button onClick={changeTheme}>Change theme</button>
    </nav>
  );
}

export default Navbar;