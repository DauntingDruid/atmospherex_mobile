import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import image from '../assets/images/partly_cloudy_day_116.png'
import { getCurrentWeather } from '../api/weatherApi';
import dummyData from '../data/data.json';
import SearchBar from '../components/searchBar';

const HomeScreen = () => {
  const [lat, setLat] = useState('');
  const [lng, setLng] = useState('');
  const [weatherData, setWeatherData] = useState({});

  useEffect(() => {
    setWeatherData(dummyData)
    // getCurrentWeather(lat,lng);
  }), []
  
  console.log('dummyData : ',dummyData);

  return (
    <ImageBackground source={image} resizeMode="cover" style={styles.container}>
      <SearchBar />
      {/* <Text style={styles.title}>{weatherData?.location?.country}</Text>
      <Text style={styles.subtitle}>{weatherData?.current?.temp_c}°C</Text>
      <Text>{weatherData?.current?.condition.text}</Text> */}
    </ImageBackground>
  );
};
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
});

export default HomeScreen;
