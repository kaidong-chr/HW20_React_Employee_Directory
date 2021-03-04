import React from "react";

function EmployeeTable(props) {
  let employee = props.employee;

  return (
    // Our employees information listed by rows
    <tr>
      {Object.keys(employee).map((key) => (
        <td>{employee[key]}</td>
      ))}
    </tr>
  );
}

export default EmployeeTable;
