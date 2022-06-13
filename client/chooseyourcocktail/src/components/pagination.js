import React from 'react';
import { Container } from 'react-bootstrap';


const Pagination = ({ currentPage, drinksPerPage, totalDrinks, paginate , visibleRange, pageNumbers}) => {

   
console.log(currentPage)
if (totalDrinks < 9) {
    return (
        <div>

        </div>
    )
}
if (pageNumbers.length < 1) {
    return(
        <div></div>
    )
} 

if(pageNumbers.length ==3){
    return ( <div className='container  row'>
    <Container>
<nav className='pt-0  '>
    <ul className='pagination'>
    {visibleRange.map(number => (
        <li key={number} className='page-item'>
            <a onClick={() => paginate(number)} href='#' className='page-link'>
                {number}
            </a>
        </li>
      
    ))}
    </ul>
    </nav>
    </Container>
    </div>)
}
if (currentPage === 1 ){

    return ( <div className='container  row'>
    <Container>
<nav className='pt-0  '> 
 
    <ul className='pagination'>
    
        {visibleRange.map(number => (
            <li key={number} className='page-item'>
                <a onClick={() => paginate(number)} href='#' className='page-link'>
                    {number}
                </a>
            </li>
          
        ))}
            <li  className='pagination-control'>
                    <a onClick={() => paginate(currentPage+3)} href='#' className='page-link'>
                      ...
                    </a>
                </li>
                <li  className='pagination-control'>
                    <a onClick={() => paginate(pageNumbers.length)} href='#' className='page-link'>
                      {pageNumbers.length}
                    </a>
                </li>
          <li key={currentPage} className='pagination-control'>
            <a onClick={() => paginate( currentPage+1)} href='#' className='page-link'>
             next
            </a>
        </li>
    </ul>
</nav>
</Container>
</div>)
}
if (currentPage <= 2 ){
    return ( <div className='container  row'>
    <Container>
<nav className='pt-0  '>
    <ul className='pagination'>
    <li key={currentPage-1} className='pagination-control'>
                <a onClick={() => paginate(currentPage-1)} href='#' className='page-link'>
                  previous
                </a>
            </li>
           
          
        {visibleRange.map(number => (
            <li key={number} className='page-item'>
                <a onClick={() => paginate(number)} href='#' className='page-link'>
                    {number}
                </a>
            </li>
          
        ))}
         <li  className='pagination-control'>
                <a onClick={() => paginate(currentPage+3)} href='#' className='page-link'>
                  ...
                </a>
            </li>
            <li key={pageNumbers[pageNumbers.length-1]} className='pagination-control'>
                <a onClick={() => paginate(pageNumbers[pageNumbers.length-1])} href='#' className='page-link'>
                 {pageNumbers[pageNumbers.length-1]}
                </a>
            </li>
          <li key={currentPage} className='pagination-control'>
            <a onClick={() => paginate(currentPage+1)} href='#' className='page-link'>
             next
            </a>
        </li>
    </ul>
</nav>
</Container>
</div>)

}
if (currentPage === 3 ){
    return ( <div className='container  row'>
    <Container>
<nav className='pt-0  '>
    <ul className='pagination'>
    <li key={currentPage*5} className='pagination-control'>
                <a onClick={() => paginate(currentPage-1)} href='#' className='page-link'>
                  previous
                </a>
            </li>
            <li key={currentPage*4} className='pagination-control'>
                <a onClick={() => paginate(pageNumbers[0])} href='#' className='page-link'>
                 {pageNumbers[0]}
                </a>
            </li>
          
        {visibleRange.map(number => (
            <li key={number} className='page-item'>
                <a onClick={() => paginate(number)} href='#' className='page-link'>
                    {number}
                </a>
            </li>
          
        ))}
         <li  className='pagination-control'>
                <a onClick={() => paginate(currentPage+3)} href='#' className='page-link'>
                  ...
                </a>
            </li>
            <li key={currentPage*3} className='pagination-control'>
                <a onClick={() => paginate(pageNumbers[pageNumbers.length-1])} href='#' className='page-link'>
                 {pageNumbers[pageNumbers.length-1]}
                </a>
            </li>
          <li key={currentPage*2} className='pagination-control'>
            <a onClick={() => paginate(currentPage+1)} href='#' className='page-link'>
             next
            </a>
        </li>
    </ul>
</nav>
</Container>
</div>)

}

    if(currentPage+1 >= pageNumbers.length){
        return ( <div className='container  row'>
        <Container>
    <nav className='pt-0  '>
        <ul className='pagination'>
        <li key={currentPage*2} className='pagination-control'>
                    <a onClick={() => paginate(currentPage-1)} href='#' className='page-link'>
                      previous
                    </a>
                </li>
                <li  className='pagination-control'>
                    <a onClick={() => paginate(currentPage-3)} href='#' className='page-link'>
                      ...
                    </a>
                </li>
            {visibleRange.map(number => (
                <li key={number} className='page-item'>
                    <a onClick={() => paginate(number)} href='#' className='page-link'>
                        {number}
                    </a>
                </li>
              
            ))}
          
        </ul>
    </nav>
    </Container>
    </div>)

    }
    if (visibleRange[2] >= 5) {
        return ( <div className='container  row'>
        <Container>
    <nav className='pt-0  '>
        <ul className='pagination'>
        <li key={currentPage*2} className='pagination-control'>
                    <a onClick={() => paginate(currentPage-1)} href='#' className='page-link'>
                      previous
                    </a>
                </li>
                <li key={currentPage*3} className='pagination-control'>
                <a onClick={() => paginate(pageNumbers[0])} href='#' className='page-link'>
                 {pageNumbers[0]}
                </a>
            </li>
                <li  className='pagination-control'>
                    <a onClick={() => paginate(currentPage-3)} href='#' className='page-link'>
                      ...
                    </a>
                </li>
            {visibleRange.map(number => (
                <li key={number} className='page-item'>
                    <a onClick={() => paginate(number)} href='#' className='page-link'>
                        {number}
                    </a>
                </li>
              
            ))}
             <li  className='pagination-control'>
                    <a onClick={() => paginate(currentPage+3)} href='#' className='page-link'>
                      ...
                    </a>
                </li>
                <li key={pageNumbers[pageNumbers.length-1]} className='pagination-control'>
                <a onClick={() => paginate(pageNumbers[pageNumbers.length-1])} href='#' className='page-link'>
                 {pageNumbers[pageNumbers.length-1]}
                </a>
            </li>
              <li key={currentPage} className='pagination-control'>
                <a onClick={() => paginate(currentPage+1)} href='#' className='page-link'>
                 next
                </a>
            </li>
        </ul>
    </nav>
    </Container>
    </div>)
    } 
   
    



    return (
        <div className='container  row'>
            <Container>
        <nav className='pt-0  '>
            <ul className='pagination'>
            <li key={currentPage*2} className='pagination-control'>
                        <a onClick={() => paginate(currentPage-1)} href='#' className='page-link'>
                          previous
                        </a>
                    </li>
                {pageNumbers.map(number => (
                    <li key={number}  data={number} className='page-item'>
                        <a  data={number} onClick={() => paginate(number)} href='#' className='page-link'>
                            {number}
                        </a>
                    </li>  
                  
                ))}
                  <li key={currentPage*3} className='pagination-control'>
                    <a onClick={() => paginate(currentPage+1)} href='#' className='page-link'>
                     next
                    </a>
                </li>
            </ul>
        </nav>
        </Container>
        </div>
    );
                
                
                
};

export default Pagination;