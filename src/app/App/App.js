import React from "react";
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
  padding: 36px;
`;

function App() {
  return (
    <Wrapper>
      <Container>
        <CurrentCity />
        <Bottom>
          <OtherCities></OtherCities>
          <Forecast></Forecast>
        </Bottom>
      </Container>
    </Wrapper>
  );
}

export default App;
