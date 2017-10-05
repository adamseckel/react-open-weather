
import React from 'react';
import styled from 'emotion/react';
import {text} from './Text';
import weatherIconMap from './weatherIconMap.json';

const Icon = styled.img`
  composes: ${text};
  width: ${props => props.large ? '4rem' : '1.4rem'};
  opacity: 0.9;
`;

export default({time = 'day', weather = '200', className, ...props}) => {
  return weather && <Icon 
    src={`${process.env.PUBLIC_URL}/svg/${weatherIconMap[weather]}.svg`}
    className={className}
    {...props}>
  </Icon>;
};
