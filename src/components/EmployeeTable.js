import React from "react";


function EmployeeTable (props) {
    let employee = props.employee;
    
    return (
        <table class="table table-striped .thead-light">
            <thread>
                <tr>
                    <th scope="row">1</th>
                    {Object.keys(employee).map(key => (
                        <td>{employee[key]}</td>
                    )
                    )}
                </tr>
            </thread>
        </table>
    )
}