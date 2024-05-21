import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

// Calculating total and 12% value
const total = 1000;
const twelvePercentValue = total * 0.12;

const data = [
  { name: "12% Segment", value: twelvePercentValue },
  { name: "Other", value: total - twelvePercentValue },
];
const COLORS = ["#FF0000", "#FFFFFF00"]; // Second color is fully transparent

const renderCustomLabel = () => {
  return (
    <text
      x="50%"
      y="50%"
      textAnchor="middle"
      dominantBaseline="middle"
      className="recharts-text recharts-label"
    >
      <tspan
        x="50%"
        dy="-0.5em"
        style={{ fontWeight: "bold", fontSize: "30px" }}
      >
        12%
      </tspan>
      <tspan
        x="50%"
        dy="2.3em"
        style={{ fontWeight: "bold", fill: "#64748B", fontSize: "16px" }}
      >
        de votre
      </tspan>
      <tspan
        x="50%"
        dy="1.5em"
        style={{ fontWeight: "bold", fill: "#64748B", fontSize: "16px" }}
      >
        objectif
      </tspan>
    </text>
  );
};

export default function Score() {
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
          isAnimationActive={false} // Disable animation
        />
        {renderCustomLabel()}
      </PieChart>
    </ResponsiveContainer>
  );
}
