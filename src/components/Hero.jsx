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

// import React, { useState, useEffect } from "react";

// export default function Hero({ userId }) {
//   const [user, setUser] = useState(null);

//   const fetchUserData = async () => {
//     const response = await fetch(`http://localhost:3000/user/${userId}`);
//     if (!response.ok) {
//       // Gérer les erreurs, par exemple un 404 ou autre
//       console.error("Erreur lors de la récupération des données utilisateur");
//       setUser({ userInfos: { firstName: "Guest" } });
//     } else {
//       const userData = await response.json();
//       setUser(userData.data);
//     }
//   };

//   useEffect(() => {
//     fetchUserData();
//   }, []);

//   return (
//     <div className="hero">
//       <h1 className="text-4xl font-bold">
//         Bonjour{" "}
//         <span className="text-red-600">
//           {user ? user.userInfos.firstName : "Guest"}
//         </span>
//       </h1>
//       <p className="pt-5">
//         Félicitations ! Vous avez explosé vos objectifs hier 👏
//       </p>
//     </div>
//   );
// }
