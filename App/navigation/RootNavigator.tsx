import React from 'react';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import MainStack from './main';

const RootNavigator: React.FC = () => {
  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: '#000000',
    },
  };

  return (
    <NavigationContainer theme={theme}>{<MainStack />}</NavigationContainer>
  );
};

export default RootNavigator;
