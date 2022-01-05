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

const Metas = () => (
  <Container>
    <Meta title="Humidity" value="66%"></Meta>
    <Divider></Divider>
    <Meta title="Wind" value="1.97 K/M"></Meta>
  </Container>
);

export default Metas;
