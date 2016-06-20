/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView
} from 'react-native';

import RefreshableListView from './RefreshableListView';

class RefreshableListView2 extends Component {

  constructor (props) {
    super(props);

    this.dataSource = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.state = {
      dataSource: this.dataSource.cloneWithRows(['row1', 'row2']),
      refreshing: false,
    }
  }

  refreshData () {
    this.setState({
      refreshing: true,
    });

    setTimeout(() => {
      this.setState({
        dataSource: this.dataSource.cloneWithRows(['row1', 'row2', 'row3', 'row4']),
        refreshing: false,
      });
    }, 1000 * 5)
  }

  render() {
    return (
      <RefreshableListView
        dataSource = {this.state.dataSource}
        renderRow = {(rowData) => <Text>{rowData}</Text>}
        refreshing = {this.state.refreshing}
        onRefresh = {this.refreshData.bind(this)}
        onScrollChange = {() => {console.log('scrolling')}}
      ></RefreshableListView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('RefreshableListView2', () => RefreshableListView2);
