import React, { useState, useEffect } from 'react';
import { View, Text, Image, Pressable, StyleSheet, Modal } from 'react-native';
import Slider from '@react-native-community/slider';
import ColorPicker from 'react-native-wheel-color-picker';
import VerticalSlider from "../Common/VerticalSlider";
import { useOrientation } from '../../hooks/useOrientation';
import { CLOSE, BRIGHTNESS, COLOR } from '../../Constant';

const backgroundImg = require('../../assets/images/room/ellipse.png');
const dimmerImg = require('../../assets/images/room/dimmer.png');
const width = 41;
const height = 36;
const padding = height / 10;
const borderRadius = height * 0.2;

const RGBDimmer = () => {

    const [clickFlag, setClickFlag] = useState();
    const [sliderValue, setSliderValue] = useState(0);
    const [isVisibleColorMolal, setIsVisibleColorModal] = useState(false);
    const [isVisibleBrightModal, setIsVisibleBrightModal] = useState(false);
    const orientation = useOrientation();
    const orientationStyle = orientation === 'PORTRAIT' ? portrait : landscape;

    const changeSliderValue = (value) => {
        setSliderValue(value);
    };

    useEffect(() => {

    }, []);

    return (
        <View style={portrait.container}>
             <Modal  
                animationType="fade"
                transparent={true}
                visible={isVisibleColorMolal}>
                <View style={orientationStyle.modalView}>
                    <Pressable onPress={() => setIsVisibleColorModal(!isVisibleColorMolal)} >
                        <Image source={CLOSE} style={{  width: 20, height: 20, alignSelf: 'flex-end' }}></Image>
                    </Pressable>                                 
                    <View style={{ padding: 16, marginBottom: 25 }}>
                        <Text style={portrait.modalTitle}>RGB Dimmer</Text>
                    </View>
                    <ColorPicker  
                        thumbSize={30}
                        noSnap={false}
                        swatches={false}
                        row={false}
                        sliderHidden={true} />
                    <View style={orientationStyle.brightButton}>
                        <Pressable 
                            style={portrait.button} 
                            onPress={() => {
                                setIsVisibleColorModal(!isVisibleColorMolal);
                                setIsVisibleBrightModal(!isVisibleBrightModal);
                            }}>
                            <Text style={portrait.buttonCaption}>{BRIGHTNESS}</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
            <Modal  
                animationType="fade"
                transparent={true}
                visible={isVisibleBrightModal}>
                <View style={orientationStyle.modalView}>
                    <Pressable onPress={() => setIsVisibleBrightModal(!isVisibleBrightModal)} >
                        <Image source={CLOSE} style={{  width: 20, height: 20, alignSelf: 'flex-end' }}></Image>
                    </Pressable>                                 
                    <View style={{ padding: 16, marginBottom: 25 }}>
                        <Text style={portrait.modalTitle}>Brightness</Text>
                    </View>
                    <View style={orientation === 'PORTRAIT'?{ alignSelf: 'center', height: 270 }:{ alignSelf: 'center', height: 325 }}>
                        <VerticalSlider />
                    </View>
                    <View style={orientationStyle.brightButton}>
                        <Pressable 
                            style={portrait.button}
                            onPress={() => {
                                setIsVisibleColorModal(!isVisibleColorMolal);
                                setIsVisibleBrightModal(!isVisibleBrightModal);
                            }}>
                            <Text style={portrait.buttonCaption}>{COLOR}</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
            <View style={portrait.topContainer}>
                <Pressable onPress={() => setIsVisibleColorModal(!isVisibleColorMolal)} style={portrait.widgetTile}>
                    <View style={portrait.mainImage}>
                        <Image source={backgroundImg} style={{ width: 43, height: 43 }}></Image>      
                        <Image source={dimmerImg} resizeMode="contain" style={{ width: 30, height: 30, position: 'absolute' }}></Image>  
                    </View>
                    <View>
                        <Text style={orientationStyle.widgetName}>RGB Dimmer</Text>
                        <Text style={{ paddingLeft: 5, fonSize: 12, fontWeight: '300', color: '#FFFFFF', opacity: 0.6 }}>{sliderValue}%</Text>
                    </View>    
                </Pressable>
                <View style={portrait.controllButton}>
                    <Pressable onPress={() => { setClickFlag(!clickFlag)}} style={portrait.buttonContainer}>
                        <View style={clickFlag ? portrait.buttonOn : portrait.buttonOff} >
                            <View style={portrait.buttonSwitch} />
                        </View>
                    </Pressable>
                </View>
            </View>
            <Slider
                style={{width: '100%', height: 40}}
                minimumValue={0}
                maximumValue={100}
                step={1}
                minimumTrackTintColor="#5F3CFF"
                maximumTrackTintColor="#FFFFFF"
                thumbTintColor="#FFFFFF"
                onValueChange={changeSliderValue}/>
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
    },
    topContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    widgetTile: {
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
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginRight: 8
    },
    buttonContainer: {
        width: width, 
        height: height, 
        alignItems: 'center', 
        justifyContent: 'center'
    },
    buttonOn: {
        flexDirection: 'row', 
        justifyContent: 'flex-end', 
        backgroundColor: '#F1580C', 
        borderRadius: borderRadius, 
        padding: padding, 
        width: width, 
        height: height
    },
    buttonOff: {
        flexDirection: 'row', 
        backgroundColor: '#6A6A6B', 
        borderRadius: borderRadius, 
        padding: padding, 
        width: width, 
        height: height
    },
    buttonSwitch: {
        flex: 0.5, 
        backgroundColor: '#ffffff', 
        borderRadius: height * 0.8 * 0.2
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
    tempValue: {
        textAlign: 'center',
        color: '#FFFFFF',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 15,
        lineHeight: 41,
        letterSpacing: 0.41
    },
    brightButton: {
        padding: '20%', 
    },
    button: {
        width: '100%',
        borderRadius: 12,
        backgroundColor: '#F1580C'
    },
    buttonCaption: {
        color: 'white',
        paddingTop: 13,
        paddingBottom: 13,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 18,
        lineHeight: 22,
        color: '#FFFFFF'
    },
});

const landscape = StyleSheet.create({
    widgetName: {
        paddingLeft: 5,
        fontStyle: 'normal',
        color: '#FFFFFF',
        fontWeight: '600',
        fontSize: 20
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
    brightButton: {
        paddingLeft: '30%', 
        paddingRight: '30%',
        paddingTop: '5%',
        paddingBottom: '5%'
    },
});

export default RGBDimmer;