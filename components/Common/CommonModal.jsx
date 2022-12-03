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