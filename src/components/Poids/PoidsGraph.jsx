import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { USER_ACTIVITY } from "../../assets/data/data.js";
import CustomTooltip from './CustomTooltip';

export default function PoidsGraph({ userId }) {
    // Find user activity data for the specified user
    const userActivity = USER_ACTIVITY.find(user => user.userId === userId);

    // Prepare the data for Recharts by transforming session data
    const chartData = userActivity ? userActivity.sessions.map((session, index) => ({
        day: index + 1,
        Kilogram: session.kilogram,
        Calories: session.calories
    })) : [];

    return (
        <ResponsiveContainer width={900} height={400}>
            <BarChart
                data={chartData}
                margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
                barGap={10}
            >
                <CartesianGrid strokeDasharray="3 3" vertical={false}/>
                <XAxis dataKey="day" tickLine={false}/>
                <YAxis yAxisId="left" orientation="right" stroke="#909090" axisLine={false} tickLine={false} />
                <YAxis yAxisId="right" hide={true} axisLine={false} tickLine={false} />
                <Tooltip content={<CustomTooltip />} />
                <Bar yAxisId="left" dataKey="Kilogram" barSize={20} fill="#000000" radius={[20, 20, 0, 0]} />
                <Bar yAxisId="right" dataKey="Calories" barSize={20} fill="#FF0000" radius={[20, 20, 0, 0]} />
            </BarChart>
        </ResponsiveContainer>
    );
}
