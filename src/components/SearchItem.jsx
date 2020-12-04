import React from "react";
import ".search.css";

function SearchItem({ name, surname, image, title }) {
  return (
    <div className="search-item d-flex align-items-center justify-content-start py-3 px-3 mb-2">
      <div>
        <div
          className="search-image"
          style={{ background: `url(${image})` }}
        ></div>
      </div>
      <div className="ml-3">
        <p className="mb-0">{name}</p>
        <p className="mb-0"> {surname}</p>
        <p className="mb-0">{title}</p>
      </div>
    </div>
  );
}

export default SearchItem;
