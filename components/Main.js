import React from "react";
import "./Main.css";

function Middle() {
  return (
    <div className="middle">
      <h2>Employee Details</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Position</th>
            <th>Salary</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Vansh Agarwal</td>
            <td>Software Developer</td>
            <td>₹ 8,00,000</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Abhishek</td>
            <td>Data Scientist</td>
            <td>8,00,000</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Muskan</td>
            <td>ML Engineer</td>
            <td>8,00,000</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Middle;
