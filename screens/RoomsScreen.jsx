import React from 'react';
import { View, StyleSheet, ScrollView, Text, SafeAreaView, Pressable } from 'react-native';
import Layout from '../components/Layout/Layout';
import FavoriteRoom from '../components/Common/FavoriteRoom';
import ImageButton from '../components/Common/ImageButton';
import { ROOM, ROOMS_DATA, CATEGORIES, FAVORITE_ROOMS_DATA } from "../Constant";

const RoomsScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.containerScroll}>
        <Layout header={true}>
            <ScrollView style={styles.scrollView}>
                <View style={styles.roomsContainer}>
                    <View style={styles.topTitle}>
                    <Text style={styles.dateTitle}>Tues, 27 Sept 2022 | 10:59 Pm</Text>
                    {/* <View style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <Image source={require('../assets/images/plusbackground.png')} style={{ width: 30, height: 30 }}></Image>
                        <Text style={{ color: 'white', fontSize: 20, fontWeight: '500', position: 'absolute' }}>+</Text>
                    </View>   */}
                    </View>
                    <Text style={styles.mainTitle}>Rooms</Text>
                    <Text style={styles.subTitle}>You can control all your Smart Home{"\n"}and enjoy Smart life</Text>
                </View>
                <View style={styles.favoriteRooms}>
                    <View style={styles.favoriteTilte}>
                        <Text style={styles.favoriteText}>Favorite Room</Text>
                        <Pressable onPress={() => navigation.navigate(CATEGORIES)}>
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
                <View style={styles.roomButtons}>
                    <View style={styles.favoriteTilte}>
                        <Text style={styles.favoriteText}>All</Text>
                        <Text style={{...styles.favoriteText, color: '#F1580C'}}>See all</Text>
                    </View>
                    {ROOMS_DATA?.map((data, index) => {
                    return (
                        <ImageButton key={index} {...{ title: data.room, imgUrl: data.imgUrl, navigation, path: ROOM }}></ImageButton>
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
    roomsContainer: {
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
    },
    roomButtons: {
        padding: 25,
        paddingBottom: 0
    }
}) ;

export default RoomsScreen;

