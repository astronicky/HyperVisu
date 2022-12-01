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
import ActionButton from '../components/Common/ActionButton';
import FavoriteRoom from '../components/Common/FavoriteRoom';
import Schedule from '../components/Common/Schedule';
import { portrait, landscape } from '../assets/styles/RoomScreen/index';
import { ACTION_TURN_ON, ACTION_TURN_OFF, ACTION_LAMP_STATUS, ACTION_SHUTTER_STATUS, FAVORITE_ROOMS_DATA,
        STAIRE, NUMBER08, NUMBER69, RECT, LAMP_WHITE, 
        ELLIPSE, UPARROW, DOWNARROW, BLINDS_WHITE,
        ROOMS, CATEGORIES, FAVORITE_DATA, SHUTTER_BLINDS_DATA,
        CLOSE, DONE } from "../Constant";

import { useOrientation } from '../hooks/useOrientation';

const dimmerImg = require('../assets/images/room/dimmer.png');
const number24Img = require('../assets/images/room/24.png');
const filmImg = require('../assets/images/room/film.png');
const doorImg = require('../assets/images/room/door.png');

const RoomScreen = ({ navigation }) => {

    const orientation = useOrientation();
    const orientationStyle = orientation === 'PORTRAIT' ? portrait : landscape;

    let count = orientation === 'PORTRAIT' ? 3 : 5;

    const [dimmerValue, setDimmerValue] = useState();
    const [whiteDimmerValue, setWhiteDimmerValue] = useState();
    const [analogueInputValue, setAnalogueInputValue] = useState();
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

    const onShowModal = (index, isVisibleModal) => {
        setModalIndex(index);
        setIsVisibleShowModal(isVisibleModal);
    };

    useEffect(() => { 

    }, [isVisibleShowModal, isBottomModal, scheduleModalVisible]);

    const handleClick = () => {

    };
    
    return (
        <SafeAreaView style={portrait.containerScroll}>
            <Layout header={true}>
                <ScrollView style={portrait.scrollView}>
                    <Modal  animationType="fade"
                            transparent={true}
                            visible={isBottomModal}>
                            <View style={orientationStyle.addModal}>
                                <View style={orientationStyle.buttonGroup}>
                                    <Pressable onPress={() => setNewSenceModalVisible(!newSenceModalVisible)} >
                                        <View style={{...portrait.buttonSence, borderBottomWidth: 1, borderBottomColor: 'rgba(255, 255, 255, 0.3)'}}>
                                            <Text style={portrait.textSence}>+ Add Accessory</Text>
                                        </View>
                                    </Pressable>
                                    <Pressable onPress={() => setNewSenceModalVisible(!newSenceModalVisible)} >
                                        <View style={portrait.buttonSence}>
                                            <Text style={portrait.textSence}>+ Add Sence</Text>
                                        </View>
                                    </Pressable>
                                </View>
                                <Pressable onPress={() => setIsBottomModal(!isBottomModal)} >
                                    <Text style={portrait.buttonCancel}>Cancel</Text>
                                </Pressable>
                            </View>
                    </Modal>
                    <Modal  animationType="fade"
                            transparent={true}
                            visible={newSenceModalVisible}>
                            
                                <View style={orientationStyle.newSenceModal}>
                                    <ScrollView>
                                        <Pressable onPress={() => setNewSenceModalVisible(!newSenceModalVisible)} >
                                            <Image source={CLOSE} style={{  width: 20, height: 20, alignSelf: 'flex-end' }}></Image>
                                        </Pressable>
                                        <View style={{ padding: 25 }}>
                                            <Text style={portrait.textNewScene}>New Scene</Text>
                                        </View>
                                        <View style={orientationStyle.newSenceLand}>
                                            <View style={orientationStyle.newSenceLeft}>
                                                <View style={portrait.textNewSceneTitle}>
                                                    <Text style={portrait.newSenceName}>Name</Text>
                                                    <Text style={portrait.newSenceTitle}>Watching TV</Text>
                                                </View>
                                                <View style={{ marginTop: 30 }}>
                                                    <View style={portrait.favoriteTilte}>
                                                    <Text style={portrait.favoriteText}>Included Devices</Text>
                                                    <Pressable onPress={() => navigation.navigate(CATEGORIES)}>
                                                        <Text style={portrait.favoriteText}><Text style={{ color: '#F1580C' }}>See All</Text></Text>
                                                    </Pressable>
                                                    </View>
                                                    <View style={portrait.roomItems}>
                                                    {FAVORITE_DATA?.slice(0, count).map(( data, index ) => {
                                                        return (
                                                            <FavoriteCategory key={index} title={data.title} imgMainUrl={data.imgMainUrl} bgColor={data.bgColor} textColor={data.textColor} imgUpUrl={data.imgUpUrl} imgDownUrl={data.imgDownUrl}></FavoriteCategory>
                                                        );
                                                    })}
                                                    </View> 
                                                </View>
                                            </View>
                                            <View style={orientationStyle.newSenceRight}>
                                                <NormalButton title="Test this scene"></NormalButton>
                                                <NormalButton title="Add Devices"></NormalButton>
                                                <CircleToggleButton title="Automatic" onShowModal={(flag) => setScheduleModalVisible(flag)}></CircleToggleButton>
                                                <CircleToggleButton title="Show Favourite" onShowModal={(flag) => setScheduleModalVisible(flag)}></CircleToggleButton>                                                
                                            </View>      
                                        </View>
                                        <MainButton style={orientationStyle.newSenceButton} title={DONE}></MainButton>
                                    </ScrollView>  
                                </View>
                                    
                    </Modal>
                    <Modal  animationType="fade"
                            transparent={true}
                            visible={scheduleModalVisible}>
                            <View style={orientationStyle.scheduleModal}>
                                <Pressable onPress={() => setScheduleModalVisible(!scheduleModalVisible)} >
                                    <Image source={CLOSE} style={{  width: 20, height: 20, alignSelf: 'flex-end' }}></Image>
                                </Pressable>
                                <View style={{ padding: 5, marginBottom: 20 }}>
                                    <Text style={portrait.textNewScene}>Schedule</Text>
                                </View>
                                <Schedule title="Schedule 1" setDate="Daily" setTime="6:00 AM"></Schedule>
                                <Schedule title="Schedule 2" setDate="Mon, Tue, Fri" setTime="10:30 AM"></Schedule>
                                <Schedule title="Schedule 3" setDate="Sat" setTime="9:00 PM"></Schedule>
                            </View>        
                    </Modal>
                    <CommonModal index="camera_monitor" isVisible={isVisibleShowModal} setIsVisible={(flag) => setIsVisibleShowModal(flag)}></CommonModal>
                    <CommonModal index="0" isVisible={isVisibleShowModal} setIsVisible={(flag) => setIsVisibleShowModal(flag)}></CommonModal>
                    <View style={portrait.smartHomeTitle}>
                        <DateBar flagButton={true} handleClick={(flag) => setIsBottomModal(flag)}></DateBar>
                        <Text style={portrait.mainTitle}>Living Room</Text>
                        <Text style={portrait.subTitle}>Control your house</Text>
                    </View>
                    <View style={orientation === 'LANDSCAPE' && { flexDirection: 'row'}}>
                        <View style={orientationStyle.controlContent}>
                            <View style={orientationStyle.switchContent}>
                                <View style={orientationStyle.switch}>
                                    <ActionButton name={ACTION_TURN_ON} style={orientationStyle[ACTION_TURN_ON]} onClick={handleClick} />
                                    <ActionButton name={ACTION_LAMP_STATUS} style={orientationStyle[ACTION_LAMP_STATUS]} />
                                    <ActionButton name={ACTION_TURN_OFF} style={orientationStyle[ACTION_TURN_OFF]} onClick={handleClick} />
                                </View>
                                {orientation === 'PORTRAIT' && <View style={{ flex: 1 }}></View>}
                                <View style={orientation === 'PORTRAIT' ? portrait.switch : landscape.switch}>
                                    {/* <ActionButton name={ACTION_ARROW_UP} style={styles[ACTION_ARROW_UP]} onClick={handleClick} />
                                    <ActionButton name={ACTION_SHUTTER_STATUS} style={styles[ACTION_SHUTTER_STATUS]} />
                                    <ActionButton name={ACTION_ARROW_DOWN} style={styles[ACTION_ARROW_DOWN]} onClick={handleClick} /> */}
                                    
                                    <Image source={UPARROW} style={{ width: 29, height: 16.52, marginBottom: 47.48 }} ></Image>
                                    <Image source={BLINDS_WHITE} style={{ width: 34, height: 34, marginBottom: 47.48 }} ></Image>
                                    <Image source={DOWNARROW} style={{ width: 29, height: 16.52 }}></Image>
                                </View>     
                            </View>
                            {orientation === 'PORTRAIT' && <View style={{ flex: 1 }}></View>}
                            <ImageBackground source={STAIRE} resizeMode="cover" imageStyle={orientation === 'LANDSCAPE' && { borderRadius: 16, width: 209, height: 287, marginLeft: 27 }}>
                                <View style={orientationStyle.infoContent}>
                                    <View style={orientationStyle.info}>
                                        <Image source={NUMBER08}></Image>
                                        <Text style={orientationStyle.infoTitle}>Lights On</Text>
                                    </View>
                                    <View style={orientationStyle.info}>
                                        <Image source={NUMBER69} style={{ width: 62, height: 29 }}></Image>
                                        <Text style={orientationStyle.infoTitle}>Currently</Text>
                                    </View>
                                </View>
                            </ImageBackground>
                        </View>
                        <View style={landscape.favoirteList}>
                            <View style={portrait.favoriteRooms}>
                                <View style={portrait.favoriteTilte}>
                                    <Text style={orientationStyle.favoriteText}>Favorite Room</Text>
                                    <Pressable onPress={() => navigation.navigate(ROOMS)}>
                                        <Text style={orientationStyle.favoriteText}><Text style={{ color: '#F1580C' }}>See all</Text></Text>
                                    </Pressable>        
                                </View>
                                <View style={portrait.roomItems}>
                                    {FAVORITE_ROOMS_DATA?.slice(0, count).map(( data, index ) => {
                                        return (
                                            <FavoriteRoom key={index} {...{ room: data.room, imgUrl: data.imgUrl, bgColor: data.bgColor, textColor: data.textColor}}></FavoriteRoom>
                                        );
                                    })}
                                </View> 
                            </View>
                        </View>
                    </View>
                    <View style={orientation === 'LANDSCAPE' && { flexDirection: 'row'}}>
                        <View style={orientation === 'LANDSCAPE' && { flex: 6 }}>
                            <View style={portrait.favoriteCategory}>
                                <View style={portrait.favoriteTilte}>
                                <Text style={portrait.favoriteText}>Shutter/Blind</Text>
                                </View>
                                {SHUTTER_BLINDS_DATA !== undefined && <CheckBoxButton flagButton={false}
                                                                                title={SHUTTER_BLINDS_DATA[0].title} 
                                                                                bottomTitle={SHUTTER_BLINDS_DATA[0].percentValue + "%"} 
                                                                                imgMainUrl={SHUTTER_BLINDS_DATA[0].imgMainUrl} 
                                                                                imgCenterUrl={SHUTTER_BLINDS_DATA[0].imgCenterUrl}></CheckBoxButton>}
                            </View>
                            <View style={portrait.favoriteCategory}>
                                <View style={portrait.favoriteTilte}>
                                    <Text style={portrait.favoriteText}>Climate</Text>
                                </View>
                                <CheckBoxButton flagButton={true}
                                            title="Climate" 
                                            imgMainUrl={number24Img}
                                            textBottom="Temp"></CheckBoxButton>
                            </View>
                            <View style={portrait.favoriteCategory}>
                                <View style={portrait.favoriteTilte}>
                                <Text style={portrait.favoriteText}>Camera/Monitor</Text>
                                </View>
                                <ToggleButton title="On/Off Switch" 
                                            imgMainUrl={filmImg}
                                            flagButton="on/off"
                                            flagSlider={false}
                                            onShowModal={onShowModal}>
                                </ToggleButton>
                            </View>
                            <View style={portrait.favoriteCategory}>
                                <View style={portrait.favoriteTilte}>
                                <Text style={portrait.favoriteText}>Access</Text>
                                </View>
                                <ToggleButton title="On/Off Switch" 
                                            imgMainUrl={doorImg}
                                            flagButton="on/off"
                                            flagSlider={false}>
                                </ToggleButton>
                            </View>
                        </View>
                        <View style={orientation === 'LANDSCAPE' && { flex: 6 }}>
                        <View style={{...portrait.favoriteCategory}}>
                            <View style={portrait.favoriteTilte}>
                                <Text style={portrait.favoriteText}>Lights</Text>
                            </View>
                            <ToggleButton title="On/Off Switch" 
                                        imgMainUrl={LAMP_WHITE}
                                        flagButton="on/off"
                                        flagSlider={false}
                                        {...{ navigation, path: ROOMS }}></ToggleButton>
                            <ToggleButton title="Dimmer01" 
                                        imgMainUrl={dimmerImg}
                                        flagButton="on/off"
                                        flagProgressBar={true}
                                        onShowModal={onShowModal}>
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
                                        bottomTitle="30"
                                        flagProgressBar={true}
                                        >
                            </ToggleButton>    
                        </View> 
                        </View> 
                    </View> 
                </ScrollView>
            </Layout>
        </SafeAreaView>
    )
};

export default RoomScreen;
