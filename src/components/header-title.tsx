/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import {Text, View} from 'react-native';
import styles from '@/assets/styles/index.styles';
const HeaderTitle: React.FC<any> = (props: any) => {
  let {title} = props;
  return (
    <View style={styles.goodHeader}>
      <Text style={{color: '#1baeae'}}>{title.tip}</Text>
    </View>
  );
};
export default HeaderTitle;
