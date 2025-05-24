import React from "react";

const Dashboard = ({ stats }) => {
  const { totalVehicles, leasedVehicles, collected, expected, overdue } = stats;

  return (
    <div className="card">
      <h2>Dashboard</h2>
      <div className="stats-grid">
        <div className="card">
          <p>Leased Vehicles</p>
          <h3>
            {leasedVehicles} / {totalVehicles}
          </h3>
        </div>
        <div className="card">
          <p>Payments Collected</p>
          <h3>
            ${collected} / ${expected}
          </h3>
        </div>
        <div className="card">
          <p>Overdue Lessees</p>
          {overdue.length === 0 ? (
            <p style={{ color: "green" }}>None</p>
          ) : (
            <ul>
              {overdue.map(({ name, amountDue }, i) => (
                <li key={i} style={{ color: "red" }}>
                  {name} — ${amountDue} overdue
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
