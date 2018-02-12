import React from 'react';
import {Constants} from "expo";
import { Platform, StyleSheet, Text, View } from 'react-native';
import {
  LinearGradient
} from 'expo';

import {Provider} from 'react-redux';
import store from './ducks';

import Main from './pages/index';
import Home from './pages/Home';
import Quiz from './pages/Quiz';
import Result from './pages/Result';

// react-native
import {
  NativeRouter,
  Route,
  Link,
} from 'react-router-native'

const App = class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <NativeRouter>
          <View style={styles.container}>
            <LinearGradient style={{
              flex: 1,
              width: '100%',
              alignItems: 'center',
              justifyContent: 'center',
              paddingTop: (Platform.OS === 'ios') ? 0 : Expo.Constants.statusBarHeight,
            }} colors={['#416ec2', '#4db9d1']}>

              <Route exact path="/" component={Main}/>
              <Route path="/home" component={Home}/>
              <Route path="/quiz" component={Quiz}/>
              <Route path="/result" component={Result}/>
            </LinearGradient>
          </View>
        </NativeRouter>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
// #416ec2, #4db9d1)

export default App;
