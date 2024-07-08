import React, { useState, useEffect } from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";
import { fetchUserPerformance } from "../service/apiService";
import { formatUserPerformance } from "../utils/formatData";

export default function PerformanceGraph({ userId }) {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const getUserPerformance = async () => {
      const userData = await fetchUserPerformance(userId);
      if (userData) {
        const formattedData = formatUserPerformance(userData);
        setChartData(formattedData);
      }
    };

    getUserPerformance();
  }, [userId]);

  return (
    <ResponsiveContainer
      width={350}
      height={350}
      className="bg-slate-800 rounded-xl mx-5"
    >
      <RadarChart cx="50%" cy="50%" outerRadius="75%" data={chartData}>
        <PolarGrid radialLines={false} />
        <PolarAngleAxis
          dataKey="TranslatedSubject"
          stroke="white"
          tickLine={false}
          axisLine={false}
          tick={{ fontSize: 14 }}
        />
        <Radar
          name="Performance"
          dataKey="Value"
          stroke="#FF0101"
          fill="#FF0101"
          fillOpacity={0.7}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
}
