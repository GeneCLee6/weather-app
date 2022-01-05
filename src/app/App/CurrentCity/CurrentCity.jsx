import React from "react";
import styled from "styled-components";
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

const CurrentCity = () => (
  <Container>
    <Weather></Weather>
    <CityName></CityName>
  </Container>
);

export default CurrentCity;
