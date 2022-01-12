/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import StackNavigator from './screens/StackNavigator';
import ProfileScreen from './screens/ProfileScreen'
import SettingScreen from './screens/SettingScreen'
import Ionicons from 'react-native-vector-icons/Ionicons'

const Tab = createBottomTabNavigator();

const App = () => {
  
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={
          ({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            size = 24;

            if (route.name === 'Courses') {
              iconName = focused
                ? 'journal'
                : 'journal-outline';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'person' : 'person-outline';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'settings' : 'settings-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Courses" options={{headerShown: false}} component={StackNavigator} />
        <Tab.Screen name="Profile" options={{headerShown: false}} component={ProfileScreen} />
        <Tab.Screen name="Settings" options={{headerShown: false}} component={SettingScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
