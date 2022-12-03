import React, { useState, useEffect } from 'react';
import { View, Text, Image, Pressable, StyleSheet, Modal } from 'react-native';
import Slider from '@react-native-community/slider';
import { LinearGradient } from 'expo-linear-gradient';
import { useOrientation } from '../../hooks/useOrientation';
import { CLOSE } from '../../Constant';

const backgroundImg = require('../../assets/images/room/ellipse.png');
const dimmerImg = require('../../assets/images/room/dimmer.png');
const ImgLampTop = require('../../assets/images/lamp_top.png');
const ImgLampBottom = require('../../assets/images/lamp_bottom.png');
const width = 41;
const height = 36;
const padding = height / 10;
const borderRadius = height * 0.2;

const TunableWhiteDimmer = () => {

    const [clickFlag, setClickFlag] = useState();
    const [sliderValue, setSliderValue] = useState(0);
    const [isVisibleMolal, setIsVisibleModal] = useState(false);
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
                visible={isVisibleMolal}>
                <View style={orientationStyle.modalView}>
                    <Pressable onPress={() => setIsVisibleModal(!isVisibleMolal)} >
                        <Image source={CLOSE} style={{  width: 20, height: 20, alignSelf: 'flex-end' }}></Image>
                    </Pressable>                                 
                    <View style={{ padding: 16, marginBottom: 10 }}>
                        <Text style={portrait.modalTitle}>Bed Light</Text>
                        <Text style={portrait.tempValue }>Brightness - {sliderValue}%</Text>
                    </View>
                    <View style={{ alignSelf: 'center' }}>
                        <View style={orientationStyle.switchContainer}>
                            <Pressable onPress={() => {setClickFlag(!clickFlag)}}>
                                <View style={clickFlag ? portrait.switchOn : portrait.switchOff} >
                                    <View style={portrait.switch}>
                                        <View style={{ margin: 6, width: 30, height: 5, backgroundColor: '#FFFFFF', borderRadius: 5 }}></View>
                                        <View style={{ margin: 40 }}>
                                            <Image source={ImgLampTop}></Image>
                                            <Image source={ImgLampBottom} style={{ marginLeft: 6 }}></Image>
                                        </View>
                                    </View>
                                </View>
                            </Pressable >
                        </View >
                    </View>
                    <View style={{ marginTop: 7 }}>
                        <Text style={ portrait.tempValue }>Temperature - {sliderValue}%</Text>
                        <LinearGradient
                        // Background Linear Gradient
                            colors={['#bad6f7', '#f5f3e9', '#f7ee9c']}
                            end={{x: 0.2, y: 0.2}}
                            style={{width: '100%', height: 40}}>
                            <Slider style={{width: '100%', paddingTop: 24}}
                                minimumValue={0}
                                maximumValue={100}
                                step={1}
                                minimumTrackTintColor="#F1580C"
                                maximumTrackTintColor="#FFFFFF"
                                thumbTintColor="#FFFFFF"
                                onValueChange={changeSliderValue} />
                        </LinearGradient>        
                    </View>
                </View>
            </Modal>
            <View style={portrait.topContainer}>
                <Pressable onPress={() => setIsVisibleModal(!isVisibleMolal)} style={portrait.widgetTile}>
                    <View style={portrait.mainImage}>
                        <Image source={backgroundImg} style={{ width: 43, height: 43 }}></Image>      
                        <Image source={dimmerImg} resizeMode="contain" style={{ width: 30, height: 30, position: 'absolute' }}></Image>  
                    </View>
                    <View>
                        <Text style={orientationStyle.widgetName}>Tunable White Dimmer</Text>
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
                minimumTrackTintColor="#F1580C"
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
    switchContainer: {
        width: 124, 
        height: 325, 
        backgroundColor: 'rgba(248, 248, 248, 0.92)', 
        borderRadius: 30
    },
    switchOn: {
        top: 0, 
        height: 217, 
        backgroundColor: '#F1580C', 
        borderRadius: 30
    },
    switchOff: {
        top: 108, 
        height: 217, 
        backgroundColor: '#F1580C', 
        borderRadius: 30
    },
    switch: {
        height: 217, 
        alignItems: 'center', 
        justifyContent: 'space-between'
    },
    tempText: {
        textAlign: 'center',
        color: '#FFFFFF',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 15,
        lineHeight: 41,
        letterSpacing: 0.41
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
    switchContainer: {
        marginTop: 10,
        width: 124,
        height: 325,
        backgroundColor: 'rgba(248, 248, 248, 0.92)', 
        borderRadius: 30
    }
});

export default TunableWhiteDimmer;