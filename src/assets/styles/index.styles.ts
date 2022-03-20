import {viewportWidth, viewportHeight} from '@/utils/uitls';
import {StyleSheet} from 'react-native';

export default StyleSheet.create<any>({
  scrollview: {
    flex: 1,
  },
  sliderWidht: viewportWidth,
  itemWidth: 20 * 2 + viewportWidth,
  explamContanier: {
    height: viewportHeight * 0.25,
  },
  paginationContainer: {
    alignContent: 'center',
    position: 'absolute',
    height: 16,
    paddingVertical: 0,
    borderRadius: 8,
    top: -30,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
  goodHeader: {
    backgroundColor: '#f9f9f9',
    height: 50,
    lineHeight: 50,
    fontSize: 16,
    fontWeight: 500,
    color: '#1baeae',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
