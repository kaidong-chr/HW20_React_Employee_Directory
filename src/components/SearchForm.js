import React from "react";

const Search = (props) => {
  return (
    <form className="d-flex">
      <div>
        <input
          placeholder="Enter An Employee Name"
          name="search"
          type="text"
          value={props.term}
          className="form-control"
          onChange={(event)=>{props.handleInputChange(event)}}
        />
      </div>
    </form>
  );
};

export default Search;
