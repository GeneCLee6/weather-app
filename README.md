# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Component Division

- app
  - components
    - Temperature
    - WeatherIcon
    - Section (build up) -> (Title + Content)
  - App (Basic style, background image, centered container)
    - CurrentCity (Assemble the weather component + name + background image of the current city)
      - Weather (Assemble the weather component + lyaout of the current city)
        - Temperature
        - Visibility
        - Metas
          - Meta (Humudity) Layout
          - Meta (Wind) Layout
      - CityName
    - OtherCities
      - Section {title: 'OtherCities'}
        - CityWeathers
          - CityWeather
            - CityName
            - Temperature
            - WeatherIcon
          - CityWeather
          - CityWeather
    - Forecast
      - Section {title: 'Forecast'}
        - DayOfWeekWeathers
          - DayOfWeekWeather
            - Day
            - WeatherIcon
            - Temperature
