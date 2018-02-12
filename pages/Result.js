import React from 'react';
import {
  ScrollView,
  Text,
  View,
} from 'react-native';

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Card from '../components/CardResult';

const listCard = (quizes) => {
  return quizes.map((quiz, index) => (
    <View key={index} style={{
      marginTop: 50,
    }}>
      <Card quiz={quiz}/>
    </View>
  ))
}

const ResultPage = ({ quizes, result }) => (
  <ScrollView style={{
    flex: 1,
    alignSelf: 'stretch',
    paddingTop: 10,
  }}>
    <View style={{
      alignItems: 'center'
    }}>
      <Text style={{
        fontSize: 28,
        color: '#fff',
      }}>Score</Text>
      <Text style={{
        fontSize: 42,
        fontWeight: 'bold',
        color: '#fff',
      }}>{ result.score }</Text>
    </View>

    {/* At first will has stats of each part */}

    { listCard(quizes) }

  </ScrollView>
);

const mapStateToProps = state => ({
  quizes: state.app.quizes,
  result: state.app.result,
})

export default withRouter(connect(mapStateToProps)(ResultPage));
