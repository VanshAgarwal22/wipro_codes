import { useState } from "react";

export default function CustomerAdd() {
  const [customer, setCustomer] = useState({ custName: "", email: "", city: "" });

  const handleAddCustomer = () => {
    fetch("http://localhost:5154/api/Customers", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(customer),
    })
      .then((res) => res.json())
      .then((data) => alert("Customer added!"))
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <h2>Add Customer</h2>
      <input
        type="text"
        placeholder="Name"
        onChange={(e) => setCustomer({ ...customer, custName: e.target.value })}
      />
      <input
        type="email"
        placeholder="Email"
        onChange={(e) => setCustomer({ ...customer, email: e.target.value })}
      />
      <input
        type="text"
        placeholder="City"
        onChange={(e) => setCustomer({ ...customer, city: e.target.value })}
      />
      <button onClick={handleAddCustomer}>Add</button>
    </div>
  );
}
