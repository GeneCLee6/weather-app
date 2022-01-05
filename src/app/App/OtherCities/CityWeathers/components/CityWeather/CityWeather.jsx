import React from "react";
import styled from "styled-components";
import Temperature from "../../../../../components/Temperature";
import WeatherIcon from "../../../../../components/WeatherIcon";

const Container = styled.button`
  padding: 0;
  cursor: pointer;
  background: transparent;
  border: 0;
  text-align: left;
  outline: 0;
  font-size: 1rem;
  display: flex;
  align-items: center;
`;

const CityName = styled.div`
  font-weight: 400;
  width: 120px;
  letter-spacing: 1px;
  margin: 0;
  font-size: 1.25rem;
`;

const StyledTemerature = styled(Temperature)`
  margin-right: 16px;
`;

const CityWeather = ({ cityId, cityName, temperature, setCityId }) => (
  <Container onClick={() => setCityId(cityId)}>
    <CityName>{cityName}</CityName>
    <StyledTemerature>{temperature}</StyledTemerature>
    <WeatherIcon></WeatherIcon>
  </Container>
);

export default CityWeather;
