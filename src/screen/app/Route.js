import React, { Component } from 'react';
import { Scene, Router, Tabs } from 'react-native-router-flux';

//引入页面
import HomeScreen from './home/HomeScreen';
import BookScreen from './book/BookScreen';
import VideoScreen from './video/VideoScreen';
import ImageScreen from './image/ImageScreen';
import TabIcon from '../../component/TabIcon';

/**
 * 路由器
 */
export default class Route extends Component {

  render() {
    return (
      <Router>
        <Scene key="root">
          <Tabs tabBarPosition='bottom' lazy init initial hideNavBar tabBarStyle={{ backgroundColor: '#000' }}>
            <Scene key="home" component={HomeScreen} hideNavBar title={'首页'} icon={() => <TabIcon icon={G_IMAGE.home} />} />
            <Scene key="book" component={BookScreen} title={'书籍'} icon={() => <TabIcon icon={G_IMAGE.book} />} />
            <Scene key="video" component={VideoScreen} title={'视频'} icon={() => <TabIcon icon={G_IMAGE.video} />} />
            <Scene key="image" component={ImageScreen} title={'图片'} icon={() => <TabIcon icon={G_IMAGE.image} />} />
          </Tabs>
        </Scene>
      </Router>
    )
  }
}