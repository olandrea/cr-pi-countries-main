import React from "react";
import './paginado.css';

const Paginado = ({ countryPerPage, allCountries, paginado, currentPage, allActivities }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(allCountries / countryPerPage); i++) {
    pageNumbers.push(i);
  }

  for (let i = 1; i <= Math.ceil(allActivities / countryPerPage); i++) {
    pageNumbers.push(i);
  }

  
 
  const goToPreviousPage = () => {
    if (currentPage > 1) {
        paginado(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < pageNumbers.length) {
        paginado(currentPage + 1);
    }
  };

  return (
    <nav className='nav'>
      <ul className='ul'>
        <li>
          <button
            onClick={goToPreviousPage}
            disabled={currentPage === 1}
            className='paging'>
            {"<<<"}
          </button>
        </li>

        {pageNumbers?.map((number) => {
          return (
            <li key={number} >
              <button onClick={()=> paginado(number)} >{number}</button>
            </li>
          );
        })}

        <li>
          <button
            onClick={goToNextPage}
            disabled={currentPage === pageNumbers.length}
            className='paging'>
            {">>>"}
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Paginado;