/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable react-native/no-inline-styles */
import {viewportWidth, wp} from '@/utils/uitls';
import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {Input, Button, Icon} from 'react-native-elements';
import Icons from '@/assets/iconfont/index';
import TabPane from '@/components/tab-pane';
import ContainerList from './container-list';
import {TouchableOpacity} from 'react-native-gesture-handler';
const ProductList: React.FC = (props: any) => {
  const goBack = ({navigation}) => {
    navigation.goBack();
  };

  let data: Array<any> = [];
  return (
    <View>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <TouchableOpacity
            onPress={() => {
              goBack(props);
            }}>
            <Icon
              name="arrow-back"
              type=""
              color="#517fa4"
              tvParallaxProperties={undefined}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.headerMain}>
          <Input
            containerStyle={styles.inputContanier}
            errorMessage=""
            leftIcon={<Icons name="icon-wode" color={'red'} size={28} />}
            inputContainerStyle={{
              borderBottomColor: '#ffffff',
            }}
            autoCompleteType
          />
        </View>
        <View style={styles.headerRight}>
          <Button
            title={'搜索'}
            containerStyle={styles.buttonContainer}
            titleStyle={{
              fontSize: wp(12),
              textAlign: 'center',
              paddingBottom: wp(10),
            }}
            buttonStyle={{
              backgroundColor: '#1baeae',
              height: wp(38),
            }}
          />
        </View>
      </View>
      {/* 按钮组切换 */}
      <View>
        <TabPane />
      </View>
      {/* 列表内容 */}
      {data.length ? (
        <ContainerList />
      ) : (
        <View style={styles.empty}>
          <Image
            source={{uri: 'https://s.yezgea02.com/1604041313083/kesrtd.png'}}
            style={{width: wp(160), height: wp(160)}}
          />
          <Text style={{fontSize: wp(14), color: '#969799'}}>
            搜索你想要的商品
          </Text>
        </View>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    marginTop: wp(20),
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  headerLeft: {
    flex: 1,
  },
  headerMain: {
    height: wp(40),
    width: wp(250),
    borderRadius: wp(50),
    backgroundColor: '#ffffff',
    display: 'flex',
    marginRight: wp(10),
    alignItems: 'center',
  },
  empty: {
    width: viewportWidth,
    height: wp(400),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerRight: {
    flex: 1,
  },
  inputContanier: {},
  buttonContainer: {
    width: wp(49.65),
    height: wp(29.86),
  },
});
export default ProductList;
