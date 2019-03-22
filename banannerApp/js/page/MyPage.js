
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {unitWidth, unitHeight}from '../util/AdapterUtil';
import NavigationUtil from '../navigator/NavigationUtil';
import MyTop from '../common/MyTop';
import MyMiddle from '../common/MyMiddle';
import MyList from '../common/MyList';

import { connect } from "mobx-react";
import { observer, inject } from "mobx-react";

type Props = {};
// @inject(["store"]) // 注入对应的store
// @observer // 监听当前组件
export default class MyPage extends Component<Props> {
  static navigationOptions = {
    header: null,
    headerBackTitle: null,
  }
  constructor(props) {
    super(props);
    this.store = this.props.store;
    this.state = {
      status: 0
    }
  }
  render () {
    return (
      <View style={styles.container}>
        <MyTop status={this.state.status}/>
        <MyMiddle />
        <View style={styles.line}></View>
        <MyList title={'购买会员'} icon={require('../res/image/gm.png')}/>
        <TouchableOpacity onPress={() => {
            NavigationUtil.goToPage({navigation: this.props.navigation}, 'MMPage');
          }}>
          <MyList title={'消息通知'} icon={require('../res/image/xx.png')}/>
        </TouchableOpacity>
        <MyList title={'我的评论'} icon={require('../res/image/mpl.png')}/>
        <TouchableOpacity onPress={() => {
            NavigationUtil.goToPage({navigation: this.props.navigation}, 'LookedPage');
          }}>
          <MyList title={'浏览记录'} icon={require('../res/image/ll.png')}/>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: unitHeight*98,
    paddingLeft: unitWidth*20,
    paddingRight: unitWidth*20,
  },
  line: {
    height: unitWidth*10,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
