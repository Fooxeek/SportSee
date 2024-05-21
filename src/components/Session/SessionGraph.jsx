import React from 'react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";
import { USER_AVERAGE_SESSIONS } from "../../assets/data/data.js";
import CustomTooltip from './CustomTooltip';

export default function SessionGraph({ userId }) {
    const userSessionData = USER_AVERAGE_SESSIONS.find(user => user.userId === userId);

    const daysOfWeek = ["L", "M", "M", "J", "V", "S", "D"];

    const chartData = userSessionData ? userSessionData.sessions.map(session => ({
        day: daysOfWeek[session.day - 1],
        SessionLength: session.sessionLength
    })) : [];

    return (
        <ResponsiveContainer width={350} height={350} className="bg-bg_red relative rounded-xl mx-2">
                <p className='text-white text-3xl opacity-50 absolute top-5 left-12'>Durée moyenne des </p>
                <p className='text-white text-3xl opacity-50 absolute top-12 left-12'>sessions</p>
            <LineChart
                data={chartData}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
                
            >
                <XAxis dataKey="day" padding={{ right: 5, left: 5 }} axisLine={false} tickLine={false} stroke='#FFFFFF' opacity="60%" />
                <YAxis domain={[0, 'dataMax + 30']} hide={true} />
                <Tooltip content={<CustomTooltip />} cursor={false} />
                <Line type="monotone" dataKey="SessionLength" stroke="rgba(255, 255, 255, 0.6)" strokeWidth={2} activeDot={{ r: 5, fill: 'white' }} dot={false} />
            </LineChart>
        </ResponsiveContainer>
    );
}
