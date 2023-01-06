import React from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity, Pressable } from "react-native";

const ImgRightButton = ({title, imgUrl, style, path, navigation}) => {
  return (
    <View {...{ style }}>
      <View style={styles.container}>
        <TouchableOpacity>
          <Pressable style={styles.touchButton} onPress={() => navigation.navigate(path)}>
            <View><Image source={imgUrl}></Image></View>
            <View><Text style={styles.roomText}>{title}</Text></View>
          </Pressable> 
        </TouchableOpacity>           
      </View>
    </View> 
  )
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 15,
    paddingTop: 11,
    paddingBottom: 11,
    paddingRight: 21,
    backgroundColor: '#2F2F31',
    marginBottom: 15
  },
  touchButton: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  roomText: {
    marginLeft: 25,
    fontStyle: 'normal',
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 15
  }
});

export default ImgRightButton;