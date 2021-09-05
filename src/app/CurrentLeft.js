import styled from 'styled-components';

import ContainerTop from '../components/ContainerTop';

const CurrentTemperature = styled.div`
  margin: 0;
  text-align: center;
  font-size: 5rem;
`;

const TextColor = styled.div`
  color: hsla(0, 0%, 100%, 0.7);
  text-align: center;
`;

const CurrentWeather = styled(TextColor)`
  font-size: 1.5rem;
  letter-spacing: 5px;
`;

const ContainerBottom = styled(TextColor)`
  margin-top: 3rem;
  display: flex;
  flex-direction: space-around;
  font-size: 1rem;
  justify-content: center;
`;

const Divider = styled.div`
  width: 3px;
  margin: 0 32px;
  background-color: hsla(0, 0%, 100%, 0.7);
`;

const TitleBottom = styled.span`
  display: inline-block;
  margin-bottom: 0.75rem;
`;

const Current = ({ temp, weather, humidity, wind }) => (
  <ContainerTop>
    <CurrentTemperature>
      <span>
        <span>{temp}</span>
      </span>
    </CurrentTemperature>
    <CurrentWeather>
      <span>{weather}</span>
    </CurrentWeather>
    <ContainerBottom>
      <div>
        <TitleBottom>HUMIDITY</TitleBottom>
        <br />
        <span>{humidity}</span>
      </div>
      <Divider />
      <div>
        <TitleBottom>WIND</TitleBottom>
        <br />
        <span>{wind}</span>
      </div>
    </ContainerBottom>
  </ContainerTop>
);

export default Current;
