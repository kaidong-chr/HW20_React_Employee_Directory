import React, { Component } from "react";
import EmployeeTable from "./components/EmployeeTable";
import employee from "./employee.json";

class App extends Component {
  // Setting this.state.employee to the employee json array
  state = {
    employee
  };

  // removeFriend = id => {
  //   // Filter this.state.employee for employee with an id not equal to the id being removed
  //   const employee = this.state.employee.filter(friend => friend.id !== id);
  //   // Set this.state.employee equal to the new employee array
  //   this.setState({ employee });
  // };

  // Map over this.state.employee and render a FriendCard component for each friend object
  render() {
    return (
      <div>
        {this.state.employee.map(employee => (
          <EmployeeTable
          employee = {employee}
          />
          ))}
      </div>
    );
  }
}

export default App;
