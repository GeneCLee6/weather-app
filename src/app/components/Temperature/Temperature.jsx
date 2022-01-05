import React from "react";
import styled from "styled-components";

const Container = styled.span``;

const Temperature = ({ className, children }) => (
  <Container className={className}>
    <span>{children}</span>
    <span>°</span>
  </Container>
);

export default Temperature;
