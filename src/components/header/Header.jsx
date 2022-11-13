import React from 'react';
import SearchBar from '../search-bar/SearchBar';
import TopBar from '../top-bar/TopBar';
import Pokeball from '../../assets/ic-pokeball.png';
import styled from 'styled-components';
import FilterChipSet from '../filter-chip-set/FilterChipSet';

const Header = () => {
  return (
    <StyledWrapper className="header">
      <img src={Pokeball} alt="background-ic-pokeball" />
      <TopBar />
      <SearchBar />
      <FilterChipSet />
    </StyledWrapper>
  )
}

const StyledWrapper = styled.header`
  &.header {
    position: static;

    img {
      position: absolute;
      right: 0;
      top: 0;
      z-index: -10;
      width: 225px;
    }
  }
`;

export default Header;