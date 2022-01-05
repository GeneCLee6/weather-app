import React from "react";
import styled from "styled-components";

const Title = styled.h2`
  margin: 0 0 0.5rem;
  letter-spacing: 2px;
  font-weight: 300;
  font-size: 2rem;
`;

const Section = ({ title, children }) => (
  <div>
    <Title>{title}</Title>
    <div>{children}</div>
  </div>
);

export default Section;
