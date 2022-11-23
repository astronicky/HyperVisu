import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Text, Image, ImageBackground, Pressable, SafeAreaView } from 'react-native';
import Layout from '../components/Layout/Layout';
import FavoriteCategory from '../components/Common/FavoriteCategory';
import CheckBoxButton from '../components/Common/CheckBoxButton';
import ToggleButton from '../components/Common/ToggleButton';
import { STAIRE, NUMBER08, NUMBER69, RECT, LAMP_WHITE, 
        ELLIPSE, UPARROW, DOWNARROW, BLINDS_WHITE, 
        DIMMER, 
        ROOMS, CATEGORIES, FAVORITE_DATA, SHUTTER_BLINDS_DATA } from "../Constant";

const rectImgBigOne = require('../assets/images/room/rectangle-big-1.png');
const rectImgBigTwo = require('../assets/images/room/rectangle-big-2.png');
const dimmerImg = require('../assets/images/room/dimmer.png');
const ellipseBigImg = require('../assets/images/room/ellispe-big.png');
const number24Img = require('../assets/images/room/24.png');
const plusImg = require('../assets/images/room/plus.png');
const minusImg = require('../assets/images/room/minus.png');
const filmImg = require('../assets/images/room/film.png');
const doorImg = require('../assets/images/room/door.png');

const RoomScreen = ({ navigation }) => {

    const [sliderValue, setSliderValue] = useState();

    // const changeSliderValue = (value) => {       
    //     setSliderValue(value);
    //     console("parent value", sliderValue);
    // };
    
    return (
        <SafeAreaView style={styles.containerScroll}>
            <Layout header={true}>
                <ScrollView style={styles.scrollView}>
                <View style={styles.smartHomeTitle}>
                    <View style={styles.topTitle}>
                    <Text style={styles.dateTitle}>Tues, 27 Sept 2022 | 10:59 Pm</Text>
                    <View style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <Image source={require('../assets/images/ellipse.png')} style={{ width: 30, height: 30 }}></Image>
                        <Text style={{ color: 'white', fontSize: 20, fontWeight: '500', position: 'absolute' }}>+</Text>
                    </View>  
                    </View>
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
                    {SHUTTER_BLINDS_DATA !== undefined && <CheckBoxButton title={SHUTTER_BLINDS_DATA[0].title} 
                                                                    bottomTitle={SHUTTER_BLINDS_DATA[0].percentValue + "%"} 
                                                                    imgMainUrl={SHUTTER_BLINDS_DATA[0].imgMainUrl} 
                                                                    imgLeftUrl={SHUTTER_BLINDS_DATA[0].imgLeftUrl} 
                                                                    imgCenterUrl={SHUTTER_BLINDS_DATA[0].imgCenterUrl}
                                                                    imgRightUrl={SHUTTER_BLINDS_DATA[0].imgRightUrl}
                                                                    {...{ navigation, path: ROOMS }}></CheckBoxButton>}
                </View>
                <View style={styles.favoriteCategory}>
                    <View style={styles.favoriteTilte}>
                    <Text style={styles.favoriteText}>Lights</Text>
                    </View>
                    <ToggleButton title="On/Off Switch" 
                                imgMainUrl={LAMP_WHITE}
                                flagButton="on/off"
                                flagSlider={false}
                                // changeSliderValue={changeSliderValue}
                                {...{ navigation, path: ROOMS }}></ToggleButton>
                    <ToggleButton title="Dimmer01" 
                                imgMainUrl={dimmerImg}
                                flagButton="on/off"
                                bottomTitle="70"
                                flagSlider={true}
                                {...{ navigation, path: ROOMS }}>
                    </ToggleButton>
                    <ToggleButton title="Push Button" 
                                imgMainUrl={dimmerImg}
                                flagButton="push"
                                flagSlider={false}
                                {...{ navigation, path: ROOMS }}></ToggleButton>
                    <CheckBoxButton title="Status Display"
                                bottomTitle="On" 
                                imgMainUrl={SHUTTER_BLINDS_DATA[0].imgMainUrl}
                                {...{ navigation, path: ROOMS }}></CheckBoxButton>
                    <ToggleButton title="Tunable White Dimmer" 
                                imgMainUrl={dimmerImg}
                                flagButton="on/off"
                                bottomTitle="70"
                                flagSlider={true}
                                {...{ navigation, path: ROOMS }}>
                    </ToggleButton>
                    <ToggleButton title="Analogue Value Input" 
                                imgMainUrl={dimmerImg}
                                bottomTitle="70"
                                flagSlider={true}
                                {...{ navigation, path: ROOMS }}>
                    </ToggleButton>
                    <ToggleButton title="Analogue Value Display" 
                                imgMainUrl={dimmerImg}
                                bottomTitle="70"
                                flagSlider={true}
                                {...{ navigation, path: ROOMS }}>
                    </ToggleButton>
                    <CheckBoxButton title="Climate" 
                                imgMainUrl={number24Img} 
                                imgLeftUrl={plusImg}
                                imgRightUrl={minusImg}
                                textBottom="Temp"
                                {...{ navigation, path: ROOMS }}></CheckBoxButton>
                </View>
                <View style={styles.favoriteCategory}>
                    <View style={styles.favoriteTilte}>
                    <Text style={styles.favoriteText}>Camera/Monitor</Text>
                    </View>
                    <ToggleButton title="On/Off Switch" 
                                imgMainUrl={filmImg}
                                flagButton="on/off"
                                flagSlider={false}
                                {...{ navigation, path: ROOMS }}>
                    </ToggleButton>
                </View>
                <View style={styles.favoriteCategory}>
                    <View style={styles.favoriteTilte}>
                    <Text style={styles.favoriteText}>Access</Text>
                    </View>
                    <ToggleButton title="On/Off Switch" 
                                imgMainUrl={doorImg}
                                flagButton="on/off"
                                flagSlider={false}
                                {...{ navigation, path: ROOMS }}>
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
    container: {
        flex: 1,
        backgroundColor: '#000000'
    },
    smartHomeTitle: {
        padding: 27,
    },
    dateTitle: {
        color: 'white',
        fontWeight: '400',
        fontSize: 14
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
        display: 'flex',  
        justifyContent: 'flex-start',
        flexDirection: 'row',
        alignItems: 'center', 
    },
    switch: {
        flex: 5,
        display: 'flex',
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
        display: 'flex',
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
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    favoriteCategory: {
        paddingLeft: 27,
        paddingRight: 27,
        paddingBottom: 27
    },
    favoriteTilte: {
        display: 'flex',
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
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
}) ;

export default RoomScreen;