import React, { Component } from 'react';
import { View, Text, Image } from 'react-native'

export default class TabIcon extends Component {

  render() {
    const { icon, title, styles } = this.props;
    return (
      <View style={styles}>
        <Image source={icon}/>
        {/* <Text>{title}</Text> */}
      </View>
    )
  }
}