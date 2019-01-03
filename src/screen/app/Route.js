import React, { Component } from 'react';
import { Scene, Router, Tabs } from 'react-native-router-flux';

import TabBar from '../../component/TabBar';

//引入页面
import HomeScreen from './home/HomeScreen';
import BookScreen from './book/BookScreen';
import VideoScreen from './video/VideoScreen';
import ImageScreen from './image/ImageScreen';

/**
 * 路由器
 */
export default class Route extends Component {

  render() {
    return (
      <Router>
        <Scene key="root" >
          <Tabs tabBarPosition='bottom' tabBarComponent={TabBar} lazy init initial hideNavBar>
            <Scene key="home" component={HomeScreen} hideNavBar title={'首页'} />
            <Scene key="book" component={BookScreen} title={'书籍'} />
            <Scene key="video" component={VideoScreen} title={'视频'} />
            <Scene key="image" component={ImageScreen} title={'图片'} />
          </Tabs>
        </Scene>
      </Router>
    )
  }
}