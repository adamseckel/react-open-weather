import React from 'react';
import styled from 'emotion/react';
import {colors, Text, Toggle} from './styleguide';
import {Row} from './base';

const Fixed = styled.div`
  position: fixed;
  top: 0;
  padding: 40px 0 0;
  z-index: 2;
  left: 40px;
  right: 40px;
  max-width: 375px;
  margin: 0 auto;
  background-color: ${colors.primary};
`;


export default({city, handleToggleDataSource, dataSource}) => {
  function handleToggle(toggled) {
    return toggled ? handleToggleDataSource('local') : handleToggleDataSource('api')
  }

  return <Fixed>
    <Row justify='space-between' align='end'>
      <Text size='3'> {city && city.name} </Text>
      <Toggle css={`margin-bottom: 10px;`} toggled={dataSource === 'local'} handleToggle={handleToggle}/>
    </Row>
  </Fixed>
};
