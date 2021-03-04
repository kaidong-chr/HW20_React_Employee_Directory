import React, { Component } from "react";
import EmployeeTable from "./components/EmployeeTable";
import TableHeader from "./components/TableHeader";
import employee from "./employee.json";
import Search from "./components/SearchForm";
import SortByNameBtn from "./components/SortByNameBtn";
import SortByLocationBtn from "./components/SortByLocationBtn";

class App extends Component {
  // Setting this.state.employee to the employee json array
  state = {
    employee,
    search: "",
    sortOrder: "asc",
    employeeDB: employee,
  };

  handleInputChange = (event) => {
    const value = event.target.value;
    this.setState(
      {
        search: value,
      },
      () => console.log(this.state.search)
    );
    // console.log("EmployeeDB",this.state.employeeDB)
  
      let employeeRecords = this.state.employeeDB;
      let searchResult = [];
      let search = this.state.search
      for (let i = 0; i < employeeRecords.length; i++) {
        if (employeeRecords[i].name.indexOf(search) > -1) {
          console.log(employeeRecords[i]);
          searchResult.push(employeeRecords[i]);
        }
      }
      console.log(this.state.search,searchResult)
      if (this.state.search !== "") {
      this.setState({ employee: searchResult });
    } else {
      this.setState({ employee: this.state.employeeDB });
    }
  };

  // Sort by name function for our button
  sortByName = (sortOrder) => {
    if (sortOrder === "asc") {
      let sortedEmployeeName = this.state.employee.sort((a, b) =>
        a.name > b.name ? 1 : -1
      );
      this.setState({
        sortedEmployeeName: sortedEmployeeName,
        sortOrder: "desc",
      });
    } else {
      let sortedEmployeeName = this.state.employee.sort((a, b) =>
        a.name < b.name ? 1 : -1
      );
      this.setState({
        sortedEmployeeName: sortedEmployeeName,
        sortOrder: "asc",
      });
    }
  };

  // Sort by location function for our button
  sortByLocation = (sortOrder) => {
    if (sortOrder === "asc") {
      let sortedEmployeeLocation = this.state.employee.sort((a, b) =>
        a.Location > b.Location ? 1 : -1
      );
      this.setState({
        sortedEmployeeLocation: sortedEmployeeLocation,
        sortOrder: "desc",
      });
    } else {
      let sortedEmployeeLocation = this.state.employee.sort((a, b) =>
        a.Location < b.Location ? 1 : -1
      );
      this.setState({
        sortedEmployeeLocation: sortedEmployeeLocation,
        sortOrder: "asc",
      });
    }
  };

  // Render contents of our main page
  render() {
    return (
      <div>
        <h1 className="display-3">Employee Directory</h1>
        <Search
          term={this.state.search}
          handleInputChange={this.handleInputChange}
        />
        <SortByNameBtn
          sortByName={this.sortByName}
          order={this.state.sortOrder}
        />
        <SortByLocationBtn sortByLocation={this.sortByLocation} />
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
