/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  FlatList,
  StyleSheet,
  View,
  Text,
} from 'react-native';
const _renderItem = () => {
  return (
    <View>
      <Text>xxx</Text>
    </View>
  );
};
const ContainerList: React.FC<any> = () => {
  return (
    <SafeAreaView style={styles.contanier}>
      <ScrollView style={styles.scrollView}>
        <FlatList data={[]} renderItem={_renderItem} />
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  contanier: {
    flex: 1,
  },
  scrollView: {},
});
export default ContainerList;
