import { Component } from 'react';
import {OpenWeatherRequest} from '../../services';

function removeSplash() {
  try {
    const splash = document.getElementById("splash");
    splash.className = "removed";
    setTimeout(() => {
      splash.parentNode.removeChild(splash);
    }, 400);
  } catch(e) {
    console.error('Cant remove splash');
  }
}

class WeatherReducer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weather: undefined
    };
  }

  componentDidMount = async () => {
    const openWeatherRequest = OpenWeatherRequest(this.props.openWeatherRequest, this.props.csvRequest);
    this.setState({openWeatherRequest});
    
    try {
      const weather = await openWeatherRequest.getLondonWeather();
      this.setState({weather, dataSource: 'api'});
      removeSplash();      
    } catch(error) {
      removeSplash();
    }
  }

  fetchFromLocal = async () => {
    const weather = await this.state.openWeatherRequest.getLocalLondonWeather();
    this.setState({weather});
  }

  fetchFromApi = async () => {
    const weather = await this.state.openWeatherRequest.getLondonWeather();
    this.setState({weather});
  }

  handleToggleDataSource = (dataSource) => {
    if (dataSource === 'api') {
      this.setState({dataSource})
      return this.fetchFromApi();
    } else {
      this.setState({dataSource})
      return this.fetchFromLocal();
    }
  }
  
  render() {
    return this.props.children({actions: this, store: this.state});
  }
}

export default WeatherReducer;
