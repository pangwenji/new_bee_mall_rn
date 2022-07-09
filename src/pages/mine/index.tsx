/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable semi */
import {viewportWidth, wp} from '@/utils/uitls';
import React, {ReactElement} from 'react';
import {StyleSheet, TouchableOpacity, View, FlatList} from 'react-native';
import {Header, Avatar, Text, ListItem, Icon} from 'react-native-elements';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import TouchableScale from 'react-native-touchable-scale';
import LinearGradient from 'react-native-linear-gradient';
const data: Array<{title: string; idx: number}> = [
  {title: '我的订单', idx: 0},
  {title: '账号管理', idx: 1},
  {title: '地址管理', idx: 2},
  {title: '关于我们', idx: 3},
];

const goToPage = (route, {navigation}) => {
  switch (route.idx) {
    case 0:
      navigation.navigate('Order');
      break;
    case 1:
      navigation.navigate('AccountManager');
      break;
    case 2:
      navigation.navigate('AddressManager');
      break;
    case 3:
      navigation.navigate('AboutUS');
      break;
  }
};

const MineScreen: React.FC = (props: any) => {
  const renderItem = ({item}) => {
    return (
      <ListItem
        Component={TouchableScale}
        linearGradientProps={{
          colors: ['#FFFFFF', '#FFFFFF'],
          start: {x: 1, y: 0},
          end: {x: 0.2, y: 0},
        }}
        containerStyle={styles.listBox}
        ViewComponent={LinearGradient}
        hasTVPreferredFocus={undefined}
        tvParallaxProperties={undefined}>
        <TouchableOpacity
          onPress={() => {
            goToPage(item, props);
          }}>
          <ListItem.Content style={{display: 'flex', flexDirection: 'row'}}>
            <ListItem.Title>{item.title}</ListItem.Title>
            <Icon name="arrow-right" tvParallaxProperties={undefined} />
          </ListItem.Content>
        </TouchableOpacity>
      </ListItem>
    );
  };

  return (
    <SafeAreaProvider>
      <View
        style={{
          width: viewportWidth,
        }}>
        <Header
          style={styles.headerBox}
          leftComponent={{
            icon: 'arrow-back',
            color: '#fff',
          }}
          centerComponent={{text: '我的', style: styles.headerText}}
          rightComponent={{icon: 'menu', color: '#fff'}}
        />
        {/* 个人信息 */}
        <View style={styles.avatorContanier}>
          <View style={styles.avator}>
            <Avatar
              size={84}
              rounded
              source={{
                uri: 'https://cdn.pixabay.com/photo/2019/11/03/20/11/portrait-4599553__340.jpg',
              }}
            />
          </View>
          <View style={styles.avatorRight}>
            <Text>昵称：</Text>
            <Text>登录名：</Text>
            <Text>个性签名：</Text>
          </View>
        </View>
      </View>
      <View style={styles.listContanier}>
        <FlatList
          data={data}
          keyExtractor={item => item.idx.toString()}
          renderItem={renderItem}
        />
      </View>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  headerBox: {
    height: wp(30),
  },
  headerText: {
    fontSize: wp(20),
    color: '#fff',
    fontWeight: 'bold',
  },
  avatorContanier: {
    width: viewportWidth,
    height: wp(150),
    display: 'flex',
    flexDirection: 'row',
  },
  avatorRight: {
    flex: 4,
    justifyContent: 'center',
  },
  avator: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  listContanier: {
    width: viewportWidth,
    height: wp(260),
  },
  listBox: {
    borderRadius: wp(10),
    borderBottomWidth: wp(5),
    borderBottomColor: '#fff',
  },
});
export default MineScreen;
