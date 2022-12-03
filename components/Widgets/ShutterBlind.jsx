import React, { useState, useEffect } from 'react';
import { View, Text, Image, Pressable, StyleSheet, Modal } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome";
import Slider from '@react-native-community/slider';
import VerticalSliderF from '../Common/VerticalSliderF';
import SwitchButton from '../Common/SwitchButton';
import { useOrientation } from '../../hooks/useOrientation';
import { CHECKBOX, CLOSE, SLIDER_THUMB } from '../../Constant';

const backgroundImg = require('../../assets/images/room/ellipse.png');
const shutter_blind= require('../../assets/images/room/shutter.png');
const width = 30;
const height = 30;
const size = 40;

const ShutterBlind = () => {

    const [clickUp, setClickUp] = useState();
    const [clickDown, setClickDown] = useState();
    const [isVisibleMolal, setIsVisibleModal] = useState(false);
    const [sliderValue, setSliderValue] = useState(0);
    const [sliderHValue, setSliderHValue] = useState(0);
    const orientation = useOrientation();
    const orientationStyle = orientation === 'PORTRAIT' ? portrait : landscape;

    const changeSliderValue = (value) => {
        setSliderHValue(Math.floor(value));
    };

    const onChangeVerticalValue = (value) => {
        setSliderValue(value);
    };

    useEffect(() => {

    }, []);

    return (
        <View style={portrait.container}>
            <Modal  
                animationType="fade"
                transparent={true}
                visible={isVisibleMolal}
                onRequestClose={() => {
                setModalVisible(!modalVisible);}} >
                <View style={orientationStyle.modalView}>
                    <Pressable onPress={() => setIsVisibleModal(!isVisibleMolal)} >
                        <Image source={CLOSE} style={{  width: 20, height: 20, alignSelf: 'flex-end' }}></Image>
                    </Pressable>                                 
                    <View style={{ padding: 16, marginBottom: 25 }}>
                        <Text style={portrait.modalTitle}>Position & Slat</Text>
                        {orientation === 'LANDSCAPE' && (<Text style={orientationStyle.sliderValueText}>{sliderValue}%</Text>)}
                    </View>
                    <View style={orientationStyle.controlContainer}>
                        {/* {orientation === 'PORTRAIT' && <Text style={portrait.sliderValueText}>{sliderValue}%</Text>} */}
                        <View style={{ marginRight: 25, height: 350 }}>
                            <VerticalSliderF onValueChange={onChangeVerticalValue}></VerticalSliderF>
                        </View>
                        <SwitchButton></SwitchButton>                                    
                    </View>   
                    <View style={orientationStyle.slatControll}>
                        {orientation === 'PORTRAIT' && <Text style={portrait.bottomSliderValue}>Slat-{sliderHValue}%</Text>}
                        <Slider
                            style={orientationStyle.bottomSlider}
                            minimumValue={0}
                            maximumValue={100}
                            step={1}
                            minimumTrackTintColor="#F1580C"
                            maximumTrackTintColor="#FFFFFF"
                            thumbTintColor="#FFFFFF"
                            thumbImage={SLIDER_THUMB}
                            onValueChange={changeSliderValue} /> 
                    </View>                                                             
                </View>
            </Modal>
            <Pressable onPress={() => setIsVisibleModal(!isVisibleMolal)} style={portrait.widgetTile}>
                <View style={portrait.mainImage}>
                    <Image source={backgroundImg} style={{ width: 43, height: 43 }}></Image>      
                    <Image source={shutter_blind} resizeMode="contain" style={{ width: 20, height: 20, position: 'absolute' }}></Image>  
                </View>
                <View>
                    <Text style={orientationStyle.widgetName}>Shutter/Blind</Text>
                    <Text style={{ paddingLeft: 5, fonSize: 12, fontWeight: '300', color: '#FFFFFF', opacity: 0.6 }}>{sliderHValue}%</Text>
                </View>    
            </Pressable>
            <View style={portrait.controllButton}>
                <View style={portrait.arrowUp}>
                    <Pressable onPressIn={() => setClickUp(true)} onPressOut={() => setClickUp(false)} onPress={() => { }}>
                        <Icon name="angle-up" size={size} color={clickUp ? '#4CD964' : '#ffffff'}/>
                    </Pressable>
                </View>
                <Image source={CHECKBOX}></Image>
                <View style={portrait.arrowDown}>
                    <Pressable onPressIn={() => setClickDown(true)} onPressOut={() => setClickDown(false)} onPress={() => { }}>
                        <Icon name="angle-down" size={size} color={clickDown ? '#4CD964' : '#ffffff'} />
                    </Pressable>
                </View>
            </View>
        </View>
    )
};

const portrait = StyleSheet.create({
    container: {
        borderRadius: 10,
        paddingVertical: 5,
        paddingHorizontal: 9,
        backgroundColor: '#2F2F31',
        marginBottom: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    widgetTile: {
        flexGrow: 3,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    mainImage: {
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    widgetName: {
        paddingLeft: 5,
        fontStyle: 'normal',
        color: '#FFFFFF',
        fontWeight: '600',
        fontSize: 15
    },
    controllButton: {
        flexGrow: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        paddingBottom: 10
    },
    arrowDown: {
        width: width, 
        height: height
    },
    arrowUp: {
        width: width, 
        height: height, 
        marginBottom: 3
    },
    modalView: {
        flex: 1, 
        backgroundColor: '#2F2F31', 
        marginLeft: 35,
        marginRight: 35,
        marginTop: 50,
        marginBottom: 50,
        padding: 18, 
        opacity: 0.9,
    },
    modalTitle: {
        color: '#FFFFFF', 
        fontSize: 30, 
        fontWeight: '600',  
        lineHeight: 41,
        letterSpacing: 0.41,
        alignSelf: 'center'
    },
    controlContainer: { 
        display: 'flex',
        flexDirection: 'row',
        width: '100%'
    },
    slatControll: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
    },
    bottomSliderValue: {
        color: '#FFFFFF',
        fontSize: 15,
        fontWeight: '400',
        lineHeight: 41,
        letterSpacing: 0.41
    },
    sliderValueText: {
        width: 31,
        height: 41,
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 15,
        lineHeight: 41,
        letterSpacing: 0.41,
        color: '#FFFFFF',
        alignSelf: 'center'
    },
    bottomSlider: {
        width: '100%', 
        height: 40, 
        borderWidth: 1, 
        borderColor: 'red'
    }
});

const landscape = StyleSheet.create({
    widgetName: {
        paddingLeft: 5,
        fontStyle: 'normal',
        color: '#FFFFFF',
        fontWeight: '600',
        fontSize: 15
    },
    modalView: {
        flex: 1, 
        backgroundColor: '#2F2F31', 
        marginLeft: '25%',
        marginRight: '25%',
        marginTop: '5%',
        marginBottom: '5%',
        padding: 20, 
        opacity: 0.9,
    },
    controlContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    slatControll: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 25,
    },
    sliderValueText: {
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 20,
        lineHeight: 41,
        letterSpacing: 0.41,
        color: '#FFFFFF',
        alignSelf: 'center',
        marginRight: 11
    },
    bottomSlider: {
        width: '80%', 
        height: 50, 
        borderWidth: 1, 
        borderColor: 'red'
    }
});

export default ShutterBlind;