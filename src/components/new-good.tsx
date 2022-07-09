/* eslint-disable react-native/no-inline-styles */

import React, {useEffect} from 'react';
import {Text, View, FlatList} from 'react-native';
import {Image} from 'react-native';
import styles from '@/assets/styles/index.styles';
const _renderItem = (props: any) => {
  let {item} = props;
  return (
    <View style={styles.contanier}>
      <View>
        <Image source={{uri: item.goodsCoverImg}} style={styles.img} />
      </View>
      <View>
        <Text style={styles.title}>{item.goodsName}</Text>
      </View>
      <View>
        <Text style={styles.price}>￥{item.sellingPrice}</Text>
      </View>
    </View>
  );
};
const NewGood: React.FC<JSX.Element> = (props: any) => {
  let {good} = props;
  return (
    <FlatList
      data={good}
      style={{flex: 1}}
      keyExtractor={item => item.tag}
      numColumns={2}
      showsHorizontalScrollIndicator={false}
      renderItem={_renderItem}
    />
  );
};

export default NewGood;
