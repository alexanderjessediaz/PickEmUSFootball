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

interface Props {
  onChangeText: (text: string) => void;
  value?: string;
  KeyboardType?: string;
}

const StackNavigator = createNativeStackNavigator<MainStackParamList>();

export type MainNavigationProp = NativeStackNavigationProp<
  MainStackParamList,
  MAIN_ROUTES.HOME
>;

const MainStack: React.FC<Props> = () => {
  return (
    <StackNavigator.Navigator>
      <StackNavigator.Screen name={MAIN_ROUTES.HOME} component={HomeScreen} />
    </StackNavigator.Navigator>
  );
};

export default MainStack;
