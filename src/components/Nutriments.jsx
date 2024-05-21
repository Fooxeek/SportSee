import React from "react";
import { USER_MAIN_DATA } from "../assets/data/data.js";

import caloriesImg from "../assets/img/calories.png";
import proteinesImg from "../assets/img/proteines.png";
import glucidesImg from "../assets/img/glucides.png";
import lipidesImg from "../assets/img/lipides.png";

export default function Nutriments({ userId }) {
  const user = USER_MAIN_DATA.find((user) => user.id === userId);

  const nutriments = user
    ? user.keyData
    : {
        calorieCount: 0,
        proteinCount: 0,
        carbohydrateCount: 0,
        lipidCount: 0,
      };

  return (
    <div className="nutriments flex flex-col justify-between h-full">
      <div className="calories flex items-center bg-gray-100 rounded-xl py-8 px-14">
        <img src={caloriesImg} alt="calories" className="w-20 h-20" />
        <div>
          <p className="font-bold text-2xl pl-4">
            {nutriments.calorieCount} kcal
          </p>
          <p className="font-medium text-gray-500 pl-4">Calories</p>
        </div>
      </div>
      <div className="proteines flex items-center bg-gray-100 rounded-xl py-8 px-14">
        <img src={proteinesImg} alt="proteines" className="w-20 h-20" />
        <div>
          <p className="font-bold text-2xl pl-4">{nutriments.proteinCount} g</p>
          <p className="font-medium text-gray-500 pl-4">Protéines</p>
        </div>
      </div>
      <div className="glucides flex items-center bg-gray-100 rounded-xl py-8 px-14">
        <img src={glucidesImg} alt="glucides" className="w-20 h-20" />
        <div>
          <p className="font-bold text-2xl pl-4">
            {nutriments.carbohydrateCount} g
          </p>
          <p className="font-medium text-gray-500 pl-4">Glucides</p>
        </div>
      </div>
      <div className="lipides flex items-center bg-gray-100 rounded-xl py-8 px-14">
        <img src={lipidesImg} alt="lipides" className="w-20 h-20" />
        <div>
          <p className="font-bold text-2xl pl-4">{nutriments.lipidCount} g</p>
          <p className="font-medium text-gray-500 pl-4">Lipides</p>
        </div>
      </div>
    </div>
  );
}
