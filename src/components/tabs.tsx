import React, {PureComponent, ReactNode} from 'react';
import {FlatList, TouchableOpacity, Text} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

type OwnProp = {
  data: any;
};
class Tabs extends PureComponent<OwnProp> {
  _renderItem: ReactNode = (title: any) => {
    return (
      <TouchableOpacity>
        <Text></Text>
      </TouchableOpacity>
    );
  };
  render() {
    let {data} = this.props;
    return (
      <ScrollView>
        <FlatList
          data={data}
          horizontal={true}
          renderItem={this._renderItem()}
        />
        ;
      </ScrollView>
    );
  }
}
export default Tabs;
