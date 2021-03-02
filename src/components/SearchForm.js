import React from "react";

const Search = (props) => {
  return (
    <form>
      <div>
        <input
          placeholder="Search For Employee"
          name="Search"
          type="text"
          className="form-control"
          onChange={(event) => props.startSort(event)}
        />
      </div>
    </form>
  );
};

export default Search;
