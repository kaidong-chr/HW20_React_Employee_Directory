import React from "react";

function TableHeader(props) {
  let employee = props.employee;

  return (
        <tr className="thead-dark">
          {Object.keys(employee).map((key) => (
            <th>{key}</th>
          ))}
        </tr>
  );
}

export default TableHeader;
