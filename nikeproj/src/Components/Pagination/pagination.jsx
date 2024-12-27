import React from 'react';
import './pagesnation.css';

const Pagination = ({ totalpages, postsperpage, setCurrentPage }) => {
  let pages = [];
  for (let i = 1; i <= Math.ceil(totalpages / postsperpage); i++) {
    console.log(postsperpage);
    pages.push(i);
  }

  const handlePageClick = (page) => {
    setCurrentPage(page);
    window.scrollTo({top : 0 , behavior : "smooth"})
  };

  return (
    <div className='pagesclass'>
      <div className='innerpages'>
        {pages.map((page, index) => (
          <button key={index} onClick={() => handlePageClick(page)}>
            {page}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Pagination;
