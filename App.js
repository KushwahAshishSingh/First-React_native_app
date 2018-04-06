/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,AppRegistry
} from 'react-native';
import Contact from "./app/screens/Contact";
import {StackNavigator} from 'react-navigation'
import Icons from "./app/components/Icons"
import Details from "./app/screens/Details";
import {Tabs, Drawer} from "./app/data/router";


export default class App extends Component {
  render() {
      const Apps =(String) => {
          if(Platform.OS === 'ios'){
              return <Tabs/>
          }
          return <Drawer/>
      }

    return Apps()
  }
}

