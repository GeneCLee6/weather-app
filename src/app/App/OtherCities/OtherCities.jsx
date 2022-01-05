import React from "react";
import Section from "../../components/Section";
import CityWeathers from "./CityWeathers";

const OtherCities = ({ cityId, setCityId }) => (
  <Section title="Other Cities">
    <CityWeathers cityId={cityId} setCityId={setCityId}></CityWeathers>
  </Section>
);

export default OtherCities;
