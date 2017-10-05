import React from 'react';
import styled from 'emotion/react';
import {colors, Text, Toggle} from './styleguide';
import {Row} from './base';
import hexToRgba from 'hex-rgba';

const Fixed = styled.div`
  position: fixed;
  top: 0;
  padding: 40px 0 0;
  z-index: 2;
  width: 375px;
  background-color: ${colors.primary};
`;
// background: linear-gradient(to bottom, ${hexToRgba(colors.primary, 100)} 0%, ${hexToRgba(colors.primary, 100)} 50%, ${hexToRgba(colors.primary, 90)} 70%, ${hexToRgba(colors.primary, 1)} 100%);


export default({city, handleToggleDataSource, dataSource}) => {
  function handleToggle(toggled) {
    console.log(toggled, dataSource)
    return toggled ? handleToggleDataSource('local') : handleToggleDataSource('api')
  }

  return <Fixed>
    <Row justify='space-between' align='end'>
      <Text size='3'> {city && city.name} </Text>
      <Toggle css={`margin-bottom: 10px;`} toggled={dataSource === 'local'} handleToggle={handleToggle}/>
    </Row>
  </Fixed>
};
