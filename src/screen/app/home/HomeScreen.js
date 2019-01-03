import React, { Component } from 'react';
import { View, Text, BackHandler } from 'react-native';
import Orientation from "react-native-orientation";
import VideoPlayer from "../../../component/VideoPlayer";
import { inject, observer } from "mobx-react";
// import { Theme } from 'teaset';
import Carousel from 'react-native-looped-carousel';
@inject('videoStore')
@observer

export default class HomeScreen extends Component {
  constructor(props) {
    super(props)
    currentIndex = 0;
    this.state = {
      currentUrl: ['https://r6---sn-ab5l6n67.googlevideo.com/videoplayback?expire=1545652112&c=WEB&mn=sn-ab5l6n67%2Csn-ab5szn7k&dur=540.189&ipbits=0&mm=31%2C29&id=o-AKfiuAmEFoK1myym2ScxcvxIiLItP4m8Zpo7_ZhxrThE&mv=m&sparams=dur%2Cei%2Cid%2Cinitcwndbps%2Cip%2Cipbits%2Citag%2Clmt%2Cmime%2Cmm%2Cmn%2Cms%2Cmv%2Cpl%2Cratebypass%2Crequiressl%2Csource%2Cexpire&mt=1545630431&ms=au%2Crdu&signature=2C1B10072BC95F1A70AF42F14AE9C4F6AD712CB1.80940BFE5209957EA8664B0E5AC13556DBEC3EA7&ip=2600%3A3c03%3A%3Af03c%3A91ff%3Afe13%3A8670&lmt=1545265700829980&ratebypass=yes&itag=22&ei=MHMgXJ_7LdrYhwa6wKqgAw&fvip=6&pl=56&source=youtube&key=yt6&mime=video%2Fmp4&requiressl=yes&txp=5532432&initcwndbps=237500&title=%E6%8A%96%E9%9F%B3134%EF%BC%88%E5%88%AB%E4%BA%BA%E6%98%AF%E6%BC%86%E7%9B%96%E5%8A%A8%EF%BC%8C%E5%A5%B9%E7%9A%84%E6%98%AF%E5%B1%81%E8%82%A1%E5%8A%A8%EF%BC%8C%E5%8F%AF%E7%88%B1..%EF%BC%89','https://r6---sn-ab5l6n67.googlevideo.com/videoplayback?expire=1545652112&c=WEB&mn=sn-ab5l6n67%2Csn-ab5szn7k&dur=540.189&ipbits=0&mm=31%2C29&id=o-AKfiuAmEFoK1myym2ScxcvxIiLItP4m8Zpo7_ZhxrThE&mv=m&sparams=dur%2Cei%2Cid%2Cinitcwndbps%2Cip%2Cipbits%2Citag%2Clmt%2Cmime%2Cmm%2Cmn%2Cms%2Cmv%2Cpl%2Cratebypass%2Crequiressl%2Csource%2Cexpire&mt=1545630431&ms=au%2Crdu&signature=2C1B10072BC95F1A70AF42F14AE9C4F6AD712CB1.80940BFE5209957EA8664B0E5AC13556DBEC3EA7&ip=2600%3A3c03%3A%3Af03c%3A91ff%3Afe13%3A8670&lmt=1545265700829980&ratebypass=yes&itag=22&ei=MHMgXJ_7LdrYhwa6wKqgAw&fvip=6&pl=56&source=youtube&key=yt6&mime=video%2Fmp4&requiressl=yes&txp=5532432&initcwndbps=237500&title=%E6%8A%96%E9%9F%B3134%EF%BC%88%E5%88%AB%E4%BA%BA%E6%98%AF%E6%BC%86%E7%9B%96%E5%8A%A8%EF%BC%8C%E5%A5%B9%E7%9A%84%E6%98%AF%E5%B1%81%E8%82%A1%E5%8A%A8%EF%BC%8C%E5%8F%AF%E7%88%B1..%EF%BC%89','https://r6---sn-ab5l6n67.googlevideo.com/videoplayback?expire=1545652112&c=WEB&mn=sn-ab5l6n67%2Csn-ab5szn7k&dur=540.189&ipbits=0&mm=31%2C29&id=o-AKfiuAmEFoK1myym2ScxcvxIiLItP4m8Zpo7_ZhxrThE&mv=m&sparams=dur%2Cei%2Cid%2Cinitcwndbps%2Cip%2Cipbits%2Citag%2Clmt%2Cmime%2Cmm%2Cmn%2Cms%2Cmv%2Cpl%2Cratebypass%2Crequiressl%2Csource%2Cexpire&mt=1545630431&ms=au%2Crdu&signature=2C1B10072BC95F1A70AF42F14AE9C4F6AD712CB1.80940BFE5209957EA8664B0E5AC13556DBEC3EA7&ip=2600%3A3c03%3A%3Af03c%3A91ff%3Afe13%3A8670&lmt=1545265700829980&ratebypass=yes&itag=22&ei=MHMgXJ_7LdrYhwa6wKqgAw&fvip=6&pl=56&source=youtube&key=yt6&mime=video%2Fmp4&requiressl=yes&txp=5532432&initcwndbps=237500&title=%E6%8A%96%E9%9F%B3134%EF%BC%88%E5%88%AB%E4%BA%BA%E6%98%AF%E6%BC%86%E7%9B%96%E5%8A%A8%EF%BC%8C%E5%A5%B9%E7%9A%84%E6%98%AF%E5%B1%81%E8%82%A1%E5%8A%A8%EF%BC%8C%E5%8F%AF%E7%88%B1..%EF%BC%89'],
      isFullScreen: false,
      nowindex: 0
    }

    BackHandler.addEventListener('hardwareBackPress', this._backButtonPress);
    Orientation.addOrientationListener(this._orientationDidChange);

    this.renderpn = this.renderpn.bind(this);
  }

