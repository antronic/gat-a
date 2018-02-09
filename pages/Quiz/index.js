import React from 'react';
import {
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Top from './Top';
import Navigation from './Navigation';

import Card from '../../components/Card';

function listQuiz(quiz) {
  return <Card quiz={quiz}/>
}

const MainScreen = ({ quiz }) => (
  <View style={{
    flex: 10,
  }}>
    { listQuiz(quiz) }
  </View>
)

const QuizPage = ({ quizes, currentIndex }) => (
  <View>
    <Top quizSize={quizes.length}/>
    <MainScreen quiz={quizes[currentIndex]}/>
    <Navigation quizSize={quizes.length}/>
  </View>
);


const mapStateToProps = state => ({
  quizes: state.app.quizes,
  currentIndex: state.app.currentIndex,
})

export default withRouter(connect(mapStateToProps, {

})(QuizPage));
