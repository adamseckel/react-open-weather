import React, { Component } from 'react';
import styled from 'react-emotion';
import {WeatherReducer} from './components/reducers';
import {Header, Forecast} from './components';

const Phone = styled.div`
  max-width: 375px;
  margin: 0 auto;
  padding: 0 40px 40px;
`;

class App extends Component {
  render() {
    return (
      <Phone>
        <WeatherReducer openWeatherRequest={this.props.openWeatherRequest} csvRequest={this.props.csvRequest}> 
          {({actions, store}) =>
            <div css={`width: 100%;`}>
              <Header css={`z-index: 2`} city={store.weather && store.weather.city} dataSource={store.dataSource} handleToggleDataSource={actions.handleToggleDataSource}/>
              <Forecast css={`z-index: 1; position: relative; margin-top: 95px;`} forecast={store.weather && store.weather.forecast} now={store.weather && store.weather.now}/>
            </div>
          }
        </WeatherReducer> 
      </Phone>
    );
  }
}

export default App;
