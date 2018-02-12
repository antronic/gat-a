import React from 'react';
import { Text, View } from 'react-native';

import AnswerGroupResult from './AnswerGroupResult';

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
          <AnswerGroupResult answers={quiz.answers}  solve={quiz.solve}/>
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
