import React, { Component } from 'react';
import { Router, Stack, Scene } from 'react-native-router-flux'
import Login from './src/screen/Login'
import Pets from './src/screen/Pets'
import {
  StyleSheet,
} from 'react-native';

export default class App extends Component {
  render(){
    return(
      <Router style={{backgroundColor: '#000'}}>
        <Stack key="root">
          <Scene navigationBarStyle={styles.naviBar} key="login" initial={true} component={Login} />
          <Scene key="pets" component={Pets} title="Pets List" />
        </Stack>
      </Router>
    )
  }
}

const styles = StyleSheet.create({
  naviBar: {
    backgroundColor: '#5c6bc0'
  }
})