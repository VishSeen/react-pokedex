import React from 'react';
import styled from 'styled-components';

const TopBar = () => {
  return (
    <StyledWrapper className="top-bar">
      <button className='btn-nav'>
        <span className="material-icons">notes</span>
      </button>

      <p>Pokedex</p>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  &.top-bar {
    margin-bottom: 26px;

    .btn-nav {
      padding-left: 0;

      span {
        color: #475160;
        font-size: 28px;
      }
    }

    p {
      font-size: 32px;
      font-weight: 800;
      color: #475160;
      margin: 0;
    }
  }
`;

export default TopBar;