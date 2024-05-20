import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginForm from '../components/LoginForm';
import MapScreen from '../components/MapScreen';
import MoviesScreen from '../components/MoviesScreen';
import LocationDetailsScreen from '../components/LocationDetailsScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginForm} />
        <Stack.Screen name="Map" component={MapScreen} />
        <Stack.Screen name="Movies" component={MoviesScreen} />
        <Stack.Screen name="LocationDetails" component={LocationDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
