import React, { useEffect } from 'react';
import { View, StyleSheet, ScrollView, Text, Image, ImageBackground, Pressable, SafeAreaView } from 'react-native';
import * as ScreenOrientation from 'expo-screen-orientation';
import Layout from '../components/Layout/Layout';
import DateBar from '../components/Common/DateBar';
import FavoriteRoom from '../components/Common/FavoriteRoom';
import FavoriteCategory from '../components/Common/FavoriteCategory';
import ActionButton from '../components/Common/ActionButton';
import { useOrientation } from '../hooks/useOrientation';
import { ACTION_TURN_ON, ACTION_TURN_OFF, ACTION_LAMP_STATUS, ACTION_SHUTTER_STATUS, ACTION_ARROW_DOWN, ACTION_ARROW_UP,
        FAVORITE_ROOMS_DATA, 
        FAVORITE_CATEGORY_DATA, ROOMS, CATEGORIES,
        UPARROW, DOWNARROW, NUMBER08, NUMBER69, BLINDS_WHITE, STAIRE } from "../Constant";

const SmartHomeScreen = ({ navigation }) => {

    async function changeScreenOrientation() {
        await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.ALL);
    }; 

    useEffect(() => {
        changeScreenOrientation();
    });

    const orientation = useOrientation();
    const orientationStyle = orientation === 'PORTRAIT' ? portrait : landscape;
    let count = orientation === 'PORTRAIT' ? 3 : 5;

    const handleClick = () => {

    };

    return (
        <SafeAreaView style={portrait.containerScroll}>
            <Layout header={true}>
                <ScrollView style={portrait.scrollView}>
                    <View style={orientationStyle.smartHomeTitle}>
                        <DateBar flagButton={true}></DateBar>
                        <Text style={orientationStyle.mainTitle}>Smart Home</Text>
                        <Text style={orientationStyle.subTitle}>You can control all your Smart Home{orientation === 'PORTRAIT' && "\n"}and enjoy Smart life</Text>
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
                                <View style={orientationStyle.switch}>
                                    {/* <ActionButton name={ACTION_ARROW_UP} style={styles[ACTION_ARROW_UP]} onClick={handleClick} />
                                    <ActionButton name={ACTION_SHUTTER_STATUS} style={styles[ACTION_SHUTTER_STATUS]} />
                                    <ActionButton name={ACTION_ARROW_DOWN} style={styles[ACTION_ARROW_DOWN]} onClick={handleClick} /> */}
                                    
                                    <Image source={UPARROW} style={{ width: 29, height: 16.52, marginBottom: 50 }} ></Image>
                                    <Image source={BLINDS_WHITE} style={{ width: 34, height: 34, marginBottom: 50 }} ></Image>
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
                            <View style={portrait.favoriteRooms}>
                                <View style={portrait.favoriteTilte}>
                                    <Text style={orientationStyle.favoriteText}>Favorite Category</Text>
                                    <Pressable onPress={() => navigation.navigate(CATEGORIES)}>
                                        <Text style={orientationStyle.favoriteText}><Text style={{ color: '#F1580C' }}>See all</Text></Text>
                                    </Pressable>
                                </View>
                                <View style={portrait.roomItems}>
                                    {FAVORITE_CATEGORY_DATA?.slice(0, count).map(( data, index ) => {
                                        return (
                                        <FavoriteCategory key={index} 
                                            {...{ title: data.title, imgMainUrl: data.imgMainUrl, bgColor: data.bgColor, textColor: data.textColor, imgUpUrl: data.imgUpUrl, imgDownUrl: data.imgDownUrl }}></FavoriteCategory>
                                        );
                                    })}
                                </View> 
                            </View> 
                        </View>
                    </View>
                </ScrollView>
            </Layout>
        </SafeAreaView>
    )
};

const portrait = StyleSheet.create({
    containerScroll: {
        flex: 1,
        backgroundColor: '#000000'
    },
    scrollView: {
        width: '100%'
    },
    smartHomeTitle: {
        padding: 20,
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
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    switchContent: {
        flex: 6,
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
        padding: 20
    },
    [ACTION_TURN_ON]: {
        width: 5.24,
        height: 30,
        marginBottom: 36
    },
    [ACTION_TURN_OFF]: {
        width: 30,
        height: 30
    },
    [ACTION_LAMP_STATUS]: {
        width: 34,
        height: 34,
        marginBottom: 36
    },
    [ACTION_SHUTTER_STATUS]: {
        width: 34,
        height: 34,
    },
    infoContent: {
        flex: 5,
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
    favoriteRooms: {
        padding: 20,
        paddingTop: 0
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
    }
}) ;

const landscape = StyleSheet.create({
    smartHomeTitle: {
        padding: 20
    },
    mainTitle: {
        color: 'white',
        fontWeight: '700',
        fontSize: 34,
        lineHeight: 41,
        letterSpacing: 0.41
    },
    subTitle: {
        marginTop: 5,
        color: 'white',
        fontWeight: '600',
        fontSize: 20,
        lineHeight: 22,
        letterSpacing: -0.41
    },
    controlContent: {
        flex: 6,
        padding: 20,
        paddingTop: 0,
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    switchContent: {
        flexDirection: 'row',
        justifyContent: 'flex-start',   
        alignItems: 'flex-start'
    },
    switch: {
        width: 103,
        height: 285,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F1580C',
        borderRadius: 16,
        padding: 20,
        marginRight: 15
    },
    [ACTION_TURN_ON]: {
        width: 7.5,
        height: 42.8,
        marginBottom: 47
    },
    [ACTION_TURN_OFF]: {
        width: 42.8,
        height: 42.8,    
    },
    [ACTION_LAMP_STATUS]: {
        width: 48.5,
        height: 48.5,
        marginBottom: 47
    },
    [ACTION_SHUTTER_STATUS]: {
        width: 48.5,
        height: 48.5,
    },
    infoContent: {
        justifyContent: 'space-between',
        alignItems: 'center',
        width: 209, 
        height: 287,
        paddingTop: 27,
        paddingBottom: 51
    },
    infoTitle: {
        marginTop: 20,
        color: 'white',
        fontWeight: '600',
        fontSize: 20,
        lineHeight: 20,
        letterSpacing: -0.24
    }, 
    info: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    favoirteList: {
        flex: 6
    },
    favoriteText: {
        color: 'white',
        fontSize: 22,
        fontWeight: '400',
        lineHeight: 22,
        letterSpacing: -0.41
    },
});

export default SmartHomeScreen;

