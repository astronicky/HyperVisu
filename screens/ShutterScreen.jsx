import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Text, SafeAreaView, Modal, Pressable, Alert, Image } from 'react-native';
// import VerticalSlider from 'rn-vertical-slider';
import Slider from '@react-native-community/slider';
import Layout from '../components/Layout/Layout';
import DateBar from '../components/Common/DateBar';
import SwitchButton from '../components/Common/SwitchButton';
import CheckBoxButton from '../components/Common/CheckBoxButton';
import VerticalSlider from '../components/Common/VerticalSlider';
import { useOrientation } from '../hooks/useOrientation';
import { SHUTTER_AMAND, SHUTTER_DAMON, CLOSE, SLIDER_THUMB } from '../Constant';
import { portrait, landscape } from '../assets/styles/ShutterScreen/index';

const ShutterScreen = ({ navigation }) => {

    const orientation = useOrientation();
    const orientationStyle = orientation === 'PORTRAIT' ? portrait : landscape;

    const [modalVisible, setModalVisible] = useState(false);
    const [sliderValue, setSliderValue] = useState(0);
    const [sliderHValue, setSliderHValue] = useState();

    const showModal = () => {
        setModalVisible(!modalVisible);
    }

    const changeSliderValue = (value) => {
        setSliderHValue(Math.floor(value));
    }

    const onChangeVerticalValue = (value) => {
        setSliderValue(value);
    }

    return (
        <SafeAreaView style={portrait.containerScroll}>
            <Layout header={true}>
                <ScrollView style={portrait.scrollView}>              
                    <Modal  animationType="fade"
                            transparent={true}
                            visible={modalVisible}
                            onRequestClose={() => {
                            setModalVisible(!modalVisible);}} >
                            
                            <View style={orientationStyle.modalView}>
                                <Pressable onPress={() => setModalVisible(false)} >
                                    <Image source={CLOSE} style={{  width: 20, height: 20, alignSelf: 'flex-end' }}></Image>
                                </Pressable>                                 
                                <View style={{ padding: 16, marginBottom: 25 }}>
                                    <Text style={portrait.textCaption}>Position & Slat</Text>
                                    {orientation === 'LANDSCAPE' && (<Text style={orientationStyle.sliderValueText}>{sliderValue}%</Text>)}
                                </View>
                                <View style={orientationStyle.controlContainer}>
                                    {orientation === 'PORTRAIT' && <Text style={portrait.sliderValueText}>{sliderValue}%</Text>}
                                    <View style={{ marginRight: 41 }}>
                                        <VerticalSlider onValueChange={onChangeVerticalValue}></VerticalSlider>
                                    </View>
                                    <SwitchButton></SwitchButton>                                    
                                </View>   
                                <View style={orientationStyle.bottomControl}>
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
                    <View style={styles.shutterTitle}>
                        <DateBar flagButton={false}></DateBar>
                        <Text style={orientationStyle.mainTitle}>Shutter</Text>
                        <Text style={orientationStyle.subTitle}>Control your house</Text>
                    </View>
                    <View style={orientationStyle.shutterContainerLand}>
                        <View style={orientationStyle.shutterContainer}>
                            <View style={orientationStyle.shutterTilte}>
                                <Text style={orientationStyle.shutterText}>Amanda’s Room</Text>
                            </View>
                            {SHUTTER_AMAND?.map((data, index) => {
                                return (
                                    <CheckBoxButton  key={index}
                                            flagButton={false}
                                            title={data.title} 
                                            bottomTitle={data.bottomTitle + "%"}
                                            imgMainUrl={data.imgMainUrl}
                                            imgCenterUrl={data.imgCenterUrl}
                                            showModal={showModal}></CheckBoxButton>                         
                                );
                            })}
                        </View>
                        <View style={orientationStyle.shutterContainer}>
                            <View style={portrait.shutterTilte}>
                                <Text style={portrait.shutterText}>Damon’s Room</Text>
                            </View>
                            {SHUTTER_DAMON?.map((data, index) => {
                                return (
                                <CheckBoxButton key={index} 
                                                flagButton={false}
                                                title={data.title} 
                                                bottomTitle={data.bottomTitle + "%"}
                                                imgMainUrl={data.imgMainUrl}
                                                imgCenterUrl={data.imgCenterUrl}
                                                showModal={showModal}></CheckBoxButton>
                                );
                            })}
                        </View>
                    </View>
                </ScrollView>
            </Layout>
        </SafeAreaView>
      )
};

const styles = StyleSheet.create({
    shutterTitle: {
        padding: 25,
        paddingBottom: 0
    },
})

export default ShutterScreen;