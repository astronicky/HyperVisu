import React from 'react';
import { View, Image, Text, ImageBackground, StyleSheet} from 'react-native';
import { useOrientation } from '../../hooks/useOrientation';
import { CAMERA_IMAGE, CAMERA_RED, CAMERA_GREEN } from '../../Constant';

const Camera = ({ caption, status }) => {

    const orientation = useOrientation();
    const orientationStyle = orientation === 'PORTRAIT' ? portrait : landscape;
    const statusImg = status === true?CAMERA_GREEN:CAMERA_RED;

    return (
        <View style={orientationStyle.cameraContainer}>
            <View style={portrait.cameraItem}>
                <View style={orientationStyle.cameraTitle}>
                    <Text style={orientationStyle.cameraText}>{caption}</Text>
                    <Image source={statusImg}></Image>
                </View>   
                <View style={orientationStyle.videoMain}>  
                    <ImageBackground imageStyle={{ borderRadius: 10 }} style={{width: '100%', height: '100%'}} source={CAMERA_IMAGE} resizeMode="cover"></ImageBackground>
                </View>
            </View>
        </View>
    )
};

const portrait = StyleSheet.create({
    cameraContainer: {
        padding: 20,
    },
    cameraItem: {
        borderRadius: 20,
        position: 'relative'
    },
    cameraTitle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'absolute',
        padding: 12,
        width: '100%', 
        backgroundColor: '#1C1C1E',
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        zIndex: 1
    },   
    cameraText: {
        color: '#FFFFFF',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 16,
        lineHeight: 19,
    },
    videoMain: {
        marginTop: 15,
        width: '100%',
        height: 274
    },
});

const landscape = StyleSheet.create({
    cameraContainer: {
        marginRight: 30,
        width: '48%'
    },
    cameraTitle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'absolute',
        padding: 12,
        width: '100%', 
        backgroundColor: '#1C1C1E',
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        zIndex: 1
    },
    cameraText: {
        color: '#FFFFFF',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 24,
        lineHeight: 29,
    },
    videoMain: {
        marginTop: 15,
        height: 350
    },
});

export default Camera;