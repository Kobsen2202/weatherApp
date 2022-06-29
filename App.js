import { StatusBar } from 'expo-status-bar';
import * as Location from 'expo-location';
import React from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import Loading from './Loading';
import axios from 'axios';
import Weather from './Weather'

const API_KEY = '2161a821574271e65e64ff878d32fc4b';

export default class extends React.Component {
  
  state = {
    isLoading: true
  }

  getWeather = async (latitude, longitude) => {
    const {data: {main: {temp, pressure, humidity}, weather, name}} = 
    await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`);

    this.setState({isLoading: false, temperature: temp, condition: weather[0].main, pressure: pressure, humidity: humidity, city: name});
  }

  getLocation = async (latitude, longitude) => {
    try {
      let { status } = await Location.requestForegroundPermissionsAsync();
      let location = await Location.getCurrentPositionAsync({});
      
      if (status !== 'granted') setErrorMsg('...');
      
      const { coords: {latitude, longitude} } = location;
      
       this.getWeather(latitude, longitude);
       

      
    } catch (error) {
      Alert.alert('Не могу получить местоположение');
    }
  }

  componentDidMount(){
    this.getLocation();
  }
  
  render (){
    const {isLoading, temperature, condition, pressure, humidity, city} = this.state;
    return (
      isLoading ? <Loading/> : <Weather temperature={Math.round(temperature)} condition={condition} 
      pressure={pressure} humidity={humidity} city={city} />
    );
  }
  
}
