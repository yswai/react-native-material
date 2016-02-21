'use strict';

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

import {
  Toolbar,
  Button
} from 'react-native-material-design';

class ReactNotes extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Toolbar title='My Toolbar' theme='dark'/>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          YSW rocks
        </Text>
        <Button value="NORMAL FLAT" onPress={()=> console.log("I pressed a flat button")} />
        <Button value="NORMAL RAISED" raised={true} onPress={()=> console.log("I pressed a raised button")} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
});

AppRegistry.registerComponent('ReactNotes', () => ReactNotes);
