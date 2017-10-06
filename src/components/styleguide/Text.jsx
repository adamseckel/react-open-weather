import styled from 'react-emotion';
import colors from './colors';
import {css} from 'emotion';

const sizes = {
  4: '4rem',
  3: '3rem',
  2: '2rem',
  1: '1rem'
}

export const text = css`
  margin: 0;
  font-family: Gill Sans, Gill Sans Nova, Segoe UI, sans-serif;
  transition: color .3s ease;
  color: ${colors.text};
  font-weight: 400;
  font-size: ${sizes[1]}
`;

export const Text = styled.p`
  ${text};
  text-transform: ${props => props.uppercase ? 'uppercase' : 'none'};
  font-style: ${props => props.italic ? 'italic' : 'none'};
  text-align: ${props => props.right ? 'right' : props.center ? 'center' : 'left'};
  font-size: ${props => sizes[props.size] || sizes[1]};
  letter-spacing: ${props => props.spaced ? '4px' : 0};
  color: ${props => props.light ? colors.primary : colors.text};
  font-weight: ${props => props.bold ? 700 : props.light ? 200 : 500};
`;