/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-unused-vars */
import Advertisement from '@/components/advertisement';
import SnapCarousels from '@/components/carousel';
import Header from '@/components/header';
import {getServerToken} from '@/store/login-slice';
import React from 'react';
import {Text, View, Button, ScrollView, StyleSheet} from 'react-native';
import styles from '@/assets/styles/index.styles';
import {useDispatch} from 'react-redux';
import HeaderTitle from '@/components/header-title';
import NewGood from '@/components/new-good';
interface refashDataProps {
  name: string;
  imgUrl: string;
  categoryId: number;
}
const HomeScreen = (_props: any) => {
  const dispatch = useDispatch<any>();
  const getTokenData = () => {
    let tokenPlayloan = {id: 1};
    dispatch(getServerToken(tokenPlayloan));
  };
  let carouselList: Array<any> = [
    {
      id: '1',
      imageUrl:
        'https://newbee-mall.oss-cn-beijing.aliyuncs.com/images/banner-p50-pocket.png',
    },
    {
      id: '2',
      imageUrl:
        'https://newbee-mall.oss-cn-beijing.aliyuncs.com/images/banner-iphone13.png',
    },
    {
      id: '3',
      imageUrl:
        'https://newbee-mall.oss-cn-beijing.aliyuncs.com/images/banner-mate40.png',
    },
  ];
  let refashData: Array<refashDataProps> = [
    {
      name: '新蜂超市',
      imgUrl:
        'https://s.yezgea02.com/1604041127880/%E8%B6%85%E5%B8%82%402x.png',
      categoryId: 100001,
    },
    {
      name: '新蜂服饰',
      imgUrl:
        'https://s.yezgea02.com/1604041127880/%E6%9C%8D%E9%A5%B0%402x.png',
      categoryId: 100003,
    },
    {
      name: '全球购',
      imgUrl:
        'https://s.yezgea02.com/1604041127880/%E5%85%A8%E7%90%83%E8%B4%AD%402x.png',
      categoryId: 100002,
    },
    {
      name: '新蜂生鲜',
      imgUrl:
        'https://s.yezgea02.com/1604041127880/%E7%94%9F%E9%B2%9C%402x.png',
      categoryId: 100004,
    },
    {
      name: '新蜂到家',
      imgUrl:
        'https://s.yezgea02.com/1604041127880/%E5%88%B0%E5%AE%B6%402x.png',
      categoryId: 100005,
    },
    {
      name: '充值缴费',
      imgUrl:
        'https://s.yezgea02.com/1604041127880/%E5%85%85%E5%80%BC%402x.png',
      categoryId: 100006,
    },
    {
      name: '9.9元拼',
      imgUrl: 'https://s.yezgea02.com/1604041127880/9.9%402x.png',
      categoryId: 100007,
    },
    {
      name: '领劵',
      imgUrl:
        'https://s.yezgea02.com/1604041127880/%E9%A2%86%E5%88%B8%402x.png',
      categoryId: 100008,
    },
    {
      name: '省钱',
      imgUrl:
        'https://s.yezgea02.com/1604041127880/%E7%9C%81%E9%92%B1%402x.png',
      categoryId: 100009,
    },
    {
      name: '全部',
      imgUrl:
        'https://s.yezgea02.com/1604041127880/%E5%85%A8%E9%83%A8%402x.png',
      categoryId: 100010,
    },
  ];
  return (
    <View>
      {/* 顶部 */}
      <View>
        <Header />
      </View>
      <ScrollView>
        {/* 轮播图 */}
        <SnapCarousels carouselList={carouselList} />
        {/* 种类 */}
        <Advertisement refashData={refashData} />
        {/* 商品 */}
        <HeaderTitle title={{tip: '新品上线'}} />
        <NewGood />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
