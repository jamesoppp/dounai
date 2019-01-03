import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { Actions } from 'react-native-router-flux';

export default class TabBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tabs: [{ title: '首页', key: 'home', event: () => this.jumpScene('home') },
      { title: '视频', key: 'video', event: () => this.jumpScene('video') },
      { title: '原创', key: 'add', event: () => alert('暂未开放') },
      { title: '图片', key: 'image', event: () => this.jumpScene('image') },
      { title: '书籍', key: 'book', event: () => this.jumpScene('book') }],

      currentIndex: 'home'
    }
  }

  //跳转页面
  jumpScene(key) {
    Actions.jump(key)
    this.setState({
      currentIndex: key
    })
  }

  render() {
    const { currentIndex } = this.state;
    const s = G_STYLES;
    return (
      <View style={[s.tabBarView, s.viewAround, s.viewRow, s.viewAlignCenter, s.bacBlack]}>
        {
          _.map((this.state.tabs), (item) =>
            item.key === 'add' ?
              <TouchableOpacity onPress={item.event} key={item.key}>
                <Image source={G_IMAGE.plus} />
              </TouchableOpacity>
              :
              <TouchableOpacity key={item.key} onPress={item.event} style={[s.viewJustCenter, s.viewAlignCenter, { height: 47 }]}>
                <Text style={currentIndex === item.key ? s.colorWhite : s.clolr229}>{item.title}</Text>
                {currentIndex === item.key && <View style={s.tabSelecttype} />}
              </TouchableOpacity>
          )
        }
      </View>
    )
  }
}