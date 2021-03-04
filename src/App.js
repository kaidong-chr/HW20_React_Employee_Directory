import React, { Component } from "react";
import EmployeeTable from "./components/EmployeeTable";
import TableHeader from "./components/TableHeader";
import employee from "./employee.json";
import Search from "./components/SearchForm"

class App extends Component {
  // Setting this.state.employee to the employee json array
  state = {
    employee,
    search: ""
  };

  sortByName = () => {
    let sortedEmployeeName = this.state.employee.sort((a, b) => (a.name > b.name) ? 1: -1);
    this.setState({sortedEmployeeName})
  }

  // Map over this.state.employee and render a FriendCard component for each friend object
  render() {
    return (
      <div>
      <h2 className="display-3">Employee Directory</h2>
      <Search />
      <table className="table table-striped table-bordered">
        <TableHeader employee={employee[0]} />
        <tbody>
          {this.state.employee.map((employee) => (
            <EmployeeTable employee={employee} />
          ))}
        </tbody>
      </table>
      </div>
    );
  }
}

export default App;
