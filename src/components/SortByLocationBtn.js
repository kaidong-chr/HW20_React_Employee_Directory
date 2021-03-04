import React from "react";

function SortByLocationBtn(props) {
  return (
    // Sort by location button
    <th className="thead-dark">
      <button
        type="button"
        className="btn btn-secondary"
        onClick={props.sortByLocation}
      >
        Sort By Location
      </button>
    </th>
  );
}

export default SortByLocationBtn;
