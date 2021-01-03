import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './src/screens/HomeScreen';
import AboutScreen from './src/screens/AboutScreen';
import FormScreen from './src/screens/FormScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: 'white',
          inactiveTintColor: 'gray',
          activeBackgroundColor: '#222130',
          inactiveBackgroundColor: '#222831',
        }}
      >
        <Tab.Screen name="Form" component={FormScreen} />
        <Tab.Screen name="About" component={AboutScreen} />
        <Tab.Screen name="Browse" component={HomeScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

