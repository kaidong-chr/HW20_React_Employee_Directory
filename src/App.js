import React, { Component } from "react";
import EmployeeTable from "./components/EmployeeTable";
import TableHeader from "./components/TableHeader";
import employee from "./employee.json";

class App extends Component {
  // Setting this.state.employee to the employee json array
  state = {
    employee,
  };

  // Map over this.state.employee and render a FriendCard component for each friend object
  render() {
    return (
      <table className="table table-striped table-dark">
        <TableHeader employee={employee[0]} />
        <tbody>
          {this.state.employee.map((employee) => (
            <EmployeeTable employee={employee} />
          ))}
        </tbody>
      </table>
    );
  }
}

export default App;
