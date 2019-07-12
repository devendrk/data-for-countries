import React from 'react';

import 'bootstrap/dist/css/bootstrap.css';

const Search = ({ handleOnchange }) => {
  return (
    <div className="container">
      <div className="row my-3">
        <div className="col-lg-4"></div>
        <div className="col-lg-4 ">
          <input
            onChange={handleOnchange}
            type="search"
            className="form-control text-center py-2"
            placeholder="Search for countries"
          />

        </div>
        <div className="col-lg-4"></div>
      </div>
    </div>



  );
}

export default Search;
