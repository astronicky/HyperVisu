import React from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity, Pressable } from "react-native";

const ImageButton = ({title, imgUrl, style, path, navigation}) => {
  return (
    <View {...{ style }}>
      <View style={styles.container}>
        <TouchableOpacity>
          <Pressable style={styles.baseButton} onPress={() => navigation.navigate(path)}>
            <View><Image source={imgUrl}></Image></View>
            <View><Text style={styles.categoryText}>{title}</Text></View>
          </Pressable> 
        </TouchableOpacity>           
      </View>
    </View> 
  )
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    paddingLeft: 15,
    paddingTop: 11,
    paddingBottom: 11,
    paddingRight: 21,
    backgroundColor: '#2F2F31',
    marginBottom: 15
  },
  baseButton: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  categoryText: {
    marginLeft: 25,
    fontStyle: 'normal',
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 15
  }
});

export default ImageButton;