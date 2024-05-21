import React, { useState, useEffect } from "react";
import { fetchUserData } from "../service/apiService";

export default function Hero({ userId }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUserData = async () => {
      const userData = await fetchUserData(userId);
      setUser(userData);
    };

    getUserData();
  }, [userId]);

  return (
    <div className="hero">
      <h1 className="text-4xl font-bold">
        Bonjour{" "}
        <span className="text-red-600">
          {user ? user.userInfos.firstName : "Guest"}
        </span>
      </h1>
      <p className="pt-5">
        Félicitations ! Vous avez explosé vos objectifs hier 👏
      </p>
    </div>
  );
}
