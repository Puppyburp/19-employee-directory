import React, { useContext } from "react";
import "../components/SearchName.css";
import DataAreaContext from "../utils/DataAreaContext";

const SearchName = () => {
  const context = useContext(DataAreaContext);

  return (
    <div className="searchbox">
      <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="">
              Search Name
            </span>
          </div>
          <input
          className="form-control"
          type="search"
          placeholder="name"
          aria-label="Search"
          onChange={e => context.handleSearchChange(e)}
        />
        </div>
    </div>
  );
}
export default SearchName;