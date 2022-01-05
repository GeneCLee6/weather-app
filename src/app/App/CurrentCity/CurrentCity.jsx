import React, { useState, useEffect } from "react";
import styled from "styled-components";
import OpenWeatherMap from "../../libs/OpenWeatherMap";
import Weather from "./components/Weather";
import CityName from "./components/CityName";

const Container = styled.div`
  background-image: url("https://i.imgur.com/GhQZhaO.jpg");
  background-size: cover;
  border-top-left-radius: 32px;
  border-top-right-radius: 32px;
  padding: 64px 96px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const CurrentCity = ({ cityId }) => {
  const [data, setData] = useState();

  useEffect(() => {
    const getCurrentCityWeather = async () => {
      const response = await OpenWeatherMap.get("/weather", {
        params: {
          id: cityId,
        },
      });
      setData(response.data);
    };
    getCurrentCityWeather();
  }, [cityId]);
  return (
    <Container>
      <Weather data={data}></Weather>
      <CityName data={data}></CityName>
    </Container>
  );
};

export default CurrentCity;
