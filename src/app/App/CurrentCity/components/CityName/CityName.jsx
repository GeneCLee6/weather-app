import React from "react";
import styled from "styled-components";

const Name = styled.h1`
  margin: 1rem 0 0 0;
  color: white;
  font-size: 2.5rem;
  font-weight: 500;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    width: 60%;
    border-bottom: 3px solid white;
    bottom: -0.75rem;
    left: 50%;
    transform: translateX(-50%);
  }
`;

const CityName = ({ data }) => {
  if (!data) {
    return "Loading...";
  }
  return <Name>{data.name}</Name>;
};

export default CityName;
