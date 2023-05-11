import React from 'react';
import Nav from './Nav';

const Header = ({ currentPage, handlePageChange }) => {
  return (
    <header className="bg-primary text-light mb-4 py-3 flex-row align-center">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        <h1 className="m-0">Amir Tahsini</h1>
      </div>
      <div>
        <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
      </div>
    </header>
  );
};

export default Header;
