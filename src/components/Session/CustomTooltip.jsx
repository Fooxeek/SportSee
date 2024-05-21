export default function CustomTooltip ({ active, payload }) {
    if (active && payload) {
        return (
            <div className="bg-white p-3 font-medium">
                    <p className="py-2" style={{ margin: 0 }}>
                        {`${payload[0].value} min`}
                    </p>
            </div>
        );
    }

    return null;
};