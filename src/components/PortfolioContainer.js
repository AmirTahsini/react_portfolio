import React, { useState } from 'react';
import Footer from './Footer';
import Header from './Header';
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('AboutMe');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'AboutMe') {
      return <AboutMe />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    return <Resume />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="body">
      <Header
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
      {renderPage()}
      <Footer />
    </div>
  );
}
