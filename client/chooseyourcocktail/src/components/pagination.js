import React from 'react';


const Pagination = ({ drinksPerPage, totalDrinks, paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalDrinks / drinksPerPage); i++) {
        pageNumbers.push(i);
    }
    if (totalDrinks < 9) {
        return (
            <div>

            </div>
        )
    }

    return (
        <div className='container'>
        <nav className='pt-0'>
            <ul className='pagination'>
                {pageNumbers.map(number => (
                    <li key={number} className='page-item'>
                        <a onClick={() => paginate(number)} href='#' className='page-link'>
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
        </div>
    );
};

export default Pagination;