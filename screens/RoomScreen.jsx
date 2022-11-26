import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ScrollView, Text, Image, ImageBackground, Pressable, SafeAreaView, Modal } from 'react-native';
import Layout from '../components/Layout/Layout';
import DateBar from '../components/Common/DateBar';
import FavoriteCategory from '../components/Common/FavoriteCategory';
import CheckBoxButton from '../components/Common/CheckBoxButton';
import ToggleButton from '../components/Common/ToggleButton';
import CircleToggleButton from '../components/Common/CircleToggleButton';
import CommonModal from '../components/Common/CommonModal';
import NormalButton from '../components/Common/NormalButton';
import MainButton from '../components/Common/MainButton';
import Schedule from '../components/Common/Schedule';
import { STAIRE, NUMBER08, NUMBER69, RECT, LAMP_WHITE, 
        ELLIPSE, UPARROW, DOWNARROW, BLINDS_WHITE,
        ROOMS, CATEGORIES, FAVORITE_DATA, SHUTTER_BLINDS_DATA,
        CLOSE, DONE } from "../Constant";

const dimmerImg = require('../assets/images/room/dimmer.png');
const number24Img = require('../assets/images/room/24.png');
const filmImg = require('../assets/images/room/film.png');
const doorImg = require('../assets/images/room/door.png');

