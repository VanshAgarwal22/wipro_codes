import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { useState } from "react";
import Login from "./components/login/login";
import Menu from "./components/Menu";



function App() {
  const [customer, setCustomer] = useState(null);

  return (
    <Router>
      <Routes>
        <Route path="/" element={!customer ? <Login onLoginSuccess={setCustomer} /> : <Navigate to="/menu" />} />
        <Route path="/menu" element={customer ? <Menu customer={customer} /> : <Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
