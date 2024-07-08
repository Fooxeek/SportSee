import { Link } from "react-router-dom";

import yoga from "../../assets/img/yoga.png";
import swim from "../../assets/img/swim.png";
import velo from "../../assets/img/velo.png";
import gym from "../../assets/img/gym.png";

export default function NavVertical() {
  return (
    <div className="fixed top-0 left-0 h-full flex flex-col bg-black w-20">
      <div className="flex-grow flex flex-col justify-center items-center">
        <Link to="">
          <img src={yoga} alt="yoga logo" className="w-14 h-14 my-3 mt-32" />
        </Link>
        <Link to="">
          <img src={swim} alt="swim logo" className="w-14 h-14 my-3" />
        </Link>
        <Link to="">
          <img src={velo} alt="velo logo" className="w-14 h-14 my-3" />
        </Link>
        <Link to="">
          <img src={gym} alt="gym logo" className="w-14 h-14 my-3" />
        </Link>
      </div>
      <div className="flex flex-col items-center mb-4">
        <p className="text-white vertical-text">Copiryght, SportSee 2020</p>
      </div>
    </div>
  );
}
