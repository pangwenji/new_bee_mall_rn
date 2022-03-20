/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import {
  ParallaxImage,
  AdditionalParallaxProps,
} from 'react-native-snap-carousel';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Platform, StyleSheet} from 'react-native';
const IS_IOS = Platform.OS === 'ios';
const entryBorderRadius = 8;

interface SliderEntryProps {
  data: HOME.ICarousel;
  parallaxProps?: AdditionalParallaxProps;
}
const SliderEntry: React.FC<any> = (props: SliderEntryProps) => {
  let {data, parallaxProps} = props;
  return (
    <TouchableOpacity>
      <ParallaxImage
        source={{uri: data.imageUrl}}
        containerStyle={styles.imageContainer}
        style={styles.image}
        parallaxFactor={0.35}
        showSpinner={true}
        // spinnerColor="rgba(0, 0, 0, 0.25)"
        {...parallaxProps}
      />
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    marginBottom: IS_IOS ? 0 : -1, // Prevent a random Android rendering issue
    backgroundColor: 'white',
    height: 230,
    borderRadius: entryBorderRadius,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
    borderRadius: IS_IOS ? entryBorderRadius : 0,
    borderTopLeftRadius: entryBorderRadius,
    borderTopRightRadius: entryBorderRadius,
  },
});

export default SliderEntry;
