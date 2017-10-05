import React from 'react';
import styled from 'emotion/react';
import {text} from './Text';
import colors from './colors';
import {Row} from '../base';
import {css} from 'emotion';

import networkOnActive from './networkOnActive.svg';
import networkOffActive from './networkOffActive.svg';
import networkOff from './networkOff.svg';
import networkOn from './networkOn.svg';

const Toggle = styled(Row)`
  position: relative;
  border-radius: 8px;
  z-index: 2;
  border: 2px solid ${colors.text};
`;

const Slider = styled.span`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  background-color: ${colors.text};
  width: 50%;
  z-index: 1;
  transition: transform .3s ease;
  border-radius: 4px;
  transform: translate3d(${props => props.toggled ? '100%' : '0%'}, 0px, 0px);
`;

const IconContainer = styled(Row)`
  padding: 3px 8px;
  position: relative;
  border-radius: 100%;
  margin: 2px;
  z-index: 2;
  cursor: pointer;
`;

const Icon = styled.img`
  transition: opacity .3s ease;
  width: 18px;
  &:hover {
    opacity: 0.4;
  }
  opacity: ${props => props.active && props.activeIcon ? 1 : !props.activeIcon ? 1 : 0};  
  ${props => props.activeIcon && css`
    position: absolute;
  `}
`;

export default({toggled, handleToggle, ...props}) => {
  return <Toggle {...props} onClick={() => handleToggle(!toggled)}>
    <IconContainer>
      <Icon src={networkOn}/>
      <Icon activeIcon active={toggled === false} src={networkOnActive}/>
    </IconContainer>
    <IconContainer>
      <Icon src={networkOff}/>
      <Icon activeIcon active={toggled === true} src={networkOffActive}/>
    </IconContainer>
    <Slider toggled={toggled}/>
  </Toggle>
};
