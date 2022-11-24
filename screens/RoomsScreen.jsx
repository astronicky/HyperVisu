import React from 'react';
import { View, StyleSheet, ScrollView, Text, SafeAreaView, Pressable } from 'react-native';
import Layout from '../components/Layout/Layout';
import DateBar from '../components/Common/DateBar';
import FavoriteRoom from '../components/Common/FavoriteRoom';
import ImageButton from '../components/Common/ImageButton';
import { ROOM, ROOMS_DATA, CATEGORIES, FAVORITE_ROOMS_DATA } from "../Constant";

const RoomsScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.containerScroll}>
        <Layout header={true}>
            <ScrollView style={styles.scrollView}>
                <View style={styles.roomsContainer}>
                    <DateBar flagButton={false}></DateBar>
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

