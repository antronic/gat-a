import React from 'react';
import {
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { withRouter } from 'react-router-dom';
import { AndroidBackButton } from 'react-router-native';
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

const QuizPage = ({ history, quizes, currentIndex }) => (
  <View>
    <AndroidBackButton/>
    <Top quizSize={quizes.length}/>
    <MainScreen quiz={quizes[currentIndex]}/>
    <Navigation history={history}/>
  </View>
);


const mapStateToProps = state => ({
  quizes: state.app.quizes,
  currentIndex: state.app.currentIndex,
})

export default withRouter(connect(mapStateToProps, {})(QuizPage));
