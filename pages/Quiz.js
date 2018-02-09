import React from 'react';
import {
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';


const QuizPage = () => (
  <View>
    <Text>Quiz</Text>
  </View>
)

export default withRouter(connect()(QuizPage));
