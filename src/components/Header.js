import React from 'react';

const HeaderPage = ({ handleSearch }) => {
  return (
    <>
    <header className="header">
      <div className="header__title"></div>
    </header>
    <div className="header__search">
        <input
          type="search"
          placeholder="Search Movies"
          onChange={handleSearch}
        />
      </div>
      
    </>
  );
};

export default HeaderPage;
