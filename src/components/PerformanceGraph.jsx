import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import { USER_PERFORMANCE } from "../assets/data/data.js";

export default function PerformanceGraph({ userId }) {
    // Find user data based on userId
    const userData = USER_PERFORMANCE.find(user => user.userId === userId);

    // Translation map from English to French
    const translations = {
        intensity: "Intensité",
        speed: "Vitesse",
        strength: "Force",
        endurance: "Endurance",
        energy: "Énergie",
        cardio: "Cardio"
    };

    // Define the desired order of subjects on the radar chart in English
    const order = ["intensity", "speed", "strength", "endurance", "energy", "cardio"];

    // Map the performance data to a format suitable for the RadarChart, translating for display
    let chartData = userData ? userData.data.map(item => ({
        subject: userData.kind[item.kind], // Keep English for sorting
        Value: item.value,
        TranslatedSubject: translations[userData.kind[item.kind]] // Use translated value for display
    })) : [];

    // Sort chartData based on the custom order defined (using the English terms)
    chartData = chartData.sort((a, b) => order.indexOf(a.subject) - order.indexOf(b.subject));

    return (
        <ResponsiveContainer width={350} height={350} className="bg-slate-800 rounded-xl mx-5">
            <RadarChart cx="50%" cy="50%" outerRadius="65%" data={chartData}>
                <PolarGrid radialLines={false}/>
                <PolarAngleAxis dataKey="TranslatedSubject" stroke='white' tickLine={false} axisLine={false} tick={{ fontSize: 10 }} />
                <Radar name="Performance" dataKey="Value" stroke='#FF0101' fill='#FF0101' fillOpacity={0.7} />
            </RadarChart>
        </ResponsiveContainer>
    );
}
