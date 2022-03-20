/* eslint-disable @typescript-eslint/no-unused-vars */
import {viewportWidth} from '@/utils/uitls';
import * as React from 'react';
import {View, FlatList, StyleSheet, Text, Image} from 'react-native';
const _renderItem = ({item}: any) => {
  console.log(item, 'item');
  return (
    <View style={styles.contanier}>
      {/* 图片 */}
      <View style={styles.imageBox}>
        <Image
          source={{uri: item.imgUrl}}
          style={{width: 38.4, height: 38.4}}
          resizeMode="cover"
          resizeMethod="auto"
        />
      </View>
      {/* 标题 */}
      <View>
        <Text>{item.name}</Text>
      </View>
    </View>
  );
};
const Advertisement: React.FC<any> = (props: any) => {
  console.log(props, '数据1');
  let {refashData} = props;
  return (
    <FlatList
      data={refashData}
      style={styles.scrollview}
      keyExtractor={item => item.categoryId}
      numColumns={5}
      showsHorizontalScrollIndicator={false}
      renderItem={_renderItem}
    />
  );
};

const styles = StyleSheet.create({
  contanier: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: 80,
    height: 76,
  },
  scrollview: {
    flex: 1,
    width: viewportWidth,
    height: 167.44,
  },
  imageBox: {
    width: 40,
    height: 40,
  },
});
export default Advertisement;
