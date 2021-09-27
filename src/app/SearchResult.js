import styled from 'styled-components';
import { BREAKPOINT2 } from '../config/constants';

const ResultContainer = styled.div`
  width: 245px;
  position: absolute;
  top: 60px;
  right: 37px;
  margin: 0px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  text-align: center;
  z-index: 1;
  overflow: auto;
  max-height: 400px;
  @media only screen and (max-width: ${BREAKPOINT2}px) {
    left: 0;
    right: 0;
    margin: 0 auto;
  }
`;

const Result = styled.div`
  padding: 5px;
  &:hover {
    background-color: #dcdcdc;
  }
  cursor: pointer;
`;

const SearchResult = ({ result, setCity, clear }) => {
  const getCityDetail = (event) => {
    event.preventDefault();
    const newId = Number(event.target.attributes.id.nodeValue);
    const newCity = result.filter((item) => item.id === newId)[0];
    setCity(newCity);
    clear();
  };

  return (
    <ResultContainer>
      {result.map(({ id, name, country, state }) => (
        <Result key={id} id={id} onClick={getCityDetail}>
          {name}, {state}&nbsp;{country}
        </Result>
      ))}
    </ResultContainer>
  );
};

export default SearchResult;
