import styled from 'react-emotion';
import colors from './colors';

export default styled.hr`
  margin: 10px 0;
  border: 0;
  width: 100%;
  border-bottom: 2px solid ${colors.text};
  transition: color .3s ease;
  user-select: none;  
`;