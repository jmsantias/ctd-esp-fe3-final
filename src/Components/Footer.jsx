import React, { useContext } from "react";
import { AppContext } from "../Components/utils/global.context";

const Footer = () => {
  const { state, dispatch } = useContext(AppContext);

  return (
    <footer className={`footer ${state.theme ? "light" : "dark"}`}>
      <div className="logo">
        <p>Powered by</p>
        <img src="/images/DH.png" alt="DHLOGO" />
      </div>
      <div className="footer-icons">
        <img src="/images/ico-facebook.png" alt="facebook" />
        <img src="/images/ico-instagram.png" alt="instagram" />
        <img src="/images/ico-tiktok.png" alt="tiktok" />
        <img src="/images/ico-whatsapp.png" alt="whatsapp" />
      </div>
    </footer>
  );
};

export default Footer;
