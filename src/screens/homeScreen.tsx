import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import image from '../assets/images/partly_cloudy_day_116.png'
import { getCurrentWeather } from '../api/weatherApi';
import dummyData from '../data/data.json';

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
      <Text style={styles.title}>Delhi</Text>
      <Text style={styles.subtitle}>{42}°C</Text>
      <Text>Sunny</Text>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 5,
  },
});

export default HomeScreen;
