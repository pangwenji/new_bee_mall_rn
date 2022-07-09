/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import {Text, View} from 'react-native';
import Carousel, {
  SnapCarousel,
  AdditionalParallaxProps,
  Pagination,
} from 'react-native-snap-carousel';
import styles from '@/assets/styles/index.styles';
import SliderEntry from './slider-entry';
const _renderItemWithParallax = (
  {item}: {item: HOME.ICarousel},
  parallaxProps?: AdditionalParallaxProps,
) => {
  return <SliderEntry data={item} parallaxProps={parallaxProps} />;
};
const onSnapToItem = (index: number) => {
  console.log(index);
};
const SnapCarousels: React.FC<any> = (props: any) => {
  let carouselRef = React.createRef<SnapCarousel<any>>();
  let {carouselList} = props;
  console.log(carouselList, 'carouselList');
  return (
    <View>
      <Carousel
        ref={carouselRef}
        data={carouselList}
        renderItem={_renderItemWithParallax}
        sliderWidth={styles.sliderWidht}
        itemWidth={styles.itemWidth}
        hasParallaxImages={true}
        inactiveSlideScale={0.94}
        inactiveSlideOpacity={1}
        // containerCustomStyle={styles.slider}
        // contentContainerCustomStyle={styles.sliderContentContainer}
        loop={true}
        loopClonesPerSide={2}
        autoplayDelay={100}
        autoplayInterval={3000}
        onSnapToItem={onSnapToItem}
        removeClippedSubviews={false}
      />
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Pagination
          dotsLength={carouselList.length}
          activeDotIndex={0}
          containerStyle={styles.paginationContainer}
          dotColor={'rgba(255, 255, 255, 0.92)'}
          dotStyle={styles.paginationDot}
          // inactiveDotColor={'#1a1917'}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
        />
      </View>
    </View>
  );
};
export default SnapCarousels;
