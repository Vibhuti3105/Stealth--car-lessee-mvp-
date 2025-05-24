// import React, { useState } from 'react';

// const LesseeForm = ({ onSubmit }) => {
//   const [form, setForm] = useState({ name: '', vehicleId: '', email: '', phone: '' });

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const submit = (e) => {
//     e.preventDefault();
//     onSubmit(form);
//     setForm({ name: '', vehicleId: '', email: '', phone: '' });
//   };

  
//   return (
//     <div className="card">
//       <h2>Register Lessee</h2>
//       <form onSubmit={submit}>
//         <input className="form-input" name="name" placeholder="Name" value={form.name} onChange={handleChange} required />
//         <input className="form-input" name="vehicleId" placeholder="Vehicle ID" value={form.vehicleId} onChange={handleChange} required />
//         <input className="form-input" name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} required />
//         <input className="form-input" name="phone" placeholder="Phone" value={form.phone} onChange={handleChange} required />
//         <button className="button">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default LesseeForm;
import React, { useState } from 'react';

const LesseeForm = ({ onSubmit, vehicles }) => {
  const [form, setForm] = useState({ name: '', vehicleId: '', email: '', phone: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submit = (e) => {
    e.preventDefault();
    onSubmit(form);
    setForm({ name: '', vehicleId: '', email: '', phone: '' });
  };

  return (
    <div className="card">
      <h2>Register Lessee</h2>
      <form onSubmit={submit}>
        <input className="form-input" name="name" placeholder="Name" value={form.name} onChange={handleChange} required />
        
        <select className="form-input" name="vehicleId" value={form.vehicleId} onChange={handleChange} required>
          <option value="">Select a Vehicle</option>
          {vehicles.filter(v => !v.isLeased).map(v => (
            <option key={v.id} value={v.id}>
              {v.id} — {v.name} — {v.type}
            </option>
          ))}
        </select>
        
        <input className="form-input" name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} required />
        <input className="form-input" name="phone" placeholder="Phone" value={form.phone} onChange={handleChange} required />
        
        <button className="button">Submit</button>
      </form>
    </div>
  );
};

export default LesseeForm;

