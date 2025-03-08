const CustomerInfo = ({ customer }) => {
    return (
      <div>
        <h3>Customer Information</h3>
        <p>Name: {customer.CustName}</p>
        <p>City: {customer.City}</p>
        <p>State: {customer.State}</p>
        <p>Email: {customer.Email}</p>
        <p>Mobile: {customer.MobileNo}</p>
      </div>
    );
  };
  
  export default CustomerInfo;