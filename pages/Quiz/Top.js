import React from 'react';
import {
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { connect } from 'react-redux';
import { Bar } from 'react-native-progress';

const Top = ({ currentIndex, quizSize }) => (
  <View style={{
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  }}>
    <Bar style={{
      marginBottom: 10,
    }} progress={ currentIndex / (quizSize - 1)} width={200} color="#fff" />
    <Text style={{
      fontSize: 22,
      fontWeight: 'bold',
      color: '#fff',
    }}>{currentIndex + 1} / {quizSize}</Text>
  </View>
);

const mapStateToProps = state => ({
  currentIndex: state.app.currentIndex,
})

export default connect(mapStateToProps)(Top);
