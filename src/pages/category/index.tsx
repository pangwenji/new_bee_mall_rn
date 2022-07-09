/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  StatusBar,
  View,
  Text,
} from 'react-native';
import * as React from 'react';
import {Input, Icon} from 'react-native-elements';
import Icons from '@/assets/iconfont/index';
import {viewportWidth, wp} from '@/utils/uitls';
import {FlatList} from 'react-native-gesture-handler';
import {useDispatch} from 'react-redux';
import {useEffect} from 'react';
import {fetchCategoryListData, jumpingToPart} from '@/store/category-slice';
import {useAppSelector} from '@/store/index';
import {TouchableOpacity} from 'react-native';
import CategoryRightPanel from '@/components/category-right-panel';
interface categoryListProp {
  index: number;
  item: CATEGORY.categoryListType;
}

const toProductPage = ({navigation}) => {
  navigation.navigate('ProductList');
};

const Category: React.FC<any> = (props: any) => {
  const dispatch = useDispatch<any>();

  const goBack = ({navigation}) => {
    navigation.goBack();
  };

  //获取数据
  const _renderLeftItem: React.FC<any> = (res: categoryListProp) => {
    const toTarget = (item: categoryListProp) => {
      dispatch(jumpingToPart(item.item));
    };
    return (
      <View style={{width: 112, height: 59.73}}>
        <TouchableOpacity
          onPress={() => {
            toTarget(res);
          }}>
          <Text style={{color: '#2c3e50', fontSize: wp(14)}}>
            {res.item.categoryName}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  useEffect(() => {
    dispatch(fetchCategoryListData());
  }, []);
  const {categoryList} = useAppSelector('category');

  return (
    <SafeAreaView style={styles.contanier}>
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
        <View style={styles.headerRight}>
          <TouchableOpacity
            onPress={() => {
              toProductPage(props);
            }}>
            <Input
              errorMessage=""
              disabled={true}
              leftIcon={<Icons name="icon-wode" color={'red'} size={28} />}
              inputContainerStyle={{
                borderBottomColor: '#ffffff',
                height: wp(26),
                padding: 0,
              }}
              autoCompleteType
            />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.left}>
          <FlatList
            data={categoryList}
            renderItem={_renderLeftItem}
            numColumns={1}
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <View>
          <CategoryRightPanel />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  contanier: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: viewportWidth,
    height: wp(40.1),
  },
  headerLeft: {
    width: wp(80),
  },
  headerRight: {
    width: wp(280),
    borderRadius: 50,
    backgroundColor: '#ccc',
    height: wp(30),
  },
  contentContainer: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    marginTop: wp(10),
  },
  left: {
    width: wp(112),
  },
});
export default Category;
