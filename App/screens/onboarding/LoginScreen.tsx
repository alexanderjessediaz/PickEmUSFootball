import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const Login = () => {
  return (
    <View style={styles.container}>
      <Text>Login Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
