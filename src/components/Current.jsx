import React from 'react';
import styled from 'emotion/react';
import {css} from 'emotion';
import {Text, WeatherIcon} from './styleguide';
import {Column} from './base';

export default({weather}) => {
  return (
    <Column css={`margin: 60px;`}>
      <Text css={`margin-bottom: 20px;`}>
        <WeatherIcon large time='day' weather={weather && weather.weatherID}/>
      </Text>
      <Text size='4'>{weather && Math.round(weather.temperature)}º</Text>
    </Column>
  );
};
