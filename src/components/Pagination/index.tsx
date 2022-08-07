import React from 'react';
import { Wrapper } from './styles';
import ReactPaginate from 'react-paginate';

type PaginationTypes = {
  numberPages: number;
  handlePageClick: any;
};

const Pagination = ({ numberPages, handlePageClick }: PaginationTypes) => {
  return (
    <Wrapper>
      <ReactPaginate
        previousLabel={'←'}
        nextLabel={'→'}
        breakLabel={'...'}
        breakClassName={'break-me'}
        pageCount={numberPages}
        marginPagesDisplayed={1}
        pageRangeDisplayed={3}
        onPageChange={handlePageClick}
        containerClassName={'pagination'}
        activeClassName={'active'}
      />
    </Wrapper>
  );
};

export default Pagination;
