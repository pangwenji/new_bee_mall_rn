/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {viewportWidth, wp} from '@/utils/uitls';
import * as React from 'react';
import {Text, View, FlatList, Image, StyleSheet} from 'react-native';
import {useAppSelector} from '../store';
const _renderSUPItem = (levelTwo: CATEGORY.thirdLevelCategoryVOSType | any) => {
  return (
    <View style={styles.Content}>
      <View>
        <Image
          source={require('@/assets/images/temp.png')}
          style={{width: 40, height: 40}}
        />
      </View>
      <Text>{levelTwo.item.categoryName}</Text>
    </View>
  );
};
const _renderItem = (
  displaylevel: CATEGORY.secondLevelCategoryVOSType | any,
) => {
  return (
    <View style={styles.contanier}>
      <Text style={styles.title}>{displaylevel.item.categoryName}</Text>
      <View>
        <FlatList
          data={displaylevel.item.thirdLevelCategoryVOS}
          numColumns={3}
          renderItem={_renderSUPItem}
          columnWrapperStyle={styles.columnWrapper}
        />
      </View>
    </View>
  );
};
const CategoryRightPanel: React.FC<any> = (props: any) => {
  let {categoryRight} = useAppSelector('category');
  return (
    <View>
      <FlatList data={categoryRight} renderItem={_renderItem} numColumns={1} />
    </View>
  );
};

const styles = StyleSheet.create({
  contanier: {
    flex: 1,
    display: 'flex',
  },
  title: {
    fontSize: wp(17),
    fontWeight: '500',
    paddingBottom: wp(20),
    paddingTop: wp(20),
  },
  Content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: wp(85),
    height: wp(60),
  },
  columnWrapper: {
    display: 'flex',
    flexDirection: 'row-reverse',
  },
});
export default CategoryRightPanel;
