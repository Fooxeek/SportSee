import { Link } from "react-router-dom";

import logo from "../../assets/img/logo.png";

export default function NavHorizontal() {
  return (
    <div className="flex items-center bg-black w-full h-20 justify-between fixed top-0 left-0 w-full z-10">
      <img src={logo} alt="logo" className="w-40 h-15 mx-2" />
      <Link to="/" className="text-white mx-5">
        Accueil
      </Link>
      <Link to="/" className="text-white mx-5">
        Profil
      </Link>
      <Link to="/" className="text-white mx-5">
        Réglage
      </Link>
      <Link to="/" className="text-white mx-5">
        Communauté
      </Link>
    </div>
  );
}
