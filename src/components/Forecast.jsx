import React from 'react';
import styled from 'emotion/react';
import {css} from 'emotion';
import {colors, Text, Divider, WeatherIcon} from './styleguide';
import Current from './Current';
import {Column, Row} from './base';
import moment from 'moment';

const Period = styled(Column)`
  margin: 10px 50px 10px 0;
`;

const Sticky = styled.div`
  position: sticky;
  top: 95px;
  z-index: 1;
  background-color: ${colors.primary}
`;



export default({forecast, now, className}) => {
  function renderCurrentWeather() {
    return (
      <div key='now' css={`margin: 10px 0; width: 100%;`}>
        <Sticky>
          <Text bold spaced uppercase size='1'> NOW </Text>
        </Sticky>
        <Column css={`width: 100%;`}>
          <Current weather={forecast && forecast[now][0]}/>
        </Column>
      </div>
    );
  }

  function renderForecast() {
    return forecast && Object.keys(forecast).map((date) => 
      <div key={date} css={`margin: 10px 0; width: 100%;`}>
        <Sticky>
          <Text bold spaced uppercase size='1'>{date === now ? 'TODAY' : moment(date).format('dddd')}</Text>
          <Divider/>
        </Sticky>
        <div css={`position: relative; max-width: 100%; width: 110%;`}>
          <Row justify='start' css={`position: relative; max-width: 100%; overflow-x: scroll; -webkit-overflow-scrolling: touch`}>
            {forecast[date].map((period) => 
              <Period key={period.date}>
                <WeatherIcon time='day' weather={period && period.weatherID} css={`margin-bottom: 8px;`}/>
                <Text size='1' bold css={`margin-bottom: 4px;`}>{period && Math.round(period.temperature)}º</Text>
                <Text>{moment(period.date).format('HH:mm')}</Text>
              </Period>
            )}
          </Row>
        </div>
      </div>
    );
  }

  return (
    <Column justify='start' align='start' className={className}>
      {renderCurrentWeather()}
      {renderForecast()}
    </Column>
  );
};
