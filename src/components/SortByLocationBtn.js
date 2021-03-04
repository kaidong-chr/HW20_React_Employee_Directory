import React from "react";

function SortByLocationBtn(props) {
  return (
        <th className="thead-dark">
          <button type="button" className="btn btn-secondary" onClick={props.sortByName}>Sort By Location</button>
        </th>
  );
}

export default SortByLocationBtn;