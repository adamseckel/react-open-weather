
import React from 'react';
import styled from 'react-emotion';
import weatherIconMap from './weatherIconMap.json';

const Icon = styled.img`
  width: ${props => props.large ? '4rem' : '1.4rem'};
  height: ${props => props.large ? '5rem' : '2rem'};
  overflow: visible;
`;

export default({time = 'day', weather = '200', className, ...props}) => {
  return weather && <Icon 
    src={`${process.env.PUBLIC_URL}/svg/${weatherIconMap[weather]}.svg`}
    className={className}
    {...props}>
  </Icon>;
};
