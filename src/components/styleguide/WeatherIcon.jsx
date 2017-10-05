import 'weather-icons/css/weather-icons.css'

import React from 'react';
import styled from 'emotion/react';
import {text} from './Text';
import weatherIconMap from './weatherIconMap.json';
console.log(weatherIconMap)

const Icon = styled.i`
  composes: ${text};
  font-size: ${props => props.large ? '4rem' : '1.4rem'};
`;

export default({time = 'day', weather = '200', className, ...props}) => {
  return weather && <Icon 
    className={`wi wi-${time}-${weatherIconMap[weather].icon} ${className}`}
    {...props}>
  </Icon>;
};
