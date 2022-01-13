import React from "react";
import Section from "../../components/Section";
import CityWeathers from "./CityWeathers";

const OtherCities = ({ cityId, onCityClick }) => (
  <Section title="Other Cities">
    <CityWeathers cityId={cityId} onCityClick={onCityClick}></CityWeathers>
  </Section>
);

export default OtherCities;
