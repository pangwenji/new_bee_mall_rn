/* eslint-disable @typescript-eslint/no-unused-vars */
import AboutUS from '@/pages/about-us';
import AccountManager from '@/pages/account-manager';
import AddressManager from '@/pages/address-manager';
import Login from '@/pages/login';
import Order from '@/pages/order';
import ProductList from '@/pages/product-list';
import BottomTab from '@/pages/tab/index';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
const IndexStack = createStackNavigator<LOGIN.IndexStackParams>();

const IndexStackScreen: React.FC<any> = (props: any) => {
  return (
    <IndexStack.Navigator
      screenOptions={() => ({
        headerTitle: '',
      })}>
      <IndexStack.Screen
        name="Root"
        options={{headerShown: false}}
        component={BottomTab}
      />
      <IndexStack.Screen
        name="ProductList"
        options={{headerShown: false}}
        component={ProductList}
      />
      <IndexStack.Screen
        name="Order"
        options={{headerShown: false}}
        component={Order}
      />
      <IndexStack.Screen
        name="AboutUS"
        options={{headerShown: false}}
        component={AboutUS}
      />
      <IndexStack.Screen
        name="AccountManager"
        options={{headerShown: false}}
        component={AccountManager}
      />
      <IndexStack.Screen
        name="AddressManager"
        options={{headerShown: false}}
        component={AddressManager}
      />
      <IndexStack.Screen
        name="Login"
        options={{headerShown: false}}
        component={Login}
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
