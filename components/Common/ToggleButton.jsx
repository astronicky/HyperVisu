import React from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity, Pressable } from "react-native";
import Slider from '@react-native-community/slider';
import ActionButton from './ActionButton';
import { useOrientation } from '../../hooks/useOrientation';
import { ACTION_REC_SWITCH_BUTTON, ACTION_OPTION_BUTTON } from '../../Constant';

const backgroundImg = require('../../assets/images/room/ellipse.png');

function handleClick() {
    console.log("ToggleButton");
}

const ToggleButton = ({index, title, bottomTitle, imgMainUrl, style, flagButton, flagSlider, changeSliderValue, onShowModal }) => {

    const orientation = useOrientation();

    return (
        <View {...{ style }}>
            <View style={orientation === 'PORTRAIT' ? portrait.container : landscape.container}>
                <TouchableOpacity>
                <Pressable style={portrait.baseButton} onPress={() => (onShowModal) && onShowModal(index, true)}>
                    <View style={{...portrait.baseButton, flex: 8 }}>
                    <View style={portrait.mainImgage}>
                        <Image source={backgroundImg} style={{ width: 43, height: 43 }}></Image>      
                        <Image source={imgMainUrl} style={{ width: 20, height: 20, position: 'absolute' }}></Image>  
                    </View>
                    <View>
                        <Text style={portrait.roomText}>{title}</Text>
                        {flagSlider && bottomTitle !== undefined && <Text style={portrait.valueText}>{ bottomTitle?bottomTitle : 0 }%</Text>}
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

const landscape = StyleSheet.create({
    container: {
        width: '47%',
        borderRadius: 10,
        padding: 11,
        backgroundColor: '#2F2F31',
        marginBottom: 15,
        marginLeft: 15
    }
});

export default ToggleButton;