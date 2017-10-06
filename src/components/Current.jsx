import React from 'react';
import {Text, WeatherIcon} from './styleguide';
import {Column} from './base';

export default({weather}) => {
  return (
    <Column css={`margin: 60px;`}>
      <WeatherIcon css={`margin-bottom: 20px;`} large time='day' weather={weather && weather.weatherID}/>
      <Text size='4'>{weather && Math.round(weather.temperature)}º</Text>
    </Column>
  );
};
