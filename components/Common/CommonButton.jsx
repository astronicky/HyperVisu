import React from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity, Pressable } from "react-native";

export default function CommonButton({title, imgUrl, style, path, navigation}) {
  return (
    <View {...{ style }}>
      <View style={styles.container}>
        <TouchableOpacity>
          <Pressable style={styles.baseButton} onPress={() => navigation.navigate(path)}>
            <View><Text style={styles.titleText}>{title}</Text></View>
            <View><Image source={imgUrl}></Image></View>
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
    paddingLeft: 21,
    paddingTop: 19,
    paddingBottom: 18,
    paddingRight: 21,
    backgroundColor: '#2F2F31',
    marginBottom: 15
  },
  baseButton: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  titleText: {
    fontStyle: 'normal',
    color: '#FFFFFF',
    fontWeight: '600',
    lineHeight: 17
  }
});