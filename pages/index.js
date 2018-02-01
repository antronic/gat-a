import React from 'react';
import {
  View,
  Text,
  Button,
  Image,
} from 'react-native';

import {
  Link
} from 'react-router-native';


export default () => (
  <View>
    <Image style={{width: 300, height: 200}} source={ require('../assets/logo.png') }></Image>
    <Link to="/home" style={{
      marginTop: 10,
    }}>
      <View style={{
        width: 300,
        height: 50,
        backgroundColor: '#fff',
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <Text style={{
          color: '#4aa7cd',
          fontSize: 20,
          fontWeight: 'bold',
        }}>Start</Text>
      </View>
    </Link>
  </View>
)
