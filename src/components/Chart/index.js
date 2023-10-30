import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { nanoid } from 'nanoid';

function Chart({ data, value }) {
  const colorsMapper = {
    green: '#3CDC86',
    blue: '#18A0FB',
    red: '#ED2D95',
  };
  const colorsMapperChart = {
    green: '#colorGreen',
    blue: '#colorBlue',
    red: '#colorRed',
  };

  const dataChart = data?.map(item => {
    const yyyy = item.date.slice(0, 4);
    const mm = item.date.slice(5, 7);
    return {
      ...item,
      date: `${mm}/${yyyy}`,
    };
  });

  return (
    <ResponsiveContainer width="90%" maxHeight={248}>
      <AreaChart
        data={dataChart}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <defs>
          <linearGradient id="colorBlue" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#0F81CE" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#0F81CE" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorRed" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#C52D81" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#C52D81" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorGreen" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#1BBA64" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#1BBA64" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="0" stroke="rgba(255, 255, 255, 0.04)" />
        <XAxis
          dataKey="date"
          tickLine={false}
          tickSize={16.5}
          stroke="rgba(255, 255, 255, 0.12)"
          style={{
            fill: 'rgba(255, 255, 255, 0.6)',
            fontSize: '11px',
            fontWeight: '400',
            lineHeight: '12px',
          }}
        />
        <YAxis
          tickLine={false}
          tickSize={21}
          stroke="rgba(255, 255, 255, 0.12)"
          style={{
            fill: 'rgba(255, 255, 255, 0.6)',
            fontSize: '11px',
            fontWeight: '400',
            lineHeight: '12px',
          }}
        />
        <Tooltip />

        {Object.keys(value).map(item => {
          if (value[item]) {
            return (
              <Area
                key={nanoid()}
                type="monotone"
                dataKey={item}
                stackId="1"
                dot={{
                  stroke: colorsMapper[item],
                  strokeWidth: 2,
                  fill: colorsMapper[item],
                }}
                stroke={colorsMapper[item]}
                fill={`url(${colorsMapperChart[item]})`}
              />
            );
          }
          return null;
        })}
      </AreaChart>
    </ResponsiveContainer>
  );
}

export default Chart;
