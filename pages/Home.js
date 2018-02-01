import React from 'react';
import { Text, View } from 'react-native';

import { AndroidBackButton } from 'react-router-native';

export default () => (
  <View>
    <AndroidBackButton/>
    <Text>Home</Text>
  </View>
);

//
// export default class Home extends React.Component {
//   render() {
//     return (
//       <Text>Test</Text>
//     )
//   }
// }
