import React from "react";

function AboutUs() {
  return (
    <div>
      <div className="about">
        Hello, My name is Tanner, I am the owner of Tanners Classic Truck inc.
        We have been in classic truck business for 25 years! Were located at 123
        main street Nw. Minneapolis, MN. If you have any questions or are
        looking to finance, Give my office a call at 612-233-4433 we will be
        happy to help!
      </div>

      <div className="sales-hours">
        <h2>Sales Hours</h2>
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
      </div>
    </div>
  );
}

export default AboutUs;
