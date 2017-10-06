import OpenWeatherRequestService from './openWeatherRequestService';
import openWeatherFixture from './openWeatherFixture';
import csvFixture from './csvFixture';

const openWeatherRequest = {
  get() {
    return Promise.resolve({
      data: openWeatherFixture
    });
  }
};

const csvRequest = {
  get() {
    return Promise.resolve(csvFixture);
  }
};

it('exports a service with 2 methods', () => {
  const openWeatherRequestService = OpenWeatherRequestService();
  expect(openWeatherRequestService).toBeDefined();
  expect(openWeatherRequestService).toHaveProperty('getLondonWeather');
  expect(openWeatherRequestService).toHaveProperty('getLocalLondonWeather');
});

describe('getLondonWeather', () => {
  it('returns weather via api', () => {
    const openWeatherRequestService = OpenWeatherRequestService(openWeatherRequest);
    return openWeatherRequestService.getLondonWeather().then((weather) => {
      expect(weather).toHaveProperty('city');
      expect(weather).toHaveProperty('now');
      expect(weather).toHaveProperty('forecast');
    });
  });
  
  it('returns weather for london', () => {
    const openWeatherRequestService = OpenWeatherRequestService(openWeatherRequest);
    return openWeatherRequestService.getLondonWeather().then((weather) => {
      expect(weather).toHaveProperty('city');
      expect(weather.city.name).toEqual('London');
    });
  });

  it('returns a normalized forecast object', () => {
    const openWeatherRequestService = OpenWeatherRequestService(openWeatherRequest);
    return openWeatherRequestService.getLondonWeather().then((weather) => {
      expect(weather.forecast).toBeDefined();
      expect(weather.forecast).toHaveProperty('2017-10-06');
      expect(weather.forecast['2017-10-06']).toHaveLength(1);
      expect(weather.forecast['2017-10-06']).toContainEqual({
        date: '2017-10-06 15:00:00',
        temperature: "14.88",
        weatherID: "800"
      });
    });
  });
});

describe('getLocalLondonWeather', () => {
  it('returns weather from csv', () => {
    const openWeatherRequestService = OpenWeatherRequestService({}, csvRequest);
    return openWeatherRequestService.getLocalLondonWeather().then((weather) => {
      expect(weather).toHaveProperty('city');
      expect(weather).toHaveProperty('now');
      expect(weather).toHaveProperty('forecast');
    });
  });
  
  it('returns weather for london', () => {
    const openWeatherRequestService = OpenWeatherRequestService({}, csvRequest);
    return openWeatherRequestService.getLocalLondonWeather().then((weather) => {
      expect(weather).toHaveProperty('city');
      expect(weather.city.name).toEqual('London');
    });
  });

  it('returns a normalized forecast object', () => {
    const openWeatherRequestService = OpenWeatherRequestService({}, csvRequest);
    return openWeatherRequestService.getLocalLondonWeather().then((weather) => {
      expect(weather.forecast).toBeDefined();
      expect(weather.forecast).toHaveProperty('2017-10-05');
      expect(weather.forecast['2017-10-05']).toHaveLength(2);
      expect(weather.forecast['2017-10-05']).toContainEqual({
        date: '2017-10-05 18:00:00',
        temperature: "13.38",
        weatherID: "803"
      });
    });
  });
});


