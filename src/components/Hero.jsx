import React from "react";
import { USER_MAIN_DATA } from "../assets/data/data.js";

export default function Hero({ userId }) {
  const user = USER_MAIN_DATA.find((user) => user.id === userId);

  return (
    <div className="hero">
      <h1 className="text-4xl font-bold">
        Bonjour{" "}
        <span className="text-red-600">
          {user ? user.userInfos.firstName : "Guest"}
        </span>
      </h1>
      <p className="pt-5 font-medium">
        Félicitations ! Vous avez explosé vos objectifs hier 👏
      </p>
    </div>
  );
}
