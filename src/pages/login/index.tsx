/* eslint-disable react-native/no-inline-styles */
import VerificationCode from '@/components/verification-code';
import {viewportWidth, wp} from '@/utils/uitls';
import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {Input, Button} from 'react-native-elements';
import {TouchableOpacity} from 'react-native-gesture-handler';
const Login: React.FC = () => {
  return (
    <View>
      {/* top */}
      <View style={styles.headerContanier}>
        <View style={{flex: 1, backgroundColor: 'blue'}} />
        <View style={styles.login}>
          <Text style={{fontSize: wp(18)}}>登录</Text>
        </View>
        <View style={styles.headerRight}>
          <Text
            style={{
              fontSize: wp(35),
              width: wp(30),
              height: wp(46.93),
              textAlign: 'center',
              // paddingBottom: wp(20),
            }}>
            ...
          </Text>
        </View>
      </View>
      {/* 内容 */}
      <View style={styles.contanier}>
        <Image
          style={{height: 90, width: 120}}
          source={{
            uri: 'https://s.yezgea02.com/1604045825972/newbee-mall-vue3-app-logo.png',
          }}
        />
      </View>
      {/* 输入框部分 */}
      <View style={styles.inputStyle}>
        <Text style={{fontSize: wp(18)}}>用户</Text>
        <Input errorMessage="输入用户" autoCompleteType />
      </View>
      <View
        style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
        <Text style={{fontSize: wp(18)}}>密码</Text>
        <Input errorMessage="输入密码" autoCompleteType />
      </View>
      {/* 验证码 */}
      <View style={styles.verificatContanier}>
        <Text
          style={{
            flex: 0.6,
            height: wp(35),
            backgroundColor: 'red',
            textAlignVertical: 'center',
            fontSize: wp(18),
          }}>
          验证码
        </Text>
        <Input
          containerStyle={{flex: 2, width: wp(45), height: wp(35)}}
          errorMessage="输入验证码"
          autoCompleteType
        />
        <View style={{flex: 1, width: wp(60), height: wp(30)}}>
          <VerificationCode />
        </View>
      </View>
      <View style={{marginBottom: 5, marginTop: 20}}>
        <TouchableOpacity>
          <Text>立即注册</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Button title={'登录'} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  verificatContanier: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contanier: {
    width: viewportWidth,
    height: wp(300),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerContanier: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: viewportWidth,
    height: wp(46.93),
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  login: {
    flex: 2,
    height: wp(46.93),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerRight: {
    flex: 1,
    height: wp(46.93),
    display: 'flex',
    alignItems: 'flex-end',
  },
  inputStyle: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: viewportWidth,
  },
});
export default Login;
