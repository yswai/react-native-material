'use strict';

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

import {
    Avatar,
    Button,
    Card,
    Checkbox,
    CheckboxGroup,
    Drawer,
    Divider,
    Icon,
    IconToggle,
    RadioButton,
    Ripple,
    RadioButtonGroup,
    Subheader,
    Toolbar
} from 'react-native-material-design';

class ReactNotes extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Toolbar title='My Toolbar' theme='dark'/>
        <Text style={styles.welcome}>
          YSW rocks
        </Text>
        <Avatar text="YSW" />
        <Divider theme='dark' inset={false} />
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
  }
});

AppRegistry.registerComponent('ReactNotes', () => ReactNotes);
