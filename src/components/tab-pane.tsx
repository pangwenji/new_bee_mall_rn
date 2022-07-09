/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import {isShoose} from '@/store/product-slice';
import {wp} from '@/utils/uitls';
import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {Button} from 'react-native-elements';
import {useDispatch} from 'react-redux';
import {useAppSelector} from '../store';

const TabPane: React.FC<any> = () => {
  useEffect(() => {
    dispatch(isShoose(1));
  }, []);
  const dispatch = useDispatch<any>();
  const {recommend, newProduct, price} = useAppSelector('product');
  const choose = (type: number) => {
    switch (type) {
      case 1:
        dispatch(isShoose(1));
        break;
      case 2:
        dispatch(isShoose(2));
        break;
      case 3:
        dispatch(isShoose(3));
        break;
    }
  };
  return (
    <View style={styles.contanier}>
      {/* 第一个按钮 */}
      <Button
        onPress={() => choose(1)}
        title={'推荐'}
        titleStyle={{
          color: recommend ? '#ffffff' : '#1baeae',
        }}
        buttonStyle={[
          {backgroundColor: recommend ? '#1baeae' : '#ffffff'},
          styles.btnContainerStyle,
        ]}
      />
      {/* 第二个按钮 */}
      <Button
        title={'新品'}
        titleStyle={{
          color: newProduct ? '#ffffff' : '#1baeae',
        }}
        onPress={() => choose(2)}
        buttonStyle={[
          {backgroundColor: newProduct ? '#1baeae' : '#ffffff'},
          styles.btnContainerStyle,
        ]}
      />
      {/* 第三个按钮 */}
      <Button
        title={'价格'}
        titleStyle={{
          color: price ? '#ffffff' : '#1baeae',
        }}
        onPress={() => choose(3)}
        buttonStyle={[
          {backgroundColor: price ? '#1baeae' : '#ffffff'},
          styles.btnContainerStyle,
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  contanier: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: wp(5),
  },
  btnContainerStyle: {
    height: wp(40),
    width: wp(110),
    borderColor: '#1baeae',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    marginRight: wp(2),
  },
});
export default TabPane;
