import React from 'react';
import styled from 'styled-components';
import FilterChip from '../filter-chip/FilterChip';

const data = [
  "All",
  "Favorite",
  "ID",
  "Title",
  "Type"
]


const FilterChipSet = () => {
  return (
    <StyledWrapper className="filter-chip-set">
      {
        data.map(chip => {
          return <FilterChip title={chip} />
        })
      }
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  &.filter-chip-set {
    margin-top: 12px;
    display: flex;
    justify-content: space-between;
  }
`;

export default FilterChipSet;