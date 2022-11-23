import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";

const FavoriteCategory = ({ title, imgMainUrl, bgColor, textColor, imgUpUrl, imgDownUrl }) => {
  return (
    <View style={{...styles.container, backgroundColor: bgColor, position: 'relative'}}>
      {imgUpUrl !== undefined && <Image source={imgUpUrl} style={{ position: 'absolute', left: '95%', top: '10%' }}></Image>}
      <Image source={imgMainUrl}></Image>
      <Text style={{...styles.baseText, color: textColor}}>{title}</Text>
      {imgDownUrl !== undefined && <Image source={imgDownUrl} style={{ position: 'absolute', left: '95%', top: '95%' }}></Image>}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    paddingLeft: 17,
    paddingTop: 9,
    paddingBottom: 9,
    paddingRight: 10,
    display: 'flex',
    justifyContent: 'center',
    width: 105,
    height: 119
  },
  baseText: {
    marginTop: 5,
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 17
  }
});

export default FavoriteCategory;