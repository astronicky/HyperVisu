import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";

const FavoriteItem = ({ room, imgUrl, bgColor, textColor }) => {
  return (
    <View style={{...styles.container, backgroundColor: bgColor}}>
      <Image source={imgUrl}></Image>
      <Text style={{...styles.baseText, color: textColor}}>{room}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    padding: 17,
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

export default FavoriteItem;