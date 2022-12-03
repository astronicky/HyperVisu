import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Slider from '@react-native-community/slider';
import { useOrientation } from '../../hooks/useOrientation';

const backgroundImg = require('../../assets/images/room/ellipse.png');
const analogueTopImg = require('../../assets/images/room/analogue-top.png');
const analoueDownImg = require('../../assets/images/room/analoue-down.png');

const AnalogOutput = () => {

    const [sliderValue, setSliderValue] = useState(0);
    const orientation = useOrientation();
    const orientationStyle = orientation === 'PORTRAIT' ? portrait : landscape;

    const changeSliderValue = (value) => {
        setSliderValue(value);
    };

    useEffect(() => {

    }, []);

    return (
        <View style={portrait.container}>
            <View style={portrait.topContainer}>
                <View style={portrait.widgetTile}>
                    <View style={portrait.mainImage}>
                        <Image source={backgroundImg} style={{ width: 43, height: 43 }}></Image>      
                        <Image source={analogueTopImg} resizeMode="contain" style={{ top: 10, width: 20, height: 20, position: 'absolute' }}></Image>
                        <Image source={analoueDownImg} resizeMode="contain" style={{ top: 27, width: 20, height: 10, position: 'absolute' }}></Image>  
                    </View>
                    <View>
                        <Text style={orientationStyle.widgetName}>Analogue Value Input</Text>
                        <Text style={{ paddingLeft: 5, fonSize: 12, fontWeight: '300', color: '#FFFFFF', opacity: 0.6 }}>{sliderValue}%</Text>
                    </View>    
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
    }
});

const landscape = StyleSheet.create({
    widgetName: {
        paddingLeft: 5,
        fontStyle: 'normal',
        color: '#FFFFFF',
        fontWeight: '600',
        fontSize: 20
    }
});

export default AnalogOutput;