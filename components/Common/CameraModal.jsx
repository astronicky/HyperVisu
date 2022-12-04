import React, { useState } from "react";
import { View, Text, Image, Modal, Pressable, ImageBackground, StyleSheet } from "react-native";
import { useOrientation } from '../../hooks/useOrientation';
import { CLOSE, CAMERA_GREEN, CAMERA_IMAGE } from '../../Constant';

const CameraModal = ({ isVisible, setIsVisible }) => {

    const orientation = useOrientation();
    const orientationStyle = orientation === 'PORTRAIT' ? portrait : landscape;

    return (
        <Modal  animationType="fade"
                transparent={true}
                visible={isVisible}
                onRequestClose={() => {setModalVisible(!isVisible);}} >
                <View style={orientationStyle.modalView}>
                    <Pressable onPress={() => setIsVisible(false)} >
                        <Image source={CLOSE} style={{  width: 20, height: 20, alignSelf: 'flex-end' }}></Image>
                    </Pressable>
                    <View style={{ padding: 16, marginBottom: 15 }}>
                        <Text style={portrait.textCaption}>Amanda’s Room</Text>
                        <Text style={ portrait.tempText }>Monday 24, 2022 | 08:47am</Text>
                    </View>
                    <View style={portrait.cameraContainer}>  
                        <View style={portrait.cameraItem}>
                            <View style={portrait.cameraTitle}>
                                <Text style={portrait.cameraText}>Camera On</Text>
                                <Image source={CAMERA_GREEN}></Image>
                            </View>       
                            <ImageBackground imageStyle={{ borderRadius: 10 }} style={orientationStyle.cameraBackground} source={CAMERA_IMAGE} resizeMode="cover"></ImageBackground>   
                        </View>
                    </View>
                </View>                                                      
        </Modal>
    );
};

const portrait = StyleSheet.create({
    modalView: {
        flex: 1, 
        backgroundColor: '#2F2F31', 
        marginLeft: '10%',
        marginRight: '10%',
        marginTop: '20%',
        marginBottom: '20%',
        padding: 18, 
        opacity: 0.9,
    },
    textCaption: {
        color: '#FFFFFF', 
        fontSize: 30, 
        fontWeight: '600',  
        lineHeight: 41,
        letterSpacing: 0.41,
        alignSelf: 'center'
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
    cameraContainer: {
        // 
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
    cameraBackground: {
        width: '100%',
        height: 261
    }
});

const landscape = StyleSheet.create({
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
    cameraBackground: {
        width: '100%',
        height: 350
    },
})

export default CameraModal;