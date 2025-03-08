import { useEffect, useState } from "react";

export default function CustomerShow() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    fetch("https://localhost:5154/api/Customers")
      .then((res) => res.json())
      .then((data) => setCustomers(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h2>All Customers</h2>
      <ul>
        {customers.map((cust) => (
          <li key={cust.custId}>
            {cust.custName} - {cust.email} - {cust.city}
          </li>
        ))}
      </ul>
    </div>
  );
}
