import React from "react";

function AboutUs() {
  return (
    <div>
      <div className="sales-hours">
        <h2>Sales Hours</h2>
        <table className="sales-table">
          <tbody>
            <tr>
              <td>Monday 10am - 6pm</td>
            </tr>
            <tr>
              <td>Tuesday 10am - 6pm</td>
            </tr>
            <tr>
              <td> Wednesday 10am - 6pm</td>
            </tr>
            <tr>
              <td> Thursday 10am - 6pm </td>
            </tr>
            <tr>
              <td>Friday 10am - 6pm </td>
            </tr>
            <tr>
              <td>Saturday 10am - 3pm</td>
            </tr>
            <tr>
              <td> Sunday Closed </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="about">
        Hello, My name is Tanner, I am the owner of Midwest Classic Trucks LLC.
        We have been in the classic truck business for 25 years! If you have any
        questions or are looking to finance, Give my office a call at
        612-233-4433 we will be happy to help!
        <ul className="no-bullets">
          <li>Midwest Classic Trucks</li>
          <li>123 Main Street.</li>
          <li>Minneapolis, MN.</li>
          <li>55665</li>
        </ul>
      </div>
    </div>
  );
}

export default AboutUs;
