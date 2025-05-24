import React from 'react';

const VehicleList = ({ vehicles }) => {
  return (
    <div className="card">
      <h2>Available Vehicles</h2>
      <table className="vehicle-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Type</th>
            <th>Lease Rate ($/month)</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {vehicles.map((v) => (
            <tr key={v.id}>
              <td>{v.id}</td>
              <td>{v.name}</td>
              <td>{v.type}</td>
              <td>${v.leaseRate}</td>
              <td>{v.isLeased ? "Leased" : "Available"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default VehicleList;
