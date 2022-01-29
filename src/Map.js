import React from "react";

const Map = () => {
  // const students = ["Mureed", "Hussain", "Umar", "Aamir", "Lahore"];

  const students = [
    {
      name: "Mureed",
      Email: "mureed@test.com",
      cell: 888,
    },
    {
      name: "Aamir",
      Email: "aamir@test.com",
      cell: 111,
    },
    {
      name: "Umar",
      Email: "umar@test.com",
      cell: 222,
    },
    {
      name: "Hussain",
      Email: "hussain@test.com",
      cell: 333,
    },
  ];

  return (
    <div>
      <h1>Hello World from Map</h1>

      <table border="1">
        <tr>
          <td>Name</td>
          <td>Email</td>
          <td>Cell</td>
        </tr>
        {students.map((ind) => (
          <tr>
            <td>{ind.name}</td>
            <td>{ind.Email}</td>
            <td>{ind.cell}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Map;
