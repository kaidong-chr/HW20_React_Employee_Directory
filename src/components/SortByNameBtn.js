import React from "react";

function SortByNameBtn(props) {
  return (
        <th className="thead-dark">
          <button type="button" className="btn btn-secondary" onClick={props.sortByName}></button>
        </th>
  );
}

export default SortByNameBtn;