const RoomScreen = ({ navigation }) => {

    const [dimmerValue, setDimmerValue] = useState();
    const [whiteDimmerValue, setWhiteDimmerValue] = useState();
    const [analogueInputValue, setAnalogueInputValue] = useState();
    const [analogueDisplayVaule, setAnalogueDisplayValue] = useState();
    const [isVisibleShowModal, setIsVisibleShowModal] = useState(false);
    const [modaIndex, setModalIndex] = useState("");
    const [isBottomModal, setIsBottomModal] = useState(false);
    const [newSenceModalVisible,setNewSenceModalVisible] = useState(false);
    const [scheduleModalVisible, setScheduleModalVisible] = useState(false);

    const changeDimmerValue = (value) => {
        setDimmerValue(value);
    };

    const changeWhiteDimmerValue = (value) => {
        setWhiteDimmerValue(value);
    };

    const changeAnalogueInputValue = (value) => {
        setAnalogueInputValue(value);
    };

    const changeAnalogueDisplayValue = (value) => {
        setAnalogueDisplayValue(value);
    };

    const onShowModal = (index, isVisibleModal) => {
        setModalIndex(index);
        setIsVisibleShowModal(isVisibleModal);
    };

    useEffect(() => { 

    }, [isVisibleShowModal, isBottomModal, scheduleModalVisible]);
    
    return (
        <SafeAreaView style={styles.containerScroll}>
            <Layout header={true}>
                <ScrollView style={styles.scrollView}>
                    <Modal  animationType="fade"
                            transparent={true}
                            visible={isBottomModal}>
                            <View style={styles.addModal}>
                                <Pressable onPress={() => setNewSenceModalVisible(!newSenceModalVisible)} >
                                    <View style={styles.buttonSence}>
                                        {/* <Text style={ styles.textPlus }>+ </Text> */}
                                        <Text style={styles.textSence}>+ Add Sence</Text>
                                    </View>
                                </Pressable>
                                <Pressable onPress={() => setIsBottomModal(!isBottomModal)} >
                                    <Text style={styles.buttonCancel}>Cancel</Text>
                                </Pressable>
                            </View>
                    </Modal>
                    <Modal  animationType="fade"
                            transparent={true}
                            visible={newSenceModalVisible}>
                            <ScrollView>
                                <View style={styles.newSenceModal}>
                                    <Pressable onPress={() => setNewSenceModalVisible(!newSenceModalVisible)} >
                                        <Image source={CLOSE} style={{  width: 20, height: 20, alignSelf: 'flex-end' }}></Image>
                                    </Pressable>
                                    <View style={{ padding: 25 }}>
                                        <Text style={styles.textNewScene}>New Scene</Text>
                                    </View>
                                    <View style={styles.textNewSceneTitle}>
                                        <Text style={{color: '#FFFFFF', fontSize: 17, fontWeight: '600', lineHeight: 22, letterSpacing: -0.41 }}>Name</Text>
                                        <Text style={{ marginLeft: 50, color: '#8E8E93', fontSize: 17, fontWeight: '600', lineHeight: 22, letterSpacing: -0.41 }}>Watching TV</Text>
                                    </View>
                                    <View style={{ paddingTop: 30 }}>
                                        <View style={styles.favoriteTilte}>
                                        <Text style={styles.favoriteText}>Included Devices</Text>
                                        <Pressable onPress={() => navigation.navigate(CATEGORIES)}>
                                            <Text style={styles.favoriteText}><Text style={{ color: '#F1580C' }}>See All</Text></Text>
                                        </Pressable>
                                        </View>
                                        <View style={styles.roomItems}>
                                        {FAVORITE_DATA?.map(( data, index ) => {
                                            return (
                                            <FavoriteCategory key={index} title={data.title} imgMainUrl={data.imgMainUrl} bgColor={data.bgColor} textColor={data.textColor} imgUpUrl={data.imgUpUrl} imgDownUrl={data.imgDownUrl}></FavoriteCategory>
                                            );
                                        })}
                                        </View> 
                                    </View>
                                    <View style={{ paddingTop: 30 }}>
                                        <NormalButton title="Test this scene"></NormalButton>
                                        <NormalButton title="Add Devices"></NormalButton>
                                        <CircleToggleButton title="Automatic" onShowModal={(flag) => setScheduleModalVisible(flag)}></CircleToggleButton>
                                        <CircleToggleButton title="Show Favourite" onShowModal={(flag) => setScheduleModalVisible(flag)}></CircleToggleButton>
                                        <MainButton style={{ marginTop: 20 }} title={DONE}></MainButton>
                                    </View>    
                                </View>
                            </ScrollView>        
                    </Modal>
                    <Modal  animationType="fade"
                            transparent={true}
                            visible={scheduleModalVisible}>
                            <View style={{ backgroundColor: '#2F2F31', opacity: 0.9, marginTop: 150, marginLeft: 36, marginRight: 36, padding: 21}}>
                                <Pressable onPress={() => setScheduleModalVisible(!scheduleModalVisible)} >
                                    <Image source={CLOSE} style={{  width: 20, height: 20, alignSelf: 'flex-end' }}></Image>
                                </Pressable>
                                <View style={{ padding: 5, marginBottom: 20 }}>
                                    <Text style={styles.textNewScene}>Schedule</Text>
                                </View>
                                <Schedule title="Schedule 1" setDate="Daily" setTime="6:00 AM"></Schedule>
                                <Schedule title="Schedule 2" setDate="Mon, Tue, Fri" setTime="10:30 AM"></Schedule>
                                <Schedule title="Schedule 3" setDate="Sat" setTime="9:00 PM"></Schedule>
                            </View>        
                    </Modal>

                    <CommonModal index="4" isVisible={isVisibleShowModal} setIsVisible={(flag) => setIsVisibleShowModal(flag)}></CommonModal>
                    <View style={styles.smartHomeTitle}>
                        <DateBar flagButton={true} handleClick={(flag) => setIsBottomModal(flag)}></DateBar>
                        <Text style={styles.mainTitle}>Living Room</Text>
                        <Text style={styles.subTitle}>Control your house</Text>
                    </View>
                    <View style={styles.controlContent}>
                        <View style={styles.switchContent}>
                        <View style={styles.switch}>
                            <Image source={RECT} style={{ width: 5.24, height: 30, marginBottom: 33.38 }} ></Image>
                            <Image source={LAMP_WHITE} style={{ width: 34, height: 34, marginBottom: 33.38 }} ></Image>
                            <Image source={ELLIPSE} style={{ width: 34, height: 34 }}></Image>
                        </View>
                        <View style={{ flex: 2 }}></View>
                        <View style={styles.switch}>
                            <Image source={UPARROW} style={{ width: 29, height: 16.52, marginBottom: 47.48 }} ></Image>
                            <Image source={BLINDS_WHITE} style={{ width: 34, height: 34, marginBottom: 47.48 }} ></Image>
                            <Image source={DOWNARROW} style={{ width: 29, height: 16.52 }}></Image>
                        </View>     
                        </View>
                        <View style={{ flex: 1 }}></View>
                        <ImageBackground source={STAIRE} resizeMode="cover">
                        <View style={styles.infoContent}>
                            <View style={styles.info}>
                            <Image source={NUMBER08}></Image>
                            <Text style={styles.infoTitle}>Lights On</Text>
                            </View>
                            <View style={styles.info}>
                                <Image source={NUMBER69} style={{ width: 62, height: 29 }}></Image>
                                <Text style={styles.infoTitle}>Currently</Text>
                            </View>
                        </View>
                        </ImageBackground>
                    </View>
                    <View style={styles.favoriteCategory}>
                        <View style={styles.favoriteTilte}>
                        <Text style={styles.favoriteText}>Favorite</Text>
                        <Pressable onPress={() => navigation.navigate(CATEGORIES)}>
                            <Text style={styles.favoriteText}><Text style={{ color: '#F1580C' }}>Edit</Text></Text>
                        </Pressable>
                        </View>
                        <View style={styles.roomItems}>
                        {FAVORITE_DATA?.map(( data, index ) => {
                            return (
                            <FavoriteCategory key={index} title={data.title} imgMainUrl={data.imgMainUrl} bgColor={data.bgColor} textColor={data.textColor} imgUpUrl={data.imgUpUrl} imgDownUrl={data.imgDownUrl}></FavoriteCategory>
                            );
                        })}
                        </View> 
                    </View>
                    <View style={styles.favoriteCategory}>
                        <View style={styles.favoriteTilte}>
                        <Text style={styles.favoriteText}>Shutter/Blind</Text>
                        </View>
                        {SHUTTER_BLINDS_DATA !== undefined && <CheckBoxButton flagButton={false}
                                                                        title={SHUTTER_BLINDS_DATA[0].title} 
                                                                        bottomTitle={SHUTTER_BLINDS_DATA[0].percentValue + "%"} 
                                                                        imgMainUrl={SHUTTER_BLINDS_DATA[0].imgMainUrl} 
                                                                        imgCenterUrl={SHUTTER_BLINDS_DATA[0].imgCenterUrl}></CheckBoxButton>}
                    </View>
                    <View style={styles.favoriteCategory}>
                        <View style={styles.favoriteTilte}>
                        <Text style={styles.favoriteText}>Lights</Text>
                        </View>
                        <ToggleButton title="On/Off Switch" 
                                    imgMainUrl={LAMP_WHITE}
                                    flagButton="on/off"
                                    flagSlider={false}
                                    {...{ navigation, path: ROOMS }}></ToggleButton>
                        <ToggleButton title="Dimmer01" 
                                    imgMainUrl={dimmerImg}
                                    flagButton="on/off"
                                    bottomTitle={dimmerValue}
                                    flagSlider={true}
                                    changeSliderValue={changeDimmerValue}>
                        </ToggleButton>
                        <ToggleButton title="Push Button" 
                                    imgMainUrl={dimmerImg}
                                    flagButton="push"
                                    flagSlider={false}></ToggleButton>
                        <CheckBoxButton title="Status Display"
                                    bottomTitle="On" 
                                    imgMainUrl={SHUTTER_BLINDS_DATA[0].imgMainUrl}>
                                    </CheckBoxButton>
                        <ToggleButton title="Tunable White Dimmer" 
                                    imgMainUrl={dimmerImg}
                                    flagButton="on/off"
                                    bottomTitle={whiteDimmerValue}
                                    flagSlider={true}
                                    changeSliderValue={changeWhiteDimmerValue}>
                        </ToggleButton>
                        <ToggleButton title="Analogue Value Input" 
                                    imgMainUrl={dimmerImg}
                                    bottomTitle={analogueInputValue}
                                    flagSlider={true}
                                    changeSliderValue={changeAnalogueInputValue}>
                        </ToggleButton>
                        <ToggleButton title="Analogue Value Display" 
                                    imgMainUrl={dimmerImg}
                                    bottomTitle={analogueDisplayVaule}
                                    flagSlider={true}
                                    changeSliderValue={changeAnalogueDisplayValue}>
                        </ToggleButton>
                        <CheckBoxButton flagButton={true}
                                    title="Climate" 
                                    imgMainUrl={number24Img}
                                    textBottom="Temp"></CheckBoxButton>
                    </View>
                    <View style={styles.favoriteCategory}>
                        <View style={styles.favoriteTilte}>
                        <Text style={styles.favoriteText}>Camera/Monitor</Text>
                        </View>
                        <ToggleButton title="On/Off Switch" 
                                    imgMainUrl={filmImg}
                                    flagButton="on/off"
                                    flagSlider={false}
                                    onShowModal={onShowModal}>
                        </ToggleButton>
                    </View>
                    <View style={styles.favoriteCategory}>
                        <View style={styles.favoriteTilte}>
                        <Text style={styles.favoriteText}>Access</Text>
                        </View>
                        <ToggleButton title="On/Off Switch" 
                                    imgMainUrl={doorImg}
                                    flagButton="on/off"
                                    flagSlider={false}>
                        </ToggleButton>
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
    smartHomeTitle: {
        padding: 27,
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
    controlContent: {
        paddingLeft: 28,
        paddingRight: 28,
        paddingBottom: 28,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    switchContent: {
        flex: 5, 
        justifyContent: 'flex-start',
        flexDirection: 'row',
        alignItems: 'center', 
    },
    switch: {
        flex: 5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F1580C',
        borderRadius: 16,
        paddingTop: 20,
        paddingLeft: 21,
        paddingRight: 21,
        paddingBottom: 20,
    },
    infoContent: {
        flex: 5,
        borderRadius: 16,
        justifyContent: 'space-between',
        alignItems: 'center',
        width: 147,
        paddingTop: 19,
        paddingBottom: 36.31
    },
    infoTitle: {
        marginTop: 8,
        color: 'white',
        fontWeight: '600',
        fontSize: 15,
        lineHeight: 20,
        letterSpacing: -0.24
    }, 
    info: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    favoriteCategory: {
        paddingLeft: 27,
        paddingRight: 27,
        paddingBottom: 27
    },
    favoriteTilte: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 11
    },
    favoriteText: {
        color: 'white',
        fontSize: 17,
        fontWeight: '400',
        lineHeight: 22,
        letterSpacing: -0.41
    },
    roomItems: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    addModal: {
        flex: 1,
        backgroundColor: '#000000',
        opacity: 0.8,
        paddingTop: 500,
        paddingLeft: 24,
        paddingRight: 24,
        marginTop: 20
    },
    buttonSence: {
        flexDirection: 'row', 
        justifyContent: 'flex-start', 
        alignItems: 'center', 
        backgroundColor: '#2F2F31', 
        borderRadius: 14, 
        padding: 15
    },
    buttonCancel: {
        backgroundColor: '#2F2F31',
        borderRadius: 14,
        padding: 17,
        color: '#F1580C',
        fontSize: 17, 
        fontWeight: '600', 
        textAlign: 'center',
        marginTop: 10,
        lineHeight: 22
    },
    textPlus: { 
        borderWidth: 1, 
        borderColor: '#FFFFFF', 
        color: '#F1580C', 
        fontSize: 40, 
        fontWeight: '600', 
        lineHeight: 25,

    },
    textSence: {
        color: '#F1580C', 
        fontSize: 20, 
        fontWeight: '600', 
        lineHeight: 25, 
    },
    newSenceModal: {
        backgroundColor: '#1D1D1E',
        padding: 23,
        height: '100%',
    },
    textNewScene: {
        fontStyle: 'normal',
        color: '#FFFFFF',
        fontWeight: '700',
        fontSize: 30,
        lineHeight: 36,
        alignSelf: 'center'
    },
    textNewSceneTitle: {
        flexDirection: 'row',
        marginLeft: -24,
        marginRight: -24,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderTopColor: 'rgba(255, 255, 255, 0.92)',
        borderBottomColor: 'rgba(255, 255, 255, 0.92)',
        paddingTop: 14.5,
        paddingBottom: 14.5,
        paddingLeft: 16.5
    }
});

export default RoomScreen;
