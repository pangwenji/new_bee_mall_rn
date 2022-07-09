/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {PureComponent} from 'react';
import {Text, View} from 'react-native';

interface ownProp {}
interface IState {}
class Order extends PureComponent<ownProp, IState> {
  render() {
    console.log('xxxxxxx');
    return (
      <View>
        <Text style={{width: 230, height: 50, backgroundColor: 'red'}}>
          订单页dhfhf
        </Text>
      </View>
    );
  }
}

export default Order;
