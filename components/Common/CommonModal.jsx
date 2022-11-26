import React, { useState } from "react";
import { View, StyleSheet, Text, Image, Modal, Pressable, ImageBackground } from "react-native";
import ColorPicker from 'react-native-wheel-color-picker';
import Slider from '@react-native-community/slider';
import MainButton from './MainButton';
import ActionButton from "./ActionButton";
import { CLOSE, BRIGHTNESS, ACTION_SWITCH, COLOR, CAMERA_GREEN, CAMERA_IMAGE } from '../../Constant';

const CommonModal = ({ index, isVisible, setIsVisible }) => {

    const [tempValue, onTempValue] = useState();
    const changeSliderValue = (value) => {
        onTempValue(value);
    };

    return (
        <Modal  animationType="fade"
                transparent={true}
                visible={isVisible}
                onRequestClose={() => {setModalVisible(!isVisible);}} >                                  
                {index == 0 && 
                    <View style={styles.modalView}>
                        <Pressable onPress={() => setIsVisible(false)} >
                            <Image source={CLOSE} style={{  width: 20, height: 20, alignSelf: 'flex-end' }}></Image>
                        </Pressable> 
                        <View style={{ padding: 16, marginBottom: 25 }}>
                            <Text style={styles.textCaption}>RGB Dimmer</Text>
                        </View>
                        <View style={{padding: 20}}>
                            <ColorPicker  thumbSize={30}
					                    sliderSize={20}
					                    noSnap={false}
                                        swatches={true}
					                    row={false} />
                        </View>
                        <View style={{ padding: 58, marginTop: 250 }}>
                            <MainButton title={BRIGHTNESS}></MainButton>
                        </View>
                        
                    </View>
                }   
                {index == 1 && 
                    <View style={styles.modalView}>
                        <Pressable onPress={() => setIsVisible(false)} >
                            <Image source={CLOSE} style={{  width: 20, height: 20, alignSelf: 'flex-end' }}></Image>
                        </Pressable> 
                        <View style={{ padding: 16, marginBottom: 25 }}>
                            <Text style={styles.textCaption}>Brightness</Text>
                        </View>
                        <View style={{ alignSelf: 'center' }}>
                            <ActionButton name={ACTION_SWITCH} style={styles[ACTION_SWITCH]} />
                        </View>
                        <View style={{ padding: 58 }}>
                            <MainButton title={COLOR}></MainButton>
                        </View>
                    </View>
                }  
                {index == 2 && 
                    <View style={styles.modalView}>
                        <Pressable onPress={() => setIsVisible(false)} >
                            <Image source={CLOSE} style={{  width: 20, height: 20, alignSelf: 'flex-end' }}></Image>
                        </Pressable> 
                        <View style={{ padding: 16, marginBottom: 15 }}>
                            <Text style={styles.textCaption}>Bed Light</Text>
                            <Text style={ styles.tempText }>Brightness - 58%</Text>
                        </View>
                        <View style={{ alignSelf: 'center' }}>
                            <ActionButton name={ACTION_SWITCH} style={styles[ACTION_SWITCH]} />
                        </View>
                        <View style={{ marginTop: 5 }}>
                            <Text style={ styles.tempText }>Temperature - {tempValue}%</Text>
                            <Slider style={{width: '100%', height: 40}}
                                minimumValue={0}
                                maximumValue={100}
                                step={1}
                                minimumTrackTintColor="#F1580C"
                                maximumTrackTintColor="#FFFFFF"
                                thumbTintColor="#FFFFFF"
                                onValueChange={changeSliderValue} />
                        </View>
                    </View>
                }
                {index == 4 && 
                    <View style={{...styles.modalView, marginTop: 100, marginBottom: 100 }}>
                        <Pressable onPress={() => setIsVisible(false)} >
                            <Image source={CLOSE} style={{  width: 20, height: 20, alignSelf: 'flex-end' }}></Image>
                        </Pressable> 
                        <View style={{ padding: 16, marginBottom: 15 }}>
                            <Text style={styles.textCaption}>Amanda’s Room</Text>
                            <Text style={ styles.tempText }>Monday 24, 2022 | 08:47am</Text>
                        </View>
                        <View style={styles.cameraContainer}>  
                            <View style={styles.cameraItem}>
                                <View style={styles.cameraTitle}>
                                    <Text style={styles.cameraText}>Camera On</Text>
                                    <Image source={CAMERA_GREEN}></Image>
                                </View>       
                                <ImageBackground imageStyle={{ borderRadius: 10 }} style={styles.cameraBackground} source={CAMERA_IMAGE} resizeMode="cover"></ImageBackground>
                                
                            </View>
                        </View>
                    </View>
                }                                                  
                
        </Modal>
    );
};

const styles = StyleSheet.create({
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
    textCaption: {
        color: '#FFFFFF', 
        fontSize: 30, 
        fontWeight: '600',  
        lineHeight: 41,
        letterSpacing: 0.41,
        alignSelf: 'center'
    },
    colorPickerContainer: {

    },
    [ACTION_SWITCH]: {
        marginTop: 10,
        width: 124,
        height: 325
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

export default CommonModal;