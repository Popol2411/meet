import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const EventGenre = ({ events }) => {
  const [data, setData] = useState([]);
useEffect(() => {

const getData = () => {
  const genres = ['React', 'JavaScript', 'Node', 'jQuery', 'AngularJS', 'Angular'];
  const data = genres.map((genre) => {
  const value = events.filter(({summary}) =>
     summary.indexOf(genre) > -1
  ).length;
    return { name: genre, value };
  });
  console.log(data);
return data;
};
setData(() => getData());
}, [events]);

const colors = ['#A3C4BC', '#BFD7B5', '#E7EFC5', '#F2DDA4', '#F4B393'];

  return (
    <ResponsiveContainer height={400} >
      <PieChart width={400} height={400}>
        <Pie
        data={data}
        cx={200}
        cy={200}
        labelLine={false}
        outerRadius={80}
        fill="#8884d8"
        dataKey="value"
        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%` }
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};

export default EventGenre;