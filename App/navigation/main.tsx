import React from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import HomeScreen from '../screens/home';

export const enum MAIN_ROUTES {
  HOME = 'HOME',
}

export type MainStackParamList = {
  [MAIN_ROUTES.HOME]: undefined;
};

const StackNavigator = createNativeStackNavigator<MainStackParamList>();

export type MainNavigationProp = NativeStackNavigationProp<
  MainStackParamList,
  MAIN_ROUTES.HOME
>;

const MainStack = () => {
  return (
    <StackNavigator.Navigator>
      <StackNavigator.Screen name={MAIN_ROUTES.HOME} component={HomeScreen} />
    </StackNavigator.Navigator>
  );
};

export default MainStack;
