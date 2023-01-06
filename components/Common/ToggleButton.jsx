import React, {useState, useEffect} from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity, Pressable } from "react-native";
import Slider from '@react-native-community/slider';
import * as Progress from 'react-native-progress';
import ActionButton from './ActionButton';
import { ACTION_REC_SWITCH_BUTTON, ACTION_OPTION_BUTTON } from '../../Constant';
import { useOrientation } from '../../hooks/useOrientation';

const backgroundImg = require('../../assets/images/room/ellipse.png');

function handleClick() {
    console.log("ToggleButton");
}

const ToggleButton = ({index, title, bottomTitle, imgMainUrl, style, flagButton, flagSlider, flagProgressBar, changeSliderValue, onShowModal }) => {

    const orientation = useOrientation();
    const orientationStyle = orientation === 'PORTRAIT' ? portrait : landscape;

    return (
        <View {...{ style }}>
            <View style={portrait.container}>
                <TouchableOpacity>
                <Pressable style={portrait.baseButton} onPress={() => (onShowModal) && onShowModal(index, true)}>
                    <View style={{...portrait.baseButton, flex: 8 }}>
                    <View style={portrait.mainImgage}>
                        <Image source={backgroundImg} style={{ width: 43, height: 43 }}></Image>      
                        <Image source={imgMainUrl} style={{ width: 20, height: 20, position: 'absolute' }}></Image>  
                    </View>
                    <View>
                        <Text style={orientationStyle.roomText}>{title}</Text>
                        {(flagProgressBar || flagSlider) && bottomTitle !== undefined && <Text style={orientationStyle.valueText}>{ bottomTitle?bottomTitle : 0 }%</Text>}
                    </View>
                    </View>
                    
                    <View style={portrait.btnGroup}>
                    {flagButton !== undefined && flagButton == "on/off" && (
                        <ActionButton name={ACTION_REC_SWITCH_BUTTON} style={portrait[ACTION_REC_SWITCH_BUTTON]} onClick={handleClick} />
                    )}
                    {flagButton !== undefined && flagButton == "push" && (
                        <ActionButton name={ACTION_OPTION_BUTTON} style={portrait[ACTION_OPTION_BUTTON]} onClick={handleClick} />
                    )}
                    </View>  
                </Pressable> 
                </TouchableOpacity>   
                {flagSlider && <Slider
                    style={{width: '100%', height: 40}}
                    minimumValue={0}
                    maximumValue={100}
                    step={1}
                    minimumTrackTintColor="#F1580C"
                    maximumTrackTintColor="#FFFFFF"
                    thumbTintColor="#FFFFFF"
                    onValueChange={changeSliderValue}
                />}
                {flagProgressBar && <View style={{ paddingVertical: 20, paddingHorizontal: 20 }}><Progress.Bar 
                    progress={0.3} 
                    color="#F1580C" 
                    unfilledColor="#979797" 
                    borderWidth={0} 
                    width={null} 
                    height={2} /></View>}    
            </View>
        </View> 
    )
};

const portrait = StyleSheet.create({
    [ACTION_REC_SWITCH_BUTTON]: {
        width: 41,
        height: 36,
    },
    [ACTION_OPTION_BUTTON]: {
        width: 41,
        height: 41
    },
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
        paddingLeft: 5,
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
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center'
    }
});

const landscape = StyleSheet.create({
    roomText: {
        paddingLeft: 5,
        fontStyle: 'normal',
        color: '#FFFFFF',
        fontWeight: '600',
        fontSize: 20
    },
    valueText: {
        marginLeft: 5,
        fontStyle: 'normal',
        color: '#FFFFFF',
        fontWeight: '400',
        fontSize: 20,
        letterSpacing: -0.24,
        opacity: 0.5
    },
});

export default ToggleButton;