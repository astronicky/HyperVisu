import React, { useState, useEffect } from 'react';
import { View, Text, Image, Pressable, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useOrientation } from '../../hooks/useOrientation';
import {CLIMATE_DETAIL} from '../../Constant';
const backgroundImg = require('../../assets/images/room/ellipse.png');
const width = 20;
const height = 20;
const stock = width * 0.18;

const Temperature = ({caption, navigation}) => {

    const orientation = useOrientation();
    const orientationStyle = orientation === 'PORTRAIT' ? portrait : landscape;
    const [clickPlus, setClickPlus] = useState();
    const [clickMinus, setClickMinus] = useState();
    const [temperature, setTemperature] = useState(0);

    useEffect(() => {
        temperatureSave();
    }, [temperature]);

    const temperatureSave = async () => {
        try {
            await AsyncStorage.setItem("temperature", temperature.toString());
        } catch (e) {
            // saving error
        }
    }

    return (
        <View style={portrait.container}>
            <Pressable onPress={() => navigation && navigation.navigate(CLIMATE_DETAIL)} style={portrait.widgetTile}>
                <View style={portrait.mainImage}>
                    <Image source={backgroundImg} style={{ width: 43, height: 43 }}></Image>    
                    <Text style={portrait.realTemperature}>{temperature}</Text>  
                </View>
                <Text style={orientationStyle.widgetName}>{caption}</Text>    
            </Pressable>
            <View style={portrait.controllButton}>
                <Pressable onPressIn={() => setClickPlus(true)} onPressOut={() => setClickPlus(false)} onPress={() => {setTemperature(temperature+1)}} >
                    <View style={portrait.plusContaiter}>
                        <View style={clickPlus ? { backgroundColor: '#4CD964', ...portrait.plusH_Piece } : { backgroundColor: '#ffffff', ...portrait.plusH_Piece }} />
                        <View style={clickPlus ? { backgroundColor: '#4CD964', ...portrait.plusV_Piece } : { backgroundColor: '#ffffff', ...portrait.plusV_Piece }} />
                    </View>
                </Pressable>
                <Text style={portrait.temperature}>{temperature}</Text>
                <Pressable onPressIn={() => setClickMinus(true)} onPressOut={() => setClickMinus(false)} onPress={() => {setTemperature(temperature-1)}} >
                    <View style={portrait.minusConatiner}>
                        <View style={clickMinus ? { backgroundColor: '#4CD964', ...portrait.minusPiece } : { backgroundColor: '#ffffff', ...portrait.minusPiece }} />
                    </View>
                </Pressable>
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
    realTemperature: {
        width: 20, 
        height: 20, 
        position: 'absolute', 
        color: '#FFFFFF', 
        fontWeight: '700', 
        letterSpacing: 1, 
        textAlign: 'center',
        opacity: 0.6, 
    },
    controllButton: {
        flexGrow: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginRight: 10
    },
    plusContaiter: {
        width: height, 
        height: height, 
        position: 'relative'
    },
    plusH_Piece: {
        position: 'absolute', 
        borderRadius: stock / 2, 
        width: width, 
        height: stock,     
        top: (width - stock) / 2
    },
    plusV_Piece: {
        position: 'absolute', 
        borderRadius: stock / 2, 
        width: stock, 
        height: height,     
        left: (height - stock) / 2
    },
    minusConatiner: {
        width: height, 
        height: height, 
        alignItems: 'center', 
        justifyContent: 'center',
        
    },
    minusPiece: {
        borderRadius: height * 0.18 / 2, 
        width: width, 
        height: height * 0.18
    },
    temperature: {
        fonSize: 14, 
        fontWeight: '400', 
        color: '#FFFFFF', 
        opacity: 0.8
    },
});

const landscape = StyleSheet.create({
    roomText: {
        paddingLeft: 5,
        fontStyle: 'normal',
        color: '#FFFFFF',
        fontWeight: '600',
        fontSize: 20
    },
    widgetName: {
        paddingLeft: 5,
        fontStyle: 'normal',
        color: '#FFFFFF',
        fontWeight: '600',
        fontSize: 20
    },
    realTemperature: {
        width: 23, 
        height: 23, 
        position: 'absolute', 
        color: '#FFFFFF', 
        fontWeight: '700', 
        letterSpacing: 1, 
        textAlign: 'center',
        opacity: 0.6, 
    },
    temperature: {
        fonSize: 17, 
        fontWeight: '600', 
        color: '#FFFFFF', 
        opacity: 0.8
    },
});

export default Temperature;