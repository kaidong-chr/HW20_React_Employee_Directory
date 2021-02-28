import React from "react";

function TableHeader (props) {
    let employee = props.employee;
    
    return (
        <table class="table table-striped .thead-light">
            <thread>
                <tr>
                    {Object.keys(employee).map(key => (
                        <th>{key}</th>
                    )
                    )}
                </tr>
            </thread>
        </table>
    )
}

export default TableHeader;