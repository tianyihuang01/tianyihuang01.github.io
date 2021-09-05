import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import { BREAKPOINT2 } from '../constants/constants';
import logo from '../images/weather_icon.png';

const NavContainer = styled.div`
  background-color: rgb(66 0 82);
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);

  @media only screen and (max-width: ${BREAKPOINT2}px) {
    justify-content: center;
  }
`;

const NavBrand = styled.div`
  display: flex;
  align-items: center;
`;

const NavIcon = styled.img`
  width: 35px;
`;

const NavText = styled.a`
  color: white;
  font-weight: bold;
  text-align: center;

  @media only screen and (max-width: ${BREAKPOINT2}px) {
    display: none;
  }
`;

const SearchContainer = styled.div`
  ${'' /* float: right; */}
`;
const SearchInput = styled.input`
  padding: 6px;
  margin: 8px 0;
  font-size: 17px;
  border: none;
  background-color: rgba(66 0 82 0.15);

  @media only screen and (max-width: ${BREAKPOINT2}px) {
  }
`;

const SearchButton = styled.button`
  ${'' /* float: right; */}
  ${'' /* width: 15px; */}
  padding: 6px 10px;
  margin-top: 8px;
  margin-right: 16px;
  background: #ddd;
  font-size: 17px;
  border: none;
  cursor: pointer;

  &:hover {
    background: #ccc;
  }
`;

const NavBar = () => (
  <>
    <NavContainer>
      <NavBrand>
        <NavIcon src={logo} alt="Logo" />
        <NavText>My Weather App</NavText>
      </NavBrand>

      <SearchContainer>
        <form>
          <SearchInput placeholder="Search" />
          <SearchButton>
            <FontAwesomeIcon icon={faSearch} />
          </SearchButton>
        </form>
      </SearchContainer>
    </NavContainer>
  </>
);

export default NavBar;
