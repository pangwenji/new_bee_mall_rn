/*
 * @Date: 2022-02-22
 * @LastEditors: Jeff
 * @Description:
 */
import React from 'react';
import {Provider} from 'react-redux';
import Navigator from '@/routes/index';
import store from '@/store/index';
import {StatusBar} from 'react-native';
import {ThemeProvider} from 'react-native-elements';

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <Navigator />
        <StatusBar
          backgroundColor="transparent"
          barStyle="dark-content"
          translucent
        />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
