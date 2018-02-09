import React from 'react';
import { Text, View } from 'react-native';

import AnswerGroup from './AnswerGroup';

const renderQuiz = (quiz) => {
  // Check quiz type
  if (quiz.type === 'choice') {
    return (
      <View>
        <Text style={{
          fontWeight: 'bold',
          fontSize: 18,
        }}>{decodeURIComponent(quiz.question)}</Text>

        <View style={{
          marginTop: 25,
        }}>
          <AnswerGroup answers={quiz.answers} />
        </View>
      </View>
    )
  }
}

export default ({ quiz }) => (
  <View style={{
    flex: 5,
    justifyContent: 'center',
  }}>
    <View style={{
      width: '90%',
      backgroundColor: '#ffffff',
      borderRadius: 10,
      padding: 20,
      alignSelf: 'center',
    }}>
      { renderQuiz(quiz) }
    </View>
  </View>
);
