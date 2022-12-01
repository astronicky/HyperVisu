import React, { useState } from "react";
import { View, StyleSheet, Text, Image, Modal, Pressable, ImageBackground } from "react-native";
import ColorPicker from 'react-native-wheel-color-picker';
import Slider from '@react-native-community/slider';
import { LinearGradient } from 'expo-linear-gradient';
import MainButton from './MainButton';
import ActionButton from "./ActionButton";
import VerticalSlider from "./VerticalSlider";
import { useOrientation } from '../../hooks/useOrientation';
import { portrait, landscape } from "../../assets/styles/CommonModal/index";
import { CLOSE, BRIGHTNESS, ACTION_SWITCH, COLOR, CAMERA_GREEN, CAMERA_IMAGE } from '../../Constant';

const CommonModal = ({ index, isVisible, setIsVisible }) => {

    const orientation = useOrientation();
    const orientationStyle = orientation === 'PORTRAIT' ? portrait : landscape;

    const [tempValue, onTempValue] = useState();
    const changeSliderValue = (value) => {
        onTempValue(value);
    };

    return (
        <Modal  animationType="fade"
                transparent={true}
                visible={isVisible}
                onRequestClose={() => {setModalVisible(!isVisible);}} >
                <View style={orientationStyle.modalView}>
                    <Pressable onPress={() => setIsVisible(false)} >
                        <Image source={CLOSE} style={{  width: 20, height: 20, alignSelf: 'flex-end' }}></Image>
                    </Pressable>
                    {index == 0 &&(<>
                        <View style={{ padding: 16, marginBottom: 25 }}>
                            <Text style={portrait.textCaption}>RGB Dimmer</Text>
                        </View>
                        <ColorPicker  
                            thumbSize={30}
                            noSnap={false}
                            swatches={false}
                            row={false}
                            sliderHidden={true} />
                        <View style={orientationStyle.brightButton}>
                            <MainButton title={BRIGHTNESS}></MainButton>
                        </View>
                    </>)}
                    {index == 1 && (<> 
                        <View style={{ padding: 16, marginBottom: 25 }}>
                            <Text style={portrait.textCaption}>Brightness</Text>
                        </View>
                        <View style={orientation === 'PORTRAIT'?{ alignSelf: 'center', height: 290 }:{ alignSelf: 'center', height: 325 }}>
                            <VerticalSlider />
                        </View>
                        <View style={orientationStyle.colorButton}>
                            <MainButton title={COLOR}></MainButton>
                        </View>
                    </>)}
                
                    {index == 2 && (<> 
                        <View style={{ padding: 16, marginBottom: 15 }}>
                            <Text style={portrait.textCaption}>Bed Light</Text>
                            <Text style={ portrait.tempText }>Brightness - 58%</Text>
                        </View>
                        <View style={{ alignSelf: 'center' }}>
                            <ActionButton name={ACTION_SWITCH} style={portrait[ACTION_SWITCH]} />
                        </View>
                        <View style={{ marginTop: 5 }}>
                            <Text style={ portrait.tempText }>Temperature - {tempValue}%</Text>
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
                    </>)}
                    {index == "camera_monitor" && (<>
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
                    </>)}
                </View>                                                      
        </Modal>
    );
};

export default CommonModal;