  //当前页面渲染完毕
  componentDidMount() {
    // this.videoPlayer.updateVideo(this.state.currentUrl, 0, null);
  }

  // 组件卸载
  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this._backButtonPress);
    Orientation.removeOrientationListener(this._orientationDidChange);
  }

  //全屏按钮事件
  _onOrientationChanged = (isFullScreen) => {
    if (isFullScreen) {
      Orientation.lockToPortrait();
    } else {
      Orientation.lockToLandscapeRight();
    }
  };

  //屏幕尺寸变化事件
  _onLayoutChange = (event) => {
    let { x, y, width, height } = event.nativeEvent.layout;
    let isLandscape = (width > height);
    if (isLandscape) {
      this.setState({
        isFullScreen: true,
        videoHeight: height
      });
      this.videoPlayer.updateLayout(width, height, true);
    } else {
      this.setState({
        isFullScreen: false,
        videoHeight: width * 9 / 16
      });
      this.videoPlayer.updateLayout(width, width * 9 / 16, false);
    }
    Orientation.unlockAllOrientations();
  };

  // 处理安卓物理返回键，横屏时点击返回键回到竖屏，再次点击回到上个界面
  _backButtonPress = () => {
    if (this.state.isFullScreen) {
      Orientation.lockToPortrait();
    }
    return true;
  };

  //横屏竖屏变化监听
  _orientationDidChange = (orientation) => {
    if (orientation === 'PORTRAIT') {
    } else {
    }
  };

  //左右滑动
  renderpn(index) {
    let count = (index - currentIndex);
    if (count === 1 || count === -2) {
      // alert('下一页');
    }
    else {
      // alert('上一页')
    }
    currentIndex = index;
    this.props.videoStore.shortVideoIndex = index;
  }

  render() {
    const { shortVideoIndex } = this.props.videoStore;
    return (
      <View style={{ flex: 1 }} onLayout={this._onLayoutChange}>
        <Carousel delay={2000} style={{ flex: 1 }} onAnimateNextPage={this.renderpn} autoplay={false}>
          {
            this.state.currentUrl.map((item, index) => <View style={{ width: G_WIDTH, height: G_HEIGHT, justifyContent: 'center', backgroundColor: '#000', }} key={index}>
              {
                shortVideoIndex == index ?
                  <VideoPlayer
                    ref={(ref) => this.videoPlayer = ref}
                    videoURL={this.state.currentUrl[index]}
                    videoTitle={'视频标题' + index}
                    videoHeight={G_HEIGHT}
                    controlBottom={49}
                    onChangeOrientation={this._onOrientationChanged}
                    enableSwitchScreen={false}
                  /> : <Text style={{color: '#ffffff'}}>{'我是视频缩略图' + index}</Text>
              }
            </View>)
          }
        </Carousel>


      </View>

    )
  }
}