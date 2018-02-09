import React from 'react';
import {
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const NavButton = ({ value }) => (
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
    // marginBottom: 40,
  }}>
    <Text style={{
      fontSize: 42,
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

const Navigation = () => (
  <View style={{
    flex: 2,
    width: '100%',
    alignSelf: 'stretch',
    alignItems: 'center',
    flexDirection: 'row',
  }}>
    <NavButton type="back" value="<"/>
    <View style={{
      flex: 1,
      alignItems: 'center',
    }}>
      <SubmitButton/>
    </View>
    <NavButton type="next" value=">"/>
  </View>
);

export default Navigation;
