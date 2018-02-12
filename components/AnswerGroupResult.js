import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { setAnswer } from '../ducks/app';

const decodeHtmlEntity = function(str) {
  return str.replace(/&#(\d+);/g, function(match, dec) {
    return String.fromCharCode(dec);
  });
};

const AnswerButton = ({ onChoose, selected, text }) => {
  if (selected) {
    return (
        <View style={{
        borderRadius: 10,
        paddingTop: 8,
        paddingBottom: 8,
        borderColor: '#6fea83',
        borderWidth: 1,
        alignItems: 'center',
        marginBottom: 5,
        backgroundColor: '#6fea83',
      }}>
        <Text style={{
          fontSize: 15,
          color: '#fff',
        }}>{ decodeURIComponent(text) }</Text>
      </View>
    );
  } else {
    return (
      <View style={{
        borderRadius: 10,
        paddingTop: 8,
        paddingBottom: 8,
        borderColor: '#ccc',
        borderWidth: 1,
        alignItems: 'center',
        marginBottom: 5,
        backgroundColor: '#ccc',
      }}>
        <Text style={{
          fontSize: 15,
          color: '#000',
        }}>{ decodeURIComponent(text) }</Text>
      </View>
    );
  }
}


const listButtons = ({ answers, selectedAnswer }) => {
  return answers.map((answer, index) => (
    <AnswerButton key={index} selected={parseInt(selectedAnswer, 10) === index} text={answer}/>
  ))
}

const AnswerGroup = ({ answers, solve }) => (
  <View>
    {
      listButtons({
        answers,
        selectedAnswer: solve,
      })
    }
  </View>
);


export default withRouter(connect(null, {})(AnswerGroup))
