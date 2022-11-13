import React from 'react';
import styled from 'styled-components';

const SearchFilter = () => {
  return (
    <StyledWrapper className="search-filter">
      <button className='btn-filter' onClick={() => console.log("clicked")}>
        <span className="material-icons">tunes</span>
      </button>
    </StyledWrapper>
  );
}


const StyledWrapper = styled.div`
  &.search-filter {
    .btn-filter {
      background-color: #475160;
      color: #ffffff;
      width: 45px;
      height: 45px;
      border-radius: 7px;

      span {
        font-size: 20px;
        width: 20px;
        height: 20px
      }
    }
  }
`;

export default SearchFilter;