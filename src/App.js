/**
 * 抖奶APP
 * https://github.com/jamesoppp/dounai
 * James
 * APP入口, 同Framwork
 */

import React, { Component } from 'react';
import { YellowBox } from 'react-native';
import { Provider } from 'mobx-react';
import RootStore from './store/index';
import Route from './screen/app/Route';
import './utils/Global';

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

/**
 * 全局操作此界面
 */
export default class App extends Component {
  render() {
    return (
      <Provider {...RootStore}>
        <Route />
      </Provider>
    );
  }
}
