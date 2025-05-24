// import React from 'react';

// const PaymentTable = ({ lessees, onAddPayment }) => {
//   const handlePay = (id) => {
//     onAddPayment(id);
//   };

//   return (
//     <div className="card">
//       <h2>Payments</h2>
//       <table style={{ width: '100%', borderCollapse: 'collapse' }}>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Vehicle ID</th>
//             <th>Payments Made</th>
//             <th>Last Payment</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {lessees.map((lessee, index) => (
//             <tr key={index} style={{ borderTop: '1px solid #ccc' }}>
//               <td>{lessee.name}</td>
//               <td>{lessee.vehicleId}</td>
//               <td>{lessee.payments.length}</td>
//               <td>{lessee.payments[lessee.payments.length - 1] || "None"}</td>
//               <td>
//                 <button className="button" onClick={() => handlePay(index)}>Add Payment</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default PaymentTable;
import React from "react";

const PaymentTable = ({ lessees, onAddPayment }) => {
  return (
    <div className="card">
      <h2>Payment History</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Lessee</th>
            <th>Vehicle ID</th>
            <th>Lease Rate</th>
            <th>Payments Made</th>
            <th>Full History</th>
            <th>Remaining Balance</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {lessees.map((lessee, index) => {
            const currentMonth = new Date().getMonth();
            const hasPaidThisMonth = lessee.payments.some(
              (p) => new Date(p).getMonth() === currentMonth
            );
            const remaining =
              hasPaidThisMonth || lessee.payments.length === 0
                ? 0
                : lessee.leaseRate;

            return (
              <tr key={index}>
                <td>{lessee.name}</td>
                <td>{lessee.vehicleId}</td>
                <td>${lessee.leaseRate}</td>
                <td>{lessee.payments.length}</td>
                <td>
                  <ul style={{ paddingLeft: "1rem" }}>
                    {lessee.payments.map((p, i) => (
                      <li key={i}>{new Date(p).toLocaleString()}</li>
                    ))}
                  </ul>
                </td>
                <td style={{ color: remaining > 0 ? "red" : "green" }}>
                  ${remaining}
                </td>
                <td>
                  <button
                    onClick={() => onAddPayment(index)}
                    disabled={hasPaidThisMonth}
                  >
                    {hasPaidThisMonth ? "Paid" : "Pay"}
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default PaymentTable;
