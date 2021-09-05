import styled from 'styled-components';

import ContainerTop from '../components/ContainerTop';

const CityName = styled.div`
  margin-top: 16px;
  font-size: 2rem;
  text-align: center;

  &::after {
    content: '';
    height: 2px;
    width: 90px;
    margin: 10px auto;
    display: block;
    background: white;
  }
`;

const CurrentRight = ({ city }) => (
  <ContainerTop>
    <CityName>{city}</CityName>
  </ContainerTop>
);

export default CurrentRight;
