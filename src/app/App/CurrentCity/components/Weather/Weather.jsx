import React from "react";
import Temperature from "../../../../components/Temperature";
import Metas from "./components/Metas";
import styled from "styled-components";

const Heading = styled.p`
  margin: 0;
  text-align: center;
  font-size: 5rem;
  color: white;
`;

const Visibility = styled.p`
  text-align: center;
  font-size: 1.5rem;
  letter-spacing: 5px;
  margin: 0.25rem 0 0 0;
  color: rgb(255, 255, 255, 70%);
`;

const Weather = ({ data }) => (
  <div>
    <Heading>
      <Temperature>{data.main.temp}</Temperature>
    </Heading>
    <Visibility>{data.weather[0].main}</Visibility>
    <Metas humidity={data.main.humidity} wind={data.wind.speed}></Metas>
  </div>
);

export default Weather;
