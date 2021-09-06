import styled from 'styled-components';
import { BREAKPOINT2 } from '../config/constants';
import ContainerBottom from '../components/ContainerBottom';
import HeaderBottom from './HeaderBottom';

const ContainerForecast = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 280px;
  justify-content: center;

  @media only screen and (max-width: ${BREAKPOINT2}px) {
    min-width: auto;
  }

  ${
    '' /* @media only screen and (max-width: ${BREAKPOINT2}px) and (min-width: ${BREAKPOINT1}px) {
		min-width: auto;
	} */
  }
`;

const ContainerWeather = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 50px;
  margin: 0 10px;

  @media only screen and (max-width: ${BREAKPOINT2}px) {
    display: ${(props) => (props.display >= 3 ? 'none' : 'block')};
  }
`;

const ForecastWeek = styled.h3`
  font-weight: 400;
  letter-spacing: 1px;
  margin: 0.85rem 0 0.66rem;
`;

const ForecastTemp = styled.div`
  font-size: 1.25rem;
  color: rgba(0, 0, 0, 0.5);
  margin-right: 10px;
  margin: 0.6em 0 0 0;
`;

const Forecast = ({ daily }) => (
  <ContainerBottom>
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
  </ContainerBottom>
);

export default Forecast;
