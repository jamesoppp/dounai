import React, { Component } from 'react';
import { View, Text, FlatList, BackHandler } from 'react-native';
import Orientation from "react-native-orientation";
import VideoPlayer from "../../../component/VideoPlayer";
import { inject, observer } from "mobx-react";
import Carousel from 'react-native-looped-carousel';
@inject('videoStore')
@observer

export default class HomeScreen extends Component {
  constructor(props) {
    super(props)
    currentIndex = 0;
    this.state = {
      currentUrl: ['https://r8---sn-bavcx-jxcz.googlevideo.com/videoplayback?key=cms1&ipbits=0&ratebypass=yes&txp=5531432&clen=17764920&itag=18&c=WEB&fvip=4&dur=193.909&gir=yes&lmt=1538658399788378&sparams=clen,dur,ei,expire,gir,id,ip,ipbits,ipbypass,itag,lmt,mime,mip,mm,mn,ms,mv,pl,ratebypass,requiressl,source&ei=pYMcXP_zF8m6hwa29rXQAQ&requiressl=yes&ip=2600%3A3c03%3A%3Af03c%3A91ff%3Afe13%3A8670&mime=video%2Fmp4&pl=23&source=youtube&id=o-AD-9tVjOxvW0BT8w33VxqYxJZJYpFh6_P3l4GzXpEYL7&expire=1545394181&signature=ACB9A973028E6567ED084645EE6352068FFBB6.1D3B614395153FC69B3969019F64A3D4B6CD0092&title=KARA+-+%E3%83%9F%E3%82%B9%E3%82%BF%E3%83%BC+M/V&redirect_counter=1&rm=sn-ab5e7r7z&fexp=23763603&req_id=a966474e442aa3ee&cms_redirect=yes&ipbypass=yes&mip=203.177.163.198&mm=31&mn=sn-bavcx-jxcz&ms=au&mt=1545372426&mv=m', 'https://r8---sn-bavcx-jxcs.googlevideo.com/videoplayback?id=o-ALXs_KFczY-ewMGG3cDPqLL94N465ffJj0e2ZSw47jBi&pl=23&expire=1545387190&ip=2600%3A3c01%3A%3Af03c%3A91ff%3Afe52%3Af02c&gir=yes&c=WEB&key=cms1&mime=video%2Fmp4&fvip=3&dur=302.091&clen=11522315&ratebypass=yes&requiressl=yes&itag=18&ei=VWgcXLThO4mTkwbYm5DYCw&source=youtube&ipbits=0&lmt=1537162642170216&sparams=clen,dur,ei,expire,gir,id,ip,ipbits,ipbypass,itag,lmt,mime,mip,mm,mn,ms,mv,pcm2cms,pl,ratebypass,requiressl,source&signature=033370278D040701732CC92711A3785FB11F5FAF.706E881754785F1BFEBE533D9D5692D348A5B146&title=%E6%9C%B4%E6%A8%B9+-+%E5%B9%B3%E5%87%A1%E4%B9%8B%E8%B7%AF+[%E6%AD%8C%E8%A9%9E%E5%AD%97%E5%B9%95][%E9%9B%BB%E5%BD%B1%E3%80%8A%E5%BE%8C%E6%9C%83%E7%84%A1%E6%9C%9F%E3%80%8B%E4%B8%BB%E9%A1%8C%E6%9B%B2][%E5%AE%8C%E6%95%B4%E9%AB%98%E6%B8%85%E9%9F%B3%E8%B3%AA]+The+Continent+Theme+Song+-+The+Ordinary+Road+(Pu+Shu)&redirect_counter=1&rm=sn-n4vez7s&fexp=23763603&req_id=4dc755495ccba3ee&cms_redirect=yes&ipbypass=yes&mip=203.177.163.198&mm=31&mn=sn-bavcx-jxcs&ms=au&mt=1545365493&mv=m&pcm2cms=yes', 'https://r6---sn-ab5szn7k.googlevideo.com/videoplayback?sparams=dur%2Cei%2Cid%2Cinitcwndbps%2Cip%2Cipbits%2Citag%2Clmt%2Cmime%2Cmm%2Cmn%2Cms%2Cmv%2Cpl%2Cratebypass%2Crequiressl%2Csource%2Cexpire&signature=8EFB99712902FD88D923156300087A649B53BDD8.7EEC53C66EBAF25B5AB61A0434EA16F8C1166CF6&ipbits=0&ip=2600%3A3c03%3A%3Af03c%3A91ff%3Afe13%3A8670&beids=9466585&lmt=1545265700829980&fvip=6&c=WEB&initcwndbps=316250&itag=22&ei=c2scXPbzHYaP8gSSxofACg&id=o-AKMCUBvy1cnc12LxOhudVfhT33NugXqSe4SwOkomLpue&mm=31%2C29&txp=5532432&mn=sn-ab5szn7k%2Csn-ab5l6n67&ratebypass=yes&source=youtube&key=yt6&requiressl=yes&mime=video%2Fmp4&pl=54&dur=540.189&expire=1545387987&mt=1545366298&mv=m&ms=au%2Crdu&title=%E6%8A%96%E9%9F%B3134%EF%BC%88%E5%88%AB%E4%BA%BA%E6%98%AF%E6%BC%86%E7%9B%96%E5%8A%A8%EF%BC%8C%E5%A5%B9%E7%9A%84%E6%98%AF%E5%B1%81%E8%82%A1%E5%8A%A8%EF%BC%8C%E5%8F%AF%E7%88%B1..%EF%BC%89'],
      isFullScreen: false,
      nowindex: 0
    }

    BackHandler.addEventListener('hardwareBackPress', this._backButtonPress);
    Orientation.addOrientationListener(this._orientationDidChange);

    this.renderpn = this.renderpn.bind(this);
  }

  componentDidMount() {
    // this.videoPlayer.updateVideo(this.state.currentUrl, 0, null);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this._backButtonPress);
    Orientation.removeOrientationListener(this._orientationDidChange);
  }

  //全屏按钮事件
  _onOrientationChanged = (isFullScreen) => {
    // alert(isFullScreen);
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

  /// 处理安卓物理返回键，横屏时点击返回键回到竖屏，再次点击回到上个界面
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
        <Carousel delay={2000} style={{ flex: 1 }}  onAnimateNextPage={this.renderpn} autoplay={false}>
          {
            this.state.currentUrl.map((item, index) => <View style={{ width: G_WIDTH, height: G_HEIGHT-50, justifyContent: 'center'}} key={index}>
              {
                shortVideoIndex == index ?
                  <VideoPlayer
                    ref={(ref) => this.videoPlayer = ref}
                    videoURL={this.state.currentUrl[index]}
                    videoTitle={'视频标题123123'}
                    onChangeOrientation={this._onOrientationChanged}
                    enableSwitchScreen={false}
                  /> : <Text>{'我是暂未显示的视频缩略图' + index}</Text>
              }
            </View>)
          }
        </Carousel>


      </View>

    )
  }
}