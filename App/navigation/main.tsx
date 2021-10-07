import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/home';

const StackNavigator = createNativeStackNavigator();

const MainStack = () => {
  return (
    <StackNavigator.Navigator>
      <StackNavigator.Screen name="home" component={HomeScreen} />
    </StackNavigator.Navigator>
  );
};

export default MainStack;
