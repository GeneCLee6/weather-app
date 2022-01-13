import React, { useState } from "react";
import styled from "styled-components";
import CurrentCity from "./CurrentCity";
import OtherCities from "./OtherCities";
import Forecast from "./Forecast";

const Wrapper = styled.div`
  height: 100vh;
  background-image: url("https://wallpaperaccess.com/full/2629319.png");
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  background: white;
  width: 850px;
  border-radius: 32px;
  box-shadow: 0 0 16px rgb(0, 0, 0, 50%);
`;

const Bottom = styled.div`
  display: flex;
  padding: 36px 48px;
`;

const Divider = styled.div`
  width: 3px;
  margin: 0 24px;
  background-color: rgb(0, 0, 0, 0.1);
`;

const MELBOURNE_CITY_ID = 2158177;

function App() {
  const [cityId, setCityId] = useState(MELBOURNE_CITY_ID);
  return (
    <Wrapper>
      <Container>
        <CurrentCity cityId={cityId} />
        <Bottom>
          <OtherCities cityId={cityId} onCityClick={(id) => setCityId(id)} />
          <Divider></Divider>
          <Forecast></Forecast>
        </Bottom>
      </Container>
    </Wrapper>
  );
}

export default App;
