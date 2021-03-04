import React from "react";

function SortByNameBtn(props) {
  return (
    // Sort by name button
    <th className="thead-dark">
      <button
        type="button"
        className="btn btn-primary"
        onClick={()=>props.sortByName(props.order)}
      >
        Sort By Name
      </button>
    </th>
  );
}

export default SortByNameBtn;
