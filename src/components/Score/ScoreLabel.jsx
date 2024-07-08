export default function renderCustomLabel(percentage) {
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
        {`${(percentage * 100).toFixed(0)}%`}
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
}
