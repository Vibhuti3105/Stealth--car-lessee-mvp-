import React, { useState } from "react";
import "./index.css";
import LesseeForm from "./components/LesseeForm";
import Dashboard from "./components/Dashboard";
import PaymentTable from "./components/PaymentTable";
import PieChart from "./components/PieChart";
import VehicleList from "./components/VehicleList";




const App = () => {
  const [lessees, setLessees] = useState([]);
  const leaseRates = {
  SUV: 600,
  Sedan: 500,
  Hatchback: 400,
  Truck: 700,
  EV: 550,
};

const [vehicles, setVehicles] = useState([
  { id: "CAR001", name: "Mahindra Thar ROXX", type: "SUV", isLeased: false, leaseRate: leaseRates["SUV"] },
  { id: "CAR002", name: "Tata Curvv",type: "SUV", isLeased: false, leaseRate: leaseRates["SUV"] },
  { id: "CAR003", name: "Kia Seltos",type: "SUV", isLeased: false, leaseRate: leaseRates["SUV"] },
  { id: "CAR004", name: "Mahindra Bolero",type: "SUV", isLeased: false, leaseRate: leaseRates["SUV"] },

  { id: "CAR005", name: "Maruti Suzuki Dzire",type: "Sedan", isLeased: false, leaseRate: leaseRates["Sedan"] },
  { id: "CAR006", name: "Hyundai Verna",type: "Sedan", isLeased: false, leaseRate: leaseRates["Sedan"] },
  { id: "CAR007", name: "Volkswagen VirtusX",type: "Sedan", isLeased: false, leaseRate: leaseRates["Sedan"] },
  { id: "CAR008", name: "Hyundai Aura",type: "Sedan", isLeased: false, leaseRate: leaseRates["Sedan"] },

  { id: "CAR009", name: "Tata Altroz",type: "Hatchback", isLeased: false, leaseRate: leaseRates["Hatchback"] },
  { id: "CAR010", name: "Maruti Swift",type: "Hatchback", isLeased: false, leaseRate: leaseRates["Hatchback"] },
  { id: "CAR011", name: "Maruti Baleno",type: "Hatchback", isLeased: false, leaseRate: leaseRates["Hatchback"] },
  { id: "CAR012", name: "Maruti Wagon R",type: "Hatchback", isLeased: false, leaseRate: leaseRates["Hatchback"] },

  { id: "CAR013", name: "Tata Ace Gold",type: "Truck", isLeased: false, leaseRate: leaseRates["Truck"] },
  { id: "CAR014", name: "Mahindra Bolero Pik-Up",type: "Truck", isLeased: false, leaseRate: leaseRates["Truck"] },
  { id: "CAR015", name: "Mahindra JAYO",type: "Truck", isLeased: false, leaseRate: leaseRates["Truck"] },
  { id: "CAR016", name: "Tata 1109g LPT",type: "Truck", isLeased: false, leaseRate: leaseRates["Truck"] },

  { id: "CAR017", name: "Tata Nexon EV",type: "EV", isLeased: false, leaseRate: leaseRates["EV"] },
  { id: "CAR018", name: "Tata Punch EV",type: "EV", isLeased: false, leaseRate: leaseRates["EV"] },
  { id: "CAR019", name: "Tata Tiago EV",type: "EV", isLeased: false, leaseRate: leaseRates["EV"] },
  { id: "CAR020", name: "Mahindra XUV400 EV",type: "EV", isLeased: false, leaseRate: leaseRates["EV"] },
]);
  const addLessee = (lessee) => {
  const vehicle = vehicles.find((v) => v.id === lessee.vehicleId);
  if (!vehicle || vehicle.isLeased) {
    alert("Vehicle not available or already leased.");
    return;
  }

  const leaseRate = leaseRates[vehicle.type];
  const newLessee = {
    ...lessee,
    type: vehicle.type,
    leaseRate,
    payments: [],
  };

  // Mark vehicle as leased
  const updatedVehicles = vehicles.map((v) =>
    v.id === vehicle.id ? { ...v, isLeased: true } : v
  );

  setVehicles(updatedVehicles);
  setLessees([...lessees, newLessee]);
};


  const addPayment = (index) => {
    const newLessees = [...lessees];
    const today = new Date().toLocaleString();
    newLessees[index].payments.push(today);
    setLessees(newLessees);
  };

  const stats = {
    totalVehicles: 20,
    leasedVehicles: lessees.length,
    collected: lessees.reduce(
  (sum, l) => sum + l.payments.length * l.leaseRate,
  0
),
expected: lessees.reduce(
  (sum, l) => sum + l.leaseRate,
  0
),

    overdue: lessees
      .filter(
        (l) =>
          !l.payments.some(
            (p) => new Date(p).getMonth() === new Date().getMonth()
          )
      )
      .map((l) => ({
        name: l.name,
        amountDue: l.leaseRates,
      })),
  };

  return (
    <div className="container">
      <h1>Car Leasing Platform</h1>
      <Dashboard stats={stats} />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "1rem",
          overflowX: "auto",
          padding: "1rem 0",
          flexWrap: "nowrap",
        }}
      >
        <PieChart
          title="Leasing Status"
          segments={[
            { name: "Leased", value: stats.leasedVehicles, color: "#00C49F" },
            {
              name: "Available",
              value: stats.totalVehicles - stats.leasedVehicles,
              color: "#FFBB28",
            },
          ]}
        />
        <PieChart
          title="Payment Status"
          segments={[
            { name: "Collected", value: stats.collected, color: "#0088FE" },
            {
              name: "Remaining",
              value: stats.expected - stats.collected,
              color: "#FF8042",
            },
          ]}
        />
        <PieChart
          title="Overdue Status"
          segments={[
            {
              name: "On-time",
              value: stats.leasedVehicles - stats.overdue.length,
              color: "#82ca9d",
            },
            { name: "Overdue", value: stats.overdue.length, color: "#ff4d4f" },
          ]}
        />
      </div>
      <VehicleList vehicles={vehicles} />
      <LesseeForm onSubmit={addLessee} vehicles={vehicles} />
      <PaymentTable lessees={lessees} onAddPayment={addPayment} />
    </div>
  );
};

export default App;
