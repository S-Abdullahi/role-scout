import React from "react";
import {
  ResponsiveContainer,
  BarChart,
  XAxis,
  YAxis,
  Bar,
  Tooltip,
  CartesianGrid,
} from "recharts";

const BarChartDisplay = ({ data }) => {
  return (
    <ResponsiveContainer>
      <BarChart data={data} width={730} height={250}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="count" fill="#ffe992" stroke="#b38835" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarChartDisplay;
