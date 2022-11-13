import React from 'react';
import styled from 'styled-components';

const SearchField = () => {
  return (
    <StyledWrapper className="search-field">
      <span className="material-icons">search</span>
      <input type="text" placeholder="Search here..." />
    </StyledWrapper>
  );
}


const StyledWrapper = styled.div`
  &.search-field {
    display: flex;
    background: #f4f4f4;
    border-radius: 7px;
    width: 100%;
    height: 45px;
    margin-right: 14px;

    span {
      padding: 10px;
      padding-right: 12px;
      color: #323232;
      opacity: 0.35;
    }

    input {
      width: 100%;
      color: #475160;
      font-size: 14px;
      padding-left: 0;
      border: none;
      display: flex;
      &::placeholder {
        color: #323232;
        opacity: 0.35;
      }
    }
  }
`;

export default SearchField;