import React, { useState, useEffect } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import renderCustomLabel from "./ScoreLabel";
import { fetchUserData } from "../../service/apiService";
import { formatUserScoreData } from "../../utils/formatData";

const COLORS = ["#FF0000", "#FFFFFF00"];

export default function Score({ userId }) {
  const [data, setData] = useState([
    { name: "Segment", value: 0 },
    { name: "Other", value: 100 },
  ]);
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const getUserData = async () => {
      const userData = await fetchUserData(userId);
      const { chartData, userScore } = formatUserScoreData(userData);
      setData(chartData);
      setPercentage(userScore);
    };

    getUserData();
  }, [userId]);

  return (
    <ResponsiveContainer
      width={350}
      height={350}
      className="bg-gray-100 rounded-xl relative"
    >
      <p className="absolute top-8 left-8 font-bold">Score</p>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={100}
          outerRadius={115}
          startAngle={90}
          paddingAngle={1}
          dataKey="value"
          labelLine={false}
          cornerRadius={10}
          stroke="none" // Remove the stroke
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Pie
          data={[{ name: "center", value: 100 }]}
          cx="50%"
          cy="50%"
          innerRadius={0}
          outerRadius={100}
          fill="white"
          dataKey="value"
          stroke="none"
          isAnimationActive={false}
        />
        {renderCustomLabel(percentage)}
      </PieChart>
    </ResponsiveContainer>
  );
}
