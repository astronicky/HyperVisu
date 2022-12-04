import React, { useState, useEffect } from 'react';
import { View, ScrollView, Text, Image, ImageBackground, Pressable, SafeAreaView, Modal } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Layout from '../components/Layout/Layout';
import DateBar from '../components/Common/DateBar';
import FavoriteCategory from '../components/Common/FavoriteCategory';
import CircleToggleButton from '../components/Common/CircleToggleButton';
import PushButton from '../components/Widgets/PushButton';
import CameraModal from '../components/Common/CameraModal';
import MainButton from '../components/Common/MainButton';
import ActionButton from '../components/Common/ActionButton';
import FavoriteRoom from '../components/Common/FavoriteRoom';
import ScheduleItem from '../components/Common/ScheduleItem';
import Temperature from '../components/Widgets/Temperature';
import ShutterBlind from '../components/Widgets/ShutterBlind';
import Dimmer from '../components/Widgets/Dimmer';
import OnOffSwitch from '../components/Widgets/OnOffSwitch';
import DigitalInput from '../components/Widgets/DigitalInput';
import TunableWhiteDimmer from '../components/Widgets/TunableWhiteDimmer';
import AnalogOutput from '../components/Widgets/AnalogOutput';
import AnalogInput from '../components/Widgets/AnalogInput';
import SettingItem from '../components/Common/SettingItem';
import { portrait, landscape } from '../assets/styles/RoomScreen/index';
import { ACTION_TURN_ON, ACTION_TURN_OFF, ACTION_LAMP_STATUS, FAVORITE_ROOMS_DATA,
        STAIRE, NUMBER08, NUMBER69, UPARROW, DOWNARROW, BLINDS_WHITE, ROOM,
        ROOMS, CATEGORIES, FAVORITE_DATA, CLOSE, DONE } from "../Constant";

import { useOrientation } from '../hooks/useOrientation';

const RoomScreen = ({ navigation }) => {

    const orientation = useOrientation();
    const orientationStyle = orientation === 'PORTRAIT' ? portrait : landscape;

    let count = orientation === 'PORTRAIT' ? 3 : 5;

    const [isVisibleShowModal, setIsVisibleShowModal] = useState(false);
    const [isBottomModal, setIsBottomModal] = useState(false);
    const [newSenceModalVisible,setNewSenceModalVisible] = useState(false);
    const [scheduleModalVisible, setScheduleModalVisible] = useState(false);

    const onShowModal = (index, isVisibleModal) => {
        setIsVisibleShowModal(isVisibleModal);
    };

    useEffect(() => { 

    }, [isVisibleShowModal, isBottomModal, scheduleModalVisible]);

    const handleClick = () => {

    };

    const [roomName, setRoomName] = useState();
    const roomNameLoad = async () => {
        try {
            const savedRoomName = await AsyncStorage.getItem("room_name");
            setRoomName(savedRoomName);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            roomNameLoad();
        });

        return unsubscribe;
    }, [navigation]);
    
    
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
                    <Modal  
                        animationType="fade"
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
                                        <SettingItem title="Test this scene"></SettingItem>
                                        <SettingItem title="Add Devices"></SettingItem>
                                        <CircleToggleButton title="Automatic" onShowModal={(flag) => setScheduleModalVisible(flag)}></CircleToggleButton>
                                        <CircleToggleButton title="Show Favourite" onShowModal={(flag) => setScheduleModalVisible(flag)}></CircleToggleButton>                                                
                                    </View>      
                                </View>
                                <MainButton style={orientationStyle.newSenceButton} title={DONE} navigation={navigation} path={ROOMS}></MainButton>
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
                                <ScheduleItem title="Schedule 1" setDate="Daily" setTime="6:00 AM"></ScheduleItem>
                                <ScheduleItem title="Schedule 2" setDate="Mon, Tue, Fri" setTime="10:30 AM"></ScheduleItem>
                                <ScheduleItem title="Schedule 3" setDate="Sat" setTime="9:00 PM"></ScheduleItem>
                            </View>        
                    </Modal>
                    <CameraModal isVisible={isVisibleShowModal} setIsVisible={(flag) => setIsVisibleShowModal(flag)}></CameraModal>
                    <View style={portrait.smartHomeTitle}>
                        <DateBar flagButton={true} handleClick={(flag) => setIsBottomModal(flag)}></DateBar>
                        <Text style={portrait.mainTitle}>{roomName}</Text>
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
                                <ShutterBlind></ShutterBlind>
                            </View>
                            <View style={portrait.favoriteCategory}>
                                <View style={portrait.favoriteTilte}>
                                    <Text style={portrait.favoriteText}>Climate</Text>
                                </View>
                                <Temperature caption="Climate" navigation={navigation}></Temperature>
                            </View>
                            <View style={portrait.favoriteCategory}>
                                <View style={portrait.favoriteTilte}>
                                    <Text style={portrait.favoriteText}>Camera/Monitor</Text>
                                </View>
                                <OnOffSwitch></OnOffSwitch>
                            </View>
                            <View style={portrait.favoriteCategory}>
                                <View style={portrait.favoriteTilte}>
                                    <Text style={portrait.favoriteText}>Access</Text>
                                </View>
                                <OnOffSwitch></OnOffSwitch>
                            </View>
                        </View>
                        <View style={orientation === 'LANDSCAPE' && { flex: 6 }}>
                        <View style={{...portrait.favoriteCategory}}>
                            <View style={portrait.favoriteTilte}>
                                <Text style={portrait.favoriteText}>Lights</Text>
                            </View>
                            <OnOffSwitch></OnOffSwitch>
                            <Dimmer></Dimmer>
                            <PushButton></PushButton>
                            <DigitalInput></DigitalInput>
                            <TunableWhiteDimmer></TunableWhiteDimmer>
                            <AnalogOutput></AnalogOutput>
                            <AnalogInput></AnalogInput>
                        </View> 
                        </View> 
                    </View> 
                </ScrollView>
            </Layout>
        </SafeAreaView>
    )
};

export default RoomScreen;
