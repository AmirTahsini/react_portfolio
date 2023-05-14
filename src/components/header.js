import React from 'react';
import Nav from './Nav';

const Header = ({ currentPage, handlePageChange }) => {
  return (
    <header className="header">
        <h1>Amir Tahsini</h1>
      <div>
        <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
      </div>
    </header>
  );
};

export default Header;
