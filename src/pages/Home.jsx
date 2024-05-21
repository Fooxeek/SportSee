import React from "react";
import { useParams } from "react-router-dom";
import Hero from "../components/Hero";
import Poids from "../components/Poids/Poids";
import SessionGraph from "../components/Session/SessionGraph";
import PerformanceGraph from "../components/PerformanceGraph";
import Score from "../components/Score";
import Nutriments from "../components/Nutriments";

export default function Home() {
  const { id } = useParams();
  return (
    <div className="p-32">
      <Hero userId={parseInt(id, 10)} />
      <div className="flex justify-between mt-20">
        <div>
          <Poids />
          <div className="flex mt-10">
            <SessionGraph userId={parseInt(id, 10)} />
            <PerformanceGraph userId={parseInt(id, 10)} />
            <Score />
          </div>
        </div>
        <div>
          <Nutriments userId={parseInt(id, 10)} />
        </div>
      </div>
    </div>
  );
}
