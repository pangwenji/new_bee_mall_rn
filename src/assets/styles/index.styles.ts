import {viewportWidth, viewportHeight, wp} from '@/utils/uitls';
import {StyleSheet} from 'react-native';

export default StyleSheet.create<any>({
  scrollview: {
    flex: 1,
  },
  sliderWidht: viewportWidth,
  itemWidth: viewportWidth,
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
  contanier: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: wp(200),
    height: wp(247.08),
    backgroundColor: '#ffffff',
    borderRightColor: '#e9e9e9',
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#e9e9e9',
    padding: wp(10),
  },
  img: {
    width: wp(120),
    height: wp(160),
  },
  title: {
    textAlign: 'center',
    fontSize: wp(14),
    fontWeight: '300',
  },
  price: {
    color: '#1baeae',
  },
});
