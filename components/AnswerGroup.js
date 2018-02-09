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

const AnswerButton = ({ index, onChoose, quizIndex, selected, text }) => {
  if (selected) {
    return (
        <View style={{
        borderRadius: 10,
        paddingTop: 8,
        paddingBottom: 8,
        borderColor: '#4aa7cd',
        borderWidth: 1,
        alignItems: 'center',
        marginBottom: 5,
        backgroundColor: '#4aa7cd',
      }}>
        <Text style={{
          fontSize: 15,
          color: '#fff',
        }}>{ decodeURIComponent(text) }</Text>
      </View>
    );
  } else {
    return (
      <TouchableOpacity activeOpacity={0.8} onPress={() => {
        onChoose({[quizIndex]: Number(index)})
      }}>
        <View style={{
          borderRadius: 10,
          paddingTop: 8,
          paddingBottom: 8,
          borderColor: '#4aa7cd',
          borderWidth: 1,
          alignItems: 'center',
          marginBottom: 5,
        }}>
          <Text style={{
            fontSize: 15,
            color: '#000',
          }}>{ decodeURIComponent(text) }</Text>
        </View>
      </TouchableOpacity>
    );
  }
}


const listButtons = ({ answers, currentIndex, selectedAnswer, setAnswer }) => {
  return answers.map((answer, index) => (
    <AnswerButton quizIndex={currentIndex} onChoose={setAnswer} key={index} index={index} selected={selectedAnswer === index} text={answer}/>
  ))
}

const AnswerGroup = ({ currentIndex, selectedAnswer, setAnswer, answers }) => (
  <View>
    {
      listButtons({
        answers,
        currentIndex,
        selectedAnswer: selectedAnswer[currentIndex],
        setAnswer,
      })
    }
  </View>
);

const mapStateToProps = state => ({
  selectedAnswer: state.app.selectedAnswer,
  currentIndex: state.app.currentIndex,
})

export default withRouter(connect(mapStateToProps, {
  setAnswer,
})(AnswerGroup))
