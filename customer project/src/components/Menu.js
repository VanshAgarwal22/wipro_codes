import { useState } from "react";
import CustomerInfo from "./customer/CustomerInfo";
import CustomerShow from "./customer/CustomerShow";
import CustomerAdd from "./customer/CustomerAdd";


const Menu = ({ customer }) => {
  const [selectedMenu, setSelectedMenu] = useState("CustomerInfo");

  return (
    <div>
      <h2>Welcome, {customer.CustName}</h2>
      <button onClick={() => setSelectedMenu("CustomerInfo")}>Customer Info</button>
      <button onClick={() => setSelectedMenu("CustomerShow")}>Customer Show</button>
      <button onClick={() => setSelectedMenu("CustomerAdd")}>Add Customer</button>
      {selectedMenu === "CustomerInfo" && <CustomerInfo customer={customer} />}
      {selectedMenu === "CustomerShow" && <CustomerShow />}
      {selectedMenu === "CustomerAdd" && <CustomerAdd />}
    </div>
  );
};

export default Menu;