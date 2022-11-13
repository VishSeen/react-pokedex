import React from 'react';
import styled from 'styled-components';
import SearchField from '../search-field/SearchField';
import SearchFilter from '../search-filter/SearchFilter';

const SearchBar = () => {
  return (
    <StyledWrapper className="search-bar">
      <SearchField />
      <SearchFilter />
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  &.search-bar {
    display: flex;
    width: 100%;
    height: 45px;
    margin-bottom: 14px;
  }
`;

export default SearchBar;