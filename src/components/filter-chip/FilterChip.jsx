import React from 'react';
import styled from 'styled-components';



const FilterChip = ({
  title,
  isActive,
  click
}) => {
  return (
    <StyledWrapper className="filter-chip">
      {title}
    </StyledWrapper>
  );
}


const StyledWrapper = styled.button`
  &.filter-chip {
    padding: 0.6rem 22px;
    margin-right: 10px;
    border-radius: 7px;
    background: #f4f4f4;
    color: #959595;
    font-size: 10px;
    letter-spacing: 0.55px;
    &:last-child {
      margin-right: 0;
    }
  }
`;

export default FilterChip;