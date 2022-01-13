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
`;

const Layout = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const Loading = styled.div`
  font-size: 1.5rem;
  color: white;
`;

const CurrentCity = ({ cityId }) => {
  const [data, setData] = useState();

  useEffect(() => {
    const getCurrentCityWeather = async () => {
      setData();
      const response = await OpenWeatherMap.get("/weather", {
        params: {
          id: cityId,
        },
      });
      setData(response.data);
    };
    getCurrentCityWeather();
  }, [cityId]);

  if (!data) {
    return <Loading>Loading...</Loading>;
  }
  return (
    <Container>
      {!data ? (
        <Loading>Loading...</Loading>
      ) : (
        <Layout>
          <Weather data={data}></Weather>
          <CityName data={data}></CityName>
        </Layout>
      )}
    </Container>
  );
};

export default CurrentCity;
