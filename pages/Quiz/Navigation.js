import React from 'react';
import {
  Alert,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { connect } from 'react-redux';

import {
  goBackQuiz,
  goNextQuiz,

  checkAnswers,
  setQuizIndex,

  setResult,
  resetAnswer,
} from '../../ducks/app';

const NavButton = ({ action, value }) => (
  <TouchableOpacity activeOpacity={0.8} style={{
    // flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 60,
    width: 60,
    height: 60,
    marginLeft: 20,
    marginRight: 20,
  }} onPress={action}>
    <Text style={{
      fontSize: 28,
      fontWeight: 'bold',
    }}>{value}</Text>
  </TouchableOpacity>
);

const SubmitButton = ({ history, quizes, selectedAnswer, setResult }) => (
  <TouchableOpacity activeOpacity={0.8} style={{
    width: '90%',
    height: 60,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  }} onPress={() => {
    const result = checkAnswers(quizes, selectedAnswer);
    Alert.alert('Your results', 'Your score is ' + result.score, [
      {text: 'OK', onPress: () => {
        history.replace('/result');
        // resetAnswer();

        setResult(result);
        setQuizIndex(0);
      }},
    ], { cancelable: false })
  }}>
    <Text style={{ color: '#4174c3', fontWeight: 'bold', fontSize: 22 }}>Submit</Text>
  </TouchableOpacity>
);

const Navigation = ({ history, goBackQuiz, goNextQuiz, currentIndex, quizes, selectedAnswer, setResult  }) => (
  <View style={{
    flex: 2,
    width: '100%',
    alignSelf: 'stretch',
    alignItems: 'center',
    flexDirection: 'row',
  }}>

    <View style={{
      flex: 1,
      alignItems: 'flex-start',
    }}>
      {
        currentIndex > 0 && ( <NavButton type="back" action={goBackQuiz} value="◄"/> )
      }
    </View>

    <View style={{
      flex: 1,
      alignItems: 'center',
    }}>
      {
        Object.keys(selectedAnswer).length === (Number(quizes.length)) && (<SubmitButton setResult={setResult} history={history} selectedAnswer={selectedAnswer} quizes={quizes}/>)
      }
    </View>

    <View style={{
      flex: 1,
      alignItems: 'flex-end',
    }}>
      {
        (currentIndex < quizes.length - 1) && (Object.hasOwnProperty.call(selectedAnswer, currentIndex)) && ( <NavButton type="next" action={goNextQuiz} value="►"/> )
      }
    </View>
  </View>
);

const mapStateToProps = state => ({
  currentIndex: state.app.currentIndex,
  selectedAnswer: state.app.selectedAnswer,
  quizes: state.app.quizes,
});

export default connect(mapStateToProps, { goNextQuiz, goBackQuiz, setResult })(Navigation);
