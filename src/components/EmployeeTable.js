import React from "react";


function EmployeeTable (props) {
    return (
        <table class="table table-striped .thead-light">
            <thread>
                <tr>
                    <th scope="col">{employee[key]}</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Occupation</th>
                    <th scope="col">Location</th>
                </tr>
            </thread>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    {Object.keys(employee).map(key => (
                        <td>{employee[key]}</td>
                    )
                    )}
                </tr>
            </tbody>
        </table>
    )
}