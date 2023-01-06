import React from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity, Pressable } from "react-native";
import Slider from '@react-native-community/slider';
const backgroundImg = require('../../assets/images/room/ellipse.png');
const rectSmallImg = require('../../assets/images/room/rectangle-small.png');
const ellipseSmallImg = require('../../assets/images/room/ellispe-small.png')
// const imgLeftUrl = require('');
// const imgRightUrl = require('');
// const imgCenterUrl = require('');

const OnOffButton = ({title, bottomTitle, imgMainUrl, style, path, navigation, imgRightUrl, flagButton, flagSlider }) => {
  return (
    <View {...{ style }}>
      <View style={styles.container}>
        <TouchableOpacity>
          <Pressable style={styles.baseButton} onPress={() => navigation.navigate(path)}>
            <View style={{...styles.baseButton, flex: 8 }}>
              <View style={styles.mainImgage}>
                <Image source={backgroundImg} style={{ width: 43, height: 43 }}></Image>      
                <Image source={imgMainUrl} style={{ width: 20, height: 20, position: 'absolute' }}></Image>  
              </View>
              <View>
                <Text style={styles.roomText}>{title}</Text>
                {bottomTitle !== undefined && <Text style={styles.valueText}>{bottomTitle}%</Text>}
              </View>
            </View>
            <View style={styles.btnGroup}>
              {imgRightUrl !== undefined && flagButton == "onoff" && (<><Image source={imgRightUrl}></Image>
              <Image source={rectSmallImg} style={{ position: 'absolute', right: '20%'}}></Image></>)}
              {imgRightUrl !== undefined && flagButton == "push" && (<><Image source={imgRightUrl}></Image>
              <Image source={ellipseSmallImg} style={{ position: 'absolute', right: '9%' }}></Image></>)}
            </View>  
          </Pressable> 
        </TouchableOpacity>   
        {flagSlider && <Slider
          style={{width: '100%', height: 40}}
          minimumValue={0}
          maximumValue={1}
          minimumTrackTintColor="#F1580C"
          maximumTrackTintColor="#FFFFFF"
          thumbTintColor="#FFFFFF"
        />}    
      </View>
    </View> 
  )
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 9,
    paddingTop: 5,
    paddingBottom: 5,
    paddingRight: 15,
    backgroundColor: '#2F2F31',
    marginBottom: 15
  },
  baseButton: {
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
  },
  valueText: {
    marginLeft: 25,
    fontStyle: 'normal',
    color: '#FFFFFF',
    fontWeight: '400',
    fontSize: 12,
    letterSpacing: -0.24,
    opacity: 0.5
  },
  mainImgage: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnGroup: {
    position: 'relative',
    flex: 4,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center'
  }
});

export default OnOffButton;