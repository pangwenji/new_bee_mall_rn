/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {Image, Platform} from 'react-native';
import * as React from 'react';
import HomeScreen from '../home';
import Icon from '@/assets/iconfont/index';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TempScreen from '../temp';
import Category from '@/pages/category';
import MineScreen from '@/pages/mine';
type BottomStackTabParams = {
  HomeScreen: undefined;
  Classification: undefined;
  ShoppingCart: undefined;
  Mine: undefined;
};
const BottomStackTab = createBottomTabNavigator<BottomStackTabParams>();

const Home: React.FC = () => {
  // return <IconShouye key="1" {...rest} />;
  // case 'icon-gouwuche':
  //   return <IconGouwuche key="2" {...rest} />;
  // case 'icon-wode':
  //   return <IconWode key="3" {...rest} />;
  // case 'icon-grouping':
  //   return <IconGrouping key="4" {...rest} />;

  return (
    <BottomStackTab.Navigator>
      <BottomStackTab.Screen
        name="HomeScreen"
        options={{
          headerShown: false,
          tabBarLabel: '首页',
          tabBarIcon: ({color, size}) => (
            <Icon name="icon-shouye" color={color} size={size} />
          ),
        }}
        component={HomeScreen}
      />
      <BottomStackTab.Screen
        name="Classification"
        options={{
          headerShown: false,
          tabBarLabel: '分类',
          tabBarIcon: ({color, size}) => (
            <Icon name="icon-grouping" color={color} size={size} />
          ),
        }}
        component={Category}
      />
      <BottomStackTab.Screen
        name="ShoppingCart"
        options={{
          headerShown: false,
          tabBarLabel: '购物车',
          tabBarIcon: ({color, size}) => (
            <Icon name="icon-gouwuche" color={color} size={size} />
          ),
        }}
        component={TempScreen}
      />
      <BottomStackTab.Screen
        name="Mine"
        options={{
          headerShown: false,
          tabBarLabel: '我的',
          tabBarIcon: ({color, size}) => (
            <Icon name="icon-wode" color={color} size={size} />
          ),
        }}
        component={MineScreen}
      />
    </BottomStackTab.Navigator>
  );
};

export default Home;
