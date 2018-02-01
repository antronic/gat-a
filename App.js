import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
  LinearGradient
} from 'expo';

import Main from './pages/index';
import Home from './pages/Home';

// react-native
import {
  NativeRouter,
  Route,
  Link,
} from 'react-router-native'

export default class App extends React.Component {
  render() {
    return (
      <NativeRouter>
        <View style={styles.container}>
          <LinearGradient style={{
            flex: 1,
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
          }} colors={['#416ec2', '#4db9d1']}>

            <Route exact path="/" component={Main}/>
            <Route path="/home" component={Home}/>
          </LinearGradient>
        </View>
      </NativeRouter>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
// #416ec2, #4db9d1)
