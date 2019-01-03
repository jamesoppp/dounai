import React, { Component } from 'react'
import { View, Text, StyleSheet, Modal, ImageBackground } from 'react-native'
import Progress from './CusProgressBar'
import CodePush from "react-native-code-push"
import { Button } from "teaset";

{/* <UpdateModal {...this.props}/> */}


let codePushOptions = {
  checkFrequency: CodePush.CheckFrequency.ON_APP_START
}

class UpdateModal extends Component {

  constructor(props) {
    super(props)
    this.currProgress = 0.0
    this.syncMessage = ''
    this.state = {
      modalVisible: false,
      isMandatory: false,
      immediateUpdate: true,
      isDone: false,
      updateInfo: {}
    }
  }

  //热更新状态监听
  codePushStatusDidChange(syncStatus) {
    if (this.state.immediateUpdate) {
      switch (syncStatus) {
        case CodePush.SyncStatus.CHECKING_FOR_UPDATE:
          // console.log('检查更新')
          break;
        case CodePush.SyncStatus.DOWNLOADING_PACKAGE:
          // console.log('下载中')
          this.setState({ modalVisible: true })
          break;
        case CodePush.SyncStatus.AWAITING_USER_ACTION:
          // console.log('等待用户操作')
          break;
        case CodePush.SyncStatus.INSTALLING_UPDATE:
          // console.log('安装中')
          break;
        case CodePush.SyncStatus.UP_TO_DATE:
          // console.log('App已经更新.')
          break;
        case CodePush.SyncStatus.UPDATE_IGNORED:
          // console.log('用户取消更新')
          break;
        case CodePush.SyncStatus.UPDATE_INSTALLED:
          // console.log('更新安装完成')
          this.setState({ isDone: true })
          break;
        case CodePush.SyncStatus.UNKNOWN_ERROR:
          // console.log('发生错误')
          this.setState({ modalVisible: false })
          break;
      }
    }
  }

  //热更新下载进度监听
  codePushDownloadDidProgress(progress) {
    if (this.state.immediateUpdate) {
      this.currProgress = parseFloat(progress.receivedBytes / progress.totalBytes).toFixed(2)
      this.refs.progressBar.progress = this.currProgress
    }
  }

  //即将渲染
  componentWillMount() {
    CodePush.disallowRestart()
    this._immediateUpdate()
  }

  //渲染完成
  componentDidMount() {
    CodePush.allowRestart()
  }

  //热更新启动
  _immediateUpdate() {
    CodePush.sync(
      {
        installMode: CodePush.InstallMode.ON_NEXT_RESTART,
      },
      this.codePushStatusDidChange.bind(this),
      this.codePushDownloadDidProgress.bind(this)
    )
  }

  //重启app
  _restartApp = () => {
      this.setState({ modalVisible: false });
      setTimeout(() => {
          CodePush.restartApp();
      });
  };

  //渲染弹窗内容
  renderModal() {
    return (
      <Modal
        animationType={"none"}
        transparent={true}
        visible={this.state.modalVisible}>
        <View style={styles.modal}>
          <ImageBackground style={styles.modalContainer} source={this.state.isDone ? G_IMAGE.down_done : G_IMAGE.down_load}>

            {
              this.state.isDone ?
                <View style={styles.btnviews}>
                  <Button style={styles.restatrlabel} title={'立即重启'} type={'primary'} onPress={this._restartApp}/>
                  <Button titleStyle={{color: '#979797'}} style={styles.canellabel} title={'稍后重启'} type={'primary'} onPress={() => this.setState({ modalVisible: false })} />
                </View>
                :
                <View style={{ paddingTop: 150, alignItems: 'center' }}>
                  <Progress
                    ref="progressBar"
                    progressColor={'#89C0FF'}
                    style={{
                      marginTop: 20,
                      height: 22,
                      width: 250,
                      backgroundColor: '#E1E1E1',
                      borderRadius: 10,
                    }}
                  />
                  <View style={{ alignItems: 'center', paddingTop: 5 }}>
                    <Text style={{ fontSize: 12, color: '#9B9B9B' }}>正在努力更新中，请等待</Text>
                  </View>
                </View>
            }
          </ImageBackground>
        </View>
      </Modal>
    )
  }

  render() {
    return (
      this.renderModal()
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    height: G_HEIGHT,
    width: G_WIDTH,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.3)'
  },
  modalContainer: {
    width: 294,
    height: 241
  },
  btnviews: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: 294,
    height: 241,
    paddingBottom: 10,
  },
  restatrlabel: {
    borderRadius:10, 
    height: G_SCALE(40), 
    width: 200
  },
  canellabel: {
    height: G_SCALE(40), 
    width: 200, 
    marginTop: 10, 
    backgroundColor: "#ffffff", 
    borderRadius:10, 
    borderColor: '#979797'
  }
})

export default CodePush(codePushOptions)(UpdateModal)