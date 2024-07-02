export default function CustomTooltip({ active, payload }) {
  if (active && payload && payload.length) {
    return (
      <div className="bg-red-600 text-white p-3">
        {payload.map((entry, index) => (
          <p className="py-2" key={index} style={{ margin: 0 }}>
            {entry.name === "Kilogram"
              ? `${entry.value}kg`
              : `${entry.value}Kcal`}
          </p>
        ))}
      </div>
    );
  }

  return null;
}
