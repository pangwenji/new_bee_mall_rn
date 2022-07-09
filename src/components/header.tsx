/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {viewportWidth, wp} from '@/utils/uitls';
import * as React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Button} from 'react-native-elements';
const toLoginPage = (navigation: any) => {
  navigation.navigate('login');
};
const toProductPage = (navigation: any) => {
  navigation.navigate('ProductList');
};
const Header: React.FC = (props: any) => {
  return (
    <View style={styles.contanier}>
      <View>
        <Text>三</Text>
      </View>
      <TouchableOpacity
        onPress={() => {
          toProductPage(props);
        }}>
        <View style={styles.contentText}>
          <Text style={styles.contentLeft}>新峰商城</Text>
          <View
            style={{
              borderRightWidth: 1,
              borderRightColor: '#ccc',
              height: wp(20),
              width: wp(1),
              marginRight: wp(15),
            }}
          />
          <Text style={styles.contentRight}>山河无恙，人间皆安</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.login}>
        <TouchableOpacity onPress={() => toLoginPage(props)}>
          <Text style={styles.loginText}>登录</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contanier: {
    width: viewportWidth,
    height: wp(51.1),
    display: 'flex',
    backgroundColor: '#1baeae',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  contentText: {
    width: wp(273.3),
    height: wp(30.65),
    backgroundColor: '#ffffffb3',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 50,
  },
  contentRight: {
    fontSize: wp(12),
    color: '#666666',
  },
  contentLeft: {
    fontSize: wp(20),
    color: '#1baeae',
    fontWeight: '300',
    paddingBottom: 0,
    paddingTop: 0,
    paddingLeft: wp(10),
    paddingRight: wp(10),
  },
  login: {
    width: wp(60),
    height: wp(51.1),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginText: {
    color: '#fff',
    fontSize: wp(18),
  },
});
export default Header;
