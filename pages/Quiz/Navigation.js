import React from 'react';
import {
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { connect } from 'react-redux';

import {
  goBackQuiz,
  goNextQuiz,
} from '../../ducks/app';

const NavButton = ({ action, value }) => (
  <TouchableOpacity activeOpacity={0.8} style={{
    // flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 70,
    width: 70,
    height: 70,
    marginLeft: 20,
    marginRight: 20,
  }} onPress={action}>
    <Text style={{
      fontSize: 28,
      fontWeight: 'bold',
    }}>{value}</Text>
  </TouchableOpacity>
);

const SubmitButton = () => (
  <TouchableOpacity activeOpacity={0.8} style={{
    width: '90%',
    height: 60,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  }}>
    <Text style={{ color: '#4174c3', fontWeight: 'bold', fontSize: 22 }}>Submit</Text>
  </TouchableOpacity>
);

const Navigation = ({ goBackQuiz, goNextQuiz, currentIndex, quizSize  }) => (
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
        currentIndex > 0 && ( <NavButton type="back" action={goBackQuiz} value="<"/> )
      }
    </View>

    <View style={{
      flex: 1,
      alignItems: 'center',
    }}>
      <SubmitButton/>
    </View>

    <View style={{
      flex: 1,
      alignItems: 'flex-end',
    }}>
      {
        currentIndex < quizSize - 1 && ( <NavButton type="next" action={goNextQuiz} value=">"/> )
      }
    </View>
  </View>
);

const mapStateToProps = state => ({
  currentIndex: state.app.currentIndex,
});

export default connect(mapStateToProps, { goNextQuiz, goBackQuiz })(Navigation);
