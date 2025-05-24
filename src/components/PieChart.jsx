import React from 'react';
import './PieChart.css';

const PieChart = ({ title, segments }) => {
  const total = segments.reduce((sum, s) => sum + s.value, 0);
  let gradient = '';
  let start = 0;

  segments.forEach((seg, i) => {
    const pct = (seg.value / total) * 100;
    const end = start + pct;
    gradient += `${seg.color} ${start}% ${end}%, `;
    start = end;
  });

  return (
    <div className="pie-chart-card">
      <h3>{title}</h3>
      <div className="pie-chart" style={{ background: `conic-gradient(${gradient})` }} />
      <div className="legend">
        {segments.map((s, i) => (
          <div key={i} className="legend-item">
            <span className="color-box" style={{ background: s.color }}></span>
            {s.name}: {s.value}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PieChart;

