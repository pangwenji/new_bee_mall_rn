import {Dimensions} from 'react-native';
const {width: viewportWidth, height: viewportHeight} = Dimensions.get('window');
export {viewportWidth, viewportHeight};
//屏幕适配
//设计稿的
const uiPeiWidth = 375;
export const wp = (precent: number) => {
  return (precent * viewportWidth) / uiPeiWidth;
};
