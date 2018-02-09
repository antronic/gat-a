import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Button,
  Image,
} from 'react-native';
import {
  Link,
} from 'react-router-native';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  setQuizes,
  randomQuizes,
} from '../ducks/app';


const Index = ({ history, setQuizes, quizes }) => (
  <View>
    <Image style={{width: 300, height: 200}} source={ require('../assets/logo.png') }></Image>
    <TouchableOpacity activeOpacity={0.8} style={{
      marginTop: 10,
    }} onPress={() => {
      setQuizes(randomQuizes())
      history.push('/quiz');
    }}>
      <View style={{
        width: 300,
        height: 50,
        backgroundColor: '#fff',
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <Text style={{
          color: '#4aa7cd',
          fontSize: 20,
          fontWeight: 'bold',
        }}>Start</Text>
      </View>
    </TouchableOpacity>
  </View>
)

const mapStateToProps = state => ({
  quizes: state.app.quizes,
})

export default withRouter(connect(mapStateToProps, {
  setQuizes,
})(Index));
