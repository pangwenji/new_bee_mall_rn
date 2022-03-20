import DetailScreen from '@/pages/detail';
import Home from '@/pages/login';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
const IndexStack = createStackNavigator<LOGIN.IndexStackParams>();
const IndexStackScreen = () => {
  return (
    <IndexStack.Navigator
      screenOptions={() => ({
        headerTitle: '',
      })}>
      <IndexStack.Screen
        name="Root"
        options={{headerShown: false}}
        component={Home}
      />
      <IndexStack.Screen
        name="Detail"
        options={{headerShown: false}}
        component={DetailScreen}
      />
    </IndexStack.Navigator>
  );
};
const Navigator: React.FC = () => {
  return (
    <NavigationContainer>
      <IndexStackScreen />
    </NavigationContainer>
  );
};
export default Navigator;
