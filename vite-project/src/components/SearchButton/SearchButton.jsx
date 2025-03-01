import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BsSearch } from "react-icons/bs";
import './SearchButton.css'

const SearchButton = () => {
  return (
    <div className="search-wrapper position-relative d-inline-block">
      <button className="btn search-btn"><BsSearch size={20}/></button>
      <input
        type="text"
        className="form-control search-input"
        placeholder="Nhập từ khóa..."
      />
    </div>
  );
};

export default SearchButton;
