import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Text, SafeAreaView, Modal, Pressable, Alert, Image } from 'react-native';
import VerticalSlider from 'rn-vertical-slider';
import Slider from '@react-native-community/slider';
import Layout from '../components/Layout/Layout';
import DateBar from '../components/Common/DateBar';
import SwitchButton from '../components/Common/SwitchButton';
import CheckBoxButton from '../components/Common/CheckBoxButton';
import { SHUTTER_AMAND, SHUTTER_DAMON, CLOSE } from '../Constant';

const ShutterScreen = ({ navigation }) => {

    const [modalVisible, setModalVisible] = useState(false);
    const [sliderValue, setSliderValue] = useState();
    const [sliderHValue, setSliderHValue] = useState();

    const showModal = () => {
        setModalVisible(!modalVisible);
    }

    const changeSliderValue = (value) => {
        setSliderHValue(value);
    }

    return (
        <SafeAreaView style={styles.containerScroll}>
            <Layout header={true}>
                <ScrollView style={styles.scrollView}>              
                    <Modal  animationType="fade"
                            transparent={true}
                            visible={modalVisible}
                            onRequestClose={() => {
                            setModalVisible(!modalVisible);}} >
                            
                            <View style={styles.modalView}>
                                <Pressable onPress={() => setModalVisible(false)} >
                                    <Image source={CLOSE} style={{  width: 20, height: 20, alignSelf: 'flex-end' }}></Image>
                                </Pressable>                                 
                                <View style={{ padding: 16, marginBottom: 25 }}>
                                    <Text style={styles.textCaption}>Position & Slat</Text>
                                </View>
                                <View style={styles.controlContainer}>
                                    <Text style={styles.sliderValueText}>{sliderValue? sliderValue : 0}%</Text>
                                    <View style={{ marginRight: 41 }}>
                                        <VerticalSlider
                                            min={0}
                                            max={100}
                                            width={39}
                                            height={329}
                                            step={1}
                                            borderRadius={20}
                                            onChange={(value) => {
                                                setSliderValue(value);
                                            }}
                                            onComplete={(value) => {
                                                setSliderValue(value);
                                            }}
                                            minimumTrackTintColor='#FFFFFF'
                                            maximumTrackTintColor='#F1580C'
                                            showBallIndicator
                                            ballIndicatorColor='#FFFFFF'
                                            ballIndicatorTextColor='#FFFFFF'
                                            ballIndicatorPosition={-5}
                                            />
                                    </View>
                                    <SwitchButton style={{ width: '50%' }}></SwitchButton>                                    
                                </View>   
                                <View style={styles.bottomControl}>
                                    <Text style={styles.bottomSliderValue}>Slat-{sliderHValue}%</Text>
                                    <Slider
                                        style={{width: '100%', height: 40}}
                                        minimumValue={0}
                                        maximumValue={100}
                                        step={1}
                                        minimumTrackTintColor="#F1580C"
                                        maximumTrackTintColor="#FFFFFF"
                                        thumbTintColor="#FFFFFF"
                                        onValueChange={changeSliderValue} /> 
                                </View>
                                                               
                            </View>
                    </Modal>
                    <View style={styles.categoryTitle}>
                        <DateBar flagButton={false}></DateBar>
                        <Text style={styles.mainTitle}>Shutter</Text>
                        <Text style={styles.subTitle}>Control your house</Text>
                    </View>
                    <View style={styles.categoryContainer}>
                        <View style={styles.categoryTilte}>
                            <Text style={styles.categoryText}>Amanda’s Room</Text>
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
                    <View style={styles.categoryContainer}>
                    <View style={styles.categoryTilte}>
                        <Text style={styles.categoryText}>Damon’s Room</Text>
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
                </ScrollView>
            </Layout>
        </SafeAreaView>
      )
};

const styles = StyleSheet.create({
    containerScroll: {
        flex: 1,
        backgroundColor: '#000000'
    },
    scrollView: {
        width: '100%'
    },
    categoryTitle: {
        padding: 25,
        paddingBottom: 0
    },
    dateTitle: {
        color: 'white',
        fontWeight: '400',
        fontSize: 14,
        opacity: 0.6
    },
    topTitle: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    mainTitle: {
        color: 'white',
        fontWeight: '700',
        fontSize: 30,
        lineHeight: 41,
        letterSpacing: 0.41
    },
    subTitle: {
        marginTop: 5,
        color: 'white',
        fontWeight: '600',
        fontSize: 17,
        lineHeight: 22,
        letterSpacing: -0.41
    },
    categoryContainer: {
        padding: 27,
        paddingBottom: 0
    },
    categoryTilte: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 11
    },
    categoryText: {
        color: '#FFFFFF',
        fontSize: 17,
        fontWeight: '400',
        lineHeight: 22,
        letterSpacing: -0.41
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
    controlContainer: { 
        display: 'flex',
        flexDirection: 'row',
        width: '100%'
    },
    sliderValueText: {
        width: 31,
        height: 41,
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 15,
        lineHeight: 41,
        letterSpacing: 0.41,
        color: '#FFFFFF',
        alignSelf: 'center',
        marginRight: 11
    },
    textCaption: {
        color: '#FFFFFF', 
        fontSize: 30, 
        fontWeight: '600',  
        lineHeight: 41,
        letterSpacing: 0.41,
        alignSelf: 'center'
    },
    bottomControl: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
    },
    bottomSliderValue: {
        color: '#FFFFFF',
        fontSize: 15,
        fontWeight: '400',
        lineHeight: 41,
        letterSpacing: 0.41
    }
});

export default ShutterScreen;