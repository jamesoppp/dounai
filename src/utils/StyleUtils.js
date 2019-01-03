import { StyleSheet, Dimensions } from "react-native";

const {width, height} = Dimensions.get('window');

const StylesUtils = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent'
  },
  viewRow: {
    flexDirection: 'row'
  },
  viewJustCenter: {
    justifyContent: 'center'
  },
  viewAlignCenter: {
    alignItems: 'center'
  },
  viewSpace: {
    justifyContent: 'space-between'
  },
  viewAround: {
    justifyContent: 'space-around'
  },
  bacBlack: {
    backgroundColor: '#000',
  },
  bacWhite: {
    backgroundColor: '#ffffff',
  },
  colorWhite: {
    color: '#ffffff'
  },
  colorBlack: {
    color: '#000'
  },
  clolr229: {
    color: 'rgba(229, 229, 229, 1)'
  },
  tabBarView: {
    height: 50,
    width: width,
    borderTopWidth: 1,
    borderColor: 'rgba(229, 229, 229, .3)',
  },
  tabSelecttype: {
    height: 2, 
    position:'absolute', 
    bottom:2, 
    backgroundColor: 'rgba(255, 255, 255, 1)', 
    width: 24
  },
});

global.G_STYLES = StylesUtils;