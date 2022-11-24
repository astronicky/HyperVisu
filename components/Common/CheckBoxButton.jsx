import React from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity, Pressable } from "react-native";
import ActionButton from './ActionButton';
import { ACTION_ARROW_UP, ACTION_ARROW_DOWN, ACTION_MINUS, ACTION_PLUS } from '../../Constant';

const backgroundImg = require('../../assets/images/room/ellipse.png');

const handleClick = () => {
    console.log("okay");
}

const CheckBoxButton = ({ flagButton, title, bottomTitle, imgMainUrl, style, path, navigation, imgCenterUrl, textBottom }) => {

  return (
    <View {...{ style }}>
      <View style={styles.container}>
        <TouchableOpacity>
          <Pressable style={styles.baseButton} onPress={() => navigation.navigate(path)}>
            <View style={{...styles.baseButton, flex: 7 }}>
              <View style={styles.mainImgage}>
                <Image source={backgroundImg} style={{ width: 43, height: 43 }}></Image>      
                <Image source={imgMainUrl} resizeMode="contain" style={{ width: 20, height: 20, position: 'absolute' }}></Image>  
              </View>
              <View>
                <Text style={styles.roomText}>{title}</Text>
                {bottomTitle !== undefined && <Text style={styles.valueText}>{bottomTitle}</Text>}
              </View>
            </View>
            <View style={styles.btnGroup}>
              {flagButton !== undefined && (flagButton === true?(<ActionButton name={ACTION_PLUS} style={styles[ACTION_PLUS]} onClick={handleClick} />) :
                            (<ActionButton name={ACTION_ARROW_UP} style={styles[ACTION_ARROW_UP]} onClick={handleClick} />))}
              {imgCenterUrl !== undefined && <Image source={imgCenterUrl}></Image>}
              {textBottom !== undefined && <Text style={{ color: '#FFFFFF', opacity: 0.5 }}>{textBottom}</Text>}
              {flagButton !== undefined && (flagButton === true?(<ActionButton name={ACTION_MINUS} style={styles[ACTION_MINUS]} onClick={handleClick} />) :
                            (<ActionButton name={ACTION_ARROW_DOWN} style={styles[ACTION_ARROW_DOWN]} onClick={handleClick} />))}
            </View>  
          </Pressable> 
        </TouchableOpacity>           
      </View>
    </View> 
  )
}

const styles = StyleSheet.create({
    [ACTION_MINUS]: {
        width: 20,
        height: 20
    },
    [ACTION_PLUS]: {
        width: 20,
        height: 20
    },
    [ACTION_ARROW_DOWN]: {
      width: 40,
      height: 40
    },
    [ACTION_ARROW_UP]: {
        width: 40,
        height: 40
    },
    container: {
        borderWidth: 1,
        borderRadius: 10,
        paddingLeft: 9,
        paddingTop: 5,
        paddingBottom: 5,
        paddingRight: 5,
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
        flex: 5,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    }
});

export default CheckBoxButton;