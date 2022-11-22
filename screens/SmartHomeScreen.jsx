import React from 'react';
import { View, StyleSheet, ScrollView, Text, Image, ImageBackground, Pressable, SafeAreaView } from 'react-native';
import Layout from '../components/Layout/Layout';
import FavoriteRoom from '../components/Common/FavoriteRoom';
import FavoriteCategory from '../components/Common/FavoriteCategory';
import Icon from 'react-native-vector-icons/FontAwesome';
import { FAVORITE_ROOMS_DATA, 
        FAVORITE_CATEGORY_DATA, ROOMS, CATEGORIES,
        UPARROW, DOWNARROW, ELLIPSE, RECT, NUMBER08, NUMBER69, LAMP_WHITE, BLINDS_WHITE, TIMER, STAIRE } from "../Constant";

const SmartHomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.containerScroll}>
        <Layout header={true}>
            <ScrollView style={styles.scrollView}>
            <View style={styles.smartHomeTitle}>
                <View style={styles.topTitle}>
                    <Text style={styles.dateTitle}>Tues, 27 Sept 2022 | 10:59 Pm</Text>
                    {/* <Icon name='plus' size={12} color="#FFFFFF" style={{ backgroundColor: '#2F2F31'}} /> */}
                    <View style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <Image source={require('../assets/images/ellipse.png')} style={{ width: 30, height: 30 }}></Image>
                        <Text style={{ color: 'white', fontSize: 20, fontWeight: '400', position: 'absolute' }}>+</Text>
                    </View>  
                </View>
                <Text style={styles.mainTitle}>Smart Home</Text>
                <Text style={styles.subTitle}>You can control all your Smart Home{"\n"}and enjoy Smart life</Text>
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
                    {/* <Icon name='angle-up' size={50} color="#FFFFFF" />
                    <Icon name='angle-down' size={50} color="#FFFFFF" /> */}
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
            <View style={styles.favoriteRooms}>
                <View style={styles.favoriteTilte}>
                <Text style={styles.favoriteText}>Favorite Room</Text>
                <Pressable onPress={() => navigation.navigate(ROOMS)}>
                    <Text style={{...styles.favoriteText, color: '#F1580C'}}>See all</Text>
                </Pressable>        
                </View>
                <View style={styles.roomItems}>
                {FAVORITE_ROOMS_DATA?.map(( data, index ) => {
                    return (
                        <FavoriteRoom key={index} {...{ room: data.room, imgUrl: data.imgUrl, bgColor: data.bgColor, textColor: data.textColor}}></FavoriteRoom>
                    );
                })}
                </View> 
            </View>
            <View style={styles.favoriteRooms}>
                <View style={styles.favoriteTilte}>
                <Text style={styles.favoriteText}>Favorite Category</Text>
                <Pressable onPress={() => navigation.navigate(CATEGORIES)}>
                    <Text style={styles.favoriteText}><Text style={{ color: '#F1580C' }}>See all</Text></Text>
                </Pressable>
                </View>
                <View style={styles.roomItems}>
                    {FAVORITE_CATEGORY_DATA?.map(( data, index ) => {
                        return (
                        <FavoriteCategory key={index} 
                            {...{ title: data.title, imgMainUrl: data.imgMainUrl, bgColor: data.bgColor, textColor: data.textColor, imgUpUrl: data.imgUpUrl, imgDownUrl: data.imgDownUrl }}></FavoriteCategory>
                        );
                    })}
                </View> 
            </View> 
            </ScrollView>
        </Layout>
    </SafeAreaView>
)};

const styles = StyleSheet.create({
    containerScroll: {
        flex: 1,
        backgroundColor: '#000000'
    },
    scrollView: {
        width: '100%'
    },
    smartHomeTitle: {
        padding: 25,
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
    favoriteRooms: {
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

export default SmartHomeScreen;

