import React from 'react';
import { View, StyleSheet, ScrollView, Text, Image, ImageBackground, Pressable, SafeAreaView } from 'react-native';
import Layout from '../components/Layout/Layout';
import DateBar from '../components/Common/DateBar';
import FavoriteRoom from '../components/Common/FavoriteRoom';
import FavoriteCategory from '../components/Common/FavoriteCategory';
import { useOrientation } from '../hooks/useOrientation';
import { FAVORITE_ROOMS_DATA, 
        FAVORITE_CATEGORY_DATA, ROOMS, CATEGORIES,
        UPARROW, DOWNARROW, ELLIPSE, RECT, NUMBER08, NUMBER69, LAMP_WHITE, BLINDS_WHITE, TIMER, STAIRE } from "../Constant";

const SmartHomeScreen = ({ navigation }) => {

    const orientation = useOrientation();

    let count = orientation === 'PORTRAIT' ? 3 : 5;

    return (
        <SafeAreaView style={portrait.containerScroll}>
            <Layout header={true}>
                <ScrollView style={portrait.scrollView}>
                    <View style={portrait.smartHomeTitle}>
                        <DateBar flagButton={true}></DateBar>
                        <Text style={portrait.mainTitle}>Smart Home</Text>
                        <Text style={portrait.subTitle}>You can control all your Smart Home{orientation === 'PORTRAIT' && "\n"}and enjoy Smart life</Text>
                    </View>
                    <View>
                        <View style={orientation === 'PORTRAIT' ? portrait.controlContent : landscape.controlContent}>
                            <View style={orientation === 'PORTRAIT' ? portrait.switchContent : landscape.switchContent}>
                                <View style={portrait.switch}>
                                    <Image source={RECT} style={{ width: 5.24, height: 30, marginBottom: 33.38 }} ></Image>
                                    <Image source={LAMP_WHITE} style={{ width: 34, height: 34, marginBottom: 33.38 }} ></Image>
                                    <Image source={ELLIPSE} style={{ width: 34, height: 34 }}></Image>
                                </View>
                                <View style={{ flex: 1 }}></View>
                                <View style={portrait.switch}>
                                    <Image source={UPARROW} style={{ width: 29, height: 16.52, marginBottom: 47.48 }} ></Image>
                                    <Image source={BLINDS_WHITE} style={{ width: 34, height: 34, marginBottom: 47.48 }} ></Image>
                                    <Image source={DOWNARROW} style={{ width: 29, height: 16.52 }}></Image>
                                </View>     
                            </View>
                            <View style={{ flex: 1 }}></View>
                            <ImageBackground source={STAIRE} resizeMode="cover">
                                <View style={portrait.infoContent}>
                                    <View style={portrait.info}>
                                    <Image source={NUMBER08}></Image>
                                    <Text style={portrait.infoTitle}>Lights On</Text>
                                    </View>
                                    <View style={portrait.info}>
                                        <Image source={NUMBER69} style={{ width: 62, height: 29 }}></Image>
                                        <Text style={portrait.infoTitle}>Currently</Text>
                                    </View>
                                </View>
                            </ImageBackground>
                            {orientation === 'LANDSCAPE' && <View style={{flex: 6}}></View>}
                        </View>
                        <View>
                            <View style={portrait.favoriteRooms}>
                                <View style={portrait.favoriteTilte}>
                                    <Text style={portrait.favoriteText}>Favorite Room</Text>
                                    <Pressable onPress={() => navigation.navigate(ROOMS)}>
                                        <Text style={{...portrait.favoriteText, color: '#F1580C'}}>See all</Text>
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
                                    <Text style={portrait.favoriteText}>Favorite Category</Text>
                                    <Pressable onPress={() => navigation.navigate(CATEGORIES)}>
                                        <Text style={portrait.favoriteText}><Text style={{ color: '#F1580C' }}>See all</Text></Text>
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
        padding: 20
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
    controlContent: {
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    switchContent: {
        flex: 4,
        justifyContent: 'flex-start',
        flexDirection: 'row',
        alignItems: 'center', 
    },
});

export default SmartHomeScreen;

