import React from "react";

function SortByNameBtn(props) {
  return (
        <th className="thead-dark">
          <button type="button" className="btn btn-primary" onClick={props.sortByName}>Sort By Name</button>
        </th>
  );
}

export default SortByNameBtn;