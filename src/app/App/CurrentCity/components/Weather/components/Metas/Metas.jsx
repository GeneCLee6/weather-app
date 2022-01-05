import React from "react";
import styled from "styled-components";
import Meta from "./components/Meta";

const Container = styled.div`
  margin-top: 48px;
  display: flex;
  justify-content: space-evenly;
`;

const Divider = styled.div`
  width: 2px;
  background-color: rgb(255, 255, 255, 70%);
`;

const Metas = ({ humidity, wind }) => (
  <Container>
    <Meta title="Humidity" value={`${humidity}%`}></Meta>
    <Divider></Divider>
    <Meta title="Wind" value={`${wind} K/M`}></Meta>
  </Container>
);

export default Metas;
