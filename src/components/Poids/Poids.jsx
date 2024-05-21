import { useParams } from "react-router-dom";

import black_dot from "../../assets/img/black_dot.png";
import red_dot from "../../assets/img/red_dot.png";

import PoidsGraph from "./PoidsGraph";

export default function Poids() {
  const { id } = useParams();

  return (
    <div className="bg-gray-100 rounded-xl p-5 quotidien flex flex-col">
      <div className="flex justify-between">
        <div>
          <h3 className="font-bold">Activité Quotidienne</h3>
        </div>
        <div className="flex items-center">
          <div className="flex items-center">
            <img src={black_dot} alt="black_dot" />
            <p className="px-5">Poids (kg)</p>
          </div>
          <div className="flex items-center">
            <img src={red_dot} alt="red_dot" />
            <p className="px-5">Calories brûlées (kCal)</p>
          </div>
        </div>
      </div>
      <div className="pt-10">
        <PoidsGraph userId={parseInt(id, 10)} />
      </div>
    </div>
  );
}
