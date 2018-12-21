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
      currentUrl: ['https://r6---sn-ab5szn7k.googlevideo.com/videoplayback?lmt=1545265700829980&sparams=dur%2Cei%2Cid%2Cinitcwndbps%2Cip%2Cipbits%2Citag%2Clmt%2Cmime%2Cmm%2Cmn%2Cms%2Cmv%2Cpl%2Cratebypass%2Crequiressl%2Csource%2Cexpire&ipbits=0&txp=5532432&mime=video%2Fmp4&requiressl=yes&key=yt6&initcwndbps=228750&expire=1545410536&source=youtube&ei=iMMcXMG4E4PG8wTlobTIAg&mn=sn-ab5szn7k%2Csn-ab5l6n67&ip=2600%3A3c03%3A%3Af03c%3A91ff%3Afe13%3A8670&mm=31%2C29&itag=22&pl=54&dur=540.189&ratebypass=yes&signature=791930933366EB765C8DDAEAF0485F2FF6862934.B291117E5CE4AC7E33B12EA74321598369B449DF&c=WEB&id=o-AHoWkw2S3oP7tiCOdyW8zu8OwGQ5YisJiRyO_EaM62wa&mv=m&mt=1545388874&fvip=6&ms=au%2Crdu&title=%E6%8A%96%E9%9F%B3134%EF%BC%88%E5%88%AB%E4%BA%BA%E6%98%AF%E6%BC%86%E7%9B%96%E5%8A%A8%EF%BC%8C%E5%A5%B9%E7%9A%84%E6%98%AF%E5%B1%81%E8%82%A1%E5%8A%A8%EF%BC%8C%E5%8F%AF%E7%88%B1..%EF%BC%89', 'https://r3---sn-i3b7knld.googlevideo.com/videoplayback?ei=DsMcXJH1E4GMgwPoy5bAAg&c=WEB&lmt=1537162642170216&ipbits=0&expire=1545410414&itag=18&ip=2600%3A3c03%3A%3Af03c%3A91ff%3Afe13%3A8670&mime=video%2Fmp4&source=youtube&id=o-AMvv5Drn6InxNzQBHcUtbE1MESTQZRV0JXv4t3kCaWVm&pl=24&dur=302.091&ratebypass=yes&gir=yes&sparams=clen,dur,ei,expire,gir,id,ip,ipbits,ipbypass,itag,lmt,mime,mip,mm,mn,ms,mv,pl,ratebypass,requiressl,source&requiressl=yes&clen=11522315&key=cms1&fvip=3&signature=3DED985874AA2A6343E52E023178AE15FFA668EE.4045ACD46DEA1C627715CD9A7E1802A9C0363D0C&title=%E6%9C%B4%E6%A8%B9+-+%E5%B9%B3%E5%87%A1%E4%B9%8B%E8%B7%AF+[%E6%AD%8C%E8%A9%9E%E5%AD%97%E5%B9%95][%E9%9B%BB%E5%BD%B1%E3%80%8A%E5%BE%8C%E6%9C%83%E7%84%A1%E6%9C%9F%E3%80%8B%E4%B8%BB%E9%A1%8C%E6%9B%B2][%E5%AE%8C%E6%95%B4%E9%AB%98%E6%B8%85%E9%9F%B3%E8%B3%AA]+The+Continent+Theme+Song+-+The+Ordinary+Road+(Pu+Shu)&redirect_counter=1&rm=sn-ab5e7y7s&fexp=23763603&req_id=d53c3370fab6a3ee&cms_redirect=yes&ipbypass=yes&mip=45.195.89.103&mm=31&mn=sn-i3b7knld&ms=au&mt=1545388700&mv=m', 'https://r1---sn-i3b7knl6.googlevideo.com/videoplayback?pl=24&ei=TsMcXLapDsfBkgayx5KIBg&itag=18&clen=17764920&gir=yes&mime=video%2Fmp4&c=WEB&beids=23758617&ratebypass=yes&ipbits=0&sparams=clen,dur,ei,expire,gir,id,ip,ipbits,ipbypass,itag,lmt,mime,mip,mm,mn,ms,mv,pl,ratebypass,requiressl,source&requiressl=yes&txp=5531432&dur=193.909&id=o-AHTxGb8K0i4TUSQXK-WVaUhVdtkeASxn6wHgbTtFW9SU&expire=1545410478&key=cms1&ip=206.189.73.156&lmt=1538658399788378&fvip=4&source=youtube&signature=638F79217BE1E8CB84A7D0E0F72FB3F6BB75546B.4113FCAD15C3A6B8514E2FF228E0A0CBF9D4F7C8&title=KARA+-+%E3%83%9F%E3%82%B9%E3%82%BF%E3%83%BC+M/V&redirect_counter=1&rm=sn-o09ld76&fexp=23758617,23763603&req_id=9b0d479c9a5ca3ee&cms_redirect=yes&ipbypass=yes&mip=45.195.89.103&mm=31&mn=sn-i3b7knl6&ms=au&mt=1545388700&mv=m&ir=1&rr=12'],
      // currentUrl: ['https://r2---sn-ab5l6ndr.googlevideo.com/videoplayback?ipbits=0&mime=video%2Fmp4&id=o-AHOiJpffeiroV-dkZ97zX_-oRUoM8wdFLcwy7N9z_dG0&pl=54&mv=m&mm=31%2C29&mn=sn-ab5l6ndr%2Csn-ab5sznle&txp=5531432&ms=au%2Crdu&mt=1545389084&gir=yes&ip=2600%3A3c03%3A%3Af03c%3A91ff%3Afe13%3A8670&requiressl=yes&ei=jcQcXLjMIMS_gwOIl67AAQ&initcwndbps=215000&dur=2619.930&expire=1545410797&sparams=clen%2Cdur%2Cei%2Cgir%2Cid%2Cinitcwndbps%2Cip%2Cipbits%2Citag%2Clmt%2Cmime%2Cmm%2Cmn%2Cms%2Cmv%2Cpl%2Cratebypass%2Crequiressl%2Csource%2Cexpire&source=youtube&clen=62397675&c=WEB&ratebypass=yes&signature=8831355E7B190305FC485502B7A5138396200928.47A97FF3E002126F6A1141FEAB2EE04C0DA0B6A5&fvip=2&beids=9466585&itag=18&key=yt6&lmt=1544892795092638&title=%E3%80%90%E6%8A%96%E9%9F%B3%E7%A5%9E%E6%9B%B22018%E3%80%91%E6%8A%96%E9%9F%B3%E6%B5%81%E8%A1%8C%E6%AD%8C%E6%9B%B2+2018-TIK+TOK%E6%8A%96%E9%9F%B3%E9%9F%B3%E6%A8%82%E7%86%B1%E9%96%80%E6%AD%8C%E5%96%AE+++2018%E5%B9%B4%E6%8A%96%E9%9F%B3%E6%9C%80%E7%81%AB%E6%B5%81%E8%A1%8C%E6%AD%8C%E6%9B%B2%E6%8E%A8%E8%8D%90+-+2018%E6%9C%80%E6%96%B0+++%E6%8A%96+%E9%9F%B3+%E9%9F%B3%E4%B9%90+++%E6%8A%96%E9%9F%B3%E6%AD%8C%E5%96%AE+++%E6%8A%96%E9%9F%B32018%E6%AD%8C%E6%9B%B2', 'https://r3---sn-i3b7knld.googlevideo.com/videoplayback?ei=DsMcXJH1E4GMgwPoy5bAAg&c=WEB&lmt=1537162642170216&ipbits=0&expire=1545410414&itag=18&ip=2600%3A3c03%3A%3Af03c%3A91ff%3Afe13%3A8670&mime=video%2Fmp4&source=youtube&id=o-AMvv5Drn6InxNzQBHcUtbE1MESTQZRV0JXv4t3kCaWVm&pl=24&dur=302.091&ratebypass=yes&gir=yes&sparams=clen,dur,ei,expire,gir,id,ip,ipbits,ipbypass,itag,lmt,mime,mip,mm,mn,ms,mv,pl,ratebypass,requiressl,source&requiressl=yes&clen=11522315&key=cms1&fvip=3&signature=3DED985874AA2A6343E52E023178AE15FFA668EE.4045ACD46DEA1C627715CD9A7E1802A9C0363D0C&title=%E6%9C%B4%E6%A8%B9+-+%E5%B9%B3%E5%87%A1%E4%B9%8B%E8%B7%AF+[%E6%AD%8C%E8%A9%9E%E5%AD%97%E5%B9%95][%E9%9B%BB%E5%BD%B1%E3%80%8A%E5%BE%8C%E6%9C%83%E7%84%A1%E6%9C%9F%E3%80%8B%E4%B8%BB%E9%A1%8C%E6%9B%B2][%E5%AE%8C%E6%95%B4%E9%AB%98%E6%B8%85%E9%9F%B3%E8%B3%AA]+The+Continent+Theme+Song+-+The+Ordinary+Road+(Pu+Shu)&redirect_counter=1&rm=sn-ab5e7y7s&fexp=23763603&req_id=d53c3370fab6a3ee&cms_redirect=yes&ipbypass=yes&mip=45.195.89.103&mm=31&mn=sn-i3b7knld&ms=au&mt=1545388700&mv=m'],
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
            this.state.currentUrl.map((item, index) => <View style={{ width: G_WIDTH, height: G_HEIGHT - 50, justifyContent: 'center' }} key={index}>
              {
                shortVideoIndex == index ?
                  <VideoPlayer
                    ref={(ref) => this.videoPlayer = ref}
                    videoURL={this.state.currentUrl[index]}
                    videoTitle={'视频标题' + index}
                    videoHeight={G_HEIGHT}
                    onChangeOrientation={this._onOrientationChanged}
                    enableSwitchScreen={false}
                    controlBottom={12}
                  /> : <Text>{'我是视频缩略图' + index}</Text>
              }
            </View>)
          }
        </Carousel>


      </View>

    )
  }
}