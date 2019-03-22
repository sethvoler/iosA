import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
// import {Provider} from 'react-redux';
import { Provider } from "mobx-react";
import Appnavigator from './navigator/Appnavigator';
import store from './store';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return <Provider {...store}>
      <Appnavigator />
    </Provider>
  }
}
