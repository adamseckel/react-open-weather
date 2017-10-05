import React from 'react';
import styled from 'emotion/react';
import {css} from 'emotion';
import {colors, Text, Divider, WeatherIcon} from './styleguide';
import Current from './Current';
import {Column, Row} from './base';
import moment from 'moment';
import hexToRgba from 'hex-rgba';

const Period = styled(Column)`
  margin: 10px;
  &:last-of-type {
    margin-right: 50px;
  }
`;

const Sticky = styled.div`
  position: sticky;
  top: 95px;
  z-index: 1;
  background-color: ${colors.primary}
`;

export default({forecast, now, className}) => {
  return (
    <Column justify='start' align='start' className={className}>
      <div key='now' css={`margin: 10px 0; width: 100%;`}>
        <Sticky>
          <Text bold spaced uppercase size='1'> NOW </Text>
        </Sticky>
        <Column css={`width: 100%;`}>
          <Current weather={forecast && forecast[now][0]}/>
        </Column>
      </div>
      {forecast && Object.keys(forecast).map((date) => 
        <div key={date} css={`margin: 10px 0; width: 100%;`}>
          <Sticky>
            <Text bold spaced uppercase size='1'>{date === now ? 'TODAY' : moment(date).format('dddd')}</Text>
            <Divider/>
          </Sticky>
          <div css={`position: relative; max-width: 100%; width: 110%;`}>
            <div css={`
                position: absolute;
                right: -10%;
                top: 0;
                bottom: 0;
                width: 10%;
                z-index: 10;
                background: linear-gradient(to left, ${hexToRgba(colors.primary, 100)} 0%,${hexToRgba(colors.primary, 90)} 80%, ${hexToRgba(colors.primary, 1)} 100%);
              `}>
            </div>
              <Row justify='start' css={`position: relative; max-width: 100%; overflow-x: scroll; -webkit-overflow-scrolling: touch`}>
              
              {forecast[date].map((period) => 
                <Period key={period.dt_txt}>
                  <WeatherIcon time='day' weather={period && period.weather[0].id} css={`margin-bottom: 8px;`}/>
                  <Text size='1' bold css={`margin-bottom: 4px;`}>{period && Math.round(period.main.temp)}º</Text>
                  <Text>{moment(period.dt_txt).format('HH:mm')}</Text>
                </Period>
              )}
            </Row>
          </div>
         
        </div>
      )}
    </Column>
  );
};
