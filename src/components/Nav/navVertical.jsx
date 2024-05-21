import { Link } from "react-router-dom";

import yoga from "../../assets/img/yoga.png";
import swim from "../../assets/img/swim.png";
import velo from "../../assets/img/velo.png";
import gym from "../../assets/img/gym.png";

export default function NavVertical() {
  return (
    <div className="flex flex-col bg-black h-screen w-20 justify-center fixed top-0 left-0 h-full">
      <Link to="">
        <img src={yoga} alt="yoga logo" className="w-14 h-14 my-3" />
      </Link>
      <Link to="">
        <img src={swim} alt="yoga logo" className="w-14 h-14 my-3" />
      </Link>
      <Link to="">
        <img src={velo} alt="yoga logo" className="w-14 h-14 my-3" />
      </Link>
      <Link to="">
        <img src={gym} alt="yoga logo" className="w-14 h-14 my-3" />
      </Link>
    </div>
  );
}
