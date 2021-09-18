import styled from 'styled-components';
import { BREAKPOINT1, BREAKPOINT2 } from '../config/constants';
import ContainerBottom from '../components/ContainerBottom';
import HeaderBottom from '../components/HeaderBottom';
import Source from '../components/Source';

const ContainerBottomFlex = styled(ContainerBottom)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ContainerForecast = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 280px;
  justify-content: center;
  margin: 10px -10px 15px ;

  @media only screen and (max-width: ${BREAKPOINT2}px) {
    min-width: auto;
  }
`;

const ContainerWeather = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 50px;
  margin: 0 10px;

  @media only screen and (max-width: ${BREAKPOINT1}px) {
    display: ${(props) => (props.display >= 3 ? 'none' : 'block')};
  }

  @media only screen and (min-width: ${BREAKPOINT1 + 1}px) and (max-width: ${BREAKPOINT2}px) {
    display: ${(props) => (props.display >= 3 ? 'none' : 'block')};
    margin: 0 18px;
  }
`;

const ForecastWeek = styled.h3`
  font-weight: 400;
  letter-spacing: 1px;
  margin: 0 0 0.6rem 0;
`;

const ForecastTemp = styled.div`
  font-size: 1.25rem;
  color: rgba(0, 0, 0, 0.5);
  margin-right: 10px;
  margin: 0.6rem 0 0 0;
`;

const Forecast = ({ daily }) => (
  <ContainerBottomFlex>
    <HeaderBottom>Forecast</HeaderBottom>
    <ContainerForecast>
      {daily.map(({ key, img, temp }, index) => (
        <ContainerWeather key={key} display={index}>
          <ForecastWeek>{key}</ForecastWeek>
          <img src={img} alt="Clouds" />
          <ForecastTemp>{temp}</ForecastTemp>
        </ContainerWeather>
      ))}
    </ContainerForecast>
    <Source>
      Power by{' '}
      <a href="https://openweathermap.org/" target="_blank" rel="noreferrer">
        OpenWeather
      </a>
    </Source>
  </ContainerBottomFlex>
);

export default Forecast;
