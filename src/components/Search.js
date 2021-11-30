import React from "react";

const Search = ({ search, handleSearch }) => {
  return (
    <div>
      <input
        placeholder="Search by name"
        className="search"
        onChange={handleSearch}
        value={search}
      />
    </div>
  );
};

export default Search;
