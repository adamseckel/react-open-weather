import React, { Component } from 'react';
import styled from 'emotion/react';
import {WeatherReducer} from './components/reducers';
import Header from './components/Header';
import Current from './components/Current';
import Forecast from './components/Forecast';

const Phone = styled.div`
  max-width: 375px;
  margin: 0 auto;
  padding: 0 80px 80px;
  width: 100%;
`;

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Phone>
        <WeatherReducer> 
          {({actions, store}) =>
            <div>
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
