import React, { useEffect, useState } from "react";
import OpenWeatherMap from "../../../libs/OpenWeatherMap";
import CityWeather from "./components/CityWeather";

const CITY_IDS = [2158177, 2147714, 2174003, 2063523];

const CityWeathers = ({ cityId, onCityClick }) => {
  const [data, setData] = useState();
  useEffect(() => {
    const getCityWeathers = async () => {
      const response = await OpenWeatherMap.get("/group", {
        params: {
          id: CITY_IDS.join(),
        },
      });
      setData(response.data);
    };
    getCityWeathers();
  }, []);

  if (!data) {
    return "Loading...";
  }

  console.log(data);
  return (
    <React.Fragment>
      {data.list
        .filter((cityWeather) => cityWeather.id !== cityId)
        .map((cityWeather) => (
          <CityWeather
            key={cityWeather.id}
            cityName={cityWeather.name}
            temperature={Math.round(cityWeather.main.temp)}
            onClick={() => onCityClick(cityWeather.id)}
          />
        ))}
    </React.Fragment>
  );
};

export default CityWeathers;
