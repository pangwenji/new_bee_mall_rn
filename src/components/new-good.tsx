/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import {Text, View, FlatList, StyleSheet} from 'react-native';
// import styles from '@/assets/styles/index.styles';
const _renderItem = (props: any) => {
  return (
    <View style={styles.contanier}>
      <View />
      <View />
    </View>
  );
};
const NewGood: React.FC<any> = (props: any) => {
  let {title} = props;
  console.log(title, 'tit');
  return (
    <FlatList
      data={refashData}
      style={{flex: 1}}
      keyExtractor={item => item.categoryId}
      numColumns={2}
      showsHorizontalScrollIndicator={false}
      renderItem={_renderItem}
    />
  );
};
const styles = StyleSheet.create({
  contanier: {
    display: 'flex',
    flexDirection: 'column',
    boXSizing: 'border-box',
    width: 50,
    borderBottomColor: '#e9e9e9',
    borderBottomWidth: 1,
    padding: 10,
  },
});
export default NewGood;
