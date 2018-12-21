import { Dimensions } from 'react-native';

/** 屏幕缩放比例，按iPhone8的尺寸计算*/
global.G_SCALE = (value) => {
    return Dimensions.get('window').width / 375 * value;
};

/** 屏幕宽高*/
global.G_WIDTH = Dimensions.get('window').width;
global.G_HEIGHT = Dimensions.get('window').height;

/** LOG打印*/
global.G_LOG = (...params) => {
    if (GLOBAL.__DEV__) {
        console.log(params);
    }
};

/** 标签栏高度*/
global.G_TAB_HEIGHT = 49;